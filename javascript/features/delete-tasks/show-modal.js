import { dialog } from "./delete-the-task.js";
import { tasksCont } from "../../utils.js";

//allows users to select what task they should delete

export let clickedTask = null;
export let clickedTaskInput = null;
export let taskHasContent = false;


export function showModal(event) {
    if (event.target.value !== "") {
        taskHasContent = true;
    }

    if (event.target.className === "text-input red-border") {
        clickedTask = event.target.closest(".single-task-cont");
        clickedTaskInput = event.target;
        dialog.showModal();
    }
}

