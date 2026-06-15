# Heart Center LA Website Implementation Plan

## Objective

Build the new heartcenter.la website as a set of GHL-compatible custom-code pages that sell healing class enrollment first, while supporting Conscious Connections, the Heart Center Connection podcast, testimonials, and institutional facilitation.

The business-plan priority is clear: every path should lead toward the healing classes.

## Non-Negotiables

- Platform: GoHighLevel.
- Delivery format: one self-contained HTML file per page.
- No build system, framework, npm package, shared runtime, or imported component library.
- All CSS must be scoped to a page wrapper, for example `.hcla-homepage`.
- All JS must be inline and wrapped in an IIFE.
- Navigation must work on mobile with accessible toggle states.
- CTAs must route toward `/find-a-class` unless the page has a more specific GHL action.
- GHL calendars, forms, and payment links should be represented with clearly marked placeholders until final GHL embed IDs/URLs are available.
- Every website update must be recorded in [UPDATE-LOG.md](UPDATE-LOG.md) before the work is considered complete.

## Current Build Status

Status as of 2026-06-05:

- Homepage source of truth: `pages/homepage/ghl-homepage-v4-custom-code.html`.
- Non-homepage local page set: built as GHL-compatible custom-code files.
- Shared subpage source: `scripts/generate-subpages.js`.
- Local generated page files:
  - `pages/classes/ghl-classes-v3-custom-code.html`
  - `pages/teachers/ghl-teachers-v3-custom-code.html`
  - `pages/conscious-connections/ghl-conscious-connections-v3-custom-code.html`
  - `pages/heart-center-connection/ghl-heart-center-connection-v3-custom-code.html`
  - `pages/testimonials/ghl-testimonials-v3-custom-code.html`
  - `pages/find-a-class/ghl-find-a-class-v3-custom-code.html`
  - `pages/contact/ghl-contact-v3-custom-code.html`
  - `pages/new-student/ghl-new-student-v3-custom-code.html`
  - `pages/faq/ghl-faq-v3-custom-code.html`
- Local validation completed: script syntax, scoped style/script structure, wrapper/font scan, desktop screenshot pass, and representative mobile screenshot pass.
- Next required work: replace GHL placeholders with live embed IDs/URLs, upload final media to GHL, paste pages into GHL, and run GHL preview QA.

## Design Direction

Use [PELICAN-HILL-DESIGN-STUDY.md](PELICAN-HILL-DESIGN-STUDY.md) as the aesthetic reference for v3.

The target is a refined luxury hospitality feel: full-bleed imagery, editorial serif headlines, quiet uppercase CTAs, generous spacing, warm gold/ivory accents, and a reservation-like class booking experience.

Do not copy Pelican Hill's proprietary assets, exact code, exact copy, or brand marks. Borrow the layout grammar and mood, then translate it into Heart Center LA's healing-class funnel.

## Brand And Conversion Spine

Public promise:

> We provide spaces that encourage healing to happen.

Method:

- Public: See, Name, Change
- Course: Aware, Release, Choose and Commit
- Practitioner: Excavate, Interpret, Restore

Philosophy:

- Self Harmony
- Heaven + Earth + Human Harmony
- Harmony with Other Humans

Primary paid offer:

- Refresh: $35
- Reset: $84
- Restore: $196
- Revitalize: $238/month

Core trust signals:

- World Cultural Harmony Award, May 21, 2026
- Dr. Winnie Chan Wang: licensed acupuncturist, MIT, NYU, Jaw-Gut-Pelvis method
- Dr. Jay Dubois, PhD: anthropology professor, author, facilitator
- Compassionate Transformation Community
- Partner logo wall
- Real testimonials as they are collected

## Phase 0 - Scaffold

Status: complete.

Deliverables:

- Page folders under `pages/`
- GHL custom-code placeholder files for each route
- Source snippets under `shared/`
- Planning docs under `docs/`
- QA checklist under `qa/`
- Asset and GHL integration maps under `assets/`

## Phase 1 - Content Lock

Goal: convert the business plan into page-ready copy blocks.

Tasks:

- Confirm final class tier names, prices, and booking destination for each tier.
- Confirm public use of the World Cultural Harmony Award language.
- Confirm contact details and location:
  - `heartcenterla1@gmail.com`
  - `(213) 856-1293`
  - `2801 E. Foothill Blvd., Pasadena CA 91107`
- Confirm whether Conscious Connections uses Eventbrite, Lu.ma, direct GHL checkout, or a manual inquiry flow.
- Gather available founder photos, award images/certificates, testimonial media, and class/event photos.
- Rehost production images inside GHL media library and record final URLs.

## Phase 2 - Shared Page Shell

Goal: define the reusable visual and behavior pattern, then copy it into each final page.

Deliverables:

- Header/nav pattern with mobile toggle.
- Footer pattern with nav, contact, social placeholders, and copyright.
- Scoped design token block.
- Button, section, card, tier, logo-wall, accordion, and media-slot patterns.
- Image fallback behavior for missing media.

Build notes:

- Use the snippets in `shared/` as source references.
- Production pages should contain the final copied CSS/HTML/JS inline.
- Avoid card-in-card layouts.
- Keep cards at 0-4px border radius for the Pelican Hill-inspired direction.
- Use restrained, trust-building design with the feel of a polished retreat reservation experience.

## Phase 3 - Critical Conversion Pages

### Homepage

Purpose: establish the promise, make classes the next step, and front-load trust.

Must include:

- Hero with motto.
- Clear class CTA.
- Four class tier overview.
- Three Harmonies section.
- World Cultural Harmony Award feature.
- Founder credibility preview.
- Partner logo wall.
- Testimonial placeholders or live testimonials.
- Strong route to `/find-a-class`.

### Classes

Purpose: sell the four-tier class structure.

Must include:

- Tier comparison.
- "Use when..." self-selection copy.
- What changes at each level.
- What does not change at lower levels.
- Booking CTA per tier.
- Facilitator/trust section featuring Winnie.
- FAQ or objection handling near bottom.

### Teachers

Purpose: make the work credible and human.

Must include:

- Winnie profile and credentials.
- Jay profile and credentials.
- World Cultural Harmony Award feature.
- Division of labor.
- Compassionate Transformation Community mention.
- CTA to book a class or inquire for institutional facilitation.

### Find A Class

Purpose: remove friction from booking.

Must include:

- GHL calendar placeholder.
- Tier chooser or quick links.
- Timezone/location note.
- Short reassurance for first-time students.
- Manual fallback contact.

## Phase 4 - Audience And Trust Pages

### Conscious Connections

Purpose: sell the live dating event and move attendees into the class ecosystem.

Must include:

- Who it is for.
- Thursday night/Pasadena context.
- Format sequence.
- ARC arc in the room.
- Ticket CTA.
- Post-event bridge to classes.

### Heart Center Connection

Purpose: create a podcast landing page that captures letters and routes listeners to paid work.

Must include:

- Advice-column format.
- Letter submission form placeholder.
- Episode/archive placeholder.
- ARC explanation.
- CTA to attend an event or book class.

### Testimonials

Purpose: collect and display proof.

Must include:

- Video testimonial slots.
- Written quote slots.
- Partner logo wall.
- Award/trust reinforcement.
- Consent-aware language.

## Phase 5 - Support Pages

### New Student

Purpose: reduce uncertainty before first booking.

Must include:

- What to expect.
- How to choose a tier.
- What to wear/bring.
- Arrival and online/offline notes.
- Safety/medical disclaimer language.
- CTA to `/find-a-class`.

### FAQ

Purpose: objection handling.

Must include:

- Class selection.
- Pricing.
- Breathwork/somatic safety.
- Payments and refunds.
- Private sessions.
- Institutional facilitation.
- Conscious Connections and podcast questions.

### Contact

Purpose: route inquiries cleanly.

Must include:

- General contact.
- Private session inquiry.
- Institutional booking inquiry.
- Location and service area.
- GHL form placeholder.

## Phase 6 - GHL Integration

Required GHL items:

- Class booking calendar.
- Tier-specific booking or payment URLs.
- Contact/inquiry form.
- Podcast letter submission form.
- Testimonial/feedback form.
- Event ticket URL or checkout flow.
- Email follow-up automations for class booking, event attendees, and podcast letter submissions.

Integration rule:

- Keep embed placeholders visible in code until final GHL IDs/URLs are known.
- After replacing a placeholder, test the exact page in GHL, not only locally.

## Phase 7 - QA And Launch

QA every page against:

- Desktop, tablet, and mobile widths.
- GHL preview and published route.
- Nav links and CTA links.
- Calendar/form visibility and submit behavior.
- Image loading/fallback states.
- Text overflow and button wrapping.
- Accessibility basics: labels, focus, contrast, aria-expanded.
- No duplicated IDs across GHL sections.

Launch sequence:

1. Build homepage locally.
2. Paste homepage into GHL and test.
3. Build classes page.
4. Paste classes into GHL and test booking path.
5. Build teachers page and trust sections.
6. Wire find-a-class calendar.
7. Build remaining pages.
8. Run full QA checklist.
9. Replace temporary media and placeholder testimonials.
10. Publish.

## First Build Sprint

Sprint goal: publish the minimum credible conversion site.

Pages:

- Homepage
- Classes
- Teachers
- Find A Class
- Contact

GHL items:

- Main class calendar
- General contact form
- Tier booking links

Definition of done:

- A new visitor understands the promise.
- A new visitor can choose a class tier.
- A new visitor can book or inquire without leaving the site.
- Trust signals are visible before any deep scroll.
