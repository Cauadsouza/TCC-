const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());


const connection = mysql.createConnection({
    host : 'localhost',
    user :'root',
    password: '',
    database : 'LojaIF'
})

app.listen(3000, () => {
    console.log('server started');
    connection.connect(err => {
        if (!err){
            console.log('BD OK')
        }else {
            console.log(err.sqlMessage)
        }
    });
});

app.get('/', (req, res) => {
  res.send('oi');
});

app.get('/produtos', (req, res) => {
    const sql = 'SELECT * FROM produto'

    connection.query(sql, (err, rows) => {
        if (!err) {
            res.json({'status': 'ok', 'res' :rows})
        } else {
            res.json({'status' : 'erro','res' : err.sqlMessage })
        }
      });
});

app.get('/produtos/:id', (req, res) => {
    let id = req.params.id;
    let prod = produtos.filter(p => p.id == id)[0];
    res.json(prod);    
});
