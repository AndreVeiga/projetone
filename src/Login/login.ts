export const LoginComGoogle = async (email: string, pass: string) => {
    const my_usuario = await PegaDoBD(email, pass);
    
    if(my_usuario) {
        return { message: "Login successfull" }
    } 
    
    const usuario = await chamadaParaOGoogle(email, pass);

    if (usuario && usuario.id) {
        SalvaNoBD(usuario)
        return { message: "Create successfull" }
    }

    throw new Error('Login/senha não encontrado.')
}