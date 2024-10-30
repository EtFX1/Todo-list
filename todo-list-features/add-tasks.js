import { tasksCont, displayTasksCont } from "../index.js";

// const textInput = document.querySelector(".text-input");
const newTaskElem = document.querySelector(".single-task-cont");

//? gets the last textbox on the page
const listOfTextInputClasses = document.getElementsByClassName("text-input"); //HTML collection of the elements with "text-input" class-name

const getLastTextInputBoxFromClassList = () => listOfTextInputClasses[listOfTextInputClasses.length - 1]; //the last index of listOfTextInputClasses

let addBtnClicks = 0;
let tasksAdded = 0;


function checkWhetherNewTaskCanBeAdded() {
    addBtnClicks += 1;
    if (addBtnClicks === 1) {
        displayTasksCont();
    } if (addBtnClicks > 1) {
        if (getLastTextInputBoxFromClassList().value === "") {
            alert("You must add something to the previous task first!");
        } else {
            addNewTask();
        }
    }
}

function addNewTask() {
    tasksAdded += 1;

    //?checks whether the board is full (i.e has 8 tasks) before it adds new input textbox

    if (tasksAdded === 8) {
        alert("Sorry you can't add more than 8 tasks!");
    } else {
        const clonedListElem = newTaskElem.cloneNode(true); //clones the LIST element

        //*adding the cloned element to the DOM
        tasksCont.append(clonedListElem);

        //*doing certain things to the cloned element 
        clonedListElem.firstElementChild.checked = false;

        getLastTextInputBoxFromClassList().value = ""; //clearing the input of the next input element
        getLastTextInputBoxFromClassList().focus(); //switching the focus to the next input element

    }
}

function handleEnterKey(event) {
    if (event.key === "Enter") {
        if (event.target.tagName === "INPUT") {
            checkWhetherNewTaskCanBeAdded();
        }
    }
}

export { checkWhetherNewTaskCanBeAdded, handleEnterKey }
