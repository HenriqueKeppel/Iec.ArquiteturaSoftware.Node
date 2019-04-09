console.log("Start_1")

console.time('tempo');

for (let i = 0; i < 100; i++) {}

console.timeEnd('tempo');

console.log("End_1")

/***************************/
// se o arquivo nao existe, cria-se o arquivo com o conteudo
// se o arquivo já existe
    // manter o conteudo existente
    // adicionar novo conteudo [contact]
console.log("Start_2");

const fs = require('fs');
const file = "arquivo.txt";

fs.appendFileSync(file, '\ndata to append', 'utf8');

console.log("File created/appended!");
console.log("End_1");
/***************************/
console.log("Start_3");

const util = require("./util.js");

const soma = util.add(2, 2);
const sub = util.sub(3, 2);

console.log(`Soma: 2 + 2 = ${soma}, Subtracao: 3 - 2 = ${sub}`);

console.log("End_3");
/***************************/
// Criar uma function separada que cria um log, adicionando conteudo
// caso o arquivo exista e criando e adicionando caso não exista
console.log("Start_4");
const log = require("./log.js");

log.insertLog(`[${new Date()}] - Inicio da execução`);

for(let i = 0; i < 10; i++){
    log.insertLog(`log: ${i}`);
}

log.insertLog(`[${new Date()}] - Fim da execução`);

console.log("End_4");