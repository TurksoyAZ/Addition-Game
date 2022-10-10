

let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let inputNumber = document.getElementById("inputNumber");
let ergebnis= document.getElementById("ergebnis")


let num1=100
let a =Math.ceil(Math.random() * num1) 
let num2=100
let b = Math.ceil(Math.random() * num2) 
let c = a + b 

function getButton(){
  
  label1.innerHTML=a
  label2.innerHTML=b

}

function getInputButton(){

  if(c == inputNumber.value ) {
    ergebnis.innerHTML = ' <q> Das Stimmt </q>'
    ergebnis.style.color= 'lightgreen'
    label1.innerHTML=""
    label2.innerHTML=""
    inputNumber.value=""
    
  } else if( c != inputNumber.value) {
    ergebnis.innerHTML = '<q> Das ist leider falsch </q>'
    ergebnis.style.color='red'
    label1.innerHTML=""
    label2.innerHTML=""
    inputNumber.value=""
  } 
  

}
