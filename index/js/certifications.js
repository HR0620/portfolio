// certifications.js - 資格カルーセル機能モジュール
// オート再生なし、無限ループ対応版

// ===== 資格カルーセル管理クラス =====
class Certifications {
    constructor() {
        this.track = document.getElementById("carouselTrack");
        this.indicators = document.getElementById("carouselIndicators");
        this.prevBtn = document.getElementById("carouselPrev");
        this.nextBtn = document.getElementById("carouselNext");
        
        this.currentIndex = 0;
        this.cards = [];
        this.newestIndex = 0;
        this.isAnimating = false; // アニメーション中フラグ
        this.totalCards = 0;      // 実際のカード数
    }

    // 最新の資格を特定する（取得日が一番新しいもの）
    findNewestCertification() {
        let newestDate = new Date(0);
        let newestIdx = 0;
        
        certificationsData.forEach((cert, index) => {
            // 日付形式: "2024/11" → Date変換
            const parts = cert.date.split('/');
            const date = new Date(parts[0], parseInt(parts[1]) - 1);
            
            if (date > newestDate) {
                newestDate = date;
                newestIdx = index;
            }
        });
        
        return newestIdx;
    }

    // 資格カードを生成する
    createCard(cert, index, isNewest) {
        const card = document.createElement('div');
        card.className = 'certification-card';
        card.setAttribute('data-index', index);
        
        // NEWバッジ（最新の資格のみ）
        if (isNewest) {
            const badge = document.createElement('div');
            badge.className = 'certification-badge';
            badge.textContent = 'NEW';
            card.appendChild(badge);
        }
        
        // 資格名
        const name = document.createElement('div');
        name.className = 'certification-name';
        name.textContent = cert.name[currentLang];
        
        // 運営団体
        const organization = document.createElement('div');
        organization.className = 'certification-organization';
        organization.textContent = cert.organization[currentLang];
        
        // 取得年月日
        const date = document.createElement('div');
        date.className = 'certification-date';
        date.textContent = cert.date;
        
        card.appendChild(name);
        card.appendChild(organization);
        card.appendChild(date);
        
        return card;
    }

    // カルーセルをレンダリングする
    render() {
        this.track.innerHTML = "";
        this.indicators.innerHTML = "";
        this.cards = [];
        
        // 最新の資格を特定
        this.newestIndex = this.findNewestCertification();
        this.totalCards = certificationsData.length;
        
        // 無限ループ用に前後にクローンを追加
        // 構成: [クローン末尾2枚] + [本体] + [クローン先頭2枚]
        const cloneCount = Math.min(2, this.totalCards); // クローン数（最大2枚）
        
        // 末尾のクローン（先頭に配置）
        for (let i = cloneCount; i > 0; i--) {
            const idx = this.totalCards - i;
            const clone = this.createCard(
                certificationsData[idx], 
                idx, 
                this.newestIndex === idx
            );
            clone.classList.add('clone');
            clone.setAttribute('data-clone', 'end');
            this.track.appendChild(clone);
        }
        
        // 本体のカード
        certificationsData.forEach((cert, index) => {
            const card = this.createCard(cert, index, this.newestIndex === index);
            this.cards.push(card);
            this.track.appendChild(card);
        });
        
        // 先頭のクローン（末尾に配置）
        for (let i = 0; i < cloneCount; i++) {
            const clone = this.createCard(
                certificationsData[i], 
                i, 
                this.newestIndex === i
            );
            clone.classList.add('clone');
            clone.setAttribute('data-clone', 'start');
            this.track.appendChild(clone);
        }
        
        // インジケーターを生成
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

    // カード幅を取得（レスポンシブ対応）
    getCardWidth() {
        // スマホの場合は画面幅に応じて計算
        if (window.innerWidth <= 600) {
            // カード幅 = 100vw - 120px + gap(10px)
            return window.innerWidth - 120 + 10;
        }
        // PC/タブレットの場合は固定幅
        return 300; // カード幅(280px) + gap(20px)
    }
    
    // カルーセルの表示を更新する
    updateCarousel(animate = true) {
        const cardWidth = this.getCardWidth();
        const cloneCount = Math.min(2, this.totalCards);
        
        // 実際の位置（クローンを考慮）
        const actualIndex = this.currentIndex + cloneCount;
        const offset = actualIndex * cardWidth;
        
        // 中央揃えのためのオフセット計算
        const centerOffset = cardWidth / 2 - 10; // gapの半分を引く
        
        if (animate) {
            this.track.style.transition = 'transform 0.5s ease';
        } else {
            this.track.style.transition = 'none';
        }
        
        // 中央に配置するための計算
        this.track.style.transform = `translateX(calc(50% - ${offset}px - ${centerOffset}px))`;
        
        // activeクラスの更新
        const allCards = this.track.querySelectorAll('.certification-card');
        allCards.forEach((card, idx) => {
            card.classList.remove('active');
            // クローンを考慮した位置でactive判定
            if (idx === actualIndex) {
                card.classList.add('active');
            }
        });
        
        // インジケーターの更新（0〜totalCards-1 の範囲に正規化）
        const normalizedIndex = ((this.currentIndex % this.totalCards) + this.totalCards) % this.totalCards;
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
        
        // 最後のカードに達したら、アニメーション完了後に先頭にジャンプ
        if (this.currentIndex >= this.totalCards) {
            setTimeout(() => {
                this.currentIndex = 0;
                this.updateCarousel(false);
                this.isAnimating = false;
            }, 500);
        } else {
            setTimeout(() => {
                this.isAnimating = false;
            }, 500);
        }
    }

    // 前のスライドへ
    prev() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        
        this.currentIndex--;
        this.updateCarousel(true);
        
        // 先頭のカードの前に達したら、アニメーション完了後に末尾にジャンプ
        if (this.currentIndex < 0) {
            setTimeout(() => {
                this.currentIndex = this.totalCards - 1;
                this.updateCarousel(false);
                this.isAnimating = false;
            }, 500);
        } else {
            setTimeout(() => {
                this.isAnimating = false;
            }, 500);
        }
    }

    // 特定のスライドへジャンプ
    goToSlide(index) {
        if (this.isAnimating) return;
        this.currentIndex = index;
        this.updateCarousel(true);
    }

    // イベントリスナーを設定
    setupEventListeners() {
        // 前へボタン
        this.prevBtn.addEventListener('click', () => {
            this.prev();
        });
        
        // 次へボタン
        this.nextBtn.addEventListener('click', () => {
            this.next();
        });
        
        // タッチスワイプ対応
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }

    // スワイプ処理
    handleSwipe(startX, endX) {
        const threshold = 50;
        const diff = startX - endX;
        
        if (diff > threshold) {
            this.next();
        } else if (diff < -threshold) {
            this.prev();
        }
    }

    // 初期化処理（オート再生なし）
    init() {
        this.render();
        this.setupEventListeners();
        
        // ウィンドウリサイズ時にカルーセルを更新
        window.addEventListener('resize', () => {
            this.updateCarousel(false);
        });
    }
}

// グローバルに公開するための関数
function renderCertifications() {
    if (window.certificationsInstance) {
        window.certificationsInstance.render();
    }
}