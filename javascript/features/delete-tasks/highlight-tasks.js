import { toggleRedBorders } from "./toggle-functions.js";
import { tasksCont } from "../../utils.js";
import { updateWhenFocused } from "../track-tasks/track-created-tasks.js";


export function highlightAllTasks() {
    toggleRedBorders();
    //change the mouse pointer type when user hovers over a task
    tasksCont.addEventListener("mouseover", function (event) {
        let clickedInputElem = event.target;
        if (clickedInputElem.tagName === "INPUT") {
            clickedInputElem.style.cursor = "pointer";
            clickedInputElem.removeEventListener("focusin", updateWhenFocused);
        }
    });
}
