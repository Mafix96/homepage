console.log("Hello world!");

let buttonSeaman = document.querySelector(".js-buttonSeaman");
let buttonSurveyor = document.querySelector(".js-buttonSurveyor");
let buttonProgrammer = document.querySelector(".js-buttonProgrammer");
let photoSeamanElement = document.querySelector(".photoSeaman");
let photoSurveyorElement = document.querySelector(".photoSurveyor");
let photoProgrammerElement = document.querySelector(".photoProgrammer");
let checkElement = document.querySelector(".js-check");
let changeJobElement = document.querySelector(".js-changeJob");


buttonSeaman.addEventListener("click", () => {
    photoSeamanElement.classList.toggle("js-hide");

    buttonSeaman.innerText = photoSeamanElement.classList.contains("js-hide")
        ? "Pojawia się marynarz" : "Znika marynarz"
});

buttonSurveyor.addEventListener("click", () => {
    photoSurveyorElement.classList.toggle("js-hide");

    buttonSurveyor.innerText = photoSurveyorElement.classList.contains("js-hide")
        ? "Pojawia się ?" : "Znika geodeta"
});

checkElement.addEventListener("click", () => {
    checkElement.style.color === "black" ? checkElement.style.color = "red" : checkElement.style.color = "black";
});


buttonProgrammer.addEventListener("click", () => {
    switch (changeJobElement.innerText) {
        case "Marynarzem":
            changeJobElement.innerText = "Geodetą";
            break;
        case "Geodetą":
            changeJobElement.innerText = "Programistą"
            photoProgrammerElement.classList.toggle("js-hide");
            break;
        default:
            changeJobElement.innerText = "Marynarzem"
            photoProgrammerElement.classList.toggle("js-hide");
            break;
    }
});
