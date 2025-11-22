// projects.js - プロジェクト機能モジュール
// ============================================
// iconType: 'original' | 'fontawesome' | 'devicon' に対応
// image フィールドには画像パス、Font Awesomeクラス、Deviconクラスを指定可能

// ===== プロジェクト管理クラス =====
class Projects {
    constructor() {
        this.container = document.getElementById("projectsContainer");
    }

    // プロジェクトをレンダリングする
    render() {
        this.container.innerHTML = "";
        
        const linkText = i18n[currentLang].link_detail;

        projects.forEach(p => {
            // プロジェクトカードを作成
            const article = document.createElement('article');
            article.className = 'project';
            
            // --- 画像/アイコン部分 ---
            const mediaContainer = document.createElement('div');
            mediaContainer.className = 'project-media-container';
            
            // iconTypeを判定（指定がなければ自動判定）
            const iconType = p.iconType || IconUtils.detectIconType(p.image);
            
            if (iconType === 'original') {
                // 画像パスの場合
                const img = document.createElement('img');
                img.className = 'project-image';
                img.src = p.image;
                img.alt = p.title[currentLang] + " のサムネイル画像";
                img.loading = 'lazy';
                mediaContainer.appendChild(img);
            } else {
                // Font Awesome または Devicon の場合
                const iconWrapper = document.createElement('div');
                iconWrapper.className = 'project-icon-wrapper';
                iconWrapper.innerHTML = IconUtils.createIconHTML(iconType, p.image, p.title[currentLang], {
                    size: 'xlarge'
                });
                mediaContainer.appendChild(iconWrapper);
            }
            
            article.appendChild(mediaContainer);
            
            // --- ヘッダー部分（タイトル + 日付） ---
            const header = document.createElement('div');
            header.className = 'project-header';
            
            const title = document.createElement('h3');
            title.className = 'project-title';
            title.textContent = p.title[currentLang];
            
            const date = document.createElement('div');
            date.className = 'project-date meta';
            date.textContent = p.date;
            
            header.appendChild(title);
            header.appendChild(date);
            article.appendChild(header);
            
            // --- 説明文 ---
            const desc = document.createElement('div');
            desc.className = 'project-desc';
            desc.textContent = p.desc[currentLang];
            article.appendChild(desc);
            
            // --- タグ ---
            const tags = document.createElement('div');
            tags.className = 'tags';
            p.tags.forEach(t => {
                if (t) { // 空文字でない場合のみ
                    const span = document.createElement('span');
                    span.className = 'tag';
                    span.textContent = t;
                    tags.appendChild(span);
                }
            });
            article.appendChild(tags);
            
            // --- フッター部分（詳細ボタン：左下配置） ---
            const footer = document.createElement('div');
            footer.className = 'project-footer';
            
            const link = document.createElement('a');
            link.className = 'project-link';
            link.href = p.url || '#';
            link.textContent = linkText;
            // 外部リンクの場合
            if (p.url && (p.url.startsWith('http') || p.url.startsWith('//'))) {
                link.target = '_blank';
                link.rel = 'noopener';
            }
            
            footer.appendChild(link);
            article.appendChild(footer);
            
            this.container.appendChild(article);
        });
    }

    // 初期化処理
    init() {
        this.render();
    }
}

// グローバルに公開するための関数
function renderProjects() {
    if (window.projectsInstance) {
        window.projectsInstance.render();
    }
}