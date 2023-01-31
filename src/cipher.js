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

  let senhaString = "";
  const senha = string.toUpperCase();
  const chave = parseInt(offset);
  //console.log(senha);
  //console.log(typeof(chave));  
  for (let i = 0; senha.length > i; i++) {
    //console.log("char", string.charCodeAt(i));
    const tabela = (senha.charCodeAt(i) - 65 + chave) % 26 + 65;
    //console.log("calculo", tabela);       
    const letra = String.fromCharCode(tabela);
    //console.log("for", letra)    
    senhaString += letra;
  }
  return senhaString;
}

//Função Decriptar

function decode(offset, string) {
  if (offset === "" || string === "" || typeof string !== "string" || string === [] || offset === null || offset === "0") {
    throw new TypeError("Por favor, preencha todos os campos obrigatórios de acordo com as regras de funcionalidades");
  }
  const senha = string.toUpperCase();
  const chave = parseInt(offset);
  //console.log(senha);
  //console.log(typeof(chave)); 
  let senhaString = "";
  for (let i = 0; senha.length > i; i++) {
    //console.log("char", string.charCodeAt(i));
    const tabela = (senha.charCodeAt(i) + 65 - chave) % 26 + 65;
    //console.log("calculo", tabela);
    const letra = String.fromCharCode(tabela);
    //console.log("for", letra)
    senhaString += letra;
  }
  return senhaString;
}
