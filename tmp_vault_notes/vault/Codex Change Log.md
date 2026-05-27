---
type: system
status: active
area: vault
tags:
  - system/changelog
  - codex/log
created: 2026-05-21
---
# Codex Change Log

## 2026-05-23

- Created Codex app automation `obsidian-weekly-review` to review recent daily notes, Task Hub, active projects, cleanup/review queues, create or update the weekly review note, surface stale projects and user decisions, and run validation.
- Created Codex app automation `obsidian-daily-capture-processor` to process unprocessed daily notes in the vault, route durable tasks/project/personal/sensitive/reference material, preserve raw daily notes, update the change log, and run validation.
- Added [[30 Learning/AlgoLearn/AlgoLearn Home]] and linked it from [[30 Learning/Learning Home]].
- Added [[20 Projects/AlgoLearn/AlgoLearn - JS Module 4 - Todo List Application/Project Home]] and linked it from [[30 Learning/AlgoLearn/AlgoLearn Home]].
- Added project workspace docs under `Workspace Docs/` for [[20 Projects/AlgoLearn/AlgoLearn - JS Module 4 - Todo List Application/Project Home]].
- Created global Codex skill `reviewable-artifact-builder` under `/Users/tjt/.codex/skills/reviewable-artifact-builder`, documented the vault artifact storage convention in [[00 System/Artifacts/Artifact Index]], and marked the artifact-storage backlog/task items complete.
- Linked all global Codex skills (`excalidraw-companion`, `obsidian-daily-review`, `obsidian-project-memory`, `obsidian-weekly-review`, `pdf`, `personal-capture-router`, `playwright`, `reference-consolidator`, `sensitive-and-client-router`, `task-hub-manager`, `vault-context-loader`, `vault-structural-validator`) to the Gemini CLI global scope.
- Routed pending STS WordPress/Kit tasks into the Task Hub Next Actions; updated the Task Hub and verified compliance with vault operating rules.
- Created [[10 Work/ASAP Avionics/Drawings/ASAP Avionics - Website and Configurator System Map.excalidraw]], a detailed Excalidraw strategy board from ASAP project notes, archived source notes, WordPress configurator research, and the Aircraft Website Design Brief; embedded the brief thumbnail, indexed the drawing, linked it from the project home, and review-gated it.
- Repaired stale Simona B Excalidraw wikilinks that pointed to active drawing files no longer present in the vault by converting them to historical filename references.
- Rebuilt [[10 Work/GHL Builds/NLJC.com/Drawings/NLJC - Recreated System Map.excalidraw]] as a source-faithful uncompressed reconstruction of the original NLJC drawing by decoding the compressed scene, preserving embedded image references and detailed geometry, rendering an image-aware preview, and keeping the result review-gated.
- Updated the global `excalidraw-companion` skill with a high-fidelity reconstruction workflow plus decoder and image-aware preview scripts.
- Created [[40 Reference/AI SDK/Vercel AI SDK Provider Routing - Detailed Board.excalidraw]], a more complex Book Tracker-style dark architecture board; used visual inspection of the Book Tracker reference, generated validated uncompressed Excalidraw JSON, rendered a preview, and indexed it.
- Tested `excalidraw-companion` by creating [[40 Reference/AI SDK/Vercel AI SDK Provider Routing.excalidraw]], a detailed Vercel AI SDK provider-routing drawing based on current official AI SDK docs; mechanically inspected the Excalidraw JSON and visually checked a rendered preview before indexing it.
- Cleaned up the active task system from user review: routed STS WordPress/Kit tasks into [[10 Work/STS/Project Home]], added STS Agent SDK planning, marked completed personal tasks, updated active/paused/archived project statuses, and refreshed [[00 System/Active Projects]].
- Created global Codex skill `excalidraw-companion` under `/Users/tjt/.codex/skills/excalidraw-companion` after researching Obsidian Excalidraw Markdown handling, Excalidraw scene format, ExcalidrawAutomate, script-engine workflows, and public agent-skill patterns; added a local inspector script for `.excalidraw.md` files.
- Created global Codex skill `reference-consolidator` under `/Users/tjt/.codex/skills/reference-consolidator` to merge stable reusable knowledge, prompts, SOPs, snippets, and project-derived lessons into canonical `40 Reference/` notes while preserving source links and avoiding review-gated rewrites.
- Created global Codex skill `obsidian-weekly-review` under `/Users/tjt/.codex/skills/obsidian-weekly-review` to create weekly review notes, reconcile Task Hub and active projects, surface stale work, identify decisions, and update cleanup/review queues.
- Created global Codex skill `obsidian-daily-review` under `/Users/tjt/.codex/skills/obsidian-daily-review` to process raw daily notes into Task Hub, project homes, personal area notes, sensitive/review queues, references, and Needs Filing while preserving the source note.
- Created global Codex skill `personal-capture-router` under `/Users/tjt/.codex/skills/personal-capture-router` to route goals, home upkeep, vehicles, finance, faith, identity, media, games, purchases, and personal tasks into `50 Areas/` while preserving raw source wording.
- Created global Codex skill `sensitive-and-client-router` under `/Users/tjt/.codex/skills/sensitive-and-client-router` to route review-gated client, finance, legal, contract, account-access, credential-like, and private material using neutral summaries and source links.
- Created global Codex skill `task-hub-manager` under `/Users/tjt/.codex/skills/task-hub-manager` to route durable tasks into the Task Hub or project homes, normalize task tags, preserve source links, and prevent new active task-board sprawl.
- Fixed the `skill-creator` quick validator so it can run without the missing external `yaml` module by adding a narrow fallback frontmatter parser.
- Created global Codex skill `obsidian-project-memory` under `/Users/tjt/.codex/skills/obsidian-project-memory` for durable project logs, decisions, next actions, blockers, links, artifacts, and project planning memory.
- Created global Codex skill `vault-structural-validator` under `/Users/tjt/.codex/skills/vault-structural-validator` with a bundled Ruby validation script for frontmatter, metadata, wikilinks, empty files, sync conflicts, duplicate content, legacy roots, repeated prefixes, and credential-like patterns.
- Ran the new validator against the vault: 435 Markdown files and 556 total files checked with zero structural errors and zero warnings after filtering an uppercase environment-variable placeholder.
- Added a Task Hub item to define how durable Codex artifacts such as `index.html`, generated review pages, CSVs, PDFs, and other non-Markdown outputs should be stored in the vault.
- User confirmed all vault skill creation/update work should use the `skill-creator` workflow; updated the roadmap and skills plan.
- Broadened `vault-context-loader` so durable project planning, requirements, decisions, architecture, next actions, and reusable lessons can trigger vault memory capture even when the user does not explicitly mention the vault.
- Created global Codex skill `vault-context-loader` under `/Users/tjt/.codex/skills/vault-context-loader` so Codex threads in any workspace can load this vault as long-term memory.
- User clarified all vault skills should be global Codex skills, not workspace-local notes; updated the roadmap, skills plan, and backlog.
- Promoted the Vault Context Loader into a global skill requirement so Codex threads in other workspaces can locate and use `/Users/tjt/Documents/Tristan's Personal vault` as long-term memory.
- Defined the skill and automation build list in [[00 System/Codex Skills and Automations Roadmap]], expanded [[00 System/Codex Skills Plan]], linked the roadmap from [[00 System/Vault Home]], and updated [[00 System/Cleanup Backlog]].

## 2026-05-22

- Reviewed Jason Liu's Codex-maxxing article and incorporated its durable-thread/file-memory/goal/heartbeat/artifact strategy into [[00 System/Codex Operating Loops]], [[00 System/Processing Rules]], [[00 System/Weekly Review]], [[00 System/Codex Skills Plan]], [[00 System/Codex Vault Operating Memory.vctx]], and [[00 System/Vault Home]].
- User decided historical project homes should move to `90 Archive/Deprecated/Projects/`; moved [[90 Archive/Deprecated/Projects/Study Buddies Community/Project Home]] and updated project/review indexes.
- User confirmed [[90 Archive/Deprecated/Projects/Study Buddies Community/Project Home]] is historical; marked it archived and moved it out of the active-project flow.
- Audited existing sensitive material after the new routing decision: created [[00 System/Reports/Sensitive Material Audit - 2026-05-22]], created [[90 Archive/Deprecated/Projects/Study Buddies Community/Project Home]], routed finance and vehicle daily captures to canonical area notes, expanded [[00 System/Needs Review]], and revalidated credential-pattern scans.
- User confirmed client, finance, legal, contract, and access-related daily-note material can be organized into the appropriate project, area, source, and document-index notes, with neutral summaries and source links. Added [[00 System/Sensitive and Client Capture Routing]] and updated STS/project processing rules.
- User confirmed personal/review-gated material can be organized as part of daily-note processing. Added [[00 System/Personal Capture Routing]] and updated safety rules so personal notes can be routed, linked, tagged, indexed, and summarized neutrally while preserving prayer, identity, and deep-reflection wording unless explicitly rewritten.
- User decided that [[00 System/Task Hub]] is the only active task system. Old task-board notes under `90 Archive/Deprecated/Task Sources/` are retained as historical source material only.

## 2026-05-21

- Completed a final optimization pass: resolved remaining dangling wikilinks with placeholder notes or canonical retargets, repaired malformed frontmatter metadata, normalized accidental archived ToDo tags in metadata, and updated active task templates to use [[00 System/Task Hub]].
- Re-ran full-vault validation: zero unresolved wikilinks, zero frontmatter parse errors, zero missing status metadata, zero duplicate files, zero empty files, zero sync conflicts, zero credential-pattern matches, and no repeated canonical folder prefixes.
- Created [[00 System/Codex Vault Operating Memory.vctx]] as a compact future-skill context file documenting migration patterns, folder rules, safety policy, validation commands, Excalidraw handling, and learned edge cases.
- Completed structural cleanup of the remaining legacy top-level folders: moved timeline notes into `02 Daily/Timeline/`, work sources into `10 Work/`, project/reference drawings into their canonical spaces, area notes into `50 Areas/`, raw migrated exports into `90 Archive/Deprecated/`, and attachments into `00 System/Attachments/`.
- Updated Obsidian's attachment folder to `00 System/Attachments/assets`.
- Moved 154 migrated source notes into `90 Archive/Deprecated/` while preserving their original folder structure.
- Removed approved empty placeholders, sync-conflict files, and exact duplicate files after rewriting duplicate asset links to retained files.
- Created [[00 System/Indexes/Document Index]] and updated [[50 Areas/Finance]] to incorporate retained PDFs, invoices, contracts, and document-style assets.
- Updated [[00 System/Reports/Final Migration Review - 2026-05-21]], [[00 System/Needs Review]], and [[00 System/Cleanup Backlog]] to reflect completed cleanup decisions.
- Completed Excalidraw review, created [[00 System/Reports/Excalidraw Review - 2026-05-21]], rebuilt [[00 System/Indexes/Excalidraw Index]], and added [[40 Reference/Obsidian/Excalidraw Companion Guide]].
- Archived one confirmed duplicate Excalidraw drawing, one NLJC subset copy, and three empty Excalidraw drawings under `90 Archive/Deprecated/`.
- Configured Templater to use `Templates/`, disabled system commands, and enabled trigger-on-file-creation.
- Updated plugin report after Excalidraw, Templater, Dataview, and Kanban were installed.
- Updated new system templates to use Templater date/title syntax.
- Added [[00 System/Dataview Dashboard]] for plugin-powered project, review, migrated-source, and task views.
- Migrated loose personal/home/reference notes into canonical area/reference notes: Goals, Wish List, Uno House Rules, Coffee Maker, and Markdown Cheat Sheet.
- Consolidated the e9digital source notes into [[10 Work/e9digital/Project Home]] and created [[40 Reference/GoHighLevel/Attribution and ROI Tracking]].
- Consolidated ASAP Avionics source notes into [[10 Work/ASAP Avionics/Project Home]] and created [[40 Reference/WordPress/Configurators]].
- Consolidated REEL Filmworks source notes into [[10 Work/REEL Filmworks/Project Home]].
- Consolidated NLJC.com GHL build notes into [[10 Work/GHL Builds/NLJC.com/Project Home]] and created [[40 Reference/GoHighLevel/NLJC Workflow Standards]].
- Consolidated Simona B GHL build notes into [[10 Work/GHL Builds/Simona B/Project Home]] and created [[40 Reference/GoHighLevel/A2P and SMS Compliance]].
- Promoted reusable Tristans-Webworks GHL offer material into [[40 Reference/Business Development/GoHighLevel Systems Offer]].
- Consolidated HIOUSA status, open tasks, decisions, and project links into [[10 Work/HIOUSA/Project Home]].
- Created [[10 Work/HIOUSA/Partner Page Build SOP]], [[40 Reference/WordPress/Elementor Rebuild Playbook]], and [[40 Reference/WordPress/Embedded Quote Form Styling]] from HIOUSA source notes.
- Redacted credential-like strings from project/timeline notes and created [[00 System/Reports/Security Redaction - 2026-05-21]].
- Consolidated NAS Server setup notes into [[20 Projects/NAS Server/Project Home]] and [[40 Reference/Self Hosting/Home Server Playbook]].
- Consolidated Aircraft Doc Organizer into [[20 Projects/Aircraft Doc Organizer/Project Home]] and created [[40 Reference/OCR/Browser OCR Prototype Notes]] plus [[40 Reference/AI Prompts/Aircraft Doc Organizer Project Coach Prompt]].
- Consolidated Study Buddy Cost Analyzer into [[20 Projects/Study Buddy Cost Analyzer/Project Home]], [[20 Projects/Study Buddy Cost Analyzer/Product Requirements]], [[20 Projects/Study Buddy Cost Analyzer/Financial Modeling Hub Audit]], and [[20 Projects/Study Buddy Cost Analyzer/CSV Import Implementation]].
- Consolidated Book Tracker into [[20 Projects/Book Tracker/Project Home]] and redacted a Supabase/project password from the legacy phase list.
- Consolidated LiveOverlayV2 into [[20 Projects/LiveOverlayV2/Project Home]] and created [[40 Reference/Chrome Extensions/Live Overlay Extension Architecture]].
- Consolidated Kitchen Counter material list and related goal-note tasks into [[20 Projects/Kitchen Counter/Project Home]].
- Created project homes for [[20 Projects/Local FTP Server/Project Home]], [[20 Projects/Robot Face/Project Home]], and [[20 Projects/CoW BattleBrain/Project Home]].
- Created [[40 Reference/Self Hosting/FTPS Backup Server]] and redacted remaining Local FTP Server password values.
- Redacted a Gmail password from [[02 Daily/Timeline/Sunday, October 26, 2025]] and added it to the security review notes.
- Created [[20 Projects/GitHub Dashboard/Project Home]] and [[40 Reference/GitHub/GitHub Dashboard Token Notes]] from legacy GitHub Dashboard notes.
- Created [[40 Reference/WordPress/Kit to WordPress Draft Automation]] and redacted a token-like value from the source note.
- Created [[20 Projects/TJT Media Infrastructure/Project Home]] and [[40 Reference/Cloudflare/Tunnel Service Directory Pattern]] from the Cloudflare/tjt-media plan.
- Marked old LiveOverlay v1 notes as migrated legacy source for [[20 Projects/LiveOverlayV2/Project Home]].
- Created [[40 Reference/Chrome Extensions/Chrome Extension Basics]] and [[20 Projects/Pomodoro Timer/Project Home]].
- Marked LiveOverlayV2 phase guides and remaining Learning Zone project notes as migrated source, and created [[40 Reference/JavaScript/Node File System Notes]].
- Created [[50 Areas/Media/Media Home]], [[50 Areas/Media/Podcast Listening]], and [[40 Reference/AI Prompts/Podcast Strategy Pack Prompt]] from podcast source notes, including the new Codex article follow-up.
- Consolidated CSS learning notes into [[40 Reference/CSS/CSS Fundamentals and Resources]], [[40 Reference/CSS/Mobile Checkbox Hamburger Navigation]], [[40 Reference/CSS/Sticky Hero Layout Notes]], and [[40 Reference/Obsidian/Coding Tutorial Note Template]].
- Promoted AI prompt-library notes into [[40 Reference/AI Prompts/GHL Opportunity to SOW Field Extraction Prompt]] and [[40 Reference/AI Prompts/Infographic Generation Prompt]], and migrated AI SEO research into [[40 Reference/SEO/SEO in the Age of AI]].
- Consolidated JavaScript basics, browser debugging scripts, and regex notes into [[40 Reference/JavaScript/JavaScript Language Basics]], [[40 Reference/JavaScript/Browser Debugging Scripts]], and [[40 Reference/Regex/Regex Beginner Guide]].
- Consolidated Devslopes setup notes into [[40 Reference/Developer Setup/Mac Homebrew and Zsh Setup]], [[40 Reference/Developer Setup/VS Code Setup]], and [[40 Reference/Developer Setup/Windows WSL Setup]]; marked empty setup placeholders for review.
- Consolidated remaining general learning references into HTML, GIMP, terminal, documentation, GoHighLevel, and Upwork workflow canonical notes.
- Created [[30 Learning/JavaScript Edge Tutor]], [[40 Reference/AI Prompts/JavaScript Edge Tutor Prompt]], and [[40 Reference/Local AI/LM Studio and OpenClaw Local Agent Setup]] from AI learning/project handoff notes.
- Consolidated the Tristans Webworks GoHighLevel funnel asset pack into [[40 Reference/Business Development/GoHighLevel Systems Funnel Asset Pack]].
- Created [[40 Reference/Business Development/Upwork Proposal Research Archive]] and flagged raw Upwork ChatGPT exports for review instead of broadly rewriting account/client-specific material.
- Migrated remaining Learning Zone notes into [[40 Reference/Electrical/Magnetos and Basic Current]], [[40 Reference/Marketing/Qualification-Based Event Firing]], [[40 Reference/Web Design/UI UX Basics]], and [[40 Reference/WordPress/Adobe Fonts in Elementor Free]]; flagged `Learning Zone/JSON notes.md` as an empty placeholder.
- Completed a full-vault metadata pass: all Markdown notes now have status metadata or are recognized Excalidraw wrappers; created [[00 System/Reports/Final Migration Review - 2026-05-21]].
- Created review-gated indexes for [[10 Work/STS/Source Index]], [[10 Work/Prospects/Prospect Intake Index]], [[50 Areas/Vehicles/Vehicle Home]], [[50 Areas/Faith/Faith Home]], and [[50 Areas/Identity/Identity Home]].
- Rebuilt [[00 System/Indexes/Excalidraw Index]] with all discovered Excalidraw drawings and review notes.
- Created the initial system folder structure for the vault.
- Added system notes for vault navigation, tasks, projects, weekly review, processing rules, tag taxonomy, review flags, and automation logging.
- Created Bases files for project, reference, meeting, and review-queue views.
- Updated future daily notes to use `02 Daily/YYYY-MM-DD.md`.
- Enabled the core Properties plugin.
- Created normalized project homes for STS, HIOUSA, e9digital, Aircraft Doc Organizer, LiveOverlayV2, and Book Tracker.
- Migrated durable open tasks from [[90 Archive/Deprecated/Task Sources/ToDo]], [[90 Archive/Deprecated/Task Sources/To Do]], and [[90 Archive/Deprecated/Task Sources/STS Todo]] into [[00 System/Task Hub]].
- Marked [[90 Archive/Deprecated/Task Sources/ToDo]], [[90 Archive/Deprecated/Task Sources/To Do]], and [[90 Archive/Deprecated/Task Sources/STS Todo]] as legacy task sources.
- Added `AGENTS.md` with vault-specific Codex instructions.
- Added [[00 System/Codex Skills Plan]] for future local skills.
- Created normalized project homes for Simona B, NLJC.com, ASAP Avionics, REEL Filmworks, Study Buddy Cost Analyzer, NAS Server, and Kitchen Counter.
- Added Obsidian property type definitions for the new vault fields.
- Added tag cleanup notes documenting why code/design hex colors should not be blindly replaced.
- Added [[00 System/Do Not Rewrite]] for sensitive or high-risk automatic cleanup boundaries.
- Created a safety backup at `/private/tmp/tristan-vault-backup-20260521`.
- No existing notes have been deleted.
