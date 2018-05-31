
//crear funcion con variables window.onload de los botones, numero de desplazamiento y cajas con document.getElementByID
//Dom de los botones
window.onload = function () {
let numberPositionDescipher = document.getElementById("numberPositionDescipher")
let numberPositionCipher = document.getElementById("numberPositionCipher")
let descipherBoxResult = document.getElementById("descipherBoxResult")
let cipherBoxResult = document.getElementById("cipherBoxResult")
const btnDecipher = document.getElementById("btnDecipher")
const btnCipher = document.getElementById("btnCipher")


btnDecipher.addEventListener("click", () => {
  let descipherBoxSubmit = document.getElementById("descipherBoxSubmit").value.toUpperCase();
  let npd = parseInt(numberPositionDescipher.value);
  console.log(descipherBoxSubmit);
  descipherBoxResult.innerHTML = descipherBoxSubmit;
});

btnCipher.addEventListener("click", () => {
  let cipherBoxSubmit = document.getElementById("cipherBoxSubmit").value.toUpperCase();
  console.log(cipherBoxSubmit);
  cipherBoxResult.innerHTML = cipherBoxSubmit;
});



};  


