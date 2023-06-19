const controle = document.querySelectorAll("[data-controle]")

const estatistica = document.querySelectorAll("[data-estatisticas]")
//console.log(estatistica)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -13,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 78,
        "energia": 0,
        "velocidade": 5
    },
    "nucleos": {
        "forca": 76,
        "poder": -21,
        "energia": 32,
        "velocidade": 9
    },
    "pernas": {
        "forca": 65,
        "poder": 67,
        "energia": -11,
        "velocidade": -2
    },
    "foguetes": {
        "forca": 42,
        "poder": -4,
        "energia": 24,
        "velocidade": 1
    }

}

controle.forEach ((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })   
})



function manipulaDados(operadores, controle) {
    const peca = controle.querySelector("[data-contador]")  

    if(operadores === "-") {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    estatistica.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + 
        pecas[peca] [elemento.dataset.estatisticas]
    })
}




/* 

*para passar mais de um parametro é só usar a vírgula*

Atributo- é um valor de dado assumido pelos objetos de uma classe.

DOM- Document Object Model (Documento, Objeto e Modelo)

parentNode- é a propriedade que retorna o nó(node) pai de um elemento ou nó(node).

*NodeList- As funções que acessam e selecionam elementos HTML em um página web retornam sempre um conjunto de elementos*

**EXPLICAÇÃO SOBRE O QUE É UM NÓ (NODE)**
O " DOM "é uma estrutura de árvore que representa o HTML do site, e cada elemento HTML é um"nó". 
Mais especificamente, " nó "é uma interface que é implementada por vários outros objetos, incluindo" documento "e"elemento". 
Todos os objetos que implementam a interface " nó " podem ser tratados da mesma forma. 
O termo "nó" (no contexto do DOM) significa qualquer objecto que implementa a interface "nó". 
Mais comumente é um objeto elemento que representa um elemento HTML.

O forEach()- é um método que chama uma função para cada elemento em uma matriz.
não é executado para elementos vazios.
Chama uma função para cada elemento


target- propriedade retorna o elemento onde ocorreu o evento.

document.querySelector- retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, 
pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

O método querySelector()- retorna o primeiro elemento filho que corresponde a um seletornCSS especificado de um elemento.
esse método retorna apenas o primeiro elemento que corresponde aos seletores especificados.
Para retornar todas as correspondências, use o método querySelectorAll() .

querySelectorAll()- recebe um argumento de string contendo um seletor CSS e retorna 
um objeto NodeList representando os elementos do documento que correspondem ao seletor. 
Se nenhum elemento coincide, a função retorna um objeto NodeList vazio.

addEventListener- permite que você configure funções a serem chamadas quando um evento específico acontece, clica e realiza uma ação 
clica e executa

const- A declaração const cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura.
Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
Toda constante requer um inicializador, ou seja, é preciso especificar um valor para a constante no momento em que ela é declarada 

() => - sempre que for usar esses sinais pensar que tem uma função no lugar de "function"

evento- quando coloca "evento", ele é capaz de manipular alguns eventos da página
quando coloca na parte do console, ele mostra os comandos que da pra fazer


Atributo da classe- São propriedades semelhantes que os objetos de uma classe possuem. 
Ex-"João da Silva" além do nome, também é caracterizado por outros atributos, endereço, número do contribuinte, CPF, etc. 
Cada atributo permite definir um intervalo de valores que as instâncias dessa propriedade podem apresentar.
*/