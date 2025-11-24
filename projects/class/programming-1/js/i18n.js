// i18n.js - 多言語対応モジュール
// ============================================

// 現在の言語設定（デフォルトは日本語）
let currentLang = 'ja';

// 多言語テキストデータ
const i18nData = {
    ja: {
        // ヘッダー
        headerTitle: 'プログラミング1',
        headerSubtitle: '課題ポートフォリオ',
        backText: '戻る',
        
        // イントロ
        typingText: 'cd ~/Programming1 && ls -la',
        introDesc: 'プログラミング1の授業で作成した課題の一覧です。各課題のコード、実行結果、説明を確認できます。',
        
        // タブ
        tabPrefix: '課題',
        
        // 課題詳細
        dateLabel: '作成日',
        tagsLabel: 'タグ',
        imagesTitle: 'スクリーンショット / 実行結果',
        codePreviewTitle: 'コードプレビュー',
        
        // ボタン
        viewCodeBtn: 'コードを見る',
        openColabBtn: 'Google Colabで開く',
        copyCodeBtn: 'コピー',
        closeBtn: '閉じる',
        
        // モーダル
        codeModalTitle: 'コード全体',
        loadingCode: 'コードを読み込み中...',
        errorLoadingCode: 'コードの読み込みに失敗しました',
        codeCopied: 'コードをコピーしました！',
        
        // 画像モーダル
        prevImage: '前へ',
        nextImage: '次へ',
        
        // エラーメッセージ
        noAssignmentSelected: '課題が選択されていません',
        assignmentNotFound: '課題が見つかりません'
    },
    
    en: {
        // Header
        headerTitle: 'Programming 1',
        headerSubtitle: 'Assignment Portfolio',
        backText: 'Back',
        
        // Intro
        typingText: 'cd ~/Programming1 && ls -la',
        introDesc: 'A collection of assignments created in Programming 1. View code, execution results, and descriptions for each assignment.',
        
        // Tabs
        tabPrefix: 'Task',
        
        // Assignment Details
        dateLabel: 'Date',
        tagsLabel: 'Tags',
        imagesTitle: 'Screenshots / Results',
        codePreviewTitle: 'Code Preview',
        
        // Buttons
        viewCodeBtn: 'View Code',
        openColabBtn: 'Open in Google Colab',
        copyCodeBtn: 'Copy',
        closeBtn: 'Close',
        
        // Modal
        codeModalTitle: 'Full Code',
        loadingCode: 'Loading code...',
        errorLoadingCode: 'Failed to load code',
        codeCopied: 'Code copied!',
        
        // Image Modal
        prevImage: 'Previous',
        nextImage: 'Next',
        
        // Error Messages
        noAssignmentSelected: 'No assignment selected',
        assignmentNotFound: 'Assignment not found'
    }
};

/**
 * 現在の言語の翻訳テキストを取得
 * @param {string} key - テキストのキー
 * @returns {string} 翻訳されたテキスト
 */
function getText(key) {
    return i18nData[currentLang][key] || key;
}

/**
 * 言語を切り替える
 * @param {string} lang - 言語コード（'ja' または 'en'）
 */
function switchLanguage(lang) {
    if (lang !== 'ja' && lang !== 'en') {
        console.error('Invalid language code:', lang);
        return;
    }
    
    currentLang = lang;
    
    // 言語切り替え後に画面を更新
    updateUILanguage();
}

/**
 * UI全体の言語を更新
 */
function updateUILanguage() {
    // ヘッダー
    document.getElementById('headerTitle').textContent = getText('headerTitle');
    document.getElementById('headerSubtitle').textContent = getText('headerSubtitle');
    document.getElementById('backText').textContent = getText('backText');
    
    // イントロの説明文を更新
    document.getElementById('introDesc').textContent = getText('introDesc');
    
    // 言語ボタンのテキスト更新
    const langBtn = document.getElementById('langToggle');
    const langBtnSpan = langBtn.querySelector('span');
    langBtnSpan.textContent = currentLang === 'ja' ? 'EN' : 'JP';
    
    // タブを再生成（言語に応じたプレフィックス）
    if (typeof initializeTabs === 'function') {
        initializeTabs();
        // タブ再生成後、選択状態を復元
        if (window.currentAssignmentId) {
            const selectedTab = document.querySelector(`[data-id="${window.currentAssignmentId}"]`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
        }
    }
    
    // 現在選択されている課題を再レンダリング
    if (window.currentAssignmentId) {
        renderAssignment(window.currentAssignmentId);
    }
}

/**
 * 言語をトグル（日本語⇔英語）
 */
function toggleLanguage() {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    switchLanguage(newLang);
}