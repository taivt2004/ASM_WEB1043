function dangnhap(e){
    event.preventDefault();
    var username = document.getElementById("tendangnhap").value;
    var password = document.getElementById("password").value;
   

    if (!username || !password ) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }
    
    var user ={
        username : username,
        email : email,
        password : password,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("dang ky thanh cong");
}