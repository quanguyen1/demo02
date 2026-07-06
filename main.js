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
});