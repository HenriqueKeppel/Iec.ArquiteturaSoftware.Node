
// criar uma função async de soma dois parâmetros
// usar o setTimeout dentro da função soma
// depois de 3 segundos dentro do métido de soma, retorar o resultado da soma.


const getPrice = (symbol, callback) => {
    setTimeout(() => {
        const data = {
            symbol: 'PETR4.SA',
            price: 38
        }

        callback(data)
    }, 2000)   
    
}

const add = (a, b, callback) => {
    setTimeout(() => {
        const total = a + b
        callback(total)
    },3000)
}

// const price = getPrice('PETR4.SA')
// console.log(price)

// getPrice('PETR4.SA', (data) => {
//     console.log(data)
// })

add(2, 6, (data) => {
    console.log(data)
})