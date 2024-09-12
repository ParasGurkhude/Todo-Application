
# Todo List Application

This is a simple Todo List application built using **Vite** and **React**. The app allows users to add, filter, and manage tasks.

## Features

- Add, toggle, and delete tasks
- Filter tasks based on their completion status (All, Pending, Completed)
- Task count and completed task count displayed

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate into the project folder:
   ```bash
   cd todo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Components

### 1. Vite React App
The project is CSS using Vite for fast development builds. React is used for building the UI components and managing state.

### 2. Todo Component
The `Todo` component is responsible for displaying the tasks and the input for adding new tasks.

### 3. `useState` Hook
State is managed using the `useState` hook for:
- Storing the list of tasks
- Tracking the input value of new tasks
- Tracking filter settings


### 4. `addTask` Function
The `addTask` function allows users to add a new task by typing into an input field and pressing "Enter" or "onClick".


### 5. Handle Key Press (Enter)
This function captures the "Enter" key press to add tasks easily without clicking a button.



### 6. Toggle Function
Each task has a toggle button to mark it as completed or pending. 


### 7. Delete Function
This function deletes a specific task from the list.


### 8. Filter Function
You can filter tasks based on three criteria:
- **All Tasks**: Shows all tasks
- **Pending Tasks**: Shows tasks that are not yet completed
- **Completed Tasks**: Shows tasks that are completed


### 9. Total Tasks Count
The total number of tasks is displayed on the screen.


### 10. Completed Tasks Count
The count of completed tasks is displayed on the screen.


## Usage

- Type your task in the input field and press "Enter" to add a new task.
- Click on a task to mark it as completed or pending.
- Use the filter buttons to view all tasks, only pending tasks, or only completed tasks.
- The total number of tasks and completed tasks are updated and displayed dynamically.

---
