let musicasBR = [
    {src:'https://streaming05.zas.media:9029/live'}

];

let musica2 = document.querySelector('.br');
let indexMusica2 = 0;

musica2.pause();
    document.querySelector('.botao-pause2').style.display = 'none';
    document.querySelector('.botao-play2').style.display = 'block';

// Eventos
document.querySelector('.botao-play2').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause2').addEventListener('click', pausarMusica);

function tocarMusica(){
    musica2.play();
    document.querySelector('.botao-pause2').style.display = 'block';
    document.querySelector('.botao-play2').style.display = 'none';
}

function pausarMusica(){
    musica2.pause();
    document.querySelector('.botao-pause2').style.display = 'none';
    document.querySelector('.botao-play2').style.display = 'block';
}