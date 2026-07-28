# Task Tracker CLI

![Node.js](https://img.shields.io/badge/Node.js-22.x-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![License](https://img.shields.io/badge/License-MIT-blue)

A lightweight command-line task management application built with Node.js.

The application allows you to create, update, organize, and manage tasks directly from the terminal while storing all data locally in a JSON file.

This project was built to strengthen fundamental backend concepts such as file handling, JSON manipulation, CLI argument parsing, and CRUD operations without using any external libraries.

---

## Features

- Add new tasks
- Update existing tasks
- Delete tasks
- Mark tasks as **In Progress**
- Mark tasks as **Done**
- List all tasks
- Filter tasks by status
- Local JSON-based persistence
- Basic input validation

---

## Tech Stack

- Node.js
- JavaScript (ES6)
- Node.js File System (`fs`) Module

---

## Project Structure

```
Task-Tracker-CLI/
│
├── task-cli.js
├── tasks.json
└── README.md
```

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/Aravind0066/Task-Tracker-Cli.git
```

Move into the project directory:

```bash
cd Task-Tracker-Cli
```

Create a `tasks.json` file in the root directory and initialize it with:

```json
[]
```

---

## Usage

### Add a Task

```bash
node task-cli.js add "Complete backend project"
```

### List All Tasks

```bash
node task-cli.js list
```

### List Tasks by Status

```bash
node task-cli.js list to-do

node task-cli.js list in-progress

node task-cli.js list done
```

### Update a Task

```bash
node task-cli.js update 2 "Learn Express.js"
```

### Mark as In Progress

```bash
node task-cli.js mark-in-progress 2
```

### Mark as Done

```bash
node task-cli.js mark-done 2
```

### Delete a Task

```bash
node task-cli.js delete 2
```

---

## Sample Output

```text
┌─────────┬────┬──────────────────────────┬──────────────┐
│ (index) │ id │ description             │ status       │
├─────────┼────┼──────────────────────────┼──────────────┤
│    0    │ 1  │ Complete backend project│ in-progress  │
│    1    │ 2  │ Solve LeetCode          │ done         │
└─────────┴────┴──────────────────────────┴──────────────┘
```

---

## Concepts Practiced

- Command-line applications
- Argument parsing with `process.argv`
- File handling using the `fs` module
- JSON serialization and parsing
- CRUD operations
- Array methods (`find`, `filter`, `reduce`)
- Input validation

---

## Roadmap.sh Project

This project is based on the **Task Tracker** project from roadmap.sh.

https://roadmap.sh/projects/task-tracker

---

## Author

**Aravind M**

GitHub: https://github.com/Aravind0066