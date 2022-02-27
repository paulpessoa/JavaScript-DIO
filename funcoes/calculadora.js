function calculadora() {
  const operacao = prompt(
    "escolha uma operação: \n 1 - Soma(+)\n 2 - Subtrai (-)\n 3 - Multiplica (*)\n 4 - Divide Real (/)\n 5 - Divide Inteiro (%)\n 6 - Potencia (**)"
  );

  if (!operacao || operacao >= 7 || operacao <= 0) {
    alert("Erro - Operação Inválida");
    calculadora();
  } else {
    let n1 = Number(prompt("insira o primeiro valor: "));
    let n2 = Number(prompt("insira o segungo valor: "));
    let resultado;

    


    //funcao somar//
    function soma() {
      resultado = n1 + n2;
      alert(`${n1} + ${n2} = ${resultado}`);
      novaOperacao();
    }

    //funcao somar//
    function subtrai() {
      resultado = n1 - n2;
      alert(`${n1} - ${n2} = ${resultado}`);
      novaOperacao();
    }

    //funcao somar//
    function multiplica() {
      resultado = n1 * n2;
      alert(`${n1} * ${n2} = ${resultado}`);
      novaOperacao();
    }

    //funcao somar//
    function divideReal() {
      resultado = n1 / n2;
      alert(`${n1} / ${n2} = ${resultado}`);
      novaOperacao();
    }

    //funcao somar//
    function divideInteiro() {
      resultado = n1 % n2;
      alert(`${n1} % ${n2} = ${resultado}`);
      novaOperacao();
    }

    //funcao somar//
    function potencia() {
      resultado = n1 ** n2;
      alert(`${n1} ^ ${n2} = ${resultado}`);
      novaOperacao();
    }

    //funcao somar//
    function novaOperacao() {
      let opcao = prompt("deseja fazer outra operação?\n 1 - sim\n 2 - não");

      if (opcao == 1) {
        calculadora();
      } else if (opcao == 2) {
        alert("ale logo!");
      } else {
        alert("digite uma opção válida");
        novaOperacao();
      }
    }

    if (operacao == 1) {
      soma();
    } else if (operacao == 2) {
      subtrai();
    } else if (operacao == 3) {
      multiplica();
    } else if (operacao == 4) {
      divideReal();
    } else if (operacao == 5) {
      divideInteiro();
    } else if (operacao == 6) {
      potencia();
    }
  }
}
calculadora();
