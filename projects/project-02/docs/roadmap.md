# Roadmap
## MVP
* [ ] Search for cards using Scryfall api
  * [ ] request helper
  * [ ] search bar
  * [ ] search results card list state
  * [ ] search results view
* [ ] Edit decklist
  * [ ] decklist state
  * [ ] add card to decklist
  * [ ] decklist view
  * [ ] remove card from decklist
* [ ] Import / Export
  * [ ] export helper
  * [ ] import helper
  * [ ] mass entry view
* [ ] Manage Commander of the Day selection
  * [ ] JSONBin Helper
  * [ ] Commander of the day selector
  * [ ] Time management
* [ ] Local Storage Management

## Polish
* [ ] Action Menu
* [ ] Image Card View
* [ ] Card Sorting / Grouping
* [ ] Consider Board 
* [ ] Simplifed JSON import/export
* [ ] Drag to add / remove

## Risks / Challenges
* [ ] **Delay from large Scryfall response** - Pagination can help reduce JSON sizes
* [ ] **Selecting a new Commander everyday** - Without using a webworker or some other job handling on a server, the CotD will be changed on access. An updated date will be saved alongside it in the JSONBin and if the date is in the past then a request to update will be sent. This can cause problems with multiple people accessing at the same time when a new commander needs to be chosen but the likelyhood of this happening is small enough to ignore.
* [ ]  **Commander Decks Are too large** - Commander is a 100 card singleton format so most lists include 80 to 90 uniquie cards, and durring deck building this can reach 150+. Stripping the information saved about each card to only nessessary fields is crucial. 