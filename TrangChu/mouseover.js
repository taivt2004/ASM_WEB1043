  // Hàm thay đổi màu khi rê chuột vào và ra
  function changeColor(element, isMouseOver) {
    if (isMouseOver) {
        // Màu khi rê chuột vào bằng JavaScript
        element.style.backgroundColor = 'lightgray';
    } else {
        // Màu khi rê chuột ra bằng JavaScript
        element.style.backgroundColor = '';
    }
}