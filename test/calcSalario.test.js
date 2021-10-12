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
    /*Caso o cargo seja DBA, o funcionário terá desconto de 25% caso o salário seja
      maior ou igual que 2.000,00, ou apenas 15% caso o salário seja menor que isso.*/

    test('Deve apresentar salario liquido de 2699.99 caso o cargo for DBA e o salario base for 2999.99', () => {
        let funcionario = {
            nome: "Fernando",
            email: "fernando@email.com",
            salarioBase: 2999.45,
            cargo: "DBA"

        };
        expect(calcularSalario(funcionario)).toBe(2249.59);
    });

    test('Deve apresentar salario liquido de 2699.99 caso o cargo for DBA e o salario base for 2999.99', () => {
        let funcionario = {
            nome: "Lidia",
            email: "lidia@email.com",
            salarioBase: 1500.00,
            cargo: "DBA"

        };
        expect(calcularSalario(funcionario)).toBe(1275.00);
    });
    /*  Caso o cargo seja TESTADOR, o funcionário terá desconto de 25% caso o salário
    seja maior ou igual que 2.000,00, ou apenas 15% caso o salário seja menor que
    isso*/

    test('Deve apresentar salario liquido de 1875.00 caso o cargo for Testador e o salario base for 2500.00', () => {
        let funcionario = {
            nome: "Lucas",
            email: "lucas@email.com",
            salarioBase: 2500.00,
            cargo: "Testador"
        };
        expect(calcularSalario(funcionario)).toBe(1875.00);
    });
    test('Deve apresentar salario liquido de 1530 caso o cargo for Testador e o salario base for 1800.00', () => {
        let funcionario = {
            nome: "Zoe",
            email: "zoe@email.com",
            salarioBase: 1800.00,
            cargo: "Testador"
        };
        expect(calcularSalario(funcionario)).toBe(1530.00);
    });
    /*Caso o cargo seja GERENTE, o funcionário terá desconto de 30% caso o salário
    seja maior ou igual que 5.000,00, ou apenas 20% caso o salário seja menor que
    isso*/
    test('Deve apresentar salario liquido de 2000.00 caso o cargo for Gerente e o salario base for 2500.00', () => {
        let funcionario = {
            nome: "Beatrice",
            email: "bia@email.com",
            salarioBase: 2500.00,
            cargo: "Gerente"
        };
        expect(calcularSalario(funcionario)).toBe(2000.00);
    });
    test('Deve apresentar salario liquido de 5740.00 caso o cargo for Gerente e o salario base for 8200.00', () => {
        let funcionario = {
            nome: "Cibelly",
            email: "belly@email.com",
            salarioBase: 8200.00,
            cargo: "Gerente"
        };
        expect(calcularSalario(funcionario)).toBe(5740.00);
    });

});