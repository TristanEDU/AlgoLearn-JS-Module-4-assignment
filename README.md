# AlgoLearn JS Module 4 Todo List Application

Terminal-based todo list app built with plain Node.js. It uses `readline` for menu input and `fs` for saving todo data to a local JSON file.

## Features

- Add new todo items
- Remove todo items by ID
- Update an existing todo's stored fields
- View the current todo list in a table
- Persist todo data in `todos.json`

## Requirements

- Node.js installed locally
- No third-party packages

## Run

```bash
node todo.js
```

## How It Works

When the app starts, it loads `todos.json` from the project directory.

- If the file exists, the app reads the saved todos into memory.
- If the file is missing, the app creates it on first run.
- After each add, remove, or update action, the app writes the latest state back to `todos.json`.

## Menu

The main menu supports these actions:

- `1` Add task
- `2` Remove task
- `3` Update task
- `4` View tasks
- `0` Exit

The view-tasks flow offers the same add, remove, and update actions again before returning to the main menu or exiting.

## Project Files

- `todo.js` - main application loop
- `rl.js` - readline prompts and menu text
- `utils.js` - todo file loading, saving, and table output
- `ui.js` - small UI helper messages
- `todos.json` - generated data file, ignored by git

## Data Format

Todos are stored as objects with this shape:

```json
{
  "id": 1,
  "Status": false,
  "task": "Buy milk"
}
```

## Notes

- The app is intentionally simple and uses only core Node.js modules.
- `todos.json` is created and updated automatically by the program.
