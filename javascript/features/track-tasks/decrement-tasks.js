import { tasksChecked, tasksCheckedElem } from "./track-checked-tasks.js";
import { numOfTasksAdded, updateInnerText } from "./track-created-tasks.js";
import { taskHasContent } from "../delete-tasks/show-modal.js";


//reduces the number of tasks checked by 1
export function decrementTasksChecked() {
    if (tasksChecked.num > 0) {
        tasksChecked.num -= 1;
        tasksCheckedElem.innerText = tasksChecked.num;
    };
}

export function decrementTasksCreated() {
    if (taskHasContent) {
        numOfTasksAdded.num -= 1;
        updateInnerText();
    }
}