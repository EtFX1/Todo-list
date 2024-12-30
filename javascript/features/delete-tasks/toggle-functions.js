import { allTextBoxes } from "../../utils.js"

//disables/enables the checkboxes
export function toggleDisabledOnCheckboxes() {
    const allCheckBoxes = document.querySelectorAll(".checkbox"); //returns a node list of all text inputs 

    allCheckBoxes.forEach(function (checkBox) {
        checkBox.disabled = !checkBox.disabled;
    });
}

//disables/enables the delete button 
// export function toggleDisabledOnDeleteBtn() {
//     const deleteBtn = document.querySelector(".delete-btn");
//     const deleteIcon = document.querySelector(".delete-icon");

//     deleteBtn.disabled = !deleteBtn.disabled;

//     //changes the icons color to grey
//     deleteBtn.classList.toggle("delete-btn-grey");
//     deleteIcon.classList.toggle("delete-icon-grey");
// }

//highlights the border of a task
export function toggleRedBorders() {
    //highlights all textboxes
    allTextBoxes().forEach(function (inputElem) {
        inputElem.classList.toggle("red-border");
    });
}