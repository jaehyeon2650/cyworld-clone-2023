const firstselection = document.querySelector(".nav__selection:first-child");
const secondselection = document.querySelector(".nav__selection:nth-child(2)");
const thirdselection = document.querySelector(".nav__selection:last-child");
const iframtag = document.querySelector("#page");
function changepage1(event) {
    iframtag.src = "./home.html";
    firstselection.style = "color:black;background-color:white";
    secondselection.style = "color:white;background-color:#55B2D4";
    thirdselection.style = "color:white;background-color:#55B2D4";
}
function changepage2() {
    iframtag.src = "./jukebox.html";
    firstselection.style = "color:white;background-color:#55B2D4";
    secondselection.style = "color:black;background-color:white";
    thirdselection.style = "color:white;background-color:#55B2D4";
}
function changepage3() {
    iframtag.src = "./game.html";
    firstselection.style = "color:white;background-color:#55B2D4";
    secondselection.style = "color:white;background-color:#55B2D4";
    thirdselection.style = "color:black;background-color:white";
}
console.dir(firstselection);
firstselection.addEventListener("click", changepage1);
secondselection.addEventListener("click", changepage2);
thirdselection.addEventListener("click", changepage3);