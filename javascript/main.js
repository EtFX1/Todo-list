import {
    tasksCont,
    toggleTaskAndImgCont,
} from "./utils.js"

import {
    addNewTask
} from "./features/add-tasks.js";

import { handleTaskTracking } from "./features/track-tasks/track-checked-tasks.js";

import { addFocusEventListenersToInputs } from "./features/track-tasks/track-created-tasks.js";

import { checkWhetherAtaskCanBeDeleted } from "./features/delete-tasks/delete-the-task.js";

const addBtn = document.querySelector(".add-btn");
const deleteBtn = document.querySelector(".delete-btn");
const firstAddBtn = document.querySelector(".first-add-btn-cont");


firstAddBtn.addEventListener("click", function () {
    addFocusEventListenersToInputs();
    toggleTaskAndImgCont();
    addNewTask();
});

addBtn.addEventListener("click", addNewTask);

//fires when the checkbox is clicked
tasksCont.addEventListener("change", handleTaskTracking);

deleteBtn.addEventListener("click", checkWhetherAtaskCanBeDeleted);
