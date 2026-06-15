# QA Checklist

Run this checklist for each page locally and again after pasting into GHL.

## Layout

- Desktop width checked.
- Tablet width checked.
- Mobile width checked.
- No overlapping text or controls.
- Buttons keep stable size and readable labels.
- Cards and grids do not shift on hover.
- Hero leaves the next section hinted on common viewport heights.

## GHL Compatibility

- No `<html>`, `<head>`, or `<body>` tags in the pasted code.
- CSS is scoped to the page wrapper.
- JS is wrapped in an IIFE.
- No dependency on external JS libraries.
- Google Fonts load from inside the page code or GHL global settings.
- Forms/calendars render correctly in GHL preview.
- No duplicate IDs caused by repeated GHL sections.

## Navigation And CTAs

- Desktop nav links work.
- Mobile nav opens and closes.
- `aria-expanded` changes on the mobile nav button.
- Main CTA points to `/find-a-class`.
- Tier CTAs point to final GHL booking/payment links.
- External links open as expected.

## Media

- Founder images load.
- Award image or badge loads.
- Partner logos load.
- Missing images show acceptable fallback state.
- Alt text is meaningful.
- Images are not distorted.

## Forms And Calendars

- Class calendar appears and can select a time.
- Contact form submits.
- Podcast letter form submits.
- Event ticket CTA works.
- Testimonial/feedback form works where present.
- Form success states trigger the intended GHL automation.

## Content

- Motto appears correctly.
- Class tier prices are correct.
- Award date is correct: May 21, 2026.
- Contact details are correct.
- No placeholder testimonial is presented as real proof.
- Medical/safety language avoids overpromising outcomes.

## Accessibility

- Headings are in a sensible order.
- Interactive controls are keyboard reachable.
- Accordion controls are buttons.
- Focus states are visible.
- Color contrast is sufficient.
- Forms have labels or clear accessible names.

## Launch

- GHL page title is set.
- GHL meta description is set.
- Open Graph image is set.
- Canonical URL is set.
- Tracking is present only once.
- Published URL matches planned route.
- Final page tested outside preview mode.
