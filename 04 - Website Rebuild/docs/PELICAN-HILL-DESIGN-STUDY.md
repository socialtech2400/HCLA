# Pelican Hill Design Study For Heart Center LA

Reference site:

- https://pelicanhill.com/
- Main theme CSS inspected: `https://pelicanhill.com/wp-content/themes/pelicanhill2018/assets/css/style-gutenberg.css`
- Font kits inspected: `https://use.typekit.net/crl3kok.css` and `https://use.typekit.net/vlb0lvc.css`

## Goal

Borrow the luxury hospitality design language from Pelican Hill without copying their exact code, copy, imagery, brand marks, or proprietary assets.

For Heart Center LA, the translation is:

> A serene Pasadena healing retreat with the polish of a five-star hospitality site.

The site should feel spacious, quiet, editorial, and highly credible. Visitors should feel they are making a reservation for a carefully held experience, not being pushed through a wellness funnel.

## What Pelican Hill Is Doing

### Overall Vibe

- Luxury hospitality, not internet-marketing wellness.
- Big photographic atmosphere does most of the emotional work.
- Copy is short, polished, and sensory.
- Pages breathe. Sections are allowed to be tall.
- CTAs feel like reservations: "Book Your Stay", "Learn More", "View Itinerary".
- Trust is implied through polish, restraint, and institutional confidence.

### Layout Grammar

- Full-bleed hero image/video first.
- Header sits lightly over the hero:
  - Menu on the left.
  - Brand/logo centered.
  - Phone and booking CTA on the right.
- Booking panel behaves like a reservation drawer/panel.
- Content alternates between:
  - Centered editorial intro blocks.
  - Wide two-column image/text sections.
  - Feature grids with large image tiles.
  - Full-width scenic bands between content areas.
- Text columns are narrow even when sections are wide.
- Images are not trapped in decorative cards. They are large, confident, and architectural.
- Section rhythm is slow: image, headline, divider, paragraph, CTA.

### Typography

The live site uses:

- Headline: `Bembo`, `Palatino`, serif.
- Serif fallback: `Palatino`, serif.
- Sans: `proxima-nova`, sans-serif.
- Additional sans: `arboria`, `proxima-nova`, sans-serif.

Observed type behavior:

- H1: classical serif, uppercase, wide tracking, regular weight.
- H2: classical serif, regular weight, often mixed with italic emphasis.
- Eyebrows: small uppercase sans, light weight, wide tracking.
- Navigation: uppercase classical serif with tracking.
- Body: light sans or refined serif depending on section.
- CTAs: uppercase, tracked, rectangular, understated.

### Color System

The useful Pelican Hill palette cues:

- Warm gold: `#8c7342`
- Champagne: `#e6dac1`
- Deep green: `#395b52`
- Ink: `#212121`
- Dark gray: `#333333`
- Soft gray: `#757575`
- Ivory: `#f2f2ed`
- White: `#ffffff`

For Heart Center LA, keep the brand navy but shift the supporting palette warmer and more hospitality-like.

Recommended HCLA adaptation:

```css
--hcla-ink: #212121;
--hcla-navy: #1e2a64;
--hcla-deep-green: #395b52;
--hcla-gold: #8c7342;
--hcla-champagne: #e6dac1;
--hcla-ivory: #f2f2ed;
--hcla-muted: #757575;
--hcla-border: #dddddd;
--hcla-bg: #ffffff;
```

## Font Direction For HCLA

Do not depend on Pelican Hill's Adobe Typekit licenses.

Preferred open-source pairing:

```css
@import url('https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Source+Sans+3:wght@300;400;600;700&display=swap');

--hcla-font-headline: Cardo, Palatino, Georgia, serif;
--hcla-font-body: "Source Sans 3", Arial, sans-serif;
--hcla-font-ui: "Source Sans 3", Arial, sans-serif;
```

Why:

- `Cardo` is close to Pelican Hill's Palatino/Bembo fallback world and is already part of their fallback logic.
- `Source Sans 3` can approximate the clear, light, high-end utility feel of Proxima Nova.

Acceptable premium option:

- If Heart Center LA has Adobe Fonts access, use a licensed Bembo-style serif plus Proxima Nova or Arboria.

Avoid:

- Heavy display serifs.
- Overly round wellness fonts.
- Script fonts.
- Purple/blue gradients.
- Decorative blobs or soft abstract backgrounds.

## Component Translation

### Header

Pelican Hill pattern:

- Left: `MENU`
- Center: logo/mark
- Right: phone plus booking CTA

Heart Center LA version:

- Left: `MENU`
- Center: `Heart Center LA`
- Right: `(213) 856-1293` plus `BOOK A CLASS`
- On mobile, keep menu and CTA visible; move the phone into the menu panel if space is tight.

### Hero

Use full-bleed photo or video, not a card.

Heart Center LA homepage hero:

- Image/video: founders holding space, a serene class room, breathwork, or Pasadena retreat-like imagery.
- Eyebrow: `PASADENA HEALING CLASSES`
- H1: `Spaces that encourage healing to happen`
- Short body: one or two lines only.
- CTAs: `Book a Class` and `Explore Classes`.

### Booking Panel

Pelican Hill has a resort reservation feel.

Heart Center LA version:

- A "Find a Class" panel with:
  - Tier selector: Refresh, Reset, Restore, Revitalize.
  - Calendar embed.
  - Manual contact fallback.
- It should feel like selecting an experience, not filling out a lead form.

### Editorial Sections

Use this sequence repeatedly:

1. Small eyebrow.
2. Serif headline.
3. Thin gold divider or small ornamental line.
4. Narrow paragraph.
5. Quiet CTA.
6. Large supporting image.

### Cards

Pelican Hill avoids heavy boxed UI. HCLA should do the same.

Use cards only for:

- Class tiers.
- Testimonials.
- Repeated event/podcast items.

Keep cards flat:

- 1px border.
- White or ivory background.
- 0-4px radius.
- Minimal shadow or no shadow.

### Images

Images carry the premium feel.

Needed image categories:

- Homepage hero: full-bleed healing space or founder-led practice.
- Classes: calm room, hands, breathwork, acupuncture/healing details.
- Teachers: editorial portraits of Winnie and Jay.
- Conscious Connections: warm event table/room, low light, real people if consented.
- Podcast: Jay in conversation or studio-like portrait.
- Award: certificate or ceremony image.
- Partner logos: already present.

Avoid:

- Generic stock meditation silhouettes.
- Abstract gradient backgrounds.
- Dark unreadable overlays.
- Cropped faces unless intentionally editorial.

## Page-Level Application

### Homepage

Recommended structure:

1. Full-bleed hero.
2. Slim reservation-style class finder band.
3. "At a Glance" grid: Classes, Conscious Connections, Podcast, Institutional Facilitation.
4. Centered editorial section for the motto and ARC.
5. Wide image/text Three Harmonies sequence.
6. Featured class tiers.
7. Award/trust band.
8. Founder preview.
9. Partner logo wall.
10. Final booking band.

### Classes

Make this feel like choosing a resort experience.

Structure:

1. Hero with class-oriented image.
2. Four tier cards in a clean grid.
3. Deep dive sections for Refresh, Reset, Restore, Revitalize.
4. "Which class is right for me?" selector.
5. Winnie credibility section.
6. Calendar CTA.

### Teachers

Make this editorial and portrait-led.

Structure:

1. Full-width founder image or dual portrait.
2. Award feature.
3. Winnie profile.
4. Jay profile.
5. Division of labor.
6. Institutional credibility.
7. Booking CTA.

### Conscious Connections

Translate resort "experience" language into event language.

Structure:

1. Full-bleed evening/event hero.
2. Reservation-style event details.
3. Format timeline.
4. ARC arc in the room.
5. Venue image/map.
6. Bridge to classes.

## CSS Starting Point

Use this as the direction for final page files:

```css
@import url('https://fonts.googleapis.com/css2?family=Cardo:wght@400;700&family=Source+Sans+3:wght@300;400;600;700&display=swap');

.hcla-page {
  --hcla-ink: #212121;
  --hcla-navy: #1e2a64;
  --hcla-deep-green: #395b52;
  --hcla-gold: #8c7342;
  --hcla-champagne: #e6dac1;
  --hcla-ivory: #f2f2ed;
  --hcla-muted: #757575;
  --hcla-border: #dddddd;
  --hcla-bg: #ffffff;
  --hcla-font-headline: Cardo, Palatino, Georgia, serif;
  --hcla-font-body: "Source Sans 3", Arial, sans-serif;
  --hcla-wide: 1200px;
  --hcla-content: 720px;
  --hcla-space-sm: 1rem;
  --hcla-space-md: clamp(1.25rem, 0.8vw + 1rem, 1.5rem);
  --hcla-space-lg: clamp(2rem, 3.2vw + 1rem, 3rem);
  --hcla-space-xl: clamp(3.25rem, 4vw + 2rem, 4.5rem);
  --hcla-space-xxl: clamp(5.25rem, 7.2vw + 3rem, 7.5rem);
  color: var(--hcla-ink);
  background: var(--hcla-bg);
  font-family: var(--hcla-font-body);
  font-weight: 300;
  line-height: 1.6;
}

.hcla-page h1,
.hcla-page h2,
.hcla-page h3 {
  font-family: var(--hcla-font-headline);
  font-weight: 400;
  line-height: 1.18;
}

.hcla-page .hcla-eyebrow {
  color: var(--hcla-muted);
  font-family: var(--hcla-font-body);
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.hcla-page .hcla-button {
  min-height: 44px;
  padding: 10px 20px 8px;
  border: 1px solid var(--hcla-gold);
  border-radius: 0;
  background: var(--hcla-gold);
  color: #fff;
  font-family: var(--hcla-font-headline);
  font-size: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

## Guardrails

- Do not copy Pelican Hill's HTML/CSS wholesale.
- Do not use their photography, iconography, logos, or decorative assets.
- Do not reproduce their exact section order with the same copy rhythm page after page.
- Do borrow the principles: restraint, space, photography, editorial headings, hospitality CTAs, and a reservation-like booking flow.
