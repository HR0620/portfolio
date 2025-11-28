// certifications.js - 資格カルーセル（完全版・回転テーブル方式）
// ============================================
// 【改善内容】
// 1. 前後1枚ずつ表示される中央揃えレイアウト
// 2. 回転テーブル方式の無限ループ（要素を循環させる）
// 3. スマホでの完璧な表示

class Certifications {
    constructor() {
        this.track = document.getElementById("carouselTrack");
        this.indicators = document.getElementById("carouselIndicators");
        this.prevBtn = document.getElementById("carouselPrev");
        this.nextBtn = document.getElementById("carouselNext");
        
        this.currentIndex = 0;
        this.totalCards = 0;
        this.isAnimating = false;
        this.newestIndex = 0;
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

    // 【新方式】カルーセルをレンダリング（回転テーブル方式）
    render() {
        this.track.innerHTML = "";
        this.indicators.innerHTML = "";
        
        this.newestIndex = this.findNewestCertification();
        this.totalCards = certificationsData.length;
        
        // 【回転テーブル方式】前後のクローンを多めに配置
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
        
        // インジケーター生成
        certificationsData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            this.indicators.appendChild(dot);
        });
        
        // 初期位置を設定（クローン3枚分オフセット）
        this.currentIndex = 0;
        this.updateCarousel(false);
    }

    // カード幅とギャップを取得
    getCardWidth() {
        const isMobile = window.innerWidth <= 600;
        if (isMobile) {
            // スマホ時は画面幅いっぱい
            return window.innerWidth - 120;
        }
        // PC時は320px（カード300px + gap 20px）
        return 320;
    }

    // 【新方式】カルーセル表示を更新
    updateCarousel(animate = true) {
        const cardWidth = this.getCardWidth();
        const cloneOffset = 3; // 前方クローン数
        
        // 実際の位置（クローンを考慮）
        const actualIndex = this.currentIndex + cloneOffset;
        
        // トランジション制御
        if (animate) {
            this.track.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        } else {
            this.track.style.transition = 'none';
        }
        
        // 中央揃えの計算（前後1枚ずつ表示）
        const offset = actualIndex * cardWidth;
        this.track.style.transform = `translateX(calc(50% - ${offset}px - ${cardWidth / 2}px))`;
        
        // activeクラスの更新
        const allCards = this.track.querySelectorAll('.certification-card');
        allCards.forEach((card, idx) => {
            card.classList.remove('active');
            if (idx === actualIndex) {
                card.classList.add('active');
            }
        });
        
        // インジケーターの更新
        const normalizedIndex = ((this.currentIndex % this.totalCards) + this.totalCards) % this.totalCards;
        const dots = this.indicators.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === normalizedIndex);
        });
    }

    // 【新方式】次のスライドへ（回転テーブル方式）
    next() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex++;
        this.updateCarousel(true);
        
        setTimeout(() => {
            // 最後に到達したら先頭にループ
            if (this.currentIndex >= this.totalCards) {
                this.track.style.transition = 'none';
                this.currentIndex = 0;
                this.updateCarousel(false);
            }
            this.isAnimating = false;
        }, 500);
    }

    // 【新方式】前のスライドへ（回転テーブル方式）
    prev() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex--;
        this.updateCarousel(true);
        
        setTimeout(() => {
            // 先頭より前に達したら末尾にループ
            if (this.currentIndex < 0) {
                this.track.style.transition = 'none';
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

    // カードクリックイベント（PC版のみ）
    setupCardClick() {
        const allCards = this.track.querySelectorAll('.certification-card');
        allCards.forEach((card) => {
            card.addEventListener('click', () => {
                if (window.innerWidth <= 600) return;
                
                const cardIndex = parseInt(card.getAttribute('data-index'));
                if (cardIndex !== this.currentIndex) {
                    this.goToSlide(cardIndex);
                }
            });
        });
    }

    // イベントリスナー設定
    setupEventListeners() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());
        
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
                this.updateCarousel(false);
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