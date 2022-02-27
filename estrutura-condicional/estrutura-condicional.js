var jogador1 = 5;
var jogador2 = 1;
var placar = 0;

if(jogador1 !== -1) {
    console.log('diferemte de -1')
    if (jogador1 > 0) {
        console.log('jogador 1 marcou ponto!');
    } else if (jogador2 > 0) {
        console.log('jogador2 marcou ponto')
    } else {
        console.log('ninguem marcou ponto')
    }
} else {
    console.log('eita')
};

jogador1 !== -1 && jogador2 !== -1 ? console.log('diferente') : console.log('igual');


switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('jogador 2 ganhou');
        break;
    default:
    console.log('ninguem ganhou');
};
