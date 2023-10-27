function placar_partida(placar) {
    if (placar[0] > placar[1]) {
        console.log("time A esta ganhando")
    } else if (placar[0] < placar[1]) {
        console.log("time B esta ganhando")
    } else if (placar[0] === placar[1]) {
        console.log("A partida esta empatada")
    }
}