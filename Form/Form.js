var hang = document.getElementsByClassName("hang");
function check(){
    if( !checkMSV()   ) return false;
    if( !checkHT()    ) return false;
    if( !checkEmail() ) return false;
    if( !checkGT()    ) return false;
    if( !checkST()    ) return false;
    if( !checkQT()    ) return false;
    alert("Đăng kí thành công");
}
function checkMSV(){
    var MaSV = document.forms["DangKi"]["MaSV"];
    if(MaSV.value == ""){
        MaSV.placeholder = "Mã số Sinh Viên không được trống";
        MaSV.focus();
        hang[0].children[1].style.backgroundColor = "yellow";
        return false;
    }
    if(Number(MaSV.value.length) != 7){
        MaSV.placeholder = "Mã số Sinh Viên phải đúng 7 kí tự";
        hang[0].children[1].style.backgroundColor = "yellow";
        MaSV.value = "";
        MaSV.focus();
        return false;
    }
    else{
        hang[0].children[1].style.backgroundColor = "white";
        MaSV.placeholder = "";
        return true;
    }
}
function checkHT(){
    var HoTen = document.forms["DangKi"]["HoTen"];
    if(HoTen.value == ""){
        HoTen.placeholder = "Họ tên Sinh Viên không được trống";
        hang[1].children[1].style.backgroundColor = "yellow";
        HoTen.focus();
        return false;
    }
    if(Number(HoTen.value.length) > 30){
        HoTen.placeholder = "Họ tên Sinh Viên tối đa 30 kí tự";
        hang[1].children[1].style.backgroundColor = "yellow";
        HoTen.value = "";
        HoTen.focus();
        return false;
    }
    else{
        hang[1].children[1].style.backgroundColor = "white";
        HoTen.placeholder = "";
        return true;
    }
}
function checkEmail(){
    var Email = document.forms["DangKi"]["Email"];
    if(Email.value == ""){
        Email.placeholder = "Email không được trống";
        hang[2].children[1].style.backgroundColor = "yellow";
        Email.focus();
        return false;
    }
    if( !Email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
        Email.placeholder = "Email không đúng định dạng";
        hang[2].children[1].style.backgroundColor = "yellow";
        Email.value = "";
        Email.focus();
        return false;
    }
    else{
        hang[2].children[1].style.backgroundColor = "white";
        Email.placeholder = "";
        return true;
    }
}
function checkGT(){
    var GioiTinh = document.forms["DangKi"]["GioiTinh"];
    if(!GioiTinh[0].checked && !GioiTinh[1].checked){
        document.getElementById("errorGT").innerHTML = "Phải chọn giới tính";
        hang[3].children[1].style.backgroundColor = "yellow";
        return false;
    }
    else{
        hang[3].children[1].style.backgroundColor = "white";
        document.getElementById("errorGT").innerHTML = "";
        return true;
    }
}
function checkST(){
    var SoThich = document.forms["DangKi"]["SoThich"];
    if(!SoThich[0].checked && !SoThich[1].checked && !SoThich[2].checked && !SoThich[3].checked && !SoThich[4].checked){
        document.getElementById("errorST").innerHTML = "Phải chọn sở thích";
        hang[4].children[1].style.backgroundColor = "yellow";
        return false;
    }
    else{
        hang[4].children[1].style.backgroundColor = "white";
        document.getElementById("errorST").innerHTML = "";
        return true;
    }
}
function checkQT(){
    var QuocTich = document.forms["DangKi"]["QuocTich"];
    if(QuocTich.value == "none"){
        document.getElementById("errorQT").innerHTML = "Phải chọn quốc tịch";
        hang[5].children[1].style.backgroundColor = "yellow";
        QuocTich.focus();
        return false;
    }
    else{
        hang[5].children[1].style.backgroundColor = "white";
        document.getElementById("errorQT").innerHTML = "";
        return true;
    }
}