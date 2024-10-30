import con from './connection.js'

export async function inserirFormulario(formulario) {
    const comando = `
        INSERT INTO tb_formulario (nm_cliente, ds_email, ds_telefone, ds_pais, ds_mensagem)
            VALUES (?, ?, ?, ?, ?)
    `

    let registros = await con.query(comando, [formulario.cliente, formulario.email, formulario.telefone, formulario.pais, formulario.mensagem])
    let info = registros[0]

    return info.insertId
}

export async function consultarFormulario() {
    const comando = `
        SELECT id_formulario    id,
                nm_cliente      cliente,
                ds_email        email,
                ds_telefone     telefone,
                ds_pais         pais,
                ds_mensagem     mensagem,
                dt_dia          dia
            FROM tb_formulario
    `

    let registros = await con.query(comando)
    let info = registros[0]

    return info 
}

export async function consultarFormularioPorPais(pais) {
    const comando = `
        SELECT id_formulario    id,
                nm_cliente      cliente,
                ds_email        email, 
                ds_telefone     telefone,
                ds_pais         pais,
                ds_mensagem     mensagem,
                dt_dia          dia
            FROM tb_formulario
            WHERE ds_pais = ?
    `

    let registros = await con.query(comando, [pais])
    let info = registros[0]

    return info
}