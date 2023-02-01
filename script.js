
function openModalCorpoLeve() {
    const modal = document.getElementById('janela-modal-tcl')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-modal-tcl'){
            modal.classList.remove('open')
        }
    })
}

function openModalCorpoMedio() {
    const modal = document.getElementById('janela-modal-tcm')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-modal-tcm'){
            modal.classList.remove('open')
        }
    })
}

function openModalEncorpado() {
    const modal = document.getElementById('janela-modal-tencp')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-modal-tencp'){
            modal.classList.remove('open')
        }
    })
}

function openModalBrancoFrutado() {
    const modal = document.getElementById('janela-modal-bjf') 
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-modal-bjf'){
            modal.classList.remove('open')
        }
    })
}

function openModalBrancoMaduro() {
    const modal = document.getElementById('janela-modal-bm')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-modal-bm') {
            modal.classList.remove('open')
        }
    })
}

function openModalRoseAcido() {
    const modal = document.getElementById('janela-modal-ra') 
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'janela-modal-ra') {
            modal.classList.remove('open')
        }
    })
}

function openModalRoseLeve() {
    const modal = document.getElementById('janela-modal-rl')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == ('janela-modal-rl')) {
            modal.classList.remove('open')
        }
    })
}

function openModalRoseFrutado() {
    const modal = document.getElementById('janela-modal-rf')
    modal.classList.add('open')

    modal.addEventListener('click', (e) => {
        if(e.target.id == ('janela-modal-rf')) {
            modal.classList.remove('open')
        }
    })
}
