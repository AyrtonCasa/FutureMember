var database = require("../database/config");

function buscarUltimasMedidas(idUsuario, limite_linhas) {

    var instrucaoSql = `SELECT 
    COUNT(idPublicacao) as qtd, publicacao.DtPostagem as DtPostagem
FROM
    publicacao
        JOIN
    usuario ON publicacao.fkDono = usuario.idUsuario
WHERE
    fkDono = ${idUsuario}
GROUP BY publicacao.DtPostagem
ORDER BY DtPostagem DESC
LIMIT ${limite_linhas};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas
}
