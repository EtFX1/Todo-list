const tasksCheckedElem = document.querySelector(".tasks-checked");
let tasksChecked = 0;

export function trackCheckedTasks(event) {
    if (event.target.id === "check") {
        const textbox = event.target.nextElementSibling.firstElementChild; //the textbox next to the check
        if (textbox.value === "") {
            alert("You cannot tick off an empty item!");
            event.target.checked = false;
        } else if (event.target.checked) {
            tasksChecked += 1;
        } else {
            tasksChecked -= 1;
        }

        tasksCheckedElem.innerText = tasksChecked;
    }
}
