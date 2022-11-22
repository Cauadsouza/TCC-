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

server.get('/Alimentos/:id/Nome', (req, res) => {
    let Nome = req.params.Nome;
    let nm = Alimentos.filter(n => n.Nome == Nome);
    res.json(nm);    
})

