import con from "./connection.js"

export async function inserirAdm(adm) {
    const comando = `
        INSERT INTO tb_adm (nm_adm, ds_senha)
            VALUES (?, ?)
    `

    let registros = await con.query(comando, [adm.nome, adm.senha])
    
    let info = registros[0]

    return info
}


export async function validarAdm(adm) {
    const comando = `
        SELECT nm_adm
            FROM tb_adm
            WHERE nm_adm = ? AND ds_senha = ?
    `

    let registros = await con.query(comando, [adm.nome, adm.senha])
    let info = registros[0]

    return info[0]
}