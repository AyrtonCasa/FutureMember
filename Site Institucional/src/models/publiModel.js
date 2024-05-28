var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
    p.idPublicacao AS idPublicacao,
    p.Titulo as titulo,
    p.Descricao as descricao,
    p.DtPostagem as DtPostagem,
    p.fkDono,
    u.idUsuario AS idUsuario,
    u.nome as nome,
    u.nomeSocial as nomeSocial,
    u.DtNasc as DtNasc,
    u.email,
    u.senha,
    count(curtida.idCurtida) as qtd
FROM Publicacao p
    INNER JOIN usuario u
        ON p.fkDono = u.idUsuario
    left JOIN curtida 
        ON curtida.fkPublicacao = p.idPublicacao
        GROUP BY idPublicacao
        ORDER BY idPublicacao;
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
    p.Titulo as titulo,
    p.Descricao as descricao,
    p.DtPostagem as DtPostagem,
    p.fkDono,
    u.idUsuario AS idUsuario,
    u.nome as nome,
    u.nomeSocial as nomeSocial,
    u.DtNasc as DtNasc,
    u.email,
    u.senha,
    count(curtida.idCurtida) as qtd
FROM Publicacao p
    INNER JOIN usuario u
        ON p.fkDono = u.idUsuario
    left JOIN curtida 
        ON curtida.fkPublicacao = p.idPublicacao
        WHERE u.idUsuario = ${idUsuario}
        GROUP BY idPublicacao
        ORDER BY idPublicacao;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucaoSql = `
        INSERT INTO publicacao (titulo, descricao, fkDono, DtPostagem) VALUES ('${titulo}', '${descricao}', ${idUsuario}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function curtir(idPublicacao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", idUsuario, idPublicacao);
    var instrucaoSql = `
        INSERT INTO curtida (idCurtida, fkPublicacao, fkUsuario,dataCurtida) VALUES (1, ${idPublicacao}, ${idUsuario}, now());
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function VerCurtida(idPublicacao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function verCurtir(): ", idUsuario, idPublicacao);
    var instrucaoSql = `
    SELECT 
    *
    FROM
    curtida
        JOIN
    publicacao ON curtida.fkPublicacao = publicacao.idPublicacao
        JOIN
    usuario ON curtida.fkUsuario = usuario.idUsuario
    where curtida.fkUsuario = ${idUsuario} and curtida.fkPublicacao = ${idPublicacao};
    `;
    console.log(`Id Usuario: ${idUsuario}; Id Publicacao: ${idPublicacao}`);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarCurtida(idPublicacao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPublicacao, idUsuario);
    var instrucaoSql = `
        DELETE FROM curtida WHERE fkPublicacao = ${idPublicacao} and fkUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarPublicacao(idPublicacao, idUsuario) {
    
    var instrucaoSqlTirarCurtida = `
    DELETE FROM curtida WHERE curtida.fkPublicacao = ${idPublicacao} AND idCurtida = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSqlTirarCurtida);
    
    return database.executar(instrucaoSqlTirarCurtida)
    
    .then(result => {
        console.log("Publicação deletada com sucesso. Resultado:", result);
        console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idPublicacao, idUsuario);
        var instrucaoSql = `
            DELETE FROM publicacao WHERE idPublicacao = ${idPublicacao} and fkDono = ${idUsuario};
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql)
    })
    .then(result => {
        console.log("Curtidas removidas com sucesso. Resultado:", result);
        return result;
    })
    .catch(erro => {
        console.error("Erro ao deletar publicação ou remover curtidas:", erro);
        throw erro;
    });
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    deletarCurtida,
    deletarPublicacao,
    curtir,
    VerCurtida
}
