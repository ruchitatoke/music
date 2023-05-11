var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    
    if(mysong.paused){
       mysong.play();
        icon.className="fa-solid fa-pause";
    }else{
        mysong.pause();
        icon.className="fa-solid fa-play";
    }
}