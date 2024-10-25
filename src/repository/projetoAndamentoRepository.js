import con from './connection.js';

export async function inserirProjetoAndamento(projetoAndamento) {
    const comando = `
     INSERT INTO tb_projetos_andamento (ft_projeto, tp_projeto, ds_local) 
          VALUES (?, ?, ?);
    `;

    let resposta = await con.query(comando, [projetoAndamento.foto, projetoAndamento.tipo, projetoAndamento.local]);
    let info = resposta[0];

    return info.insertId;
}