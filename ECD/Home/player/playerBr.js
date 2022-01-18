// Player Musicas brasil
let musica = document.querySelector('.br');
let indexMusica = 0;


// Eventos
document.querySelector('.botao-play2').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause2').addEventListener('click', pausarMusica);

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause2').style.display = 'block';
    document.querySelector('.botao-play2').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause2').style.display = 'none';
    document.querySelector('.botao-play2').style.display = 'block';
}