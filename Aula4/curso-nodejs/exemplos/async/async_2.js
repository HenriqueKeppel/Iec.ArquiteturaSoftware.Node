const request = require('request')

const url = 'https://www.worldtradingdata.com/api/v1/stock?symbol=PETR4.SA&api_token=UnWKQPMQtxr0pby8OejtkO1B6H90YjVXuvqYK0aPTRaQc3JkLEgcruGDtUDC'

request({url: url, json: true}, (err, response) =>{
    if(err){
        console.error(err)
    }
    const parsedJSON = response.body
    console.log(parsedJSON.data[0].symbol)
    console.log(parsedJSON.data[0].name)
    console.log(parsedJSON.data[0].price)
})