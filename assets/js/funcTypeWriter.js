let textBase = 'Tecnologia e';
let texts = ['resultados.', 'inovação.', 'pessoas.', 'mobilidade.']
//sortear um dos textos
function sortNumber(texts) {
    numberRand = Math.floor(Math.random() * texts.length);
    return numberRand;
}
let heading = document.querySelector(".title--animated");
function typeWriter(element) {
    element.innerHTML += ' ' + texts[sortNumber(texts)];
    const arrayText = element.innerHTML.split('');
    element.innerHTML = '';
    let count = 0;
    arrayText.forEach(letter => {
        setTimeout(() => {
            element.innerHTML += letter;
        }, 200 * count);
        count++;
    });
    return element.innerHTML;
}
typeWriter(heading);

// mais tempo para resolver isso
// function retypeWriter() {
//   const timeout = setTimeout(function () {
//     let count = 0;
//     let texto = document.querySelector('.title--animated');
//     const arrayTexts = texto.innerHTML.split('');
//     console.log(arrayTexts);
//     console.log(arrayTexts.length > 11);
//     while (arrayTexts.length > 12) {
//       arrayTexts.pop();
//     }
//     console.log(arrayTexts);
//   }, 5000) //Após 3 segundos a função é executada.
// }
// retypeWriter()
// const testando = document.querySelector('.title--animated');
// console.log(testando.innerHTML);