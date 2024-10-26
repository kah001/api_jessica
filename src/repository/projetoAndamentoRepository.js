import con from './connection.js';

export async function inserirProjetoAndamento(projetoAndamento) {
    const comando = `
     INSERT INTO tb_projetos_andamento (ft_projeto, tp_projeto, ds_local) 
          VALUES (?, ?, ?);
    `;

    let resposta = await con.query(comando, [projetoAndamento.imagem, projetoAndamento.tipo, projetoAndamento.local]);
    let info = resposta[0];

    return info.insertId;
}

export async function consultarProjetoAndamento() {
    const comando = `
        SELECT  id_projeto_andamento    id,
                ft_projeto              imagem,
                tp_projeto              tipo,
                ds_local                local
        FROM 	
                tb_projetos_andamento
    `

    let resposta = await con.query(comando)
    let registros = resposta[0]

    return registros;
}

export async function consultarProjetoAndamentoRecente() {
    const comando = `
        SELECT  
                id_projeto_andamento    id,
                ft_projeto              imagem,
                tp_projeto              tipo,
                ds_local                local
        FROM 	
                tb_projetos_andamento
        WHERE   
                id_projeto_andamento = ?
    `;
    
    let linhas = await consultarProjetoAndamento();
    let ultimo = linhas.length;

    let resposta = await con.query(comando, [ultimo]);
    let recente = resposta[0][0];

    return recente;
}

export async function alterarProjetoAndamento(projetoAndamento, id) {
    const comando = `
        UPDATE  tb_projetos_andamento   
           SET      
                ft_projeto     = ?,
                tp_projeto     = ?,
                ds_local       = ?
        WHERE   
                id_projeto_andamento = ?
    `;

    let resposta = await con.query(comando, [projetoAndamento.imagem, projetoAndamento.tipo, projetoAndamento.local, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function deletarProjetoAndamento(id) {
    const comando = `
        DELETE FROM tb_projetos_andamento   
            WHERE   id_projeto_andamento = ?
    `;

    let resposta = await con.query(comando, [id]);
    let info = resposta[0];

    return info.affectedRows;
}