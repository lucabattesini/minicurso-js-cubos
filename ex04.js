function placar_partida(placar) {
    if (placar[0] > placar[1]) {
        return "time A esta ganhando"
    } else if (placar[0] < placar[1]) {
        return "time B esta ganhando"
    } else if (placar[0] === placar[1]) {
        return "A partida esta empatada"
    }
}