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
