# Heart Center LA Website Update Log

This log is mandatory for all future website rebuild updates.

## Required Rule

Every time any page, asset, prompt, design standard, GHL placeholder, or implementation document is changed, append a new entry to this file before the work is considered complete.

Do not replace previous entries. Add the newest entry at the top under `Entries`.

## Entry Format

```md
### YYYY-MM-DD - Short Update Title

- Changed:
- Why:
- Files:
- Validation:
- Open items:
```

## Entries

### 2026-06-16 - Fixed GitHub Pages Preview Navigation

- Changed: Added GitHub Pages-only link rewriting for internal absolute links in the homepage and generated page script.
- Why: GitHub Pages serves this repo under `/HCLA/`, while the GHL custom-code pages use production root links such as `/classes`; those root links leave the project path and 404 on the preview site.
- Files:
  - `pages/homepage/ghl-homepage-v4-custom-code.html`
  - `scripts/generate-subpages.js`
  - generated page files under `pages/`
  - `docs/UPDATE-LOG.md`
- Validation: Regenerated generated pages; ran `node --check scripts/generate-subpages.js`; parsed homepage/classes/teachers/testimonials inline scripts; confirmed `git diff --check` passes.
- Open items: This rewrite is only active on `github.io`; production GHL links remain root-relative.

### 2026-06-12 - Updated Classes Page Imagery

- Changed: Replaced the class-room media image with `images/generated/hcla-prepared-guided-room.png` and replaced the facilitator founder placeholder with `pages/classes/Dr. Winnie Chan Wang.jpeg`. Added the current classes page green editorial paragraph contrast override to match the generated template.
- Why: The classes page needed approved imagery for the prepared class rhythm section and Dr. Winnie Chan Wang facilitator section.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/classes/Dr. Winnie Chan Wang.jpeg`
  - `images/generated/hcla-prepared-guided-room.png`
  - `docs/UPDATE-LOG.md`
- Validation: Ran `node --check scripts/generate-subpages.js`; parsed the classes page inline script; verified `images/generated/hcla-prepared-guided-room.png` and `pages/classes/Dr. Winnie Chan Wang.jpeg` exist locally; confirmed the classes page and generator reference both new images.
- Open items: Preview the classes page in GHL after deployment to confirm image paths resolve in the live media environment.

### 2026-06-12 - Added Old Testimonials to Testimonials Page

- Changed: Replaced the testimonials placeholder section with three video-linked testimonials and four written story testimonials from `testimonials/testimonials-old.md`.
- Why: The testimonials page had placeholder copy even though prior testimonial content was available in the workspace.
- Files:
  - `testimonials/testimonials-old.md`
  - `scripts/generate-subpages.js`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `docs/UPDATE-LOG.md`
- Validation: Ran `node --check scripts/generate-subpages.js`; parsed the testimonials page inline script; confirmed the page has one style block, one script block, seven testimonial cards, three video testimonial cards, four LeadConnector image URLs, all source names, and no remaining placeholder testimonial copy.
- Open items: Confirm the external YouTube thumbnail and LeadConnector image URLs load correctly in GHL preview.

### 2026-06-12 - Fixed Teachers Green Section Paragraph Contrast

- Changed: Added a stronger green-section editorial paragraph override to the teachers page and the generated page CSS template.
- Why: The award section uses `.hcla-section-green` and `.hcla-editorial`; the later `.hcla-editorial p` rule was overriding the green-section white paragraph color with muted gray.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `docs/UPDATE-LOG.md`
- Validation: Ran `node --check scripts/generate-subpages.js`; parsed the teachers page inline script; confirmed the green editorial paragraph override exists in both files and appears after the muted `.hcla-editorial p` rule in the teachers page.
- Open items: Preview the teachers page in GHL after deployment to confirm no platform CSS overrides are reintroducing muted paragraph color.

### 2026-06-12 - Added Homepage Photography to Teachers Page

- Changed: Updated the teachers page hero, award section, and founder profile cards to use the approved homepage images for Jay, Winnie, and the 2026 World Cultural Harmony Award. Added the matching GHL media placeholders so hosted homepage media can replace local preview paths in production.
- Why: The teachers page needed real photography instead of placeholder/media-free profile sections, while staying aligned with the homepage visual system.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `docs/UPDATE-LOG.md`
- Validation: Ran `node --check scripts/generate-subpages.js`; parsed the teachers page inline script; confirmed the teachers page references the new hero, award, Winnie, and Jay image paths and GHL media placeholders; verified all four homepage image files exist locally.
- Open items: Preview the teachers page in GHL after deployment to confirm hosted image paths resolve.

### 2026-06-12 - Made Replacement Images Visible And Brightened Green Text

- Changed: Moved `Replace 1.jpeg` into the first visible Healing Ecosystem carousel slide, kept the original first image in the fourth slot, and raised green-section paragraph contrast to brighter white across the generated pages and homepage variants.
- Why: The replacement carousel image was previously in a later slide and easy to miss, and testimonial green-section copy still looked too dim in local review.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/homepage/ghl-homepage-v4-custom-code.html`
  - `pages/homepage/ghl-homepage-v3-custom-code.html`
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `pages/conscious-connections/ghl-conscious-connections-v3-custom-code.html`
  - `pages/heart-center-connection/ghl-heart-center-connection-v3-custom-code.html`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `pages/find-a-class/ghl-find-a-class-v3-custom-code.html`
  - `pages/contact/ghl-contact-v3-custom-code.html`
  - `pages/new-student/ghl-new-student-v3-custom-code.html`
  - `pages/faq/ghl-faq-v3-custom-code.html`
  - `docs/UPDATE-LOG.md`
- Validation: Confirmed the local server is serving the replacement homepage image paths and the testimonial `rgba(255,255,255,0.92)` green-section text rule. Reviewed `qa/screenshots/local-homepage-replacements-visible.png` and `qa/screenshots/local-testimonials-green-fixed.png`.
- Open items: Only one carousel replacement file was found in the workspace; add another file with `replace` in the name if a second carousel image should also be swapped.

### 2026-06-12 - Fixed Green Section Text Contrast Sitewide

- Changed: Added stronger green-section color overrides for centered/content paragraphs, links, prices, and placeholder boxes in the generated page template; regenerated all non-homepage pages; added matching green-section paragraph overrides to homepage v3 and homepage v4.
- Why: Some green sections could inherit muted gray text from generic centered/body copy rules, making text too low-contrast on dark green backgrounds.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/homepage/ghl-homepage-v4-custom-code.html`
  - `pages/homepage/ghl-homepage-v3-custom-code.html`
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `pages/conscious-connections/ghl-conscious-connections-v3-custom-code.html`
  - `pages/heart-center-connection/ghl-heart-center-connection-v3-custom-code.html`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `pages/find-a-class/ghl-find-a-class-v3-custom-code.html`
  - `pages/contact/ghl-contact-v3-custom-code.html`
  - `pages/new-student/ghl-new-student-v3-custom-code.html`
  - `pages/faq/ghl-faq-v3-custom-code.html`
  - `docs/UPDATE-LOG.md`
- Validation: Re-ran script/style checks across all page HTML files; confirmed each page includes the green centered-copy override. Reviewed representative screenshots: `qa/screenshots/green-homepage.png`, `qa/screenshots/green-testimonials.png`, `qa/screenshots/green-contact.png`, and `qa/screenshots/green-classes.png`.
- Open items: Re-check in GHL after embed insertion, since native GHL widgets may bring their own text colors.

### 2026-06-12 - Replaced Homepage Carousel And Winnie Images

- Changed: Replaced the fourth Healing Ecosystem carousel image with `Replace 1.jpeg` and replaced Winnie's founder profile image with `Replace Winnie Profile Picture.jpeg`. Adjusted the Winnie portrait object positioning for the new image while preserving the existing 4:5 portrait crop and 16:9 carousel crop behavior.
- Why: The user marked replacement media for the homepage carousel and Winnie profile picture.
- Files:
  - `pages/homepage/ghl-homepage-v4-custom-code.html`
  - `images/Homepage Images/Healing Ecosystem Carousel/Replace 1.jpeg`
  - `images/Homepage Images/Winnie Profile Picture/Replace Winnie Profile Picture.jpeg`
  - `docs/UPDATE-LOG.md`
- Validation: Ran homepage script/style and local-image path checks. Reviewed `qa/screenshots/homepage-v4-replacements-desktop.png` and `qa/screenshots/homepage-v4-replacements-mobile.png` to confirm the replacement carousel and Winnie portrait crops are consistent on desktop and mobile.
- Open items: If a second carousel replacement image was intended, add it to the carousel folder with `replace` in the filename and update the matching slide.

### 2026-06-12 - Added Local Preview Routes

- Changed: Added local preview route shims for the homepage and each production-style route so links like `/classes`, `/teachers`, `/find-a-class`, `/faq`, and `/contact` work in the static local server.
- Why: The GHL custom-code pages use production-style absolute links, but the local preview files live under `pages/`; the route shims let the local server behave more like the live site.
- Files:
  - `index.html`
  - `classes/index.html`
  - `teachers/index.html`
  - `conscious-connections/index.html`
  - `heart-center-connection/index.html`
  - `testimonials/index.html`
  - `find-a-class/index.html`
  - `contact/index.html`
  - `new-student/index.html`
  - `faq/index.html`
  - `docs/UPDATE-LOG.md`
- Validation: Confirmed each local route returns `200` on the running static server and points to the matching custom-code page file. Captured `qa/screenshots/local-route-classes.png` through `/classes` and confirmed it loads the actual Classes page.
- Open items: These are preview helpers only; GHL should still use the custom-code page files directly.

### 2026-06-06 - Added GitHub Pages Root Redirect

- Changed: Added a root `index.html` that redirects GitHub Pages visitors from `/HCLA/` to the homepage v4 preview file.
- Why: GitHub Pages requires an index file at the published root; without it, the repository root URL does not show the homepage preview.
- Files:
  - `../index.html`
  - `docs/UPDATE-LOG.md`
- Validation: Confirm root index points to `04%20-%20Website%20Rebuild/pages/homepage/ghl-homepage-v4-custom-code.html`.
- Open items: Allow GitHub Pages a minute or two to rebuild after push, then refresh `https://socialtech2400.github.io/HCLA/`.

### 2026-06-06 - Added Homepage Media Enhancements

- Changed: Added a round Jay/Winnie hero portrait, a responsive Healing Ecosystem image carousel, UN award photo/certificate gallery, founder portraits, calligraphy-style line drawings for the Three Harmonies, and replacement consent-aware proof copy. Converted Winnie's HEIC profile image to a web-safe JPEG for homepage use.
- Why: Replace placeholder/static areas with real Heart Center LA media, improve visual credibility, and make the homepage feel more finished across desktop and mobile.
- Files:
  - `pages/homepage/ghl-homepage-v4-custom-code.html`
  - `images/Homepage Images/Winnie Profile Picture/Winnie Profile Picture.jpg`
  - `assets/ghl-placeholders/GHL-INTEGRATION-SLOTS.md`
  - `docs/UPDATE-LOG.md`
- Validation: Ran homepage script/style and local-image path checks. Captured and reviewed desktop and mobile screenshots for the hero inset, ecosystem carousel, Three Harmonies line drawings, award gallery, founder portraits, proof line, and responsive stacking.
- Open items: Upload the new homepage images to GHL media and replace the new `{{HCLA_*}}` media placeholders with production URLs before final GHL publish.

### 2026-06-06 - Improved Three Harmonies Intro Contrast

- Changed: Added a specific `hcla-harmonies-intro` class and brighter white text color for the Three Harmonies intro paragraph on the homepage.
- Why: The paragraph beginning "ARC is how the practice moves" was inheriting muted gray styling and was difficult to read on the green section background.
- Files:
  - `pages/homepage/ghl-homepage-v4-custom-code.html`
  - `docs/UPDATE-LOG.md`
- Validation: Ran a homepage custom-code check confirming one inline script, one style block, and the new harmonies intro selector/class.
- Open items: Preview in GHL after pasting or pushing the updated homepage code.

### 2026-06-05 - Updated Implementation Plan Status

- Changed: Added the mandatory update-log rule and current build status to the implementation plan.
- Why: Keep the plan aligned with the newly built page set and make the ongoing logging requirement visible from the primary planning document.
- Files:
  - `docs/IMPLEMENTATION-PLAN.md`
  - `docs/UPDATE-LOG.md`
- Validation: Reviewed the implementation plan after update for current homepage source, generated page inventory, validation state, and next GHL integration work.
- Open items: Continue updating the plan after live GHL integration and final media replacement.

### 2026-06-05 - Tightened Mobile Typography

- Changed: Updated the subpage generator and regenerated the non-homepage pages so shared section headlines and centered body copy wrap cleanly on narrow screens.
- Why: Representative mobile QA showed lower section copy could run past the viewport at 390px.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `pages/conscious-connections/ghl-conscious-connections-v3-custom-code.html`
  - `pages/heart-center-connection/ghl-heart-center-connection-v3-custom-code.html`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `pages/find-a-class/ghl-find-a-class-v3-custom-code.html`
  - `pages/contact/ghl-contact-v3-custom-code.html`
  - `pages/new-student/ghl-new-student-v3-custom-code.html`
  - `pages/faq/ghl-faq-v3-custom-code.html`
- Validation: Re-ran JS syntax and custom-code wrapper/font checks. Refreshed `qa/screenshots/classes-mobile.png` and confirmed the representative mobile layout is readable.
- Open items: Run final GHL preview QA after live calendars, forms, media URLs, and any injected tracking snippets are installed.

### 2026-06-05 - Corrected Generated Page Contrast

- Changed: Updated the subpage generator and regenerated the non-homepage pages so cards inside green sections use dark translucent backgrounds instead of white backgrounds with white text.
- Why: Prevent hidden contrast/readability issues in generated pages.
- Files:
  - `scripts/generate-subpages.js`
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `pages/conscious-connections/ghl-conscious-connections-v3-custom-code.html`
  - `pages/heart-center-connection/ghl-heart-center-connection-v3-custom-code.html`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `pages/find-a-class/ghl-find-a-class-v3-custom-code.html`
  - `pages/contact/ghl-contact-v3-custom-code.html`
  - `pages/new-student/ghl-new-student-v3-custom-code.html`
  - `pages/faq/ghl-faq-v3-custom-code.html`
- Validation: Pages regenerated from the corrected generator.
- Open items: Continue visual QA in GHL after live embeds and image URLs are installed.

### 2026-06-05 - Built Remaining GHL Pages

- Changed: Built the remaining non-homepage GHL custom-code pages using the homepage v4 aesthetic and copy direction.
- Why: Complete the first full website page set after homepage refinement.
- Files:
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `pages/conscious-connections/ghl-conscious-connections-v3-custom-code.html`
  - `pages/heart-center-connection/ghl-heart-center-connection-v3-custom-code.html`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `pages/find-a-class/ghl-find-a-class-v3-custom-code.html`
  - `pages/contact/ghl-contact-v3-custom-code.html`
  - `pages/new-student/ghl-new-student-v3-custom-code.html`
  - `pages/faq/ghl-faq-v3-custom-code.html`
  - `scripts/generate-subpages.js`
- Validation: Generated pages each contain one scoped root section, one style block, and one inline script block. JS syntax check passed across all page HTML files.
- Open items: Replace GHL placeholders with live form/calendar/ticket URLs and replace generated/local preview imagery with approved HCLA photography where available.

### 2026-06-05 - Created Mandatory Update Log

- Changed: Added this update log and established the rule that all future updates must append to it.
- Why: Keep a durable record of page, asset, content, and implementation changes across Codex/Claude/manual edits.
- Files:
  - `docs/UPDATE-LOG.md`
- Validation: Log created with required entry format and initial entries.
- Open items: Future editors must add an entry before finalizing any new update.
