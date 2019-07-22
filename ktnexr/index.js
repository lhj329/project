var btn1=document.getElementById('btn1');
var btn2=document.getElementById('btn2');
var btn3=document.getElementById('btn3');
var btn4=document.getElementById('btn4');
var btn5=document.getElementById('btn5');

var pro=document.getElementById('pro');
var con=document.getElementById('con');
var V=document.getElementById('V');
var suc=document.getElementById('suc');
var who=document.getElementById('who');



    function imgview(){
        event.preventDefault();
        pro.style.display="none";
        con.style.display="none";
        V.style.display="none";
        suc.style.display="none";
        who.style.display="none";
        
        if(count==1){
          pro.style.display="block";
        } else if (count==2) {
          con.style.display="block";
        } else if (count==3) {
          V.style.display="block";
        } else if (count==4) {
          suc.style.display="block";
        } else if (count==5) {
          who.style.display="block";
        }
        }
    btn1.addEventListener('click', function(){
          count=1;
          imgview();
        })
    btn2.addEventListener('click', function(){
          count=2;
          imgview();
        })
    btn3.addEventListener('click', function(){
          count=3;
          imgview();
        })
    btn4.addEventListener('click', function(){
          count=4;
          imgview();
        })
    btn5.addEventListener('click', function(){
          count=5;
          imgview();
        })

