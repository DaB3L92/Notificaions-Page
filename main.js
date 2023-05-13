const readed = document.querySelector(".readed");

readed.addEventListener("click", () => {
    resetNotif();
    markReaded();
});

function markReaded() {
    let notifReaded = document.querySelectorAll(".new-notification");
    notifReaded.forEach(notifReaded => notifReaded.classList.add("notif-readed"));
    let dot = document.querySelectorAll(".dot");
    dot.forEach(dot => dot.classList.add("hidden"));
}

function resetNotif() {
    let notifClear = document.querySelector(".notifications_news");
    notifClear.innerText = "0";
}