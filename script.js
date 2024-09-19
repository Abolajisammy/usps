let toggleNavStatus = false;

function closeBar() {
    let boxWrapper = document.querySelector(".what");
    let arrowIcon = document.querySelector(".what-header img");
    let contentWrapper = document.querySelector(".tracking-no-sample");

    if (toggleNavStatus == false) {
        contentWrapper.style.display = "flex";
        arrowIcon.src = "/icons/arrow-up-main.png";

        toggleNavStatus = true;
    } else if(toggleNavStatus == true) {
        contentWrapper.style.display = "none";
        arrowIcon.src = "/icons/arrow-down-main.png";


        toggleNavStatus = false;


    }



}
function closeBar1() {
    let boxWrapper = document.querySelector(".what");
    let arrowIcon = document.querySelector(".where-header img");
    let contentWrapper = document.querySelector(".where .tracking-no-sample");

    if (toggleNavStatus == false) {
        contentWrapper.style.display = "flex";
        arrowIcon.src = "/icons/arrow-up-main.png";

        toggleNavStatus = true;
    } else if(toggleNavStatus == true) {
        contentWrapper.style.display = "none";
        arrowIcon.src = "/icons/arrow-down-main.png";


        toggleNavStatus = false;


    }



}
function closeBar2() {
    let boxWrapper = document.querySelector(".what");
    let arrowIcon = document.querySelector(".how-header img");
    let contentWrapper = document.querySelector(".how .tracking-no-sample");


    if (toggleNavStatus == false) {
        contentWrapper.style.display = "flex";
        arrowIcon.src = "/icons/arrow-up-main.png";

        toggleNavStatus = true;
    } else if(toggleNavStatus == true) {
        contentWrapper.style.display = "none";
        arrowIcon.src = "/icons/arrow-down-main.png";


        toggleNavStatus = false;


    }



}
