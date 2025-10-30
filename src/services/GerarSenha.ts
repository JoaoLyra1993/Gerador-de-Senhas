const Senha = (
  longa: boolean,
  maiusculas: boolean,
  numeros: boolean,
  simbolos: boolean
) => {
  //Inicia a variável de caracterese e avalia quais caracteres devem ser usados
  let characters =
    maiusculas === true
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      : "abcdefghijklmnopqrstuvwxyz";

  characters = numeros === true ? characters + "0123456789" : characters;
  characters =
    simbolos === true
      ? characters + "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~ \\"
      : characters;

  //Configuração das outras variáveis necessárias
  const minLonga = 12;
  const maxLonga = 20;
  const minCurta = 6;
  const maxCurta = 11;
  let password = "";

  //Gera uma quantidade aleatória de tamanho da senha
  let passwordLenght = longa
    ? Math.floor(Math.random() * (maxLonga - minLonga + 1)) + minLonga
    : Math.floor(Math.random() * (maxCurta - minCurta + 1)) + minCurta;

  // Garante que a senha tenha um tamanho par
  passwordLenght =
    passwordLenght % 2 == 0 ? passwordLenght : passwordLenght + 1;

  for (let i = 0; i < passwordLenght; i++) {
    const indice = Math.floor(Math.random() * characters.length);
    password += characters[indice];
  }
  return password;
};

export default Senha;
