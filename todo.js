const utils = require("./utils.js");

console.log("Hello World");

function startup() {
  utils.readFile();
  console.log(utils.readFileState);
  // utils.createTodoFile("todos.json");
  utils.readFile();
}

startup();
console.log(utils.readFileState);

// utils.addTodoToFile();
