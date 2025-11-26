// i18n.js - 多言語対応

let currentLang = 'ja';

const i18nData = {
    ja: {
        headerTitle: 'プログラミング1',
        headerSubtitle: '課題ポートフォリオ',
        backText: '戻る',
        
        typingText: 'cd ../projects/class/programming-1 && ls -la',
        introDesc: 'プログラミング1の授業で作成した課題の一覧です。各課題のコード、実行結果、説明を確認できます。',
        
        tabPrefix: '課題',
        
        dateLabel: '作成日',
        tagsLabel: 'タグ',
        imagesTitle: 'スクリーンショット / 実行結果',
        codePreviewTitle: 'コードプレビュー',
        
        viewCodeBtn: 'コードを見る',
        openColabBtn: 'Google Colabで開く',
        copyCodeBtn: 'コピー',
        closeBtn: '閉じる',
        
        codeModalTitle: 'コード全体',
        loadingCode: 'コードを読み込み中...',
        errorLoadingCode: 'コードの読み込みに失敗しました',
        codeCopied: 'コードをコピーしました！',
        
        prevImage: '前へ',
        nextImage: '次へ',
        
        noAssignmentSelected: '課題が選択されていません',
        assignmentNotFound: '課題が見つかりません',
        
        filterByTag: 'タグでフィルター',
        clearFilter: 'クリア',
        noMatchingAssignments: '該当する課題が見つかりません',
        
        selectSubject: '科目を選択'
    },
    
    en: {
        headerTitle: 'Programming 1',
        headerSubtitle: 'Assignment Portfolio',
        backText: 'Back',
        
        typingText: 'cd ../projects/class/programming-1 && ls -la',
        introDesc: 'A collection of assignments created in Programming 1. View code, execution results, and descriptions for each assignment.',
        
        tabPrefix: 'Task',
        
        dateLabel: 'Date',
        tagsLabel: 'Tags',
        imagesTitle: 'Screenshots / Results',
        codePreviewTitle: 'Code Preview',
        
        viewCodeBtn: 'View Code',
        openColabBtn: 'Open in Google Colab',
        copyCodeBtn: 'Copy',
        closeBtn: 'Close',
        
        codeModalTitle: 'Full Code',
        loadingCode: 'Loading code...',
        errorLoadingCode: 'Failed to load code',
        codeCopied: 'Code copied!',
        
        prevImage: 'Previous',
        nextImage: 'Next',
        
        noAssignmentSelected: 'No assignment selected',
        assignmentNotFound: 'Assignment not found',
        
        filterByTag: 'Filter by Tag',
        clearFilter: 'Clear',
        noMatchingAssignments: 'No matching assignments found',
        
        selectSubject: 'Select Subject'
    }
};

function getText(key) {
    return i18nData[currentLang][key] || key;
}

function switchLanguage(lang) {
    if (lang !== 'ja' && lang !== 'en') {
        console.error('Invalid language code:', lang);
        return;
    }
    
    currentLang = lang;
    updateUILanguage();
}

function updateUILanguage() {
    document.getElementById('headerTitle').textContent = getText('headerTitle');
    document.getElementById('headerSubtitle').textContent = getText('headerSubtitle');
    document.getElementById('backText').textContent = getText('backText');
    document.getElementById('introDesc').textContent = getText('introDesc');
    
    const langBtn = document.getElementById('langToggle');
    const langBtnSpan = langBtn.querySelector('span');
    langBtnSpan.textContent = currentLang === 'ja' ? 'EN' : 'JP';
    
    if (typeof initializeTabs === 'function') {
        initializeTabs();
        if (window.currentAssignmentId) {
            const selectedTab = document.querySelector(`[data-id="${window.currentAssignmentId}"]`);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
        }
    }
    
    if (window.currentAssignmentId) {
        renderAssignment(window.currentAssignmentId);
    }
}

function toggleLanguage() {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    switchLanguage(newLang);
}