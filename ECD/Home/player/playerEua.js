//Player Radio EUA
let musica = document.querySelector('.eua');
let indexMusica = 0;



// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

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