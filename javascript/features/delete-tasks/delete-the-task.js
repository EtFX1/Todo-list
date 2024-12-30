import { tasksCreatedObj } from "../add-tasks.js";
import { tasksCont, toggleTaskAndImgCont, listOfTextInputClasses } from "../../utils.js";
import { clickedTask, clickedTaskInput, showModal } from "./show-modal.js";
import { highlightAllTasks } from "./highlight-tasks.js";
import { handleModalResponse } from "./handle-modal-response.js";
import { toggleDisabledOnCheckboxes } from "./toggle-functions.js";
import { dialog } from "../../utils.js";


export function checkWhetherAtaskCanBeDeleted() {
    //? checking if tasks count = 0 AND if the first input element is empty
    if (tasksCreatedObj.task === 0 && listOfTextInputClasses[0].value === "") {
        alert("There are no tasks to delete yet.");
    } else {
        highlightAllTasks();
        toggleDisabledOnCheckboxes();
        // toggleDisabledOnDeleteBtn();
        tasksCont.addEventListener("click", showModal);
        handleModalResponse();
    }
}

//removes the task from the dom (and displays the task container if needed)
export function deleteATask() {
    const taskContainers = document.querySelectorAll(".single-task-cont");

    // changes back to the "no tasks yet" page if there's only one task left on the screen (so that it doesn't get deleted)
    if (taskContainers.length === 1) {
        clickedTaskInput.value = "";
        toggleTaskAndImgCont();
    } else {
        clickedTask.remove(); //removal of the user-selected elem from the DOM
    }

    tasksCont.removeEventListener("click", showModal);
    dialog.close();
}



