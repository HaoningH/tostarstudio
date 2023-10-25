const inputs = document.querySelectorAll("input");//0号 1邮箱 2密码 3确认密码
const signUp =document.querySelector(".s");//按钮

let pw1=inputs[2].value;
let pw2=inputs[3].value;
//let ini=[{'user-id':''},{'mailbox':''},{'':''},{'':''},]
let i,t=['','','','',];//输入数据
let setI1=localStorage.getItem('user-id'),setI2=localStorage.getItem('pw');
let midu=setI1+','+t[0],midp=setI1+','+t[2];

localStorage.setItem('user-id',midu);
localStorage.setItem('pw',midp);


signUp.addEventListener("click",sU);
//for(i=0;i<4;i++){
    inputs[0].onchange=function(){
        t[0]=this.value;
    }
    inputs[1].onchange=function(){
        t[1]=this.value;
    }
    inputs[2].onchange=function(){
        t[2]=this.value;
    }
    inputs[3].onchange=function(){
        t[3]=this.value;
    }
    //}

function sU(){
    if(t[2]!==t[3]){
        alert("两次输入密码不同");
    }
    else if(document.querySelector(".user-id").validity.patternMismatch===true){
        alert("账号为字母大小写与数字的组合");
    }
    else if(setI1.indexOf(','+t[0]+',')!==-1){
        alert("账号已存在");
    }
    else{
        setI1=localStorage.getItem('user-id');
        setI2=localStorage.getItem('pw');
        midu=setI1+','+t[0];
        midp=setI2+','+t[2];
        localStorage.setItem('user-id',midu);
        localStorage.setItem('pw',midp);
        alert("注册成功！");
    }
}



//const password=document.querySelector();
//if(.leng)