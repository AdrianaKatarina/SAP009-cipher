const cipher = {
  encode,
  decode
};

export default cipher;

function encode(offset, string) {
  try {
    if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
      throw new TypeError("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades.");
    }
    const chave = parseInt(offset);
    if(chave < 1 || chave > 99){
      throw new TypeError("Por favor, escolha deslocamento entre 1 e 99.");
    }
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
  }catch (e){
    return e.message;
  }
}

function decode(offset, string) {
  try {
    if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
      throw new TypeError("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades.");
    }
    const chave = parseInt(offset);
    if(chave < 1 || chave > 99){
      throw new TypeError("Por favor, escolha deslocamento entre 1 e 99.");
    }
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
  }catch (e){
    return e.message;
  }
}
