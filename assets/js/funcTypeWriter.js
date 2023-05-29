let texts = ['resultados.', 'inovação.', 'pessoas.', 'mobilidade.']; // textos pré-definidos
let heading = document.querySelector(".title--animated"); // referencia do elemento
//sortear um dos textos
function sortNumber(texts) { // sorteia um numero qualquer
    numberRand = Math.floor(Math.random() * texts.length);
    return numberRand;
}
function typeWriter(element) { // referencia h1 do html5 
    let textSort = ' ' + texts[sortNumber(texts)];
    for (let index = 0; index < textSort.length; index++) {
        setTimeout(() => {
            element.innerHTML += textSort[index];
        }, 200 * index);
    }
    retypeWriter(element)
}
//executo a função trocando o texto a cada 10s 
setInterval(() => {
    typeWriter(heading);
}, 10000);
//primeira execução

typeWriter(heading);

// mais tempo para resolver isso
function retypeWriter(element) {
    setTimeout(() => {
        const words = element.innerHTML.split(' '); // separo o elemento e um array de palavras
        const ultimaPalavra = words[2] + ' '; // coloco um espaço no final da ultima palavra
        const arrayUltimaPalavra = ultimaPalavra.split(''); // transformo a palavra em um array de letras
        for (let index = 0; index < arrayUltimaPalavra.length; index++) {
            setTimeout(() => {
                element.innerHTML = element.innerHTML.slice(0, -1);
            }, 200 * index);
        }
    }, 5000) //Após 3 segundos a função é executada.

}