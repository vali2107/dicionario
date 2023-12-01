// variáveis html
let palavraIngles = document.querySelector('#palavraIngles')
let audioPalavra = document.querySelector('#audioPalavra')
let classeIngles = document.querySelector('#classeIngles')
let definicaoIngles = document.querySelector('#definicaoIngles')
let audioFrase = document.querySelector('#audioFrase')
let exemploIngles = document.querySelector('#exemploIngles')

let palavraPortugues = document.querySelector('#palavraPortugues')
let classePortugues = document.querySelector('#classePortugues')
let definicaoPortugues = document.querySelector('#definicaoPortugues')
let exemploPortugues = document.querySelector('#exemploPortugues')

const fundo = document.querySelector('#segundoBody')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#closeModal')

let trechoConto = document.querySelector('#conto__trecho')
let setaAbre = document.querySelector('#trecho__abre')
let setaFecha = document.querySelector('#trecho__fecha')

const palavra1 = document.querySelector('#palavraUm')
const palavra2 = document.querySelector('#palavraDois')
const palavra3 = document.querySelector('#palavraTres')
const palavra4 = document.querySelector('#palavraQuatro')
const palavra5 = document.querySelector('#palavraCinco')
const palavra6 = document.querySelector('#palavraSeis')
const palavra7 = document.querySelector('#palavraSete')
const palavra8 = document.querySelector('#palavraOito')
const palavra9 = document.querySelector('#palavraNove')
const palavra10 = document.querySelector('#palavraDez')

// conteúdo modais
const palavras = [ 
    {
        tituloI: 'Hierarchy',
        classeI: 'noun',
        definicaoI: 'A system or organization in which people or groups are ranked one above the other according to status or authority.',
        exemploI: 'Example: In our house, mom is at the top of the hierarchy.',
        tituloP: 'Hierarquia', 
        classeP: 'substantivo feminino',
        definicaoP: 'Organização fundada sobre uma ordem de prioridade entre os elementos de um conjunto ou sobre relações de subordinação entre os membros de um grupo, com graus sucessivos de poderes, de situação e de responsabilidades.',
        exemploP: 'Exemplo: Na nossa casa, a mãe está no topo da hierarquia.',
        arquivoPalavra: './audios/1_Word.mp3',
        arquivoFrase: './audios/1_Sentence.mp3',
        trecho: 'Hoje não é um dia muito bom para Agatha Smith. A anestesista, topo na hierarquia do hospital, descobriu que está com pneumonia. Trabalhando na área da medicina, ela sabe como isso pode ser fatal. Com o psicológico abatido e nenhuma amiga com quem conversar, ela sai para beber e esquecer de tudo por um tempo.'
    },
    {
        tituloI: 'Anesthetist',
        classeI: 'noun',
        definicaoI: 'A medical specialist who administers anesthetics.',
        exemploI: 'Example: She works at the hospital as an anesthetist.',
        tituloP: 'Anestesista', 
        classeP: 'substantivo',
        definicaoP: 'Que ou o que prepara e administra a anestesia (diz-se de profissional); anestesiador.',
        exemploP: 'Exemplo: Ela trabalha no hospital como anestesista.',
        arquivoPalavra: './audios/2_Word.mp3',
        arquivoFrase: './audios/2_Sentence.mp3',
        trecho: 'Hoje não é um dia muito bom para Agatha Smith. A anestesista, topo na hierarquia do hospital, descobriu que está com pneumonia. Trabalhando na área da medicina, ela sabe como isso pode ser fatal. Com o psicológico abatido e nenhuma amiga com quem conversar, ela sai para beber e esquecer de tudo por um tempo.'
    },
    {
        tituloI: 'Gibberish',
        classeI: 'noun',
        definicaoI: 'Unintelligible or meaningless speech or writing; nonsense.',
        exemploI: 'Example: He is always talking gibberish.',
        tituloP: 'Asneira', 
        classeP: 'substantivo feminino',
        definicaoP: 'Ato ou dito tolo ou impensado; bobagem, dislate, tolice.',
        exemploP: 'Exemplo: Ele está sempre falando asneiras.',
        arquivoPalavra: './audios/3_Word.mp3',
        arquivoFrase: './audios/3_Sentence.mp3',
        trecho: '- Pare de falar asneiras, nós não temos nada em comum.'
    },
    {
        tituloI: 'Entertainment',
        classeI: 'noun',
        definicaoI: 'The action of providing or being provided with amusement or enjoyment.',
        exemploI: 'Example: We have a lot of entertainment options out there.',
        tituloP: 'Entretenimento', 
        classeP: 'substantivo masculino',
        definicaoP: 'Ato ou efeito de entreter(-se), de distrair(-se).',
        exemploP: 'Exemplo: Nós temos muitas opções de entretenimento por aí.',
        arquivoPalavra: './audios/4_Word.mp3',
        arquivoFrase: './audios/4_Sentence.mp3',
        trecho: '- Eu sou do mundo do entretenimento, não posso vazar meu nome real, a pouca privacidade que eu tenho terminaria. Então faça a escolha mais sensata e não espalhe. Além disso, eu posso usar o discurso que você estava bêbada no bar e não lembra direito das coisas. As pessoas vão acreditar mais em quem?'
    },
    {
        tituloI: 'Knead',
        classeI: 'verb',
        definicaoI: 'Work (moistened flour or clay) into dough or paste with the hands.',
        exemploI: 'Example: The recipe says you need to knead the dough.',
        tituloP: 'Amassar', 
        classeP: 'verbo',
        definicaoP: 'Transformar em massa ou pasta.',
        exemploP: 'Exemplo: A receita diz que você precisa amassar a massa.',
        arquivoPalavra: './audios/5_Word.mp3',
        arquivoFrase: './audios/5_Sentence.mp3',
        trecho: 'As duas conversam um pouco sobre seu dia e logo pedem as pizzas. Quando olham para a cozinha (visível para os clientes) percebem que vai demorar, já que o chefe estava recém amassando a massa. Elas continuam conversando, até que surge um "clique" em Agatha.'
    },
    {
        tituloI: 'Leicester Square',
        classeI: 'noun',
        definicaoI: 'Pedestrianized square in the West End of London, England.',
        exemploI: 'Example: We need to leave at the Leicester Square Underground Station.',
        tituloP: 'Praça Leicester', 
        classeP: 'substantivo',
        definicaoP: 'Praça exclusiva para pedestres localizada no bairro West End em Londres, Inglaterra.',
        exemploP: 'Exemplo: Nós precisamos sair na estação de metrô Leicester Square.',
        arquivoPalavra: './audios/6_Word.mp3',
        arquivoFrase: './audios/6_Sentence.mp3',
        trecho: 'Agatha vai para um bar perto da praça Leicester, em Londres, que não fica muito longe de sua casa. O lugar não estava muito cheio, mas a música estava boa. Ela já começa a beber e dançar na sua chegada. Como ela costuma frequentar o lugar (sempre que tinha um tempo de seu trabalho), os garçons já a conhecem e sabem as bebidas que ela gosta, então a mulher não precisa nem pedir.'
    },
    {
        tituloI: 'Pneumonia',
        classeI: 'noun',
        definicaoI: 'Lung inflammation caused by bacterial or viral infection, in which the air sacs fill with pus and may become solid. Inflammation may affect both lungs, one lung, or only certain lobes.',
        exemploI: 'Example: He died of pneumonia.',
        tituloP: 'Pneumonia', 
        classeP: 'substativo feminino',
        definicaoP: 'Inflamação dos pulmões, provocada por bactéria ou vírus; pneumonite.',
        exemploP: 'Exemplo: Ele morreu de pneumonia.',
        arquivoPalavra: './audios/7_Word.mp3',
        arquivoFrase: './audios/7_Sentence.mp3',
        trecho: 'Hoje não é um dia muito bom para Agatha Smith. A anestesista, topo na hierarquia do hospital, descobriu que está com pneumonia. Trabalhando na área da medicina, ela sabe como isso pode ser fatal. Com o psicológico abatido e nenhuma amiga com quem conversar, ela sai para beber e esquecer de tudo por um tempo.'
    },
    {
        tituloI: 'Alias',
        classeI: 'noun',
        definicaoI: 'A false or assumed identity.',
        exemploI: 'Example: James is a spy working under the alias Ardolf.',
        tituloP: 'Pseudônimo', 
        classeP: 'substantivo masculino',
        definicaoP: 'Que assina com outro nome que não o seu, civil ou consuetudinário, a sua obra, literária ou de outra qualquer natureza.',
        exemploP: 'Exemplo: James é um espião usando o pseudônimo Ardolf.',
        arquivoPalavra: './audios/8_Word.mp3',
        arquivoFrase: './audios/8_Sentence.mp3',
        trecho: '- Ok, não vou conseguir esconder isso por muito tempo mesmo. Eu sou Chloe, mas é somente um pseudônimo. Bella é meu nome real. Só uso ele para momentos que não estou fazendo coisas relacionadas ao trabalho, como ontem.'
    },
    {
        tituloI: 'Sensible',
        classeI: 'adjective',
        definicaoI: 'Chosen in accordance with wisdom or prudence.',
        exemploI: 'Example: They made some very sensible decisions.',
        tituloP: 'Sensato', 
        classeP: 'adjetivo',
        definicaoP: 'Que age ou pensa com cautela, com prudência; previdente, precavido.',
        exemploP: 'Exemplo: Eles fizeram decisões muito sensatas.',
        arquivoPalavra: './audios/9_Word.mp3',
        arquivoFrase: './audios/9_Sentence.mp3',
        trecho: '- Eu sou do mundo do entretenimento, não posso vazar meu nome real, a pouca privacidade que eu tenho terminaria. Então faça a escolha mais sensata e não espalhe. Além disso, eu posso usar o discurso que você estava bêbada no bar e não lembra direito das coisas. As pessoas vão acreditar mais em quem?'
    },
    {
        tituloI: 'Exquisite',
        classeI: 'adjective',
        definicaoI: 'Extremely beautiful and, typically, delicate.',
        exemploI: 'Example: She has an exquisite face.',
        tituloP: 'Requintado', 
        classeP: 'adjetivo',
        definicaoP: 'Que ou o que demonstra refinamento, apuro; aprimorado, delicado.',
        exemploP: 'Exemplo: Ela tem um rosto requintado.',
        arquivoPalavra: './audios/10_Word.mp3',
        arquivoFrase: './audios/10_Sentence.mp3',
        trecho: 'No dia seguinte, Agatha acorda e vai assistir televisão. Ela estava em um canal de noticiário, e a manchete era: "A atriz Chloe Smith, conhecida por sua beleza requintada, chega hoje na Inglaterra para gravação da nova série da Netflix, na qual ela é a personagem principal". Ela não dá muita importância para a notícia, mas logo aparece uma entrevista com a tal Chloe. Logo ela tem a impressão que já viu aquele rosto antes, mas não dá muita atenção para isso, afinal deve ter visto a atriz em algum filme por aí.'
    },
]

// funções
function fechar() {
    fundo.style.display='none';
    modal.style.display='none';
}
closeModal.addEventListener('click', fechar)

function play(botao, arquivo) {
    const audio = new Audio(arquivo);

    botao.addEventListener('click', function playAudio() {
        audio.load();
        audio.play();

        botao.removeEventListener('click', playAudio);
    });
}

function abrir() {
    trechoConto.style.display='block';
    setaAbre.style.visibility='hidden';
    setaFecha.style.visibility='visible';
}

function conteudo(index) {
    modal.style.display='block';
    fundo.style.display='block';

    palavraIngles.textContent=palavras[index].tituloI;
    classeIngles.textContent=palavras[index].classeI;
    definicaoIngles.textContent=palavras[index].definicaoI;
    exemploIngles.textContent=palavras[index].exemploI;

    palavraPortugues.textContent=palavras[index].tituloP;
    classePortugues.textContent=palavras[index].classeP;
    definicaoPortugues.textContent=palavras[index].definicaoP;
    exemploPortugues.textContent=palavras[index].exemploP;

    abrir()
    trechoConto.textContent=palavras[index].trecho;

    setaFecha.addEventListener('click', () => {
        trechoConto.style.display='none';
        setaAbre.style.visibility='visible';
        setaFecha.style.visibility='hidden';
    })
    setaAbre.addEventListener('click', () => {
        abrir()
    })

    play(audioPalavra, palavras[index].arquivoPalavra)
    play(audioFrase, palavras[index].arquivoFrase)
}

// eventos botões
palavra1.addEventListener('click', () => {conteudo(0)})
palavra2.addEventListener('click', () => {conteudo(1)})
palavra3.addEventListener('click', () => {conteudo(2)})
palavra4.addEventListener('click', () => {conteudo(3)})
palavra5.addEventListener('click', () => {conteudo(4)})
palavra6.addEventListener('click', () => {conteudo(5)})
palavra7.addEventListener('click', () => {conteudo(6)})
palavra8.addEventListener('click', () => {conteudo(7)})
palavra9.addEventListener('click', () => {conteudo(8)})
palavra10.addEventListener('click', () => {conteudo(9)})