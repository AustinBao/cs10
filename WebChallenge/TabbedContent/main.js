document.getElementById("tabOneButton").addEventListener("click", displaySectionOne);
document.getElementById("tabTwoButton").addEventListener("click", displaySectionTwo);
document.getElementById("tabThreeButton").addEventListener("click", displaySectionThree);


let numberImg = document.getElementById("numberImg");
let section = document.getElementById("section");
let imgNumber = document.getElementById("imgNumber")

function displaySectionOne(){
    numberImg.src = "imgs/1.png"
    section.innerHTML="Section 1"
    imgNumber.innerHTML = "This is image 1"
}
function displaySectionTwo(){
    numberImg.src = "imgs/2.png"
    section.innerHTML="Section 2"
    imgNumber.innerHTML = "This is image 2"
    
}
function displaySectionThree(){
    numberImg.src = "imgs/3.png"
    section.innerHTML="Section 3"
    imgNumber.innerHTML = "This is image 3"
}