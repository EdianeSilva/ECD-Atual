// Player Musicas brasil
let Audio = document.querySelector('.br');
let indexAudio = 0;


// Eventos
document.querySelector('.botao-play2').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause2').addEventListener('click', pausarMusica);

function tocarAudio(){
    Audio.play();
    document.querySelector('.botao-pause2').style.display = 'block';
    document.querySelector('.botao-play2').style.display = 'none';
}

function pausarAudio(){
    Audio.pause();
    document.querySelector('.botao-pause2').style.display = 'none';
    document.querySelector('.botao-play2').style.display = 'block';
}