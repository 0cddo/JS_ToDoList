
/*  @ DOM을 이용한 HTML 요소 객체 만들기

const title = document.getElementById("title");

// console.log(title);
// console.error("shit");

title.innerHTML = "HELLO FROM JS!!";

// console.dir(title);
title.style.color = "red";

document.title = "hello from js"; */


/* @ querySelector 이용하기

const title = document.querySelector("#title");

title.style.color = "blue"; */


const title = document.querySelector("#title");

/* @ resize event

function handleResize(event){
    // console.log('i have been resized');
    console.log(event);
}

window.addEventListener("resize",handleResize);
 */



function handleClick(){
    title.style.color = "blue";
}

 title.addEventListener("click",handleClick); 

 
 