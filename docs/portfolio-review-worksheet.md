# Portfolio Review Worksheet

> Local review worksheet only. This is not approval to publish, push, contact anyone, inspect private systems, use real customer/client/team data, deploy anything, spend money, change accounts/credentials, or create a paid offer.

Use this worksheet to choose which local kit deserves the next explicitly approved step later. It should reduce review time, not trigger external action.

## Review metadata

- Reviewer:
- Date:
- Repos checked clean: yes / no
- Local checks run: yes / no
- Sensitive-pattern grep reviewed: yes / no
- Proposed later action: none / private backup / public-safe prep / validation conversation / local-repo trial / other

## Portfolio scorecard

Score each kit 0, 1, or 2.

| Kit | Clarity | Buyer/use-case fit | Evidence assets | Safety gates | Next-step concreteness | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| SMB AI Workflow Audit Kit | | | | | | |
| AI Adoption Readiness Kit | | | | | | |
| Agent Handoff Kit | | | | | | |

## Interpretation

- **8-10:** candidate for one later approval-gated next step.
- **5-7:** useful, but improve locally or park.
- **0-4:** park for now.

Any blocker below overrides the score.

## Blockers

Mark `[blocked]` if any are true:

- [ ] The next step requires real customer/client/team data before Charlie approves the exact data boundary.
- [ ] The next step combines multiple external actions, such as public repo creation plus outreach.
- [ ] The repo has uncommitted changes, failing checks, or unclear sensitive-pattern grep results.
- [ ] The kit implies legal, financial, compliance, security, health, or production-safety guarantees.
- [ ] The next step would push, publish, post, contact anyone, deploy, spend, change accounts/credentials, inspect private systems, or create payment flows.

## Exact-one next step draft

Do not act yet. Draft only:

- Chosen kit:
- Exact requested action:
- Matching approval draft from `docs/approval-request-drafts.md`: Option A / B / C / D / none
- Exact destination/path/audience, if applicable:
- Exact command/message, if applicable:
- Allowed data boundary:
- Explicit non-goals:
- Rollback/containment:
- Stop condition:

## Current recommendation

Keep all three kits local/private. If Charlie later wants to move one forward, select exactly one approval-gated path, use `docs/approval-request-drafts.md` to write the precise request, and stop before doing anything external.
