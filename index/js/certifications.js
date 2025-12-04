// certifications.js - 資格カルーセル(スマホ完全修正版)
// ============================================
// スマホ: 1枚ずつ中央表示、シンプルなスライド
// PC: 前後1枚表示、クリックで移動

class Certifications {
    constructor() {
        this.track = document.getElementById("carouselTrack");
        this.indicators = document.getElementById("carouselIndicators");
        this.wrapper = document.querySelector(".certifications-carousel-wrapper");

        this.currentIndex = 0;
        this.totalCards = 0;
        this.isAnimating = false;
        this.newestIndex = 0;

        // スマホ用ボタンコンテナを作成
        this.createMobileControls();
    }

    // スマホ用のボタンコンテナを作成(タイトル横)
    createMobileControls() {
        const section = document.getElementById("certifications-section");
        const title = section.querySelector("h2");

        // ボタンコンテナ
        const controls = document.createElement("div");
        controls.className = "carousel-mobile-controls";
        controls.innerHTML = `
            <button class="carousel-mobile-btn" id="mobilePrev" aria-label="前の資格">
                <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button class="carousel-mobile-btn" id="mobileNext" aria-label="次の資格">
                <i class="fa-solid fa-chevron-right"></i>
            </button>
        `;

        // タイトルの横に配置
        const titleContainer = document.createElement("div");
        titleContainer.style.cssText = "display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;";

        title.parentNode.insertBefore(titleContainer, title);
        titleContainer.appendChild(title);
        titleContainer.appendChild(controls);
    }

    // 最新の資格を特定
    findNewestCertification() {
        let newestDate = new Date(0);
        let newestIdx = 0;

        certificationsData.forEach((cert, index) => {
            const parts = cert.date.split('/');
            const date = new Date(parts[0], parseInt(parts[1]) - 1);

            if (date > newestDate) {
                newestDate = date;
                newestIdx = index;
            }
        });

        return newestIdx;
    }

    // 資格カードを生成
    createCard(cert, index, isNewest) {
        const card = document.createElement('div');
        card.className = 'certification-card';
        card.setAttribute('data-index', index);

        // NEWバッジ
        if (isNewest) {
            const badge = document.createElement('div');
            badge.className = 'certification-badge';
            badge.textContent = 'NEW';
            card.appendChild(badge);
        }

        const name = document.createElement('div');
        name.className = 'certification-name';
        name.textContent = cert.name[currentLang];

        const organization = document.createElement('div');
        organization.className = 'certification-organization';
        organization.textContent = cert.organization[currentLang];

        const date = document.createElement('div');
        date.className = 'certification-date';
        date.textContent = cert.date;

        card.appendChild(name);
        card.appendChild(organization);
        card.appendChild(date);

        return card;
    }

    // カルーセルをレンダリング
    render() {
        this.track.innerHTML = "";
        this.indicators.innerHTML = "";

        this.newestIndex = this.findNewestCertification();
        this.totalCards = certificationsData.length;

        const isMobile = window.innerWidth <= 600;

        if (isMobile) {
            // スマホ: シンプルにカードを並べる
            certificationsData.forEach((cert, index) => {
                const card = this.createCard(cert, index, this.newestIndex === index);
                this.track.appendChild(card);
            });
        } else {
            // PC: 前後のクローンを配置
            const cardsToRender = [];

            // 前方3枚のクローン
            for (let i = 3; i > 0; i--) {
                const idx = (this.totalCards - i + this.totalCards) % this.totalCards;
                cardsToRender.push({
                    cert: certificationsData[idx],
                    index: idx,
                    isNewest: this.newestIndex === idx,
                    isClone: true
                });
            }

            // メインのカード
            certificationsData.forEach((cert, index) => {
                cardsToRender.push({
                    cert: cert,
                    index: index,
                    isNewest: this.newestIndex === index,
                    isClone: false
                });
            });

            // 後方3枚のクローン
            for (let i = 0; i < 3; i++) {
                const idx = i % this.totalCards;
                cardsToRender.push({
                    cert: certificationsData[idx],
                    index: idx,
                    isNewest: this.newestIndex === idx,
                    isClone: true
                });
            }

            // カードを生成
            cardsToRender.forEach(item => {
                const card = this.createCard(item.cert, item.index, item.isNewest);
                if (item.isClone) {
                    card.classList.add('clone');
                }
                this.track.appendChild(card);
            });
        }

        // インジケーター生成
        certificationsData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            this.indicators.appendChild(dot);
        });

        // 初期位置を設定
        this.currentIndex = 0;
        this.updateCarousel(false);
    }

    // カルーセル表示を更新
    updateCarousel(animate = true) {
        const isMobile = window.innerWidth <= 600;

        // トランジション制御
        if (animate && !isMobile) {
            this.track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        } else {
            this.track.style.transition = 'none';
        }

        if (isMobile) {
            // スマホ: transformを使わず、activeクラスの切り替えのみで制御
            // CSSで .active 以外は display: none になる
            this.track.style.transform = 'none';
        } else {
            // PC: クローンを考慮した配置
            const cardWidth = 320;
            const cloneOffset = 3;
            const actualIndex = this.currentIndex + cloneOffset;
            const offset = actualIndex * cardWidth;
            this.track.style.transform = `translateX(calc(50% - ${offset}px - ${cardWidth / 2}px))`;
        }

        // activeクラスの更新
        const allCards = this.track.querySelectorAll('.certification-card');
        const normalizedIndex = ((this.currentIndex % this.totalCards) + this.totalCards) % this.totalCards;

        allCards.forEach((card) => {
            card.classList.remove('active');
            const cardIndex = parseInt(card.getAttribute('data-index'));
            if (cardIndex === normalizedIndex) {
                card.classList.add('active');
            }
        });

        // インジケーターの更新
        const dots = this.indicators.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === normalizedIndex);
        });
    }

    // 次のスライドへ
    next() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.currentIndex++;
        this.updateCarousel(true);

        const isMobile = window.innerWidth <= 600;

        setTimeout(() => {
            // ループ処理
            if (this.currentIndex >= this.totalCards) {
                if (!isMobile) {
                    this.track.style.transition = 'none';
                }
                this.currentIndex = 0;
                this.updateCarousel(false);
            }
            this.isAnimating = false;
        }, 500);
    }

    // 前のスライドへ
    prev() {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.currentIndex--;
        this.updateCarousel(true);

        const isMobile = window.innerWidth <= 600;

        setTimeout(() => {
            // ループ処理
            if (this.currentIndex < 0) {
                if (!isMobile) {
                    this.track.style.transition = 'none';
                }
                this.currentIndex = this.totalCards - 1;
                this.updateCarousel(false);
            }
            this.isAnimating = false;
        }, 500);
    }

    // 特定のスライドへジャンプ
    goToSlide(index) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        this.currentIndex = index;
        this.updateCarousel(true);

        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    // カードクリックイベント(PC版のみ)
    setupCardClick() {
        const allCards = this.track.querySelectorAll('.certification-card');
        allCards.forEach((card) => {
            card.addEventListener('click', () => {
                // スマホでは無効
                if (window.innerWidth <= 600) return;

                // アクティブなカード(中央)のクリックは無視
                if (card.classList.contains('active')) return;

                const cardIndex = parseInt(card.getAttribute('data-index'));
                const normalizedCurrent = ((this.currentIndex % this.totalCards) + this.totalCards) % this.totalCards;

                if (cardIndex === normalizedCurrent) return;

                // 最短距離で移動
                const diff = cardIndex - normalizedCurrent;
                const totalCards = this.totalCards;

                if (Math.abs(diff) === 1 || Math.abs(diff) === totalCards - 1) {
                    // 隣接カード
                    if (diff === 1 || diff === -(totalCards - 1)) {
                        this.next();
                    } else {
                        this.prev();
                    }
                } else {
                    // 直接ジャンプ
                    this.goToSlide(cardIndex);
                }
            });
        });
    }

    // イベントリスナー設定
    setupEventListeners() {
        // スマホボタン
        const prevBtn = document.getElementById('mobilePrev');
        const nextBtn = document.getElementById('mobileNext');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prev();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.next();
            });
        }

        // タッチスワイプ対応
        let touchStartX = 0;
        let touchEndX = 0;

        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        }, { passive: true });
    }

    // 初期化
    init() {
        this.render();
        this.setupEventListeners();
        this.setupCardClick();

        // ウィンドウリサイズ時に更新
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.render();
                this.setupCardClick();
            }, 100);
        });
    }
}

// グローバルに公開
function renderCertifications() {
    if (window.certificationsInstance) {
        window.certificationsInstance.render();
        window.certificationsInstance.setupCardClick();
    }
}