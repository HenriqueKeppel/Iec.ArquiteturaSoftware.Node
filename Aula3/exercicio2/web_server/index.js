const express = require('express');
const hbs = require('hbs');
const path = require('path');
const request = require('request');

// configurações
const publicAssets = path.join(__dirname, '/public');
const viewsPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

const app = express();
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicAssets));

// app.get('', (req, res)=>{
//     res.send('retorno');
// });

app.get('', (req, res) => {
    //res.render('index');
    res.render('index', {
        title: 'Home',
        author: 'keppel'
    });
});

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        author: 'keppel'
    });
});

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help',
        author: 'keppel'
    });
});

app.get('/cotacoes/:ativo', (req, res)=>{
    
    // TODO: separar o modulo de request em outro arquivo chamado cotacoes.js
    if(req.params.ativo == '')    
    {
        res.status(404).end();
    }
    else
    {
        var apiUrl = 'https://www.worldtradingdata.com/api/v1/stock?symbol='+req.params.ativo+'&api_token=gghLOlguKF7SnH5DPjpdEnQwjN8sAY7WVW5gKpsIpuhzinlG7CHRPY2fEvjw';

        const options = {
            url: apiUrl,
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client'
            }
        };

        request(options, (err, response, body) => {  
            let jsonResponse = JSON.parse(body);
            res.status(200).json(jsonResponse);
        });
    }
});

/*******************************************
app.get('/test', (req, res)=>{
    data = {
        nome: 'keppel',
        idade: '33'
    };
    //res.json(data)
    res.status(200).json(data);
});

app.get('/people/:id', (req, res)=>{

    if (req.params.id == 1)
    {
        data = {
            nome: 'franzoni',
            idade: '55'
        };
        //res.json(data)
        res.status(200).json(data);
    }
    else
    {
        res.status(404).end();
    }
});
**************************************************/
const port = 3000;

app.listen(port, () => {
    console.log('Servidor no ar na porta: ' + port);
});

