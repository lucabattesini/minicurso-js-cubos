function marcador_vida(vida_personagem, classe) {
    var classe_1 = 20
    var classe_2 = 30
    var classe_3 = 40
    var classe_4 = 50

    if (vida_personagem <= 20) {
        console.log('Você morreu!')

    } else if(classe === classe_2) {
        vida_atual = vida_personagem - classe_2

    } else if(classe === classe_3) {
        vida_atual = vida_personagem - classe_3

    } else if(classe === classe_4) {
        vida_atual = vida_personagem - classe_4
    }

    if (vida_atual <= 0){
        console.log("Você morreu")
    } else if (vida_atual > 0) {
        console.log(vida_atual)
    }   
}