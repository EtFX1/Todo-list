import {
    tasksCont,
    getLastInputElemFromClassList,
} from "../utils.js";

import { addFocusEventListenersToInputs } from "../features/track-tasks/track-tasks-created.js";


export let tasksCreatedObj = { task: 0 };

export function checkWhetherAtaskCanBeAdded() {
    if (getLastInputElemFromClassList().value === "") {
        alert("You must add something to the previous task first!");
    } else {
        addNewTask();
        addFocusEventListenersToInputs();
    }
}

function addNewTask() {

    //create new task 
    cloneTaskElem();


    function cloneTaskElem() {
        const listElem = document.querySelector(".single-task-cont");
        const clonedListElem = listElem.cloneNode(true); //clones the LIST element
        tasksCont.append(clonedListElem); //adding the cloned element to the DOM

        getNewTaskReadyForDisplay(clonedListElem);

    }
    function getNewTaskReadyForDisplay(clonedElem) {
        clonedElem.firstElementChild.checked = false; //removing the "checked state" of the newly created task if it has one

        getLastInputElemFromClassList().value = ""; //clearing the input of the next task element


    }
}

