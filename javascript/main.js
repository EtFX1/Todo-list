import { tasksCont } from "./utils.js"

import {
    showTasksOrAddTask,
    handleEnterKey
} from "./features/add-tasks.js";

import { handleTaskTracking } from "./features/track-tasks.js";

import { checkWhetherAtaskCanBeDeleted } from "./features/delete-tasks/delete-the-task.js";

const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");

addBtn.addEventListener("click", showTasksOrAddTask);

//fires when the checkbox is clicked
tasksCont.addEventListener("change", handleTaskTracking);

deleteBtn.addEventListener("click", checkWhetherAtaskCanBeDeleted);
