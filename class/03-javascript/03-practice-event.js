const numberbutton = document.querySelector(".number-button");
const numbers = document.querySelector(".numbers");
const randomnumber = (event) => {
    event.preventDefault();
    const rn = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    numbers.innerText = rn;
    numbers.style.color = "#" + rn;

}
numberbutton.addEventListener("click", randomnumber);