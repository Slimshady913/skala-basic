import { isEmpty, formatDate } from "./common.js";

const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password");
const date = document.getElementById("date");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(email.value);
    if (isEmpty(email.value) || isEmpty(password.value)) {
        alert("이메일과 비밀번호를 모두 입력해주세요.");
        return;
    }
    console.log("로그인 성공");
});

date.addEventListener("change", (e) => {
    const selectedDate = new Date(e.target.value);
    email.value = formatDate(selectedDate);
    console.log("선택된 날짜:",selectedDate, e.target.value, typeof e.target.value);
});