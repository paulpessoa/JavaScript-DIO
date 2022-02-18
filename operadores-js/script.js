let num1 = '';
let num2 = '';
let soma = '';

/*funcao fazTudo (num1, num2) {
  const frase1 = comparaNumero(num1, num2);
  const frase2 = maiorMenor(num1, num2);

  return `${frase1} ${frase2}`;
}*/



function comparaNumero (num1, num2) {
  iguais = ''; 
  if (num1 === num2) {
      console.log("Os números " + num1 + " e " + num2 + "" + iguais + " são iguais.");
        }
      
    else {
        iguais = 'não';
      console.log("Os números " + num1 + " e " + num2 + " " + iguais + " são iguais.");
    };    
}

comparaNumero(1, 2);



/* utilizar esta declaração para a segunda parte*/
var toque = 1 > 5 ? "Sim" : "Não";

console.log(toque);


