"use strict";

const modal = document.querySelector("#modalCalendar");
const modalFields = {
    "room": modal.querySelector("#modalCalendarTitle"),
    "date": modal.querySelector("#date"),
    "renter":  modal.querySelector("#renter"),
    "email":  modal.querySelector("#email"),
    "phone":  modal.querySelector("#phone"),
    "peopleAmount":  modal.querySelector("#peopleAmount"),
}
const defaultInfo = {
    "date": "Le − de − à −",
    "renter": "−",
    "email": "−",
    "phone": "−",
    "peopleAmount": 0
};

const showModal = (info=defaultInfo) => {
    console.log(info);
    modalFields.room.innerText = info.room || "−";
    modalFields.date.innerText = info.date || "Le − de − à −";
    modalFields.renter.innerText = info.renter || "−";
    modalFields.email.innerText = info.email || "−";
    modalFields.phone.innerText = info.phone || "−";
    modalFields.peopleAmount.innerText = info.peopleAmount || 0;
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
// [...document.querySelectorAll(".fc-daygrid-day-events")].forEach(event => {
//     event.addEventListener("click",() => {
//         showModal();
//     });
// });