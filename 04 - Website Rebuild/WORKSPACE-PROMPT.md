# Heart Center LA — Website Rebuild Prompt

Use this prompt when opening a new Claude Code workspace to build the heartcenter.la website.

---

## THE PROMPT

Copy everything below the line into a new workspace:

---

You are building the new website for **Heart Center LA** (heartcenter.la). The platform is **GoHighLevel (GHL)**. Each page is a self-contained HTML file with scoped CSS and inline JS — these get pasted as custom code blocks in GHL. There is no build system, no framework, no component imports.

Before finishing any update, append a new entry to `docs/UPDATE-LOG.md`. The log is mandatory and must include what changed, why, files touched, validation, and open items.

## BRAND FOUNDATION

**Motto:** "We provide spaces that encourage healing to happen."

**Method:** The ARC framework — a proprietary diagnostic and transformational method:
- Public register: See → Name → Change
- Course register: Aware → Release → Choose & Commit
- Practitioner register: Excavate → Interpret → Restore

**Philosophy — The Three Harmonies:**

The Three Harmonies introduce the founders in sequence — Winnie alone, then Jay alone, then both together. This narrative arc is intentional and should be preserved on the site.

1. **Self Harmony** (Winnie) — alignment within the body (jaw, gut, pelvis). Dr. Winnie Chan Wang's Jaw-Gut-Pelvis method. → Maps to healing classes, private sessions.
2. **Heaven + Earth + Human Harmony** (Jay) — the vertical integration — connecting the individual to something larger than themselves. Dr. Jay Dubois, PhD brings this through his work in anthropology, relational coaching, and the ARC framework. Alignment with Heaven's timing, Earth's conditions, and Human Harmony through sacred breathwork and practice. → Maps to daily breathwork, Heart Center LA classes, ARC coaching.
3. **Harmony with Other Humans** (Both) — healing in community. Winnie and Jay founded the Compassionate Transformation Community (nonprofit). → Maps to events, institutional facilitation.

**Founders:**
- **Dr. Winnie Chan Wang** — Licensed acupuncturist, MIT (dual BS CS & Finance), NYU (MS Integrated Marketing), MS Oriental Medicine, creator of Jaw-Gut-Pelvis method, Tao Calligraphy / Master Sha lineage, founder of Compassionate Transformation Community. Clinical anchor, leads all healing classes, daily breathwork, private sessions.
- **Dr. Jay Dubois, PhD** — Professor of Anthropology at CSU San Bernardino & Northridge, author of *Stop Leaking Power*, Executive Director of Compassionate Transformation Community, 20+ years in healing arts, founder of Sacred Brotherhood men's circle. Public voice, podcast host, event lead.
- **Both** received the **World Cultural Harmony Award** (May 21, 2026) from the World Cultural Harmony Council / International Alliance of Civilization — UN "Culture of Peace" recognition. **This must be prominently featured on the site.**

**Key quotes from Winnie (use on appropriate pages):**
- "Each person, every time they show up to a lightwall session, Heart Center Connection, retreat — they are not just doing it for themselves, they are doing it for world peace. Everything that they do for themselves they project to the world. Heal yourself, heal the world."
- "If you want to heal the world, look inside your body."

## THE OFFER STACK (what the site sells)

**Primary revenue — Healing Classes (4 tiers):**

| Tier | Price | What It Is | What Changes |
|---|---|---|---|
| Refresh | $35 | Light renewal — less tired, not transformed | Energy, mental clarity, emotional load |
| Reset | $84 | Conscious pattern interruption — stop, clear, re-orient | Habits, focus, nervous system state |
| Restore | $196 | Repair what's been depleted or damaged | Capacity, baseline health, emotional stability |
| Revitalize | $238/month | Full month of classes — renewal at a higher level | Identity, purpose, direction, new vitality |

**The website exists primarily to sell these classes. Every page should have a path to class booking.**

**Secondary offers:**
- **Conscious Connections** — live conscious speed dating event, Thursday nights, Atelier by Artmingo (Pasadena). Format: arrival + beverages → communal breathing practice → guided question rounds (structured rotation) → conscious speed dating. Singles 20s-30s. $45-65 tickets.
- **Heart Center Connection Podcast** — free weekly podcast, advice column format. Listeners submit letters, Jay walks them through ARC on air.
- **Institutional Facilitation** — Jay & Winnie hired for corporate, hospital, community healing events (B2B).

**Existing institutional partners (logo wall):** LA County DMH, LA General Medical Center, USC Pacific Asia Museum, Autry Museum, Earthstock, EO, Medium, Sanctuary, The Real Mental Health, Uprising Together, Zula Den.

## CONVERSION FUNNEL

```
Podcast / Social / Event → heartcenter.la → Classes page → Book a class (GHL calendar)
```

Every page funnels toward class enrollment. The site must:
1. Communicate the motto as the first thing visitors understand
2. Sell the healing classes with clear tier selection and booking CTAs
3. Feature the World Cultural Harmony Award prominently
4. Surface the Three Harmonies as the "why this works" narrative
5. Bridge free content (podcast, event) to paid class enrollment

## PAGES TO BUILD

Build each page as a single self-contained HTML file with scoped CSS. Use this naming pattern: `ghl-<slug>-v3-custom-code.html`

| Page | Route | Priority | Key Content |
|---|---|---|---|
| Homepage | `/` | Critical | Hero with motto, class overview cards (4 tiers), Three Harmonies section, partner logo wall, UN award badge, testimonials, CTA to booking |
| Classes | `/classes` | Critical | Full 4-tier breakdown with "what changes" / "what doesn't change", pricing, self-selection language ("use when..."), booking CTA per tier |
| Teachers | `/teachers` | Critical | Winnie & Jay profiles, full credentials, UN award featured with badge/image, division of labor |
| Conscious Connections | `/conscious-connections` | High | Event landing page — format breakdown, next date, venue, ticket purchase, ARC arc in the room |
| Heart Center Connection | `/heart-center-connection` | High | Podcast landing — episode archive, letter submission form, "how it works" |
| Testimonials | `/testimonials` | High | Video testimonials (when available), written testimonials, partner logos |
| Find a Class | `/find-a-class` | High | GHL calendar integration slot, timezone reference |
| Contact | `/contact` | Medium | Private session inquiry, institutional booking inquiry, location info |
| New Student | `/new-student` | Medium | First-timer onboarding, what to expect, how classes work |
| FAQ | `/faq` | Medium | Objection handling, accordion format |

## DESIGN SYSTEM

Use a Pelican Hill-inspired luxury hospitality direction for the v3 site. The visual reference is `https://pelicanhill.com/`: full-bleed imagery, editorial serif headlines, quiet uppercase CTAs, generous spacing, warm gold/ivory accents, and a reservation-like booking experience.

Do not copy Pelican Hill's proprietary assets, exact code, exact copy, or brand marks. Borrow the layout grammar and mood, then translate it into Heart Center LA's healing-class funnel.

Use this token system:

```css
:root {
  --hcla-ink: #212121;
  --hcla-navy: #1e2a64;
  --hcla-deep-green: #395b52;
  --hcla-green: #88987d;
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

Fonts: Cardo and Source Sans 3 (load from Google Fonts). Pelican Hill uses Adobe-hosted Bembo/Palatino-style serif plus Proxima Nova/Arboria-style sans; Cardo + Source Sans 3 gives us a compatible open-source pairing for GHL.

Layout style:
- Full-bleed photo/video hero, not a card-based hero
- Header pattern: menu left, centered brand, phone + booking CTA right
- Alternating wide image/text editorial sections
- Small uppercase tracked eyebrow labels
- Classical serif headlines with quiet body copy
- Thin gold dividers instead of decorative blobs
- Flat cards only for repeated items like class tiers and testimonials
- Booking should feel like reserving an experience, not filling out a marketing form

**Nav links:** Home, New Student, Classes, Teachers, Testimonials, FAQ, Contact
**Nav CTA:** "BOOK A CLASS" (links to `/find-a-class`)
**Footer:** Brand/logo, nav links, contact info (heartcenterla1@gmail.com, (213) 856-1293, 2801 E. Foothill Blvd., Pasadena CA 91107), social placeholders, copyright.

**Media slot system:** Use `data-media-slot` and `data-media-img` attributes. Set `data-media-state="loaded"` or fallback on image load. Expose image URLs through CSS variables (e.g., `--hcla-logo-url`).

**Mobile:** Nav toggle via `.hcla-nav-toggle` toggling `.hcla-nav-links.is-open` with `aria-expanded`. All pages must be fully responsive.

## WHAT'S DIFFERENT FROM THE OLD SITE

The old site (v2) was built around Winnie's healing practice classes (Yang Active Healing, Yin Lie-Down Healing) with a "Heal Your Heart. Reclaim Your Life." message. The new site must:

1. **Lead with the motto** — "We provide spaces that encourage healing to happen" replaces the old hero
2. **Feature the 4-tier class pricing** — Refresh/Reset/Restore/Revitalize replaces the old Drop-In/3-Pack/8-Pack/Monthly pricing
3. **Add Conscious Connections event page** — new page, didn't exist before
4. **Feature the UN award** — new, prominent trust signal
5. **Add Three Harmonies** — new philosophical framework section (homepage and/or dedicated section)
6. **Drop the jayduboisphd.com sub-brand** — everything is Heart Center LA now
7. **Podcast page becomes advice-column focused** — letter submission form, episode seeds

## FILE STRUCTURE

```
04 - Website Rebuild/
+-- pages/
|   +-- homepage/ghl-homepage-v3-custom-code.html
|   +-- classes/ghl-classes-v3-custom-code.html
|   +-- teachers/ghl-teachers-v3-custom-code.html
|   +-- conscious-connections/ghl-conscious-connections-v3-custom-code.html
|   +-- heart-center-connection/ghl-heart-center-connection-v3-custom-code.html
|   +-- testimonials/ghl-testimonials-v3-custom-code.html
|   +-- find-a-class/ghl-find-a-class-v3-custom-code.html
|   +-- contact/ghl-contact-v3-custom-code.html
|   +-- new-student/ghl-new-student-v3-custom-code.html
|   +-- faq/ghl-faq-v3-custom-code.html
+-- images/
+-- WORKSPACE-PROMPT.md
```

## BUILD ORDER

1. Homepage (sets the design standard for everything else)
2. Classes (the money page)
3. Teachers (trust/credibility)
4. Then remaining pages in any order

Start with the homepage. Build it completely, then ask before moving to the next page.
