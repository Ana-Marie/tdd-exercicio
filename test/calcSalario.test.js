const calcularSalario = require('../lib/calcSalario');

describe('CalcSalario', () => {
 /* Caso o cargo seja DESENVOLVEDOR, o funcionário terá desconto de 20% caso o
 salário seja maior ou igual que 3.000,00, ou apenas 10% caso o salário seja menor
 que isso. */

    test('Deve apresentar salario liquido de 4000.00 caso o cargo for Desenvolvedor e o salario base for 5000.00', () => {
        let funcionario = {
            nome: "Maria",
            email: "maria@email.com",
            salarioBase: 5000.00,
            cargo: "Desenvolvedor"
    
        };
        expect(calcularSalario(funcionario)).toBe(4000.00);
    }); 
    test('Deve apresentar salario liquido de 2699.99 caso o cargo for Desenvolvedor e o salario base for 2999.99', () => {
        let funcionario = {
            nome: "João",
            email: "joao@email.com",
            salarioBase: 2999.99,
            cargo: "Desenvolvedor"
    
        };
        expect(calcularSalario(funcionario)).toBe(2699.99);
    });
});