import * as db from '../repository/projetoAndamentoRepository.js';

export async function inserirProjetoAndamentoService(projetoAndamento) {
    let id = await db.inserirProjetoAndamento(projetoAndamento);

    return id;
}