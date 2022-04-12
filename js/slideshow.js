var arrAnh = [];
var n = 9;
var index = 0;
function loadAnh(){
    for(var i = 0; i < n ; i++){
        arrAnh[i] = new Image();
        arrAnh[i].src = "https://anlavn.github.io/ASM-Web1042/images/"+i+".png";
    }
}
function Next(){
    if(index < arrAnh.length - 1){index++;}
    else{index = 0;}
    document.getElementById("Anh").src = arrAnh[index].src;
    console.log(document.getElementById("Anh").src);
}
function Back(){
    if(index > 0){index--;}
    else{index = arrAnh.length - 1;}
    document.getElementById("Anh").src = arrAnh[index].src;
}
setInterval("Next()", 5000);
