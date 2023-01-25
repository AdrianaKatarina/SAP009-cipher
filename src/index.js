import cipher from './cipher.js';

//console.log(cipher);

//Botão Encriptar

document.querySelector(".encriptar").addEventListener("click", function () {
  const campo = document.querySelector("#mensagem").value;
  const desloca = document.querySelector("#chave").value;
  //console.log("d", typeof (desloca))    
  cipher.encode(desloca,campo);  
  //console.log("resultado", cipher.encode(chave, senha));
});

//Botão Decriptar

document.querySelector(".decriptar").addEventListener("click", function () {
  const campo = document.querySelector("#mensagem").value;
  const desloca = document.querySelector("#chave").value;
  //console.log("d", typeof (desloca));  
  cipher.decode(desloca,campo);  
  //console.log("resultado", cipher.decode(chave, senha));
});

