# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website (djraivis.github.io) built as a React digital business card. The site showcases personal information, skills, and contact details through a component-based architecture.

## Development Commands

### Core Development Tasks
- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests using Jest/React Testing Library
- `npm run deploy` - Deploy to GitHub Pages (runs predeploy build automatically)

### Testing
- Uses `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event`
- Test files should follow React Testing Library patterns

## Architecture

### Component Structure
The app follows a simple component-based architecture:

- **App.js** - Main container with five primary sections arranged vertically:
  1. `Card` - Header with social media links and "React Dev" branding
  2. `Whoami` - Personal information (name, occupation, CV link)
  3. `Buttons` - Contact buttons (Email, LinkedIn)
  4. `Content` - About and Interests sections
  5. `Skills` - Technology skill icons (HTML, CSS, JavaScript, React)

### Styling Approach
- Uses CSS Modules for component-specific styling (`.module.css` files)
- Each component has its own CSS module imported as `styles`
- Global styles in `index.css` and `App.css`

### Asset Management
- SVG icons stored in `src/images/`
- Icons imported directly into components
- Uses local assets rather than external CDNs

## Deployment

- Configured for GitHub Pages deployment
- Uses `gh-pages` package for automated deployment
- Homepage URL: https://djraivis.github.io/
- GitHub Actions workflow configured for package publishing on releases

## Key Files

- `src/App.js` - Main application component
- `src/components/` - All reusable UI components
- `public/index.html` - HTML template
- `package.json` - Dependencies and scripts configuration