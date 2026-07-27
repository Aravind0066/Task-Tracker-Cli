const [, , command, ...args] = process.argv;
const fs = require("fs");

console.log(command);
console.log(args);

switch (command) {
    case "add":
        const tasks = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
        tasks.push(...args);
        fs.writeFileSync( "tasks.json", 
                          JSON.stringify(tasks, null, 2));
        break;
    case "list":
            const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
            console.log(taskList);
            break;
    case "delete":
            const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
            break;
    default:
        console.log("Invalid Command Given. Please use Add, List or Delete.");
        break;
}