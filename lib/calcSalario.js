function calcularSalario(funcionario) {
    let cargo = funcionario.cargo;
    let salarioBase = funcionario.salarioBase;

    if (cargo == "Desenvolvedor") {
        if (salarioBase >= 3000.00)
            return calculador(salarioBase, 0.8);

        // the function toFixed converts number to string
        else
            return calculador(salarioBase, 0.9);

    }
    else if (cargo == "DBA" || cargo == "Testador") {
        if (salarioBase >= 2000.00)
            return calculador(salarioBase, 0.75);
        else
            return calculador(salarioBase, 0.85);

    }
    else if (cargo == "Gerente") {
        if (salarioBase >= 5000.00)
            return calculador(salarioBase, 0.7);
        else
            return calculador(salarioBase, 0.8);

    }

}
function calculador(salarioBase, decimalpercentage) {
    return parseFloat((salarioBase * decimalpercentage).toFixed(2));
    // decimal percentage é a porcentagem dividido por 100
}

module.exports = calcularSalario;