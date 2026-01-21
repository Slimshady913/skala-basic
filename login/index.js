import { isEmpty } from "./common.js";

const loginButton = document.getElementById("loginButton");
const email = document.getElementById("email");
const password = document.getElementById("password");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(email.value);
    if (isEmpty(email.value) || isEmpty(password.value)) {
        alert("이메일과 비밀번호를 모두 입력해주세요.");
        return;
    }
    console.log("로그인 성공");
});
