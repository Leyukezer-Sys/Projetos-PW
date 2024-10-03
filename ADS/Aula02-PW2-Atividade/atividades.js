/*
Atividade prática de Javascript

3. Faça um algoritmo que receba a matrícula e duas notas do aluno. Calcular a média e mostrar a matrícula do aluno com as seguintes mensagens de acordo com os dados a seguir: Fazer um vetor de objeto de aluno. O objeto aluno deve ter nome, nota1, noata2 e nota3. Ao final mostre a média geral dos alunos.

4. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado.

5. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.
*/
const readline = require("readline");

// Criar uma interface para entrada e saída
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function atividade1() {
  //1. Criar 4 variáveis para receber as notas de um aluno, calcular e mostrar a média desse aluno.
  console.log(`Bem-vindo à atividade 1.`);

  let _nota_aluno_01,
    _nota_aluno_02,
    _nota_aluno_03,
    _nota_aluno_04,
    _media_aluno;

  // Fazer uma pergunta ao usuário
  rl.question("Qual é a primeira nota do aluno? ", (resposta) => {
    _nota_aluno_01 = parseInt(resposta);
    rl.question("Qual é a segunda nota do aluno? ", (resposta) => {
      _nota_aluno_02 = parseInt(resposta);
      rl.question("Qual é a terceira nota do aluno? ", (resposta) => {
        _nota_aluno_03 = parseInt(resposta);
        rl.question("Qual é a quarta nota do aluno? ", (resposta) => {
          _nota_aluno_04 = parseInt(resposta);

          _media_aluno =
            (_nota_aluno_01 +
              _nota_aluno_02 +
              _nota_aluno_03 +
              _nota_aluno_04) /
            4;

          console.log("A média do aluno é: " + _media_aluno.toFixed(1) + "pts");
          // Fechar a interface após receber a resposta
          rl.close();
        });
      });
    });
  });

}

function atividade2(){
//2. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. Após o aumento, calcule o INSS desse funcionário que é de 8%. mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.
console.log(`Bem-vindo à atividade 2.`);

let _salario_inicial, _salario_reajustado, _salario_final;

r1.question("Qual o Salário do Funcionário? R$", (resposta) => {
  _salario_inicial = parseFloat(resposta);
  _salario_reajustado = _salario_inicial*1.2;
  _salario_final = _salario_reajustado-(_salario_reajustado*0.08);
  console.log("# Salário Inicial do Funcionario: R$"+_salario_inicial.toFixed(2));
});

}

module.exports = {atividade1, atividade2}