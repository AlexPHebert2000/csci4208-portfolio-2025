# Pitch : Commander-a-day Challenge
## Track: 
**Productivity**
## Product: 
A deck builder for Magic the Gathering that challenges players to build around a randomly chosen commander each day. [Commander](https://mtg.fandom.com/wiki/Commander_(format)) is Magic's most popular format and involves picking a legendary creature card as your "commander" that you build the rest of your deck around.
## Problem & User:
Commander is an extremely popular format in the world of Magic the Gathering but some commanders get a lot more attention than others. The Commander-a-day Challenge looks to help commander players break out of the common commanders and explore less played options by randomly choosing a commander for players to build around every day.
## Core Loop : 
User creates a decklist, searches for cards (handled by scryfall api) and adds cards to the deck. Cards can then be removed from the list. List are persisted on local storage and imported/exported via JSON.

## Demo Inspiration Audit
The client provides search results rendering from scryfall API requests. The client maintains the decklist in local storage and allows for import/export of lists as JSON. There will be a daily commander selected 

## Public Read Plan
I plan on using [api.scryfall.com](https://scryfall.com/docs/api) to power the search functionality of the app

### Sample API response:
#### Request: 
**GET** `https://api.scryfall.com/cards/search?q=talisman of dominance`
#### Response:
```json
{
    "object": "list",
    "total_cards": 1,
    "has_more": false,
    "data": [
        {
            "object": "card",
            "id": "f6c8e0b5-218e-41dd-8b09-2d4aaec2c979",
            "oracle_id": "4c0a0448-b9d6-43a0-8549-64066dac63f0",
            "multiverse_ids": [
                650336
            ],
            "mtgo_id": 122632,
            "tcgplayer_id": 535809,
            "cardmarket_id": 753311,
            "name": "Talisman of Dominance",
            "lang": "en",
            "released_at": "2024-02-09",
            "uri": "https://api.scryfall.com/cards/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979",
            "scryfall_uri": "https://scryfall.com/card/mkc/242/talisman-of-dominance?utm_source=api",
            "layout": "normal",
            "highres_image": true,
            "image_status": "highres_scan",
            "image_uris": {
                "small": "https://cards.scryfall.io/small/front/f/6/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979.jpg?1706241098",
                "normal": "https://cards.scryfall.io/normal/front/f/6/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979.jpg?1706241098",
                "large": "https://cards.scryfall.io/large/front/f/6/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979.jpg?1706241098",
                "png": "https://cards.scryfall.io/png/front/f/6/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979.png?1706241098",
                "art_crop": "https://cards.scryfall.io/art_crop/front/f/6/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979.jpg?1706241098",
                "border_crop": "https://cards.scryfall.io/border_crop/front/f/6/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979.jpg?1706241098"
            },
            "mana_cost": "{2}",
            "cmc": 2.0,
            "type_line": "Artifact",
            "oracle_text": "{T}: Add {C}.\n{T}: Add {U} or {B}. This artifact deals 1 damage to you.",
            "colors": [],
            "color_identity": [
                "B",
                "U"
            ],
            "keywords": [],
            "produced_mana": [
                "B",
                "C",
                "U"
            ],
            "legalities": {
                "standard": "not_legal",
                "future": "not_legal",
                "historic": "legal",
                "timeless": "legal",
                "gladiator": "legal",
                "pioneer": "not_legal",
                "modern": "legal",
                "legacy": "legal",
                "pauper": "not_legal",
                "vintage": "legal",
                "penny": "not_legal",
                "commander": "legal",
                "oathbreaker": "legal",
                "standardbrawl": "not_legal",
                "brawl": "legal",
                "alchemy": "not_legal",
                "paupercommander": "not_legal",
                "duel": "legal",
                "oldschool": "not_legal",
                "premodern": "not_legal",
                "predh": "legal"
            },
            "games": [
                "paper",
                "mtgo"
            ],
            "reserved": false,
            "game_changer": false,
            "foil": false,
            "nonfoil": true,
            "finishes": [
                "nonfoil"
            ],
            "oversized": false,
            "promo": false,
            "reprint": true,
            "variation": false,
            "set_id": "286c37ca-ba65-4d3e-8c5d-d1878d88fd95",
            "set": "mkc",
            "set_name": "Murders at Karlov Manor Commander",
            "set_type": "commander",
            "set_uri": "https://api.scryfall.com/sets/286c37ca-ba65-4d3e-8c5d-d1878d88fd95",
            "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Amkc&unique=prints",
            "scryfall_set_uri": "https://scryfall.com/sets/mkc?utm_source=api",
            "rulings_uri": "https://api.scryfall.com/cards/f6c8e0b5-218e-41dd-8b09-2d4aaec2c979/rulings",
            "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A4c0a0448-b9d6-43a0-8549-64066dac63f0&unique=prints",
            "collector_number": "242",
            "digital": false,
            "rarity": "uncommon",
            "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
            "artist": "Mike Dringenberg",
            "artist_ids": [
                "a1407afa-0f54-43f8-938b-88b268074f91"
            ],
            "illustration_id": "b98f8e9b-d282-46ea-a3c7-025ffd69b05f",
            "border_color": "black",
            "frame": "2015",
            "full_art": false,
            "textless": false,
            "booster": false,
            "story_spotlight": false,
            "edhrec_rank": 86,
            "prices": {
                "usd": "0.77",
                "usd_foil": null,
                "usd_etched": null,
                "eur": "0.72",
                "eur_foil": null,
                "tix": "0.12"
            },
            "related_uris": {
                "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=650336&printed=false",
                "tcgplayer_infinite_articles": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Farticles&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Farticles%3FproductLineName%3Dmagic%26q%3DTalisman%2Bof%2BDominance",
                "tcgplayer_infinite_decks": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&trafcat=tcgplayer.com%2Fsearch%2Fdecks&u=https%3A%2F%2Fwww.tcgplayer.com%2Fsearch%2Fdecks%3FproductLineName%3Dmagic%26q%3DTalisman%2Bof%2BDominance",
                "edhrec": "https://edhrec.com/route/?cc=Talisman+of+Dominance"
            },
            "purchase_uris": {
                "tcgplayer": "https://partner.tcgplayer.com/c/4931599/1830156/21018?subId1=api&u=https%3A%2F%2Fwww.tcgplayer.com%2Fproduct%2F535809%3Fpage%3D1",
                "cardmarket": "https://www.cardmarket.com/en/Magic/Products?idProduct=753311&referrer=scryfall&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
                "cardhoarder": "https://www.cardhoarder.com/cards/122632?affiliate_id=scryfall&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
            }
        }
    ]
}
```
## Cloud Write Plan
I plan on using [JSONBin](https://api.jsonbin.io/v3/b/68df1642d0ea881f409369ca) to maintain the selected commander of the day and a count of how many decks have been made with that commander today
### Schema
```json
{
  "CotD": string,
  "decks_made": number,
  "updated": Date
}
```

## Initial Plan Modules
* Components - containing all the reusable components
  * Search Bar - input area for search query
  * Card - Renders as a picture of given card includes extra information behind the scenes
  * Card actions - menu where user can add/remove card from list
* Views - containing all the top level views
  * Decklist - Displays all cards currently in the list as card components
  * Search results - displays results from the search as a list of card components
  * Mass Entry - Text only representation of the deck for imports and exports
* Scripts - containing helper scripts
  * Deck class - class representing deck, contains decklist and methods for manipulation
  * Card class - class representing a card, scryfall card objects will be converted into this
  * Scryfall fetch - helper to handle fetching cards from scryfall and converting them to card instances
  * cardJSON - helpers to parse JSON imports or convert list into JSON {possible exclude}
  * cloud - helpers to handle interacting with JSONBin