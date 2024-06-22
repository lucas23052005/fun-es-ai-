const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "afirmacao"
            }
             ]
    },
    {
         enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
         texto:   "quanto tempo dura uma partida de futebol= 90 minutos divididos em duas parte de 45 minutos",
         afirmacao: "afirmacao"
         
        },
        { 
          texto:"quando foi realizada a primeira copa do mundo de futebol= em13 de julho de 1930 no uruguai",
            afirmacao:"afirmacao"
         }
       ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                 texto: "qual tme de futebol ganhou mais copas do mundo = brasl 5",
                 afirmacao: "afirmacao"
        }, 
        {

            texto: "quantos jogadores um time de futebol tem =11", 
            afirmacao:"afirmacao" 
           }, 
       
    
        ] 
    
    
    }
]
let atual = 0;
let perguntaAtual;
let historiaFinal="";
function mostraPergunta() {
if(atual>=perguntas.length){
mostraResultado();
return;

}    
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent="";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", ()=>repostaselecionadd(alternativa))
             caixaAlternativas.appendChild(botaoAlternativas);
             
    }
}
 function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = +afirmacoes + "";
    atual++;
    mostraPergunta();
}
function mostraResultado(){
caixaPerguntas.textContent="Em 2049...";
textoResultado.textContent=historiaFinal;
caixaAlternativas.textContent="";


}
mostraPergunta(); 

