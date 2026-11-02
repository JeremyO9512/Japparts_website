# Jap Parts: concept website redesign

A concept redesign of the website for Jap Parts 2007 Ltd, an Auckland auto repair business with workshops in Manukau and East Tāmaki.

> **Not the official website.** This is a portfolio project, built with the owner's knowledge. (TODO: record the owner's written permission before publishing.)

## Problems with the original site
- Placeholder (lorem ipsum) text and repeated sections
- Dead links, and a map pointing to the wrong country
- Contradictory warranty details and mismatched FAQ and testimonial content
- Unclear pricing and no clear call to action

## What this redesign does
- Clear structure: Home, Services, Contact/Booking
- Click-to-call numbers and a booking enquiry form on every page
- Mobile-first, responsive layout with an accessible menu
- Plain HTML, CSS and JavaScript, with no build step

## Run locally
Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

then visit http://localhost:8000.

## Before publishing
- [ ] Get the owner's written permission
- [ ] Replace placeholder photos with real, permitted images
- [ ] Confirm warranty, insurers, pricing and email with the owner
- [ ] Add correct map embeds
- [ ] Add before/after screenshots to this README

Pages carry `noindex` and `robots.txt` blocks crawlers so this demo doesn't compete with the real site in search results.
