# GHL Custom Code Standards

These rules keep each page safe to paste into a GoHighLevel custom code block.

## Page File Shape

Use this order:

```html
<!-- Heart Center LA | Page Name | Route: /route -->
<style>
  /* Page-scoped CSS here */
</style>

<section id="hcla-page-slug" class="hcla-page hcla-page-slug">
  <!-- Page markup here -->
</section>

<script>
  (function () {
    var root = document.getElementById('hcla-page-slug');
    if (!root) return;
    // Page-scoped JS here.
  })();
</script>
```

Do not include `<html>`, `<head>`, or `<body>` tags in production files.

## CSS Rules

- Prefix selectors with the page wrapper, for example `.hcla-classes .hcla-button`.
- Keep brand tokens in the page file.
- Keep radius at 8px or less unless a specific component needs a circle.
- Use stable dimensions for buttons, cards, media slots, and grids.
- Do not scale font sizes with viewport width.
- Do not use negative letter spacing.
- Avoid one-color palettes; use navy, green, gold, white, soft gray, and ink deliberately.

Base tokens for the Pelican Hill-inspired HCLA direction:

```css
:root {
  --hcla-ink: #212121;
  --hcla-navy: #1e2a64;
  --hcla-deep-green: #395b52;
  --hcla-gold: #8c7342;
  --hcla-champagne: #e6dac1;
  --hcla-ivory: #f2f2ed;
  --hcla-muted: #757575;
  --hcla-border: #dddddd;
  --hcla-bg: #fff;
  --hcla-font-headline: Cardo, Palatino, Georgia, serif;
  --hcla-font-body: "Source Sans 3", Arial, sans-serif;
}
```

Use Google Fonts `Cardo` and `Source Sans 3` unless Heart Center LA has licensed Adobe fonts available. Pelican Hill uses Adobe-hosted families including Bembo-style serif, Proxima Nova, and Arboria; do not depend on their font kit.

## JavaScript Rules

- Wrap all JS in an IIFE.
- Query inside the page root.
- Do not create globals.
- Toggle mobile nav with `aria-expanded`.
- Keep accordions keyboard accessible.
- Avoid JS for layout when CSS can handle it.

## Media Rules

- Use `data-media-slot` on visual containers.
- Use `data-media-img` on images.
- Set `data-media-state="loaded"` after successful image load.
- Provide graceful fallbacks for missing founder photos, award images, class/event images, and testimonials.
- Rehost final images in GHL before launch.
- Favor full-bleed or wide editorial images over decorative cards.

## GHL Forms, Calendars, And Links

Use placeholders until final GHL assets exist:

- `{{HCLA_BOOK_CLASS_URL}}`
- `{{HCLA_REFRESH_BOOKING_URL}}`
- `{{HCLA_RESET_BOOKING_URL}}`
- `{{HCLA_RESTORE_BOOKING_URL}}`
- `{{HCLA_REVITALIZE_BOOKING_URL}}`
- `{{HCLA_EVENT_TICKET_URL}}`
- `{{HCLA_LETTER_FORM_EMBED}}`
- `{{HCLA_CONTACT_FORM_EMBED}}`
- `{{HCLA_CLASS_CALENDAR_EMBED}}`

If a GHL calendar or form cannot be embedded inside the custom-code block reliably, place a native GHL element directly below the custom-code section and link to it with an anchor.

## Routing

Use these routes:

- `/`
- `/classes`
- `/teachers`
- `/conscious-connections`
- `/heart-center-connection`
- `/testimonials`
- `/find-a-class`
- `/contact`
- `/new-student`
- `/faq`

Primary CTA:

- `BOOK A CLASS` -> `/find-a-class`

## Accessibility

- Use semantic headings in order.
- Buttons that open menus need `aria-expanded`.
- Form placeholders need visible labels nearby.
- Image slots need meaningful alt text when images are final.
- Accordions should be real buttons, not clickable divs.

## Page Settings In GHL

Set these in GHL page settings rather than inside the custom-code block:

- Page title
- Meta description
- Canonical URL
- Open Graph image
- Favicon/global tracking
- Any required GHL automation bindings
