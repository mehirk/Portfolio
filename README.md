# Mehir's Portfolio

A modern, sleek, and professional portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- 🎭 Beautiful animated 3D background with particles
- ✨ Smooth animations and transitions using Framer Motion
- 🖋️ Custom handwriting and path animations
- 🧠 Interactive elements to showcase creativity
- 📱 Fully responsive design with mobile-optimized sidebar
- 🌓 Dark mode by default with elegant glass morphism effects
- 🎯 Custom cursor for enhanced interactivity
- 🔄 Tilt and magnetic button effects for modern UI feel
- ⚡ Performance optimized with code-splitting and lazy loading

## Project Structure

- `/src/app` - Next.js app router pages and layouts
- `/src/components` - Reusable UI components
  - `/sections` - Main page sections (Hero, About, Skills, etc.)
  - `/ui` - Primitive UI components (Button, Input, Textarea, etc.)
- `/src/lib` - Utility functions
- `/src/styles` - Global CSS and Tailwind config
- `/public` - Static assets

## Key Components

- `AnimatedBackground` - Interactive 3D particle background
- `CustomCursor` - Enhanced cursor with hover effects
- `HandwritingText/Path` - SVG path animations for natural handwriting
- `TiltCard` - 3D tilt effect for cards
- `MagneticButton` - Interactive magnetic effect for buttons
- `FlipCard` - 3D flip card effect for projects
- `FadeInView` - Animation components for scroll-based reveals

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mehir-portfolio.git
cd mehir-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

- Update personal information in the section components
- Add your own projects in the `ProjectsSection.tsx` file
- Customize colors and animations in the component files
- Modify the sidebar menu and navigation in `Sidebar.tsx`

## Performance Optimizations

- Dynamic imports with Next.js for code splitting
- Memoized components to prevent unnecessary re-renders
- Optimized animations with Framer Motion's LazyMotion
- Image optimization with next/image
- Client-side hydration handling to prevent inconsistencies

## Deployment

The portfolio can be easily deployed to platforms like Vercel, Netlify, or GitHub Pages.

## License

This project is open source and available under the [MIT License](LICENSE).
