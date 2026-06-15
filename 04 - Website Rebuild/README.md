# Heart Center LA Website Rebuild

This workspace is for rebuilding heartcenter.la as GoHighLevel custom-code pages.

Primary reference:

`C:\Users\Alan Ortiz\Desktop\Heart Center LA\Heart Center LA Business Plan\01 - Business Plan`

Source documents:

- `business_plan.md` - brand, offers, founders, funnel, site strategy
- `execution_plan.md` - launch sequence, event/podcast/revenue cadence

## Build Rule

Each production page must be a single self-contained HTML file that can be pasted into a GHL custom code block. Do not rely on a build system, framework imports, shared CSS files, or external JS bundles.

Shared files in `shared/` are source snippets only. Copy relevant pieces into each page file when building.

## Mandatory Update Log

Every website update must append an entry to [UPDATE-LOG.md](docs/UPDATE-LOG.md) before the work is considered complete. Include what changed, why, files touched, validation, and open items.

## Folder Map

```text
04 - Website Rebuild/
+-- assets/
|   +-- ghl-placeholders/        GHL calendars, forms, and URL placeholders
|   +-- media-map/               Asset inventory and media slot planning
+-- docs/
|   +-- IMPLEMENTATION-PLAN.md   Main build plan
|   +-- GHL-CUSTOM-CODE-STANDARDS.md
|   +-- PAGE-BRIEFS.md
+-- images/
|   +-- All Partner Logos/       Current partner logo source files
+-- pages/
|   +-- homepage/
|   +-- classes/
|   +-- teachers/
|   +-- conscious-connections/
|   +-- heart-center-connection/
|   +-- testimonials/
|   +-- find-a-class/
|   +-- contact/
|   +-- new-student/
|   +-- faq/
+-- qa/
|   +-- QA-CHECKLIST.md
+-- shared/
|   +-- scripts/                 Source JS snippets
|   +-- snippets/                Source HTML snippets
|   +-- styles/                  Source CSS snippets
+-- WORKSPACE-PROMPT.md
```

## Recommended Build Order

1. Homepage
2. Classes
3. Teachers
4. Find a Class
5. Conscious Connections
6. Heart Center Connection
7. Testimonials
8. New Student
9. FAQ
10. Contact

Homepage sets the visual system. Classes is the main revenue page. Teachers supplies the trust layer.
