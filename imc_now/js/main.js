const dados = document.querySelector('#forms');

dados.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputPeso = event.target.querySelector('#peso');
    const inputAltura = event.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso || peso >= 400) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválido', false);
        return;
    }

    const imc = getImc(peso, altura);

    const classeImc = getClasseImc(imc);

    const mensagem = ('O seu IMC é ${imc} (${classeImc}).');

    setResultado(mensagem, true);
});

function getClasseImc(imc) {
    const classeImc = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return classeImc[5]
    if (imc >= 34.9) return classeImc[4]
    if (imc >= 29.9) return classeImc[3]
    if (imc >= 24.9) return classeImc[2]
    if (imc >= 18.5) return classeImc[1]
    if (imc < 19.5) return classeImc[0]
}

function getImc(peso, altura) {
    const imc = peso / (altura = altura);
    return imc.toFixed(2);
}

function setResultado(mensagem, isValido) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP();

    isValido ? p.classList.add('fraseOk') : p.classList.add('fraseNo')

    p.innerHTML = mensagem;
    resultado.appendChild(p);
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

forms.addEventListener('reset', function() {
    const limpa = document.querySelector('#resultado');
    limpa.innerHTML = '';
})