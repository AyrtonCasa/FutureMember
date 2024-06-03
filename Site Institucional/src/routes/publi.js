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
    publiController.curtir(req, res);
});

router.post("/VerCurtida/", function (req, res) {
    console.log("TO NA ROTA")
    publiController.VerCurtida(req, res);

});

router.delete("/deletarCurtida/:idPublicacao/:idUsuario", function (req, res) {
    publiController.deletarCurtida(req, res);
});

router.delete("/deletarPublicacao/:idPublicacao/:idUsuario", function (req, res) {
    publiController.deletarPublicacao(req, res);
});

module.exports = router;