const gameword = document.querySelector(".game-word");
const gamebutton = document.querySelector(".game__input button");
const userword = document.querySelector(".game__input input");
const result = document.querySelector(".game__result");
const gamestart = (event) => {
    event.preventDefault();
    const userfirstword = userword.value[0];
    const gamelastword = gameword.innerText[gameword.innerText.length - 1];
    if (userfirstword === gamelastword) {
        result.innerText = "정답입니다."
        gameword.innerText = userword.value;
        userword.value = "";
    }
    else {
        result.innerText = "땡!";
    }
}
gamebutton.addEventListener("click", gamestart);