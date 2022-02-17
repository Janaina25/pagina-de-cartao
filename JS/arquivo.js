const INPUT_NUMERO = document.getElementById('numero');
const INPUT_TITULAR = document.getElementById('titular');
const INPUT_CPF = document.getElementById('cpf');
const INPUT_CVV = document.getElementById('cvv');
const SELECT_MES = document.getElementById('mes');
const SELECT_ANO = document.getElementById('ano');

const CARD_NUMERO = document.getElementById('card-numero');
const CARD_TITULAR = document.getElementById('card-titular');
const CARD_BANDEIRA = document.getElementById('card-bandeira');
const CARD_CVV = document.getElementById('card-cvv');
const CARD_MES = document.getElementById('card-mes');
const CARD_ANO = document.getElementById('card-ano');

const CARD_FRENTE = document.getElementById('card-frente');
const CARD_VERSO = document.getElementById('card-verso');

function mostrarFrente () {
    CARD_VERSO.classList.add('d-none');
    CARD_FRENTE.classList.remove('d-none');
    CARD_FRENTE.classList.add('animate__flipInY');
}
  
function mostrarVerso () {
    CARD_FRENTE.classList.add('d-none');
    CARD_VERSO.classList.remove('d-none');
    CARD_VERSO.classList.add('animate__flipInY');
}


INPUT_NUMERO.addEventListener('keyup', function (){
    CARD_NUMERO.innerHTML = INPUT_NUMERO.value;

    let primeiroDigito = INPUT_NUMERO.value.split('')[0];

   let bandeiras = {
       4: '<img src="imagem/visa.png" width="60px">',
       5: '<img src="imagem/mastercard.png" width="60px">',
       3: 'AMEX',
       6: 'DISCOVER',
       7: 'GOOGLE',
       8: 'OUTROS',
       9: 'IWTRAINING',
};
    CARD_BANDEIRA.innerHTML = bandeiras[primeiroDigito] || 'OUTROS';
} );


INPUT_TITULAR.addEventListener('keyup', function () {
    CARD_TITULAR.innerHTML = INPUT_TITULAR.value;
});

INPUT_CVV.addEventListener('keyup', function () {
    CARD_CVV.innerHTML = INPUT_CVV.value;

    

});

SELECT_MES.addEventListener('change', function () {
    if (SELECT_MES.value <= 9) {
        CARD_MES.innerHTML = "0" + SELECT_MES.value;
      } else {
        CARD_MES.innerHTML = SELECT_MES.value;
      }

});

SELECT_ANO.addEventListener('change', function () {
    CARD_ANO.innerHTML = SELECT_ANO.value.substr(-2);
});



let meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

meses.map(function (cadaMes, posicao) {
    SELECT_MES.innerHTML += `<option value="${posicao+1}">${cadaMes}</option>`;
});
  
  for (let ano = 2022; ano <= 2030; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}


 




  
 



