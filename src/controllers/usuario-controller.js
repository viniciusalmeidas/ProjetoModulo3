const UsuariosDAO = require("../DAO/usuarios-dao")


module.exports = (app, dados) => {
  const usuariosDAO = new UsuariosDAO(dados)

    app.get('/usuarios', async (req, res)=> {
      try {
        const todosUsuarios = await usuariosDAO.listaUsuariosDAO();
        res.status(200).send(todosUsuarios);

      } catch (error) {
        res.send("Erro ao mostrar os usuários");
      }

  });

  app.get('/usuarios/:id', async (req, res) => {
    try {
      const user = await usuariosDAO.listaUsuarioIdDAO(req.params.id);
      res.status(200).send(user);
    } 
    catch (error) {
      res.send("Usuário não encontrado.");   
    }
  });

      
  app.post("/usuarios", async (req, res) => {

    try {
      const newUser = await usuariosDAO.insertUsuariosDAO(req.body);
      res.status(200).send(newUser)

    } catch (error) {
      res.send("Não foi possível adicionar novo usuário.")
    }

  });

  app.put("/usuarios/:id", async (req, res) =>{

    try {
      let atualizaUsuario = await usuariosDAO.updateUsuarioDAO(req.params.id, req.body)
      
      res.status(200).send(atualizaUsuario)
               
    } catch (error) {

      res.send("Erro ao atualizar")
      }
  })

  app.delete('/usuarios/:id', async (req, res) => {
    
    try {
      let a = await usuariosDAO.removeUsuarioDAO(req.params.id)
      res.status(200).send(a)
               
    } catch (error) {

      res.send("Erro ao remover.")
    }
      
  });
      


    
}