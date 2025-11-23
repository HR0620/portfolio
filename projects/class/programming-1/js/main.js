// main.js - メインロジック
// ============================================
// 課題の表示、コードの読み込み、モーダル制御などを管理

// グローバル変数
let currentAssignmentId = null; // 現在表示中の課題ID
let currentCodeCache = {}; // コードのキャッシュ
let currentImageIndex = 0; // 画像モーダルの現在のインデックス
let currentImages = []; // 現在の画像リスト

/**
 * 初期化処理
 */
document.addEventListener('DOMContentLoaded', () => {
    initializeTabs();
    initializeEventListeners();
    startTypingAnimation();
    
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
                <span class="meta-item">
                    <i class="fas fa-hashtag"></i>
                    ${getText('tagsLabel')}: ${assignment.tags.length}
                </span>
            </div>
        </div>
        
        <p class="assignment-description">${assignment.description[lang]}</p>
        
        <div class="tags">
            ${assignment.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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
 * コードを読み込んでモーダルに表示
 * @param {Object} assignment - 課題データ
 */
async function loadAndShowCode(assignment) {
    const modal = document.getElementById('codeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCode = document.getElementById('modalCode');
    
    // モーダルを表示
    modal.classList.add('active');
    modalTitle.textContent = assignment.title[currentLang];
    modalCode.textContent = getText('loadingCode');
    
    // キャッシュにコードがあればそれを使用
    if (currentCodeCache[assignment.id]) {
        displayCode(currentCodeCache[assignment.id]);
        return;
    }
    
    // コードファイルを読み込み
    try {
        const response = await fetch(assignment.codeFilePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const code = await response.text();
        
        // キャッシュに保存
        currentCodeCache[assignment.id] = code;
        
        // コードを表示
        displayCode(code);
        
    } catch (error) {
        console.error('Failed to load code:', error);
        modalCode.textContent = getText('errorLoadingCode');
    }
}

/**
 * コードをモーダルに表示（シンタックスハイライト付き）
 * @param {string} code - Pythonコード
 */
function displayCode(code) {
    const modalCode = document.getElementById('modalCode');
    modalCode.textContent = code;
    
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
 * イベントリスナーを初期化
 */
function initializeEventListeners() {
    // 言語切り替えボタン
    document.getElementById('langToggle').addEventListener('click', () => {
        toggleLanguage();
    });
    
    // コードモーダルを閉じる
    document.getElementById('closeModalBtn').addEventListener('click', () => {
        document.getElementById('codeModal').classList.remove('active');
    });
    
    // コードをコピー
    document.getElementById('copyCodeBtn').addEventListener('click', () => {
        const code = document.getElementById('modalCode').textContent;
        navigator.clipboard.writeText(code).then(() => {
            // コピー成功のフィードバック
            const btn = document.getElementById('copyCodeBtn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 2000);
        });
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