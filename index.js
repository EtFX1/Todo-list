const addBtn = document.querySelector(".add-btn");
const tasksCont = document.querySelector(".tasks-cont");
const imgCont = document.querySelector(".img-and-text-cont");
const textInput = document.querySelector(".text-input");
const newTaskElem = document.querySelector(".single-task-cont");
const listOfTextInputClasses = document.getElementsByClassName("text-input"); //HTML collection of the elements with "text-input" class-name
const listOfCheckboxClasses = document.getElementsByClassName("checkbox");

let tasksAdded = 0;
let addBtnClicks = 0;

//? extracts the last input textbox from the a list
const getLastTextInputBoxFromClassList = () => listOfTextInputClasses[listOfTextInputClasses.length - 1]; //the last index of listOfTextInputClasses

const getLastCheckboxFromClassList = () => listOfCheckboxClasses[listOfCheckboxClasses.length - 1]; //the last index of listOfTextInputClasses

addBtn.addEventListener("click", checkWhetherNewTaskCanBeAdded);

tasksCont.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (event.target.tagName === "INPUT") {
            checkWhetherNewTaskCanBeAdded();
        }
    }
});

tasksCont.addEventListener("change", function (event) {

    if (event.target.id === "check") {
        const textbox = event.target.nextElementSibling.firstElementChild; //the textbox next to the check
        if (textbox.value === "") {
            alert("You cannot tick off an empty item!");
            event.target.checked = false;
        }
    }

});


function displayTasksCont() {
    tasksCont.classList.toggle("display-none"); //display the tasks container
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












