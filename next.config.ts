import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/i18n.ts');

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default withNextIntl(nextConfig);
