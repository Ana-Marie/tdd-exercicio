function calcularSalario(funcionario){
    if(funcionario.salarioBase>=3000 && funcionario.cargo=="Desenvolvedor"){
        return  parseFloat((funcionario.salarioBase-funcionario.salarioBase*0.2).toFixed(2));// the function toFixed converts number to string
    }
    else if(funcionario.salarioBase<3000 && funcionario.cargo=="Desenvolvedor"){
        return parseFloat((funcionario.salarioBase-funcionario.salarioBase*0.1).toFixed(2));
    }
    
}

module.exports = calcularSalario;