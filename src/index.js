
//crear funcion con variables window.onload de los botones, numero de desplazamiento y cajas con document.getElementByID
//Dom de los botones
//let boton1 = document.getElementById("boton1")

window.onload = function () {
let numberPositionDescipher = document.getElementById("numberPositionDescipher")
let numberPositionCipher = document.getElementById("numberPositionCipher")

let descipherBoxResult = document.getElementById("descipherBoxResult")
let cipherBoxResult = document.getElementById("cipherBoxResult")
const btnDecipher = document.getElementById("btnDecipher")
const btnCipher = document.getElementById("btnCipher")


btnDecipher.addEventListener("click", () => {
  let descipherBoxSubmit = document.getElementById("descipherBoxSubmit").value.toUpperCase();
  console.log(descipherBoxSubmit);
  descipherBoxResult.innerHtml = "tu resultasdo es : " + descipherBoxSubmit;
  //descipherBoxSubmit.innerHtml = descipherBoxResult;
});

btnCipher.addEventListener("click", () => {
  let cipherBoxSubmit = document.getElementById("cipherBoxSubmit").value.toUpperCase();
  console.log(cipherBoxSubmit);
  cipherBoxResult.innerHtml = cipherBoxSubmit;
});};


