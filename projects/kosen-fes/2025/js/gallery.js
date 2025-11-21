// gallery.js - 高専祭2025 ギャラリー機能モジュール
// ============================================
// ギャラリーの表示とライトボックス機能を管理します。

class GallerySection {
    constructor() {
        // ギャラリーを表示するコンテナ要素
        this.container = document.getElementById('gallerySection');
        // ライトボックス（拡大表示）用の要素
        this.lightbox = document.getElementById('lightbox');
        // 現在表示中の画像インデックス
        this.currentIndex = 0;
    }
    
    // ===== ギャラリーをレンダリング =====
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        // ギャラリーアイテムのHTMLを生成
        const galleryItems = galleryData.map((item, index) => `
            <div class="gallery-item" data-index="${index}" data-id="${item.id}">
                <img 
                    src="${item.thumbnail || item.src}" 
                    alt="${item.caption[lang]}" 
                    loading="lazy"
                >
                <div class="gallery-caption">${item.caption[lang]}</div>
            </div>
        `).join('');
        
        // セクション全体のHTMLを設定
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionGallery')}</h2>
                <p class="section-description">${t('sectionGalleryDesc')}</p>
            </div>
            
            <div class="gallery-grid">${galleryItems}</div>
        `;
        
        // ギャラリーアイテムのクリックイベントを設定
        this.setupGalleryClick();
    }
    
    // ===== ギャラリーアイテムのクリックイベント設定 =====
    setupGalleryClick() {
        const items = document.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            item.addEventListener('click', () => {
                // クリックされた画像のインデックスを取得
                const index = parseInt(item.getAttribute('data-index'));
                // ライトボックスを開く
                this.openLightbox(index);
            });
        });
    }
    
    // ===== ライトボックスを開く =====
    openLightbox(index) {
        if (!this.lightbox) return;
        
        this.currentIndex = index;
        this.updateLightboxImage();
        
        // ライトボックスを表示
        this.lightbox.classList.add('active');
        document.body.classList.add('modal-open');
        
        // キーボードイベントを設定
        this.setupKeyboardNav();
    }
    
    // ===== ライトボックスを閉じる =====
    closeLightbox() {
        if (!this.lightbox) return;
        
        this.lightbox.classList.remove('active');
        document.body.classList.remove('modal-open');
        
        // キーボードイベントを解除
        this.removeKeyboardNav();
    }
    
    // ===== ライトボックスの画像を更新 =====
    updateLightboxImage() {
        const img = document.getElementById('lightboxImage');
        const caption = document.getElementById('lightboxCaption');
        
        if (!img) return;
        
        const data = galleryData[this.currentIndex];
        const lang = currentLang;
        
        // 画像とキャプションを更新
        img.src = data.src;
        img.alt = data.caption[lang];
        
        if (caption) {
            caption.textContent = data.caption[lang];
        }
    }
    
    // ===== 次の画像へ =====
    nextImage() {
        this.currentIndex = (this.currentIndex + 1) % galleryData.length;
        this.updateLightboxImage();
    }
    
    // ===== 前の画像へ =====
    prevImage() {
        this.currentIndex = (this.currentIndex - 1 + galleryData.length) % galleryData.length;
        this.updateLightboxImage();
    }
    
    // ===== キーボードナビゲーションの設定 =====
    setupKeyboardNav() {
        // 既存のリスナーを削除してから追加（重複防止）
        this.keyHandler = (e) => {
            switch(e.key) {
                case 'Escape':
                    this.closeLightbox();
                    break;
                case 'ArrowRight':
                    this.nextImage();
                    break;
                case 'ArrowLeft':
                    this.prevImage();
                    break;
            }
        };
        
        document.addEventListener('keydown', this.keyHandler);
    }
    
    // ===== キーボードナビゲーションの解除 =====
    removeKeyboardNav() {
        if (this.keyHandler) {
            document.removeEventListener('keydown', this.keyHandler);
        }
    }
    
    // ===== ライトボックスのイベントリスナー設定 =====
    setupLightboxEvents() {
        if (!this.lightbox) return;
        
        // 閉じるボタン
        const closeBtn = document.getElementById('lightboxClose');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeLightbox());
        }
        
        // 前へボタン
        const prevBtn = document.getElementById('lightboxPrev');
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prevImage());
        }
        
        // 次へボタン
        const nextBtn = document.getElementById('lightboxNext');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.nextImage());
        }
        
        // 背景クリックで閉じる
        this.lightbox.addEventListener('click', (e) => {
            if (e.target === this.lightbox) {
                this.closeLightbox();
            }
        });
        
        // スワイプ操作（タッチデバイス用）
        this.setupSwipeGesture();
    }
    
    // ===== スワイプジェスチャーの設定（モバイル対応） =====
    setupSwipeGesture() {
        const lightboxContent = document.querySelector('.lightbox-content');
        if (!lightboxContent) return;
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        lightboxContent.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        lightboxContent.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe(touchStartX, touchEndX);
        }, { passive: true });
    }
    
    // ===== スワイプ方向を判定して画像を切り替え =====
    handleSwipe(startX, endX) {
        const threshold = 50; // スワイプ判定の閾値
        const diff = startX - endX;
        
        if (diff > threshold) {
            // 左スワイプ → 次の画像
            this.nextImage();
        } else if (diff < -threshold) {
            // 右スワイプ → 前の画像
            this.prevImage();
        }
    }
    
    // ===== 初期化 =====
    init() {
        this.render();
        this.setupLightboxEvents();
    }
}