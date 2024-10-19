import con from '../repository/connection.js'

export async function inserirProjeto(projeto) {
    const comando = `
        INSERT INTO tb_novo_projeto (nm_projeto, nm_cliente, contato_cliente, dt_inicio, tp_projeto, ds_projeto, vl_total_estimado, vl_pago, forma_pagamento)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    let registros = await con.query(comando, [projeto.nome, projeto.cliente, projeto.contato, projeto.inicio, projeto.tipo, projeto.descricao, projeto.valor, projeto.pago, projeto.pagamento])
    let info = registros[0]

    return info.insertId
}

export async function consultarProjeto() {
    const comando = ``
}

export async function consultarProjetoPorId(id) {
    const comando = ``
}

export async function alterarProjeto(projeto, id) {
    const comando = `
        UPDATE tb_novo_projeto
            SET nm_projeto = ?, 
                nm_cliente = ?,
                contato_cliente = ?,
                dt_inicio = ?,
                tp_projeto = ?,
                ds_projeto = ?,
                vl_total_estimado = ?,
                vl_pago = ?,
                forma_pagamento = ?
            WHERE id_projeto = ?
    `

    let registros = await con.query(comando, [projeto.nome, projeto.cliente, projeto.contato, projeto.inicio, projeto.tipo, projeto.descricao, projeto.valor, projeto.pago, projeto.pagamento, id])
    let info = registros[0]

    return info.affectedRows
}

export async function deletarProjeto(id) {
    const comando = `
        DELETE FROM tb_novo_projeto
            WHERE id_projeto = ?
    `

    let registros = await con.query(comando, [id])
    let info = registros[0]

    return info.affectedRows
}