let palavraIngles = document.querySelector('#palavraIngles')
let audioIngles = document.querySelector('#audioIngles')
let classeIngles = document.querySelector('#classeIngles')
let definicaoIngles = document.querySelector('#definicaoIngles')
let exemploIngles = document.querySelector('#exemploIngles')

let palavraPortugues = document.querySelector('#palavraPortugues')
let audioPortugues = document.querySelector('#audioPortugues')
let classePortugues = document.querySelector('#classePortugues')
let definicaoPortugues = document.querySelector('#definicaoPortugues')
let exemploPortugues = document.querySelector('#exemploPortugues')

const fundo = document.querySelector('#segundoBody')
const modal = document.querySelector('#modal')
const closeModal = document.querySelector('#closeModal')

function fechar() {
    fundo.style.display='none';
    modal.style.display='none';
}
closeModal.addEventListener('click', fechar)


const palavra1 = document.querySelector('#palavraUm')
palavra1.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Hierarchy';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='A system or organization in which people or groups are ranked one above the other according to status or authority.';
    exemploIngles.textContent='Example: In our house, mom is at the top of the hierarchy.';

    palavraPortugues.textContent='Hierarquia';
    classePortugues.textContent='substantivo feminino';
    definicaoPortugues.textContent='Organização fundada sobre uma ordem de prioridade entre os elementos de um conjunto ou sobre relações de subordinação entre os membros de um grupo, com graus sucessivos de poderes, de situação e de responsabilidades.';
    exemploPortugues.textContent='Exemplo: Na nossa casa, a mãe está no topo da hierarquia.';

    const audio1_1 = new Audio('./audios/1_Word.mp3')
    audioIngles.addEventListener('click', (e) =>{
        audio1_1.load();
        audio1_1.play();
    })
    const audio1_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio1_2.load();
        audio1_2.play();
    })
})


const palavra2 = document.querySelector('#palavraDois')
palavra2.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Anesthetist';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='A medical specialist who administers anesthetics.';
    exemploIngles.textContent='Example: She works at the hospital as an anesthetist.'

    palavraPortugues.textContent='Anestesista';
    classePortugues.textContent='substantivo';
    definicaoPortugues.textContent='Que ou o que prepara e administra a anestesia (diz-se de profissional); anestesiador.';
    exemploPortugues.textContent='Exemplo: Ela trabalha no hospital como anestesista.';

    const audio2_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio2_1.load();
        audio2_1.play();
    })
    const audio2_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio2_2.load();
        audio2_2.play();
    })
})


const palavra3 = document.querySelector('#palavraTres')
palavra3.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';

    palavraIngles.textContent='Gibberish';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='Unintelligible or meaningless speech or writing; nonsense.';
    exemploIngles.textContent='Example: He is always talking gibberish.'

    palavraPortugues.textContent='Asneira';
    classePortugues.textContent='substantivo feminino';
    definicaoPortugues.textContent='Ato ou dito tolo ou impensado; bobagem, dislate, tolice.';
    exemploPortugues.textContent='Exemplo: Ele está sempre falando asneiras.';

    const audio3_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio3_1.load();
        audio3_1.play();
    })
    const audio3_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio3_2.load();
        audio3_2.play();
    })
})


const palavra4 = document.querySelector('#palavraQuatro')
palavra4.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Entertainment';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='The action of providing or being provided with amusement or enjoyment.';
    exemploIngles.textContent='Example: We have a lot of entertainment options out there.'

    palavraPortugues.textContent='Entretenimento';
    classePortugues.textContent='substantivo masculino';
    definicaoPortugues.textContent='Ato ou efeito de entreter(-se), de distrair(-se).';
    exemploPortugues.textContent='Exemplo: Nós temos muitas opções de entretenimento por aí.';

    const audio4_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio4_1.load();
        audio4_1.play();
    })
    const audio4_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio4_2.load();
        audio4_2.play();
    })
})


const palavra5 = document.querySelector('#palavraCinco')
palavra5.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Knead';
    classeIngles.textContent='verb';
    definicaoIngles.textContent='Work (moistened flour or clay) into dough or paste with the hands.';
    exemploIngles.textContent='Example: The recipe says you need to knead the dough.'

    palavraPortugues.textContent='Amassar';
    classePortugues.textContent='verbo';
    definicaoPortugues.textContent='Transformar em massa ou pasta.';
    exemploPortugues.textContent='Exemplo: A receita diz que você precisa amassar a massa.';

    const audio5_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio5_1.load();
        audio5_1.play();
    })
    const audio5_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio5_2.load();
        audio5_2.play();
    })
})


const palavra6 = document.querySelector('#palavraSeis')
palavra6.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Leicester Square';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='Pedestrianized square in the West End of London, England.';
    exemploIngles.textContent='Example: We need to leave at the Leicester Square Underground Station.'

    palavraPortugues.textContent='Leicester Square';
    classePortugues.textContent='substantivo';
    definicaoPortugues.textContent='Praça exclusiva para pedestres localizada no bairro West End em Londres, Inglaterra.';
    exemploPortugues.textContent='Exemplo: Nós precisamos sair na estação de metrô Leicester Square.';

    const audio6_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio6_1.load();
        audio6_1.play();
    })
    const audio6_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio6_2.load();
        audio6_2.play();
    })
})


const palavra7 = document.querySelector('#palavraSete')
palavra7.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Pneumonia';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='Lung inflammation caused by bacterial or viral infection, in which the air sacs fill with pus and may become solid. Inflammation may affect both lungs, one lung, or only certain lobes.';
    exemploIngles.textContent='Example: He died of pneumonia.'

    palavraPortugues.textContent='Pneumonia';
    classePortugues.textContent='substativo feminino';
    definicaoPortugues.textContent='Inflamação dos pulmões, provocada por bactéria ou vírus; pneumonite.';
    exemploPortugues.textContent='Exemplo: Ele morreu de pneumonia.';

    const audio7_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio7_1.load();
        audio7_1.play();
    })
    const audio7_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio7_2.load();
        audio7_2.play();
    })
})


const palavra8 = document.querySelector('#palavraOito')
palavra8.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Alias';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='A false or assumed identity.';
    exemploIngles.textContent='Example: James is a spy working under the alias Ardolf.'

    palavraPortugues.textContent='Pseudônimo';
    classePortugues.textContent='substantivo masculino';
    definicaoPortugues.textContent='Que assina com outro nome que não o seu, civil ou consuetudinário, a sua obra, literária ou de outra qualquer natureza.';
    exemploPortugues.textContent='Exemplo: James é um espião usando o pseudônimo Ardolf.';

    const audio8_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio8_1.load();
        audio8_1.play();
    })
    const audio8_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio8_2.load();
        audio8_2.play();
    })
})


const palavra9 = document.querySelector('#palavraNove')
palavra9.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Sensible';
    classeIngles.textContent='adjective';
    definicaoIngles.textContent='Chosen in accordance with wisdom or prudence.';
    exemploIngles.textContent='Example: They made some very sensible decisions.'

    palavraPortugues.textContent='Sensato';
    classePortugues.textContent='adjetivo';
    definicaoPortugues.textContent='Que age ou pensa com cautela, com prudência; previdente, precavido.';
    exemploPortugues.textContent='Exemplo: Eles fizeram decisões muito sensatas.';

    const audio9_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio9_1.load();
        audio9_1.play();
    })
    const audio9_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio9_2.load();
        audio9_2.play();
    })
})


const palavra10 = document.querySelector('#palavraDez')
palavra10.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Exquisite';
    classeIngles.textContent='adjective';
    definicaoIngles.textContent='Extremely beautiful and, typically, delicate.';
    exemploIngles.textContent='Example: She has an exquisite face.'

    palavraPortugues.textContent='Requintado';
    classePortugues.textContent='adjetivo';
    definicaoPortugues.textContent='Que ou o que demonstra refinamento, apuro; aprimorado, delicado.';
    exemploPortugues.textContent='Exemplo: Ela tem um rosto requintado.';

    const audio10_1 = new Audio('')
    audioIngles.addEventListener('click', (e) =>{
        audio10_1.load();
        audio10_1.play();
    })
    const audio10_2 = new Audio('')
    audioPortugues.addEventListener('click', (e) =>{
        audio10_2.load();
        audio10_2.play();
    })
})

// var elemento_pai = document.body // busca elemento pai (body)
// var titulo = document.createElement('span') // cria elemento
// titulo.textContent = 'Um título qualquer' // muda texto do elemento criado
// elemento_pai.appendChild(titulo) // insere o elemento filho ao pai



arrow = document.querySelector('.fa-angle-down')

arrow.addEventListener('click', () => {
    if (arrow.className === 'fa-angle-down') {
        
    }
    document.querySelector('.dialogo__conversas').style.display="none";
    arrow.className='fa-solid fa-angle-right';
})
