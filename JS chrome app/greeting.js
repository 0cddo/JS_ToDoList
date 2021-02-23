const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

// loadName() --> else일 때 실행 함수 (텍스트를 칠하려면 폼을 숨겨라)
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        // user가 존재하지 않을 때
        
    } else {
        // user가 존재할 때 (이름에 색칠하기)
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}
init();