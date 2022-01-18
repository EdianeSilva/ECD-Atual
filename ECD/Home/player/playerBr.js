// Player Musicas brasil
let musicabr = document.querySelector('.br');
let indexMusicabr = 0;


// Eventos
document.querySelector('.botao-play2').addEventListener('click', tocarMusicabr);

document.querySelector('.botao-pause2').addEventListener('click', pausarMusicabr);

function tocarMusicabr(){
    musicabr.play();
    document.querySelector('.botao-pause2').style.display = 'block';
    document.querySelector('.botao-play2').style.display = 'none';
}

function pausarMusicabr(){
    musicabr.pause();
    document.querySelector('.botao-pause2').style.display = 'none';
    document.querySelector('.botao-play2').style.display = 'block';
}