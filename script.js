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
const btnAc = document.querySelector("#ac");
const btnDot = document.querySelector("#dot");
const btnDe = document.querySelector("#de");
const btnPL = document.querySelector("#plusless");


num1 = "";
num2 = "";
element = "";
result = ""

btnAdd.addEventListener('click',() =>{
    num1 = display.textContent;
    num1 = parseFloat(num1);
    display.textContent = "";
    element = "+";
})

btnSubs.addEventListener('click',() =>{
    num1 = display.textContent;
    num1 = parseFloat(num1);
    display.textContent = "";
    element = "-";
})

btnPlus.addEventListener('click',() =>{
    num1 = display.textContent;
    num1 = parseFloat(num1);
    display.textContent = "";
    element = "*";
})
btnDivide.addEventListener('click',() =>{

    num1 = display.textContent;
    num1 = parseFloat(num1);
    display.textContent = "";
    element = "÷";
})

btnAc.addEventListener('click',()=>{
    display.textContent = "0";
    num1 = "";
    num2 = "";
    element = "";
    digit = "";

})

btnDot.addEventListener('click',()=>{
    if(display.textContent == "0"){
        display.textContent = ".";
    }else if(display.textContent.includes(("."))){
        display.textContent += '';
    }else{
    display.textContent += ".";
    }
})

btnPL.addEventListener('click',()=>{
    if(display.textContent == "0"){
            display.textContent = "-";
            
    }else if(display.textContent == "-" + digit){
        display.textContent = digit;
    }else{
        display.textContent = "-" + digit;
    }
})



btnEqual.addEventListener('click',()=>{
    num2 = display.textContent;
    num2 = parseFloat(num2);

    switch (element) {
        case '+':
            result = num1 + num2;
            display.textContent = result;
            break;
        case '-':
            result = num1 - num2;
            display.textContent = result;
            break;
        case '*':
            result = num1 * num2;
            display.textContent = result;
            break;

        case '÷':
            if(num2 == 0){
                alert("Cannot divide by zero dude")
            }else{
            result = num1 / num2;
            display.textContent = result.toFixed(3);
            
            }
            break;
    
        default:
            break;
    }
})

const OPERATORS = ['+','-','*','÷'];

btn1.addEventListener('click',() =>{
    if(display.textContent == "0"){
     digit = display.textContent = "1";
    }else{
     digit = display.textContent += "1";
    }
});

btn2.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "2";
    }else{
    digit = display.textContent += "2";
    }
});

btn3.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "3";
    }else{
        digit = display.textContent += "3";
    }
});

btn4.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "4";
    }else{
        digit = display.textContent += "4";
    }
});

btn5.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "5";
    }else{
        digit = display.textContent += "5";
    }
});
btn6.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "6";
    }else{
        digit = display.textContent += "6";
    }
});

btn7.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "7";
    }else{
        digit = display.textContent += "7";
    }
});
btn8.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "8";
    }else{
        digit = display.textContent += "8";
    }
})

btn9.addEventListener('click',() =>{
    if(display.textContent == "0"){
        digit = display.textContent = "9";
    }else{
        digit = display.textContent += "9";
    }
});

btn0.addEventListener('click',() =>{
    if(display.textContent != "0"){
        display.textContent += "0";
    }
});

