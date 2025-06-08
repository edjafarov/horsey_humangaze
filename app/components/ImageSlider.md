# ImageSlider Component

Responsive touch-enabled image slider with infinite looping and smooth animations.

## Props
- `images?: string[]` - Optional image paths array (defaults to portfolio images)

## Features
- **Navigation**: Arrow buttons, keyboard (←→), touch/mouse drag
- **Infinite Loop**: Seamless transitions using extended array
- **Responsive**: 100% width, 80vh height, adapts to window resize
- **Touch Support**: 15% drag threshold for slide change
- **Loading**: Priority loading for visible images, lazy for others

## Visual Elements
- Images: Centered, contained fit (90% max size)
- Buttons: Semi-transparent white circles (40px)
- Counter: "current / total" format at bottom
- Loading: Message when no images available

## Styling
- styled-components with TypeScript
- 0.3s ease-out transitions
- Grab/grabbing cursors during interaction
- Hover effects and opacity states
