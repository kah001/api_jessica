import * as db from '../repository/tarefasRepository.js'

export async function inserirTarefaService(tarefa) {
    let id = await db.inserirTarefa(tarefa)

    return id
}

export async function consultarTarefaService() {
    let registros = await db.consultarTarefa()

    return registros
}

export async function consultarTarefaPorProjetoService(id) {
    let registros = await db.consultarTarefaPorProjeto(id)

    return registros
}

export async function alterarTarefaService(tarefa, id) {
    let linhasAfetadas = await db.alterarTarefa(tarefa, id)

    return linhasAfetadas
}

export async function deletarTarefaService(id) {
    let linhasAfetadas = await db.deletarTarefa(id)

    return linhasAfetadas
}