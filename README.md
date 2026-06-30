# Wobb Frontend Assignment

## Overview

This project enhances the provided Influencer Search application built with React, TypeScript, Vite, and Tailwind CSS.

The application allows users to discover influencers across Instagram, YouTube, and TikTok, view detailed profile information, and manage a persistent shortlist of selected creators.

---

## Live Demo

https://wobb-frontend-assignment-red.vercel.app/

---

## Features Implemented

### State Management (Zustand)

- Implemented Zustand for global state management
- Added persistence using Zustand Persist Middleware
- Selected profiles remain available after page refresh

### Select Profile & Add to List

- Add profiles from dashboard cards
- Add profiles from profile detail page
- Prevent duplicate entries
- View selected profiles in a dedicated sidebar
- Remove profiles from the selected list
- Persistent storage using localStorage

### UI/UX Improvements

- Redesigned application layout
- Improved dashboard visual hierarchy
- Modernized profile cards
- Added selected profiles management panel
- Improved spacing and responsiveness
- Enhanced profile detail experience
- Better user feedback for selected profiles

### Bug Fixes & Improvements

- Removed unused deprecated dependency (`react-beautiful-dnd`)
- Fixed search filtering behavior
- Added accessibility improvements using image alt attributes
- Added security improvements using `rel="noopener noreferrer"`
- Removed unused/debug code
- Improved component structure and maintainability

### Performance Optimizations

- Added `useMemo` for profile extraction
- Added `useMemo` for profile filtering
- Reduced unnecessary recalculations during rendering

---

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router DOM

---

## Project Structure

```txt
src
├── assets
├── components
├── pages
├── store
├── types
├── utils
└── App.tsx
```

---

## Installation

```bash
npm install
npm run dev
```

Open:

```txt
http://localhost:5173
```

---

## Build

```bash
npm run build
```

---

## Lint

```bash
npm run lint
```

---

## Assumptions

- Selected profiles are stored locally using browser localStorage.
- Duplicate profiles should not be added to the selected list.
- Profile data is loaded from local JSON files provided in the starter project.
- No backend service was required for this assignment.

---

## Trade-offs

- Zustand was chosen because it provides lightweight global state management with minimal boilerplate.
- Local persistence was implemented instead of backend storage since no backend API was provided.
- Performance improvements focus on memoization and avoiding unnecessary recalculations.

---

## Future Improvements

- Unit and integration testing
- Advanced filtering options
- Sorting functionality
- Infinite scrolling / pagination
- Dark mode support
- Backend integration for persistent user lists

---

## Validation

✅ npm run build

✅ npm run lint

✅ Zustand state management

✅ Persistent selected profiles

✅ Duplicate prevention

✅ Responsive dashboard layout

✅ Add / Remove profile functionality

✅ Deployed on Vercel