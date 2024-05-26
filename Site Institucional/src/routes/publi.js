var express = require("express");
var router = express.Router();

var publiController = require("../controllers/publiController");

router.get("/listar", function (req, res) {
    publiController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    publiController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    publiController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    publiController.publicar(req, res);
});

router.post("/curtir/:idPublicacao/:idUsuario", function (req, res) {
    // var idPublicacao = req.params.idPublicacao;
    // var idUsuario = req.params.idUsuario;
    
    publiController.curtir(req, res);
});

router.post("/VerCurtida/", function (req, res) {
    // const { idPublicacao, idUsuario } = req.params;

    console.log("TO NA ROTA")
    publiController.VerCurtida(req, res);

    // const curtidaExiste = curtidas.some(curtida => 
    //     curtida.idPublicacao === parseInt(idPublicacao) && curtida.idUsuario === parseInt(idUsuario)
    // );

    // if (curtidaExiste) {
    //     res.status(200).send({ curtido: true });
    // } else {
    //     res.status(200).send({ curtido: false });
    // }
});

router.delete("/deletar/:idPublicacao", function (req, res) {
    publiController.deletar(req, res);
});

module.exports = router;