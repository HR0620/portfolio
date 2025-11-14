// script.js

// 📌 1. 多言語テキストデータ
const i18n = {
    ja: {
        title: "Welcome To My Portfolio!",
        meta: "これまでに制作したプロジェクトを紹介しています。",
        header_name: "原田連寿",
        header_title: "大阪公立大学工業高等専門学校 / 2年",
        sidebar_summary_title: "概要",
        sidebar_summary_content: "このポートフォリオは、あなたの制作物を紹介するためにデザインされました。HTML/CSS/JSのみで構成されており、軽量で拡張性の高いシンプルな構造になっています。",
        link_detail: "詳細",
        //タイムラインとショートカット
        timeline_title: "沿革",
        timeline_meta: "学歴、受賞、資格取得といった私の歩みを時系列で紹介します。", // メタ情報の日本語を修正
        shortcut_intro: "自己紹介",
        shortcut_projects: "作品一覧"
    },
    en: {
        title: "Welcome To My Portfolio!",
        meta: "Showcasing the projects I have worked on.",
        header_name: "Renju Harada",
        header_title: "Osaka Metropolitan University College of Technology / Grade 2",
        sidebar_summary_title: "Summary",
        sidebar_summary_content: "This portfolio is designed to showcase your work. It is built using only HTML, CSS, and JavaScript, featuring a lightweight and easily extensible simple structure.",
        link_detail: "Details",
        //タイムラインとショートカット
        timeline_title: "My Journey",
        timeline_meta: "A chronological overview of my education, awards, and qualifications.", // メタ情報の英語を修正
        shortcut_intro: "Introduction",
        shortcut_projects: "Projects"
    }
};

// 📌 プロジェクトデータ（省略）
const projects = [
    { 
        id: "p1", 
        title: { ja: "Hisayoshi", en: "Hisayoshi" }, 
        desc: { ja: "2I担任である室谷先生公認のOnly Up風室谷先生ゲーム、Hisayoshi。高専祭で展示しました。", en: "A game inspired by 'Only Up,' officially recognized by homeroom teacher Murotani-sensei, exhibited at the Kosen Festival." }, 
        tags: ["python"], 
        date: "2025/11/8,9", 
        url: "./projects/omuct-fes_2025" 
    }

];

// 📌 2. タイムラインデータ（時系列データ） - typeを追加
const timelineData = [
    { 
        year: "2024/04", 
        type: 'history', // 経歴（右側）
        title: { ja: "大阪公立大学工業高等専門学校 入学", en: "Entered Osaka Metropolitan University College of Technology" }, 
        description: { ja: "プログラミング研究会に所属し、プログラミングの基礎を学ぶ。", en: "Joined the Programming Research Club and began learning programming fundamentals." }
    },
    { 
        year: "2024/11", 
        type: 'qual', // 資格（左側）
        title: { ja: "実用英語技能検定準2級 合格", en: "Eiken Grade Pre-2 Passed" }, 
        description: { ja: "英語でのコミュニケーション能力の基礎を確立。", en: "Established basic English communication skills." }
    },
    { 
        year: "2024/12", 
        type: 'qual', // 資格（左側）
        title: { ja: "防災士 認定", en: "Disaster Preparedness Advisor Certified" }, 
        description: { ja: "災害対策と地域防災に関する知識を習得。", en: "Acquired knowledge on disaster countermeasures and local disaster prevention." }
    },
    { 
        year: "2025/04", 
        type: 'history', // 経歴（右側）
        title: { ja: "知能情報コース 進学", en: "Advanced to Intelligent Informatics Course" }, 
        description: { ja: "AIやデータ分析を含む情報技術の専門教育を開始。", en: "Began specialized education in information technology, including AI and data analysis." }
    },
    { 
        year: "2025/07", 
        type: 'qual', // 資格（左側）
        title: { ja: "漢字能力技能検定2級 合格", en: "Kanji Proficiency Test Grade 2 Passed" }, 
        description: { ja: "高い日本語能力を証明。", en: "Demonstrated advanced Japanese language proficiency." }
    },
    { 
        year: "2025/10", 
        type: 'qual', // 資格（左側）
        title: { ja: "ITパスポート 合格", en: "IT Passport Exam Passed" }, 
        description: { ja: "情報技術に関する基礎的な知識を幅広く習得。", en: "Acquired broad basic knowledge of information technology." }
    },
    { 
        year: "2025 - 現在", 
        type: 'history', // 経歴（右側）
        title: { ja: "大阪公立大学工業高等専門学校 知能情報コース 在学中", en: "Currently studying at Osaka Metropolitan University College of Technology, Intelligent Informatics Course" }, 
        description: { ja: "Webアプリケーション開発とUI/UX設計を専門的に学び、チーム開発を経験中。", en: "Specializing in web application development and UI/UX design, currently experiencing team development." }
    }
];

// 📌 3. 現在の言語状態
let currentLang = 'ja'; 

// ... (applyLanguage関数は変更なし) ...
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
    document.getElementById("timelineMeta").textContent = data.timeline_meta; // メタ情報のIDを仮定

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

// ... (renderProjects関数は変更なし) ...
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


// 📌 タイムラインをレンダリングする関数を左右振り分けに対応させる
function renderTimeline() {
    const container = document.getElementById("timelineContainer");
    container.innerHTML = ''; 

    timelineData.forEach(item => {
        const itemEl = document.createElement('div');
        
        // typeに応じてクラスを付与
        const typeClass = item.type === 'qual' ? 'timeline-item-left' : 'timeline-item-right';
        itemEl.className = `timeline-item hidden ${typeClass}`;
        
        // 年はコンテンツ内に移動
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
        
        content.appendChild(year);
        content.appendChild(title);
        content.appendChild(description);
        
        itemEl.appendChild(content); 
        
        container.appendChild(itemEl);
    });
    
    setupScrollReveal(); 
}

// ... (setupScrollReveal関数は変更なし) ...
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

// ... (初期描画とイベント処理は変更なし) ...
// ページロード時に多言語とプロジェクト、タイムラインを初期描画
renderTimeline();
applyLanguage(currentLang); 

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