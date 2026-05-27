---
type: project
status: active
area: projects
created: 2026-05-23
review:
tags:
  - type/project
  - status/active
  - area/learning
  - topic/javascript
  - topic/node
---
# AlgoLearn - JS Module 4 - Todo List Application

## Outcome

Build a Node.js terminal todo list app (arrays + objects) with a menu-driven CLI using `readline`. Support add/list/toggle/remove, and optionally persist todos to a JSON file using `fs`.

## Current Status

Active as of 2026-05-23. Workspace exists and has early scaffolding:

- `todo.js` currently creates/reads `todos.json` and logs parsed file content.
- `utils.js` contains `createTodoFile()` using `fs.appendFile`.
- `PLAN.md` includes the intended full menu + persistence behavior.

## Run

- `node todo.js`

## Repo + Workspace

- GitHub (SSH): `git@github.com:TristanEDU/AlgoLearn-JS-Module-4-assignment.git`
- Local: `/Users/tjt/AlgoLearn/JS/AlgoLearn-JS-Module-4-assignment`

## Requirements (from assignment)

- Store todos as an array of objects (ex: `{ id, text, done }`).
- Add, list, mark complete/incomplete, and remove todos.
- Use `readline` for user interaction.
- Optional: save/load todos using `fs` to a JSON file.

## Notes / Observations

- `todos.json` currently contains repeated JSON objects appended together (not a single valid JSON array).
- `utils.js` defines `todoTemplate` as `{ id, status, task }`, but the assignment examples use `{ id, text, done }` (worth normalizing later).

## Key Links

- [[30 Learning/AlgoLearn/AlgoLearn Home|AlgoLearn Home]]
- [[90 Archive/Deprecated/Learning Zone/projects/AlgoLearn-JS-Module-4-assignment/Dev Notes|Legacy dev notes (migrated source)]]
- [[40 Reference/JavaScript/Node File System Notes|Node File System Notes]]

## Log

- 2026-05-23: Created project home and captured repo/workspace details.

