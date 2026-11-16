# CODENEXT TECH — improved website foundation

This is the preserved CODENEXT TECH static homepage, enhanced with a branded five-second splash screen, mobile navigation behavior, a light/dark theme switch, and a working email-draft enquiry form.

## Project files
- `index.html` — homepage structure and content
- `styles.css` — brand styling, responsive layouts, splash screen and themes
- `script.js` — splash timing, mobile menu, theme preference, enquiry email draft and footer year
- `assets/codenext-logo.png` — supplied CODENEXT TECH logo, preserved without redesign

## Preview locally
1. Extract the project folder.
2. Open the folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

No build command or package installation is required for this static foundation.

## Netlify deployment
- Build command: leave blank
- Publish directory: `.`
- Deploy the complete folder, including `assets/` and `script.js`.

## Current functionality and limitations
- The splash screen is configured to remain visible for five seconds before fading away.
- The mobile navigation opens and closes and closes after a navigation link is selected.
- The theme switch toggles light/dark mode and stores the visitor's preference in local browser storage.
- The enquiry form validates required fields and opens the visitor's email application with a prepared message addressed to `minisimon992@gmail.com`. It does not send or store submissions on a server.
- The website remains a static frontend. There is no server, database, admin authentication, customer portal, AI provider, payment provider, newsletter backend, blog CMS, or live chat backend yet.
- Individual service detail pages, testimonials, published portfolio entries, and educational videos have not yet been implemented.
- No customer counts, ratings, testimonials, completed project claims, or experience statistics have been invented.

## Next development stages
1. Create the 11 individual service detail pages using the approved reference layout.
2. Add business content modules (portfolio, blog, FAQs, newsletter and enquiry management).
3. Decide on and approve backend, database, authentication and storage providers before implementing private portals.
4. Integrate AI and payment providers only after provider selection and secure credentials are approved.
5. Test the full experience on Android, desktop and other target browsers before production launch.
