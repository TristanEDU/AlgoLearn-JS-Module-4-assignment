const utils = require("./utils.js");
const rl = require("./rl.js");
const { writeFile } = require("node:fs");

utils.readFile();

async function app() {
  let choice = await rl.mainMenu();
  let input = Number(choice);

  if (Number.isNaN(input) || input < 0 || input > 4) {
    console.error(
      `Error, ${input} is not a valid option. Please choose  0, 1, 2, 3 or 4`,
    );
    app();
  } else if (input === 1) {
    choice = await rl.addTaskPrompt();
    utils.addTodo(choice);
    console.table(utils.readFileState);
    utils.writeFile();
    app();
  } else if (input === 2) {
    utils.printTasks();
    choice = await rl.removeTaskPrompt();
    input = Number(choice);
    utils.removeTodo(input);
    utils.writeFile();
    app();
  } else if (input === 3) {
    utils.printTasks();
    choice = await rl.updateTaskPrompt();

    input = Number(choice.taskIndex);

    let property;
    if (Number(choice.taskProperty) === 1) {
      property = "Status";
    } else if (Number(choice.taskProperty) === 2) {
      property = "Task";
    } else {
      let property =
        choice.taskProperty.charAt(0).toUpperCase() +
        choice.taskProperty.slice(1).toLowerCase();
    }
    let edit;
    if (property === "Status") {
      edit = choice.taskPropertyValue.toLowerCase() === "true";
    } else {
      edit = choice.taskPropertyValue;
    }

    utils.editTodo(input, property, edit);
    utils.writeFile();
    app();
  } else if (input === 4) {
    utils.printTasks();
    choice = await rl.viewTasksMenu();
    input = Number(choice);
    if (Number.isNaN(input) || input < 0 || input > 4) {
      console.error(
        `Error, ${input} is not a valid option. Please choose  0, 1, 2, 3 or 4`,
      );
      app();
    } else if (input === 1) {
      choice = await rl.addTaskPrompt();
      utils.addTodo(choice);
      console.table(utils.readFileState);
      utils.writeFile();
      app();
    } else if (input === 2) {
      choice = await rl.removeTaskPrompt();
      input = Number(choice);
      utils.removeTodo(input);
      utils.writeFile();
      app();
    } else if (input === 3) {
      choice = await rl.updateTaskPrompt();
      input = Number(choice.taskIndex);
      let property;
      if (Number(choice.taskProperty) === 1) {
        property = "Status";
      } else if (Number(choice.taskProperty) === 2) {
        property = "Task";
      } else {
        let property =
          choice.taskProperty.charAt(0).toUpperCase() +
          choice.taskProperty.slice(1).toLowerCase();
      }
      let edit;
      if (property === "Status") {
        edit = choice.taskPropertyValue.toLowerCase() === "true";
      } else {
        edit = choice.taskPropertyValue;
      }
      utils.editTodo(input, property, edit);
      utils.writeFile();
      app();
    } else if (input === 0) {
      rl.exitApp();
    }
  } else if (input === 0) {
    rl.exitApp();
  }
}

app();
