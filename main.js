document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. MẢNG DỮ LIỆU SẢN PHẨM 
    // ==========================================
    const iphonesData = [
        { name: "iPhone 17 Pro Max 256GB", price: "35.990.000₫", img: "img/iphone-17-pro-max-cam.png", delay: 0, specs: { screen: "6.9 inch Super Retina", chip: "A19 Pro", camera: "48MP Chính", battery: "Lên đến 29h video" }, desc: "Tuyệt tác thiết kế titan với viền màn hình mỏng nhất từng có. Camera sắc nét đỉnh cao cùng chip A19 Pro chinh phục mọi giới hạn." },
        { name: "iPhone 17 256GB", price: "23.990.000₫", img: "img/iphone-17-xanh-la.png", delay: 50, specs: { screen: "6.1 inch Super Retina", chip: "A19", camera: "Kép 48MP", battery: "Lên đến 22h video" }, desc: "Sắc màu rực rỡ, thiết kế nhôm bền bỉ. Nâng cấp mạnh mẽ với chip A19 mang lại hiệu năng ấn tượng cho mọi tác vụ hàng ngày." },
        { name: "iPhone Air 256GB", price: "22.990.000₫", img: "img/iphone-air-den.png", delay: 100, specs: { screen: "6.5 inch OLED", chip: "A19 Pro", camera: "Camera đơn 48MP", size: "Dày 5.6 mm" }, desc: "Chiếc iPhone mỏng nhẹ nhất trong lịch sử. Gần như tàng hình trong tay bạn nhưng vẫn sở hữu sức mạnh xử lý Pro." },
        { name: "iPhone 16 128GB", price: "20.990.000₫", img: "img/iphone-16-hong.png", delay: 150, specs: { screen: "6.1 inch Super Retina", chip: "A18", camera: "Kép 48MP", battery: "Lên đến 20h video" }, desc: "Trải nghiệm mượt mà với mức giá dễ tiếp cận. Thiết kế nguyên khối tinh tế cùng cụm camera chéo đặc trưng." },
        { name: "iPhone 17 Pro 256GB", price: "33.990.000₫", img: "img/iphone-17-pro-blue.png", delay: 200, specs: { screen: "6.3 inch Super Retina", chip: "A19 Pro", camera: "Pro 48MP", battery: "Lên đến 27h video" }, desc: "Khung viền Titanium chuẩn hàng không vũ trụ. Kích thước vừa tay kết hợp cùng cấu hình mạnh mẽ nhất từ Apple." },
        { name: "iPhone 16 Plus 128GB", price: "23.990.000₫", img: "img/iphone-16-plus-trang.png", delay: 250, specs: { screen: "6.7 inch Super Retina", chip: "A18", camera: "Kép 48MP", battery: "Lên đến 26h video" }, desc: "Màn hình siêu lớn cho không gian hiển thị rộng rãi, kết hợp cùng thời lượng pin xuất sắc cho cả ngày dài hoạt động." },
        { name: "iPhone 15 Plus 128GB", price: "17.990.000₫", img: "img/iphone-15-plus-black.png", delay: 300, specs: { screen: "6.7 inch OLED", chip: "A16 Bionic", camera: "Kép 48MP", feature: "Dynamic Island" }, desc: "Lựa chọn kinh tế với màn hình lớn và Dynamic Island tiện lợi. Thiết kế mặt lưng kính pha màu sang trọng." },
        { name: "iPhone 15 128GB", price: "17.990.000₫", img: "img/iphone-15-green.png", delay: 350, specs: { screen: "6.1 inch OLED", chip: "A16 Bionic", camera: "Kép 48MP", feature: "Cổng USB-C" }, desc: "Sự cân bằng hoàn hảo giữa giá cả và hiệu năng. Trang bị cổng sạc USB-C phổ quát và camera độ phân giải cao." }
    ];

    const watchesData = [
        { name: "Apple Watch Ultra 3", price: "26.490.000₫", img: "img/apple-watch-ultra-3-gps-cellular.png", delay: 0, specs: { material: "Titanium 49mm", screen: "Độ sáng 3000 nits", feature: "GPS Kép chuẩn xác", battery: "Lên đến 72h" }, desc: "Đồng hồ thể thao mạo hiểm tối thượng. Chống nước cực sâu, pin siêu bền bỉ dành cho các vận động viên chuyên nghiệp." },
        { name: "Apple Watch Series 11", price: "21.790.000₫", img: "img/apple-watch-series-11.png", delay: 50, specs: { material: "Nhôm / Thép 45mm", screen: "Viền siêu mỏng", feature: "Đo huyết áp", chip: "S11 SiP" }, desc: "Màn hình lớn nhất từng có trên Apple Watch tiêu chuẩn. Theo dõi sức khỏe toàn diện với cảm biến mới nhất." },
        { name: "Apple Watch Series 10p", price: "16.090.000₫", img: "img/apple-watch-s10.png", delay: 100, specs: { material: "Nhôm 46mm", screen: "OLED góc rộng", feature: "Sạc nhanh 80%", weight: "Nhẹ hơn 10%" }, desc: "Thiết kế mỏng nhẹ tinh tế, sạc cực nhanh giúp bạn luôn sẵn sàng theo dõi giấc ngủ và hoạt động cả ngày." },
        { name: "Apple Watch SE 3", price: "8.390.000₫", img: "img/apple-watch-se-3.png", delay: 150, specs: { material: "Vỏ Nhôm 40mm", chip: "S9 SiP", feature: "Phát hiện ngã", water: "Chống nước 50m" }, desc: "Mọi tính năng cốt lõi của Apple Watch với mức giá không thể hợp lý hơn. Lựa chọn tuyệt vời cho người mới bắt đầu." },
        { name: "Apple Watch Series 10s", price: "10.790.000₫", img: "img/apple-watch-series-10-lte.png", delay: 200, specs: { material: "Nhôm 42mm", feature: "Hỗ trợ eSIM", health: "Đo ECG", battery: "18 giờ" }, desc: "Luôn giữ kết nối ngay cả khi không mang theo iPhone nhờ kết nối Cellular tiện lợi." },
        { name: "Apple Watch Series 10 Milan", price: "17.490.000₫", img: "img/apple-watch-s10-lte-42mm.png", delay: 250, specs: { material: "Thép không gỉ", band: "Dây Milanese Loop", feature: "Kính Sapphire", chip: "S10 SiP" }, desc: "Phiên bản cao cấp với lớp vỏ sáng bóng và dây đeo thép dạng lưới từ Milan mang lại vẻ đẹp thanh lịch." },
        { name: "Apple Watch Ultra 2", price: "12.490.000₫", img: "img/apple-watch-ultra-3-gps-c.png", delay: 300, specs: { material: "Titanium", screen: "2000 nits", feature: "Còi báo động", band: "Ocean Band" }, desc: "Bền bỉ, đáng tin cậy trong mọi điều kiện khắc nghiệt. Phù hợp cho dân đam mê lặn biển và thể thao dã ngoại." },
        { name: "Apple Watch Series 9", price: "4.490.000₫", img: "img/apple-watch-series-11-gps-cellular.png", delay: 350, specs: { material: "Nhôm 41mm", feature: "Chạm hai lần (Double Tap)", health: "Đo oxy trong máu", chip: "S9" }, desc: "Thao tác ma thuật với chỉ hai ngón tay chạm nhau. Vi xử lý S9 cho tốc độ phản hồi cực nhanh." }
    ];

    const allProducts = [...iphonesData, ...watchesData];
    function parsePrice(priceString) { return parseInt(priceString.replace(/\./g, '').replace('₫', '')); }
    function formatPrice(priceNumber) { return priceNumber.toLocaleString('vi-VN') + '₫'; }
    let globalTotalMoney = 0; // Biến lưu tổng tiền để truyền sang form thanh toán

    // ==========================================
    // TOAST, HEADER ĐỘNG, BACK TO TOP & THEME
    // ==========================================
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

    // ==========================================
    // RENDER & SLIDER LOGIC
    // ==========================================
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

    renderProducts(iphonesData, "iphone-list");
    renderProducts(watchesData, "watch-list");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });

    function observeElements() { document.querySelectorAll('.fade-in:not(.show)').forEach((el) => observer.observe(el)); }
    observeElements();

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

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function(e) {
            const sortType = e.target.value;
            let sortedIphones = [...iphonesData];
            let sortedWatches = [...watchesData];

            if (sortType === 'asc') {
                sortedIphones.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
                sortedWatches.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            } else if (sortType === 'desc') {
                sortedIphones.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
                sortedWatches.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            }
            renderProducts(sortedIphones, 'iphone-list');
            renderProducts(sortedWatches, 'watch-list');
            setTimeout(() => observeElements(), 50);
        });
    }

    // ==========================================
    // LOGIC MODAL TÌM HIỂU THÊM (CHỈ CÓ 1 ẢNH)
    // ==========================================
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

    // ==========================================
    // TÌM KIẾM
    // ==========================================
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

    btnSearchIcon.addEventListener('click', toggleSearch);
    btnCloseSearch.addEventListener('click', toggleSearch);
    searchOverlay.addEventListener('click', function(e) { if (e.target === searchOverlay) toggleSearch(); });

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

    // ==========================================
    // GIỎ HÀNG 
    // ==========================================
    let cart = []; 
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

    cartBtn.addEventListener('click', toggleCart);
    closeCartBtn.addEventListener('click', toggleCart);
    cartOverlay.addEventListener('click', function(e) { if(e.target === cartOverlay) toggleCart(); });

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

    // ==========================================
    // LOGIC FORM THANH TOÁN (CHECKOUT MODAL)
    // ==========================================
    const btnOpenCheckout = document.querySelector('.btn-checkout');
    const checkoutOverlay = document.getElementById('checkout-overlay');
    const checkoutModal = document.getElementById('checkout-modal');
    const closeCheckoutBtn = document.getElementById('close-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const finalPriceDisplay = document.getElementById('checkout-final-price');

    // Hàm đóng form thanh toán
    function closeCheckout() {
        checkoutOverlay.classList.remove('active');
        checkoutModal.classList.remove('active');
    }

    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (checkoutOverlay) checkoutOverlay.addEventListener('click', function(e) { if(e.target === checkoutOverlay) closeCheckout(); });

    // Khi bấm "Thanh toán" trong Giỏ hàng
    if(btnOpenCheckout) {
        btnOpenCheckout.addEventListener('click', function() {
            if(cart.length === 0) {
                showToast('Giỏ hàng của bạn đang trống!');
                return;
            }
            toggleCart(); // Đóng Giỏ hàng
            finalPriceDisplay.textContent = formatPrice(globalTotalMoney); // Lấy số tiền từ Giỏ hàng truyền sang Form
            checkoutOverlay.classList.add('active'); // Mở Form
            checkoutModal.classList.add('active');
        });
    }

    // Khi điền xong form và bấm Xác nhận
    if(checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Tránh bị load lại trang
            
            const btnSubmit = document.getElementById('btn-submit-order');
            const originalText = btnSubmit.textContent;
            
            btnSubmit.textContent = 'Đang xử lý đơn hàng...';
            btnSubmit.style.opacity = '0.7';
            btnSubmit.style.pointerEvents = 'none';
            
            setTimeout(() => {
                btnSubmit.textContent = originalText;
                btnSubmit.style.opacity = '1';
                btnSubmit.style.pointerEvents = 'auto';
                
                showToast('🎉 Đặt hàng thành công! Mã đơn: #HD' + Math.floor(Math.random() * 90000 + 10000));
                closeCheckout();
                checkoutForm.reset(); 
                cart = [];
                updateCartUI();
            }, 2000);
        });
    }

    // TỔNG HỢP LẮNG NGHE SỰ KIỆN CLICK TOÀN TRANG
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
    document.querySelectorAll('.swatch').forEach(swatch => {
        swatch.addEventListener('click', function() {
            document.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            heroImg.style.opacity = 0;
            setTimeout(() => { heroImg.src = this.getAttribute('data-img'); heroImg.style.opacity = 1; }, 300);
        });
    });
});