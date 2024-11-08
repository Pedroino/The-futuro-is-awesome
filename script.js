const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quantos litros de sangue uma pessoa tem?",
        alternativas: [
            "Tem entre 2 a 4 litros de sangue",
            "Tem entre 4 a 6 litros de sangue"
        ],
        correta: 1
    },
    {
        enunciado: "De quem é a famosa frase 'Penso, logo existo'?",
        alternativas: [
            "Descartes",
            "Platão"
        ],
        correta: 0
    },
    {
        enunciado: "De onde é a invenção do chuveiro elétrico?",
        alternativas: [
            "Inglaterra",
            "Brasil"
        ],
        correta: 1
    },
    {
        enunciado: "Quais o menor e maior país do mundo?",
        alternativas: [
            "São Marino e Índia",
            "Vaticano e Rússia"
        ],
        correta: 1
    },
    {
        enunciado: "Qual o livro mais vendido no mundo a seguir à Bíblia?",
        alternativas: [
            "O Senhor dos Anéis",
            "Dom Quixote"
        ],
        correta: 1
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0;

function mostrarPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores

    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement("button");
