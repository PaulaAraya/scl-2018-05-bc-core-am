
//crear funcion con variables window.onload de los botones, numero de desplazamiento y cajas con document.getElementByID
//Dom de los botones
//let boton1 = document.getElementById("boton1")

window.onload = function () {
let numberPosition = document.getElementById("numberPosition")
let descipherBoxResult = document.getElementById("descipherBoxResult")
let cipherBoxResult = document.getElementById("cipherBoxResult")
let btnDecipher = document.getElementById("btnDecipher")
let btnCipher = document.getElementById("btnCipher")

btnDecipher.addEventListener("click", () => {
  let descipherBoxSubmit = document.getElementById("descipherBoxSubmit").value;
  console.log(descipherBoxSubmit);
  descipherBoxResult.innerHtml = descipherBoxSubmit;
  //descipherBoxSubmit.innerHtml = descipherBoxResult;
}
);

btnCipher.addEventListener("click", () => {
  let cipherBoxSubmit = document.getElementById("cipherBoxSubmit").value.toUpperCase();
  console.log(cipherBoxSubmit);
  cipherBoxResult.innerHtml = cipherBoxSubmit;
}
);
};

