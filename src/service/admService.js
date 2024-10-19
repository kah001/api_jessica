import * as db from '../repository/admRepository.js'

export async function inserirAdmService(adm) {
    let linhasAfetadas = await db.inserirAdm(adm)

    return linhasAfetadas
}

export async function validarAdmService(adm) {
    let registros = await db.validarAdm(adm)

    return registros
}