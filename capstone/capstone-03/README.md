# Frontend Design — capstone-03

**Team repo:** https://github.com/AlexPHebert2000/FullStack-Apps-Capstone  
**Project (v2) board:** <URL> (public or shared with instructors)

## Deliverables for this phase

- Mockups
- Interactions
- Controllers/views
- Tooling

## Summary (what we produced)

The frontend is built with React using Vite as the build tool. The application follows a component-based architecture with clear separation between pages, components, and custom hooks.

**Pages (Views/Controllers):**
- `App.jsx` - Main application router handling authentication state and view navigation
- `HomePage.jsx` - Main venue browsing interface with search, filtering, and venue grid display
- `AuthPage.jsx` - Login and registration form with toggle between modes
- `VenueDetailsPage.jsx` - Detailed venue view with reviews and tag management
- `ControllerPage.jsx` - Mobile touch pad interface for remote control functionality

**Components:**
- `VenueCard.jsx` - Displays venue information in grid layout with ratings and tags
- `VenueDetailsOverlay.jsx` - Modal overlay for detailed venue information
- `Tag.jsx` - Individual tag display with dynamic color-based text contrast
- `TagContainer.jsx` - Container for displaying multiple tags
- `TagCreator.jsx` - Component for creating new tags
- `QRCodeDisplay.jsx` - Displays QR code for remote control connection

**Custom Hooks:**
- `useRemoteControl.js` - Manages Socket.io connection, cursor position, touch events, keyboard input, and scroll handling for remote control feature

**Interactions:**
- Search functionality with real-time venue filtering
- Tag-based filtering with click-to-filter and clear filters
- Modal overlays for venue details
- Real-time remote cursor control via Socket.io
- Touch pad interactions: single finger for cursor movement/tap, two fingers for scrolling
- Keyboard input forwarding from mobile device to web application
- QR code generation and scanning for room connection

**Tooling:**
- Vite for fast development and optimized production builds
- React 18 with functional components and hooks
- Socket.io-client for real-time bidirectional communication
- Axios for HTTP requests
- CSS modules for component styling

## Evidence / Artifacts

- Component files in `src/client/components/`
- Page components in `src/client/pages/`
- Custom hooks in `src/client/hooks/`
- Vite configuration in `vite.config.js`
- CSS styling files for component styling
- Remote control implementation with Socket.io integration

## Notes & Risks

- Remote control feature requires stable WebSocket connection
- Touch event handling may vary across mobile browsers
- QR code display requires camera permissions on mobile devices

