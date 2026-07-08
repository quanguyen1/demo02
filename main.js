document.addEventListener("DOMContentLoaded", function() {
    
    // =========================================================================
    // KHU VỰC 1: MẢNG DỮ LIỆU SẢN PHẨM (DATA MODELS)
    // =========================================================================
    const iphonesData = [
        { 
            name: "iPhone 17 Pro Max 256GB", 
            price: "35.990.000₫", 
            img: "img/iphone-17-pro-max-cam.png", 
            delay: 0, 
            specs: { screen: "6.9 inch Super Retina", chip: "A19 Pro", camera: "48MP Chính", battery: "Lên đến 29h video" }, 
            desc: "Tuyệt tác thiết kế titan với viền màn hình mỏng nhất từng có. Camera sắc nét đỉnh cao cùng chip A19 Pro chinh phục mọi giới hạn." 
        },
        { 
            name: "iPhone 17 256GB", 
            price: "23.990.000₫", 
            img: "img/iphone-17-xanh-la.png", 
            delay: 50, 
            specs: { screen: "6.1 inch Super Retina", chip: "A19", camera: "Kép 48MP", battery: "Lên đến 22h video" }, 
            desc: "Sắc màu rực rỡ, thiết kế nhôm bền bỉ. Nâng cấp mạnh mẽ với chip A19 mang lại hiệu năng ấn tượng cho mọi tác vụ hàng ngày." 
        },
        { 
            name: "iPhone Air 256GB", 
            price: "22.990.000₫", 
            img: "img/iphone-air-vang.png", 
            delay: 100, 
            specs: { screen: "6.5 inch OLED", chip: "A19 Pro", camera: "Camera đơn 48MP", size: "Dày 5.6 mm" }, 
            desc: "Chiếc iPhone mỏng nhẹ nhất trong lịch sử. Gần như tàng hình trong tay bạn nhưng vẫn sở hữu sức mạnh xử lý Pro." 
        },
        { 
            name: "iPhone 16 128GB", 
            price: "20.990.000₫", 
            img: "img/iphone-16-hong.png", 
            delay: 150, 
            specs: { screen: "6.1 inch Super Retina", chip: "A18", camera: "Kép 48MP", battery: "Lên đến 20h video" }, 
            desc: "Trải nghiệm mượt mà với mức giá dễ tiếp cận. Thiết kế nguyên khối tinh tế cùng cụm camera chéo đặc trưng." 
        },
        { 
            name: "iPhone 17 Pro 256GB", 
            price: "33.990.000₫", 
            img: "img/iphone-17-pro-blue.png", 
            delay: 200, 
            specs: { screen: "6.3 inch Super Retina", chip: "A19 Pro", camera: "Pro 48MP", battery: "Lên đến 27h video" }, 
            desc: "Khung viền Titanium chuẩn hàng không vũ trụ. Kích thước vừa tay kết hợp cùng cấu hình mạnh mẽ nhất từ Apple." 
        },
        { 
            name: "iPhone 16 Plus 128GB", 
            price: "23.990.000₫", 
            img: "img/iphone-16-plus-trang.png", 
            delay: 250, 
            specs: { screen: "6.7 inch Super Retina", chip: "A18", camera: "Kép 48MP", battery: "Lên đến 26h video" }, 
            desc: "Màn hình siêu lớn cho không gian hiển thị rộng rãi, kết hợp cùng thời lượng pin xuất sắc cho cả ngày dài hoạt động." 
        },
        { 
            name: "iPhone 15 Plus 128GB", 
            price: "17.990.000₫", 
            img: "img/iphone-15-plus-black.png", 
            delay: 300, 
            specs: { screen: "6.7 inch OLED", chip: "A16 Bionic", camera: "Kép 48MP", feature: "Dynamic Island" }, 
            desc: "Lựa chọn kinh tế với màn hình lớn và Dynamic Island tiện lợi. Thiết kế mặt lưng kính pha màu sang trọng." 
        },
        { 
            name: "iPhone 15 128GB", 
            price: "17.990.000₫", 
            img: "img/iphone-15-green.png", 
            delay: 350, 
            specs: { screen: "6.1 inch OLED", chip: "A16 Bionic", camera: "Kép 48MP", feature: "Cổng USB-C" }, 
            desc: "Sự cân bằng hoàn hảo giữa giá cả và hiệu năng. Trang bị cổng sạc USB-C phổ quát và camera độ phân giải cao." 
        }
    ];

    const watchesData = [
        { 
            name: "Apple Watch Ultra 3", 
            price: "26.490.000₫", 
            img: "img/apple-watch-ultra-3-gps-cellular.png", 
            delay: 0, 
            specs: { material: "Titanium 49mm", screen: "Độ sáng 3000 nits", feature: "GPS Kép chuẩn xác", battery: "Lên đến 72h" }, 
            desc: "Đồng hồ thể thao mạo hiểm tối thượng. Chống nước cực sâu, pin siêu bền bỉ dành cho các vận động viên chuyên nghiệp." 
        },
        { 
            name: "Apple Watch Series 11", 
            price: "21.790.000₫", 
            img: "img/apple-watch-series-11.png", 
            delay: 50, 
            specs: { material: "Nhôm / Thép 45mm", screen: "Viền siêu mỏng", feature: "Đo huyết áp", chip: "S11 SiP" }, 
            desc: "Màn hình lớn nhất từng có trên Apple Watch tiêu chuẩn. Theo dõi sức khỏe toàn diện với cảm biến mới nhất." 
        },
        { 
            name: "Apple Watch Series 10p", 
            price: "16.090.000₫", 
            img: "img/apple-watch-s10.png", 
            delay: 100, 
            specs: { material: "Nhôm 46mm", screen: "OLED góc rộng", feature: "Sạc nhanh 80%", weight: "Nhẹ hơn 10%" }, 
            desc: "Thiết kế mỏng nhẹ tinh tế, sạc cực nhanh giúp bạn luôn sẵn sàng theo dõi giấc ngủ và hoạt động cả ngày." 
        },
        { 
            name: "Apple Watch SE 3", 
            price: "8.390.000₫", 
            img: "img/apple-watch-se-3.png", 
            delay: 150, 
            specs: { material: "Vỏ Nhôm 40mm", chip: "S9 SiP", feature: "Phát hiện ngã", water: "Chống nước 50m" }, 
            desc: "Mọi tính năng cốt lõi của Apple Watch với mức giá không thể hợp lý hơn. Lựa chọn tuyệt vời cho người mới bắt đầu." 
        },
        { 
            name: "Apple Watch Series 10s", 
            price: "10.790.000₫", 
            img: "img/apple-watch-series-10-lte.png", 
            delay: 200, 
            specs: { material: "Nhôm 42mm", feature: "Hỗ trợ eSIM", health: "Đo ECG", battery: "18 giờ" }, 
            desc: "Luôn giữ kết nối ngay cả khi không mang theo iPhone nhờ kết nối Cellular tiện lợi." 
        },
        { 
            name: "Apple Watch Series 10 Milan", 
            price: "17.490.000₫", 
            img: "img/apple-watch-s10-lte-42mm.png", 
            delay: 250, 
            specs: { material: "Thép không gỉ", band: "Dây Milanese Loop", feature: "Kính Sapphire", chip: "S10 SiP" }, 
            desc: "Phiên bản cao cấp với lớp vỏ sáng bóng và dây đeo thép dạng lưới từ Milan mang lại vẻ đẹp thanh lịch." 
        },
        { 
            name: "Apple Watch Ultra 2", 
            price: "12.490.000₫", 
            img: "img/apple-watch-ultra-3-gps-c.png", 
            delay: 300, 
            specs: { material: "Titanium", screen: "2000 nits", feature: "Còi báo động", band: "Ocean Band" }, 
            desc: "Bền bỉ, đáng tin cậy trong mọi điều kiện khắc nghiệt. Phù hợp cho dân đam mê lặn biển và thể thao dã ngoại." 
        },
        { 
            name: "Apple Watch Series 9", 
            price: "4.490.000₫", 
            img: "img/apple-watch-series-11-gps-cellular.png", 
            delay: 350, 
            specs: { material: "Nhôm 41mm", feature: "Chạm hai lần (Double Tap)", health: "Đo oxy trong máu", chip: "S9" }, 
            desc: "Thao tác ma thuật với chỉ hai ngón tay chạm nhau. Vi xử lý S9 cho tốc độ phản hồi cực nhanh." 
        }
    ];

    const macsData = [
        { 
            name: "MacBook Pro 16 inch M5", 
            price: "108.990.000₫", 
            img: "img/macbook-pro-16-inch-m5-pro.png", 
            delay: 0, 
            specs: { screen: "16.2 inch Liquid Retina XDR", chip: "Apple M5 Pro", memory: "36GB RAM", storage: "1TB SSD" }, 
            desc: "Sức mạnh vô song cho dân chuyên nghiệp. Xử lý đồ họa nặng và render video 8K mượt mà." 
        },
        { 
            name: "MacBook Air 15 inch M5", 
            price: "52.990.000₫", 
            img: "img/macbook-air-15-inch-m5.png", 
            delay: 50, 
            specs: { screen: "15.3 inch Liquid Retina", chip: "Apple M5", memory: "16GB RAM", storage: "512GB SSD" }, 
            desc: "Màn hình lớn, thiết kế siêu mỏng nhẹ. Hoàn hảo cho đa nhiệm và làm việc di động." 
        },
        { 
            name: "MacBook Pro 14 inch M5", 
            price: "85.490.000₫", 
            img: "img/macbook-pro-14-inch-m5-pro.png", 
            delay: 100, 
            specs: { screen: "14.2 inch Liquid Retina XDR", chip: "Apple M5 Pro", memory: "18GB RAM", storage: "512GB SSD" }, 
            desc: "Cân bằng hoàn hảo giữa hiệu năng Pro và tính di động. Đủ sức cân mọi task nặng." 
        },
        { 
            name: "MacBook Air 14 inch M5", 
            price: "46.490.000₫", 
            img: "img/macbook-air-15-inch-m5-24gb.png", 
            delay: 150, 
            specs: { screen: "13.6 inch Liquid Retina", chip: "Apple M5", memory: "24GB RAM", storage: "512GB SSD" }, 
            desc: "Nâng cấp RAM 24GB giúp xử lý đa nhiệm vượt trội trên một thiết kế tàng hình." 
        },
        { 
            name: "MacBook Neo 13 inch A18", 
            price: "18.890.000₫", 
            img: "img/macbook-neo-13-inch-a18.png", 
            delay: 200, 
            specs: { screen: "13.3 inch Retina", chip: "Apple A18", memory: "8GB RAM", battery: "Lên đến 18h" }, 
            desc: "Dòng Mac hoàn toàn mới với mức giá cực kỳ dễ tiếp cận. Lý tưởng cho học sinh, sinh viên." 
        },
        { 
            name: "MacBook Pro 14 inch M4", 
            price: "45.490.000₫", 
            img: "img/macbook-air-15-inch-m5-24gb-512.png", 
            delay: 250, 
            specs: { screen: "14.2 inch Liquid Retina XDR", chip: "Apple M4", memory: "16GB RAM", storage: "512GB SSD" }, 
            desc: "Lựa chọn kinh tế hơn cho dòng Pro nhưng vẫn giữ được sức mạnh ấn tượng từ chip M4." 
        }
    ];

    const ipadsData = [
        { 
            name: "iPad Pro M5 13 inch", 
            price: "84.490.000₫", 
            img: "img/ipad-pro-m5-cellular-wifi-13.png", 
            delay: 0, 
            specs: { screen: "13 inch OLED", chip: "Apple M5", memory: "16GB RAM", connectivity: "5G & Wi-Fi" }, 
            desc: "Màn hình OLED tuyệt đẹp cùng sức mạnh chip M5 vô song. Lựa chọn tối thượng cho sự sáng tạo chuyên nghiệp." 
        },
        { 
            name: "iPad Air M4 13 inch", 
            price: "30.690.000₫", 
            img: "img/13-tim-5g.png", 
            delay: 50, 
            specs: { screen: "13 inch Liquid Retina", chip: "Apple M4", camera: "12MP Ultra Wide", feature: "Apple Pencil Pro" }, 
            desc: "Không gian làm việc rộng lớn với sức mạnh M4. Trải nghiệm mượt mà mọi tác vụ học tập và giải trí." 
        },
        { 
            name: "iPad Air M4 11 inch", 
            price: "20.490.000₫", 
            img: "img/ipad-air-m4-11-inch-wif.png", 
            delay: 100, 
            specs: { screen: "11 inch Liquid Retina", chip: "Apple M4", storage: "128GB", color: "Tím" }, 
            desc: "Thiết kế mỏng nhẹ, màu sắc thời thượng. Mang lại hiệu suất đáng kinh ngạc trong một kích thước di động." 
        },
        { 
            name: "iPad Pro M4 11 inch", 
            price: "28.990.000₫", 
            img: "img/13-xanh-5g-650x650.png", 
            delay: 150, 
            specs: { screen: "11 inch OLED", chip: "Apple M4", camera: "Pro Camera System", feature: "Face ID" }, 
            desc: "Quyền năng Pro trong thiết kế siêu mỏng. Công nghệ màn hình OLED đỉnh cao cho màu đen sâu thẳm." 
        },
        { 
            name: "iPad mini 7 5G", 
            price: "20.690.000₫", 
            img: "img/ipad-mini-7-5g-starlight.png", 
            delay: 200, 
            specs: { screen: "8.3 inch Liquid Retina", chip: "A17 Pro", connectivity: "5G", weight: "Siêu nhẹ" }, 
            desc: "Nhỏ gọn nhưng mạnh mẽ với chip A17 Pro. Kết nối 5G tốc độ cao mọi lúc mọi nơi." 
        },
        { 
            name: "iPad A16 WiFi", 
            price: "12.590.000₫", 
            img: "img/ipad-11-wifi-yellow.png", 
            delay: 250, 
            specs: { screen: "10.9 inch Liquid Retina", chip: "A16 Bionic", camera: "12MP Góc Rộng", port: "USB-C" }, 
            desc: "Chiếc iPad phổ thông mang màu sắc tươi mới. Đáp ứng xuất sắc mọi nhu cầu cơ bản hằng ngày." 
        }
    ];

    const accessoriesData = [
        { 
            name: "AirPods Pro 3", 
            price: "6.590.000₫", 
            img: "img/airpods-pro-3.png", 
            delay: 0, 
            specs: { type: "In-ear", battery: "Lên đến 30h", feature: "Chống ồn (ANC)", chip: "Apple H2" }, 
            desc: "Âm thanh đắm chìm với công nghệ chống ồn chủ động xuất sắc nhất. Hộp sạc hỗ trợ MagSafe và USB-C." 
        },
        { 
            name: "AirPods 4", 
            price: "3.490.000₫", 
            img: "img/airpods-4.png", 
            delay: 50, 
            specs: { type: "Earbuds", battery: "Lên đến 30h", audio: "Âm thanh không gian", water: "Chống mồ hôi IPX4" }, 
            desc: "Thiết kế ôm sát tai, kết hợp Âm thanh không gian cá nhân hóa mang đến trải nghiệm nghe nhạc tuyệt vời." 
        },
        { 
            name: "AirTag", 
            price: "790.000₫", 
            img: "img/airtag.png", 
            delay: 100, 
            specs: { tracking: "Tìm chính xác", battery: "Pin 1 năm", water: "Chống nước IP67", feature: "Tích hợp loa" }, 
            desc: "Đừng bao giờ làm mất đồ dùng cá nhân nữa. Gắn AirTag vào chìa khóa hoặc balo để định vị dễ dàng." 
        },
        { 
            name: "Sạc 20W USB-C", 
            price: "550.000₫", 
            img: "img/sac-20w.png", 
            delay: 150, 
            specs: { power: "20W", port: "USB-C", comp: "iPhone, iPad", feature: "Sạc nhanh" }, 
            desc: "Bộ tiếp hợp nguồn USB-C 20W của Apple giúp sạc nhanh, hiệu quả tại nhà, văn phòng hay khi di chuyển." 
        },
        { 
            name: "Ốp lưng MagSafe iPhone 17", 
            price: "1.290.000₫", 
            img: "img/op-magsafe.png", 
            delay: 200, 
            specs: { material: "Silicone cao cấp", comp: "iPhone 17", feature: "Hỗ trợ MagSafe", color: "Nhiều màu" }, 
            desc: "Bảo vệ iPhone của bạn một cách phong cách. Tích hợp nam châm căn chỉnh hoàn hảo cho sạc không dây." 
        },
        { 
            name: "Cáp Sạc Bện USB-C", 
            price: "490.000₫", 
            img: "img/cap-usbc.png", 
            delay: 250, 
            specs: { length: "1 mét", material: "Dây bện", port: "USB-C to USB-C", power: "Hỗ trợ sạc 60W" }, 
            desc: "Cáp sạc siêu bền với thiết kế dây bện, hoàn hảo để sạc và đồng bộ hóa thiết bị có cổng USB-C." 
        }
    ];

    // Gộp toàn bộ mảng dữ liệu phục vụ tìm kiếm
    const allProducts = [...iphonesData, ...watchesData, ...macsData, ...ipadsData, ...accessoriesData];

    // =========================================================================
    // KHU VỰC 2: CÁC TIỆN ÍCH HỆ THỐNG & ĐỊNH DẠNG (UTILITIES)
    // =========================================================================
    function parsePrice(priceString) { return parseInt(priceString.replace(/\./g, '').replace('₫', '')); }
    function formatPrice(priceNumber) { return priceNumber.toLocaleString('vi-VN') + '₫'; }
    let globalTotalMoney = 0; // Lưu tổng số tiền đơn hàng

    // =========================================================================
    // KHU VỰC 3: HỆ THỐNG BỘ NHỚ LƯU TRỮ (LOCALSTORAGE)
    // =========================================================================
    let cart = JSON.parse(localStorage.getItem('ceramix_cart')) || []; 

    // =========================================================================
    // KHU VỰC 4: HIỆU ỨNG GIAO DIỆN CHUNG (THEME, SCROLL, TOAST)
    // =========================================================================
    const header = document.querySelector('header');
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
        if (window.scrollY > 500) backToTopBtn.classList.add('show');
        else backToTopBtn.classList.remove('show');
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    }

    // Logic Đổi Theme Sáng / Tối
    const themeBtn = document.getElementById('theme-toggle');
    const moonIcon = themeBtn.querySelector('.moon-icon');
    const sunIcon = themeBtn.querySelector('.sun-icon');
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        moonIcon.style.display = 'none'; sunIcon.style.display = 'block';
    }

    themeBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            moonIcon.style.display = 'block'; sunIcon.style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            moonIcon.style.display = 'none'; sunIcon.style.display = 'block';
        }
    });

    // Thông báo Toast
    function showToast(message) {
        const toastContainer = document.getElementById('toast-container');
        if (!toastContainer) return;
        const toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34c759" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> ${message}`;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.classList.add('hide');
            setTimeout(() => toast.remove(), 400); 
        }, 2500);
    }

    // =========================================================================
    // KHU VỰC 5: LOGIC IN SẢN PHẨM & THANH TRƯỢT (RENDER & SLIDER LOGIC)
    // =========================================================================
    function renderProducts(data, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = ''; 
        data.forEach((product, index) => {
            const animDelay = index * 50; 
            const productHTML = `
                <div class="product fade-in" style="transition-delay: ${animDelay}ms;">
                    <img src="${product.img}" alt="${product.name}" class="product-image" loading="lazy">
                    <p class="price">${product.price}</p>
                    <h3>${product.name}</h3>
                    <div class="product-actions">
                        <a href="#" class="btn-learn-more" data-name="${product.name}">Tìm hiểu thêm</a>
                        <button class="btn-buy" data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">Mua</button>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML("beforeend", productHTML);
        });
    }

    // Quan sát hiệu ứng chuyển động xuất hiện dần (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    function observeElements() { document.querySelectorAll('.fade-in:not(.show)').forEach((el) => observer.observe(el)); }

    // Điều hướng nút mũi tên trượt ngang
    const wrappers = document.querySelectorAll('.products-wrapper');
    wrappers.forEach(wrapper => {
        const slider = wrapper.querySelector('.products-section');
        const prevBtn = wrapper.querySelector('.prev-btn');
        const nextBtn = wrapper.querySelector('.next-btn');
        if (slider && prevBtn && nextBtn) {
            const getScrollAmount = () => {
                const firstProduct = slider.querySelector('.product');
                return firstProduct ? firstProduct.offsetWidth + 30 : 350;
            };
            nextBtn.addEventListener('click', () => { slider.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }); });
            prevBtn.addEventListener('click', () => { slider.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }); });
        }
    });

    // Lọc và sắp xếp giá tiền
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            let sortedIphones = [...iphonesData];
            let sortedWatches = [...watchesData];
            let sortedMacs = [...macsData];      
            let sortedIpads = [...ipadsData];   
            let sortedAccessories = [...accessoriesData]; 

            if (sortType === 'asc') {
                sortedIphones.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                sortedWatches.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                sortedMacs.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                sortedIpads.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                sortedAccessories.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            } else if (sortType === 'desc') {
                sortedIphones.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                sortedWatches.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                sortedMacs.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                sortedIpads.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                sortedAccessories.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            }
            renderProducts(sortedIphones, 'iphone-list');
            renderProducts(sortedWatches, 'watch-list');
            renderProducts(sortedMacs, 'mac-list');     
            renderProducts(sortedIpads, 'ipad-list');   
            renderProducts(sortedAccessories, 'accessories-list'); 
            setTimeout(() => observeElements(), 50);
        });
    }

    // =========================================================================
    // KHU VỰC 6: TÌM KIẾM TOÀN MÀN HÌNH (SEARCH BAR INTERACTION)
    // =========================================================================
    const searchOverlay = document.getElementById('search-overlay');
    const btnSearchIcon = document.querySelector('.search-btn');
    const btnCloseSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    function toggleSearch() {
        searchOverlay.classList.toggle('active');
        if (searchOverlay.classList.contains('active')) {
            searchInput.value = ''; searchResults.innerHTML = '';
            setTimeout(() => searchInput.focus(), 300);
        }
    }

    if (btnSearchIcon) btnSearchIcon.addEventListener('click', toggleSearch);
    if (btnCloseSearch) btnCloseSearch.addEventListener('click', toggleSearch);
    if (searchOverlay) searchOverlay.addEventListener('click', function(e) { if (e.target === searchOverlay) toggleSearch(); });

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const keyword = e.target.value.toLowerCase().trim();
            searchResults.innerHTML = '';
            if (keyword.length === 0) return;
            const filteredProducts = allProducts.filter(p => p.name.toLowerCase().includes(keyword));
            if (filteredProducts.length === 0) {
                searchResults.innerHTML = '<p style="color: #b5aba2; grid-column: 1/-1; text-align: center;">Không tìm thấy sản phẩm nào phù hợp.</p>';
                return;
            }
            filteredProducts.forEach(product => {
                searchResults.insertAdjacentHTML("beforeend", `
                    <div class="product" style="padding: 15px;">
                        <img src="${product.img}" alt="${product.name}" class="product-image" style="height: 150px;">
                        <p class="price" style="font-size: 12px;">${product.price}</p>
                        <h3 style="font-size: 14px; margin-bottom: 10px;">${product.name}</h3>
                        <div class="product-actions" style="flex-direction: column; gap: 5px;">
                            <a href="#" class="btn-learn-more" style="padding: 5px 0; width: 100%; font-size: 11px;" data-name="${product.name}">Chi tiết</a>
                            <button class="btn-buy" style="padding: 5px 0; width: 100%; font-size: 11px;" data-name="${product.name}" data-price="${product.price}" data-img="${product.img}">Mua</button>
                        </div>
                    </div>
                `);
            });
        });
    }

    // =========================================================================
    // KHU VỰC 7: CHI TIẾT SẢN PHẨM QUICK VIEW (MODAL WINDOW)
    // =========================================================================
    const modalOverlay = document.getElementById('quickview-overlay');
    const modal = document.getElementById('quickview-modal');
    const btnCloseModal = document.getElementById('close-modal');

    function openModal(product) {
        document.getElementById('modal-img').src = product.img;
        document.getElementById('modal-title').textContent = product.name;
        document.getElementById('modal-price').textContent = product.price;
        document.getElementById('modal-desc').textContent = product.desc;

        const specsContainer = document.getElementById('modal-specs');
        specsContainer.innerHTML = '';
        const labelMap = { screen: "Màn hình", chip: "Vi xử lý", camera: "Camera", battery: "Pin", size: "Kích thước", material: "Chất liệu", feature: "Tính năng", health: "Sức khỏe", water: "Chống nước", band: "Dây đeo", weight: "Trọng lượng" };
        for (const [key, value] of Object.entries(product.specs)) {
            const label = labelMap[key] || key;
            specsContainer.innerHTML += `<div class="spec-item"><span>${label}</span>${value}</div>`;
        }

        const btnAdd = document.getElementById('modal-btn-add');
        btnAdd.setAttribute('data-name', product.name);
        btnAdd.setAttribute('data-price', product.price);
        btnAdd.setAttribute('data-img', product.img);

        modalOverlay.classList.add('active');
        modal.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        modal.classList.remove('active');
    }

    if(btnCloseModal) btnCloseModal.addEventListener('click', closeModal);
    if(modalOverlay) modalOverlay.addEventListener('click', function(e) { if(e.target === modalOverlay) closeModal(); });

    // =========================================================================
    // KHU VỰC 8: GIỎ HÀNG CHUYÊN SÂU (SHOPPING CART & UI UPDATE)
    // =========================================================================
    const cartBtn = document.getElementById('cart-btn');
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    const closeCartBtn = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const cartBadge = document.getElementById('cart-badge');

    function toggleCart() {
        cartSidebar.classList.toggle('active');
        cartOverlay.classList.toggle('active');
    }

    if (cartBtn) cartBtn.addEventListener('click', toggleCart);
    if (closeCartBtn) closeCartBtn.addEventListener('click', toggleCart);
    if (cartOverlay) cartOverlay.addEventListener('click', function(e) { if(e.target === cartOverlay) toggleCart(); });

    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        globalTotalMoney = 0; 
        let totalItems = 0; 

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart-msg">Giỏ hàng đang trống.</p>';
            cartBadge.classList.remove('active');
        } else {
            cart.forEach((item, index) => {
                globalTotalMoney += item.priceNumber * item.quantity;
                totalItems += item.quantity;

                const cartItemHTML = `
                    <div class="cart-item">
                        <img src="${item.img}" alt="${item.name}" class="cart-item-img">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4><p>${item.price}</p>
                            <div class="cart-item-actions">
                                <div class="quantity-controls">
                                    <button class="btn-qty decrease" data-index="${index}">-</button>
                                    <span class="qty-value">${item.quantity}</span>
                                    <button class="btn-qty increase" data-index="${index}">+</button>
                                </div>
                                <button class="remove-item" data-index="${index}">Xóa</button>
                            </div>
                        </div>
                    </div>
                `;
                cartItemsContainer.insertAdjacentHTML('beforeend', cartItemHTML);
            });
            cartBadge.textContent = totalItems;
            cartBadge.classList.add('active');
        }

        cartTotalPrice.textContent = formatPrice(globalTotalMoney);
        attachCartEvents(); 

        // Ghi dữ liệu đồng bộ vào máy người dùng
        localStorage.setItem('ceramix_cart', JSON.stringify(cart));
    }

    function attachCartEvents() {
        document.querySelectorAll('.remove-item').forEach(btn => btn.addEventListener('click', function() { cart.splice(this.getAttribute('data-index'), 1); updateCartUI(); }));
        document.querySelectorAll('.increase').forEach(btn => btn.addEventListener('click', function() { cart[this.getAttribute('data-index')].quantity += 1; updateCartUI(); }));
        document.querySelectorAll('.decrease').forEach(btn => btn.addEventListener('click', function() {
            const idx = this.getAttribute('data-index');
            if (cart[idx].quantity > 1) cart[idx].quantity -= 1; else cart.splice(idx, 1);
            updateCartUI();
        }));
    }

    // =========================================================================
    // KHU VỰC 9: THỦ TỤC ĐẶT HÀNG & GIAO DỊCH (CHECKOUT CONTROLLER)
    // =========================================================================
    const btnOpenCheckout = document.querySelector('.btn-checkout');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutBtn = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const finalPriceDisplay = document.getElementById('checkout-final-price');

    function closeCheckout() {
        checkoutOverlay.classList.remove('active');
        checkoutModal.classList.remove('active');
    }

    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', function(e) { if(e.target === checkoutOverlay) closeCheckout(); });

    if(btnOpenCheckout) {
        btnOpenCheckout.addEventListener('click', function() {
            if(cart.length === 0) {
                showToast('Giỏ hàng của bạn đang trống!');
                return;
            }
            toggleCart(); 
            finalPriceDisplay.textContent = formatPrice(globalTotalMoney); 
            checkoutOverlay.classList.add('active'); 
            checkoutModal.classList.add('active');
        });
    }

    if(checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            // Lấy dữ liệu người dùng nhập vào
            const phoneInput = document.getElementById('cus-phone').value.trim();
            const nameInput = document.getElementById('cus-name').value.trim();
            
            // BẮT LỖI BẢO MẬT: Kiểm tra số điện thoại Việt Nam (phải có 10 số, bắt đầu bằng số 0)
            const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (!vnf_regex.test(phoneInput)) {
                showToast('❌ Số điện thoại không đúng định dạng Việt Nam!');
                return; // Dừng xử lý đơn hàng nếu nhập sai
            }
            
            const btnSubmit = document.getElementById('btn-submit-order');
            const originalText = btnSubmit.textContent;
            
            btnSubmit.textContent = 'Đang xử lý đơn hàng...';
            btnSubmit.style.opacity = '0.7';
            btnSubmit.style.pointerEvents = 'none';
            
            setTimeout(() => {
                btnSubmit.textContent = originalText;
                btnSubmit.style.opacity = '1';
                btnSubmit.style.pointerEvents = 'auto';
                
                // Hiển thị tên khách hàng lên câu chúc mừng cho thân thiện
                showToast(`🎉 Cảm ơn ${nameInput}! Đặt hàng thành công. Mã đơn: #HD` + Math.floor(Math.random() * 90000 + 10000));
                closeCheckout();
                checkoutForm.reset(); 
                cart = [];
                updateCartUI();
            }, 2000);
        });
    }

    // =========================================================================
    // KHU VỰC 10: TỔNG HỢP LẮNG NGHE LỆNH CLICK TRÊN TOÀN TRANG (GLOBAL CLICKS)
    // =========================================================================
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-learn-more')) {
            e.preventDefault();
            const product = allProducts.find(p => p.name === e.target.getAttribute('data-name'));
            if (product) {
                if(searchOverlay.classList.contains('active')) toggleSearch();  
                openModal(product);
            }
        }

        if (e.target.classList.contains('btn-buy')) {
            e.preventDefault(); 
            const name = e.target.getAttribute('data-name');
            const existingItem = cart.find(item => item.name === name);
            if (existingItem) existingItem.quantity += 1;
            else cart.push({ name, price: e.target.getAttribute('data-price'), img: e.target.getAttribute('data-img'), priceNumber: parsePrice(e.target.getAttribute('data-price')), quantity: 1 });
            
            updateCartUI();
            
            cartBadge.classList.remove('bump'); 
            setTimeout(() => { cartBadge.classList.add('bump'); }, 10);
            
            showToast(`Đã thêm ${name} vào giỏ hàng`);

            if(e.target.classList.contains('modal-btn-add')) closeModal();
            if(searchOverlay.classList.contains('active')) toggleSearch();
        }
    });

    const heroImg = document.getElementById('hero-iphone-img');
    if (heroImg) {
        document.querySelectorAll('.swatch').forEach(swatch => {
            swatch.addEventListener('click', function() {
                document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
                this.classList.add('active');
                heroImg.style.opacity = 0;
                setTimeout(() => { heroImg.src = this.getAttribute('data-img'); heroImg.style.opacity = 1; }, 300);
            });
        });
    }

    // =========================================================================
    // KHU VỰC 11: CẤU HÌNH KHỞI CHẠY HỆ THỐNG BAN ĐẦU (SYSTEM INITIALIZATION)
    // =========================================================================
    // 1. Kết xuất toàn bộ danh sách sản phẩm lên trang
    renderProducts(iphonesData, "iphone-list");
    renderProducts(watchesData, "watch-list");
    renderProducts(macsData, "mac-list");
    renderProducts(ipadsData, "ipad-list");
    renderProducts(accessoriesData, "accessories-list");

    // 2. Kích hoạt và hiển thị lại bộ nhớ giỏ hàng cũ ngay khi vừa mở web
    updateCartUI();

    // 3. Đăng ký các phần tử chuyển động ban đầu
    observeElements();

    // 4. Giải quyết triệt để lỗi nhích hàng khi nhấn F5
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
});