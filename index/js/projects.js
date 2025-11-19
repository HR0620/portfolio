// projects.js - プロジェクト機能モジュール

// プロジェクト管理クラス
class Projects {
    constructor() {
        this.container = document.getElementById("projectsContainer");
        this.template = document.getElementById("project-template");
    }

    // プロジェクトをレンダリングする
    render() {
        this.container.innerHTML = "";
        
        const linkText = i18n[currentLang].link_detail;

        projects.forEach(p => {
            const clone = this.template.content.cloneNode(true);
            
            // 画像を設定
            if (p.image) {
                const imgEl = clone.querySelector(".project-image");
                imgEl.src = p.image;
                imgEl.alt = p.title[currentLang] + " のサムネイル画像";
            }

            // タイトル、説明、日付を設定
            clone.querySelector(".title").textContent = p.title[currentLang];
            clone.querySelector(".desc").textContent = p.desc[currentLang];
            clone.querySelector(".date").textContent = p.date;
            
            // タグを設定
            const tagsEl = clone.querySelector(".tags");
            tagsEl.innerHTML = '';
            p.tags.forEach(t => {
                const span = document.createElement("span");
                span.className = "tag";
                span.textContent = t;
                tagsEl.appendChild(span);
            });
            
            // リンクを設定
            const link = clone.querySelector(".link");
            link.href = p.url || "#";
            link.textContent = linkText; 

            this.container.appendChild(clone);
        });
    }

    // 初期化処理
    init() {
        this.render();
    }
}