export const tasksCheckedElem = document.querySelector(".tasks-checked");
export let tasksChecked = { num: 0 };

//?event delegation to add this event handler to every checkbox on the page (instead of a for loop)
export function handleTaskTracking(event) {

    if (event.target.className === "checkbox") {
        trackTasks(event);
    }
}

function trackTasks(e) {
    let checkboxElem = e.target;

    const textbox = checkboxElem.nextElementSibling.firstElementChild; //the input textbox next to the check


    if (textbox.value === "") {
        alert("You can't tick off an empty task! 🤦‍♂️");
        checkboxElem.checked = false;
    } else if (checkboxElem.checked) {
        tasksChecked.num += 1;
    } else { //handles if the checkbox is clicked again and checkboxElem.checked = false
        tasksChecked.num -= 1;
    }

    tasksCheckedElem.innerText = tasksChecked.num;
}

