//Instanciamentos 
const dados = require('./infra/sqlite-db')
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
//const port = 8080;
const port = process.env.PORT;

const app = express(); //tem método USE 

//colocando o parser para rodar 
app.use(bodyParser.json());
app.use(cors());

//Recebe tudo em binário, o bodyparser transforma o binário em json
const usuarioController = require("./controllers/usuario-controller");
const tarefaController = require('./controllers/tarefas-controller');
usuarioController(app, dados);
tarefaController(app, dados);

app.listen(port, ()=> {
    console.log(`[INFO]: Servidor rodando em localhost: ${port}`)
});
