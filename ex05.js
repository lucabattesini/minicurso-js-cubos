function quem_ganhou(jogador_a) {
    let pontos_a = 0

    for (let bolas of jogador_a) {
        pontos_a = bolas + pontos_a
    }

    if ( pontos_a < 60 ) {
        let pontos_b = 120 - pontos_a
        console.log('Jogador "B" ganhou com ' + pontos_b + ' pontos.')
    } else if ( pontos_a > 60 ) {
        console.log('Jogador "A" ganhou com ' + pontos_a + ' pontos.')
    } else {
        console.log("Empate")
    }
}