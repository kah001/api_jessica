import * as service from '../service/admService.js'
import { gerarToken } from '../utils/jwt.js'
import validarAdm from '../validation/adm/admValidation.js'
import { Router } from 'express'
const endpoints = Router()

endpoints.post('/adm', async (req, resp) => {
    try {
        let adm = req.body
        let linhasAfetadas = await service.inserirAdmService(adm)

        if (linhasAfetadas >= 1) {
            resp.send({
                novoAdm: 'ADM adicionado com sucesso!'
            })
        } else {
            resp.status(404).send({
                erro: 'Nenhum registro encontrado'
            })
        }
    }
    catch (err) {
        validarAdm(req)
        
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/adm/entrar', async (req, resp) => {
    try {
        let adm = req.body
        let usuario = await service.validarAdmService(adm)

        if (usuario == null) {
            resp.send({erro: 'Usuário ou senha incorreto(s)'})
        } else {
            let token = gerarToken(usuario)

            resp.send({
                token: token
            })
        }
        
    }
    catch (err) {
        validarAdm(req)

        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints