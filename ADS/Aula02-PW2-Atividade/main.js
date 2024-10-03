// main.js

const readline = require('readline');
const ativiade = require('./atividades'); // Importa a função do arquivo atividade1.js

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para exibir o menu
const mostrarMenu = () => {
  console.log('Atividades:');
  console.log('1. Atividade 1');
  console.log('2. Atividade 2');
  console.log('0. Sair');
  rl.question('Escolha uma opção: ', (opcao) => {
    if (opcao === '1') {
      ativiade.atividade1();  
      mostrarMenu();
    }
    if (opcao === '2') {
      ativiade.atividade2();  
      mostrarMenu();
    } else if (opcao === '0') {
      console.log('Saindo...');
      rl.close(); // Fecha a interface
    } else {
      console.log('Opção inválida. Tente novamente.');
      mostrarMenu(); // Mostra o menu novamente
    }
  });
};

// Inicia o menu
mostrarMenu();
