// gallery-slideshow.js - 高専祭2025 ギャラリー額縁式スライドショー
// ============================================
// 自動で画像が切り替わる額縁式のギャラリーを実装

class GallerySlideshow {
    constructor() {
        this.container = document.getElementById('gallerySection');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 5000; // 5秒ごとに切り替え
        this.isPaused = false;
    }
    
    // ===== ギャラリーをレンダリング =====
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        // 最初の画像を表示
        const firstImage = galleryData[0];
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionGallery')}</h2>
                <p class="section-description">${t('sectionGalleryDesc')}</p>
            </div>
            
            <div class="gallery-frame-container">
                <!-- 額縁 -->
                <div class="gallery-frame">
                    <!-- 画像表示エリア -->
                    <div class="gallery-frame-inner">
                        <img 
                            id="galleryFrameImage" 
                            src="${firstImage.src}" 
                            alt="${firstImage.caption[lang]}"
                            class="gallery-frame-image"
                        >
                        <!-- 画像説明 -->
                        <div class="gallery-frame-caption" id="galleryFrameCaption">
                            ${firstImage.caption[lang]}
                        </div>
                    </div>
                    
                    <!-- コントロールボタン -->
                    <div class="gallery-frame-controls">
                        <button class="frame-control-btn" id="prevSlideBtn" aria-label="前の画像">
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        
                        <button class="frame-control-btn" id="playPauseBtn" aria-label="再生/一時停止">
                            <i class="fas fa-pause"></i>
                        </button>
                        
                        <button class="frame-control-btn" id="nextSlideBtn" aria-label="次の画像">
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    
                    <!-- インジケーター -->
                    <div class="gallery-frame-indicators" id="galleryIndicators">
                        ${galleryData.map((_, index) => `
                            <button 
                                class="frame-indicator ${index === 0 ? 'active' : ''}" 
                                data-index="${index}"
                                aria-label="画像 ${index + 1}"
                            ></button>
                        `).join('')}
                    </div>
                </div>
                
                <!-- サムネイル一覧（オプション） -->
                <div class="gallery-thumbnails">
                    ${galleryData.map((item, index) => `
                        <div 
                            class="gallery-thumbnail ${index === 0 ? 'active' : ''}" 
                            data-index="${index}"
                        >
                            <img src="${item.thumbnail || item.src}" alt="${item.caption[lang]}">
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        this.setupControls();
        this.startAutoplay();
    }
    
    // ===== コントロール設定 =====
    setupControls() {
        // 前へボタン
        const prevBtn = document.getElementById('prevSlideBtn');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.prevSlide();
                this.resetAutoplay();
            });
        }
        
        // 次へボタン
        const nextBtn = document.getElementById('nextSlideBtn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextSlide();
                this.resetAutoplay();
            });
        }
        
        // 再生/一時停止ボタン
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (playPauseBtn) {
            playPauseBtn.addEventListener('click', () => {
                this.toggleAutoplay();
            });
        }
        
        // インジケーターボタン
        const indicators = document.querySelectorAll('.frame-indicator');
        indicators.forEach(indicator => {
            indicator.addEventListener('click', () => {
                const index = parseInt(indicator.getAttribute('data-index'));
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });
        
        // サムネイルクリック
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                const index = parseInt(thumbnail.getAttribute('data-index'));
                this.goToSlide(index);
                this.resetAutoplay();
            });
        });
        
        // キーボード操作
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.resetAutoplay();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.resetAutoplay();
            }
        });
    }
    
    // ===== 画像を更新 =====
    updateImage() {
        const img = document.getElementById('galleryFrameImage');
        const caption = document.getElementById('galleryFrameCaption');
        
        if (!img || !caption) return;
        
        const data = galleryData[this.currentIndex];
        const lang = currentLang;
        
        // フェードアウト
        img.style.opacity = '0';
        caption.style.opacity = '0';
        
        setTimeout(() => {
            img.src = data.src;
            img.alt = data.caption[lang];
            caption.textContent = data.caption[lang];
            
            // フェードイン
            img.style.opacity = '1';
            caption.style.opacity = '1';
        }, 300);
        
        // インジケーターを更新
        this.updateIndicators();
        
        // サムネイルを更新
        this.updateThumbnails();
    }
    
    // ===== インジケーター更新 =====
    updateIndicators() {
        const indicators = document.querySelectorAll('.frame-indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    // ===== サムネイル更新 =====
    updateThumbnails() {
        const thumbnails = document.querySelectorAll('.gallery-thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            thumbnail.classList.toggle('active', index === this.currentIndex);
        });
    }
    
    // ===== 次のスライドへ =====
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % galleryData.length;
        this.updateImage();
    }
    
    // ===== 前のスライドへ =====
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + galleryData.length) % galleryData.length;
        this.updateImage();
    }
    
    // ===== 特定のスライドへ =====
    goToSlide(index) {
        this.currentIndex = index;
        this.updateImage();
    }
    
    // ===== 自動再生開始 =====
    startAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
        
        this.autoplayInterval = setInterval(() => {
            if (!this.isPaused) {
                this.nextSlide();
            }
        }, this.autoplayDelay);
        
        this.isPaused = false;
        this.updatePlayPauseButton();
    }
    
    // ===== 自動再生停止 =====
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
        
        this.isPaused = true;
        this.updatePlayPauseButton();
    }
    
    // ===== 自動再生トグル =====
    toggleAutoplay() {
        if (this.isPaused) {
            this.startAutoplay();
        } else {
            this.stopAutoplay();
        }
    }
    
    // ===== 自動再生をリセット =====
    resetAutoplay() {
        if (!this.isPaused) {
            this.startAutoplay();
        }
    }
    
    // ===== 再生/一時停止ボタン更新 =====
    updatePlayPauseButton() {
        const btn = document.getElementById('playPauseBtn');
        if (!btn) return;
        
        const icon = btn.querySelector('i');
        if (this.isPaused) {
            icon.className = 'fas fa-play';
            btn.setAttribute('aria-label', '再生');
        } else {
            icon.className = 'fas fa-pause';
            btn.setAttribute('aria-label', '一時停止');
        }
    }
    
    // ===== 初期化 =====
    init() {
        this.render();
    }
    
    // ===== クリーンアップ（ページ離脱時） =====
    destroy() {
        this.stopAutoplay();
    }
}