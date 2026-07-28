#!/usr/bin/env node

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
                const description = args.join(" ");
                
                const nextId = tasks.reduce((acc, task)=>{return Math.max(acc, task.id)}, 0) + 1;
                
                const task = {
                        id : nextId,
                        description, 
                        status : "todo",
                        createdAt : now,
                        updatedAt : now,
                }
                tasks.push(task);
                fs.writeFileSync( "tasks.json", JSON.stringify(tasks, null, 2));
                
                console.log("Task added successfully (ID : " + nextId + ")");
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
                        case "todo":{
                                filteredList = taskList.filter(t => t.status === "todo");
                                break;
                        }
                        case "in-progress":{
                                filteredList = taskList.filter(t => t.status === "in-progress");
                                break;
                        }
                        default:
                                filteredList = taskList;
                                
                }

                console.table(filteredList)
                break;
        }


        
        case "delete":{
                const idToDelete = Number(args[0]);

                if(Number.isNaN(idToDelete)){
                        console.error("Please enter a valid Task Id.");
                        break;
                }

                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf-8"));
                const updatedList = taskList.filter( t => t.id !== idToDelete);
                
                if(taskList.length === updatedList.length){                
                        console.error("Task not found. Please enter a valid task Id.");
                }else{
                        fs.writeFileSync("tasks.json",JSON.stringify(updatedList, null, 2));
                        console.log("Task " + idToDelete + " Successfully Deleted.");
                }

                break;
        }

                
        case "update": {
                
                const idToUpdate = Number(args[0]);

                if(Number.isNaN(idToUpdate)){
                        console.error("Please enter a valid Task Id.");
                        break;
                }

                const description = args.slice(1).join(" ");

                if(description === ""){
                        console.error("Please enter a valid Description to update.");
                        break;
                }
                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                
                const task = taskList.find(t => t.id === idToUpdate);
                
                if(task){
                        task.description = description;
                        task.updatedAt = new Date().toISOString();
                        
                        fs.writeFileSync("tasks.json", JSON.stringify(taskList, null, 2));
                        console.log("Task " + idToUpdate + " Successfully updated.");
                }else
                        console.error("Task not found. Please enter a valid task Id.")

                break;
        }
                
        case "mark-in-progress":{
                const idToUpdate = Number(args[0]);

                if(Number.isNaN(idToUpdate)){
                        console.error("Please enter a valid Task Id.");
                        break;
                }

                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                const task = taskList.find(t => t.id === idToUpdate);

                if(task){
                        task.status = "in-progress";
                        task.updatedAt = new Date().toISOString();;

                        fs.writeFileSync("tasks.json", JSON.stringify(taskList, null, 2));
                        console.log("Task " + idToUpdate + " marked in progress.");
                }else
                        console.error("Task not found. Please enter a valid task Id.")
                
                break;
        }

        case "mark-done":{
                const idToUpdate = Number(args[0]);

                if(Number.isNaN(idToUpdate)){
                        console.error("Please enter a valid Task Id.");
                        break;
                }

                const taskList = JSON.parse(fs.readFileSync("tasks.json", "utf8"));
                const task = taskList.find(t => t.id === idToUpdate);

                if(task){
                        task.status = "done";
                        task.updatedAt = new Date().toISOString();

                        fs.writeFileSync("tasks.json", JSON.stringify(taskList, null, 2));
                        console.log("Task " + idToUpdate + " marked done.");
                }else
                        console.error("Task not found. Please enter a valid task Id.")
                
                break;
                
        }
                        
        default:
                console.log("Invalid command. \n Available commands: \n add\tlist\tupdate\tdelete\tmark-in-progress\tmark-done.");
                        break;
                }