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

export default endpoints;