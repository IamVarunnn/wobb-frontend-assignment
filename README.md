# Wobb Frontend Assignment

## Overview

This project enhances the provided influencer search application built with React, TypeScript, Vite, and Tailwind CSS.

The application allows users to discover influencers across Instagram, YouTube, and TikTok, view detailed profile information, and manage a persistent shortlist of selected creators.

---

## Live Demo

(Add Vercel URL here after deployment)

---

## Features Implemented

### State Management (Zustand)

- Implemented Zustand for selected profile management
- Added persistence using Zustand Persist Middleware
- State survives page refreshes

### Select Profile & Add to List

- Add profiles from dashboard cards
- Add profiles from profile detail page
- Prevent duplicate entries
- View selected profiles in a dedicated sidebar
- Remove profiles from the selected list
- Persistent storage using localStorage

### UI/UX Improvements

- Redesigned application layout
- Improved profile cards with modern styling
- Added selected profiles panel
- Improved spacing and visual hierarchy
- Enhanced dashboard experience
- Improved profile detail page presentation

### Bug Fixes & Improvements

- Removed unused deprecated dependency (`react-beautiful-dnd`)
- Fixed search filtering behavior
- Added accessibility improvements using image alt attributes
- Added security improvements using `rel="noopener noreferrer"`
- Removed unused/debug code
- Improved component organization

### Performance Optimizations

- Added `useMemo` for profile extraction
- Added `useMemo` for filtering logic
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

## Installation

```bash
npm install
npm run dev
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

## Project Structure

```txt
src
├── components
├── pages
├── store
├── types
├── utils
└── assets
```

---

## Assumptions

- Selected profiles are persisted locally using browser localStorage.
- Duplicate profiles should not be added to the selected list.
- Profile data is loaded from local JSON files provided in the starter project.

---

## Trade-offs

- Local persistence was chosen over backend storage since no backend service was provided.
- Performance optimizations focus on memoization of filtering and profile extraction.
- UI improvements prioritize usability and clarity over introducing a large UI framework.

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

✅ Responsive layout

✅ Persistent selected profiles

✅ Duplicate prevention

✅ Zustand state management