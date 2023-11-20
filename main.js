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


const palavra1 = document.querySelector('#palavraUm')
palavra1.addEventListener('click', (e) =>{
    e.preventDefault();
    modal.style.display='block';
    fundo.style.display='block';
    
    palavraIngles.textContent='Hierarchy';
    classeIngles.textContent='noun';
    definicaoIngles.textContent='a system or organization in which people or groups are ranked one above the other according to status or authority';
    exemploIngles.textContent='Example: In our house, mom is at the top of the hierarchy.'

    palavraPortugues.textContent='Hierarquia';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

    const audio1_1 = new Audio('')
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
    definicaoIngles.textContent='a medical specialist who administers anesthetics';
    exemploIngles.textContent='She works at the hospital as an anesthetist.'

    palavraPortugues.textContent='Anestesista';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='unintelligible or meaningless speech or writing; nonsense';
    exemploIngles.textContent='He is always talking gibberish.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='the action of providing or being provided with amusement or enjoyment';
    exemploIngles.textContent='We have a lot of entertainment options out there.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='work (moistened flour or clay) into dough or paste with the hands';
    exemploIngles.textContent='The recipe says you need to knead the dough.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='pedestrianized square in the West End of London, England';
    exemploIngles.textContent='We need to leave at the Leicester Square Underground Station.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='lung inflammation caused by bacterial or viral infection, in which the air sacs fill with pus and may become solid. Inflammation may affect both lungs, one lung, or only certain lobes';
    exemploIngles.textContent='He died of pneumonia.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='a false or assumed identity';
    exemploIngles.textContent='James is a spy working under the alias Ardolf.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='chosen in accordance with wisdom or prudence';
    exemploIngles.textContent='They made some very sensible decisions.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
    definicaoIngles.textContent='extremely beautiful and, typically, delicate';
    exemploIngles.textContent='She has an exquisite face.'

    palavraPortugues.textContent='';
    classePortugues.textContent='';
    definicaoPortugues.textContent='';
    exemploPortugues.textContent='';

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
