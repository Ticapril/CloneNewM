//Accordion
const accordion = document.querySelector('[data-js="accordion"]'); // armazeno a referencia do dataset accordion
const closeAccordionItem = accordionHeaderToBeClosed => {
    const accordionHeaderId = accordionHeaderToBeClosed.dataset.accordionHeader;
    const accordionDataToBeClosed =
        document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`);
    console.log(accordionDataToBeClosed);

    accordionHeaderToBeClosed.classList.remove("active");
    accordionDataToBeClosed.classList.remove('active');
}
const handleAccordionClick = event => {
    const accordionHeaderId = event.target.dataset.accordionHeader; // busco o valor da propriedade accordion-header do objeto 
    const accordionDataToBeOpened = document.querySelector(`[data-accordion-body="${accordionHeaderId}"]`); // armazeno a referencia da div que deve ser exibida
    const clickedAccordionHeader = document.querySelector(`[data-accordion-header="${accordionHeaderId}"`); // armazeno uma referencia dos elementos clicados

    console.log('-------Array Sem Filtro-----');
    console.log(Array.from(document.querySelectorAll(`[data-js="accordion-header"]`)));
    console.log("-----Array Filtra Todos os clicados-----");
    console.log(Array.from(document.querySelectorAll(`[data-js="accordion-header"]`)).filter(accordionHeader => accordionHeader === clickedAccordionHeader));

    console.log('------Array Filtrado-----'); // filtra para mim todos os accordionHeaders que não foram clicados
    console.log(Array.from(document.querySelectorAll(`[data-js="accordion-header"]`)).filter(accordionHeader => accordionHeader !== clickedAccordionHeader));

    // primeira ocorrencia vai dar undefined
    // segunda ocorrencia vai retornar o penultimo elemento a ser clicado
    console.log("-----Filtrando somentes os Accordions com uma classe especifica------");
    console.log(Array.from(document.querySelectorAll(`[data-js="accordion-header"]`)).filter(accordionHeader => accordionHeader !== clickedAccordionHeader).find(accordionHeader => accordionHeader.classList.contains('active')));
    const accordionHeaderToBeClosed = Array
        .from(document.querySelectorAll(`[data-js="accordion-header"]`))
        .filter(accordionHeader => accordionHeader !== clickedAccordionHeader)
        .find(accordionHeader => accordionHeader.classList.contains('active'));
    if (!event.target.dataset.accordionHeader) {
        return;
    }
    if (accordionHeaderToBeClosed) {
        closeAccordionItem(accordionHeaderToBeClosed);
    }
    clickedAccordionHeader.classList.toggle("active");
    accordionDataToBeOpened.classList.toggle('active');
    // Obter a referencia de todos os botões clicados
}
accordion.addEventListener("click", handleAccordionClick);