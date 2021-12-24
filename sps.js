var row_btn=document.getElementsByClassName("row_btn");
var value_select=document.getElementsByClassName("value_select");
var ch=document.getElementsByClassName("ch");
var result=document.getElementById("result");
var star_btn=document.getElementById("star_btn");


var audio = new Audio('audio/mixkit-fast-double-click-on-mouse-275.wav');
var comp;
var Cscore=0;
var Hscore=0;
class show{
    result_method(i,w,score){
        result.innerHTML=w;
        ch[i].value=score;
    }
}
function check(a)
{
    comp=Math.floor(Math.random()*3);
    var obj=new show();
    // Stone=0
    // Paper=1
    //Scissors=2
    // console.log("Stone=0\nPaper=1\nScissors=2");
    // console.log("comp="+comp);
    audio.play();
    if(a==0){
        value_select[1].innerHTML="Stone";
    }
    else if(a==1){
        value_select[1].innerHTML="Paper";
    }
    else if(a==2){
        value_select[1].innerHTML="Scissors";
    }
    
    if(comp==0){
        value_select[0].innerHTML="Stone";
    }
    else if(comp==1){
        value_select[0].innerHTML="Paper";
    }
    else if(comp==2){
        value_select[0].innerHTML="Scissors";
    }
    result.style.display="inline";
    if(a==comp){
        result.innerHTML="Match is Draw";
    }
    else if(a==0 && comp==1){
        Cscore++;
        obj.result_method(0,"Computer Win",Cscore);
    }
    else if(a==1 && comp==2){
        Cscore++;
        obj.result_method(0,"Computer Win",Cscore);
    }
    else if(a==2 && comp==0){
        Cscore++;
        obj.result_method(0,"Computer Win",Cscore);
    }
    else {
        Hscore++;
        obj.result_method(1,"You Win",Hscore);
        result.innerHTML="You Win";
    }

}
function start(){
    audio.play();
    result.style.display="none";
    ch[0].value=0;
    ch[1].value=0;
    value_select[0].innerHTML="&nbsp;";
    value_select[1].innerHTML="&nbsp;";
}