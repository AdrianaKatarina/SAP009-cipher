const cipher = {
  encode,
  decode
};

export default cipher;

//Função Encriptar
function encode(offset, string) {  
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
  document.getElementById("mensagem").value = senhaString;  
}

//Função Decriptar

function decode(offset, string) {
  const senha = string.toUpperCase();
  const chave = parseInt(offset);
  //console.log(senha);
  //console.log(typeof(chave));  
  
  let senhaString = "";
  for (let i = 0; senha.length > i; i++) {
    //console.log("char", string.charCodeAt(i));
    const tabela = (senha.charCodeAt(i) - 65 + chave) % 26 + 65;
    //console.log("calculo", tabela);
    const letra = String.fromCharCode(tabela);
    //console.log("for", letra)
    senhaString += letra;
  }
  document.getElementById("mensagem").value = senhaString;
}
