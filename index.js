// função que retorna as vitorias e derrotas
function vitoriasDerrotas(vitoria,derrota){
    let resultado = vitoria - derrota;
    return resultado;
}

// variavel que pega os valores de derrota e vitória
let SaldoVitorias = vitoriasDerrotas(60,30);

// variavel que recebe o valor do nivel no final do switch
let nivel = "";

switch(true){

    case(SaldoVitorias < 10):
    nivel = "Ferro";
    break

    case(SaldoVitorias >= 11 && SaldoVitorias <= 20):
    nivel = "Bronze";
    break

    case(SaldoVitorias >= 21 && SaldoVitorias <= 50):
    nivel = "Prata";
    break

    case(SaldoVitorias >= 51 && SaldoVitorias <= 80):
    nivel = "Ouro";
    break

    case(SaldoVitorias >= 81 && SaldoVitorias <= 90):
    nivel = "Diamante";
    break

    case(SaldoVitorias >= 91 && SaldoVitorias <= 100):
    nivel = "Lendário";
    break

    case(SaldoVitorias >= 101):
    nivel = "Imortal";
    break
}

console.log(`O Herói tem o saldo de ${SaldoVitorias} e está no nível ${nivel}`);