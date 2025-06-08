# ImageSlider UI Guide

## Layout
- **Container**: 100% width, 80vh height, relative position
- **Images**: Flex strip, 100vw per slide, 90% max size, centered
- **Navigation**: 40px circular buttons, 20px from edges
- **Counter**: Bottom center, shows "current / total"

## Styling
- **Buttons**: Semi-transparent white (80% opacity), #333 text
- **States**: 70% default, 100% hover, 30% disabled, 0% during drag
- **Colors**: #333 (buttons), #666 (counter/loading)
- **Transitions**: 0.3s ease for all animations

## Interactions
- **Cursors**: Grab (default), grabbing (drag), pointer (buttons)
- **Touch**: Full area enabled, 15% drag threshold
- **Keyboard**: Arrow keys for navigation
- **Loading**: Centered message when no images

## Responsive Design
- **Width**: Uses window.innerWidth, recalculates on resize
- **Height**: Fixed 80vh
- **Touch**: Mobile-first interaction design

## Accessibility
- **Alt Text**: Descriptive image labels with numbers
- **Focus**: Standard browser focus indicators
- **Loading**: Priority for visible, lazy for others

## Performance
- **Transforms**: Hardware-accelerated translateX
- **Images**: Next.js optimization with priority/lazy loading
- **Animation**: will-change: transform for smooth transitions

## Infinite Loop
- **Extended Array**: Duplicates 2 images at each end
- **Offset**: -2 × imageWidth for buffer positioning
- **Seamless**: No visual breaks at boundaries