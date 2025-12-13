# Project Audit – Client — capstone-06

**Team repo:** https://github.com/AlexPHebert2000/FullStack-Apps-Capstone  
**Project (v2) board:** <URL> (public or shared with instructors)

## Deliverables for this phase

- Walkthrough of client implementation
- Tests

## Summary (what we produced)

**Client Implementation Walkthrough:**

The client is a React SPA built with Vite, organized into pages, components, and custom hooks. The application implements a venue review system with a unique remote control feature.

**Architecture:**
- **Entry Point:** `main.jsx` - Renders App component with React 18
- **App Component:** Central router managing authentication state and view transitions
- **State Management:** React hooks (useState, useEffect, useReducer) for local state
- **Routing:** Client-side routing via view state management (home, venue-details, controller)

**Key Features Implemented:**

1. **Authentication Flow:**
   - `AuthPage` handles login/registration with form validation
   - Session-based auth using cookies
   - Protected routes with authentication checks

2. **Venue Browsing:**
   - `HomePage` displays venue grid with search functionality
   - Real-time search integration with Google Places API
   - Tag-based filtering with reducer pattern
   - Venue cards with ratings and tag display

3. **Venue Details:**
   - `VenueDetailsPage` shows full venue information
   - `VenueDetailsOverlay` modal for quick venue preview
   - Review display and creation
   - Tag management (add/remove)

4. **Remote Control System:**
   - `useRemoteControl` hook manages Socket.io connection
   - Real-time cursor synchronization
   - Touch event handling (tap, drag, scroll)
   - Keyboard input forwarding
   - QR code generation for room connection
   - `ControllerPage` provides mobile touch interface

5. **Component Reusability:**
   - `VenueCard` - Reusable venue display
   - `Tag` - Individual tag with dynamic styling
   - `TagContainer` - Tag collection display
   - `QRCodeDisplay` - QR code generation component

**Testing:**
- Client-side testing framework: Vitest (configured in package.json)
- Test files location: `src/server/tests/` (server-side tests)
- Client tests would validate component rendering, user interactions, and state management
- Integration tests for API calls and Socket.io connections

**Technologies:**
- React 18 with functional components and hooks
- Vite for build tooling
- Socket.io-client for real-time features
- Axios for HTTP requests
- CSS for styling

## Evidence / Artifacts

- Client source code in `src/client/`
- Component implementations demonstrate React best practices
- Custom hooks for remote control functionality
- Server-side tests in `src/server/tests/` (database.test.js, userApi.test.js)
- Test framework: Vitest configured in package.json

## Notes & Risks

- Client-side tests should be expanded for comprehensive coverage
- Remote control feature requires thorough testing across devices
- Socket.io connection stability should be tested under various network conditions

