# Light Shower Implementation Plan

- **Current working focus:** Phase 1 — audit the live TCLW system and establish the recovery boundary
- **Last updated:** August 9, 2026
- **Implementation order:** protect Midweek → audit TCLW → build GHL state → prove customer journeys → connect fresh Zoom links → add attendance and replay → launch in waves

## Outcome

Light Shower is complete when a customer can enter through the correct free, `$99`, or `$199` path; book an eligible Monday, Tuesday, Thursday, or Friday occurrence; receive the correct remote or in-person instructions; attend once without duplicate state changes; receive only the fulfillment included in the purchase; and exit through expiry, refund, or support without manual data repair.

The existing production Midweek slice is the implementation reference for mode-safe confirmations, reminders, cancellations, and the Pabbly-to-GHL fresh-link handoff. It is not evidence that the separate Light Shower access, credit, attendance, recording, or replay rules work.

## Current status

| Area | Current truth | Next action |
|---|---|---|
| Midweek production reference | Midweek Women's Circle, `MW-10`, `MW-11`, `MW-12`, `MW-14`, and its Pabbly Zoom-link handoff are owner-reported production | Record live IDs, timing, owners, and rollback steps without redesigning the path |
| Light Shower pages | Local hub, weekday, free-visit, checkout, and confirmation sources exist | Reconcile each source with its live GHL page before upload or replacement |
| GHL Light Shower assets | Logical calendars, products, forms, fields, and test contacts are documented; live IDs and behavior remain to verify | Complete the live asset inventory and test each asset independently |
| GHL Light Shower workflows | The workflow catalog is documented; production state is not established | Build in the dependency order below and capture test evidence per workflow |
| Light Shower Pabbly publishers | The observed morning publisher still reflects the former M/W/F pattern; the owner reports a parallel T/Th publisher | Preserve and inspect both before removing Wednesday or changing the inbound receiver |
| Attendance and replay | Designed but not proven end to end | Activate only after booking, meeting publication, and link preflight pass |
| `$499` private expansion | Defined as an optional post-purchase path | Keep outside the core Light Shower launch critical path |

## Locked operating contract

These rules are implementation constraints, not optional copy choices.

| Rule | Required behavior |
|---|---|
| Active schedule | Monday and Friday remote; Tuesday and Thursday remote or in person; no Wednesday Light Shower |
| Free first visit | Online only; Monday, Tuesday, Thursday, or Friday; no in-person or Midweek option |
| `$99` Three-Class Access | Initialize three credits; reserve at booking if needed; consume one only after verified attendance; a no-show keeps the credit |
| `$99` replay | Grant only after attendance and archive verification; expire exactly 72 hours after the scheduled class end |
| `$199` Unlimited Month | Start exactly 30 consecutive days at successful payment; include live Light Shower access and the approved 15-minute-session benefit; do not promise library access |
| Attendance authority | Zoom/Pabbly evidence plus facilitator reconciliation; GHL owns the final entitlement mutation |
| Link timing | Create each Zoom meeting inside the T-minus-50-minute window; earlier reminders are schedule-only |
| In-person messaging | Include approved clinic instructions and no Zoom link |
| Remote messaging | Include the verified occurrence link and no clinic-arrival instructions |
| Wednesday boundary | `/wednesday` remains unpublished, unlinked, absent from calendars and schema, and is not repurposed for Midweek |
| Wellness claims | Describe the spiritual, educational, reflective experience and exact deliverables; do not promise diagnosis, treatment, healing, cure, regulation, or a guaranteed result |

## Scope and deferrals

### Required for the core launch

- Light Shower hub and four active weekday pages.
- Online-only free-first-visit path.
- `$99` purchase, three-credit state, verified credit consumption, and matching replay.
- `$199` purchase, exact 30-day access, benefit tracking, and expiry.
- Monday/Friday remote delivery.
- Tuesday/Thursday remote and in-person delivery.
- Fresh occurrence-specific Zoom publication and staff preflight.
- Attendance, no-show, refund, support, monitoring, and rollback.

### Deferred from the critical path

- Remaining Midweek workflow families.
- `$499` private-expansion activation.
- Future testimonial requests.
- In-person event discounts without an approved event.
- Any public `$35` Tuesday/Thursday offer.
- New funnel experiments until the baseline journey is stable and measured.

## Phase 0 — Protect the Midweek production reference

**Purpose:** preserve the working system before reusing its pattern.

- [ ] Export or screenshot the live `MW-10`, `MW-11`, `MW-12`, and `MW-14` workflow settings.
- [ ] Record the exact Midweek calendar, form, workflow, custom-value, webhook, Pabbly, and Zoom asset IDs.
- [ ] Record the production publisher time, receiving GHL workflow, link custom value, sender identities, owner, alert path, and manual fallback.
- [ ] Confirm rollback can disable a broken send without deleting contact, appointment, payment, or workflow history.
- [ ] Observe at least one production occurrence and capture the Pabbly run, GHL receiver run, and customer-link send result.
- [ ] Leave all deferred Midweek families unchanged.

**Gate:** the Midweek reference can be restored or isolated, and its verified implementation details are available for comparison.

## Phase 1 — Audit the live TCLW system

**Purpose:** determine what exists, what is broken, and what can be reused without creating duplicate assets.

### Production backup and inventory

- [ ] Create a restorable backup of every live Light Shower page, funnel step, workflow, calendar, form, product, custom field, custom value, route, and redirect.
- [ ] Record the live GHL ID, current status, owner, dependency, and last successful test for every inventory row.
- [ ] Reconcile the live routes with the local source files and the dashboard.
- [ ] Search the live pages and messages for retired prices, Wednesday Light Shower, library promises, placeholders, and conflicting schedule language.

### Publisher and receiver inspection

- [ ] Inspect the morning Pabbly publisher without editing it; confirm its current days, timezone, start time, meeting topic, duration, Zoom action, formatter, and webhook body.
- [ ] Inspect the Tuesday/Thursday publisher and record the same values.
- [ ] Inspect the receiving GHL inbound workflow and confirm exactly how `zoom_link_today` becomes a Custom Value or contact/occurrence value.
- [ ] Identify every workflow that can write the Light Shower link and remove competing-writer risk from the implementation design.
- [ ] Confirm whether the exposed inbound webhook has been rotated. If not, schedule rotation before new integration testing.
- [ ] Document the actual failure being fixed: stale link, missing link, wrong day, wrong recipient, wrong mode, duplicate send, access error, or another observed failure.

### Owner inputs required during the audit

- [ ] Tuesday and Thursday physical capacity.
- [ ] Approved arrival time, parking, and accessibility instructions.
- [ ] Current sender name, sender address, Reply-To, and operational SMS identity.
- [ ] Approved attendance-duration threshold or manual-review default.
- [ ] Approved 15-minute-session expiration and reschedule policy.
- [ ] Recording consent, archive owner, protected playback surface, and retention rule.

**Gate:** every live asset and data writer is mapped; the failure is reproduced or evidenced; the recovery plan changes only verified targets.

## Phase 2 — Build and verify the GHL foundation

**Purpose:** make GHL authoritative before adding time-sensitive meeting automation.

### Calendars and forms

- [ ] `CAL-LS-FREE-REMOTE`: Monday, Tuesday, Thursday, and Friday; online only.
- [ ] `CAL-LS-PAID-REMOTE`: all four active days for verified `$99` or `$199` access.
- [ ] `CAL-LS-PAID-INPERSON`: Tuesday and Thursday only with approved capacity and clinic instructions.
- [ ] Attach the correct form to each calendar and store consent, source, delivery mode, pricing path, appointment ID, and occurrence context.
- [ ] Confirm no public or protected calendar exposes Wednesday Light Shower.

### Products and payment authority

- [ ] Verify the live `$99` product ID and successful, failed, refunded, and duplicate-payment behavior.
- [ ] Verify the live `$199` product ID and successful, failed, refunded, and duplicate-payment behavior.
- [ ] Confirm each native order form contains exactly one intended product.
- [ ] Fulfill only from successful payment or staff-verified entitlement, never from a form submission alone.

### State model and ledgers

- [ ] Create or verify the access, credit, reminder, attendance, no-show, replay, benefit, attribution, and review fields in the asset map.
- [ ] Implement occurrence, booking, and attendance/fulfillment records in a GHL Custom Object when suitable; otherwise use a restricted synchronized operational table.
- [ ] Require stable `contact_id`, `appointment_id`, `booking_id`, `occurrence_id`, `program_code`, start/end time, timezone, delivery mode, pricing path, eligibility, and calendar ID in downstream payloads.
- [ ] Require an idempotency key containing at least contact and occurrence identity for every external mutation.

### Test contacts

- [ ] New free visitor.
- [ ] Free visit already used.
- [ ] Active `$99` with three credits.
- [ ] Active `$99` with zero credits.
- [ ] Active `$199`.
- [ ] Expired `$199`.
- [ ] Tuesday/Thursday remote.
- [ ] Tuesday/Thursday in person.
- [ ] Failed payment, refund, DND, duplicate event, and manual-review contact.

**Gate:** every asset has a live ID and independent test; the correct test contacts can reach only eligible calendars and modes; no unfinished customer path receives traffic.

## Phase 3 — Prove the core customer journeys

**Purpose:** establish correct customer and access state before connecting fresh Zoom links.

### Foundation workflows

- [ ] `LS-00` — Contact normalization.
- [ ] `LS-01` — Successful payment router.
- [ ] `LS-02` — Failed payment.
- [ ] `LS-03` — DND and unsubscribe.
- [ ] `LS-04` — Reminder preference manager.
- [ ] `LS-05` — Access integrity audit.
- [ ] `LS-06` — Workflow error escalation.

### Free journey

- [ ] `LS-10` — Free registration.
- [ ] `LS-11` — Free confirmation and preparation.
- [ ] `LS-12` — Free appointment reminders; keep the fresh-link action gated until Phase 4.
- [ ] `LS-13` — Free visit attended; keep attendance mutation gated until Phase 5.
- [ ] `LS-14` — Free visit no-show; keep reconciliation gated until Phase 5.
- [ ] `LS-15` — Post-visit decision follow-up.
- [ ] `LS-16` — Abandoned registration or checkout.
- [ ] `LS-17` — Delivery-mode router.
- [ ] `LS-18` — Delivery-mode change.
- [ ] Keep `LS-19` held unless an owner-approved one-time Wednesday notice is still required.

### `$99` journey

- [ ] `LS-30` — Purchase and initialize three credits.
- [ ] `LS-32` — Deduct one credit only after verified attendance; activate its mutation in Phase 5.
- [ ] `LS-33` — Continuity follow-up without pressuring no-shows.
- [ ] Keep replay grant `LS-31` gated until attendance and archive verification pass.
- [ ] Keep `$499` eligibility `LS-34` outside the core launch gate.

### `$199` journey

- [ ] `LS-40` — Purchase and exact 30-day activation.
- [ ] `LS-41` — Live-access instructions.
- [ ] `LS-42` — Access rescue.
- [ ] `LS-43` — Complimentary 15-minute-session benefit.
- [ ] Keep `LS-44` held until a real eligible event exists.
- [ ] `LS-45` — Engagement and expiry notices.
- [ ] `LS-46` — Exact Unlimited Month expiration.

### Refund and support

- [ ] `LS-60` — Refund request intake.
- [ ] `LS-61` — Approved refund and applicable access revocation.
- [ ] `LS-62` — Manual review.
- [ ] `LS-63` — Support escalation.

### Required tests

- [ ] Success, failure, duplicate payment, refund, chargeback, cancellation, reschedule, DND, and expired-access cases.
- [ ] A `$99` booking may reserve eligibility but cannot consume a credit before verified attendance.
- [ ] `$199` begins at successful payment and expires exactly 30 consecutive days later.
- [ ] Access ending removes the contact from remote and entitled Midweek reminders without deleting history.
- [ ] Every wrong-mode, missing-context, or unsupported-eligibility case stops and creates staff review.

**Gate:** free, `$99`, and `$199` journeys produce correct GHL state without depending on a Zoom meeting or manual data repair.

## Phase 4 — Connect occurrence-specific Zoom links

**Purpose:** adapt the proven Midweek handoff without letting a generic or stale URL trigger customer sends.

### Publisher target

- [ ] Morning publisher runs Monday and Friday only, approximately 50 minutes before the 7:00 AM class.
- [ ] Evening publisher runs Tuesday and Thursday only, approximately 50 minutes before the 6:00 PM class.
- [ ] Wednesday creates no Light Shower meeting, link, reminder, attendance, replay, or credit event.
- [ ] Preserve the formatter only if testing confirms it is still needed to produce a clean join URL.

### Publication payload

- [ ] Keep `zoom_link_today` only for migration compatibility.
- [ ] Publish `schema_version`, `event_type`, `publisher_run_id`, `idempotency_key`, `program_code`, `occurrence_id`, scheduled start/end, timezone, delivery-mode scope, meeting ID, meeting UUID, and join URL.
- [ ] Validate the webhook signature or protected endpoint method selected for the implementation.
- [ ] Rotate the exposed GHL inbound webhook and confirm the old endpoint no longer executes.

### GHL receiver and preflight

- [ ] Only one receiver writes the occurrence's meeting state.
- [ ] Reject missing, duplicate, stale, wrong-program, wrong-day, wrong-time, or wrong-occurrence events.
- [ ] `LS-25` verifies the inbound run, date, occurrence, meeting identity, and URL before any customer send.
- [ ] Remote branches receive the fresh verified link.
- [ ] In-person Tuesday/Thursday branches receive clinic instructions and no Zoom link.
- [ ] Missing or stale data stops the customer send, alerts staff, and provides the documented manual fallback.

### Canary order

- [ ] Staff-only Monday remote occurrence.
- [ ] Staff-only Friday remote occurrence.
- [ ] Staff-only Tuesday with both remote and in-person contacts.
- [ ] Staff-only Thursday with both remote and in-person contacts.
- [ ] Duplicate publisher run and stale-link failure tests.

**Gate:** all four day/mode canaries deliver the correct instructions exactly once; failed preflight produces no customer link send.

## Phase 5 — Add attendance, credit, recording, and replay

**Purpose:** apply post-class state only from verified, deduplicated evidence.

### Attendance and no-show

- [ ] `LS-26` receives Zoom/Pabbly evidence and facilitator check-in evidence into one reconciliation path.
- [ ] Aggregate leave/rejoin segments before evaluating attendance.
- [ ] Match by stored GHL contact and meeting registration identity when available; use exact email as fallback; never resolve by display name alone.
- [ ] Deduplicate by meeting occurrence plus contact.
- [ ] Route ambiguous matches to manual review without consuming credit or incrementing the satisfaction count.
- [ ] `LS-27` marks a no-show only after the evidence window closes.
- [ ] `LS-28` sends the correct post-class message once.

### `$99` credit and replay

- [ ] `LS-32` consumes one credit exactly once after verified attendance.
- [ ] A no-show leaves the credit balance unchanged.
- [ ] `LS-31` grants only the matching replay after attendance and archive verification.
- [ ] Revoke customer replay at scheduled class end plus exactly 72 hours.

### Recording archive

- [ ] `LS-29` starts from `recording.completed` and copies the MP4 immediately to restricted Drive storage.
- [ ] Verify file ID, non-zero size, playback, occurrence identity, and archive ownership.
- [ ] Delete the Zoom cloud recording at recording completion plus 72 hours only while the Drive archive remains verified.
- [ ] Keep failed transfers retryable and visible to staff; never delete the Zoom source after an unverified archive.

### `$199` satisfaction count

- [ ] Increment the active-cycle attendance count once per verified eligible occurrence.
- [ ] Do not count duplicate, ambiguous, outside-window, or ineligible attendance.
- [ ] Route refund-threshold decisions that cannot be made from complete evidence to manual review.

**Gate:** a full test occurrence produces one attendance result, correct credit/count behavior, a verified archive, correct replay eligibility, exact expiry, and no duplicate mutation.

## Phase 6 — Production QA and traffic release

**Purpose:** release the smallest reversible slice and expand only from evidence.

### End-to-end test

- [ ] Register or purchase in GHL.
- [ ] Confirm booking, occurrence, eligibility, mode, and expected roster.
- [ ] Let Pabbly create the meeting inside the T-minus-50-minute window.
- [ ] Confirm GHL receives and validates the occurrence and fresh link.
- [ ] Pass staff preflight, then send the correct remote or in-person message.
- [ ] Join, leave, and rejoin with controlled test participants.
- [ ] Reconcile attendance once and verify no-show behavior.
- [ ] Verify `$99` credit or `$199` satisfaction-count mutation exactly once.
- [ ] Archive and verify the recording.
- [ ] Grant only the eligible replay and verify exact expiry.
- [ ] Trigger at least one failure path and prove the staff fallback.

### Release waves

1. Staff-only occurrences with all sends directed to test contacts.
2. Free-first-visit traffic after booking and fresh-link delivery pass.
3. `$199` traffic after exact access, attendance counting, benefit, and expiry pass.
4. `$99` traffic only after credit and replay fulfillment pass.
5. `$499` only as a separate optional post-purchase project after the core system is stable.

### Monitoring and rollback

- [ ] Assign the first-week owner and daily review time.
- [ ] Monitor payments, booking mismatches, missing/stale links, failed sends, DND, attendance review, credit/count anomalies, archive failures, replay expiry, refunds, and mobile issues.
- [ ] Store test evidence and production incident notes without sensitive intake data.
- [ ] Rollback removes traffic and disables only the affected invitation, payment, or fulfillment workflow.
- [ ] Preserve contacts, appointments, transactions, audit history, and occurrence records during rollback.

**Gate:** every required launch check passes, a rollback has been rehearsed, and traffic can expand without relying on staff to correct normal customer state.

## Measurement plan

| Event or measure | Required context | Launch question |
|---|---|---|
| `program_viewed` | Route and source | Are visitors reaching the intended Light Shower entry point? |
| `delivery_mode_selected` | Program, occurrence, remote/in-person | Are Tuesday/Thursday choices clear without wrong-mode bookings? |
| `pricing_path_selected` | Free, `$99`, or `$199` | Where do eligible visitors abandon the decision? |
| `booking_completed` | Contact-safe event ID, occurrence, calendar, mode | Does each intended path produce one booking? |
| Fresh-link preflight result | Publisher run, occurrence, status, failure reason | Are customer sends reliably blocked when the link is missing or stale? |
| `attendance_verified` | Occurrence, source, deduplication key | Does one participant produce one final attendance result? |
| `credit_consumed` | `$99` purchase cycle and occurrence | Are credits consumed only after verified attendance? |
| `satisfaction_count_incremented` | `$199` active cycle and occurrence | Are threshold counts accurate and idempotent? |
| `replay_granted` | Occurrence, archive status, expiry | Is replay delivered only to eligible attendees for the promised window? |
| `manual_review_created` | Reason code and owner | Which failures still require process or automation improvement? |

Do not send health intake, free-text notes, testimonial content, or unnecessary personal details to analytics.

## Claim and offer risk register

| Risk | Control | Release gate |
|---|---|---|
| Light Shower copy implies diagnosis, treatment, or guaranteed outcomes | Use experiential and operational language; keep the nearby medical/mental-health boundary | Marketing-guideline review passes on every conversion page and message |
| Price or inclusion differs between page, checkout, Terms, and workflow | Reconcile `$99`, `$199`, credits, 30-day access, benefit, and replay language against one asset inventory | Test purchase summary and confirmation match the live product |
| Old five-day or Wednesday language remains | Search pages, schema, calendars, messages, and publishers | Wednesday creates no public or automated Light Shower event |
| `$99` replay promise activates before fulfillment is safe | Keep paid traffic off until attendance, archive, grant, and expiry pass | Full replay canary passes |
| `$199` suggests library access or an unapproved benefit | Lead with live 30-day access and exact approved benefit | Copy, checkout, confirmation, and Terms match |
| `$499` distracts from or alters the core purchase | Keep it optional, post-purchase, and outside the core launch | Original purchase continues on both accept and decline paths |

## Definition of done

- [ ] The active schedule and delivery modes match every page, calendar, schema record, workflow, and message.
- [ ] GHL is authoritative for payment, access, credit, attendance, replay, benefit, refund, and support state.
- [ ] Pabbly transports versioned occurrence evidence and cannot independently grant fulfillment.
- [ ] Every external event is idempotent and auditable.
- [ ] Remote and in-person messages cannot cross.
- [ ] No customer receives a stale or unverified Zoom link.
- [ ] A no-show cannot consume a `$99` credit.
- [ ] `$199` starts and ends at the exact approved timestamps.
- [ ] Replay and Zoom-recording retention follow their separate 72-hour clocks.
- [ ] Wednesday Light Shower is absent from all public and active automation paths.
- [ ] Claim, price, inclusion, privacy, accessibility, mobile, analytics, monitoring, and rollback checks pass.

## Source documents

- [Interactive deployment control board](../DEPLOYMENT-CONTROL-BOARD.html)
- `DEPLOYMENT-WORKFLOW-GUIDE.md`
- `GHL-SCHEDULE-AND-OFFER-ASSET-MAP.md`
- `GHL-LIGHT-SHOWER-WORKFLOW-BLUEPRINT.md`
- `PABBLY-LIGHT-SHOWER-WORKFLOW-MAP.md`
- `LIGHT-SHOWER-OPERATING-RULES.md`
- `LIGHT-SHOWER-FUNNEL-ARCHITECTURE.md`
- `light-shower-marketing-guidelines.md`
- `SEO-ANALYTICS-AND-CUSTOMER-MESSAGE-SPEC.md`
