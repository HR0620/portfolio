// main.js - 高専祭2025 メイン初期化スクリプト
// ============================================
// アプリケーション全体の初期化と管理を行います。

// ===== アプリケーションクラス =====
class KosenFesApp {
    constructor() {
        // 各セクションのインスタンスを保持
        this.sections = {};
    }
    
    // ===== アプリケーションの初期化 =====
    init() {
        console.log('🎉 高専祭2025 活動報告ページを初期化中...');
        
        // 1. 各セクションのインスタンスを作成
        this.createSections();
        
        // 2. グローバル変数として公開（i18nから参照するため）
        this.exposeGlobally();
        
        // 3. イベントリスナーを設定
        this.setupEventListeners();
        
        // 4. 言語を適用（デフォルトは日本語）
        applyLanguage('ja');
        
        // 5. ギャラリーのライトボックスイベントを設定
        if (this.sections.gallery) {
            this.sections.gallery.setupLightboxEvents();
        }
        
        // 6. アクティビティモーダルの閉じるボタンを設定
        this.setupActivityModal();
        
        // 7. スムーズスクロールを設定
        this.setupSmoothScroll();
        
        console.log('✅ 初期化完了！');
    }
    
    // ===== 各セクションのインスタンスを作成 =====
// ===== 各セクションのインスタンスを作成 =====
    createSections() {
        this.sections = {
            project: new ProjectSection(),
            team: new TeamSection(),
            timeline: new TimelineSection(),
            gallery: new GallerySlideshow(), // 額縁式スライドショーに変更
            testimonial: new TestimonialSection(),
            reflection: new ReflectionSection(),
            faq: new FaqSection(),
            otherActivities: new OtherActivitiesSection(),
            tech: new TechSection(),
            acknowledgments: new AcknowledgmentsSection()
        };
    }
    
    // ===== グローバル変数として公開 =====
    exposeGlobally() {
        window.projectSection = this.sections.project;
        window.teamSection = this.sections.team;
        window.timelineSection = this.sections.timeline;
        window.gallerySection = this.sections.gallery;
        window.testimonialSection = this.sections.testimonial;
        window.reflectionSection = this.sections.reflection;
        window.faqSection = this.sections.faq;
        window.otherActivitiesSection = this.sections.otherActivities;
        window.techSection = this.sections.tech;
        window.acknowledgmentsSection = this.sections.acknowledgments;
    }
    
    // ===== イベントリスナーの設定 =====
    setupEventListeners() {
        // 言語切り替えボタン
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                toggleLanguage();
            });
        }
        
        // トップに戻るボタン（フッター）
        const topLink = document.getElementById('footerTopLink');
        if (topLink) {
            topLink.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
    
    // ===== アクティビティモーダルの設定 =====
    setupActivityModal() {
        const modal = document.getElementById('activityModal');
        const closeBtn = document.getElementById('activityModalClose');
        
        if (modal && closeBtn) {
            // 閉じるボタンのクリック
            closeBtn.addEventListener('click', () => {
                if (this.sections.otherActivities) {
                    this.sections.otherActivities.closeModal();
                }
            });
            
            // 背景クリックで閉じる
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    if (this.sections.otherActivities) {
                        this.sections.otherActivities.closeModal();
                    }
                }
            });
        }
    }
    
    // ===== スムーズスクロールの設定 =====
    setupSmoothScroll() {
        // ページ内リンクにスムーズスクロールを適用
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }
}

// ===== DOMContentLoaded時に初期化 =====
document.addEventListener('DOMContentLoaded', () => {
    const app = new KosenFesApp();
    app.init();
});