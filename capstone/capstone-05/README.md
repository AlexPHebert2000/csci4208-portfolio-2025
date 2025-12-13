# Data Design — capstone-05

**Team repo:** https://github.com/AlexPHebert2000/FullStack-Apps-Capstone  
**Project (v2) board:** <URL> (public or shared with instructors)

## Deliverables for this phase

- Schema per model
- CRUD plan

## Summary (what we produced)

The application uses a file-based database adapter with JSON file storage. The database supports five main models: user, session, venue, review, and tag.

**Schema per Model:**

1. **User Model:**
   - `id` (string, UUID) - Primary key
   - `username` (string) - Unique username
   - `email` (string) - Unique email address
   - `password` (string) - Bcrypt hashed password

2. **Session Model:**
   - `id` (string, UUID) - Primary key
   - `user` (string) - Foreign key to user.id
   - Additional session metadata

3. **Venue Model:**
   - `id` (string) - Google Place ID (primary key)
   - `name` (string) - Venue name
   - `location` (string) - Formatted address
   - `description` (string) - Venue types/description
   - `tagIDs` (array of strings) - Foreign keys to tag.id
   - `rating` (number) - Calculated average rating
   - `reviewCount` (number) - Count of reviews
   - `googleRating` (number) - Google Places rating
   - `googleUserRatingsTotal` (number) - Google review count
   - `geometry` (object) - Location coordinates
   - `photos` (array) - Google Places photos
   - `website` (string) - Venue website URL
   - `phoneNumber` (string) - Formatted phone number
   - `openingHours` (object) - Business hours
   - `googleReviews` (array) - Google Places reviews

4. **Review Model:**
   - `id` (string, UUID) - Primary key
   - `venueId` (string) - Foreign key to venue.id
   - `userId` (string) - Foreign key to user.id
   - `rating` (number, 1-5) - User rating
   - `comment` (string) - Review text

5. **Tag Model:**
   - `id` (string, UUID) - Primary key
   - `name` (string) - Unique tag name
   - `color` (string) - Hex color code
   - `venueIDs` (array of strings) - Foreign keys to venue.id

**CRUD Plan:**

- **User:** Create (registration), Read (login/me), Update (future), Delete (future)
- **Session:** Create (login), Read (validate), Delete (logout)
- **Venue:** Create (from Google Places), Read (search, by ID), Update (sync with Google), Delete (not implemented)
- **Review:** Create (POST), Read (by venue), Update (PUT), Delete (DELETE)
- **Tag:** Create (POST), Read (by ID, list all), Update (add/remove from venues via transactions), Delete (via remove from venue)

**Database Operations:**
- File-based persistence using `fsAdapter` with JSON file storage
- Transaction support for atomic operations (tag-venue relationships)
- Query support with filtering, sorting, and pagination
- Upsert operations for venue synchronization with Google Places API

## Evidence / Artifacts

- Database adapter implementation in `src/server/database/fsAdapter.js`
- Database operations in `src/server/database/index.js`
- Data model files in `src/server/database/files/`
- API routes demonstrate CRUD operations for all models
- Transaction support for tag-venue relationships

## Notes & Risks

- File-based storage suitable for development; consider database migration for production
- Google Place IDs used as venue primary keys (external dependency)
- Many-to-many relationships managed through array fields

