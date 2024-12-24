import { allTextBoxes } from "../../utils.js";

let numOfTasksAdded = 0;
const tasksAddedElem = document.querySelector(".tasks-created");
const updateInnerText = () => tasksAddedElem.innerText = numOfTasksAdded;

export function addFocusEventListenersToInputs() {

    allTextBoxes().forEach((inputTextbox) => {
        inputTextbox.removeEventListener("focusin", focusIn);
        inputTextbox.addEventListener("focusin", focusIn);
        inputTextbox.removeEventListener("focusout", focusOut);
        inputTextbox.addEventListener("focusout", focusOut);
    });

    //? if there's a task already added in there (input.value !== ""), then you can't add another task in there
    function focusIn(event) {

        if (event.target.value === "") {
            numOfTasksAdded += 1;
            updateInnerText();
        }
    }

    //? if the user hasn't truly added a task after focusing out, then the number of tasks isn't incremented
    function focusOut(event) {
        if (event.target.value === "") {
            numOfTasksAdded -= 1;
            updateInnerText();
        }
    }


}