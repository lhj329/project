function jsInit(){
    var navLabels=
        document.getElementsByClassName("header_nav_item"),
            navToggleBtn = document.getElementsByClassName("nav-toggle-btn")[0],
        sections = document.getElementsByClassName("main-section"),
        prevSectionIndex,
        project=
        document.getElementsByClassName("project");
    function removeClass(classString){
        return function(el){
            el.classList.remove(classString);
        };
    }
    function updateNavLabels(){
        for(var i = 0; i< sections.length; i++){
            if ((prevSectionIndex != i) &&
               ((sections[i].getBoundingClientRect().top <
                window.innerHeight / 3 &&
                sections[i].getBoundingClientRect().top>=0) ||
               (sections[i].getBoundingClientRect().bottom > 3 *
               window.innerHeight / 4 &&
               sections[i].getBoundingClientRect().bottom <
               sections[i].getBoundingClientRect().height))){
                $(".header_nav_item").click(function(){
                    $("header_nav_item").removeClass("is-active")
                    $(this).addClass("is-active")
                })
                
                prevSectionIndex = i;
            }
        }
    }
    function navToggle(){
        var navToggleWrap = this.parentNode;
        navToggleWrap.classList.toggle("expand");
        [].forEach.call(navLabels, function(el){
            el.addEventListener("click", collapseNav);
        });
        function collapseNav(){
            navToggleWrap.classList.remove("expand");
            [].forEach.call(navLabels, function(el){
                el.removeEventListener("click", collapseNav);
            });
        }
    }
    function displayEl(el){
        el.style.display = "block";
    }
    function hideEl(el){
        el.style.display = "none";
    }
    var jsEl = document.getElementsByClassName("js-dis");
    [].forEach.call(jsEl,removeClass("js-dis"));
    
    updateNavLabels();
    
    window.addEventListener("scroll",updateNavLabels);
    
    navToggleBtn.addEventListener("click", navToggle);
    
}

jsInit();


function initMap() {
  var customMapType = new google.maps.StyledMapType([{
    "featureType": "all",
    "elementType": "labels.text",
    "stylers": [{
      "color": "#6c6753"
    }]
  }, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": [{
      "color": "#ffffff"
    }]
  }, {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [{
      "color": "#444444"
    }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#ffffff"
    }, {
      "lightness": "0"
    }, {
      "gamma": "1.00"
    }]
  }, {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [{
      "color": "#E6D0CF"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.text",
    "stylers": [{
      "color": "#6c6753"
    }, {
      "visibility": "simplified"
    }]
  }, {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [{
      "saturation": "-100"
    }, {
      "lightness": "11"
    }]
  }, {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [{
      "visibility": "off"
    }]
  }, {
    "featureType": "water",
    "elementType": "all",
    "stylers": [{
      "visibility": "on"
    }]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
      "color": "#51ffa6"
    }, {
      "lightness": "27"
    }, {
      "saturation": "-14"
    }]
  }], {
    name: 'Styled'
  });
  var customMapTypeId = 'custom_style';

  var latLng = {
    lat: 35.855441,
    lng: 128.526828
  };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: latLng,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: "I'm here!"
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

}


$(".project_preview").each(function(){
    $(this).children("span").css({display:"block",opacity:0});
}).mouseenter(function(){
 $(this).children("span").stop().animate({display:"block",opacity:0.7,bottom:0});
}).mouseleave(function(){
    $(this).children("span").stop().animate({bottom:-100,display:"none"});
})


