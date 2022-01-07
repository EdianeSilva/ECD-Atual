let musicasBR = [
    {src:'https://streaming05.zas.media:9029/live'}

];

let musicaBR = document.querySelector('.br');
let indexMusicaBR = 0;

// Eventos
document.querySelector('.botao-play2').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause2').addEventListener('click', pausarMusica);

function tocarMusica(){
    musicaBR.play();
    document.querySelector('.botao-pause2').style.display = 'block';
    document.querySelector('.botao-play2').style.display = 'none';
}

function pausarMusica(){
    musicaBR.pause();
    document.querySelector('.botao-pause2').style.display = 'none';
    document.querySelector('.botao-play2').style.display = 'block';
}