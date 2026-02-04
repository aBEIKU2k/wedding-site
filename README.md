# Wedding Website

A modern, premium, and responsive single-page wedding website built with React, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Full-viewport height with countdown timer to February 26, 2026
- **Our Story**: Staggered timeline layout showcasing the couple's journey
- **Event Details**: Card-based layout with ceremony information, venue details, and dress code
- **Gift Registry**: Monetary gift options with one-click copy functionality for MoMo and Bank details
- **RSVP Form**: Minimalist form with validation and smooth animations
- **Sticky Navigation**: Smooth scroll navigation with active section highlighting
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices

## Tech Stack

- React 19
- Vite
- Tailwind CSS 3
- Framer Motion
- Google Fonts (Playfair Display & Inter)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Venue Address

Edit `src/components/EventDetails.jsx` and replace the `venueAddress` variable with your actual venue address.

### Update Background Images

Replace the Unsplash image URLs in `src/components/Hero.jsx` and `src/components/OurStory.jsx` with your own high-resolution images.

### Brand Colors

Colors are defined in `tailwind.config.js`:
- Primary: `#800020` (Deep Burgundy)
- Secondary: `#F9F6EE` (Champagne/Soft Cream)

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx    # Sticky navigation bar
│   ├── Hero.jsx         # Hero section with countdown
│   ├── OurStory.jsx     # Story timeline
│   ├── EventDetails.jsx # Ceremony and dress code info
│   ├── GiftRegistry.jsx # Monetary gift options
│   └── RSVP.jsx         # RSVP form
├── App.jsx              # Main app component
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Entry point
```
