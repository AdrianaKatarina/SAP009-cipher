import cipher from './cipher.js';

//console.log(cipher);

//Botão Encriptar

document.querySelector(".encriptar").addEventListener("click", function () {
  const campo = document.querySelector("#mensagem").value;
  const desloca = document.querySelector("#chave").value;
  const criptada = cipher.encode(desloca, campo);
  const mensagem = document.querySelector("#mensagem");
  mensagem.value = criptada;
  //console.log("mensagem", criptada);
});

//Botão Decriptar

document.querySelector(".decriptar").addEventListener("click", function () {
  const campo = document.querySelector("#mensagem").value;
  const desloca = document.querySelector("#chave").value;
  //console.log("d", typeof (desloca));  
  const criptada = cipher.decode(desloca, campo);
  const mensagem = document.querySelector("#mensagem");
  mensagem.value = criptada;
});

