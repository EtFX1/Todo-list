const addBtn = document.querySelector(".add-btn");
const imgCont = document.querySelector(".img-and-text-cont");
const contentCont = document.querySelector(".all-content-cont");
const headerAndTasksCont = document.querySelector(".header-and-tasks-cont");
const tasksCheckedElem = document.querySelector(".tasks-checked");
const tasksCont = document.querySelector(".tasks-cont");
const textInput = document.querySelector(".text-input");
const newTaskElem = document.querySelector(".single-task-cont");
const listOfTextInputClasses = document.getElementsByClassName("text-input"); //HTML collection of the elements with "text-input" class-name

let addBtnClicks = 0;
let tasksAdded = 0;
let tasksChecked = 0;

//? gets the last textbox on the page
const getLastTextInputBoxFromClassList = () => listOfTextInputClasses[listOfTextInputClasses.length - 1]; //the last index of listOfTextInputClasses

addBtn.addEventListener("click", checkWhetherNewTaskCanBeAdded);

tasksCont.addEventListener("keydown", handleEnterKey);

tasksCont.addEventListener("change", trackCheckedTasks);


function displayTasksCont() {
    headerAndTasksCont.classList.toggle("display-none"); //display the tasks container
    contentCont.style.top = "10%";
    imgCont.classList.toggle("display-none"); //remove the image container
}

function displayImageCont() {
    tasksCont.classList.toggle("display-none"); //remove the tasks container
    img.classList.toggle("display-none"); //display the image container
}

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

function handleEnterKey(event) {
    if (event.key === "Enter") {
        if (event.target.tagName === "INPUT") {
            checkWhetherNewTaskCanBeAdded();
        }
    }
}

function trackCheckedTasks(event) {
    if (event.target.id === "check") {
        const textbox = event.target.nextElementSibling.firstElementChild; //the textbox next to the check
        if (textbox.value === "") {
            alert("You cannot tick off an empty item!");
            event.target.checked = false;
        } else if (event.target.checked) {
            tasksChecked += 1;
        } else {
            tasksChecked -= 1;
        }

        tasksCheckedElem.innerText = tasksChecked;
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













