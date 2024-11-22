import con from '../repository/connection.js'

export async function inserirProjeto(projeto) {
    const comando = `
        INSERT INTO tb_projetos (nm_projeto, nm_cliente, contato_cliente, dt_inicio, tp_projeto, ds_projeto, vl_total_estimado, vl_pago, forma_pagamento)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `

    let registros = await con.query(comando, [projeto.nome, projeto.cliente, projeto.contato, projeto.inicio, projeto.tipo, projeto.descricao, projeto.valor, projeto.pago, projeto.pagamento])
    let info = registros[0]

    return info.insertId
}

export async function consultarProjeto() {
    const comando = `
        SELECT id_projeto           id,
                nm_projeto          nome,
                nm_cliente          cliente,
                contato_cliente     contato,
                dt_inicio           inicio,
                tp_projeto          tipo,
                ds_projeto          descricao,
                vl_total_estimado   valor,
                vl_pago             pago,
                forma_pagamento     pagamento
            FROM tb_projetos
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info
}

export async function consultarProjetoPorId(id) {
    const comando = `
        SELECT id_projeto           id,
                nm_projeto          nome,
                nm_cliente          cliente,
                contato_cliente     contato,
                dt_inicio           inicio,
                tp_projeto          tipo,
                ds_projeto          descricao,
                vl_total_estimado   valor,
                vl_pago             pago,
                forma_pagamento     pagamento
            FROM tb_projetos
            WHERE id_projeto = ?
    `

    let registros = await con.query(comando, [id])
    let info = registros[0]

    return info
}

export async function alterarProjeto(projeto, id) {
    const comando = `
        UPDATE tb_projetos
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
    const comandoTarefas = `
        DELETE FROM tb_tarefas
        WHERE id_projeto = ?
    `;
    await con.query(comandoTarefas, [id]);

    const comandoProjeto = `
        DELETE FROM tb_projetos
        WHERE id_projeto = ?
    `;
    let registros = await con.query(comandoProjeto, [id]);
    let info = registros[0];
    
    return info.affectedRows;
}