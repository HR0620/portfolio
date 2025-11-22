// certifications.js - 資格カルーセル機能モジュール

// 資格カルーセル管理クラス
class Certifications {
    constructor() {
        this.track = document.getElementById("carouselTrack");
        this.indicators = document.getElementById("carouselIndicators");
        this.prevBtn = document.getElementById("carouselPrev");
        this.nextBtn = document.getElementById("carouselNext");
        
        this.currentIndex = 0;
        // this.autoPlayInterval = null;
        // this.autoPlayDelay = 4000; // 4秒ごとに自動スクロール
        this.cards = [];
        this.newestIndex = 0;
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
        
        // 無限ループ用に先頭と末尾にクローンを追加
        const dataLength = certificationsData.length;
        
        // 末尾のクローン（先頭に配置）
        const lastClone = this.createCard(
            certificationsData[dataLength - 1], 
            dataLength - 1, 
            this.newestIndex === dataLength - 1
        );
        lastClone.classList.add('clone');
        this.track.appendChild(lastClone);
        
        // 本体のカード
        certificationsData.forEach((cert, index) => {
            const card = this.createCard(cert, index, this.newestIndex === index);
            this.cards.push(card);
            this.track.appendChild(card);
        });
        
        // 先頭のクローン（末尾に配置）
        const firstClone = this.createCard(
            certificationsData[0], 
            0, 
            this.newestIndex === 0
        );
        firstClone.classList.add('clone');
        this.track.appendChild(firstClone);
        
        // インジケーターを生成
        certificationsData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'carousel-dot';
            dot.addEventListener('click', () => this.goToSlide(index));
            this.indicators.appendChild(dot);
        });
        
        // 初期位置を設定（クローンの分だけずらす）
        this.currentIndex = 0;
        this.updateCarousel(false);
    }

    // カルーセルの表示を更新する
    updateCarousel(animate = true) {
        const cardWidth = 300; // カード幅 + gap
        const offset = (this.currentIndex + 1) * cardWidth;
        
        if (animate) {
            this.track.style.transition = 'transform 0.5s ease';
        } else {
            this.track.style.transition = 'none';
        }
        
        this.track.style.transform = `translateX(calc(50% - ${offset}px - 140px))`;
        
        // activeクラスの更新
        const allCards = this.track.querySelectorAll('.certification-card');
        allCards.forEach((card, idx) => {
            card.classList.remove('active');
            // クローンを考慮（idx 0は末尾クローン、idx length-1は先頭クローン）
            if (idx === this.currentIndex + 1) {
                card.classList.add('active');
            }
        });
        
        // インジケーターの更新
        const dots = this.indicators.querySelectorAll('.carousel-dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === this.currentIndex);
        });
    }

    // 次のスライドへ
    next() {
        this.currentIndex++;
        this.updateCarousel(true);
        
        // 最後のカードに達したら先頭にジャンプ
        if (this.currentIndex >= certificationsData.length) {
            setTimeout(() => {
                this.currentIndex = 0;
                this.updateCarousel(false);
            }, 500);
        }
    }

    // 前のスライドへ
    prev() {
        this.currentIndex--;
        this.updateCarousel(true);
        
        // 先頭のカードの前に達したら末尾にジャンプ
        if (this.currentIndex < 0) {
            setTimeout(() => {
                this.currentIndex = certificationsData.length - 1;
                this.updateCarousel(false);
            }, 500);
        }
    }

    // 特定のスライドへジャンプ
    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel(true);
        this.resetAutoPlay();
    }

    // // 自動再生を開始
    // startAutoPlay() {
    //     this.autoPlayInterval = setInterval(() => {
    //         this.next();
    //     }, this.autoPlayDelay);
    // }

    // 自動再生を停止
    // stopAutoPlay() {
    //     if (this.autoPlayInterval) {
    //         clearInterval(this.autoPlayInterval);
    //         this.autoPlayInterval = null;
    //     }
    // }

    // 自動再生をリセット
    // resetAutoPlay() {
    //     this.stopAutoPlay();
    //     this.startAutoPlay();
    // }

    // イベントリスナーを設定
    setupEventListeners() {
        // 前へボタン
        this.prevBtn.addEventListener('click', () => {
            this.prev();
            this.resetAutoPlay();
        });
        
        // 次へボタン
        this.nextBtn.addEventListener('click', () => {
            this.next();
            this.resetAutoPlay();
        });
        
        // // マウスホバーで自動再生を一時停止
        // const wrapper = document.querySelector('.certifications-carousel-wrapper');
        // wrapper.addEventListener('mouseenter', () => this.stopAutoPlay());
        // wrapper.addEventListener('mouseleave', () => this.startAutoPlay());
        
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
            this.resetAutoPlay();
        } else if (diff < -threshold) {
            this.prev();
            this.resetAutoPlay();
        }
    }

    // 初期化処理
    init() {
        this.render();
        this.setupEventListeners();
        this.startAutoPlay();
    }
}

// グローバルに公開するための関数
function renderCertifications() {
    if (window.certificationsInstance) {
        window.certificationsInstance.render();
    }
}