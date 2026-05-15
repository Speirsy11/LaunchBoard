# Portfolio Decision Dashboard

> Local decision aid only. This is not approval to publish, push, contact anyone, inspect private systems, use real customer/client/team data, deploy anything, spend money, change accounts/credentials, or create a paid offer.

Use this dashboard to decide what deserves attention next without reopening every kit first. For proof details, read `docs/comparison-evidence.md`; for the current parked-state handoff, read `docs/pre-17-local-decision-note.md`.

## Current ranking snapshot

| Rank | Kit | Why it ranks here | Best later approval path | Do not do yet |
| ---: | --- | --- | --- | --- |
| 1 | SMB AI Workflow Audit Kit | Most directly tied to a small paid/validated service shape; has intake, sample report, pilot, acceptance, buyer-fit, handoff, and review docs. | Option C: one validation conversation draft, or Option B: public-safe prep, but only after Charlie chooses exactly one. | Do not contact anyone, use real business data, or imply the audit is available for sale. |
| 2 | Agent Handoff Kit | Strong developer-facing template with safe demo fixture, initializer, review worksheet, and offer snapshot. | Option D: one approved local-repo trial, or Option B: public-safe prep. | Do not inspect private repos or run it on real work without exact path/task approval. |
| 3 | AI Adoption Readiness Kit | Clear educational/workshop-style kit with three fictional samples and comparison matrix; useful but less directly differentiated than SMB audit. | Option C: one validation conversation draft, or Option B: public-safe prep. | Do not use real team/customer data or imply readiness advice is compliance/professional advice. |
| 4 | Local Service Automation Recipes | Fresh local-service automation angle with draft-only recipes, JSON skeletons, and a no-tool demo fixture; promising but less validated than the top three. | Option E: one fictional/local recipe trial, or Option B: public-safe prep after more local packaging. | Do not connect n8n, Zapier, email, SMS, CRM, calendar, accounting, payment, or use customer data. |

## Decision rules

Prefer the top-ranked kit only if the goal is first paid/validated offering readiness. Prefer `agent-handoff-kit` if Charlie wants a developer-tooling angle. Prefer `ai-adoption-readiness-kit` if Charlie wants a broader workshop/self-assessment angle. Prefer `local-service-automation-recipes` only if Charlie wants a low-code/local-service automation template angle that stays fictional and draft-only.

Choose **none** if:

- all options would require outreach, publishing, or private-system access now;
- Charlie has not picked an exact approval path;
- a repo is dirty or checks fail;
- the proposed next step bundles multiple actions together;
- the value depends on real customer/client/team data before approval.

## Fast review checklist

Before asking Charlie for any approval later, confirm:

- [ ] The chosen repo is clean.
- [ ] `npm run check` passes in the chosen repo.
- [ ] Sensitive-pattern grep is reviewed and expected.
- [ ] The requested action maps to exactly one approval draft in `docs/approval-request-drafts.md`.
- [ ] The request includes exact action, destination/path/audience, command/message, data boundary, non-goals, rollback/containment, and stop condition.
- [ ] The request does not include push, publish, outreach, deploy, spend, account/credential changes, private-system inspection, live testing/scanning, or payment setup unless Charlie explicitly approves that exact action.

## Recommended local next move

If the loop needs another purely local improvement, update only evidence or final handoff notes that reduce decision fatigue. Do not start external action.
