//.... iron man...//

var ChangeAgain = document.getElementById("changeAgain")
var flag = 5;
var move = false;
var move2 = false;
function Change(oder){
    if(oder === "forward"){
        move2 = false;
        flag += 5;
        ChangeAgain.style.left = flag + "px";
        if(!move){
            ChangeAgain.src = 'iron-fly (1).gif';
        }move = true;
    }else if(oder === "backword"){
        move = false;
        flag += -5;
        ChangeAgain.style.left = flag + "px"; 
     }if(!move2){
          ChangeAgain.src = 'iron-fly (1).gif';
     }move2 = true;
}
function ironMan(event){
    console.log(event.keyCode)
    if(event.key === "ArrowRight"){
        Change("forward")
    }else if(event.key === "ArrowLeft"){
        Change("backword")
    }
}
window.addEventListener("keydown",ironMan);


//....spider man...//




var ChangeRepeat = document.getElementById("changeRepeat")
var floo = 5;
var mov = false;
var mov2 = false;
function Chan(bank){
    if(bank === "forward"){
        mov2 = false;
        floo += 5;
        ChangeRepeat.style.left = floo + "px";
        if(!mov){
            ChangeRepeat.src = 'spidet-walk1.gif';
        }mov = true;
    }else if(bank === "backword"){
        mov = false;
        floo += -5;
        ChangeRepeat.style.left = floo + "px"; 
     }if(!mov2){
          ChangeRepeat.src = 'spidet-walk1.gif';
     }mov2 = true;
}
function spider(push){
    console.log(push.keyCode)
    if(push.key === "ArrowRight"){
        Chan("forward")
    }else if(push.key === "ArrowLeft"){
        Chan("backword")
    }
}
window.addEventListener("keypress",spider);