const addBtn = document.querySelector(".add-btn");
const tasksCont = document.querySelector(".tasks-cont");
const imgCont = document.querySelector(".img-and-text-cont");
const textInput = document.querySelector(".text-input");
const newTaskElem = document.querySelector(".single-task-cont");
const listOfTextInputClasses = document.getElementsByClassName("text-input"); //HTML collection of the elements with "text-input" class-name

let tasksAdded = 0;
let addBtnClicks = 0;


addBtn.addEventListener("click", function () {
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
});

//? extracts the last input textbox from the a list
const getLastTextInputBoxFromClassList = () => listOfTextInputClasses[listOfTextInputClasses.length - 1]; //the last index of listOfTextInputClasses

function displayTasksCont() {
    tasksCont.classList.toggle("display-none"); //display the tasks container
    imgCont.classList.toggle("display-none"); //remove the image container
}

function displayImageCont() {
    tasksCont.classList.toggle("display-none"); //remove the tasks container
    img.classList.toggle("display-none"); //display the image container
}

function addNewTask() {
    tasksAdded += 1;

    //?checks whether the board is full (i.e has 8 tasks) before it adds new input textbox

    if (tasksAdded === 3) {
        alert("Sorry you can't add more than 8 tasks!");
    } else {
        const clonedListElem = newTaskElem.cloneNode(true); //clones the list element
        tasksCont.append(clonedListElem); //adding the cloned list element to the tasks container
        getLastTextInputBoxFromClassList().value = ""; //clearing the input of the next element

    }
}












