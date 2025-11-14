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
        timeline_meta: "学歴、受賞、資格取得といった私の歩みを時系列で紹介します。", 
        shortcut_intro: "自己紹介",
        shortcut_projects: "作品一覧",
        // 新規追加: スキルとモーダル
        skills_title: "スキルセット",
        skills_meta: "私が習得している技術と、それぞれの熟練度を紹介します。",
        skill_detail_button: "詳細を見る",
        modal_close: "閉じる",
        proficiency_level: "熟練度",
        experience_summary: "経験概要"
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
        timeline_meta: "A chronological overview of my education, awards, and qualifications.", 
        shortcut_intro: "Introduction",
        shortcut_projects: "Projects",
        // 新規追加: スキルとモーダル
        skills_title: "Skill Set",
        skills_meta: "Technologies I've acquired and my proficiency level in each.",
        skill_detail_button: "See Details",
        modal_close: "Close",
        proficiency_level: "Proficiency Level",
        experience_summary: "Experience Summary"
    }
};

// 📌 プロジェクトデータ - imageプロパティを追加
const projects = [
    { 
        id: "p1", 
        title: { ja: "Hisayoshi", en: "Hisayoshi" }, 
        desc: { ja: "2I担任である室谷先生公認のOnly Up風室谷先生ゲーム、Hisayoshi。高専祭で展示しました。", en: "A game inspired by 'Only Up,' officially recognized by homeroom teacher Murotani-sensei, exhibited at the Kosen Festival." }, 
        tags: ["python"], 
        date: "2025/11/8,9", 
        url: "./projects/omuct-fes_2025",
        image: "images/hisayoshi_thumbnail.png" // 仮の画像パス。imagesフォルダに配置してください。
    }

];

// 📌 タイムラインデータ（時系列データ）
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

// 📌 3. スキルデータ
const skillsData = [
    {
        id: 'cpp',
        name: 'C++',
        icon: 'images/cpp_logo.svg', // 仮のロゴパス。imagesフォルダに配置してください。
        proficiency: 70, // 100点満点
        details: {
            ja: {
                level: "中級 (基本的なアルゴリズム実装、競技プログラミング)",
                summary: "高専の授業で基本的な構文とデータ構造を学習。競技プログラミングの練習で複雑なアルゴリズムの実装経験あり。"
            },
            en: {
                level: "Intermediate (Basic algorithm implementation, competitive programming)",
                summary: "Learned basic syntax and data structures in college courses. Experienced implementing complex algorithms through competitive programming."
            }
        }
    },
    {
        id: 'htmlcss',
        name: 'HTML/CSS',
        icon: 'images/htmlcss_logo.svg',
        proficiency: 85,
        details: {
            ja: {
                level: "上級 (レスポンシブデザイン、CSSアニメーション)",
                summary: "セマンティックなHTML記述と、CSS Grid/Flexboxを用いたレスポンシブレイアウトが得意。現在のポートフォリオも自作CSSで構築。"
            },
            en: {
                level: "Advanced (Responsive design, CSS animation)",
                summary: "Proficient in semantic HTML and responsive layouts using CSS Grid/Flexbox. This portfolio itself is built with custom CSS."
            }
        }
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        icon: 'images/js_logo.svg',
        proficiency: 65,
        details: {
            ja: {
                level: "中級 (DOM操作、非同期処理)",
                summary: "DOM操作による動的コンテンツの作成、非同期処理（Promise, async/await）の基本を理解。Vanilla JSでの開発経験が豊富。"
            },
            en: {
                level: "Intermediate (DOM manipulation, asynchronous processing)",
                summary: "Understands the basics of dynamic content creation via DOM manipulation and asynchronous processing. Extensive experience developing with Vanilla JS."
            }
        }
    }
];

// 📌 4. 現在の言語状態
let currentLang = 'ja'; 

// ----------------------------------------------------
// 📌 5. 多言語対応の描画ロジック
// ----------------------------------------------------

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
    
    // タイムライン見出しの更新
    document.getElementById("timelineTitle").textContent = data.timeline_title;
    document.getElementById("timelineMeta").textContent = data.timeline_meta; 

    // スキルセクション見出しの更新
    document.getElementById("skillsTitle").textContent = data.skills_title;
    document.getElementById("skillsMeta").textContent = data.skills_meta;

    // ショートカットボタンの更新
    document.getElementById("scrollToIntro").textContent = data.shortcut_intro;
    document.getElementById("scrollToProjects").textContent = data.shortcut_projects;

    // Modalの閉じるボタンの更新
    document.getElementById("modalCloseBtn").textContent = data.modal_close;
    document.getElementById("modalProficiencyLevel").textContent = data.proficiency_level;
    document.getElementById("modalExperienceSummary").textContent = data.experience_summary;

    // ② プロジェクトカードの動的テキストを再描画で更新
    renderProjects();
    
    // ③ タイムラインの再描画
    renderTimeline();
    
    // ④ スキルカードの再描画
    renderSkills();

    // ⑤ 言語切り替えボタンの状態を更新
    document.getElementById('langToggle').textContent = lang === 'ja' ? 'English' : '日本語';
    document.getElementById('langToggle').setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替える');
}


// 📌 プロジェクトをレンダリングする関数（画像対応）
function renderProjects(){
    const container = document.getElementById("projectsContainer");
    const tpl = container.parentNode.querySelector("#project-template");
    container.innerHTML = "";
    
    const linkText = i18n[currentLang].link_detail;

    projects.forEach(p => {
        const clone = tpl.content.cloneNode(true);
        
        // 画像をレンダリング
        if (p.image) {
            const imgEl = clone.querySelector(".project-image");
            imgEl.src = p.image;
            imgEl.alt = p.title[currentLang] + " のサムネイル画像";
        }

        clone.querySelector(".title").textContent = p.title[currentLang];
        clone.querySelector(".desc").textContent = p.desc[currentLang];
        clone.querySelector(".date").textContent = p.date;
        
        const tagsEl = clone.querySelector(".tags");
        tagsEl.innerHTML = '';
        p.tags.forEach(t => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = t;
            tagsEl.appendChild(span);
        });
        
        const link = clone.querySelector(".link");
        link.href = p.url || "#";
        link.textContent = linkText; 
        
        // 編集/削除ボタンは閲覧専用のため非表示に維持（HTML側でstyle="display:none;"を追加済み）

        container.appendChild(clone);
    });
}


// 📌 タイムラインをレンダリングする関数 (左右振り分け対応)
function renderTimeline() {
    const container = document.getElementById("timelineContainer");
    container.innerHTML = ''; 

    timelineData.forEach(item => {
        const itemEl = document.createElement('div');
        
        const typeClass = item.type === 'qual' ? 'timeline-item-left' : 'timeline-item-right';
        itemEl.className = `timeline-item hidden ${typeClass}`;
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const year = document.createElement('div');
        year.className = 'timeline-year';
        year.textContent = item.year;

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


// 📌 スキルをレンダリングする関数
function renderSkills() {
    const container = document.getElementById("skillsContainer");
    container.innerHTML = '';
    const detailButtonText = i18n[currentLang].skill_detail_button;

    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.setAttribute('data-skill-id', skill.id);

        // アイコン/ロゴ
        const icon = document.createElement('img');
        icon.className = 'skill-icon';
        icon.src = skill.icon;
        icon.alt = skill.name + ' Logo';

        // 名前
        const name = document.createElement('h3');
        name.textContent = skill.name;
        
        // 熟練度バー
        const barContainer = document.createElement('div');
        barContainer.className = 'proficiency-bar-container';
        const bar = document.createElement('div');
        bar.className = 'proficiency-bar';
        bar.style.width = skill.proficiency + '%'; 
        barContainer.appendChild(bar);

        // 詳細ボタン
        const detailBtn = document.createElement('button');
        detailBtn.className = 'skill-detail-btn';
        detailBtn.textContent = detailButtonText;
        detailBtn.setAttribute('data-skill-id', skill.id);
        // モーダル表示イベントリスナーを直接アタッチ
        detailBtn.addEventListener('click', showSkillModal);

        skillCard.appendChild(icon);
        skillCard.appendChild(name);
        skillCard.appendChild(barContainer);
        skillCard.appendChild(detailBtn);
        
        container.appendChild(skillCard);
    });
}

// 📌 モーダル表示ロジック
function showSkillModal(event) {
    const skillId = event.target.getAttribute('data-skill-id');
    const skill = skillsData.find(s => s.id === skillId);
    
    if (!skill) return;

    const modal = document.getElementById('skillDetailModal');
    const lang = currentLang;

    // モーダルコンテンツの更新
    document.getElementById('modalSkillIcon').src = skill.icon;
    document.getElementById('modalSkillIcon').alt = skill.name + ' Logo';
    document.getElementById('modalSkillName').textContent = skill.name;

    // 熟練度バーの更新
    const modalBar = document.getElementById('modalProficiencyBar');
    modalBar.style.width = skill.proficiency + '%';
    document.getElementById('modalProficiencyText').textContent = `${skill.proficiency}%`;

    // 詳細テキストの更新
    document.getElementById('modalExperienceContent').textContent = skill.details[lang].summary;
    document.getElementById('modalProficiencyLevelText').textContent = skill.details[lang].level;
    
    // モーダルを表示
    modal.classList.add('visible');
    document.body.classList.add('modal-open'); 
}

function hideSkillModal() {
    document.getElementById('skillDetailModal').classList.remove('visible');
    document.body.classList.remove('modal-open');
}

// ----------------------------------------------------
// 📌 6. スクロールアニメーションと初期化
// ----------------------------------------------------
function setupScrollReveal() {
    if (window.timelineObserver) {
        window.timelineObserver.disconnect();
    }
    
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.2
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    window.timelineObserver = new IntersectionObserver(callback, options);

    timelineItems.forEach(item => {
        window.timelineObserver.observe(item);
    });
}


// ----------------------------------------------------
// 📌 7. 初期描画とイベント処理
// ----------------------------------------------------

// ページロード時に多言語とプロジェクト、タイムライン、スキルを初期描画
// renderTimeline()とrenderSkills()はapplyLanguage内で呼び出されます
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

// モーダルのイベントリスナー
document.getElementById('modalCloseBtn').addEventListener('click', hideSkillModal);
document.getElementById('skillDetailModal').addEventListener('click', (e) => {
    // オーバーレイをクリックした場合に閉じる
    if (e.target.id === 'skillDetailModal') {
        hideSkillModal();
    }
});