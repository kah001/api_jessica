import * as db from '../repository/formularioRepository.js'

export async function inserirFormularioService(formulario) {
    let id = await db.inserirFormulario(formulario)

    return id 
}

export async function consultarFormularioService() {
    let registros = await db.consultarFormulario()

    return registros
}