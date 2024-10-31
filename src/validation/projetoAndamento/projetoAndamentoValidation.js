export default function validarProjetoAndamento(projetoAndamento) {
    let msg = '';

    if(!projetoAndamento.imagem) {
        msg = 'Nenhuma imagem definida'
    }
    else if(!projetoAndamento.tipo) {
        msg = 'Nenhum tipo definido'
    } 
    else if(!projetoAndamento.local) {
        msg = 'Nenhum local inserido'
    }
    if(msg !== ''){
        throw Error(msg)
    } 
}