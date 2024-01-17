var elementos = window.document.getElementById('elementos')
var n = 1

function criar() {
    var novo = window.prompt('Oque voce deseja adicionar a sua lista?')
    if (novo === null || novo == '') {
        console.error(novo)
        return
    } else {
        n = n+1;
        elementos.innerHTML += `<input type="checkbox" id="${n}">${novo}</input><br>`
    }
}

function apagar() {
    elementos.innerHTML = ''
}