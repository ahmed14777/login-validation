//global declare
console.log("hello");
let body = document.body;

//start username validation declare
const userForm = document.querySelector(".user-form");
const userLabel = document.querySelector(".user-label");
const userInput = document.getElementById("user-input");
const checker = document.querySelector(".checker");
// end username declare
//--------------------------------------------
//--------------------------------------------
//start password declare and btn login
const userPassword = document.getElementById("pass");
const checkerPass = document.querySelector(".checker-pass");
const regexPass = /.{8,}/gi;
const loginBtn = document.querySelector("#btn-login");
//end password declare
//--------------------------------------------
//--------------------------------------------
// start random background
let img = ["01.jpg", "02.jpg"];
let randomNum = Math.floor(Math.random() * img.length);
setInterval(function () {
    let randomNum = Math.floor(Math.random() * img.length);
    body.style.backgroundImage = `url(./img/${img[randomNum]})`;
}, 10000);
// end random back ground
//--------------------------------------------
//--------------------------------------------
// start check the email validation
const userRegex = /^\S\w+\d*@\w+\.(com|net|org|it)/gi;
addEventListener("focusout", () => {
    // invalid email
    if (userInput.value.match(userRegex) === null) {
        userPassword.disabled = true; // disabled password
        loginBtn.disabled = true; // disabled login
        checker.innerHTML = "invalid";
        userInput.style.color = "red";
        userInput.style.boxShadow = "#ff0000a1 2px 2px 20px 0px";
        checker.style.color = "red";
    } else {
        // valid email
        checker.innerHTML = "valid";
        userPassword.disabled = false; // able password
        loginBtn.disabled = false; // able login

        userInput.style.color = "green";
        userInput.style.boxShadow = "#00800096 0 0 20px 5px";
        checker.style.color = "#00cd00";
    }
    // EMPTY INPUT
    if (userInput.value === "") {
        checker.innerHTML = "";
        checker.style.color = "white";
        userInput.style.boxShadow = "";
        userInput.style.color = "#000";
    }
    // end check the email validation
});
//--------------------------------------------
//--------------------------------------------
addEventListener("focusout", () => {
    if (userPassword.value.match(regexPass) === null) {
        // invalid password
        checkerPass.innerHTML = " minimum 8 characters";
        checkerPass.style.color = "red";
        userPassword.style.boxShadow = "#ff0000a1 2px 2px 20px 0px";
    } else {
        // valid password
        checkerPass.innerHTML = "valid password click login";
        userPassword.style.boxShadow = "#00800096 0 0 20px 5px";
        checkerPass.style.color = "green";
    }
    // EMPTY INPUT
    if (userPassword.value === "") {
        checkerPass.innerHTML = "";
        checkerPass.style.color = "white";
        userPassword.style.boxShadow = "";
    }
});
