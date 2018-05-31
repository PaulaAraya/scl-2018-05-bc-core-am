
//crear funcion con variables window.onload de los botones, numero de desplazamiento y cajas con document.getElementByID
//Dom de los botones
//let boton1 = document.getElementById("boton1")

window.onload = function () {
let numberPosition = document.getElementById("numberPosition")
let descipherBoxSubmit = document.getElementById("descipherBoxSubmit")
let descipherBoxResult = document.getElementById(" descipherBoxResult")
let cipherBoxSubmit = document.getElementById("cipherBoxResult")
let cipherBoxResult = document.getElementById("cipherBoxResult")
let btnDecipher = document.getElementById("btnDecipher")
let btnCipher = document.getElementById("btnCipher")

btnCipher.addEventListener("click", () => {
  let cipherBoxSubmit = document.getElementById("cipherBoxSubmit").value;
  console.log(cipherBoxSubmit);
  descipherBoxResult.innerHtml = cipherBoxSubmit;
}
);

btnDecipher.addEventListener("click", () => {
  let descipherBoxSubmit = document.getElementById("descipherBoxSubmit")
  console.log(descipherBoxSubmit);
  descipherBoxResult.innerHtml = descipherBoxSubmit;
}
);
};

