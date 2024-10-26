import * as service from "../service/projetoAndamentoService.js";

import { autenticar } from "../utils/jwt.js";
import { Router } from "express";

const endpoints = Router();

endpoints.post('/projeto/andamento', autenticar, async (req, resp) => {
    try {
        let projetoAndamento = req.body;
        let id = await service.inserirProjetoAndamentoService(projetoAndamento);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/projetos/andamento', autenticar, async (req, resp) => {
    try {
        let registros = await service.consultarProjetoAndamentoService();

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


endpoints.get('/projeto/andamento/recente', autenticar, async (req, resp) => {
    try {
        let recente = await service.consultarProjetoAndamentoRecenteService()
        resp.send(recente)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/projeto/andamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
        let projetoAndamento = req.body;
        await service.alterarProjetoAndamentoService(projetoAndamento, id);

        resp.send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/projeto/andamento/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
        await service.deletarProjetoAndamentoService(id);

        resp.send()
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;