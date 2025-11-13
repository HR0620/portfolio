// script.js

// 初期データ（ここに実際のプロジェクト情報を記述してください）
const projects = [
    { id: "p1", title: "ポートフォリオサイト", desc: "レスポンシブでアクセシブルな個人サイト。ミニマルなデザインと高速な読み込みを実現。", tags: ["HTML","CSS","JS","Design"], date: "2024-06-01", url: "https://example.com/portfolio" },
    { id: "p2", title: "TODOアプリ (PWA)", desc: "IndexedDBでタスクを永続化するProgressive Web App。オフライン対応。", tags: ["PWA","JS","IndexedDB"], date: "2024-04-15", url: "https://example.com/todo" },
    { id: "p3", title: "UIコンポーネントライブラリ", desc: "再利用可能なデザインシステムに準拠したReactコンポーネント群を構築。", tags: ["React","TypeScript","Design"], date: "2023-12-05", url: "https://example.com/uilib" },
    { id: "p4", title: "企業ランディングページ", desc: "マーケティング目標に基づいた、コンバージョン率を最大化するLPを制作。", tags: ["HTML","CSS","A/Bテスト"], date: "2023-09-10", url: "https://example.com/lp" }
];

// プロジェクトをレンダリングする関数
function renderProjects(){
    const container = document.getElementById("projectsContainer");
    const tpl = document.getElementById("project-template");
    container.innerHTML = ""; // コンテンツをクリア

    projects.forEach(p => {
        // template要素の内容を複製
        const clone = tpl.content.cloneNode(true);
        
        // 各要素にデータを注入
        clone.querySelector(".title").textContent = p.title;
        clone.querySelector(".desc").textContent = p.desc;
        clone.querySelector(".date").textContent = p.date;
        
        const tagsEl = clone.querySelector(".tags");
        p.tags.forEach(t => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = t;
            tagsEl.appendChild(span);
        });
        
        const link = clone.querySelector(".link");
        link.href = p.url || "#";
        
        // コンテナに追加
        container.appendChild(clone);
    });
}

// 初期描画を実行
renderProjects();