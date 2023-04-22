const cipher = {
  encode,
  decode
};

export default cipher;

function encode(offset, string) {
  if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
    throw new TypeError(alert("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades"));
  }

  const chave = parseInt(offset);
  if(chave >= 0 && chave < 100) {
    let senhaEncriptada = "";
    const senha = string.toUpperCase();
    const primeiraLetra = "A".charCodeAt(0);
    const tamanhoAlfabeto = 26;
    for (let i = 0; senha.length > i; i++) {
      const tabela = (senha.charCodeAt(i) - primeiraLetra + chave) % tamanhoAlfabeto + primeiraLetra;      
      const letra = String.fromCharCode(tabela);  
      senhaEncriptada += letra;
    }
    return senhaEncriptada;
  } else{
    throw new TypeError(alert("Por favor, escolha deslocamento entre 1 e 99"));
  }  
}

function decode(offset, string) {
  if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
    throw new TypeError(alert("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades"));
  }

  const chave = parseInt(offset);
  if(chave >= 0 && chave < 100) {
    let senhaDecriptada = "";
    const senha = string.toUpperCase();
    const primeiraLetra = "A".charCodeAt(0);
    const tamanhoAlfabeto = 26;
    for (let i = 0; senha.length > i; i++) {
      const tabela = (senha.charCodeAt(i) + primeiraLetra - chave) % tamanhoAlfabeto + primeiraLetra;
      const letra = String.fromCharCode(tabela);
      senhaDecriptada += letra;
    }
    return senhaDecriptada;
  } else{
    throw new TypeError(alert("Por favor, escolha deslocamento entre 1 e 99"));
  }  
}
