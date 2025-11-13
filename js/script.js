// script.js

// 📌 1. 多言語テキストデータ
const i18n = {
    ja: {
        title: "ポートフォリオ — プロジェクト一覧",
        meta: "これまでに制作したプロジェクトを紹介しています。",
        header_name: "あなたの名前",
        header_title: "Frontend Engineer / Designer",
        sidebar_summary_title: "概要",
        sidebar_summary_content: "このポートフォリオは、あなたの制作物を紹介するためにデザインされました。HTML/CSS/JSのみで構成されており、軽量で拡張性の高いシンプルな構造になっています。",
        link_detail: "詳細"
    },
    en: {
        title: "Portfolio — Project List",
        meta: "Showcasing the projects I have worked on.",
        header_name: "Your Name",
        header_title: "Frontend Engineer / Designer",
        sidebar_summary_title: "Summary",
        sidebar_summary_content: "This portfolio is designed to showcase your work. It is built using only HTML, CSS, and JavaScript, featuring a lightweight and easily extensible simple structure.",
        link_detail: "Details"
    }
    // プロジェクト名、説明、タグは project 配列に残します
};

// 初期データ（ここに実際のプロジェクト情報を記述してください）
const projects = [
{ 
        id: "p1", 
        title: { ja: "ポートフォリオサイト", en: "Portfolio Website" }, 
        desc: { ja: "レスポンシブでアクセシブルな個人サイト。ミニマルなデザインと高速な読み込みを実現。", en: "Responsive and accessible personal site. Minimal design and fast loading speed." }, 
        tags: ["HTML","CSS","JS","Design"], 
        date: "2024-06-01", 
        url: "https://example.com/portfolio" 
    },
    { 
        id: "p2", 
        title: { ja: "TODOアプリ (PWA)", en: "TODO App (PWA)" }, 
        desc: { ja: "IndexedDBでタスクを永続化するProgressive Web App。オフライン対応。", en: "A Progressive Web App that persists tasks using IndexedDB. Supports offline use." }, 
        tags: ["PWA","JS","IndexedDB"], 
        date: "2024-04-15", 
        url: "https://example.com/todo" 
    },
    { 
        id: "p3", 
        title: { ja: "UIコンポーネントライブラリ", en: "UI Component Library" }, 
        desc: { ja: "再利用可能なデザインシステムに準拠したReactコンポーネント群を構築。", en: "Built a collection of reusable React components adhering to a design system." }, 
        tags: ["React","TypeScript","Design"], 
        date: "2023-12-05", 
        url: "https://example.com/uilib" 
    },
    { 
        id: "p4", 
        title: { ja: "企業ランディングページ", en: "Corporate Landing Page" }, 
        desc: { ja: "マーケティング目標に基づいた、コンバージョン率を最大化するLPを制作。", en: "Created a landing page based on marketing goals to maximize conversion rates." }, 
        tags: ["HTML","CSS","A/Bテスト"], 
        date: "2023-09-10", 
        url: "https://example.com/lp" 
    }
];

// 📌 2. 現在の言語状態とレンダリング関数
let currentLang = 'ja'; // 初期言語を日本語に設定

// ... (renderProjects 関数はそのまま)

// ----------------------------------------------------
// 📌 3. 多言語対応の描画ロジック
// ----------------------------------------------------

/**
 * HTML要素に言語データを適用し、テキストを更新する
 * @param {string} lang - 'ja' または 'en'
 */
function applyLanguage(lang) {
    currentLang = lang;
    const data = i18n[lang];

    // ① 固定テキストの更新
    document.title = data.title;
    document.getElementById("pageTitle").textContent = data.title;
    document.getElementById("pageMeta").textContent = data.meta;
    document.getElementById("headerName").textContent = data.header_name;
    document.getElementById("headerTitle").textContent = data.header_title;
    document.getElementById("sidebarSummaryTitle").textContent = data.sidebar_summary_title;
    document.getElementById("sidebarSummaryContent").textContent = data.sidebar_summary_content;

    // ② プロジェクトカードの動的テキスト（リンクの「詳細」など）を再描画で更新
    renderProjects();
    
    // ③ 言語切り替えボタンの状態を更新
    document.getElementById('langToggle').textContent = lang === 'ja' ? 'English' : '日本語';
    document.getElementById('langToggle').setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替える');
}


// プロジェクトをレンダリングする関数を少し修正（リンクテキストを言語データから取得）
function renderProjects(){
    const container = document.getElementById("projectsContainer");
    const tpl = document.getElementById("project-template");
    container.innerHTML = "";
    
    // リンクテキストを取得
    const linkText = i18n[currentLang].link_detail;

    projects.forEach(p => {
        const clone = tpl.content.cloneNode(true);
        
        // 修正点: title と desc を currentLang から取得する
        clone.querySelector(".title").textContent = p.title[currentLang];
        clone.querySelector(".desc").textContent = p.desc[currentLang];
        
        clone.querySelector(".date").textContent = p.date; // 日付は固定
        
        const tagsEl = clone.querySelector(".tags");
        p.tags.forEach(t => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = t;
            tagsEl.appendChild(span);
        });
        
        const link = clone.querySelector(".link");
        link.href = p.url || "#";
        link.textContent = linkText; // リンクテキストを言語データから取得
        
        container.appendChild(clone);
    });
}


// 📌 4. 初期描画
// ----------------------------------------------------

// ページロード時に多言語とプロジェクトを初期描画
renderProjects(); 
applyLanguage(currentLang); // 初期言語を適用

// ----------------------------------------------------
// 📌 5. UIイベント処理（ボタンクリック）
// ----------------------------------------------------

document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    applyLanguage(newLang);
});