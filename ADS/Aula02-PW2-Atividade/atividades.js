const readlineSync = require("readline-sync");
const atividades = require("./atividades"); // Importa a função do arquivo atividades.js

function atividade1() {
  //1. Criar 4 variáveis para receber as notas de um aluno, calcular e mostrar a média desse aluno.
  console.log(`\nBem-vindo à atividade 1.`);

  let _nota_aluno_01 = parseInt(
    readlineSync.question("Qual é a primeira nota do aluno? ")
  );
  let _nota_aluno_02 = parseInt(
    readlineSync.question("Qual é a segunda nota do aluno? ")
  );
  let _nota_aluno_03 = parseInt(
    readlineSync.question("Qual é a terceira nota do aluno? ")
  );
  let _nota_aluno_04 = parseInt(
    readlineSync.question("Qual é a quarta nota do aluno? ")
  );

  let _media_aluno =
    (_nota_aluno_01 + _nota_aluno_02 + _nota_aluno_03 + _nota_aluno_04) / 4;

  console.log("A média do aluno é: " + _media_aluno.toFixed(1) + " pts");
}

function atividade2() {
  //2. Crie uma variável para receber o salário de um funcionário e aumentá-lo em 20%. Após o aumento, calcule o INSS desse funcionário que é de 8%. mostre o salário inicial, o salário com o aumento e o desconto do INSS o salário final.
  console.log(`\nBem-vindo à atividade 2.`);

  let _salario_inicial = parseFloat(
    readlineSync.question("Qual o Salário do Funcionário? R$ ")
  );
  let _salario_reajustado = _salario_inicial * 1.2;
  let _salario_final = _salario_reajustado - _salario_reajustado * 0.08;

  console.log(
    "# Salário Inicial do Funcionário: R$" + _salario_inicial.toFixed(2)
  );
  console.log("# Salário Reajustado: R$" + _salario_reajustado.toFixed(2));
  console.log(
    "# Salário Final com desconto do INSS: R$" + _salario_final.toFixed(2)
  );
}

function atividade3() {
  //3. Faça um algoritmo que receba a matrícula e duas notas do aluno. Calcular a média e mostrar a matrícula do aluno com as seguintes mensagens de acordo com os dados a seguir: Fazer um vetor de objeto de aluno. O objeto aluno deve ter nome, nota1 e nota2. Ao final mostre a média geral dos alunos.

  console.log(`\nBem-vindo à atividade 3.`);

  let lista_aluno = [];

  function situacao_Aluno(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    if (media > 7) {
      return "Aprovado";
    } else if (media == 7) {
      return "Recuperação";
    } else {
      return "Reprovado";
    }
  }

  let quest = "S";
  while (quest.toUpperCase() === "S" || quest.toUpperCase() === "SIM") {
    let matricula = readlineSync.question("\nQual a Matrícula do Aluno? ");
    let nota1 = parseFloat(readlineSync.question("Qual a Nota 1 do Aluno? "));
    let nota2 = parseFloat(readlineSync.question("Qual a Nota 2 do Aluno? "));

    lista_aluno.push({ matricula, nota1, nota2 });

    quest = readlineSync.question("Deseja adicionar outro aluno? (S/N): ");
  }

  console.log("Lista dos Alunos:");
  lista_aluno.forEach((aluno) => {
    console.log(
      `Matrícula: ${aluno.matricula} | Situação: ${situacao_Aluno(
        aluno.nota1,
        aluno.nota2
      )}`
    );
  });
}

function atividade4() {
  //4. Uma fábrica de camisetas produz os tamanhos pequeno, médio e grande, cada uma sendo vendida respectivamente por 10, 12 e 15 reais. Construa um algoritmo em que o usuário forneça a quantidade de camisetas pequenas, médias e grandes referentes a uma venda, e a máquina informe quanto será o valor arrecadado.
  console.log("Bem vindo á Atividade 4");

  let qt_camisas_pequena = parseInt(
      readlineSync.question("Digite a Quantidade de camisas pequenas: ")
    ),
    qt_camisas_media = parseInt(
      readlineSync.question("Digite a Quantidade de camisas medias: ")
    ),
    qt_camisas_grande = parseInt(
      readlineSync.question("Digite a Quantidade de camisas grandes: ")
    );

  let total_recebido =
    qt_camisas_pequena * 10 + qt_camisas_media * 12 + qt_camisas_grande * 15;

  console.log(`O Valor Arrecadado é: R$ ${total_recebido.toFixed(2)}`);
}

function atividade5() {
  //5. Três amigos, Carlos, André e Felipe. decidiram rachar igualmente a conta de um bar. Faça um algoritmo para ler o valor total da conta e imprimir quanto cada um deve pagar, mas faça com que Carlos e André não paguem centavos. Ex: uma conta de R$101,53 resulta em R$33,00 para Carlos, R$33,00 para André e R$35,53 para Felipe.
  console.log(`\nBem-vindo à atividade 5.`);

  let total_conta = parseFloat(
    readlineSync.question("Qual o Valor Total da Conta? R$ ")
  );

  let pagamento_carlos = parseInt(total_conta / 3);
  let pagamento_andre = parseInt(total_conta / 3);

  let pagamento_felipe = total_conta - parseFloat(pagamento_carlos + pagamento_andre);

  console.log(`Carlos Deve Pagar: R$ ${pagamento_carlos.toFixed(2)}`);
  console.log(`André Deve Pagar: R$ ${pagamento_andre.toFixed(2)}`);
  console.log(`Felipe Deve Pagar: R$ ${pagamento_felipe.toFixed(2)}`);
}

module.exports = { atividade1, atividade2, atividade3, atividade4, atividade5 };
