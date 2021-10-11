function calcularSalario(funcionario) {

    if (funcionario.cargo == "Desenvolvedor") {
        if (funcionario.salarioBase >= 3000.00)
            return parseFloat((funcionario.salarioBase*0.8).toFixed(2));
        // the function toFixed converts number to string
        else
            return parseFloat((funcionario.salarioBase*0.9).toFixed(2));

    }
    else if (funcionario.cargo == "DBA") {
        if (funcionario.salarioBase >= 2000.00)
            return parseFloat((funcionario.salarioBase*0.75).toFixed(2));
        else
            return parseFloat((funcionario.salarioBase*0.85).toFixed(2));

    }
    else if (funcionario.cargo == "Testador") {
        if (funcionario.salarioBase >= 2000.00)
            return parseFloat((funcionario.salarioBase*0.75).toFixed(2));
        else
            return parseFloat((funcionario.salarioBase*0.85).toFixed(2));

    }

}

module.exports = calcularSalario;