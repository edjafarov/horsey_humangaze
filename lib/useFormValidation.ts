import { useState, useCallback, useEffect } from 'react';

export interface ValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | undefined;
}

export interface FieldValidation {
  [key: string]: ValidationRules;
}

export interface FormErrors {
  [key: string]: string;
}

export interface TouchedFields {
  [key: string]: boolean;
}

export const validators = {
  email: (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  
  phone: (value: string): boolean => {
    // Remove common formatting characters
    const cleanPhone = value.replace(/[\s\-\(\)\.]/g, '');
    // Check for valid phone number (7-15 digits, optional + at start)
    const phoneRegex = /^\+?\d{7,15}$/;
    return phoneRegex.test(cleanPhone);
  },
  
  germanPhone: (value: string): boolean => {
    const cleanPhone = value.replace(/[\s\-\(\)\.]/g, '');
    // German phone numbers: +49 or 0 followed by area code and number
    const germanPhoneRegex = /^(\+49|0)\d{9,14}$/;
    return germanPhoneRegex.test(cleanPhone);
  }
};

export function useFormValidation<T extends Record<string, string>>(
  initialValues: T,
  validationRules: FieldValidation
) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<TouchedFields>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback((name: string, value: string): string | undefined => {
    const rules = validationRules[name];
    if (!rules) return undefined;

    // Required validation
    if (rules.required && !value.trim()) {
      return 'This field is required';
    }

    // Min length validation
    if (rules.minLength && value.length < rules.minLength) {
      return `Must be at least ${rules.minLength} characters`;
    }

    // Max length validation
    if (rules.maxLength && value.length > rules.maxLength) {
      return `Must be no more than ${rules.maxLength} characters`;
    }

    // Pattern validation
    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Invalid format';
    }

    // Custom validation
    if (rules.custom) {
      return rules.custom(value);
    }

    return undefined;
  }, [validationRules]);

  // Validate all fields
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(fieldName => {
      const fieldValue = values[fieldName] || '';
      const error = validateField(fieldName, fieldValue);
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [values, validationRules, validateField]);

  // Handle field change
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  // Handle field blur (for showing validation errors)
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));

    // Validate on blur
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [validateField]);

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Get field props (for easier integration)
  const getFieldProps = useCallback((name: string) => ({
    name,
    value: values[name] || '',
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': touched[name] && !!errors[name],
    'aria-describedby': errors[name] ? `${name}-error` : undefined,
  }), [values, handleChange, handleBlur, touched, errors]);

  // Check if field has error and has been touched
  const getFieldError = useCallback((name: string): string | undefined => {
    return touched[name] ? errors[name] : undefined;
  }, [touched, errors]);

  // Real-time validation for specific fields
  useEffect(() => {
    const timeoutIds: { [key: string]: NodeJS.Timeout } = {};

    Object.keys(touched).forEach(fieldName => {
      if (touched[fieldName] && values[fieldName]) {
        // Debounce validation
        timeoutIds[fieldName] = setTimeout(() => {
          const error = validateField(fieldName, values[fieldName]);
          setErrors(prev => {
            if (error) {
              return { ...prev, [fieldName]: error };
            } else {
              const newErrors = { ...prev };
              delete newErrors[fieldName];
              return newErrors;
            }
          });
        }, 500);
      }
    });

    return () => {
      Object.values(timeoutIds).forEach(clearTimeout);
    };
  }, [values, touched, validateField]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    getFieldProps,
    getFieldError,
    setErrors,
    setValues,
  };
}