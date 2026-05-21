const readline = require("readline");
const fs = require("fs");
const ui = require("./ui.js");
const { json } = require("stream/consumers");

const todoTemplate = {
  id: null,
  status: false,
  task: "",
};

// const createTodoFile = () => {
//   fs.appendFile("todos.json", JSON.stringify(todoTemplate, null, 2), "utf8");
//   // use a async function here maybe? /\
//   console.log(ui.ewFileMsg("todos.json"));
// };

const createTodoFile = () => {
  fs.appendFile("todos.json", JSON.stringify(todoTemplate), "utf8", (done) => {
    if (done) throw done;
    console.log(ui.newFileMsg("todos.json"));
  });
};

module.exports = {
  fs,
  todoTemplate,
  createTodoFile,
};
