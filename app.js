const btnSortear = document.getElementById('btnSortear');
const btnReiniciar = document.getElementById('btnReiniciar');

// função de sortear
function sortear(){
    // Referencia o HTML e faz o serteio
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    //declaração de array para guardar numeros sorteados
    let numero = 0
    let sorteados = [];   

    // Laço de repetição para sortear conforme a quantidade inserida
    // pelo usuario
     for(let i =  0 ; i<quantidade; i++){
        numero = (obterNumeroAleatorio(de, ate));
        
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
    //Numero incluido no array
    sorteados.push(numero);
    }
    //peguei a tag e editei todo o conteudo da tag
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(' - ')} </label>`
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min )) + min;
}

btnSortear.addEventListener('click', sortear);


