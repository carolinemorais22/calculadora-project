function validarForm(){
    let nomeCompleto = document.querySelector("#nome-completo")

    if (nomeCompleto.value.trim() == ""){
        document.write("PREENCHE ESSE NEGÓCIO!!!")
        return false
    }

    return true
}
