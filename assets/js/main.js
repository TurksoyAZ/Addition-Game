//outputs
let label1 = document.getElementById("label1");
let label2 = document.getElementById("label2");
let ergebnis = document.getElementById("ergebnis");
let body = document.querySelector("body");

//inputs
let inputButton = document.getElementById("inputButton");
let inputNumber = document.getElementById("inputNumber");

//imgs (zusätzlich)
let imgPrima = document.getElementById("imgPrima");
let imgSad = document.getElementById("imgSad");
let imgQuestion = document.getElementById("imgQuestion");

//function x2
document.querySelector("button").addEventListener("click", function () {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  label1.innerHTML = num1;
  label2.innerHTML = num2;
  label1.style.color = "black";
  label2.style.color = "black";
  let finish = num1 + num2;

  if ("button") {
    inputNumber.value = "";
    ergebnis.innerHTML = "";
    ergebnis.style.color = "black";
    imgPrima.style.display = "none";
    imgSad.style.display = "none";
    imgQuestion.style.display = "none";
  }

  inputButton.addEventListener("click", function () {
    if (finish == inputNumber.value) {
      ergebnis.innerHTML = "<q>Das ist Stimmt</q>";
      ergebnis.style.color = "lightgreen";
      ergebnis.style.backgroundColor = "white";
      ergebnis.style.borderRadius = "5px";
      imgPrima.style.display = "block";
      imgSad.style.display = "none";
      imgQuestion.style.display = "none";
    } else if (finish != inputNumber.value) {
      ergebnis.innerHTML = "<q>Das ist leider falsch</q>";
      ergebnis.style.color = "red";
      ergebnis.style.backgroundColor = "white";
      ergebnis.style.borderRadius = "5px";
      imgSad.style.display = "block";
      imgQuestion.style.display = "none";
      imgPrima.style.display = "none";
    }
    if (inputNumber.value == "") {
      ergebnis.innerHTML = "<q>Geben Sie bitte Ihre Antwort ein</q>";
      ergebnis.style.color = "rgb(105, 19, 175)";
      ergebnis.style.backgroundColor = "white";
      ergebnis.style.borderRadius = "5px";
      imgQuestion.style.display = "block";
      imgSad.style.display = "none";
      imgPrima.style.display = "none";
    }
  });
});






// 2 part

//outputs
// let label1 = document.getElementById("label1");
// let label2 = document.getElementById("label2");
// let ergebnis = document.getElementById("ergebnis");

// let inputNumber = document.getElementById("inputNumber");


// Variables
// let matRandom1;
// let matRandom2;
// let antwort;


// function neuesButton(){

//   matRandom1 = Math.floor(Math.random() * 100)
//   matRandom2 = Math.floor(Math.random() * 100)
//   antwort = matRandom1+matRandom2;

//   label1.innerHTML=matRandom1
//   label2.innerHTML=matRandom2
//   inputNumber.value=""
//   ergebnis.innerHTML=""
// }

// function sendInput(){
//   if(antwort == inputNumber.value){
//     ergebnis.innerHTML="Das stimmt"
//   }
//   if(antwort != inputNumber.value){
//     ergebnis.innerHTML= "Das ist leider falsch"
//   }
// }