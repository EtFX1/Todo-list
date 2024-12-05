import { checkWhetherNewTaskCanBeAdded, handleEnterKey } from "./todo-list-features/add-tasks.js";
import { trackCheckedTasks } from "./todo-list-features/track-tasks.js";

const addBtn = document.querySelector(".add-btn");
const contentCont = document.querySelector(".all-content-cont");
const imgCont = document.querySelector(".img-and-text-cont");
const headerAndTasksCont = document.querySelector(".header-and-tasks-cont");
export const tasksCont = document.querySelector(".tasks-cont");

addBtn.addEventListener("click", checkWhetherNewTaskCanBeAdded);

tasksCont.addEventListener("keydown", handleEnterKey);

tasksCont.addEventListener("change", trackCheckedTasks);


// function displayImageCont() {
//     tasksCont.classList.toggle("display-none"); //remove the tasks container
//     img.classList.toggle("display-none"); //display the image container
// }

export function displayTasksCont() {
    headerAndTasksCont.classList.toggle("display-none"); //display the tasks container
    contentCont.style.top = "8.5%";
    imgCont.classList.toggle("display-none"); //remove the image container
}















