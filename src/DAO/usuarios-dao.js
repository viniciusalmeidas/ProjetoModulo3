module.exports = class UsuariosDAO {

    constructor(dados){
        this._dados = dados;
    }

    listaUsuariosDAO() {
        return new Promise((resolve, reject)=> {

            this._dados.all("SELECT * FROM USUARIOS;", (error, linhas)=> 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }
    
    listaUsuarioIdDAO(id) {
        return new Promise((resolve, reject)=> {

            this._dados.all("SELECT * FROM USUARIOS WHERE ID= ? ", [id], (error, linhas) => 
            {
                if(error) reject(`Erro ao consultar: ${error}`);

                else resolve(linhas);
            })
        })
    }

    insertUsuariosDAO(body) {
        return new Promise((resolve, reject)=> {

            this._dados.run(
                "INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?,?,?)",
            
                [body.nome, body.email, body.senha],
            
                (error)=>
            {
                if(error) {reject(`Erro ao tentar inserir ${error}`)} 

                else {resolve(`Usuário adicionado com sucesso.`)}
            })
        })
    }


    updateUsuarioDAO(id, body){
        return new Promise((resolve, reject)=>{
            
            this._dados.run("UPDATE USUARIOS SET NOME=?, EMAIL=?, SENHA=? WHERE ID=?;",
            [body.nome, body.email, body.senha, id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar atualizar tarefa ${error}`)} 

                else {resolve(`Usuário atualizada com sucesso!`)}
            })
        })
    }

    removeUsuarioDAO(id){
        return new Promise((resolve, reject)=>{
            this._dados.run(`DELETE FROM USUARIOS WHERE ID = ?;`,
            [id],
            (error)=>
            {
                if(error) {reject(`Erro ao tentar deletar o usuário ${id}`)} 

                else {resolve(`Usuário deletado com sucesso!`)}
            })
        })
    }
}