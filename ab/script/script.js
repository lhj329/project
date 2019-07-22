var rside = document.getElementById("rside_cover")
rside.addEventListener("click",function(e){
    var toggle = document.getElementById("mbtn")
    toggle.checked=false;
})

var lside = document.getElementById("lside_cover")
lside.addEventListener("click",function(e){
    var toggle =document.getElementById("lang");
    toggle.checked=false;
})

  function hidden(){
  var obj = document.body;
  obj.style.overflow="hidden";
 }


//if(rside==true){
//    document.getElementById("body")
//    body.style.overflow = "hidden"
//}
//var hidden =document.getElementById("body")
//
//if(document.getElementById("mbtn")==true){
//    hidden.style.overflow="hidden"
//}
