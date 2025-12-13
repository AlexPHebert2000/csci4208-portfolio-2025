# Project Proposal — capstone-01

**Team repo:** https://github.com/AlexPHebert2000/FullStack-Apps-Capstone  
**Project (v2) board:** <URL> (public or shared with instructors)  

## Deliverables for this phase

- Team roster: Micah Pierce, Alex Hebert
- Project idea: A restaurant/venue search and review kiosk app 
- Abstract: A full-stack venue discovery and review application with Google Places API integration, featuring a unique mobile remote control system that allows touch-based control of the web application via Socket.io real-time communication. 

## Summary (what we produced)

This project is a full-stack venue discovery and review application that integrates with Google Places API to allow users to search, explore, and review local venues. The application features a unique remote control system that enables mobile devices to control the main web application through a touch-based interface.

Built with React and Express.js, the application provides users with the ability to search for venues by location or name, view detailed venue information including ratings and reviews, create and manage their own reviews, and organize venues using custom tags. The remote control feature uses Socket.io for real-time communication, allowing users to connect their mobile device via QR code and control the main application's cursor, perform taps, scroll, and input text—creating an innovative touch-to-control experience for web applications.

The application uses a file-based database adapter for data persistence, implements cookie-based session authentication, and provides a complete CRUD interface for reviews and tags. The goal is to demonstrate a modern full-stack application with real-time capabilities and an innovative user interaction model.

## Evidence / Artifacts

- Project repository contains full implementation
- Codebase demonstrates all proposed features
- Database schema and API endpoints implemented
- Remote control feature fully functional with Socket.io

## Notes & Risks

- Google Places API key required for venue search functionality
- File-based database suitable for development; may need migration for production scale
- Remote control feature requires WebSocket support

