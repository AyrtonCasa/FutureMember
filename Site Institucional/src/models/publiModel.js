var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.Titulo,
            p.Descricao,
            p.DtPostagem,
            p.fkDono,
            u.idUsuario AS idUsuario,
            u.nome,
            u.nomeSocial,
            u.DtNasc,
            u.email,
            u.senha
        FROM Publicacao p
            INNER JOIN usuario u
                ON p.fkDono = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
        p.idPublicacao AS idPublicacao,
        p.Titulo,
        p.Descricao,
        p.fkDono,
        u.idUsuario AS idUsuario,
        u.nome,
        u.nomeSocial,
        u.DtNasc,
        u.email,
        u.senha
        FROM Publicacao p
            INNER JOIN usuario u
                ON p.fkDono = u.idUsuario
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()");
    var instrucaoSql = `
        SELECT 
            p.idPublicacao AS idPublicacao,
            p.Titulo,
            p.Descricao,
            p.fkDono,
            u.idUsuario AS idUsuario,
            u.nome,
            u.nomeSocial,
            u.DtNasc,
            u.email,
            u.senha
        FROM Publicacao p
            INNER JOIN usuario u
                ON p.fkDono = u.id
        WHERE u.id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO publicacao (titulo, descricao, fkDono, DtPostagem) VALUES ('${titulo}', '${descricao}', ${idUsuario}, 'default');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



function deletar(idPublicacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPublicacao);
    var instrucaoSql = `
        DELETE FROM publicacao WHERE idPublicacao = ${idPublicacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletar
}
