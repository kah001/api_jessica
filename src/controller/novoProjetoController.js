import * as service from '../service/novoProjetoService.js'
import { Router } from "express"
import { autenticar } from "../utils/jwt.js"
const endpoints = Router()

endpoints.post('/projeto', autenticar, async (req, resp) => {
    try {
        let projeto = req.body
        let id = await service.inserirProjetoService(projeto)

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

endpoints.get('/projeto', autenticar, async (req, resp) => {
    try {

    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/projeto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/projeto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
        let projeto = req.body
        let linhasAfetadas = await service.alterarProjetoService(projeto, id)

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

endpoints.delete('/projeto/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id
        let linhasAfetadas = await service.deletarProjetoService(id)

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