const addBtn = document.querySelector(".add-btn");
const tasksCont = document.querySelector(".tasks-cont");
const imgCont = document.querySelector(".img-and-text-cont");


addBtn.addEventListener("click", function (event) {
    console.log(imgCont.classList);
    imgCont.classList.add("display-none");
    tasksCont.classList.remove("display-none");
});

