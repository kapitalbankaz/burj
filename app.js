/* ===== BURJ KHALIFA RESTAURANT APP ===== */

// ===== STATE =====
const state = {
    currentPage: 'home',
    pageHistory: [],
    cart: [],
    currentDish: null,
    currentVacancy: null,
    galleryImages: [
        { src: 'images/gallery-hookah.jpg', alt: 'Kəlyan' },
        { src: 'images/dish-lamb.jpg', alt: 'Quzu baldırı' },
        { src: 'images/gallery-hookah.jpg', alt: 'Restoran atmosferi' },
        { src: 'images/dish-lamb.jpg', alt: 'Əsas yeməklər' },
        { src: 'images/gallery-hookah.jpg', alt: 'Meyvəli içkilər' },
        { src: 'images/dish-lamb.jpg', alt: 'Restoran yeməkləri' }
    ],
    lightboxIndex: 0
};

// ===== DISH DATABASE =====
const dishes = {
    'breakfast-2': {
        id: 'breakfast-2',
        name: '2 nəfərlik Səhər Yeməyi',
        price: 26,
        img: 'images/gallery-hookah.jpg',
        desc: 'Kərə yağı, Qaymaq, Şor, Meyvəli kəsmik, Bal, Şokolad yağı, Yoqurt, Cem 2 növ, Zeytun 2 növ, Pendir çeşidi 3 növ, Kolbasa çeşidi 3 növ, Xiyar, Pomidor, Suda bişmiş sosiska, Qaynanmış yumurta, Kəsmikli blinçik, Simit. Tam doyurucu 2 nəfərlik sübh yeməyi dəsti.'
    },
    'breakfast-4': {
        id: 'breakfast-4',
        name: '4 nəfərlik Səhər Yeməyi',
        price: 44,
        img: 'images/gallery-hookah.jpg',
        desc: 'Kərə yağı, Qaymaq, Şor, Meyvəli kəsmik, Bal, Şokolad yağı, Yoqurt, Cem 2 növ, Zeytun 2 növ, Pendir çeşidi 3 növ, Kolbasa çeşidi 3 növ, Xiyar, Pomidor, Suda bişmiş sosiska, Qaynanmış yumurta, Kəsmikli blinçik, Simit. Ailə üçün ideal 4 nəfərlik sübh yeməyi dəsti.'
    },
    'lunch-monday': {
        id: 'lunch-monday',
        name: 'Biznes Lunch – Bazar ertəsi',
        price: 8,
        img: 'images/dish-lamb.jpg',
        desc: 'Mərci və ya Toyuq şorbası, Yunan salatı və ya Toyuq salatı, Ət Qulyaj və ya Toyuq Julyen, Düyü və ya Alma dilim kartof. Həftənin ilk iş gününə enerji verən doyurucu kompleks.'
    },
    'lunch-wednesday': {
        id: 'lunch-wednesday',
        name: 'Biznes Lunch – Çərşənbə',
        price: 8,
        img: 'images/dish-lamb.jpg',
        desc: 'Mərci və ya Göbələk şorbası, Valdorf salat - Taco salat can əti, Ət straganof - Toyuq langet, Qarışıq tərəvəz - Təzə kartof. Çərşənbə üçün xüsusi hazırlanmış biznes kompleksi.'
    },
    'lunch-thursday': {
        id: 'lunch-thursday',
        name: 'Biznes Lunch – Cümə axşamı',
        price: 8,
        img: 'images/dish-lamb.jpg',
        desc: 'Mərci və ya Toyuq şorbası, Yunan salatı, Toyuq fillet, Düyü pilaf. Həftənin ortasında doyurucu biznes naharı.'
    },
    'lunch-friday': {
        id: 'lunch-friday',
        name: 'Biznes Lunch – Cümə',
        price: 8,
        img: 'images/dish-lamb.jpg',
        desc: 'Göbələk kremi şorbası, Cezar salatı, Ət bifşteks, Kartof püre. Həftə sonu öncəsindən xüsusi biznes kompleksi.'
    },
    'meze-acili': {
        id: 'meze-acili',
        name: 'Acılı əzmə',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Rəngli bibər, pomidor, soğan, tomat, göyərti ilə hazırlanan ənənəvi acılı əzmə. Pendir, çörək ilə mükəmməl uyğun gəlir. Əl ilə hazırlanmış resept.'
    },
    'meze-haydari': {
        id: 'meze-haydari',
        name: 'Haydari',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Süzmə, sarımsaq, nanə, kərə yağı, zeytun yağı ilə hazırlanan kremli türk məzəsi. Soyuq servis edilir, çörək ilə əla uyğun gəlir.'
    },
    'meze-humus': {
        id: 'meze-humus',
        name: 'Humus',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Noxud, tahin, sarımsaq, zeytun yağı ilə hazırlanan klassik Orta Şərq məzəsi. Üzərinə paprika tozu və zeytun yağı ilə servis edilir.'
    },
    'meze-pembe': {
        id: 'meze-pembe',
        name: 'Pembe sultan',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Çuğundur, süzmə, sarımsaq ilə hazırlanan gözəl pembe rəngli kreativ məzə. Quru lavend ilə bəzədilərək servis edilir.'
    },
    'sorba-pendir': {
        id: 'sorba-pendir',
        name: 'Pendir şorbası',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Mavi pendir, çedar, parmesan, gauda, krem pendir – 5 növ pendirin birləşimindən hazırlanan zəngin kremalı şorba. Kraker ilə servis edilir.'
    },
    'sorba-tomyam': {
        id: 'sorba-tomyam',
        name: 'Tom Yam şorbası',
        price: 10,
        img: 'images/dish-lamb.jpg',
        desc: 'Krevetka, zəncəfil, sarımsaq, göbələk, acı bibər, limon ilə hazırlanan Tailand-ın məşhur şorbası. Ekzotik ədviyyatların uyumu ilə unudulmaz dad.'
    },
    'sorba-toyuq': {
        id: 'sorba-toyuq',
        name: 'Toyuq şorbası',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Kənd toyuğu, kartof, soğan, rəngli bibər, göyərti ilə hazırlanan ənənəvi ev şorbası. Nənə ilə servis edilir.'
    },
    'sorba-tomat': {
        id: 'sorba-tomat',
        name: 'Tomat şorbası',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Pomidor, soğan, yerkökü, parmesan, fresh göyərti ilə hazırlanan İtalyan tərzi kremalı tomat şorbası. Krutun ilə servis edilir.'
    },
    'sorba-merci': {
        id: 'sorba-merci',
        name: 'Mərci şorbası',
        price: 6,
        img: 'images/dish-lamb.jpg',
        desc: 'Qırmızı mərci, soğan, havuc, zirə, limon suyu ilə hazırlanan qida dəyəri yüksək şorba. Ənənəvi resept əsasında hazırlanır.'
    },
    'sorba-gobeleq': {
        id: 'sorba-gobeleq',
        name: 'Göbələk kremi şorbası',
        price: 7,
        img: 'images/dish-lamb.jpg',
        desc: 'Ağ göbələk, qaymaqlı sousu, sarımsaq, kərə yağı ilə hazırlanan zəngin kremalı şorba. Qızardılmış göbələk ilə servis edilir.'
    },
    'esas-quzu': {
        id: 'esas-quzu',
        name: 'Quzu baldırı gilas sousunda',
        price: 22,
        img: 'images/dish-lamb.jpg',
        desc: 'Uzun müddət yavaş temperaturda bişirilmiş yumuşacıq quzu baldırı, zəngin gilas-ənar sousunda, bişmiş kartof qarniri ilə servis edilir. Restoranımızın ən populyar yeməyi.'
    },
    'esas-toyuq-julyen': {
        id: 'esas-toyuq-julyen',
        name: 'Toyuq Julyen',
        price: 12,
        img: 'images/dish-lamb.jpg',
        desc: 'Toyuq filesi, göbələk, qaymaq sousu, pendir qabığı ilə fırında bişirilmiş fransız tərzi yemək. Kokot qabında xidmət edilir.'
    },
    'esas-et-qulyaj': {
        id: 'esas-et-qulyaj',
        name: 'Ət Qulyaj',
        price: 14,
        img: 'images/dish-lamb.jpg',
        desc: 'Dana əti, soğan, tomat sousu, ədviyyat qarışığı ilə yavaş pişirilmiş doyurucu yemək. Düyü və ya kartof ilə servis edilir.'
    },
    'esas-et-straganof': {
        id: 'esas-et-straganof',
        name: 'Ət Stroqanof',
        price: 15,
        img: 'images/dish-lamb.jpg',
        desc: 'Mal əti zolaqlı, göbələk, ekşi qaymaq sousu ilə hazırlanan rus klassikası. Düyü pilaf üzərində servis edilir.'
    },
    'esas-toyuq-langet': {
        id: 'esas-toyuq-langet',
        name: 'Toyuq Langet',
        price: 12,
        img: 'images/dish-lamb.jpg',
        desc: 'Döyülmüş toyuq filesi, qızardılmış çörək qabığı, limon ilə hazırlanan klassik langet. Kartof püresi ilə servis edilir.'
    },
    'esas-bifsteks': {
        id: 'esas-bifsteks',
        name: 'Ət bifşteks',
        price: 16,
        img: 'images/dish-lamb.jpg',
        desc: 'Seçilmiş mal əti, kartof püresi, yaşıl salat ilə servis edilən klassik bifşteks. Öz şirəsini saxlayan mükəmməl pişirmə dərəcəsi.'
    },
    'desert-blincik': {
        id: 'desert-blincik',
        name: 'Kəsmikli blinçik',
        price: 8,
        img: 'images/gallery-hookah.jpg',
        desc: 'Ev kəsmiyi, şokolad surupu, qaymaq, meyvə garniri ilə hazırlanan incə rus blinçikləri. Sürtkə ilə birgə servis edilir.'
    },
    'desert-cheesecake': {
        id: 'desert-cheesecake',
        name: 'Cheesecake',
        price: 9,
        img: 'images/gallery-hookah.jpg',
        desc: 'Krem pendir, biskvit, çiyələk sousunda hazırlanan klassik New York cheesecake. Hər dilim diqqətlə hazırlanır.'
    },
    'desert-tiramisu': {
        id: 'desert-tiramisu',
        name: 'Tiramisu',
        price: 9,
        img: 'images/gallery-hookah.jpg',
        desc: 'Maskarpone, espresso, savoiardi biskvit, kakao tozu ilə hazırlanan İtalyan klassik deserti. Gecə boyu soyudulub servis edilir.'
    },
    'desert-waffle': {
        id: 'desert-waffle',
        name: 'Waffle',
        price: 10,
        img: 'images/gallery-hookah.jpg',
        desc: 'Ev waffle, dondurma, şokolad, gilas ilə hazırlanan isti-soyuq birləşimi. Uşaqlar üçün sevimli seçim.'
    },
    'icki-cay': {
        id: 'icki-cay',
        name: 'Azərbaycan çayı',
        price: 3,
        img: 'images/gallery-hookah.jpg',
        desc: 'Armudu stəkanda ənənəvi Azərbaycan çayı, qənddən ilə. Bakı qənd və ya doğma mürəbbə ilə servis edilir.'
    },
    'icki-limonad': {
        id: 'icki-limonad',
        name: 'Ev limonadı',
        price: 5,
        img: 'images/gallery-hookah.jpg',
        desc: 'Təzə limon, nanə, zəncəfil, qazsız su ilə hazırlanan sağlam ev limonadı. Şəkər miqdarı seçilə bilər.'
    },
    'icki-fresh': {
        id: 'icki-fresh',
        name: 'Təzə sıxılmış şirə',
        price: 5,
        img: 'images/gallery-hookah.jpg',
        desc: 'Portağal, alma, yaxud qarışıq meyvədən hazırlanan 100% təbii şirə. Hər sifarişə anındaca sıxılır.'
    },
    'icki-smoothie': {
        id: 'icki-smoothie',
        name: 'Smoothie',
        price: 7,
        img: 'images/gallery-hookah.jpg',
        desc: 'Çiyələk, banan, yoqurt, bal ilə hazırlanan yüksək enerji verən smoothie. Sağlam həyat üçün ideal seçim.'
    },
    'icki-espresso': {
        id: 'icki-espresso',
        name: 'Espresso',
        price: 4,
        img: 'images/gallery-hookah.jpg',
        desc: 'Premium arabika blend, İtalyan espresso maşınında hazırlanmış yoğun qəhvə. Güclü aroması ilə gün başlanğıcı üçün mükəmməl.'
    },
    'icki-cappuccino': {
        id: 'icki-cappuccino',
        name: 'Kapuçino',
        price: 5,
        img: 'images/gallery-hookah.jpg',
        desc: 'Espresso, buxarlanmış süd, köpüklü süd ilə hazırlanan klassik kapuçino. Kakao tozu ilə bəzədilərək servis edilir.'
    },
    'hookah-meyveli': {
        id: 'hookah-meyveli',
        name: 'Meyvəli kəlyan',
        price: 25,
        img: 'images/gallery-hookah.jpg',
        desc: 'Portağal, çiyələk, limon, nanə ilə dolu buz içindəki şüşə qabda hazırlanan premium meyvəli kəlyan. egeglas marka şüşə ilə servis edilir.'
    },
    'hookah-klassik': {
        id: 'hookah-klassik',
        name: 'Klassik kəlyan',
        price: 20,
        img: 'images/gallery-hookah.jpg',
        desc: 'Elma, üzüm, nane, nar – seçimli ətirli tütün ilə hazırlanan klassik kəlyan. Geniş tütün seçimi mövcuddur.'
    },
    'hookah-premium': {
        id: 'hookah-premium',
        name: 'Premium kəlyan',
        price: 35,
        img: 'images/gallery-hookah.jpg',
        desc: 'Xüsusi qarışım, premium tütün, buz dolu egeglas şüşəsi ilə hazırlanan VIP kəlyan. Xüsusi günlər üçün ideal seçim.'
    },
    'hookah-citrus': {
        id: 'hookah-citrus',
        name: 'Sitrus kəlyan',
        price: 22,
        img: 'images/gallery-hookah.jpg',
        desc: 'Limon, portağal, qreypfrut, nanə tazəliyi ilə hazırlanan sitrus bazlı kəlyan. Soyuq buz ilə ekstra təravasıt.'
    }
};

// ===== VACANCY DATABASE =====
const vacancyData = {
    ofisant: {
        title: 'Ofisant',
        icon: '<i class="fas fa-concierge-bell"></i>',
        requirements: [
            'Minimum 1 il ofisiant təcrübəsi',
            'Azərbaycan və Rus dilini bilmək',
            'Kommunikasiya bacarıqları',
            'Gülərüzlü, müştəri yönümlü',
            'Tam ştat, həftə içi və ya həftə sonu'
        ],
        salary: '600 - 1000 ₼ + tips',
        type: 'Tam ştat'
    },
    aspcaz: {
        title: 'Aşpaz köməkçisi',
        icon: '<i class="fas fa-utensils"></i>',
        requirements: [
            'Aşpazlıq təcrübəsi üstünlükdür, lakin məcburi deyil',
            'Mətbəx gigiyenasına riayət etmək',
            'Sürətli öyrənmə qabiliyyəti',
            'Komanda ilə işləyə bilmək',
            'Tam ştat, 09:00-22:00 növbəli'
        ],
        salary: '500 - 700 ₼',
        type: 'Tam ştat'
    },
    kassa: {
        title: 'Kassir',
        icon: '<i class="fas fa-cash-register"></i>',
        requirements: [
            'Hesablama bacarığı',
            'Kassa aparatı ilə iş təcrübəsi üstünlükdür',
            'Diqqətli, dürüst',
            'Müştəri xidməti bacarıqları',
            'Tam ştat, növbəli iş'
        ],
        salary: '600 - 800 ₼',
        type: 'Tam ştat'
    },
    barmen: {
        title: 'Barmen',
        icon: '<i class="fas fa-glass-martini-alt"></i>',
        requirements: [
            'Barmenlik sertifikatı üstünlükdür',
            'İçki hazırlamaq bacarığı',
            'Kreativlik',
            'Sürətli xidmət',
            'Tam ştat, axşam növbəsi'
        ],
        salary: '700 - 1000 ₼ + tips',
        type: 'Tam ştat'
    },
    temizlik: {
        title: 'Təmizlik işçisi',
        icon: '<i class="fas fa-broom"></i>',
        requirements: [
            'Gigiyenaya riayət etmək',
            'Məsuliyyətli',
            'Erkən saatlarda işləyə bilmək',
            'Yarım ştat və ya tam ştat seçimli'
        ],
        salary: '400 - 600 ₼',
        type: 'Yarım / Tam ştat'
    },
    admin: {
        title: 'Administrator',
        icon: '<i class="fas fa-user-tie"></i>',
        requirements: [
            'İdarəetmə təcrübəsi üstünlükdür',
            'Güclü kommunikasiya bacarıqları',
            'Azərbaycan, Rus, İngilis dili',
            'Rezervasiya sisteminə nəzarət',
            'Personal idarəetmə bacarığı'
        ],
        salary: '800 - 1200 ₼',
        type: 'Tam ştat'
    }
};

// ===== PAGE NAVIGATION =====
function showPage(pageName) {
    if (state.currentPage === pageName) return;

    const prevPage = document.getElementById('page-' + state.currentPage);
    const nextPage = document.getElementById('page-' + pageName);

    if (!nextPage) return;

    if (pageName !== 'home') {
        state.pageHistory.push({
            page: state.currentPage,
            scrollY: window.scrollY
        });
    }

    if (prevPage) prevPage.classList.remove('active');
    nextPage.classList.add('active');
    state.currentPage = pageName;

    window.scrollTo({ top: 0, behavior: 'instant' });
    closeAllMenus();
}

function goBack() {
    if (state.pageHistory.length === 0) {
        showPage('home');
        return;
    }
    const prev = state.pageHistory.pop();

    const currentPageEl = document.getElementById('page-' + state.currentPage);
    const prevPageEl = document.getElementById('page-' + prev.page);

    if (!prevPageEl) { showPage('home'); return; }

    if (currentPageEl) currentPageEl.classList.remove('active');
    prevPageEl.classList.add('active');
    state.currentPage = prev.page;

    window.scrollTo({ top: prev.scrollY, behavior: 'instant' });
    closeAllMenus();
}

function closeAllMenus() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (toggle) toggle.classList.remove('open');
    if (menu) menu.classList.remove('open');
}

// ===== MENU TABS =====
function switchTab(tabName) {
    document.querySelectorAll('.menu-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));

    const section = document.getElementById('tab-' + tabName);
    if (section) section.classList.add('active');

    const tabs = document.querySelectorAll('.menu-tab');
    tabs.forEach(t => {
        if (t.getAttribute('onclick').includes("'" + tabName + "'")) {
            t.classList.add('active');
        }
    });
}

// ===== DISH MODAL =====
function openDish(id) {
    const dish = dishes[id];
    if (!dish) return;

    state.currentDish = dish;

    document.getElementById('modalImg').src = dish.img;
    document.getElementById('modalImg').alt = dish.name;
    document.getElementById('modalTitle').textContent = dish.name;
    document.getElementById('modalDesc').textContent = dish.desc;
    document.getElementById('modalPrice').textContent = dish.price + ' ₼';

    document.getElementById('dishOverlay').classList.add('open');
    document.getElementById('dishModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDishModal() {
    document.getElementById('dishOverlay').classList.remove('open');
    document.getElementById('dishModal').classList.remove('open');
    document.body.style.overflow = '';
    state.currentDish = null;
}

function addToCartFromModal() {
    if (!state.currentDish) return;
    addToCart(state.currentDish.id, state.currentDish.name, state.currentDish.price);
    closeDishModal();
}

// ===== VACANCY MODAL =====
function openVacancy(key) {
    const v = vacancyData[key];
    if (!v) return;

    state.currentVacancy = key;

    document.getElementById('vacModalIcon').innerHTML = v.icon;
    document.getElementById('vacModalTitle').textContent = v.title;

    const content = `
        <p style="color: var(--text-muted); margin-bottom: 16px; font-size: 0.9rem; line-height: 1.7;">
            <strong style="color: var(--primary);">Növ:</strong> ${v.type}<br>
            <strong style="color: var(--primary);">Maaş:</strong> ${v.salary}
        </p>
        <ul>
            ${v.requirements.map(r => `<li><i class="fas fa-check-circle"></i><span>${r}</span></li>`).join('')}
        </ul>
    `;

    document.getElementById('vacModalContent').innerHTML = content;
    document.getElementById('vacancyOverlay').classList.add('open');
    document.getElementById('vacancyModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVacancyModal() {
    document.getElementById('vacancyOverlay').classList.remove('open');
    document.getElementById('vacancyModal').classList.remove('open');
    document.body.style.overflow = '';
    state.currentVacancy = null;
}

function applyVacancy() {
    const key = state.currentVacancy;
    const v = vacancyData[key];
    if (!v) return;

    const msg = `Salam! Burj Khalifa Restoranda *${v.title}* vakansiyasına müraciət etmək istəyirəm. Zəhmət olmasa əlaqə saxlayın.`;
    const encoded = encodeURIComponent(msg);
    window.open('https://wa.me/994559406018?text=' + encoded, '_blank');
}

// ===== CART =====
function addToCart(id, name, price) {
    const existing = state.cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        state.cart.push({ id, name, price, qty: 1 });
    }
    updateCartUI();
    showCartToast(name);
}

function removeFromCart(id) {
    state.cart = state.cart.filter(item => item.id !== id);
    updateCartUI();
}

function changeQty(id, delta) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function updateCartUI() {
    const count = state.cart.reduce((s, i) => s + i.qty, 0);
    const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);

    const cartCountEl = document.getElementById('cartCount');
    cartCountEl.textContent = count;
    cartCountEl.classList.toggle('visible', count > 0);

    const cartItemsEl = document.getElementById('cartItems');
    const cartFooterEl = document.getElementById('cartFooter');
    const cartTotalEl = document.getElementById('cartTotal');

    if (state.cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="cart-empty">Səbət boşdur</p>';
        cartFooterEl.style.display = 'none';
    } else {
        cartItemsEl.innerHTML = state.cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-name">${escapeHtml(item.name)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="changeQty('${item.id}', -1)"><i class="fas fa-minus"></i></button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn" onclick="changeQty('${item.id}', 1)"><i class="fas fa-plus"></i></button>
                </div>
                <div class="cart-item-price">${(item.price * item.qty).toFixed(2)} ₼</div>
                <button class="cart-item-remove" onclick="removeFromCart('${item.id}')"><i class="fas fa-times"></i></button>
            </div>
        `).join('');
        cartFooterEl.style.display = 'block';
        cartTotalEl.textContent = total.toFixed(2) + ' ₼';
    }
}

function toggleCart() {
    const panel = document.getElementById('cartPanel');
    const overlay = document.getElementById('cartOverlay');
    const isOpen = panel.classList.contains('open');

    if (isOpen) {
        panel.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    } else {
        panel.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function placeOrder() {
    if (state.cart.length === 0) return;

    const total = state.cart.reduce((s, i) => s + i.price * i.qty, 0);

    let msg = '🍽️ *Burj Khalifa Restoran - Yeni Sifariş*\n\n';
    msg += '📋 *Sifariş siyahısı:*\n';

    state.cart.forEach((item, i) => {
        msg += `${i + 1}. ${item.name} x${item.qty} = ${(item.price * item.qty).toFixed(2)} ₼\n`;
    });

    msg += `\n💰 *Ümumi məbləğ: ${total.toFixed(2)} ₼*\n`;
    msg += '\n✅ Zəhmət olmasa sifarişimi təsdiq edin.';

    const encoded = encodeURIComponent(msg);
    window.open('https://wa.me/994559406018?text=' + encoded, '_blank');
}

function showCartToast(name) {
    const existing = document.getElementById('cartToast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.style.cssText = `
        position: fixed; bottom: 90px; right: 24px; z-index: 900;
        background: var(--card-bg); border: 1px solid var(--border);
        border-radius: 10px; padding: 12px 18px;
        font-size: 0.85rem; color: var(--text);
        box-shadow: 0 4px 18px rgba(0,0,0,0.35);
        animation: slideInRight 0.3s ease;
        max-width: 250px;
    `;
    toast.innerHTML = `<i class="fas fa-check" style="color:var(--primary);margin-right:8px;"></i>${escapeHtml(name.length > 25 ? name.slice(0,25) + '...' : name)} səbətə əlavə edildi`;

    const style = document.createElement('style');
    style.textContent = `@keyframes slideInRight { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }`;
    document.head.appendChild(style);
    document.body.appendChild(toast);

    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ===== GALLERY =====
function openGallery(index) {
    state.lightboxIndex = index;
    const img = state.galleryImages[index];
    const lb = document.getElementById('lightbox');
    const lbImg = document.getElementById('lightboxImg');
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
}

function lightboxNav(delta) {
    const count = state.galleryImages.length;
    state.lightboxIndex = (state.lightboxIndex + delta + count) % count;
    const img = state.galleryImages[state.lightboxIndex];
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightboxImg').alt = img.alt;
}

// ===== RESERVATION =====
function submitReservation(e) {
    e.preventDefault();
    const name = document.getElementById('resName').value.trim();
    const phone = document.getElementById('resPhone').value.trim();
    const date = document.getElementById('resDate').value;
    const time = document.getElementById('resTime').value;
    const guests = document.getElementById('resGuests').value;
    const note = document.getElementById('resNote').value.trim();

    if (!name || !phone || !date || !time || !guests) {
        alert('Zəhmət olmasa bütün məcburi xanaları doldurun.');
        return;
    }

    const dateFormatted = new Date(date).toLocaleDateString('az-AZ', { day: '2-digit', month: '2-digit', year: 'numeric' });

    let msg = '📅 *Burj Khalifa Restoran - Rezervasiya*\n\n';
    msg += `👤 *Ad Soyad:* ${name}\n`;
    msg += `📞 *Telefon:* ${phone}\n`;
    msg += `📆 *Tarix:* ${dateFormatted}\n`;
    msg += `⏰ *Saat:* ${time}\n`;
    msg += `👥 *Qonaq sayı:* ${guests}\n`;
    if (note) msg += `📝 *Qeyd:* ${note}\n`;
    msg += '\n✅ Zəhmət olmasa rezervasiyanı təsdiq edin.';

    const encoded = encodeURIComponent(msg);
    window.open('https://wa.me/994559406018?text=' + encoded, '_blank');

    document.getElementById('reservationForm').reset();
}

// ===== FAQ =====
function toggleFaq(btn) {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

// ===== NAVBAR =====
function closeMobileMenu() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (toggle) toggle.classList.remove('open');
    if (menu) menu.classList.remove('open');
}

// ===== UTILS =====
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function () {
    // Navbar toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('open');
        navMenu.classList.toggle('open');
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });

    // Set minimum date for reservation
    const today = new Date().toISOString().split('T')[0];
    const resDate = document.getElementById('resDate');
    if (resDate) resDate.min = today;

    // Keyboard shortcuts
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeDishModal();
            closeVacancyModal();
            closeLightbox();
            const cartPanel = document.getElementById('cartPanel');
            if (cartPanel.classList.contains('open')) {
                toggleCart();
            }
        }
        if (e.key === 'ArrowLeft' && document.getElementById('lightbox').classList.contains('open')) {
            lightboxNav(-1);
        }
        if (e.key === 'ArrowRight' && document.getElementById('lightbox').classList.contains('open')) {
            lightboxNav(1);
        }
    });

    // Close menus when clicking outside
    document.addEventListener('click', function (e) {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.getElementById('navToggle');
        if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            closeMobileMenu();
        }
    });

    // Init cart UI
    updateCartUI();

    console.log('Burj Khalifa Restaurant app initialized');
});
