"use strict";

const modal = document.querySelector("#modalCalendar");
const showModal = () => {
    modal.classList.add("active");
}
const hideModal = () => {
    modal.classList.remove("active");
}

modal.querySelector(".admin__modal-background").addEventListener("click", () => {
    hideModal();
});
modal.querySelector("#modalCalendarClose").addEventListener("click", () => {
    hideModal();
});
modal.querySelector(".admin__modal-panel").addEventListener("click", () => {
});
[...document.querySelectorAll(".admin-calendar__thumbnail-image")].forEach(room => {
    room.addEventListener("click",() => {
        showModal();
    })
})