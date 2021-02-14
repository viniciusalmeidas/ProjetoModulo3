module.exports = class TarefasDAO {

    constructor(dados){
        this._dados = dados;
    }

    listaTarefasDAO() {
        return new Promise((resolve, reject)=> {

            this._dados.all("SELECT * FROM TAREFAS;", (error, linhas)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }
    
    listaTarefasIdDAO(id) {
        return new Promise((resolve, reject)=> {

            this._dados.get("SELECT * FROM TAREFAS WHERE ID = ? ", [id], (error, linha)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linha);
            })
        })
    }

    listaTarefasIdDAO(id) {
        return new Promise((resolve, reject)=> {

            this._dados.get("SELECT * FROM TAREFAS WHERE ID = ? ", [id], (error, linha)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linha);
            })
        })
    }

    listaTarefasUserDAO(id_usuario) {
        return new Promise((resolve, reject)=> {

            this._dados.all("SELECT * FROM TAREFAS WHERE ID_USUARIO = ? ", [id_usuario], (error, linhas) => 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }

    insertTarefasDAO(body) {
        return new Promise((resolve, reject)=> {

            this._dados.run(
                "INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES(?,?,?,?,?)",
            
                [body.titulo, body.descricao, body.status, body.data_criacao, body.id_usuario],
            
                (error)=>
            {
                if(error) {reject(`Erro ao tentar inserir ${error}`)} 

                else {resolve(`Tarefas ${body.titulo} adicionadas com sucesso!`)}
            })
        })
    }


    // updateTarefaDAO(id, body){
    //     return new Promise((resolve, reject)=>{
            
    //         this._dados.run("UPDATE TAREFAS SET TITULO=?, DESCRICAO=?, STATUS=?, DATACRIACAO=? WHERE ID=?;",
    //         [body.TITULO, body.DESCRICAO, body.STATUS, body.DATACRIACAO, id],
    //         (error)=>
    //         {
    //             if(error) {reject(`Erro ao tentar atualizar tarefa ${error}`)} 

    //             else {resolve(`Tarefa atualizada com sucesso!`)}
    //         })
    //     })
    // }

    // deleteTarefaDAO(id){
    //     return new Promise((resolve, reject)=>{
    //         this._dados.run("DELETE FROM USUARIOS WHERE ID=?",
    //         [id],
    //         (error)=>
    //         {
    //             if(error) {reject(`Erro ao tentar deletar o registro ${id}`)} 

    //             else {resolve(`Tarefa deletada com sucesso!`)}
    //         })
    //     })
    // }
}