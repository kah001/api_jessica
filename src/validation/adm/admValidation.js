export default function validarAdm(req) {
    if (!req.body.nome)
        throw new Error('O parâmetro nome está inválido')

    if (!req.body.senha)
        throw new Error('O parâmetro senha está inválido')
}