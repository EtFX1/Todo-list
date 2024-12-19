import { tasksChecked, tasksCheckedElem } from "../track-tasks.js";
import { deleteATask } from "./delete-the-task.js";
import { toggleDisabledOnCheckboxes, toggleDisabledOnDeleteBtn, toggleRedBorders } from "./toggle-functions.js"

//shows a modal to allow the user confirm whether a task should be deleted
export function handleModalResponse() {
    const noBtn = document.querySelector(".no-btn");

    const yesBtn = document.querySelector(".yes-btn");

    //?removing the event listeners so that they don't stack up each time the yes or no btn is clicked

    yesBtn.removeEventListener("click", handleYesBtnClick);
    yesBtn.addEventListener("click", handleYesBtnClick);

    noBtn.removeEventListener("click", handleNoBtnClick);
    noBtn.addEventListener("click", handleNoBtnClick);
}

function handleYesBtnClick() {
    toggleRedBorders();
    deleteATask();
    decrementTasksChecked();
    toggleDisabledOnCheckboxes();
    toggleDisabledOnDeleteBtn();
}

function handleNoBtnClick() {
    toggleRedBorders();
    toggleDisabledOnDeleteBtn();
    toggleDisabledOnCheckboxes();
    dialog.close();
}

//reduces the number of tasks checked by 1
function decrementTasksChecked() {
    if (tasksChecked.num > 0) {
        tasksChecked.num -= 1;
        tasksCheckedElem.innerText = tasksChecked.num;
    };
}