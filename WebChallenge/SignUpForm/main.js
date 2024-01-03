
document.getElementById("submitbtn").addEventListener("click", SignUp)

let usernameRes = document.getElementById("usernameRes");
let passwordRes = document.getElementById("passwordRes");
let confirmPassworRes = document.getElementById("confirmPasswordRes");

function SignUp(){
    let name = document.getElementById("username");
    let password = document.getElementById("password")
    let confirmPassword = document.getElementById("confirmPassword")

    if (name.value.length === 0){
        name.style.outline = "2px solid red"
        usernameRes.innerHTML = "Required Field"
        usernameRes.style.color = "red"
        return
    } else if (name.value.length < 4 || name.value.length > 8){
        name.style.outline = "2px solid red"
        usernameRes.innerHTML = "Username must be 4-8 characters"
        usernameRes.style.color = "red"
        return
    } else {
        name.style.outline = "2px solid green"
        usernameRes.innerHTML = ""
    }

    if (password.value.length === 0){
        password.style.outline = "2px solid red"
        passwordRes.innerHTML = "Required Field"
        passwordRes.style.color = "red"
        return
    } else {
        password.style.outline = "2px solid green"
        passwordRes.innerHTML = ""
    }

    if (confirmPassword.value.length === 0){
        confirmPassword.style.outline = "2px solid red"
        confirmPasswordRes.innerHTML = "Required Field"
        confirmPasswordRes.style.color = "red"
        return
    } else if (password.value !== confirmPassword.value){
        confirmPassword.style.outline = "2px solid red"
        confirmPasswordRes.innerHTML = "Password doesn’t match"
        confirmPasswordRes.style.color = "red"
        return
    } else {
        confirmPassword.style.outline = "2px solid green"
        confirmPasswordRes.innerHTML = ""
    }

    document.getElementById("finalResult").innerHTML = "SIGN UP SUCCESSFUL"
    document.getElementById("finalResult").style.color = "green"
}




// ***********     NOT MY CODE FROM HERE ON        ***********    
// SOLUTION PROVIDED BY CHATGPT (A lot cleaner and intuitive. I'de like to keep to use for future inspirations) 
// Uses an object that holds all info from sign up page. Runs forloops to check if each if statements passes for each input. 


// document.getElementById("submitbtn").addEventListener("click", SignUp);

// const validationRules = {
//     username: {
//         element: document.getElementById("username"),
//         messageElement: document.getElementById("usernameRes"),
//         requiredMessage: "Required Field",
//         lengthMessage: "Username must be 4-8 characters"
//     },
//     password: {
//         element: document.getElementById("password"),
//         messageElement: document.getElementById("passwordRes"),
//         requiredMessage: "Required Field"
//     },
//     confirmPassword: {
//         element: document.getElementById("confirmPassword"),
//         messageElement: document.getElementById("confirmPasswordRes"),
//         requiredMessage: "Required Field",
//         mismatchMessage: "Password doesn’t match"
//     }
// };

// function SignUp() {
//     for (const field in validationRules) {
//         const { element, messageElement, requiredMessage, lengthMessage, mismatchMessage } = validationRules[field];

//         if (element.value.length === 0) {
//             element.style.outline = "2px solid red";
//             messageElement.innerHTML = requiredMessage;
//             messageElement.style.color = "red";
//         } else if (field === 'username' && (element.value.length < 4 || element.value.length > 8)) {
//             element.style.outline = "2px solid red";
//             messageElement.innerHTML = lengthMessage;
//             messageElement.style.color = "red";
//         } else {
//             element.style.outline = "2px solid green";
//             messageElement.innerHTML = "";
//         }

//         if (field === 'confirmPassword' && element.value !== validationRules.password.element.value) {
//             element.style.outline = "2px solid red";
//             messageElement.innerHTML = mismatchMessage;
//             messageElement.style.color = "red";
//         }
//     }
// }
