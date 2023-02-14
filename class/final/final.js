const firstnumber = document.querySelector("#first");
const secondnumber = document.querySelector("#second");
const thirdnumber = document.querySelector("#third");
const numberbutton = document.querySelector(".number-make button");
const number = document.querySelector(".number-make span");
const time = document.querySelector(".number-ok span");
const checkbutton = document.querySelector(".number-ok button");
const email = document.querySelector(".email");
const name = document.querySelector(".name");
const password = document.querySelector(".password");
const passwordcheck = document.querySelector(".passwordcheck");
const userlocation = document.querySelector(".location");
const joinbutton = document.querySelector(".join-button");
let alarmtime = 180;
let check = false;
let clicked = false;
let interval;

function nextnumber1() {
    const first = firstnumber.value;
    const second = secondnumber.value;
    const third = thirdnumber.value;
    if (first.length === 3) {
        secondnumber.focus();
        if (second.length === 4 && third.length === 4) {
            numberbutton.disabled = false;
            numberbutton.style = "background-color: white; border: 1px solid rgba(0, 0, 0, 0.5); color: #0068FF;"
        }
        else {
            numberbutton.disabled = true;
        }
    }
}
function nextnumber2() {
    const first = firstnumber.value;
    const second = secondnumber.value;
    const third = thirdnumber.value;
    if (second.length === 4) {
        thirdnumber.focus();
        if (first.length === 3 && third.length === 4) {
            numberbutton.disabled = false;
            numberbutton.style = "background-color: white; border: 1px solid rgba(0, 0, 0, 0.5); color: #0068FF;"
        } else {
            numberbutton.disabled = true;
        }
    }
}
function nextnumber3() {
    const first = firstnumber.value;
    const second = secondnumber.value;
    const third = thirdnumber.value;
    if (third.length === 4) {
        numberbutton.focus();
        if (first.length === 3 && second.length === 4) {
            numberbutton.disabled = false;
            numberbutton.style = "background-color: white; border: 1px solid rgba(0, 0, 0, 0.5); color: #0068FF;"
        } else {
            numberbutton.disabled = true;
        }
    }
}
function alarm() {
    if (check) {
        checkbutton.disabled = true;
        clicked = false;
        clearInterval(interval);
    }
    else {
        if (alarmtime >= 0) {
            const minutes = Math.floor(alarmtime / 60);
            const seconds = String(alarmtime % 60).padStart(2, "0");
            time.innerText = `${minutes} : ${seconds}`;
            alarmtime = alarmtime - 1
        }
        else {
            alarmtime = 180;
            checkbutton.disabled = true;
            clearInterval(interval);
            clicked = false;
        }
    }
}
function makerannum() {
    if (!clicked) {
        clicked = true;
        const rannumber = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        number.innerText = rannumber;
        checkbutton.disabled = false;
        checkbutton.style = "color: white;background-color: #0068FF;border: none;"
        interval = setInterval(alarm, 1000);
    }
}
function checkok() {
    time.innerText = "3:00";
    check = true;
    joinbutton.disabled = false;
    joinbutton.style = "background-color: white;border: 1px solid #0068FF;color: #0068FF;";
}
function checktime() {
    let mailbool = false;
    let namebool = false;
    let passwordbool = false;
    let passwordcheckbool = false;
    let locatebool = false;
    let genderbool = false;
    const usermail = email.value;
    const username = name.value;
    const userpassword = password.value;
    const userpasswordcheck = passwordcheck.value;
    const userlocate = userlocation.value;
    const girl = document.querySelector(".gender-box input:first-child").checked;
    const boy = document.querySelector(".gender-box input:nth-child(3)").checked;
    if (usermail === "" || !(usermail.includes("@"))) {
        document.querySelector(".email-span").innerText = "이메일을 옳바르게 입력하세요!";
    } else {
        document.querySelector(".email-span").innerText = "";
        mailbool = true;
    }
    if (username === "") {
        document.querySelector(".name-span").innerText = "이름을 옳바르게 입력하세요!";
    } else {
        document.querySelector(".name-span").innerText = "";
        namebool = true;
    }
    if (userpassword === "") {
        document.querySelector(".password-span").innerText = "비밀번호를 입력하세요!";
    } else {
        document.querySelector(".password-span").innerText = "";
        passwordbool = true;
    }
    if (userpassword !== userpasswordcheck) {
        document.querySelector(".passwordcheck-span").innerText = "같은 비밀번호를 입력하세요!";
    } else {
        document.querySelector(".passwordcheck-span").innerText = "";
        passwordcheckbool = true;
    }
    if (userlocate === "지역을 선택하세요.") {
        document.querySelector(".location-span").innerText = "지역을 선택하세요!";
    } else {
        document.querySelector(".location-span").innerText = "";
        locatebool = true;
    }
    if (!girl && !boy) {
        document.querySelector(".gender-span").innerText = "성별을 선택하세요!";
    } else {
        document.querySelector(".gender-span").innerText = "";
        genderbool = true;
    }
    if (mailbool && namebool && passwordbool && passwordcheck && locatebool && genderbool) {
        alert("가입을 축하드립니다!");
    }
}
firstnumber.addEventListener("input", nextnumber1);
secondnumber.addEventListener("input", nextnumber2);
thirdnumber.addEventListener("input", nextnumber3);
numberbutton.addEventListener("click", makerannum);
checkbutton.addEventListener("click", checkok);
joinbutton.addEventListener("click", checktime);

