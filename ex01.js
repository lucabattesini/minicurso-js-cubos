function balanca(peso_a1, peso_a2, peso_b1, peso_b2) {
    var lado_a = peso_a1 + peso_a2
    var lado_b = peso_b1 + peso_b2

    if (lado_a > lado_b) {
        console.log('A balança se inclina para o lado A')
    } else if (lado_a < lado_b) {
        console.log('A balança se inclina para o lado B')
    } else {
        console.log('A balança não se inclina para nenhum lado')
    }
}