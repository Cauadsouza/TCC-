const express = require('express');
const server = express ();
const Alimentos = require('./src/data/Alimentos.json')

server.get('/Alimentos', (req,res) =>{
    res.json(Alimentos)
});

server.listen(300, () => {
    console.log("Funcionando...")
});

server.get('/Alimentos/:id', (req, res) => {
    let id = req.params.id;
    let prod = Alimentos.filter(p => p.id == id)[0];
    res.json(prod);    
})

server.get('/alimentos/nome/:nm', (req, res) => {
    let nome = req.params.nome;
    let nm = Alimentos.filter(n => n.Nome == nome);
    res.json(nm);    
})

