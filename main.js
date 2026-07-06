// Đợi cho toàn bộ nội dung HTML được tải xong
document.addEventListener("DOMContentLoaded", function() {
    
    // Khởi tạo một Observer (Người quan sát)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // Nếu phần tử bắt đầu xuất hiện trong màn hình
            if (entry.isIntersecting) {
                // Thêm class 'show' để CSS thực hiện hiệu ứng
                entry.target.classList.add('show');
                
                // Tùy chọn: Ngừng quan sát sau khi đã hiện (hiện 1 lần)
                // observer.unobserve(entry.target); 
            } else {
                // Tùy chọn: Xóa class 'show' nếu muốn hiệu ứng lặp lại khi cuộn lên cuộn xuống
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.15 // Phần tử hiện ra 15% là bắt đầu kích hoạt hiệu ứng
    });

    // Tìm tất cả các thẻ có class 'fade-in' và yêu cầu Observer theo dõi chúng
    const hiddenElements = document.querySelectorAll('.fade-in');
    hiddenElements.forEach((el) => observer.observe(el));

    // 3. Logic xử lý click nút mũi tên để cuộn qua lại sản phẩm
    const slider = document.querySelector('.products-section');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    if (slider && prevBtn && nextBtn) {
        // Hàm tính toán khoảng cách cần cuộn (Độ rộng 1 sản phẩm + gap)
        const getScrollAmount = () => {
            const firstProduct = slider.querySelector('.product');
            if (firstProduct) {
                return firstProduct.offsetWidth + 30; // 30 là khoảng cách gap giữa các khối
            }
            return 350; // Khoảng cách mặc định phòng trường hợp lỗi
        };

        // Click mũi tên bên Phải -> Cuộn tiến tới
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: getScrollAmount(),
                behavior: 'smooth'
            });
        });

        // Click mũi tên bên Trái -> Cuộn lùi lại
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -getScrollAmount(),
                behavior: 'smooth'
            });
        });
    }
});
