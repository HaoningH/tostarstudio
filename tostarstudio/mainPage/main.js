const b1=document.querySelector('#box1');
const b2=document.querySelector('#box2');
const p=document.querySelector("#l");

let timer;

p.addEventListener("mouseover",an1(p,1000,1570))




function an1(obj,t,x){
    y=(x*10)/t;
    m=y;
    timer=setInterval(function(){
        obj.style.left=(-30-m)+"px";
        if(obj.style.left==="-1600px"){
            clearInterval;
            timer=null;
        }
        else{
            m+=y;
        }
    },10);
}