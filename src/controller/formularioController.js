import * as service from '../service/formularioService.js'
import { Router } from "express";
import { autenticar } from '../utils/jwt.js';
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

endpoints.get('/formulario', autenticar, async (req, resp) => {
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

export default endpoints