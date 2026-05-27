const fs = require("fs");
const ui = require("./ui.js");
const { json } = require("stream/consumers");

const todoTemplate = {
  id: null,
  status: false,
  task: "",
};

const createTodoFile = (fileName) => {
  try {
    fs.closeSync(fs.openSync(fileName, "wx"));
    console.log("File created successfully.");
    // TODO upate log with ui message
  } catch (err) {
    if (err.code === "EEXIST") {
      console.log("File already exists!");
    } else {
      console.error(err);
    }
  }
};

const initFileSetup = () => {
  fs.writeFileSync("todos.json", JSON.stringify([]), "utf8");
  readFile();
};

const addTodoToFile = () => {
  fs.appendFileSync("todos.json", JSON.stringify(todoTemplate), "utf8");
  console.log(ui.newFileMsg("todos.json"));
};

const state = {
  readFileState: null,
};

const readFile = (file = "todos.json") => {
  try {
    const data = fs.readFileSync(file, "utf8");
    state.readFileState = JSON.parse(data);
  } catch (err) {
    if (err && err.code === "ENOENT") {
      createTodoFile("todos.json");
      return;
    }
    if (err instanceof SyntaxError) {
      initFileSetup();
      return;
    }
    state.readFileState = ["Error Reading File:", err];
  }
  return;
};

const addTodo = (input) => {
  state.readFileState.push(input);
};

const removeTodo = (input) => {
  const i = input - 1;
  delete state.readFileState[i];
};

const editTodo = (todo, property, edit) => {
  const i = todo - 1;
  state.readFileState[i][property] = edit;
};

const writeFile = () => {
  fs.writeFileSync("todos.json", JSON.stringify(state.readFileState), "utf8");
};

const exportsObj = {
  fs,
  todoTemplate,
  createTodoFile,
  addTodoToFile,
  initFileSetup,
  state,
  readFile,
  addTodo,
  removeTodo,
  editTodo,
  writeFile,
};

Object.defineProperty(exportsObj, "readFileState", {
  enumerable: true,
  get() {
    return state.readFileState;
  },
});

module.exports = exportsObj;
