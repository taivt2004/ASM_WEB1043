
function displayCartItems() {
    // Lấy danh sách sản phẩm từ Local Storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Lấy phần tử div giỏ hàng để hiển thị thông tin
    let cartContainer = document.getElementById('cart');

    // Xóa các sản phẩm hiện tại trong giỏ hàng để cập nhật thông tin mới
    cartContainer.innerHTML = '';

    // Duyệt qua danh sách sản phẩm và hiển thị thông tin
    cartItems.forEach(function (item) {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // Tạo các phần tử và gán thông tin sản phẩm vào đó
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('checkbox');
        
        let img = document.createElement('img');
        img.src = "imgSrc" + item.imgSrc; // Thay đổi 'path/to/' bằng đường dẫn thực tế đến ảnh sản phẩm
        img.alt = item.name;

        let productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');

        let productName = document.createElement('h3');
        productName.innerText = item.name;

        let price = document.createElement('p');
        price.classList.add('price');
        price.innerText = 'Giá: ' + formatCurrency(item.price);

        let quantityLabel = document.createElement('label');
        quantityLabel.id = 'quantity-label';
        quantityLabel.innerText = 'Số lượng:';

        let quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.id = 'quantity';
        quantityInput.min = '1';
        quantityInput.value = item.quantity;

        // Thêm các phần tử vào phần tử div giỏ hàng
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(price);
        productInfoDiv.appendChild(quantityLabel);
        productInfoDiv.appendChild(quantityInput);

        productDiv.appendChild(checkbox);
        productDiv.appendChild(img);
        productDiv.appendChild(productInfoDiv);

        // Thêm sản phẩm vào phần tử div giỏ hàng
        cartContainer.appendChild(productDiv);
    });

    // Cập nhật tổng tiền
    let totalDiv = document.getElementById('total');
    let totalPrice = calculateTotalPrice(cartItems);
    totalDiv.innerHTML = '<p>Tổng tiền: ' + formatCurrency(totalPrice) + '</p>';
}

// Hàm tính tổng giá tiền và định dạng tiền tệ không thay đổi
// ...

// Gọi hàm hiển thị giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
});

function formatCurrency(amount) {
    // Thực hiện logic định dạng số tiền thành định dạng tiền tệ mong muốn
    // Ví dụ: bạn có thể sử dụng Intl.NumberFormat
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// Rest of your code...

// Gọi hàm hiển thị giỏ hàng khi trang được tải
document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
});

document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();

    // Thêm sự kiện click cho hình thùng rác
    let trashCans = document.querySelectorAll('.delete-btn');
    trashCans.forEach(function (trashCan, index) {
        trashCan.addEventListener('click', function () {
            // Gọi hàm xóa sản phẩm với chỉ số index
            deleteProduct(index);
        });
    });
});

function deleteProduct(index) {
    // Lấy danh sách sản phẩm từ Local Storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Xóa sản phẩm khỏi mảng
    cartItems.splice(index, 1);

    // Cập nhật danh sách sản phẩm trong Local Storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Hiển thị lại giỏ hàng
    displayCartItems();
}


