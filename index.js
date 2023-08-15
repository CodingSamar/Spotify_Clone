//initialize the variables

let songIndex=0;
let audio=new Audio("./Levels.mp3");
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myProgressbar');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"levels", filePath:"./Levels.mp3" ,coverPath:"./levels.png"},
    {songName:"Last Ride", filePath:"./The Last Ride - Sidhu Moose Wala.mp3" ,coverPath:"./Last ride.png"},
    {songName:"Goat", filePath:"./GOAT - Sidhu Moose Wala.mp3" ,coverPath:"./goat.png"}
   
] 

songItem.forEach((element,i)=>{
       console.log(element,i);
       element.getElementsByTagName("img")[0].src=songs[i].coverPath;
})

//audioelementplay();
//handle play/pause click

masterplay.addEventListener('click',()=>{
    if(audio.paused || audio.currentTime<=0)
    { 
        audio.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    }
    else{
     audio.pause();
     masterplay.classList.remove("fa-pause-circle");
     masterplay.classList.add("fa-play-circle");
    }
})

//listen to elements

audio.addEventListener('timeupdate',()=>{
      //update seekbar
    progress=parseInt((audio.currentTime/audio.duration)*100);     //learned     
     myProgressbar.value=progress;
})  

myprogressbar.addEventListener('change',()=>{
     audio.currentTime=(myProgressbar.value*audio.duration)/100;
})