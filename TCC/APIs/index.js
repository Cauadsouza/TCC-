const express = require('express');
const server = express ();
const Bebidas = require('./src/data/Bebidas.json')
const Carnes = require('./src/data/Carnes.json')
const Variados = require('./src/data/Variados.json')
const Frutas = require('./src/data/Frutas.json')
const Vegetais = require('./src/data/Vegetais.json')
const AlimentosIF = require('./src/data/AlimentosIF.json')

server.listen(300, () => {
    console.log("Funcionando...")
});

/*API Bebidas*/

server.get('/bebidas', (req,res) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.json(Bebidas)
});

server.get('/bebidas/:id', (req, res) => {
    let id = req.params.id;
    let prod = Bebidas.filter(p => p.id == id)[0];
    res.header('Access-Control-Allow-Origin','*');
    res.json(prod);    
})

server.get('/bebidas/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = Bebidas.filter(n => n.Nome == nome);
    res.header('Access-Control-Allow-Origin','*');
    res.json(nm);    
})

/*API Carnes*/

server.get('/carnes', (req,res) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.json(Carnes)
});

server.get('/carnes/:id', (req, res) => {
    let id = req.params.id;
    let prod = Carnes.filter(p => p.id == id)[0];
    res.header('Access-Control-Allow-Origin','*');
    res.json(prod);    
})

server.get('/carnes/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = Carnes.filter(n => n.Nome == nome);
    res.header('Access-Control-Allow-Origin','*');
    res.json(nm);    
})

/*API Variados*/

server.get('/variados', (req,res) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.json(Variados)
});

server.get('/variados/:id', (req, res) => {
    let id = req.params.id;
    let prod = Variados.filter(p => p.id == id)[0];
    res.header('Access-Control-Allow-Origin','*');
    res.json(prod);    
})

server.get('/variados/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = Variados.filter(n => n.Nome == nome);
    res.header('Access-Control-Allow-Origin','*');
    res.json(nm);    
})

/*API Frutas*/

server.get('/frutas', (req,res) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.json(Frutas)
});

server.get('/frutas/:id', (req, res) => {
    let id = req.params.id;
    let prod = Frutas.filter(p => p.id == id)[0];
    res.header('Access-Control-Allow-Origin','*');
    res.json(prod);    
})

server.get('/frutas/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = Frutas.filter(n => n.Nome == nome);
    res.header('Access-Control-Allow-Origin','*');
    res.json(nm);    
})

/*API Vegetais*/

server.get('/vegetais', (req,res) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.json(Vegetais)
});

server.get('/vegetais/:id', (req, res) => {
    let id = req.params.id;
    let prod = Vegetais.filter(p => p.id == id)[0];
    res.header('Access-Control-Allow-Origin','*');
    res.json(prod);    
})

server.get('/vegetais/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = Vegetais.filter(n => n.Nome == nome);
    res.header('Access-Control-Allow-Origin','*');
    res.json(nm);    
})


/*API AlimentosIF*/

server.get('/alimentosIF', (req,res) =>{
    res.header('Access-Control-Allow-Origin','*');
    res.json(AlimentosIF)
});

server.get('/alimentosIF/:id', (req, res) => {
    let id = req.params.id;
    let prod = AlimentosIF.filter(p => p.id == id)[0];
    res.header('Access-Control-Allow-Origin','*');
    res.json(prod);    
})

server.get('/alimentosIF/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = AlimentosIF.filter(n => n.Nome == nome);
    res.header('Access-Control-Allow-Origin','*');
    res.json(nm);    
})