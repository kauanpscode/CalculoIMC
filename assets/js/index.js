const form = document.querySelector('.form');
const result = document.querySelector('.result');
const peso_pessoa_str = document.querySelector('#peso_pessoa')
const altura_pessoa_str = document.querySelector('#altura_pessoa')

function button01(){
    const peso_pessoa_float = parseFloat(peso_pessoa_str.value);
    const altura_pessoa_float = parseFloat(altura_pessoa_str.value);
    const IMC = (peso_pessoa_float) / (altura_pessoa_float)**2;
    const IMC_tratado = IMC.toFixed(2)
    result.innerHTML = ''

    
    if (altura_pessoa_str.value.length <= 0 && peso_pessoa_str.value.length <= 0){
        result.innerHTML = `Você precisa preencher todos os campos!`
        result.style.backgroundColor = 'rgba(255, 0, 0, 0.188)'
    } else if(peso_pessoa_str.value.length <= 0){
        result.innerHTML = `Você precisa preencher todos os campos! </br> O campo Peso (Em Kg) está em branco!`
        result.style.backgroundColor = 'rgba(255, 0, 0, 0.188)'

    } else if (altura_pessoa_str.value.length <= 0){
        result.innerHTML = `Você precisa preencher todos os campos! </br> O campo Altura (Em metros) está em branco!`}
    else {
        if(IMC_tratado < 18.5){
            result.innerHTML = `Seu IMC é igual a ${IMC_tratado}, sendo assim você está abaixo do peso.`
        }
        else if (IMC_tratado >= 18.5 && IMC_tratado <= 24.9){
            result.innerHTML = `Seu IMC é igual a ${IMC_tratado}, sendo assim, você está com o peso normal!`
        }
        else if (IMC_tratado >= 25 && IMC_tratado <= 29.9){
            result.innerHTML = `Seu IMC é igual a ${IMC_tratado}, sendo assim, você está com o sobrepeso!`
        }
        else if (IMC_tratado >= 30 && IMC_tratado <= 34.9){
            result.innerHTML = `Seu IMC é igual a ${IMC_tratado}, sendo assim, você está com Obesidade grau 1!`
        }
        else if (IMC_tratado >= 35 && IMC_tratado <= 39.9){
            result.innerHTML = `Seu IMC é igual a ${IMC_tratado}, sendo assim, você está com Obesidade grau 2!`
        }
        else if (IMC_tratado > 40){
            result.innerHTML = `Seu IMC é igual a ${IMC_tratado}, sendo assim, você está com Obesidade grau 3!`
        }
        else {
            result.innerHTML = 'Deu ruim...'
        }
    }

}

function recebeEventoForm(evento){
    evento.preventDefault();

}
form.addEventListener('submit', recebeEventoForm)
