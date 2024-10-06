// main.js

const readlineSync = require("readline-sync");
const atividade = require("./atividades"); // Importa a função do arquivo atividades.js

// Função para exibir o menu
const mostrarMenu = () => {
  console.log("\nAtividades:");
  console.log("1. Atividade 1");
  console.log("2. Atividade 2");
  console.log("3. Atividade 3");
  console.log("4. Atividade 4");
  console.log("5. Atividade 5");
  console.log("0. Sair");

  // Usa readline-sync para ler a entrada do usuário de forma síncrona
  let opcao = readlineSync.question("\nEscolha uma opção: ");

  if (opcao == "1") {
    atividade.atividade1();
    mostrarMenu();
  } else if (opcao == "2") {
    atividade.atividade2();
    mostrarMenu();
  } else if (opcao == "3") {
    atividade.atividade3();
    mostrarMenu();
  } else if (opcao == "4") {
    atividade.atividade4();
    mostrarMenu();
  } else if (opcao == "5") {
    atividade.atividade5();
    mostrarMenu();
  } else if (opcao == "0") {
    console.log("Saindo...");
  } else {
    console.log("Opção inválida. Tente novamente.");
    mostrarMenu(); // Mostra o menu novamente
  }
};

// Inicia o menu
mostrarMenu();
