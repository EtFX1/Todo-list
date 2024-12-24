export const tasksCont = document.querySelector(".tasks-cont");
export const listOfTextInputClasses = document.getElementsByClassName("text-input"); //HTML collection of the elements with "text-input" class-name
export const allTextBoxes = () => document.querySelectorAll(".text-input"); //returns 
//? made into a function because the code inside needs to be run locally, inside fo a function


export function toggleTaskAndImgCont() {

    const imgCont = document.querySelector(".img-and-text-cont");
    const headerAndTasksCont = document.querySelector(".header-and-tasks-cont");

    imgCont.classList.toggle("display-none");
    headerAndTasksCont.classList.toggle("display-none");
}

//? When called, it gets the last input element from the page. It's a function because this element can change depending on the number of tasks on the page.
export function getLastInputElemFromClassList() {
    return listOfTextInputClasses[listOfTextInputClasses.length - 1];
}




