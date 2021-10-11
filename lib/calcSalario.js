function calcularSalario(funcionario) {

    if (funcionario.cargo == "Desenvolvedor") {
        if (funcionario.salarioBase >= 3000.00)
            return parseFloat((funcionario.salarioBase - funcionario.salarioBase * 0.2).toFixed(2));
        // the function toFixed converts number to string
        else
            return parseFloat((funcionario.salarioBase - funcionario.salarioBase * 0.1).toFixed(2));

    }
    if (funcionario.cargo == "DBA") {
        if (funcionario.salarioBase >= 2000.00)
            return parseFloat((funcionario.salarioBase - funcionario.salarioBase * 0.25).toFixed(2));
        // the function toFixed converts number to string
        else
            return parseFloat((funcionario.salarioBase - funcionario.salarioBase * 0.15).toFixed(2));

    }

}

module.exports = calcularSalario;