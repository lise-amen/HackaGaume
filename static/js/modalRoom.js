"use strict";

const modal = document.querySelector("#modalRoom");
const showModal = () => {
    modal.classList.add("active");
}
const hideModal = () => {
    modal.classList.remove("active");
}

modal.querySelector(".admin__modal-background").addEventListener("click", () => {
    hideModal();
});
modal.querySelector("#modalRoomClose").addEventListener("click", () => {
    hideModal();
});
modal.querySelector(".admin__modal-panel").addEventListener("click", () => {
});
[...document.querySelectorAll(".admin-room__thumbnail-image")].forEach(room => {
    room.addEventListener("click",() => {
        showModal();
    });
});