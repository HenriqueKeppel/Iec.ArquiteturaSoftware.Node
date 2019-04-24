const yargs = require("yargs");
const request = require("request");
yargs.version('1.2.7');

yargs.command({
    command: 'cotacao',
    describe: 'Verifica cotacao',
    builder: {
        ativo: {
            describe: 'Ativo a ser consultado',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (yargs){        
        console.log(yargs.ativo);

        var apiUrl = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+yargs.ativo+'&api_token=gghLOlguKF7SnH5DPjpdEnQwjN8sAY7WVW5gKpsIpuhzinlG7CHRPY2fEvjw';

        //console.log(apiUrl);

        const options = {
            url: apiUrl,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client'
            }
        };

        request(options, function(err, res, body) {  
            let json = JSON.parse(body);
            console.log(json);
        });
    }
})

yargs.parse();