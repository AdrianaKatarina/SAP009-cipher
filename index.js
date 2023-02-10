import cipher from './cipher.js';

//console.log(cipher);

//Botão Encriptar

document.querySelector(".encriptar").addEventListener("click", function () {
  const campoTexto = document.querySelector("#mensagem").value;
  const desloca = document.querySelector("#chave").value;
  const criptada = cipher.encode(desloca, campoTexto);
  const mensagem = document.querySelector("#mensagem");
  mensagem.value = criptada;  
});

//Botão Decriptar

document.querySelector(".decriptar").addEventListener("click", function () {
  const campoTexto = document.querySelector("#mensagem").value;
  const desloca = document.querySelector("#chave").value;
  const decriptada = cipher.decode(desloca, campoTexto);
  const mensagem = document.querySelector("#mensagem");
  mensagem.value = decriptada;
});

