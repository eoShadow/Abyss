var rota = 'rota1';
var a = 1;
var b = 1;
var c = 1;

let respostas = document.querySelector('#resp');
let resp1 = document.querySelector('#resp1');
let resp2 = document.querySelector('#resp2');
let resp3 = document.querySelector('#resp3');
let fundo = document.querySelector('#fundo');
let dialogo = document.querySelector('#dialogo');

console.log(resp1)



addEventListener('mousedown', () => {

    if (rota == 'rota1' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none') {

        switch (a) {
            case 1:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'a1'

                a++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'a2'
                a++;
                break
            case 3:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a3'
                a++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'a4'
                a++;
                respostas.style.display = 'flex';
                break
            case 5:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a5'
                a++;
                break
            case 6:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a6'
                a++;
                break
            case 7:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a7'
                a++;
                break
            case 8:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a8'
                a++;
                break
            case 9:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a9'
                a++;
                break
            case 10:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'a10'
                a = 1;
                rota = 'rota1';
                a++;
                break
        }


    }

    if (rota === 'rota2' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none') {


        console.log(b)
        switch (b) {
            case 1:
                fundo.style.background = 'pink';
                dialogo.innerHTML = 'b1'

                b++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'b2'
                b++;
                break
            case 3:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b3'
                b++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'b4'
                b++;
                break
            case 5:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b5'
                respostas.style.display = 'flex';
                b++;
                break
            case 6:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b6'
                b++;
                break
            case 7:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b7'
                b++;
                break
            case 8:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b8'
                b++;
                break
            case 9:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b9'
                b++;
                break
            case 10:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'b10'
                a = 1;
                rota = 'rota1';
                b++;
                break

        }
    }


    if (rota === 'rota3' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none') {


        console.log(c)
        switch (c) {
            case 1:
                fundo.style.background = 'pink';
                dialogo.innerHTML = 'c1'

                c++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'c2'
                c++;
                break
            case 3:
                fundo.style.background = 'yellow';
                dialogo.innerHTML = 'c3'
                c++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'c4'
                a = 1;
                rota = 'rota1';
                c++;
                break

        }
    }
})




if (rota === 'rota1') {

    resp1.addEventListener('mousedown', () => {
        rota = 'rota1'
        respostas.style.display = 'none';
        console.log(rota)
    })

    resp2.addEventListener('mousedown', () => {
        rota = 'rota2'
        respostas.style.display = 'none';
        console.log(rota)
    })
    resp3.addEventListener('mousedown', () => {
        rota = 'rota3'
        respostas.style.display = 'none';
        console.log(rota)
    })
}

if (rota === 'rota2') {

    resp1.addEventListener('mousedown', () => {
        rota = 'rota1'
        respostas.style.display = 'none';
        console.log(rota)
    })
    resp2.addEventListener('mousedown', () => {
        rota = 'rota2'
        respostas.style.display = 'none';
        console.log(rota)
    })
    resp3.addEventListener('mousedown', () => {
        rota = 'rota2'
        respostas.style.display = 'none';
        console.log(rota)
    })
}