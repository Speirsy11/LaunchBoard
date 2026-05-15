#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const requiredFiles = [
  'README.md',
  'docs/portfolio-review-worksheet.md',
  'docs/local-verification-plan.md',
  'docs/approval-request-drafts.md',
  'docs/decision-dashboard.md',
  'docs/comparison-evidence.md',
  'docs/pre-17-local-decision-note.md',
  'package.json',
];
const requiredPhrases = [
  'local portfolio artifact only',
  'SMB AI Workflow Audit Kit',
  'AI Adoption Readiness Kit',
  'Agent Handoff Kit',
  'Local Service Automation Recipes',
  'Portfolio Review Worksheet',
  'Portfolio Decision Dashboard',
  'Current ranking snapshot',
  'Fast review checklist',
  'Portfolio Comparison Evidence',
  'Pre-17:00 Local Decision Note',
  'Current local recommendation',
  'Current parked state',
  'Fastest path to first paid/validated service shape',
  'Freshest low-code/local-service template angle',
  'Exact-one next step draft',
  'Approval Request Drafts',
  'Option A — private backup only',
  'Option D — one local-repo trial only',
  'Option E — one fictional/local recipe trial only',
  'Matching approval draft',
  'Local Verification Plan',
  'local-service-automation-recipes',
  'npm run demo:fixture --silent',
  'Sensitive-pattern review',
  'not run',
  '[blocked]',
  'Do not push, publish, post, email, message, deploy, spend',
  'not approval to publish, push, contact anyone',
];

let corpus = '';
const failures = [];
for (const rel of requiredFiles) {
  const full = path.join(root, rel);
  if (!fs.existsSync(full)) {
    failures.push(`Missing required file: ${rel}`);
    continue;
  }
  corpus += '\n' + fs.readFileSync(full, 'utf8');
}
for (const phrase of requiredPhrases) {
  if (!corpus.includes(phrase)) failures.push(`Missing required phrase: ${phrase}`);
}
if (failures.length) {
  console.error('Validation failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log('Revenue readiness portfolio validation passed.');
