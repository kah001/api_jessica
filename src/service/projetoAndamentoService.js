import * as db from '../repository/projetoAndamentoRepository.js';
import validarProjetoAndamento from '../validation/projetoAndamento/projetoAndamentoValidation.js';

export async function inserirProjetoAndamentoService(projetoAndamento) {
    validarProjetoAndamento(projetoAndamento)
    let id = await db.inserirProjetoAndamento(projetoAndamento);

    return id;
}

export async function consultarProjetoAndamentoService() {
    let registros = await db.consultarProjetoAndamento();
    if(registros.length <= 0)
        throw Error('Nenhum registro encontrado')

    return registros;
}

export async function consultarProjetoAndamentoIdService(id) {
    let registros = await db.consultarProjetoAndamentoId(id);

    return registros;
}

export async function consultarProjetoAndamentoRecenteService() {
    let recente = await db.consultarProjetoAndamentoRecente();

    return recente;
}

export async function alterarProjetoAndamentoService(projetoAndamento, id) {
    validarProjetoAndamento(projetoAndamento)
    let linhasAlteradas = await db.alterarProjetoAndamento(projetoAndamento, id);
    if(linhasAlteradas <= 0)
        throw Error('Nenhum registro encontrado')
}

export async function deletarProjetoAndamentoService(id) {
    let linhasAlteradas = await db.deletarProjetoAndamento(id);
    if(linhasAlteradas <= 0)
        throw Error('Nenhum registro encontrado')
}