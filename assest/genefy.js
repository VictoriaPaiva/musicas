var numMusica=0;
var tempo = 0;
function tocaAnterior(){
numMusica = numMusica-1;
if(numMusica<0)
{
    numMusica=3;
}
document.getElementById("mymusic").src = "assest/musicas//musica"+numMusica+".mp3";
        document.getElementById("mymusic").play();
}
function tocaAtual(){
    console.log("musica atual = "+document.getElementById("mymusic").src);

        document.getElementById("mymusic").src = "assest/musicas/musica"+numMusica+".mp3";
        document.getElementById("mymusic").currentTime = tempo;
        document.getElementById("mymusic").play();

    console.log("ah... chato!");
}
function paraTudo(){
    document.getElementById("mymusic").pause();
    tempo = document.getElementById("mymusic").currentTime;

}
function tocaProxima(){
    numMusica = numMusica+1;
    if(numMusica==4)
    {
        numMusica=0;
    }
    document.getElementById("mymusic").src = "assest/musicas/musica"+numMusica+".mp3";
            document.getElementById("mymusic").play();
}