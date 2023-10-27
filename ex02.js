function calculadora(num_1, num_2, operacao){
    if (operacao == 'soma'){
        return num_1 + num_2
    } else if (operacao == 'divisao'){
        return num_1 / num_2
    } else if (operacao == 'multiplicacao'){
        return num_1 * num_2
    } else if (operacao == 'subtracao'){
        return num_1 - num_2
    }
}