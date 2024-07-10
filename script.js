const display = document.querySelector(".display");
const btn1 = document.querySelector("#one");
const btn2 = document.querySelector("#two");
const btn3 = document.querySelector("#three");
const btn4 = document.querySelector("#four");
const btnPlus = document.querySelector("#plus");
const btnSubs = document.querySelector("#subs");
const btnAdd = document.querySelector("#add");
const btn5 = document.querySelector("#five");
const btn6 = document.querySelector("#six");
const btn7 = document.querySelector("#seven");
const btn8 = document.querySelector("#eight");
const btn9 = document.querySelector("#nine");
const btn0 = document.querySelector("#btn0");
const btnDivide = document.querySelector("#divide");
const btnEqual = document.querySelector("#equal");


function add(num1,num2){
    return num1 + num2;
}


btn1.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "1";
    }else{
    display.textContent += "1";
    }
});

btn2.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "2";
    }else{
    display.textContent += "2";
    }
});

btn3.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "3";
    }else{
    display.textContent += "3";
    }
});

btn4.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "4";
    }else{
    display.textContent += "4";
    }
});

btn5.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "5";
    }else{
    display.textContent += "5";
    }
});
btn6.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "6";
    }else{
    display.textContent += "6";
    }
});

btn7.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "7";
    }else{
    display.textContent += "7";
    }
});
btn8.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "8";
    }else{
    display.textContent += "8";
    }
})

btn9.addEventListener('click',() =>{
    if(display.textContent == "0"){
        display.textContent = "9";
    }else{
    display.textContent += "9";
    }
});

btn0.addEventListener('click',() =>{
    if(display.textContent != "0"){
        display.textContent += "0";
    }
});
