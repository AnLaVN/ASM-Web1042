function check(){
    if( !checkHT()    ) return false;
    if( !checkDC()    ) return false;
    if( !checkSDT()   ) return false;
    if( !checkEmail() ) return false;
    alert("Đặt hàng thành công");
    var HoTen = document.getElementById("hoten");
    var DiaChi = document.getElementById("diachi");
    var sdt = document.getElementById("dienthoai");
    var Email = document.getElementById("email");
    HoTen.value = "";
    DiaChi.value = "";
    sdt.value = "";
    Email.value = "";
    sessionStorage.clear();
    window.open("https://github.com/AnLaVN/ASM-Web1042/index.html");
}
function checkHT() {
    var HoTen = document.getElementById("hoten");
    if(HoTen.value == ""){
        HoTen.placeholder = "Họ tên không được trống";
        HoTen.focus();
        return false;
    }
    if(Number(HoTen.value.length) > 30){
        HoTen.placeholder = "Họ tên tối đa 30 kí tự";
        HoTen.value = "";
        HoTen.focus();
        return false;
    }
    else{
        HoTen.placeholder = "";
        return true;
    }
}
function checkDC() {
    var DiaChi = document.getElementById("diachi");
    if(DiaChi.value == ""){
        DiaChi.placeholder = "Địa chỉ không được rỗng";
        DiaChi.focus();
        return false;
    }
    else{
        DiaChi.placeholder ="";
        return true;
    }
}
function checkSDT(){
    var sdt = document.getElementById("dienthoai");
    if(sdt.value == ""){
        sdt.placeholder = "SĐT không được rỗng";
        sdt.focus();
        return false;
    }
    else{
        sdt.placeholder ="";
        return true;
    }
    
}
function checkEmail(){
    var Email = document.getElementById("email");
    if(Email.value == ""){
        Email.placeholder = "Email không được trống";
        Email.focus();
        return false;
    }
    if( !Email.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
        Email.placeholder = "Email không đúng định dạng";
        Email.value = "";
        Email.focus();
        return false;
    }
    else{
        Email.placeholder = "";
        return true;
    }
}
