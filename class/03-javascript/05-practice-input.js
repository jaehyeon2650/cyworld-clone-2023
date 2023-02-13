const text1 = document.querySelector("#text1");
const text2 = document.querySelector("#text2");
const text3 = document.querySelector("#text3");
const button = document.querySelector("#button");
function buttonactive() {
    if (text1.value.length === 3) {
        text2.focus();
    }
    if (text2.value.length === 4) {
        text3.focus();
    }
    if (text3.value.length === 4) {
        button.focus();
    }
    const first = text1.value;
    const second = text2.value;
    const third = text3.value;
    if (first !== "" && second !== "" && third !== "") {
        button.disabled = false;
    }
    else {
        button.disabled = true;
    }
}
text1.addEventListener("input", buttonactive);
text2.addEventListener("input", buttonactive);
text3.addEventListener("input", buttonactive);