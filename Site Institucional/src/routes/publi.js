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

router.put("/editar/:idPublicacao", function (req, res) {
    publiController.editar(req, res);
});

router.delete("/deletar/:idPublicacao", function (req, res) {
    publiController.deletar(req, res);
});

module.exports = router;