// main.js - メインロジック（修正版）
// ============================================
// 複数ファイル対応、行番号重複バグ修正、ヘッダークリックでスクロール

// グローバル変数
let currentAssignmentId = null; // 現在表示中の課題ID
let currentCodeCache = {}; // コードのキャッシュ（複数ファイル対応）
let currentImageIndex = 0; // 画像モーダルの現在のインデックス
let currentImages = []; // 現在の画像リスト
let currentFileIndex = 0; // 現在表示中のコードファイルのインデックス

/**
 * 初期化処理
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeEventListeners();
    startTypingAnimation();
    
    // イントロの説明文を初期表示
    document.getElementById('introDesc').textContent = getText('introDesc');
    
    // 最初の課題を表示（課題5から降順なので、最初は課題5）
    if (assignmentsData.length > 0) {
        const sortedAssignments = [...assignmentsData].sort((a, b) => b.number - a.number);
        selectTab(sortedAssignments[0].id);
    }
});

/**
 * タブを初期化
 */
function initializeTabs() {
    const tabsContainer = document.getElementById('tabsContainer');
    tabsContainer.innerHTML = '';
    
    // 課題番号の降順でソート（課題5、4、3、2、1の順）
    const sortedAssignments = [...assignmentsData].sort((a, b) => b.number - a.number);
    
    sortedAssignments.forEach(assignment => {
        const tab = document.createElement('button');
        tab.className = 'tab';
        tab.setAttribute('data-id', assignment.id);
        tab.innerHTML = `
            <i class="fab fa-python"></i>
            <span>${getText('tabPrefix')} ${assignment.number}</span>
        `;
        
        // タブクリックイベント
        tab.addEventListener('click', () => {
            selectTab(assignment.id);
        });
        
        tabsContainer.appendChild(tab);
    });
}

/**
 * タブを選択
 * @param {string} assignmentId - 課題ID
 */
function selectTab(assignmentId) {
    // すべてのタブから active クラスを削除
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // 選択されたタブに active クラスを追加
    const selectedTab = document.querySelector(`[data-id="${assignmentId}"]`);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // 課題の詳細を表示
    currentAssignmentId = assignmentId;
    window.currentAssignmentId = assignmentId; // グローバルに保存
    renderAssignment(assignmentId);
}

/**
 * 課題の詳細をレンダリング
 * @param {string} assignmentId - 課題ID
 */
function renderAssignment(assignmentId) {
    const assignment = assignmentsData.find(a => a.id === assignmentId);
    if (!assignment) {
        console.error('Assignment not found:', assignmentId);
        return;
    }
    
    const contentArea = document.getElementById('assignmentContent');
    const lang = currentLang;
    
    // 言語に応じたタグを取得
    const displayTags = lang === 'ja' ? assignment.tags : (assignment.tagsEn || assignment.tags);
    
    // 追加セクション（技術、工夫、感想など）のHTMLを生成
    const sectionsHTML = assignment.sections ? assignment.sections.map(section => `
        <div class="detail-section">
            <h3 class="detail-section-title">
                <i class="fas ${section.icon}"></i>
                ${section.title[lang]}
            </h3>
            <p class="detail-section-content">${section.content[lang]}</p>
        </div>
    `).join('') : '';
    
    // HTMLを生成
    contentArea.innerHTML = `
        <div class="assignment-header">
            <h2 class="assignment-title">
                <i class="fas fa-file-code"></i>
                ${assignment.title[lang]}
            </h2>
            <div class="assignment-meta">
                <span class="meta-item">
                    <i class="far fa-calendar-alt"></i>
                    ${getText('dateLabel')}: ${assignment.date}
                </span>
            </div>
        </div>
        
        <p class="assignment-description">${assignment.description[lang]}</p>
        
        <div class="tags">
            ${displayTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        
        <!-- 追加セクション（技術、工夫、感想など） -->
        ${sectionsHTML}
        
        <!-- 画像ギャラリー -->
        <div class="images-section">
            <h3 class="section-title">
                <i class="far fa-images"></i>
                ${getText('imagesTitle')}
            </h3>
            <div class="images-grid">
                ${assignment.images.map((img, index) => `
                    <div class="image-card" data-index="${index}">
                        <img src="${img.src}" alt="${img.caption[lang]}" loading="lazy">
                        <div class="image-caption">${img.caption[lang]}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <!-- アクションボタン -->
        <div class="actions">
            <button class="btn btn-primary" id="viewCodeBtn">
                <i class="fas fa-code"></i>
                ${getText('viewCodeBtn')}
            </button>
            <a href="${assignment.colabLink}" target="_blank" rel="noopener" class="btn btn-secondary">
                <i class="fab fa-google"></i>
                ${getText('openColabBtn')}
            </a>
        </div>
    `;
    
    // イベントリスナーを設定
    setupAssignmentEventListeners(assignment);
}

/**
 * 課題ページのイベントリスナーを設定
 * @param {Object} assignment - 課題データ
 */
function setupAssignmentEventListeners(assignment) {
    // コード表示ボタン
    const viewCodeBtn = document.getElementById('viewCodeBtn');
    if (viewCodeBtn) {
        viewCodeBtn.addEventListener('click', () => {
            loadAndShowCode(assignment);
        });
    }
    
    // 画像カードのクリックイベント
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach((card) => {
        card.addEventListener('click', () => {
            const index = parseInt(card.getAttribute('data-index'));
            currentImages = assignment.images;
            showImageModal(index);
        });
    });
}

/**
 * ファイルの拡張子からアイコン情報を取得
 * @param {string} fileName - ファイル名
 * @returns {Object} - { type, icon, useDevicon } の形式で返す
 */
function getFileIcon(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    
    // Font Awesomeで対応可能な拡張子
    const fontAwesomeIcons = {
        'py': { type: 'fontawesome', icon: 'fab fa-python', color: '#3776AB' },
        'html': { type: 'fontawesome', icon: 'fab fa-html5', color: '#E34F26' },
        'css': { type: 'fontawesome', icon: 'fab fa-css3-alt', color: '#1572B6' },
        'js': { type: 'fontawesome', icon: 'fab fa-js', color: '#F7DF1E' },
        'json': { type: 'fontawesome', icon: 'fas fa-file-code', color: '#5E5C5C' },
        'md': { type: 'fontawesome', icon: 'fab fa-markdown', color: '#000000' },
        'txt': { type: 'fontawesome', icon: 'fas fa-file-alt', color: '#5E5C5C' }
    };
    
    // Deviconで対応可能な拡張子（Font Awesomeにないもの）
    const deviconIcons = {
        'java': { type: 'devicon', icon: 'devicon-java-plain', color: '#007396' },
        'cpp': { type: 'devicon', icon: 'devicon-cplusplus-plain', color: '#00599C' },
        'c': { type: 'devicon', icon: 'devicon-c-plain', color: '#A8B9CC' },
        'ts': { type: 'devicon', icon: 'devicon-typescript-plain', color: '#3178C6' },
        'jsx': { type: 'devicon', icon: 'devicon-react-original', color: '#61DAFB' },
        'tsx': { type: 'devicon', icon: 'devicon-react-original', color: '#61DAFB' },
        'php': { type: 'devicon', icon: 'devicon-php-plain', color: '#777BB4' },
        'rb': { type: 'devicon', icon: 'devicon-ruby-plain', color: '#CC342D' },
        'go': { type: 'devicon', icon: 'devicon-go-original-wordmark', color: '#00ADD8' },
        'rs': { type: 'devicon', icon: 'devicon-rust-plain', color: '#000000' },
        'sh': { type: 'devicon', icon: 'devicon-bash-plain', color: '#4EAA25' },
        'tex': { type: 'devicon', icon: 'devicon-latex-original', color: '#008080' },
        'xml': { type: 'devicon', icon: 'devicon-xml-plain', color: '#E34F26' },
        'yml': { type: 'devicon', icon: 'devicon-yaml-plain', color: '#CB171E' },
        'yaml': { type: 'devicon', icon: 'devicon-yaml-plain', color: '#CB171E' }
    };
    
    // Font Awesomeで対応
    if (fontAwesomeIcons[ext]) {
        return fontAwesomeIcons[ext];
    }
    
    // Deviconで対応
    if (deviconIcons[ext]) {
        return deviconIcons[ext];
    }
    
    // デフォルト（一般的なファイルアイコン）
    return { type: 'fontawesome', icon: 'fas fa-file', color: '#5E5C5C' };
}

/**
 * コードを読み込んでモーダルに表示（複数ファイル対応）
 * @param {Object} assignment - 課題データ
 */
async function loadAndShowCode(assignment) {
    const modal = document.getElementById('codeModal');
    
    // モーダルを表示
    modal.classList.add('active');
    
    // 複数ファイル対応: codeFiles が存在するか確認
    const hasMultipleFiles = assignment.codeFiles && assignment.codeFiles.length > 0;
    const files = hasMultipleFiles 
        ? assignment.codeFiles 
        : [{
            name: assignment.codeFilePath ? assignment.codeFilePath.split('/').pop() : 'code.py',
            path: assignment.codeFilePath,
            language: 'python'
        }];
    
    // タブUIを生成
    renderCodeTabs(files, assignment);
    
    // 最初のファイルを表示
    currentFileIndex = 0;
    await loadCodeFile(files[0], assignment);
}

/**
 * コードファイルのタブUIを生成
 * @param {Array} files - ファイル情報の配列
 * @param {Object} assignment - 課題データ
 */
function renderCodeTabs(files, assignment) {
    const modalContent = document.getElementById('codeModal').querySelector('.modal-content');
    
    // 既存のタブとヘッダーを削除
    const existingTabs = modalContent.querySelector('.code-modal-tabs');
    const existingHeader = modalContent.querySelector('.modal-header');
    if (existingTabs) existingTabs.remove();
    if (existingHeader) existingHeader.remove();
    
    // タブコンテナを作成
    const tabsHTML = `
        <div class="code-modal-tabs">
            <div class="code-tabs-container" id="codeTabsContainer">
                ${files.map((file, index) => {
                    const iconInfo = getFileIcon(file.name);
                    let iconHTML = '';
                    
                    if (iconInfo.type === 'fontawesome') {
                        iconHTML = `<i class="${iconInfo.icon}" style="color: ${iconInfo.color}"></i>`;
                    } else if (iconInfo.type === 'devicon') {
                        iconHTML = `<i class="${iconInfo.icon}" style="color: ${iconInfo.color}"></i>`;
                    } else if (iconInfo.type === 'custom') {
                        iconHTML = `<img src="${iconInfo.icon}" alt="${file.name}" />`;
                    }
                    
                    return `
                        <button class="code-tab ${index === 0 ? 'active' : ''}" data-index="${index}">
                            ${iconHTML}
                            <span>${file.name}</span>
                        </button>
                    `;
                }).join('')}
            </div>
            <div class="modal-actions">
                <button id="copyCodeBtn" class="modal-btn" title="${getText('copyCodeBtn')}">
                    <i class="fas fa-copy"></i>
                </button>
                <button id="closeModalBtn" class="modal-btn close-btn" title="${getText('closeBtn')}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    modalContent.insertAdjacentHTML('afterbegin', tabsHTML);
    
    // タブクリックイベント
    const codeTabs = modalContent.querySelectorAll('.code-tab');
    codeTabs.forEach((tab, index) => {
        tab.addEventListener('click', async () => {
            // すべてのタブからactiveを削除
            codeTabs.forEach(t => t.classList.remove('active'));
            // クリックされたタブにactiveを追加
            tab.classList.add('active');
            
            // ファイルを読み込み
            currentFileIndex = index;
            await loadCodeFile(files[index], assignment);
        });
    });
    
    // コピーボタンと閉じるボタンのイベント（再設定）
    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        const code = document.getElementById('modalCode').textContent;
        navigator.clipboard.writeText(code).then(() => {
            const btn = document.getElementById('copyCodeBtn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 2000);
        });
    });
    
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        document.getElementById('codeModal').classList.remove('active');
    });
}

/**
 * 個別のコードファイルを読み込んで表示
 * @param {Object} file - ファイル情報 { name, path, language }
 * @param {Object} assignment - 課題データ
 */
async function loadCodeFile(file, assignment) {
    const modalCode = document.getElementById('modalCode');
    
    modalCode.textContent = getText('loadingCode');
    
    // キャッシュキーを生成
    const cacheKey = `${assignment.id}_${file.name}`;
    
    // キャッシュにコードがあればそれを使用
    if (currentCodeCache[cacheKey]) {
        displayCode(currentCodeCache[cacheKey], file.language);
        return;
    }
    
    // コードファイルを読み込み
    try {
        const response = await fetch(file.path);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const code = await response.text();
        
        // キャッシュに保存
        currentCodeCache[cacheKey] = code;
        
        // コードを表示
        displayCode(code, file.language);
        
    } catch (error) {
        console.error('Failed to load code:', error);
        modalCode.textContent = getText('errorLoadingCode');
    }
}

/**
 * コードをモーダルに表示（シンタックスハイライト付き + 行番号）
 * 【修正】行番号の重複バグを修正
 * @param {string} code - コード
 * @param {string} language - 言語（python, html, css, javascript など）
 */
function displayCode(code, language = 'python') {
    const modalCode = document.getElementById('modalCode');
    const pre = modalCode.parentElement;
    
    // 既存の行番号を削除
    const existingLineNumbers = pre.querySelector('.line-numbers');
    if (existingLineNumbers) {
        existingLineNumbers.remove();
    }
    
    // コード全体を設定
    modalCode.textContent = code;
    
    // 言語クラスを設定
    modalCode.className = `language-${language}`;
    
    // 行数をカウント
    const lines = code.split('\n');
    const lineCount = lines.length;
    
    // 行番号の幅を計算（最大桁数に合わせる）
    const maxDigits = lineCount.toString().length;
    const lineNumberWidth = Math.max(50, maxDigits * 10 + 30);
    
    // 行番号を生成
    const lineNumbers = document.createElement('div');
    lineNumbers.className = 'line-numbers';
    lineNumbers.style.width = lineNumberWidth + 'px';
    
    for (let i = 1; i <= lineCount; i++) {
        const lineNum = document.createElement('span');
        lineNum.textContent = i;
        lineNumbers.appendChild(lineNum);
    }
    
    // preタグのスタイルを設定
    pre.style.position = 'relative';
    pre.style.paddingLeft = (lineNumberWidth + 10) + 'px';
    
    // 行番号をpreタグ内に挿入（codeの前）
    pre.insertBefore(lineNumbers, modalCode);
    
    // Prism.jsでシンタックスハイライトを適用
    if (typeof Prism !== 'undefined') {
        Prism.highlightElement(modalCode);
    }
}

/**
 * 画像モーダルを表示
 * @param {number} index - 画像のインデックス
 */
function showImageModal(index) {
    currentImageIndex = index;
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    if (currentImages.length === 0) return;
    
    const image = currentImages[index];
    modalImage.src = image.src;
    modalImage.alt = image.caption[currentLang];
    
    modal.classList.add('active');
}

/**
 * 画像モーダルの画像を切り替え
 * @param {number} direction - 方向（-1: 前, 1: 次）
 */
function changeImage(direction) {
    currentImageIndex += direction;
    
    // 範囲外の場合はループ
    if (currentImageIndex < 0) {
        currentImageIndex = currentImages.length - 1;
    } else if (currentImageIndex >= currentImages.length) {
        currentImageIndex = 0;
    }
    
    showImageModal(currentImageIndex);
}

/**
 * ページトップにスムーズスクロール
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * イベントリスナーを初期化
 */
function initializeEventListeners() {
    // ヘッダーのブランドエリアをクリックでトップにスクロール
    const brand = document.querySelector('.brand');
    if (brand) {
        brand.addEventListener('click', scrollToTop);
    }
    
    // 言語切り替えボタン
    document.getElementById('langToggle').addEventListener('click', () => {
        toggleLanguage();
    });
    
    // 画像モーダルを閉じる
    document.getElementById('closeImageModalBtn').addEventListener('click', () => {
        document.getElementById('imageModal').classList.remove('active');
    });
    
    // 画像モーダルのナビゲーション
    document.getElementById('prevImageBtn').addEventListener('click', () => {
        changeImage(-1);
    });
    
    document.getElementById('nextImageBtn').addEventListener('click', () => {
        changeImage(1);
    });
    
    // モーダルの背景をクリックしたら閉じる
    document.getElementById('codeModal').addEventListener('click', (e) => {
        if (e.target.id === 'codeModal') {
            document.getElementById('codeModal').classList.remove('active');
        }
    });
    
    document.getElementById('imageModal').addEventListener('click', (e) => {
        if (e.target.id === 'imageModal') {
            document.getElementById('imageModal').classList.remove('active');
        }
    });
    
    // キーボードショートカット
    document.addEventListener('keydown', (e) => {
        const codeModal = document.getElementById('codeModal');
        const imageModal = document.getElementById('imageModal');
        
        // Escapeキーでモーダルを閉じる
        if (e.key === 'Escape') {
            codeModal.classList.remove('active');
            imageModal.classList.remove('active');
        }
        
        // 画像モーダルが開いている場合の矢印キー
        if (imageModal.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                changeImage(-1);
            } else if (e.key === 'ArrowRight') {
                changeImage(1);
            }
        }
    });
}

/**
 * タイピングアニメーションを開始
 */
function startTypingAnimation() {
    const typingElement = document.getElementById('typingText');
    const text = getText('typingText');
    let index = 0;
    
    typingElement.textContent = '';
    
    function type() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 80); // 80msごとに1文字追加
        }
    }
    
    // アニメーション開始
    setTimeout(type, 500);
}