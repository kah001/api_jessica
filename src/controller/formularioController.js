import * as service from '../service/formularioService.js'
import { Router } from "express";
const endpoints = Router()

endpoints.post('/formulario', async (req, resp) => {
    try {
        let formulario = req.body
        let id = await service.inserirFormularioService(formulario)

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

endpoints.get('/formulario', async (req, resp) => {
    try {
        let registros = await service.consultarFormularioService()

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.get('/formulario/:pais', async (req, resp) => {
    try {
        let pais = req.params.pais
        let registros = await service.consultarFormularioPorPaisService(pais)

        resp.send(registros)
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints