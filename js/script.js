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
        link_detail: "詳細",
        // 追加: タイムラインとショートカット
        timeline_title: "私の歩み（沿革）",
        timeline_meta: "これまでの学歴、職歴、そして技術的なマイルストーンを時系列で紹介します。",
        shortcut_intro: "自己紹介",
        shortcut_projects: "作品一覧"
    },
    en: {
        title: "Portfolio — Project List",
        meta: "Showcasing the projects I have worked on.",
        header_name: "Your Name",
        header_title: "Frontend Engineer / Designer",
        sidebar_summary_title: "Summary",
        sidebar_summary_content: "This portfolio is designed to showcase your work. It is built using only HTML, CSS, and JavaScript, featuring a lightweight and easily extensible simple structure.",
        link_detail: "Details",
        // 追加: タイムラインとショートカット
        timeline_title: "My Journey (Timeline)",
        timeline_meta: "A chronological overview of my education, career, and technical milestones.",
        shortcut_intro: "Introduction",
        shortcut_projects: "Projects"
    }
};

// 📌 プロジェクトデータ（省略。以前の修正済み構造を維持）
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

// 📌 2. タイムラインデータ（時系列データ）
const timelineData = [
    { 
        year: "2020", 
        title: { ja: "〇〇高等学校 入学", en: "Enrolled in XX High School" }, 
        description: { ja: "情報科学部に所属し、プログラミングとデザインの基礎を学ぶ。", en: "Joined the Information Science Club and studied the basics of programming and design." }
    },
    { 
        year: "2022", 
        title: { ja: "Webサイト制作コンテスト 優秀賞受賞", en: "Received Excellence Award in Web Design Contest" }, 
        description: { ja: "初の本格的な個人プロジェクトで受賞。HTML/CSSのスキルを確立。", en: "Won an award for the first major solo project. Established strong HTML/CSS skills." }
    },
    { 
        year: "2023", 
        title: { ja: "独学でJavaScriptとReactを習得", en: "Self-studied JavaScript and React" }, 
        description: { ja: "動的なWebアプリケーション開発を目指し、フロントエンドフレームワークの学習を開始。", en: "Began studying frontend frameworks to pursue dynamic web application development." }
    },
    { 
        year: "2024 - 現在", 
        title: { ja: "〇〇専門学校 〇〇科 在学中", en: "Currently studying at XX Technical College, YY Department" }, 
        description: { ja: "Webアプリケーション開発とUI/UX設計を専門的に学び、チーム開発を経験中。", en: "Specializing in web application development and UI/UX design, currently experiencing team development." }
    }
];

// 📌 3. 現在の言語状態
let currentLang = 'ja'; 

// ----------------------------------------------------
// 📌 4. 多言語対応の描画ロジック
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
    
    // 追加: タイムライン見出しの更新
    document.getElementById("timelineTitle").textContent = data.timeline_title;
    document.getElementById("timelineMeta").textContent = data.timeline_meta;

    // 追加: ショートカットボタンの更新
    document.getElementById("scrollToIntro").textContent = data.shortcut_intro;
    document.getElementById("scrollToProjects").textContent = data.shortcut_projects;

    // ② プロジェクトカードの動的テキスト（リンクの「詳細」など）を再描画で更新
    renderProjects();
    
    // ③ タイムラインの再描画
    renderTimeline();
    
    // ④ 言語切り替えボタンの状態を更新
    document.getElementById('langToggle').textContent = lang === 'ja' ? 'English' : '日本語';
    document.getElementById('langToggle').setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替える');
}


// プロジェクトをレンダリングする関数 (多言語対応済み)
function renderProjects(){
    const container = document.getElementById("projectsContainer");
    const tpl = container.parentNode.querySelector("#project-template"); // テンプレートを正しく取得
    container.innerHTML = "";
    
    const linkText = i18n[currentLang].link_detail;

    projects.forEach(p => {
        const clone = tpl.content.cloneNode(true);
        
        clone.querySelector(".title").textContent = p.title[currentLang];
        clone.querySelector(".desc").textContent = p.desc[currentLang];
        clone.querySelector(".date").textContent = p.date;
        
        const tagsEl = clone.querySelector(".tags");
        tagsEl.innerHTML = ''; // タグをクリア
        p.tags.forEach(t => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = t;
            tagsEl.appendChild(span);
        });
        
        const link = clone.querySelector(".link");
        link.href = p.url || "#";
        link.textContent = linkText; 
        
        // 編集/削除ボタンは閲覧専用のため非表示に維持
        clone.querySelector(".edit").style.display = 'none';
        clone.querySelector(".remove").style.display = 'none';

        container.appendChild(clone);
    });
}

// 追加: タイムラインをレンダリングする関数
function renderTimeline() {
    const container = document.getElementById("timelineContainer");
    container.innerHTML = ''; 

    timelineData.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.className = 'timeline-item hidden'; // 初期状態は非表示
        
        const year = document.createElement('div');
        year.className = 'timeline-year';
        year.textContent = item.year;
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const title = document.createElement('h3');
        title.className = 'timeline-title';
        title.textContent = item.title[currentLang];
        
        const description = document.createElement('p');
        description.textContent = item.description[currentLang];
        
        content.appendChild(title);
        content.appendChild(description);
        itemEl.appendChild(year);
        itemEl.appendChild(content);
        
        container.appendChild(itemEl);
    });
    
    // タイムラインのレンダリング後、スクロールアニメーションをセットアップ
    setupScrollReveal(); 
}

// 📌 5. スクロール連動アニメーションのセットアップ
function setupScrollReveal() {
    // 既存の Intersection Observer があれば解除（再描画のため）
    if (window.timelineObserver) {
        window.timelineObserver.disconnect();
    }
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // オブザーバーのオプション
    const options = {
        root: null, // ビューポートをルートとして使用
        rootMargin: '0px',
        threshold: 0.2 // 要素の20%が見えたら発火
    };

    // コールバック関数
    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 見えたら 'visible' クラスを追加
                entry.target.classList.add('visible');
                // 一度アニメーションしたら監視を停止
                observer.unobserve(entry.target);
            }
        });
    };

    // Intersection Observer の作成
    window.timelineObserver = new IntersectionObserver(callback, options);

    // すべてのタイムライン要素を監視
    timelineItems.forEach(item => {
        window.timelineObserver.observe(item);
    });
}

// ----------------------------------------------------
// 📌 6. 初期描画とイベント処理
// ----------------------------------------------------

// ページロード時に多言語とプロジェクト、タイムラインを初期描画
renderTimeline(); // タイムラインの初期描画とアニメーションセットアップ
applyLanguage(currentLang); 
// renderProjects() は applyLanguage の中で呼び出されます。

// ショートカットボタンのイベントリスナー
document.getElementById('scrollToIntro').addEventListener('click', () => {
    document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToProjects').addEventListener('click', () => {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
});

// 言語切り替えボタンのイベントリスナー
document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    applyLanguage(newLang);
});