import { allTextBoxes } from "../../utils.js";

export let numOfTasksAdded = { num: 0 };
const tasksAddedElem = document.querySelector(".tasks-created");
export const updateInnerText = () => tasksAddedElem.innerText = numOfTasksAdded.num;

export function addFocusEventListenersToInputs() {
    allTextBoxes().forEach((inputTextbox) => {
        inputTextbox.addEventListener("focusin", updateWhenFocused);
        inputTextbox.addEventListener("focusout", decrementWhenUnfocused);
    });
}

//? if there's no text in the textbox when user focuses into it, then "numOfTasksAdded" is incremented by 1
export function updateWhenFocused(event) {
    // debugger;
    if (event.target.value === "") {
        // debugger;
        numOfTasksAdded.num += 1;
        updateInnerText();
    }
}

//? if there's no text in the textbox when user focuses out of it, then "numOfTasksAdded" is decremented by 1
function decrementWhenUnfocused(event) {
    if (event.target.value === "") {
        numOfTasksAdded.num -= 1;
        updateInnerText();
    }
}