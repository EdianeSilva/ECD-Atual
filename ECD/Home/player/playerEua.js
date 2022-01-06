let musicasEUA = [
    {src:'https://us3freenew.listen2myradio.com/live.mp3?typeportmount=s1_30289_stream_18012503'},

];

let musicaEUA = document.querySelector('.eua');
let indexMusicaEUA = 0;

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

function tocarMusica(){
    musicaEUA.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musicaEUA.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
