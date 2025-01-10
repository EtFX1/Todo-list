import {
    tasksCont,
    getLastInputElemFromClassList,
} from "../utils.js";

import { addFocusEventListenersToInputs } from "./track-tasks/track-created-tasks.js";


export let tasksCreatedObj = { task: 0 }

//todo: add task
// export function callAddNewTask() {
//     // if (getLastInputElemFromClassList().value === "") {
//     //     alert("You must add something to the previous task first!");
//     // } else {
//     //     addNewTask();
//     //     addFocusEventListenersToInputs();
//     // }
// }

export function addNewTask() {
    // debugger;
    const li = document.createElement("li");

    li.innerHTML = `
    <li class="single-task-cont">
        <!-- checkbox -->
        <input class="checkbox" type="checkbox" />

        <!-- text box -->
        <div class="text-cont">
                <input
                class="text-input"
                type="text"
                placeholder="Add a task!"
                maxlength="24"
            />
        </div>
    </li>`

    tasksCont.appendChild(li);
    li.scrollIntoView();
}

