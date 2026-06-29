let card=document.querySelectorAll(".xo");
let line=document.querySelector(".line");
let again=document.querySelector(".again");
let isx=true;
function ingame(){
 isx=true;
line.style.display = "none";
again.style.display = "none";
line.style.top="50px";
line.style.left="5px";
line.style.right="0";
line.style.bottom="0";
line.style.transform="rotate(0deg)";
for(let i=0 ; i<9 ; i++){
card[i].textContent="";
card[i].innerHTML="";
card[i].onclick=function(){
    if(this.textContent!=="")return;
    if(isx){
        let x=document.createElement("span");
        x.textContent="X";
        x.style.fontSize="50px";
        x.style.color="white";
        x.style.position="absolute";
        card[i].appendChild(x);
    }
    else{
        let o=document.createElement("span");
        o.textContent="O";
        o.style.fontSize="50px";
        o.style.color="white";
        o.style.position="absolute";
        card[i].appendChild(o);
    }
    isx=!isx;
    let winnerlines=[[0,1,2] , [3,4,5] , [6,7,8],
                     [0,3,6] , [1,4,7] , [2,5,8],
                     [0,4,8] , [2,4,6] ,
                    ]
    let winline=-1;
    for(let i=0 ; i<winnerlines.length ; i++){
        let target="";
        let win=false;
        let cnt=0;
        for(let j=0 ; j<3 ; j++){
           if(target=="" && card[winnerlines[i][j]].textContent!=""){  
            target=card[winnerlines[i][j]].textContent;
            cnt++;
           }
           else if(target!="" &&  target==card[winnerlines[i][j]].textContent)
            cnt++;
        }
        if(cnt==3){
            winline=i;
            break;
        }
    }
    if(winline!=-1){
    line.style.display="block";
    again.style.display="block";
    if(winline==1){
        line.style.top="160px";
    }
    else if(winline==2){
        line.style.top="270px";
    }
    else if(winline==3){
        line.style.transform="rotate(90deg)";
        line.style.left="-105px";
        line.style.top="50%";
    }
    else if(winline==4){
        line.style.transform="rotate(90deg)";
        line.style.top="50%";
        line.style.left="5px";
    }
    else if(winline==5){
        line.style.transform="rotate(90deg)";
        line.style.left="115px";
        line.style.top="50%";
    }
    else if(winline==6){
         line.style.transform="rotate(45deg)";
         line.style.top="160px";
    }
    else if(winline==7){
       line.style.transform="rotate(135deg)";
       line.style.top="160px";
    }
    for(let d=0 ; d<9 ; d++)
        card[d].onclick=null;
}
let val=false;
for(let i=0 ; i<9 ; i++){
    if(card[i].textContent==""){
        val=true;
        break;
    }
}
if(!val)again.style.display="block";
}
}
}
ingame();
again.onclick=function(){
    ingame();
}