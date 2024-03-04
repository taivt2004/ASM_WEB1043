var giohang = new Array();
var key = "product";
function themvaogiohang(x) {
    var selectColor = document.querySelector(".color-option.selected").getAttribute('data-color');
    var selectSize = document.querySelector(".size button.selected").innerText;;
    var price = document.getElementById("price").parentElement.getAttribute('data-price');
    var box = x.parentElement.children;
    var img = box[0].children[0].src;
    var name = box[1].children[0].innerText;
    // var price = box[1].children[5].innerText;

    var sp = {
        img: img,
        name: name,
        color: selectColor,
        size: selectSize,
        price: price
    };
    giohang.push(sp);
    console.log(giohang);
    localStorage.setItem(key, JSON.stringify(giohang));
}

function selectColor(color) {
    applySelectedColor(color);
}

function selectSize(size) {
    applySelectedSize(size);
}
function applySelectedColor(color) {
    var colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(function (option) {
        option.classList.remove('selected');
    });

    // Chọn màu được click và lưu vào biến selectedColor
    var selectedColor = element.dataset.color;

    // Thêm class 'selected' cho màu được chọn
    element.classList.add('selected');
}


function applySelectedSize(size) {
    var sizeButtons = document.querySelectorAll('.size button');
    sizeButtons.forEach(function (button) {
        button.classList.remove('selected');
        if (button.innerText === size.toString()) {
            button.classList.add('selected');
        }
    });
}

function showgiohang() {
    var gh = JSON.parse(localStorage.getItem(key));
    var kq = "";
    for (var i = 0; i < gh.length; i++) {
        kq += '<tr>';
        kq += `<td><img src="${gh[i].img}" alt="Product Image" width="150px", height="150px"</td>`;
        kq += `<td> ${gh[i].name} </td>`;
        kq += `<td> ${gh[i].color} </td>`;
        kq += `<td> ${gh[i].size} </td>`;
        kq += `<td> ${gh[i].price} </td>`;
        kq += `<td> 1 </td>`;
        kq += `<td><button onclick="removeItem(this)">X</button></td>`;
        kq += '<tr>';
        document.getElementById("mycard").innerHTML = kq;

        var price = document.getElementById("price").parentElement.getAttribute('data-price');
        document.getElementById("amount").innerHTML = price;
    }

}
function removeItem(button) {
    var row = button.parentElement.parentElement;
    var index = row.rowIndex - 1;
    giohang.splice(index, 1);
    localStorage.setItem(key, JSON.stringify(giohang));
    showgiohang();
    location.reload();
}