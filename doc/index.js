
//crear funcion con variables window.onload de los botones, numero de desplazamiento y cajas con document.getElementByID

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
  let descipherResult = window.cipher.encode(descipherBoxSubmit, npd);
  descipherBoxResult.innerHTML = descipherResult;
});

btnCipher.addEventListener("click", () => {
  let cipherBoxSubmit = document.getElementById("cipherBoxSubmit").value.toUpperCase();
  let npc = parseInt(numberPositionCipher.value);
  console.log(cipherBoxSubmit);
  let cipherResult = window.cipher.decode(cipherBoxSubmit, npc);
  cipherBoxResult.innerHTML = cipherResult;
});

};  


