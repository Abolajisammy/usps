let toggleNavStatus1 = false;

function namePassword() {

    let getFormWrapper = document.querySelector(".form-wrapper");
    let getForm = document.querySelector(".form-wrapper");
    let getTrackingNumber = document.querySelector("#tracking-number").value;
    let signOnLink = document.querySelector("#submit-button");
    let correctTrackingNumber = document.createTextNode("9205542823994890291920");
    let inCorrectMessage = document.querySelector(".error-message");
    
    
    
    
    if (getTrackingNumber == "9205542823994890291920") {
        signOnLink.setAttribute("href", "/tracking-page.html");
        inCorrectMessage.style.display = "none";
    
    } else if (getTrackingNumber !== "9205542823994890291920") {
        signOnLink.removeAttribute("href", "/tracking-page.html");
        inCorrectMessage.style.display = "block";
    }
    
    }