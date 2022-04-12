var flogin = sessionStorage.getItem("HoTen");
function login(){
    if(flogin == null){
        document.getElementById("login").innerText = "Đăng nhập";
        document.getElementById("login").style.color = "brown";
    }
    else{
        document.getElementById("login").innerText = flogin;
        document.getElementById("login").href = '';
        document.getElementById("login").style.color = "darkturquoise";
    }
}
function logout(){
    if(flogin != null){
        var check = confirm("Chúng tôi rất buồn khi bạn rời đi :(((( \nBạn thật sự muốn đăng xuất ???");
        if(check == true){
            sessionStorage.clear();
            login();
        }
    }
}