# LabStart AI

An evidence-aware research planning workspace by Arun Gharami. Turn an early research idea into a scoped experiment that fits your time, equipment, and budget.

## Features

- Editable project brief with 2–12 weeks, weekly hours, budget ceiling, skills, equipment, and evaluation criteria.
- Starter templates for sensor drift, IoT security, retrieval, and custom projects.
- Editable evidence register distinguishing document-verified references, student reports, proposals, and unknowns.
- Rule-based weekly planning with hardware evidence gates requiring separate equipment and permission references.
- Milestone tracking and an overview dashboard.
- Equipment/setup checklist and mentor/coordinator questions.
- Print-friendly plans with browser Save as PDF and copyable coordinator questions.
- Markdown research-plan export; JSON backup, validated import, and workspace reset.
- Responsive layouts, semantic forms, keyboard access, CSP and security headers.
- Device-local persistence; no account, API key, external runtime dependency, or data transmission.

**Planning engine:** v1.1 uses transparent rules, not a connected language model. It does not verify documents, establish institutional authorization, or claim experimental results. Sample content is labeled and editable. Independent educational project; no institutional endorsement implied.

## Development

Node.js 22+; no packages to install.

```bash
npm run check
npm test
npm run build
npm run dev
```

Open http://localhost:3000 after building. Edit `src/app.js`, `src/planner.js`, `styles.css`, and `index.html`. The build copies static assets to `dist/`.

## Vercel

Import `Arungharami/LabStart-AI`. Use framework preset **Other**, build command `npm run build`, output directory `dist`, and Node.js 22. The checked-in `vercel.json` supplies deployment settings and security headers. No environment variables are required.

## Data and privacy

Workspace content remains in the browser's local storage. Export a JSON backup before clearing storage or moving devices. Shared browsers may expose saved projects to other users. Imports replace the active workspace only after confirmation. Verified entries require a reference, but the application cannot authenticate that reference.

## Using the workspace

1. Open **Project brief**, choose a template or fill in your own idea, and save.
2. Add or edit entries in **Evidence register**. A document-verified entry needs a reference; references are not authenticated by the app.
3. Open **Research plan**, review all stages, check setup needs, and copy questions for your coordinator.
4. Mark completed milestones. Export Markdown or print/save a PDF for discussion.
5. Download a JSON backup in **Resources & about** before changing devices.

Version 1.1 improves the milestone schedule. Old completed milestones reset on migration because they refer to different tasks; project and evidence data remain.

## Validation

`npm test` checks budget/time constraints, hardware evidence gating, unknown preservation, and report generation. `npm run check` checks JavaScript syntax. GitHub Actions runs checks, tests, and the build for pushes and pull requests. Browser interaction verification should cover brief → evidence → milestones → exports → backup import, including mobile and storage failure behavior.

## Roadmap

Optional authenticated AI assistance, document ingestion with source citations, multiple projects, and collaboration are future extensions, not implemented capabilities.

Contact: arun_gharami@live.com
