function addToCart(element) {
    // Lấy giá trị màu và số lượng
    var selectedColor = document.querySelector('.color-option.selected');
    var selectedDungluong = document.querySelector('.dungluong1.selected');
    
    // Kiểm tra xem đã chọn màu và dung lượng hay chưa
    if (!selectedDungluong) {
        showError('*Vui lòng chọn dung lượng.');
        return;
    }
    if (!selectedColor) {
        showError1('*Vui lòng chọn màu sắc.');
        return;
    }
    
    // Từ button của sản phẩm muốn lấy dữ liệu 
    // => dùng closest để lấy phần tử cha, sau đó query vào lấy thông tin của sản phẩm
    const parentElement = element.closest('.product-info');
    const nameProduct = parentElement.querySelector('.nameprod').innerText;
    
        // Lấy giá từ thuộc tính data-price của nút dung lượng đã chọn
        const priceProduct = selectedDungluong.dataset.price;

    const selectedColorValue = selectedColor.style.backgroundColor;
    const selectedDungluongValue = selectedDungluong.innerText;
    const selectedSoluongValue = parentElement.querySelector('.soluong input').value;
    // Tạo đối tượng lưu trữ thông tin sản phẩm
    const productInfo = {
        name: nameProduct,
        price: priceProduct,
        color: selectedColorValue,
        dungluong: selectedDungluongValue,
        soluong: selectedSoluongValue,
        image: 'imgSanPham/iphone12p1.webp.src',
        image2: '🗑',
    };

    // Lấy danh sách sản phẩm đã có trong giỏ hàng từ Local Storage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Thêm sản phẩm mới vào giỏ hàng
    cartItems.push(productInfo);

    // Lưu danh sách sản phẩm mới vào Local Storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Thông báo cho người dùng
    alert('Sản phẩm đã được thêm vào giỏ hàng!');

    // Load lại trang để cập nhật thông tin giỏ hàng trên trang giỏ hàng
    location.reload();
}
    
function showError(message) {
    // Hiển thị thông báo lỗi
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.innerText = message;
}
function showError1(message) {
    // Hiển thị thông báo lỗi
    const errorMessageElement = document.getElementById('error-message1');
    errorMessageElement.innerText = message;
}
