const cipher = {
  encode,
  decode
};

export default cipher;

//Função Encriptar

function encode(offset, string) {
  if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
    throw new TypeError("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades");
  }

  let senhaEncriptada = "";
  const senha = string.toUpperCase();
  const chave = parseInt(offset);
  const primeiraLetra = "A".charCodeAt(0);
  const tamanhoAlfabeto = 26;
  for (let i = 0; senha.length > i; i++) {
    const tabela = (senha.charCodeAt(i) - primeiraLetra + chave) % tamanhoAlfabeto + primeiraLetra;      
    const letra = String.fromCharCode(tabela);  
    senhaEncriptada += letra;
  }
  return senhaEncriptada;
}

//Função Decriptar

function decode(offset, string) {
  if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
    throw new TypeError("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades");
  }

  let senhaDecriptada = "";
  const senha = string.toUpperCase();
  const chave = parseInt(offset);
  const primeiraLetra = "A".charCodeAt(0);
  const tamanhoAlfabeto = 26;
  for (let i = 0; senha.length > i; i++) {
    const tabela = (senha.charCodeAt(i) + primeiraLetra - chave) % tamanhoAlfabeto + primeiraLetra;
    const letra = String.fromCharCode(tabela);
    senhaDecriptada += letra;
  }
  return senhaDecriptada;
}
