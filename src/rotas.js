import admController from './controller/admController.js';
import tarefasController from './controller/tarefasController.js';
import projetoController from './controller/novoProjetoController.js';
import projetoAndamento from './controller/projetoAndamentoController.js'

export default function adicionarRotas(servidor) {
    servidor.use(admController);
    servidor.use(tarefasController);
    servidor.use(projetoController);
    servidor.use(projetoAndamento);
}