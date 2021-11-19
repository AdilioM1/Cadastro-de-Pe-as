var listadepecas = ["filtro de ar", "motor", "amortecedor"]

if (listadepecas.length <10) {
    console.log("É possivel cadastrar mais peças.");
} else{
    console.log("Não tem mais espaço nessa lista, impossível cadastrar.");
}

let peso = 150;

if (peso <100) {
    console.log("A peça deve pesar no mínimo 100g.")
} else{
    console.log("A peça esta com o peso adequado.")
}

let nomepeca= "";

// = -> Atribuição de valor, ler como RECEBE
// == -> Verificação se os valores são iguais, ler como, É IGUAL ?
// === -> Verificação se o valor é igual e também o tipo do valor, verifica valor é tipo.

if (nomepeca.length > 3) {
    console.log("Nome da peça esta adequado para ser cadastrado.")
} else if(nomepeca.length == 0){
    console.log("O nome da peça não pode ser vazio!");
} else{
    console.log("O nome deve ter mais de três caracteres, digite um nome adequado.")
}

switch (nomepeca.length) {
    case 0:
        console.log("O nome da peça não pode ser vazio.")
        break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais de três caracteres, digite um nome adequado.")

    default: 
        console.log("Nome da peça está adequado para o cadastro.")
    break;
}

