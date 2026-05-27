---
type: source
status: active
area: projects
created: 2026-05-23
canonical: "[[20 Projects/AlgoLearn/AlgoLearn - JS Module 4 - Todo List Application/Project Home]]"
source_path: /Users/tjt/AlgoLearn/JS/AlgoLearn-JS-Module-4-assignment/PLAN.md
tags:
  - type/source
  - status/active
  - area/learning
  - topic/javascript
  - topic/node
---
> Workspace doc snapshot. Canonical code lives in the repo; this copy is for working notes.

# Todo App Plan with `fs` Persistence

## Summary
Build a terminal todo app in `todo.js` that uses an array of objects for todos, `readline` for interaction, and `fs` for automatic JSON persistence. The app will meet the assignment requirements and include one small stretch feature: filtering todos by status.

## Decisions Locked In
- Save todos after every change.
- Use a full, friendly menu with clear prompts and feedback.
- Use stable numeric IDs for todos.
- Store data in `todos.json`.
- Handle bad input with helpful messages and then return to the menu or reprompt.
- Add two filter options: view completed todos and view incomplete todos.
- Show clear file load/save errors without crashing.

## Step-by-Step Logic
### 1. Start the app
- Import `readline` and `fs`.
- Create the in-memory todos array.
- Set up a way to track the next unique ID.
- Start the readline interface and show a welcome message.

### 2. Load saved data
- Check whether `todos.json` exists.
- If it exists, read the file and parse the JSON.
- If the file is valid, use that data to populate the todos array.
- If the file is missing, empty, or invalid, start with an empty array and show a helpful message.
- Recalculate the next ID from the loaded todos so new items do not reuse old IDs.

### 3. Show the menu
- Display numbered options every time the user returns to the main loop.
- Include these choices:
  - add a todo
  - list all todos
  - view completed todos
  - view incomplete todos
  - toggle a todo complete/incomplete
  - remove a todo
  - exit
- Accept the user’s choice and route to the matching handler.

### 4. Add a todo
- Prompt the user for todo text.
- Trim the input and reject blank entries.
- Create a new todo object with:
  - a unique numeric ID
  - the entered text
  - `done: false`
- Add it to the array.
- Save the updated array to `todos.json`.
- Confirm the add operation succeeded.

### 5. List all todos
- If there are no todos, show a clear empty-state message.
- Otherwise, print each todo with:
  - its ID
  - its text
  - whether it is done or not done
- Keep the output easy to scan in the terminal.

### 6. Filter by status
- Add one menu option for completed todos.
- Add one menu option for incomplete todos.
- Reuse the same display format as the full list.
- If no items match the filter, show a helpful message instead of an empty list.

### 7. Toggle a todo
- Ask the user for a todo ID.
- Convert the input to a number.
- Check that the number is valid.
- Search the todos array for a matching ID.
- If found, flip the `done` value.
- Save the updated array to `todos.json`.
- Confirm the new status to the user.
- If no matching ID exists, explain that the todo was not found.

### 8. Remove a todo
- Ask the user for a todo ID.
- Convert the input to a number.
- Validate the value.
- Find the todo with that ID.
- If found, remove it from the array.
- Save the updated array to `todos.json`.
- Confirm the removal.
- If the ID is invalid or missing, show a clear error message.

### 9. Save after every change
- After add, toggle, or remove:
  - convert the todo array to JSON
  - write it to `todos.json`
- If saving fails, explain the issue clearly.
- Do not let the app crash if the write fails.

### 10. Exit cleanly
- Close the readline interface before ending the process.
- Make sure no save is skipped before exit.
- Return control cleanly without errors.

## Error Handling
- Reject blank todo text.
- Reject non-numeric menu choices where numbers are expected.
- Reject invalid IDs for toggle and remove.
- Handle bad JSON data in the save file gracefully.
- Show short but clear file error messages.
- Keep the app running after recoverable errors.

## Test Plan
- Run the app when `todos.json` does not exist.
- Add a todo and confirm it saves.
- Restart the app and confirm the todo loads back in.
- Add multiple todos and confirm they list correctly.
- Toggle one todo and verify its completion status changes.
- Remove one todo and verify it disappears.
- Use the completed and incomplete filters.
- Try an empty todo entry.
- Try an invalid ID.
- Try an invalid menu choice.
- Confirm the app exits without errors.

## Assumptions
- `fs` persistence is acceptable for this assignment extension.
- The app remains terminal-only and uses no extra packages.
- `todos.json` is created automatically by the app.
- The user wants the plan to be detailed enough to implement directly, but not actual code.

