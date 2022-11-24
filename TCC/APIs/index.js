const express = require('express');
const server = express ();
const Alimentos = require('./src/data/Alimentos.json')
const AlimentosIF = require('./src/data/AlimnetosIF.json')

server.listen(300, () => {
    console.log("Funcionando...")
});

/*API Alimentos*/

server.get('/alimentos', (req,res) =>{
    res.json(Alimentos)
});

server.get('/alimentos/:id', (req, res) => {
    let id = req.params.id;
    let prod = Alimentos.filter(p => p.id == id)[0];
    res.json(prod);    
})

server.get('/alimentos/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = Alimentos.filter(n => n.Nome == nome);
    res.json(nm);    
})

/*API AlimentosIF*/

server.get('/alimentosIF', (req,res) =>{
    res.json(AlimentosIF)
});

server.get('/alimentosIF/:id', (req, res) => {
    let id = req.params.id;
    let prod = AlimentosIF.filter(p => p.id == id)[0];
    res.json(prod);    
})

server.get('/alimentosIF/nome/:nm', (req, res) => {
    let nome = req.params.nm;
    let nm = AlimentosIF.filter(n => n.Nome == nome);
    res.json(nm);    
})