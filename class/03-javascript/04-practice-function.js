const button = document.querySelector(".number-button");
const number = document.querySelector(".numbers");
const time = document.querySelector(".time");
const userbutton = document.querySelector(".user-button");
let starttime = false;
const timeshow = () => {
    if (times >= 0) {
        let hour = Math.floor(times / 60);
        let minute = String(times % 60).padStart(2, "0");
        time.innerText = `${hour} : ${minute}`;
        times = times - 1;
    }
    if (times < 0) {
        userbutton.disabled = true;
        times = 5;
        starttime = false;
        clearInterval(timer);
    }
}
let times = 5;
let timer;
const rannumber = (event) => {

    event.preventDefault();
    if (starttime === false) {
        starttime = true;
        userbutton.disabled = false;
        const num = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        number.innerText = num;
        timer = setInterval(timeshow, 1000);
    }
    else {
    }
}
console.dir(userbutton);
button.addEventListener("click", rannumber);