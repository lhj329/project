const body = document.querySelector("body","#cover");

const IMG_NUM = 6;

function handleImgLoad(){
    console.log("로딩끝");
}

function paintImg(imgnum){
 const image = new Image();
 image.src = `img/${imgnum + 1}.jpg`;
 image.classList.add("bgImage")
 body.prepend(image);
 image.addEventListener("loadend",handleImgLoad)
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}
init();