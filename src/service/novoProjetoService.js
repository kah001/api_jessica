import * as db from '../repository/novoProjetoRepository.js'

export async function inserirProjetoService(projeto) {
    let id = await db.inserirProjeto(projeto)

    return id
}

export async function consultarProjetoService() {
    let registros = await db.consultarProjeto()

    return registros
}

export async function consultarProjetoPorIdService(id) {
    let registros = await db.consultarProjetoPorId(id)

    return registros
}

export async function alterarProjetoService(projeto, id) {
    let linhasAfetadas = await db.alterarProjeto(projeto, id)

    return linhasAfetadas
}

export async function deletarProjetoService(id) {
    let linhasAfetadas = await db.deletarProjeto(id)

    return linhasAfetadas
}