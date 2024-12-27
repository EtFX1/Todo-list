import { allTextBoxes } from "../../utils.js";

let numOfTasksAdded = 0;
const tasksAddedElem = document.querySelector(".tasks-created");
const updateInnerText = () => tasksAddedElem.innerText = numOfTasksAdded;

export function addFocusEventListenersToInputs() {

    allTextBoxes().forEach((inputTextbox) => {
        inputTextbox.removeEventListener("focusin", updateWhenFocused);
        inputTextbox.addEventListener("focusin", updateWhenFocused);
        inputTextbox.removeEventListener("focusout", decrementWhenUnfocused);
        inputTextbox.addEventListener("focusout", decrementWhenUnfocused);
    });

    //? if there's no text in the textbox when user focuses into it, then "numOfTasksAdded" is incremented by 1
    function updateWhenFocused(event) {
        if (event.target.value === "") {
            numOfTasksAdded += 1;
            updateInnerText();
        }
    }

    //? if there's no text in the textbox when user focuses out of it, then "numOfTasksAdded" is decremented by 1
    function decrementWhenUnfocused(event) {
        if (event.target.value === "") {
            numOfTasksAdded -= 1;
            updateInnerText();
        }
    }


}