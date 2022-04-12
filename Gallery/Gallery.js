var arrAnh = [];
var n = 9;
var index = 0;
function loadAnh(){
    for(var i = 0; i < n ; i++){
        arrAnh[i] = new Image();
        arrAnh[i].src = "img/anh"+i+".jpg";
    }
}
// function Next(){
//     if(index < arrAnh.length - 1){
//         index++;
//         document.getElementById("Anh").src = arrAnh[index].src;
//         document.getElementById("Back").disabled = false;
//     }
//     if(index == arrAnh.length - 1){document.getElementById("Next").disabled = true;}
// }
// function Back(){
//     if(index > 0){
//         index--;
//         document.getElementById("Anh").src = arrAnh[index].src;
//         document.getElementById("Next").disabled = false;
//     }
//     if(index == 0){document.getElementById("Back").disabled = true;}
// }
// function First(){
//     index = 0;
//     document.getElementById("Anh").src = arrAnh[index].src;
//     Back();
// }
// function Last(){
//     index = arrAnh.length - 1;
//     document.getElementById("Anh").src = arrAnh[index].src;
//     Next();
// }
function Next(){
    if(index < arrAnh.length - 1){index++;}
    else{index = 0;}
    document.getElementById("Anh").src = arrAnh[index].src;
}
function Back(){
    if(index > 0){index--;}
    else{index = arrAnh.length - 1;}
    document.getElementById("Anh").src = arrAnh[index].src;
}