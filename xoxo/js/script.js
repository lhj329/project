
$("nav ul li").hover(function(){
    $(this).find(".subm").stop().slideDown(200);
},function(){
     $(this).find(".subm").stop().slideUp(200);
})
