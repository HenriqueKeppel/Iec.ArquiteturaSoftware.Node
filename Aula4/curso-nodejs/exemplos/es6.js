const name = 'Biharck'
const age = 32
const country = 'Brasil'

const pessoa = {
    name,
    idade: age,
    pais : country
}

// console.log(pessoa)

// const idade = pessoa.idade
// const pais = pessoa.pais

const {idade, pais, cidade = 'BElO HORIZONTE'} = pessoa

// console.log(idade)
// console.log(pais)
// console.log(cidade)

const save = ({name, idade}) => {

    console.log(name)
    console.log(idade)
    //realizar save
}

save(pessoa)


// Criar um CLI usando Yargs OK
// vai receber um parâmetro de entrada que vai ser o código do ativo na bolsa de valores  OK
// se não receber o ativo, retornar um erro  OK
// se receber, deve consultar o ativo usando o request OK
// devolver o valor de abertura, valor de fechamento, maior alta do dia, menor baixa do dia OK
// mostrar o valores de baixa em vermelho com chalk
// mostrar valores de alta de azul
// utilizar arrow function OK
// utilizar es6 OK
// utilizar destruct OK

