const utils = require("./utils.js");

console.log("Hello World");
utils.createTodoFile();

utils.fs.readFile("todos.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // 2. Parse the raw string into a usable object/array
    const todos = JSON.parse(data);
    console.log("Parsed File Content:", todos);
  } catch (parseErr) {
    console.error("Error parsing JSON syntax:", parseErr);
  }
});
