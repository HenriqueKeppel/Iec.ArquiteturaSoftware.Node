const fs = require('fs');
const file = "pessoa.json";

const pessoa = {
    name: 'keppel',
    age: 33
}

console.log(pessoa);
const pessoaJson = JSON.stringify(pessoa);

console.log(pessoaJson);
fs.appendFileSync(file, `${pessoaJson}\n`, 'utf8');

const buffer = fs.readFileSync(file);
const pessoaParseBuffer = JSON.parse(buffer.toString());
console.log(pessoaParseBuffer);

