function dangki(e){
    event.preventDefault();
    var username = document.getElementById("searchInput1").value;
    var password = document.getElementById("searchInput2").value;
    var email = document.getElementById("searchInput3").value;
    var hoten = document.getElementById("searchInput4").value;



       // Kiểm tra xem có trường nào trống không
       document.getElementById('searchInput1').addEventListener("blur", function () {
        if (!this.value) {
            document.getElementById('toastname').innerText = "*Vui lòng nhập SDT";
        } else {
            document.getElementById('toastname').innerText = "";
        }
    });

    document.getElementById('searchInput3').addEventListener("blur", function () {
        var email = this.value;
        var regex = /\S+@\S+\.\S+/;
        if (!email) {
            document.getElementById('toastemail').innerText = "*Vui lòng nhập Email";
        } else if (!email.match(regex)) {
            document.getElementById('toastemail').innerText = "*Email không hợp lệ";
        } else {
            document.getElementById('toastemail').innerText = "";
        }
    });


 
    document.getElementById('searchInput2').addEventListener("blur", function () {
        if (!this.value) {
            document.getElementById('toastpass').innerText = "*Vui lòng nhập mật khẩu";
        } else {
            document.getElementById('toastpass').innerText = "";
        }
    });
    document.getElementById('searchInput4').addEventListener("blur", function () {
        if (!this.value) {
            document.getElementById('toasthoten').innerText = "*Vui lòng nhập họ tên";
        } else {
            document.getElementById('toasthoten').innerText = "";
        }
    });
   


    // Kiểm tra định dạng email
    

    // Nếu thông tin hợp lệ, tiếp tục xử lý
    var user = {
        username: username,
        email: email,
        password: password,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(username, json);

}

function dangnhap(e){
    event.preventDefault();
    var username = document.getElementById("tendangnhap").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);

    // Kiểm tra xem username và password có được nhập hay không
    document.getElementById('tendangnhap').addEventListener("blur", function () {
        if (!this.value) {
            document.getElementById('toastdn').innerText = "*Vui lòng nhập tên đăng nhập";
        } else {
            document.getElementById('toastdn').innerText = "";
        }
    });

    document.getElementById('password').addEventListener("blur", function () {
        if (!this.value) {
            document.getElementById('toastmk').innerText = "*Vui lòng nhập mật khẩu";
        } else {
            document.getElementById('toastmk').innerText = "";
        }
    });

    // Kiểm tra xem cả hai trường có được nhập không sau khi sự kiện blur đã được kích hoạt
    if (!document.getElementById('tendangnhap').value || !document.getElementById('password').value) {
        return; // Nếu một trong hai trường rỗng, không thực hiện đăng nhập
    }

    if (user == null) {
        document.getElementById('toastnull').innerText = "*Tài khoản không tồn tại";
    } else if (username === data.username && password === data.password) {
        alert("Đăng nhập thành công");
        window.location.href = "http://127.0.0.1:5500/ASM_WEB1043_VoTanTai_Ps36752/TrangChu/trangchu.html";
    } else {
        alert("Đăng nhập thất bại");
    }
    }