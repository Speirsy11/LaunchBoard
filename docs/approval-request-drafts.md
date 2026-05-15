# Approval Request Drafts

> Local drafting aid only. This is not approval to publish, push, contact anyone, inspect private systems, use real customer/client/team data, deploy anything, spend money, change accounts/credentials, or create a paid offer.

Use these drafts only if Charlie later wants to move exactly one portfolio item forward. Copy nothing externally until Charlie approves the exact action, destination, data boundary, command/message, and non-goals.

## How to use this file

1. Pick exactly one kit.
2. Pick exactly one path for that kit.
3. Fill every placeholder locally.
4. Stop and ask Charlie before doing anything external or private.

## Option A — private backup only

Use when Charlie wants a recoverable private remote/archive but no public release.

```text
Request: approve a private backup only for <kit name>.

Exact local path: <repo path>
Destination: <private backup destination>
Allowed action: create/update private backup only
Not allowed: public repo, publish, package release, outreach, deployment, spend, payment setup, private-system inspection, customer/client/team data, account/credential changes, issues/discussions/pages/releases/workflows/social posts
Verification before action: npm run check; git diff --check; git status --short --branch; sensitive-pattern grep reviewed
Stop condition: any unexpected real secret, customer/client/team data, failing check, unclear visibility, or request to combine backup with another action
```

## Option B — public-safe repo prep only

Use when Charlie wants a local public-safety pass before any remote exists.

```text
Request: approve local-only public-safe repo preparation for <kit name>.

Exact local path: <repo path>
Allowed action: review files and prepare a local checklist/diff for possible later public release
Not allowed: create remote, push, publish, post, contact anyone, enable issues/discussions/pages/releases/workflows, add package registry metadata, deploy, spend, payment setup, inspect private systems, use real customer/client/team data, change accounts/credentials
Verification before action: npm run check; git diff --check; git status --short --branch; sensitive-pattern grep reviewed
Stop condition: any real private data, uncertain license/visibility, failing check, or need to perform an external action
```

## Option C — one validation conversation draft only

Use when Charlie wants wording for a possible future conversation, but no message should be sent in this mode.

```text
Request: approve drafting one validation conversation for <kit name>.

Audience/person: <specific person or fictional placeholder until approved>
Allowed action: draft message locally only
Not allowed: send email/message/DM/post, contact anyone, scrape leads, enrich contacts, create CRM records, spend money, make claims of availability, quote prices as final, promise delivery, inspect private systems, use customer/client/team data
Validation question: <one thing to learn>
Non-goal: do not sell; do not book; do not imply work has started
Stop condition: Charlie has not approved the exact recipient and exact message text
```

## Option D — one local-repo trial only

Best fit for `agent-handoff-kit`, only if Charlie approves an exact low-risk local path and task.

```text
Request: approve one local-only handoff trial for agent-handoff-kit.

Exact local path: <approved local path>
Exact task: <approved low-risk task>
Allowed action: copy Markdown handoff templates into a temporary local folder and run only approved verification commands
Approved commands: <commands>
Not allowed: push, deploy, publish, CI changes, credential inspection, account changes, production config, private data extraction, customer-impacting action, external contact, destructive file changes
Data boundary: <fictional/sample or approved local-only non-sensitive files>
Rollback/cleanup: <temporary folder removal or git checkout plan>
Stop condition: task requires private secrets, production access, unapproved commands, or external action
```

## Option E — one fictional/local recipe trial only

Best fit for `local-service-automation-recipes`, only if Charlie approves an exact fictional scenario and confirms no real tools or customer data are used.

```text
Request: approve one fictional/local recipe trial for local-service-automation-recipes.

Exact local path: /Users/charliespeirs/Developer/local-service-automation-recipes
Exact fictional scenario: <approved fictional scenario>
Allowed action: run the local demo fixture and/or draft one local recipe output from fictional/sample inputs only
Approved commands: npm run check; npm run demo:fixture --silent
Not allowed: connect n8n/Zapier/email/SMS/CRM/calendar/accounting/payment tools, send messages, inspect private systems, use customer data, deploy, publish, spend, change accounts/credentials, or create payment links
Data boundary: fictional/sample inputs only
Rollback/cleanup: discard any temporary fictional output file or git checkout local edits
Stop condition: task needs real customer data, live tool access, credentials, external communication, payment data, or an unapproved command
```

## Portfolio recommendation rules

- Prefer the kit with the clearest next learning goal.
- Prefer local/private backup if the concern is preserving work.
- Prefer public-safe prep only after local checks pass and visibility/license choices are clear.
- Prefer validation conversation drafts only when Charlie names the exact audience and approves final text.
- Prefer a local-repo trial only for low-risk work with explicit command and data boundaries.
- Prefer a fictional/local recipe trial only when the scenario is sample-only and no tools are connected.
- If two options seem equally good, choose neither yet; improve the decision notes locally.
