// click 이벤트로 색깔 변경하기 

/* const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#fd79a8";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR
    title.addEventListener("mouseenter",handleClick);
}

init();      */


// DOM - If else - Function practice2

const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    // const currentClass = title.className;
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if(!hasClass /* currentClass !== CLICKED_CLASS */){
        // title.className = CLICKED_CLASS;
        title.classList.add(CLICKED_CLASS);
    } else {
        // title.className = "";
        title.classList.remove(CLICKED_CLASS);
    }
    
}

// toggle 함수 이용하여 위의 코드 간략하게 만들기
/* function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
} */

function init(){
    title.addEventListener("click",handleClick);
}

init();



