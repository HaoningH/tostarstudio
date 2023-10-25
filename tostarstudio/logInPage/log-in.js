const hi = document.querySelector("#test");
let inputs = document.querySelectorAll("input");//0号1密
const logIN =document.querySelector(".l");//按钮登录事件
let setI1=localStorage.getItem('user-id').split(","),setI2=localStorage.getItem('pw').split(",");

const p=document.querySelector("#l");

let timer;


let t=['',''],i,v2;

logIN.addEventListener("click",lI);
inputs[0].onchange=function(){
    t[0]=this.value;
}
inputs[1].onchange=function(){
    t[1]=this.value;
}


function lI(){
    //i=setI1.indexOf(t[0]);
    if(setI1.indexOf(t[0])===-1){
        alert("账号不存在，请注册后再登录");
    }
    else if(t[1]===setI2[setI1.indexOf(t[0])]){
        an1(p,1000,1600);
    }
    else if(t[1]!==setI2[setI1.indexOf(t[0])]){
        alert("密码错误");
    }
}




function an1(obj,t,x){
    y=(x*10)/t;
    m=y;
    timer=setInterval(function(){
        obj.style.left=(-1600+m)+"px";
        if(obj.style.left==="0px"){
            clearInterval;
            timer=null;
            timer=setTimeout(function(){
                alert("登陆成功");
        window.location.href="../mainPage/main.html";});
        }
        else{
            m+=y;
        }
    },10);

}

/*hi[1].value=userId.value;
hi[1].addEventListener("click",()=>{
    hi[1].value='';
})
function check(){
    alert("placeholder");
}
const userId = document.querySelector("user-id");
const password = document.querySelector("password");
function pri(){
    alert(userId +password );
}*/