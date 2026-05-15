# Local Verification Plan

> Local verification only. This is not approval for any external action.

## Commands

Run from each repo root:

```bash
npm run check
git diff --check
git status --short --branch
git log --oneline -3
```

For `agent-handoff-kit`, also run:

```bash
npm run demo:fixture
```

## Sensitive-pattern review

Use grep only as a review aid. Expected matches should be guardrail/denylist language such as `secret`, `customer data`, or `production URL`; unexpected real values should block the next step.

## Pass criteria

- All required local checks pass.
- Repos are clean.
- No remotes are required.
- No real private/customer/client/team data appears in docs, samples, package metadata, or commit messages.
- Any skipped check is marked `not run` or `[blocked]`, never passed.
