const [, , command, ...args] = process.argv;
const fs = require("fs");



switch (command) {
        
        case "add":{
                if(args.length === 0){
                        console.error("Error : Please Enter the description along with the add command.");
                        break;
                }
                const tasks = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                
                const now = new Date().toISOString();
                const description = args[0];
                
                const nextId = tasks.reduce((acc, task)=>{return Math.max(acc, task.id)}, 0) + 1;
                
                const task = {
                        "id": nextId,
                        "description" : description,
                        "status" : "to-do",
                        "createdAt" : now,
                        "updatedAt" : now,
                }
                tasks.push(task);
                fs.writeFileSync( "tasks.json", JSON.stringify(tasks, null, 2));
                
                console.log("Task Successfully added. Task Id : " + nextId);
                break;
        }
        
        case "list":{

                const cmd = args[0];
                
                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
                let filteredList;

                switch(cmd){
                        case "done":{
                                filteredList = taskList.filter(t => t.status === "done");
                                break;
                        }
                        case "to-do":{
                                filteredList = taskList.filter(t => t.status === "to-do");
                                break;
                        }
                        case "in-progress":{
                                filteredList = taskList.filter(t => t.status === "in-progress");
                                break;
                        }
                        default:
                                filteredList = taskList;
                                
                }

                console.log(filteredList)
                break;
        }


        
        case "delete":{
                const idToDelete = Number(args[0]);
                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
                const updatedList = taskList.filter( t => t.id !== idToDelete);
                
                if(taskList.length === updatedList.length){                
                        console.error("Task not found. Please enter a valid task Id.");
                }else{
                        fs.writeFileSync("tasks.json",JSON.stringify(updatedList, null, 2));
                        console.log("Task Successfully Deleted. Deleted Id : " + idToDelete);
                }

                break;
        }

                
        case "update": {
                
                const idToUpdate = Number(args[0]);
                const description = args.slice(1).join(" ");
                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                
                const task = taskList.find(t => t.id === idToUpdate);
                
                if(task){
                        task.description = description;
                        const now = new Date().toISOString();
                        task.updatedAt = now;
                        
                        fs.writeFileSync("tasks.json", JSON.stringify(taskList, null, 2));
                        console.log("Task Successfully updated. Task Id : " + idToUpdate);
                }else
                        console.error("Task not found. Please enter a valid task Id.")

                break;
        }
                
        case "mark-in-progress":{
                const idToUpdate = Number(args[0]);
                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                const task = taskList.find(t => t.id === idToUpdate);

                if(task){
                        task.status = "in-progress";
                        const now = new Date().toISOString();
                        task.updatedAt = now;

                        fs.writeFileSync("tasks.json", JSON.stringify(taskList, null, 2));
                        console.log("Task Successfully updated. Task Id : " + idToUpdate);
                }else
                        console.error("Task not found. Please enter a valid task Id.")
                
                break;
        }

        case "mark-done":{
                const idToUpdate = Number(args[0]);
                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                const task = taskList.find(t => t.id === idToUpdate);

                if(task){
                        task.status = "done";
                        const now = new Date().toISOString();
                        task.updatedAt = now;

                        fs.writeFileSync("tasks.json", JSON.stringify(taskList, null, 2));
                        console.log("Task Successfully updated. Task Id : " + idToUpdate);
                }else
                        console.error("Task not found. Please enter a valid task Id.")
                
                break;
                
        }
                        
        default:
                console.log("Invalid Command Given. Please use Add, List or Delete.");
                        break;
                }