// let numero1, numero2, soma, subtracao, multiplicacao, divisao;

// numero1 = Number(prompt("Digite o primeiro numero"));
// numero2 = Number(prompt("Digite o segundo numero"));

// soma = numero1 + numero2;
// subtracao = numero1 - numero2;
// multiplicacao = numero1 * numero2;
// divisao = numero1 / numero2;

// alert(`A soma entre ${numero1} + ${numero2} = ${soma}
// A soma entre ${numero1} - ${numero2} = ${subtracao}
// A soma entre ${numero1} . ${numero2} = ${multiplicacao}
// A soma entre ${numero1} : ${numero2} = ${divisao}`);


let n1 ,n2, resultado, operacao, escolha;

n1 = Number(prompt("Digite o primeiro numero"));
n2 = Number(prompt("Digite o segundo numero"));
operacao = (prompt("Escolha a operação desejada [+,-,*,/]"));

if (operacao === '+'){
    resultado = n1 + n2;
    escolha = 'soma'
}

if (operacao === '-'){
    resultado = n1 + n2;
    escolha = 'subtracao'
}

if (operacao === '*'){
    resultado = n1 + n2;
    escolha = 'multiplicacao'
}

if (operacao === '/'){
    resultado = n1 + n2;
    escolha = 'divisao'
}

alert(`A ${escolha} de ${n1} ${operacao} ${n2} = ${resultado}`);
