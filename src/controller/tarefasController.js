import * as service from '../service/tarefasService.js'
import { Router } from "express";
import { autenticar } from "../utils/jwt.js";
const endpoints = Router()

endpoints.post('/tarefa', async (req, resp) => {
    try {
        let tarefa = req.body
        let id = await service.inserirTarefaService(tarefa)

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

endpoints.get('/tarefa', async (req, resp) => {
    try {
        let registros = await service.consultarTarefaService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/tarefa/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let registros = await service.consultarTarefaPorProjetoService(id)

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/tarefa/:id', async (req, resp) => {
    try {
        let id = req.params.id
        let tarefa = req.body

        let linhasAfetadas = await service.alterarTarefaService(tarefa, id)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado'
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/tarefa/:id', async (req, resp) => {
    try {
        let id = req.params.id

        let linhasAfetadas = await service.deletarTarefaService(id)

        if (linhasAfetadas >= 1) {
            resp.send()
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado'
            })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints