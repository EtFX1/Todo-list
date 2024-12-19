import { tasksCont } from "../../utils.js";
import { dialog } from "./delete-the-task.js"
import { toggleRedBorders } from "./toggle-functions.js";
//allows users to select what task they should delete

export let clickedTask = null;
export let clickedTaskInput = null;

export function highlightAllTasks() {

    toggleRedBorders();

    //change the mouse pointer type when user hovers over a task
    tasksCont.addEventListener("mouseover", function (event) {
        if (event.target.tagName === "INPUT") {
            event.target.style.cursor = "pointer";
        }
    });

    //shows modal when user clicks on the task that they want to delete
    tasksCont.addEventListener("click", showModal);

}

export function showModal(event) {
    if (event.target.className === "text-input red-border") {

        clickedTask = event.target.closest(".single-task-cont");
        clickedTaskInput = event.target;

        dialog.showModal();
    }
}
