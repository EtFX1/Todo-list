import {
    tasksCont,
    toggleTaskAndImgCont,
    getLastInputElemFromClassList
} from "../utils.js";


export let tasksAddedObj = { task: 0 };
export let tasksShown = { x: false };


export function showTasksOrAddTask() {
    if (tasksShown.x) {
        checkWhetherAtaskCanBeAdded();
    } else {
        toggleTaskAndImgCont();
        tasksShown.x = true;
    }
}

function checkWhetherAtaskCanBeAdded() {
    if (getLastInputElemFromClassList().value === "") {
        alert("You must add something to the previous task first!");
    } else {
        addNewTask();
    }
}


function addNewTask() {
    tasksAddedObj.task += 1;

    //?checks whether the board is full (i.e has 8 tasks) before it adds new input textbox
    if (tasksAddedObj.task === 7) {
        alert("Sorry you can't add more than 7 tasks!");
    } else {
        //create new task 

        const listElem = document.querySelector(".single-task-cont");
        const clonedListElem = listElem.cloneNode(true); //clones the LIST element

        tasksCont.append(clonedListElem); //adding the cloned element to the DOM

        getNewTaskReadyForDisplay();

        function getNewTaskReadyForDisplay() {
            clonedListElem.firstElementChild.checked = false; //removing the "checked state" of the newly created task if it has one

            getLastInputElemFromClassList().value = ""; //clearing the input of the next task element

            getLastInputElemFromClassList().focus(); //switching the focus from the previous element to to this newly cloned list element
        }

    }
}


