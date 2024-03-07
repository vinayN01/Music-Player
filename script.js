var arr = [
    {songNmae:"Evarevaro",url:"./songs/Evarevaro.mp3",img:"./images/animal.jpg"},
    {songNmae:"Nenu nuvantu",url:"./songs/nenu nuvantu.mp3",img:"./images/orange.jpg"},
    {songNmae:"Oh prema",url:"./songs/oh prema.mp3",img:"./images/sitaramam.jpg"},
    {songNmae:"Sada siva",url:"./songs/sada siva.mp3",img:"./images/khaleja.jpg"},
]
var allSongs=document.querySelector("#all-songs");
var poster = document.querySelector("#left");

var play = document.querySelector("#play");
var backward = document.querySelector("#backward");
var forward = document.querySelector("#forward");

var audio = new Audio();

var selectedSong = 0;

function mainFunction(){
    var list="";  
arr.forEach(function(e,i){
    list+=`<div class="song-card" id=${i}>
    <div class="part1">
        <img src=${e.img}>
         <h2>${e.songNmae}</h2>
    </div>
    <h6>3.56</h6>
</div>`
})
allSongs.innerHTML=list;

audio.src = arr[selectedSong].url;

poster.style.backgroundImage = `url(${arr[selectedSong].img})`;

}
mainFunction(); 
allSongs.addEventListener("click",function(ev){
    selectedSong = ev.target.id;
    mainFunction();
    play.innerHTML = `<i class="ri-pause-line"></i>`;
    flag=1;
    audio.play();

})

var flag=0;
play.addEventListener("click",function(){
    if(flag == 0){

        play.innerHTML = `<i class="ri-pause-line"></i>`;
        mainFunction();
        audio.play();
        flag=1;
    }else{
        play.innerHTML = `<i class="ri-play-fill">`;
        mainFunction();
        audio.pause();
        flag=0;
    }
})

forward.addEventListener("click",function(){
    if(selectedSong < arr.length-1){
        selectedSong++
        mainFunction();
        audio.play();    }

})
backward.addEventListener("click",function(){
    if(selectedSong > 0){
        selectedSong--
        mainFunction();
        audio.play();    }
})



