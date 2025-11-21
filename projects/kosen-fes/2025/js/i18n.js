// i18n.js - 高専祭2025 多言語対応モジュール
// ============================================
// UIテキストの日英対応を管理します。

// ===== UIテキストデータ =====
const i18n = {
    ja: {
        // ヘッダー
        backToPortfolio: "ポートフォリオに戻る",
        siteTitle: "高専祭 2025",
        siteTitleFull: "高専祭 2025 活動報告",
        
        // ヒーローセクション
        heroBadge: "KOSEN FESTIVAL 2025",
        heroTitle: "高専祭 2025",
        heroSubtitle: "活動報告 - Hisayoshi & FARAD",
        heroDate: "2025年11月8日・9日 開催",
        
        // セクションタイトル
        sectionProject: "Hisayoshi",
        sectionProjectDesc: "室谷先生公認 Only Up風アクションゲーム",
        sectionTeam: "製作チーム",
        sectionTeamDesc: "¬ハッカソン メンバー",
        sectionTimeline: "開発タイムライン",
        sectionTimelineDesc: "企画から展示までの道のり",
        sectionGallery: "ギャラリー",
        sectionGalleryDesc: "高専祭の思い出",
        sectionTestimonials: "来場者の声",
        sectionTestimonialsDesc: "いただいたフィードバック",
        sectionReflection: "振り返り / 学び",
        sectionReflectionDesc: "この経験から得たもの",
        sectionFaq: "よくある質問",
        sectionFaqDesc: "FAQ",
        sectionOtherActivities: "その他の活動",
        sectionOtherActivitiesDesc: "高専祭で参加した他の活動",
        sectionTech: "技術解説",
        sectionTechDesc: "Hisayoshiの仕組み",
        sectionAcknowledgments: "謝辞",
        
        // プロジェクト情報
        projectDuration: "開発期間",
        projectTech: "使用技術",
        viewOnGithub: "GitHubで見る",
        viewDemo: "デモを見る",
        
        // チームメンバー
        collaborators: "協力",
        
        // FAQ
        faqToggle: "クリックで回答を表示",
        
        // その他
        role: "役割",
        closeModal: "閉じる",
        
        // フッター
        footerPortfolio: "ポートフォリオ",
        footerGithub: "GitHub",
        footerTop: "トップに戻る",
        copyright: "© 2025 Renju Harada. All rights reserved."
    },
    en: {
        // Header
        backToPortfolio: "Back to Portfolio",
        siteTitle: "Kosen Festival 2025",
        siteTitleFull: "Kosen Festival 2025 Activity Report",
        
        // Hero Section
        heroBadge: "KOSEN FESTIVAL 2025",
        heroTitle: "Kosen Festival 2025",
        heroSubtitle: "Activity Report - Hisayoshi & FARAD",
        heroDate: "November 8-9, 2025",
        
        // Section Titles
        sectionProject: "Hisayoshi",
        sectionProjectDesc: "Official Muroya-sensei Approved Only Up Style Action Game",
        sectionTeam: "Development Team",
        sectionTeamDesc: "¬Hackathon Members",
        sectionTimeline: "Development Timeline",
        sectionTimelineDesc: "From planning to exhibition",
        sectionGallery: "Gallery",
        sectionGalleryDesc: "Memories from Kosen Festival",
        sectionTestimonials: "Visitor Feedback",
        sectionTestimonialsDesc: "What visitors said",
        sectionReflection: "Reflection / Learnings",
        sectionReflectionDesc: "What we gained from this experience",
        sectionFaq: "FAQ",
        sectionFaqDesc: "Frequently Asked Questions",
        sectionOtherActivities: "Other Activities",
        sectionOtherActivitiesDesc: "Other activities at Kosen Festival",
        sectionTech: "Technical Explanation",
        sectionTechDesc: "How Hisayoshi works",
        sectionAcknowledgments: "Acknowledgments",
        
        // Project Info
        projectDuration: "Development Period",
        projectTech: "Technologies",
        viewOnGithub: "View on GitHub",
        viewDemo: "View Demo",
        
        // Team Members
        collaborators: "Collaborators",
        
        // FAQ
        faqToggle: "Click to show answer",
        
        // Others
        role: "Role",
        closeModal: "Close",
        
        // Footer
        footerPortfolio: "Portfolio",
        footerGithub: "GitHub",
        footerTop: "Back to Top",
        copyright: "© 2025 Renju Harada. All rights reserved."
    }
};

// ===== 現在の言語設定 =====
let currentLang = 'ja';

// ===== テキスト取得関数 =====
// 指定されたキーに対応するテキストを現在の言語で返す
function t(key) {
    return i18n[currentLang][key] || key;
}

// ===== 言語適用関数 =====
// 言語を切り替えて全てのコンテンツを再描画
function applyLanguage(lang) {
    currentLang = lang;
    
    // ドキュメントタイトルを更新
    document.title = t('siteTitleFull');
    
    // ヘッダーを更新
    updateHeader();
    
    // ヒーローセクションを更新
    updateHero();
    
    // 各セクションを再描画
    if (window.projectSection) window.projectSection.render();
    if (window.teamSection) window.teamSection.render();
    if (window.timelineSection) window.timelineSection.render();
    if (window.gallerySection) window.gallerySection.render();
    if (window.testimonialSection) window.testimonialSection.render();
    if (window.reflectionSection) window.reflectionSection.render();
    if (window.faqSection) window.faqSection.render();
    if (window.otherActivitiesSection) window.otherActivitiesSection.render();
    if (window.techSection) window.techSection.render();
    if (window.acknowledgmentsSection) window.acknowledgmentsSection.render();
    
    // フッターを更新
    updateFooter();
    
    // 言語ボタンのテキストを更新
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.textContent = lang === 'ja' ? 'EN' : 'JP';
        langBtn.setAttribute('aria-label', 
            lang === 'ja' ? 'Switch to English' : '日本語に切り替える');
    }
}

// ===== ヘッダー更新関数 =====
function updateHeader() {
    const backBtn = document.getElementById('backBtn');
    const siteTitle = document.getElementById('siteTitle');
    
    if (backBtn) {
        const backText = backBtn.querySelector('span');
        if (backText) backText.textContent = t('backToPortfolio');
    }
    if (siteTitle) siteTitle.textContent = t('siteTitle');
}

// ===== ヒーローセクション更新関数 =====
function updateHero() {
    const badge = document.getElementById('heroBadge');
    const title = document.getElementById('heroTitle');
    const subtitle = document.getElementById('heroSubtitle');
    const date = document.getElementById('heroDate');
    
    if (badge) badge.textContent = t('heroBadge');
    if (title) title.textContent = t('heroTitle');
    if (subtitle) subtitle.textContent = t('heroSubtitle');
    if (date) {
        // アイコンを保持しながらテキストを更新
        date.innerHTML = `<i class="fas fa-calendar-alt"></i> ${t('heroDate')}`;
    }
}

// ===== フッター更新関数 =====
function updateFooter() {
    const portfolioLink = document.getElementById('footerPortfolioLink');
    const githubLink = document.getElementById('footerGithubLink');
    const topLink = document.getElementById('footerTopLink');
    const copyright = document.getElementById('footerCopyright');
    
    if (portfolioLink) portfolioLink.textContent = t('footerPortfolio');
    if (githubLink) githubLink.textContent = t('footerGithub');
    if (topLink) topLink.textContent = t('footerTop');
    if (copyright) copyright.textContent = t('copyright');
}

// ===== 言語切り替え関数 =====
function toggleLanguage() {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    applyLanguage(newLang);
}