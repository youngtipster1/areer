# Complete Areer onboarding prototype

## Goal
Replace the basic destination placeholders with the complete frontend-only onboarding journeys in the uploaded brief, preserving Areer's established design system and changeable participation preference. Repair the current missing-route type errors as part of the routing work.

## Implementation
1. **Onboarding foundation**
   - Add a reusable onboarding shell with section/step progress, back/continue navigation, validation, save-and-resume feedback, and browser-local draft persistence.
   - Keep participation intent as a changeable preference, preserve it across direct links/refresh, and route Find Opportunities to Talent, Build With Others to Builder, and Both through Talent then Builder.
   - Keep thin addressable route files and provide safe recovery for missing/invalid intent or draft data.
2. **Talent journey**
   - Build guided steps for personal context, Career Identity, structured capabilities, repeatable evidence, direction, interests/preferences, availability/constraints, readiness, and editable review.
   - Allow custom selections, non-formal experience, optional evidence, and capability context without arbitrary limits or profile scores.
3. **Founder / Builder journey**
   - Support organisation and independent-builder paths, initiative definition, at least one structured Need with required/helpful capabilities and engagement terms, founder expectations, and editable review.
   - Avoid verification claims, automatic publishing, and repeated collection of personal information in the Both journey.
4. **Completion and fit demonstration**
   - Add mock completion states and a deterministic, isolated fit example using structured mock profiles and Needs, with explainable Strong Fit / Potential Fit / Future Fit / Not Suitable outcomes; no production algorithm or percentage score.
5. **Validation**
   - Add focused tests for participation routing, intent preservation, local draft helpers, and fit outcomes; run the suite and verify core routes and representative flows on desktop and mobile. Confirm the landing page remains unchanged and no backend or external service is introduced.

## Technical details
- Keep onboarding UI in focused modules under `src/components/onboarding/`, with typed mock models and local persistence/helpers in `src/lib/onboarding/`.
- Reuse existing Areer tokens and shadcn controls; do not alter the global design system or landing page.
- Use existing TanStack Router conventions; create route files for every new destination and never edit generated route-tree output.
- Update the root `AGENTS.md` with the structural rule for the onboarding module before completion; update `roadmap.md` as work is completed.

## Assumptions
- Save-and-resume uses browser-local draft data only, consistent with the explicit frontend-only requirement.
- The fit demonstration is a separate illustrative prototype view, not a live discovery or publishing feature.
