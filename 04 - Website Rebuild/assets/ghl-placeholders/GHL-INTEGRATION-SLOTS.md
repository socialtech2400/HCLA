# GHL Integration Slots

Replace these placeholders when the matching GHL calendars, forms, or checkout URLs are ready.

## Booking URLs

```text
{{HCLA_BOOK_CLASS_URL}}
{{HCLA_REFRESH_BOOKING_URL}}
{{HCLA_RESET_BOOKING_URL}}
{{HCLA_RESTORE_BOOKING_URL}}
{{HCLA_REVITALIZE_BOOKING_URL}}
```

## Embeds

```text
{{HCLA_CLASS_CALENDAR_EMBED}}
{{HCLA_CONTACT_FORM_EMBED}}
{{HCLA_LETTER_FORM_EMBED}}
{{HCLA_TESTIMONIAL_FORM_EMBED}}
```

## Event

```text
{{HCLA_EVENT_TICKET_URL}}
{{HCLA_NEXT_EVENT_DATE}}
{{HCLA_EVENT_VENUE_MAP_URL}}
```

## Media

```text
{{HCLA_LOGO_URL}}
{{HCLA_WINNIE_PHOTO_URL}}
{{HCLA_JAY_PHOTO_URL}}
{{HCLA_AWARD_IMAGE_URL}}
{{HCLA_HOMEPAGE_HERO_IMAGE_URL}}
{{HCLA_HOMEPAGE_FOUNDERS_IMAGE_URL}}
{{HCLA_CLASSES_IMAGE_URL}}
{{HCLA_EVENT_IMAGE_URL}}
{{HCLA_ECOSYSTEM_IMAGE_1_URL}}
{{HCLA_ECOSYSTEM_IMAGE_2_URL}}
{{HCLA_ECOSYSTEM_IMAGE_3_URL}}
{{HCLA_ECOSYSTEM_IMAGE_4_URL}}
{{HCLA_ECOSYSTEM_IMAGE_5_URL}}
{{HCLA_AWARD_GROUP_IMAGE_URL}}
{{HCLA_AWARD_JAY_CERTIFICATE_URL}}
{{HCLA_AWARD_WINNIE_CERTIFICATE_URL}}
{{HCLA_WINNIE_PROFILE_IMAGE_URL}}
{{HCLA_JAY_PROFILE_IMAGE_URL}}
```

## Recommended GHL Native Elements

- Class calendar: native GHL calendar element if embed code is unstable inside custom code.
- Contact form: native GHL form element below custom-code section, anchored as `#contact-form`.
- Letter submission: native GHL form element below podcast custom-code section, anchored as `#submit-letter`.
- Testimonial form: native GHL form element below testimonials custom-code section, anchored as `#share-feedback`.

## Automation Notes

- Class booking should trigger confirmation, reminder, and first-timer prep emails.
- Event ticket should trigger same-night, day-3, and day-7 follow-up.
- Letter submission should trigger confirmation and consent-aware review workflow.
- Contact form should branch by inquiry type: private session, institutional, general.
