import { decrementTasksChecked, decrementTasksCreated } from "../track-tasks/decrement-tasks.js";
import { deleteATask } from "./delete-the-task.js";
import { toggleDisabledOnCheckboxes, toggleRedBorders } from "./toggle-functions.js";
import { dialog } from "../../utils.js";

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
    toggleDisabledOnCheckboxes();
    // toggleDisabledOnDeleteBtn();
    decrementTasksChecked();
    decrementTasksCreated();
}

function handleNoBtnClick() {
    toggleRedBorders();
    // toggleDisabledOnDeleteBtn();
    toggleDisabledOnCheckboxes();
    dialog.close();
}