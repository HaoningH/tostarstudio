const image=document.querySelectorAll("li");
const btn1=document.querySelector("#btn1 ");
const btn2=document.querySelector("#btn2 ");
let i;
let timer=setInterval(go,7000);
for(i=1;i<6;i++){
    image[i].setAttribute("class","opa") ;
    image[i].addEventListener("mouseover",()=>{
        clearInterval(timer);
        image[i].style.border='3px solid gray';
        timer=null;
    })
    image[i].addEventListener("mouseout",()=>{
        timer =setInterval(go,7000);
        image[i].style.border='';
    })
}
image[0].setAttribute("class","try");
i=0;
btn1.addEventListener("click",clb1);
function clb1(){
    image[i].setAttribute("class","opaS") ;
    i--;
    if(i<0){
        i+=6;
    }
    image[i].setAttribute("class","tryS") ;
}
btn2.addEventListener("click",clb2);
function clb2(){
    image[i].setAttribute("class","opaS") ;
    i++;
    if(i>5){
        i-=6;
    }
    image[i].setAttribute("class","tryS") ;
}
function go(){
    image[i].setAttribute("class","opaS") ;/*渐出*/
    i++;
    if(i>5){
        i-=6;
    }
    image[i].setAttribute("class","tryS") /*渐入*/;
}
/*function a(){

    image[i].style.display = block;
    image[i-1].style.display = none;
}
for(i=0;i<6;i++){
    a();
    setTimeout(a,1000);
}
const im=document.getElementById("btn1");
function functionA(){
    const te=document.querySelector("h1");
    te="test";
}
im.addEventListener("click",functionA);
function anCome(obj){
    obj.style.width='600px';
    obj.style.height='450px';
    obj.style.left='50px';
}*/