# ImageSlider Architecture

## Component Structure
- **Type**: React functional component with hooks
- **Dependencies**: React hooks, styled-components v6, Next.js Image
- **Runtime**: Client-side only ("use client" directive)
- **TypeScript**: Fully typed interfaces

## State Management
- **imageList**: Immutable array from props or defaults
- **currentIndex**: Active slide (0-based)
- **translateX**: CSS transform value for positioning
- **isDragging/isTransitioning**: Interaction states
- **startX/startTranslateX**: Drag tracking
- **imageWidth**: Viewport width cache

## Refs
- **containerRef/stripRef**: DOM references
- **currentXRef**: Drag position tracking

## Data Flow
1. **Input**: Props or default portfolio images
2. **Extended Array**: Adds 2 buffer images at each end
3. **Index Calc**: currentIndex → getTranslateXForIndex() → translateX
4. **Transform**: CSS translateX for positioning

## Event Handling
- **Input Types**: Mouse, touch, keyboard, window resize
- **Unified Handlers**: handleStart/Move/End for touch and mouse
- **Global Listeners**: Added during drag, cleaned up after
- **Keyboard**: Arrow keys for navigation

## Animation System
- **Transform**: Hardware-accelerated translateX
- **Conditional**: CSS transitions only when isTransitioning=true
- **Performance**: Direct manipulation during drag
- **Duration**: 0.3s ease-out

## Infinite Loop
- **Extended Array**: [last2, ...original, first2]
- **Base Offset**: -2 × imageWidth for buffer positioning
- **Seamless**: No visual breaks at boundaries

## Performance
- **Loading**: Priority for current/first, lazy for others
- **Rendering**: useCallback for memoized handlers, ref caching
- **Memory**: Proper event cleanup, Next.js image optimization

## Responsive Design
- **Fluid**: No breakpoints, fully responsive
- **Touch-First**: Mobile interactions prioritized
- **Resize**: Window listener updates imageWidth

## Error Handling
- **Empty Arrays**: Shows loading message
- **Missing Props**: Falls back to default images
- **Boundaries**: Modulo arithmetic for infinite loop

## Integration
- **Next.js**: App Router client component
- **styled-components**: TypeScript props, theme ready
- **Images**: Next.js Image optimization