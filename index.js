let calcularEL = document.querySelector("#calcular");
let resultadoEl = document.querySelector("#resultado");
let bodyEl = document.querySelector("body");
let labelEL = document.querySelectorAll(".label");
let h1El = document.querySelector("h1");
console.log(bodyEl);
let resultado = 0;

// Evento de click no botão
calcularEL.addEventListener("click", () => {
  let pesoEl = document.querySelector("#peso");
  let alturaEl = document.querySelector("#altura");
  if (pesoEl.value == "" || alturaEl.value == "") {
    alert("Preencha todos os campos!");
    return;
  } else {
    pesoEl = parseInt(pesoEl.value);
    alturaEl = parseFloat(alturaEl.value);
  }
  calcularIMC(pesoEl, alturaEl);
  checkPeso(resultado);
});

function calcularIMC(a, b) {
  resultado = a / b ** 2;
}

// Verifica o peso para mensagem e troca de cor do body
function checkPeso(pesoIdeal) {
  pesoIdeal.toFixed(2);
  if (pesoIdeal < 18.5) {
    resultadoEl.innerHTML = "abaixo do peso";
    bodyEl.style.backgroundColor = "lightyellow";
  } else if (pesoIdeal >= 18.5 && pesoIdeal < 24.9) {
    resultadoEl.innerHTML = "peso normal";
    bodyEl.style.backgroundColor = "yellow";
  } else if (pesoIdeal >= 24.9 && pesoIdeal < 29.9) {
    resultadoEl.innerHTML = "Sobrepeso";
    bodyEl.style.backgroundColor = "green";
  } else if (pesoIdeal >= 30 && pesoIdeal < 34.9) {
    resultadoEl.innerHTML = "Obesidade grau I";
    bodyEl.style.backgroundColor = "darkgreen";
  } else if (pesoIdeal >= 35 && pesoIdeal < 39.9) {
    resultadoEl.innerHTML = "Obesidade grau II";
    bodyEl.style.backgroundColor = "red";
  } else if (pesoIdeal == 40) {
    resultadoEl.innerHTML = "Obesidade grau III";
    bodyEl.style.backgroundColor = "darkred";
  } else {
    resultadoEl.innerHTML = "Obesidade Mórbida";
    bodyEl.style.backgroundColor = "black";
    labelEL[0].style.color = "white";
    labelEL[1].style.color = "white";
    h1El.style.color = "white";
    resultadoEl.style.color = "white";
  }
}
