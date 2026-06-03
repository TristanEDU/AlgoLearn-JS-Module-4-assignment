const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function mainMenu() {
  const input = await rl.question(`
    Option 1: Add task
    Option 2: Remove task
    Option 3: Update task
    Option 4: View Tasks
    Option 0: Exit

> `);

  return input.trim();
}

async function viewTasksMenu() {
  const input = await rl.question(
    `Option 1: Add task | Option 2: Remove task | Option 3: Update task | Option 0: Exit
    
    > `,
  );
  return input.trim();
}

async function addTaskPrompt() {
  const input =
    await rl.question(`Please enter your task descripion below and then press enter. This will automatcly create a task with a status of pending.

> `);
  return input.trim();
}

async function removeTaskPrompt() {
  const input = await rl.question(
    `To permanently delete a task, enter its ID below. 
    
ID: `,
  );
  return input.trim();
}

async function updateTaskPrompt() {
  const taskID = await rl.question(`To update a task enter its ID below.

ID: `);

  const taskProperty =
    await rl.question(`Choose the property you would like to update:

1. Status
2. Task description

Property: `);

  const taskPropertyValue = await rl.question(`
New value: `);

  return {
    taskID: taskID.trim(),
    taskProperty: taskProperty.trim(),
    taskPropertyValue: taskPropertyValue.trim(),
  };
}

async function exitApp() {
  console.log(`Goodby`);
  rl.close();
}

module.exports = {
  mainMenu,
  viewTasksMenu,
  addTaskPrompt,
  removeTaskPrompt,
  updateTaskPrompt,
  exitApp,
};
