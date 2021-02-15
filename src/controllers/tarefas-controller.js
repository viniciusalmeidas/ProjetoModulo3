const TarefasDAO = require("../DAO/tarefas-dao")

module.exports = (app, dados) => {
  const tarefasDAO = new TarefasDAO(dados); 

    app.get('/tarefas', async (req, res) => {
        try {
          const todasTarefas = await tarefasDAO.listaTarefasDAO();
          res.send(todasTarefas);

        } catch (error) {
          res.send("Erro ao mostrar todos as tarefas");
        }

    });

    app.get('/tarefas/:id', async (req, res) => {
      try {
        const tarefa = await tarefasDAO.listaTarefasIdDAO(req.params.id);
        res.send(tarefa);
      } 
      catch (error) {
        res.send("Tarefa não encontrada.");   
      }
    });

    app.get('/tarefas/user/:id_usuario', async (req, res) => {
     
      try {
        const tarefas = await tarefasDAO.listaTarefasUserDAO(req.params.id_usuario);
        res.send(tarefas);
      } 
      catch (error) {
        res.send("Usuário não encontrado.")   
      }
    });

    app.post("/tarefas", async (req, res)=>{
        
      try {
        const novaTarefa = await tarefasDAO.insertTarefasDAO(req.body)
        if (novaTarefa == `Tarefa adicionada com sucesso.`)
        
        res.status(200).send("Tarefa adicionada com sucesso.")
         
      } catch (error) {

        res.send("Erro ao inserir nova tarefa")
        }
        
    });


    app.put('/tarefas/:id', async (req, res)=>{
        
      try {
        let atualizaTarefa = await tarefasDAO.updateTarefaDAO(req.params.id, req.body)
        
        res.status(200).send(atualizaTarefa)
                 
      } catch (error) {

        res.send("Erro ao atualizar")
        }
        
    })

    app.delete('/tarefas/:id', async (req, res)=>{
        
      try {
        let removeTarefa = await tarefasDAO.removeTarefaDAO(req.params.id)
        
        if(removeTarefa == `Tarefa deletada com sucesso!`)
        res.status(200).send(removeTarefa)
                 
      } catch (error) {

        res.send("Erro ao remover.")
        }
        
    })

}