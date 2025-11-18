// script.js

// 📌 1. 多言語テキストデータ
const i18n = {
    ja: {
        title: "Welcome To My Portfolio!",
        meta: "これまでに制作したプロジェクトを紹介しています。",
        header_name: "原田連寿",
        header_title: "大阪公立大学工業高等専門学校 / 2年",
        link_detail: "詳細",
        // About Me
        about_title: "About Me",
        about_meta: "私について",
        about_content: "大阪公立大学工業高等専門学校の2年生です。プログラミングやWeb開発に興味があり、日々学習を続けています。趣味はゲーム開発とアルゴリズムの勉強です。",
        // Timeline
        timeline_title: "沿革",
        timeline_meta: "学歴、受賞、資格・検定取得といった私の歩みを時系列で紹介します。",
        // Shortcuts
        shortcut_about: "自己紹介",
        shortcut_intro: "沿革",
        shortcut_projects: "作品一覧",
        shortcut_skills: "スキル/ツール",
        shortcut_activities: "活動一覧",
        shortcut_contact: "連絡先",
        // Skills
        skills_title: "スキルセット",
        skills_meta: "私が習得している技術と、それぞれの熟練度を紹介します。",
        modal_close: "閉じる",
        proficiency_level: "熟練度",
        experience_summary: "経験概要",
        // Dev Tools
        devtools_title: "開発ツール",
        devtools_meta: "普段の開発で使用しているツール一覧です。",
        // Activities
        activities_title: "課外活動 / 受賞歴",
        activities_meta: "学術的なコンテストや、その他の課外活動の記録です。",
        // Contact
        contact_title: "連絡先",
        contact_meta: "お気軽にご連絡ください。",
        school_email_label: "学校用メール",
        personal_email_label: "個人用メール"
    },
    en: {
        title: "Welcome To My Portfolio!",
        meta: "Showcasing the projects I have worked on.",
        header_name: "Renju Harada",
        header_title: "Osaka Metropolitan University College of Technology / Grade 2",
        link_detail: "Details",
        // About Me
        about_title: "About Me",
        about_meta: "Introduction",
        about_content: "I'm a 2nd year student at Osaka Metropolitan University College of Technology. I'm interested in programming and web development, and I'm constantly learning. My hobbies include game development and studying algorithms.",
        // Timeline
        timeline_title: "My Journey",
        timeline_meta: "A chronological overview of my education, awards, and qualifications.",
        // Shortcuts
        shortcut_about: "About",
        shortcut_intro: "Journey",
        shortcut_projects: "Projects",
        shortcut_skills: "Skills/Tools",
        shortcut_activities: "Activities",
        shortcut_contact: "Contact",
        // Skills
        skills_title: "Skill Set",
        skills_meta: "Technologies I've acquired and my proficiency level in each.",
        modal_close: "Close",
        proficiency_level: "Proficiency Level",
        experience_summary: "Experience Summary",
        // Dev Tools
        devtools_title: "Development Tools",
        devtools_meta: "Tools I frequently use for development.",
        // Activities
        activities_title: "Activities / Awards",
        activities_meta: "Records of academic competitions and other extracurricular activities.",
        // Contact
        contact_title: "Contact",
        contact_meta: "Feel free to reach out to me.",
        school_email_label: "School Email",
        personal_email_label: "Personal Email"
    }
};

const timelineData = [
    { 
        year: "2024/04", 
        type: 'history',
        title: { ja: "大阪公立大学工業高等専門学校 入学", en: "Entered Osaka Metropolitan University College of Technology" }, 
        description: { ja: "プログラミング研究会に所属し、プログラミングの基礎を学ぶ。", en: "Joined the Programming Research Club and began learning programming fundamentals." }
    },
    { 
        year: "2024/11", 
        type: 'qual', 
        title: { ja: "実用英語技能検定準2級 合格", en: "Eiken Grade Pre-2 Passed" }, 
        description: { ja: "", en: "" }
    },
    { 
        year: "2024/12", 
        type: 'qual',
        title: { ja: "防災士 認定", en: "Disaster Preparedness Advisor Certified" }, 
        description: { ja: "災害対策と地域防災に関する知識を習得。", en: "Acquired knowledge on disaster countermeasures and local disaster prevention." }
    },
    { 
        year: "2025/03", 
        type: 'qual',
        title: { ja: "KOSENJIN SUMMIT 2025 ボランティア", en: "KOSENJIN SUMMIT 2025 Volunteer" }, 
        description: { ja: "AIやデータ分析を含む情報技術の専門教育を開始。", en: "Began specialized education in information technology, including AI and data analysis." }
    },
    { 
        year: "2025/03", 
        type: 'history',
        title: { ja: "学生有志団体PINTO OMUCT 所属", en: "Joined PINTO OMUCT" }, 
        description: { ja: "AIやデータ分析を含む情報技術の専門教育を開始。", en: "Began specialized education in information technology, including AI and data analysis." }
    },
    { 
        year: "2025/04", 
        type: 'history',
        title: { ja: "知能情報コース 進学", en: "Advanced to Intelligent Informatics Course" }, 
        description: { ja: "AIやデータ分析を含む情報技術の専門教育を開始。", en: "Began specialized education in information technology, including AI and data analysis." }
    },
    { 
        year: "2025/05", 
        type: 'history',
        title: { ja: "学生・教員有志団体FARAD 所属", en: "Joined FARAD" }, 
        description: { ja: "AIやデータ分析を含む情報技術の専門教育を開始。", en: "Began specialized education in information technology, including AI and data analysis." }
    },
    { 
        year: "2025/07", 
        type: 'qual',
        title: { ja: "漢字能力技能検定2級 合格", en: "Kanji Proficiency Test Grade 2 Passed" }, 
        description: { ja: "", en: "Demonstrated advanced Japanese language proficiency." }
    },
    { 
        year: "2025/09", 
        type: 'qual',
        title: { ja: "未踏MEET UP! in 大阪 運営協力(株式会社みらいスタジオ)", en: "MITOU MEET UP! in Osaka Organizer" }, 
        description: { ja: "AIやデータ分析を含む情報技術の専門教育を開始。", en: "Began specialized education in information technology, including AI and data analysis." }
    },
    { 
        year: "2025/10", 
        type: 'qual',
        title: { ja: "ITパスポート 合格", en: "IT Passport Exam Passed" }, 
        description: { ja: "情報技術に関する基礎的な知識を幅広く習得。", en: "Acquired broad basic knowledge of information technology." }
    },
    { 
        year: "2025 - 現在", 
        type: 'history', 
        title: { ja: "同校 同コース 在学中", en: "Currently studying at Osaka Metropolitan University College of Technology, Intelligent Informatics Course" }, 
        description: { ja: "Webアプリケーション開発とUI/UX設計を専門的に学び、チーム開発を経験中。", en: "Specializing in web application development and UI/UX design, currently experiencing team development." }
    }
];

const projects = [
    { 
        id: "p1", 
        title: { ja: "Hisayoshi", en: "Hisayoshi" }, 
        desc: { ja: "2I担任である室谷先生公認のOnly Up風室谷先生ゲーム、Hisayoshi。高専祭で展示しました。", en: "A game inspired by 'Only Up,' officially recognized by homeroom teacher Murotani-sensei, exhibited at the Kosen Festival." }, 
        tags: ["python"], 
        date: "2025/11/8,9", 
        url: "./projects/omuct-fes_2025",
        image: "./images/hisayoshi_thumbnail.png"
    }
];

const activitiesData = [
    { 
        id: "a1", 
        title: { ja: "COMING SOON...", en: "COMING SOON..." }, 
        desc: { ja: "", en: "" }, 
        tags: [""], 
        date: "B.C.2025/99/99", 
        url: "#",
        image: "./images/procon_thumbnail.png"
    }
];

const skillsData = [
    {
        id: 'cpp',
        name: 'C++',
        icon: './images/icons/cpp.png',
        proficiency: 70,
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
        id: 'html',
        name: 'HTML',
        icon: './images/icons/html.png',
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
        icon: './images/icons/js.png',
        proficiency: 65,
        details: {
            ja: {
                level: "中級 (DOM操作、非同期処理)",
                summary: "DOM操作による動的コンテンツの作成、非同期処理(Promise, async/await)の基本を理解。Vanilla JSでの開発経験が豊富。"
            },
            en: {
                level: "Intermediate (DOM manipulation, asynchronous processing)",
                summary: "Understands the basics of dynamic content creation via DOM manipulation and asynchronous processing. Extensive experience developing with Vanilla JS."
            }
        }
    }
];

const devTools = [
    {
        id: 'vsc',
        name: 'Visual Studio Code',
        icon: './images/icons/vsc.png',
        frequency_text: {
            ja: "週5回以上",
            en: "5+ times/week"
        },
        details: {
            ja: {
                summary: "授業・個人開発ともに最も使用しているエディタです。",
                frequency: "週5回以上使っています。"
            },
            en: {
                summary: "The editor I use most frequently for both class and personal development.",
                frequency: "Used more than 5 times a week."
            }
        }
    },
    {
        id: 'latex',
        name: 'LaTeX',
        icon: './images/icons/latex.png',
        frequency_text: {
            ja: "週1-2回",
            en: "1-2 times/week"
        },
        details: {
            ja: {
                summary: "レポートや論文形式の文書作成で使用します。",
                frequency: "週1〜2回のペースで利用しています。"
            },
            en: {
                summary: "Used for report and academic document production.",
                frequency: "Used 1–2 times per week."
            }
        }
    },
    {
        id: 'msoffice',
        name: 'MS Office',
        icon: './images/icons/ms.png',
        frequency_text: {
            ja: "必要なときに使用",
            en: "Used as needed"
        },
        details: {
            ja: {
                summary: "Word, Excel, PowerPoint をレポートや提出物で使用します。",
                frequency: "必要に応じて使用します。"
            },
            en: {
                summary: "Used for Word/Excel/PowerPoint in reports and assignments.",
                frequency: "Used when necessary."
            }
        }
    }
];

// SNSリンク・アイコン設定
const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/HR0620',
        iconDark: './images/icons/github_dark.png',
        iconLight: './images/icons/github_light.png'
    },
    {
        name: 'X',
        url: 'https://twitter.com/your_handle',
        iconDark: './images/icons/x_dark.png',
        iconLight: './images/icons/x_light.png'
    },
    {
        name: 'Facebook',
        url: 'https://facebook.com/your_profile',
        iconDark: './images/icons/facebook.png',
        iconLight: './images/icons/facebook.png'
    }
];

// アイコン設定（コピーボタンなど）
const iconConfig = {
    copy: {
        dark: './images/icons/copy_dark.png',
        light: './images/icons/copy_light.png'
    }
};

// Contact情報
const contactData = {
    schoolEmail: "rh24098s@st.omu.ac.jp",
    personalEmail: "h.renju0602@gmail.com"
};

let currentLang = 'ja'; 
let currentTheme = 'dark'; // テーマ管理

// 📌 多言語対応の描画ロジック
function applyLanguage(lang) {
    currentLang = lang;
    const data = i18n[lang];

    document.title = data.title;
    document.getElementById("pageTitle").textContent = data.title;
    document.getElementById("pageMeta").textContent = data.meta; 
    document.getElementById("headerName").textContent = data.header_name;
    document.getElementById("headerTitle").textContent = data.header_title;
    
    // About Me
    document.getElementById("aboutTitle").textContent = data.about_title;
    document.getElementById("aboutMeta").textContent = data.about_meta;
    document.getElementById("aboutContent").textContent = data.about_content;
    
    // Timeline
    document.getElementById("timelineTitle").textContent = data.timeline_title;
    document.getElementById("timelineMeta").textContent = data.timeline_meta; 

    // Skills & DevTools
    document.getElementById("skillsTitle").textContent = data.skills_title;
    document.getElementById("skillsMeta").textContent = data.skills_meta;
    document.getElementById("devToolsTitle").textContent = data.devtools_title;
    document.getElementById("devToolsMeta").textContent = data.devtools_meta;
    
    // Activities
    document.getElementById("activitiesTitle").textContent = data.activities_title;
    document.getElementById("activitiesMeta").textContent = data.activities_meta;
    
    // Contact
    document.getElementById("contactTitle").textContent = data.contact_title;
    document.getElementById("contactMeta").textContent = data.contact_meta;
    document.getElementById("schoolEmailLabel").textContent = data.school_email_label;
    document.getElementById("personalEmailLabel").textContent = data.personal_email_label;
    
    // Shortcuts
    document.getElementById("scrollToAbout").textContent = data.shortcut_about;
    document.getElementById("scrollToIntro").textContent = data.shortcut_intro;
    document.getElementById("scrollToProjects").textContent = data.shortcut_projects;
    document.getElementById("scrollToSkills").textContent = data.shortcut_skills;
    document.getElementById("scrollToActivities").textContent = data.shortcut_activities;
    document.getElementById("scrollToContact").textContent = data.shortcut_contact;
    
    // Modal
    document.getElementById("modalCloseBtn").textContent = data.modal_close;
    document.getElementById("modalProficiencyLevel").textContent = data.proficiency_level;
    document.getElementById("modalExperienceSummary").textContent = data.experience_summary;

    renderProjects();
    renderTimeline();
    renderActivities();
    renderSkills();
    renderDevTools();

    document.getElementById('langToggle').textContent = lang === 'ja' ? 'English' : '日本語';
    document.getElementById('langToggle').setAttribute('aria-label', lang === 'ja' ? 'Switch to English' : '日本語に切り替える');
}

// 📌 テーマ切り替え
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    
    // アイコンを更新
    updateThemeIcons();
}

// 📌 タイムラインをレンダリングする関数
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

// 📌 プロジェクトをレンダリングする関数
function renderProjects(){
    const container = document.getElementById("projectsContainer");
    const tpl = container.parentNode.querySelector("#project-template");
    container.innerHTML = "";
    
    const linkText = i18n[currentLang].link_detail;

    projects.forEach(p => {
        const clone = tpl.content.cloneNode(true);
        
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

        container.appendChild(clone);
    });
}

// 📌 Activitiesをレンダリングする関数（スキルカード風）
function renderActivities(){
    const container = document.getElementById("activitiesContainer");
    container.innerHTML = "";

    activitiesData.forEach(a => {
        const activityCard = document.createElement('div');
        activityCard.className = 'activity-card';
        activityCard.setAttribute('data-activity-id', a.id);
        activityCard.addEventListener('click', () => showActivityModal(a.id));

        // サムネイル画像
        if (a.image) {
            const img = document.createElement('img');
            img.className = 'activity-icon';
            img.src = a.image;
            img.alt = a.title[currentLang];
            activityCard.appendChild(img);
        }

        // タイトル
        const title = document.createElement('h3');
        title.textContent = a.title[currentLang];
        activityCard.appendChild(title);

        container.appendChild(activityCard);
    });
}

// 📌 Activityモーダル表示ロジック
function showActivityModal(activityId) {
    const activity = activitiesData.find(a => a.id === activityId);
    if (!activity) return;

    const modal = document.getElementById('skillDetailModal');
    const lang = currentLang;

    // 画像
    if (activity.image) {
        document.getElementById('modalSkillIcon').src = activity.image;
        document.getElementById('modalSkillIcon').alt = activity.title[lang];
    }
    
    // タイトル
    document.getElementById('modalSkillName').textContent = activity.title[lang];

    // 熟練度バーを非表示
    document.getElementById('modalProficiencySection').style.display = 'none';

    // 内容を表示
    document.getElementById('modalExperienceContent').textContent = activity.desc[lang];
    document.getElementById('modalProficiencyLevelText').textContent = activity.date;
    
    modal.classList.add('visible');
    document.body.classList.add('modal-open'); 
}

// 📌 スキルをレンダリングする関数
function renderSkills() {
    const container = document.getElementById("skillsContainer");
    container.innerHTML = '';

    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.setAttribute('data-skill-id', skill.id);
        skillCard.addEventListener('click', () => showSkillModal(skill.id));

        const icon = document.createElement('img');
        icon.className = 'skill-icon';
        icon.src = skill.icon;
        icon.alt = skill.name + ' Logo';

        const name = document.createElement('h3');
        name.textContent = skill.name;

        skillCard.appendChild(icon);
        skillCard.appendChild(name);
        container.appendChild(skillCard);
    });
}

// 📌 モーダル表示ロジック
function showSkillModal(skillId) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;

    const modal = document.getElementById('skillDetailModal');
    const lang = currentLang;

    document.getElementById('modalSkillIcon').src = skill.icon;
    document.getElementById('modalSkillIcon').alt = skill.name + ' Logo';
    document.getElementById('modalSkillName').textContent = skill.name;

    document.getElementById('modalProficiencySection').style.display = 'block';
    
    const modalBar = document.getElementById('modalProficiencyBar');
    modalBar.style.width = skill.proficiency + '%';
    document.getElementById('modalProficiencyText').textContent = `${skill.proficiency}%`;

    document.getElementById('modalExperienceContent').textContent = skill.details[lang].summary;
    document.getElementById('modalProficiencyLevelText').textContent = skill.details[lang].level;
    
    modal.classList.add('visible');
    document.body.classList.add('modal-open'); 
}

function hideSkillModal() {
    document.getElementById('skillDetailModal').classList.remove('visible');
    document.body.classList.remove('modal-open');
}

// 📌 devToolsをレンダリングする関数
function renderDevTools() {
    const container = document.getElementById("devToolsContainer");
    container.innerHTML = '';

    devTools.forEach(tool => {
        const toolCard = document.createElement('div');
        toolCard.className = 'tool-card';
        toolCard.setAttribute('data-tool-id', tool.id);
        toolCard.addEventListener('click', () => showToolModal(tool.id));

        const icon = document.createElement('img');
        icon.className = 'tool-icon';
        icon.src = tool.icon;
        icon.alt = tool.name + ' Logo';

        const name = document.createElement('h3');
        name.textContent = tool.name;

        toolCard.appendChild(icon);
        toolCard.appendChild(name);
        container.appendChild(toolCard);
    });
}

// 📌 devToolsモーダル表示ロジック
function showToolModal(toolId) {
    const tool = devTools.find(t => t.id === toolId);
    if (!tool) return;

    const modal = document.getElementById('skillDetailModal');
    const lang = currentLang;

    document.getElementById('modalSkillIcon').src = tool.icon;
    document.getElementById('modalSkillIcon').alt = tool.name + ' Logo';
    document.getElementById('modalSkillName').textContent = tool.name;

    document.getElementById('modalProficiencySection').style.display = 'none';

    document.getElementById('modalExperienceContent').textContent = tool.details[lang].summary;
    document.getElementById('modalProficiencyLevelText').textContent = tool.details[lang].frequency;
    
    modal.classList.add('visible');
    document.body.classList.add('modal-open'); 
}

// 📌 スクロールアニメーション
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

// 📌 Contactセクションの初期化
function initContact() {
    document.getElementById('schoolEmail').textContent = contactData.schoolEmail;
    document.getElementById('personalEmail').textContent = contactData.personalEmail;
    
    // SNSリンクをレンダリング
    renderSocialLinks();
    
    // テーマに応じたアイコンを設定
    updateThemeIcons();
}

// 📌 SNSリンクをレンダリング
function renderSocialLinks() {
    const container = document.querySelector('.social-links');
    container.innerHTML = '';
    
    socialLinks.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.target = '_blank';
        anchor.rel = 'noopener';
        anchor.className = 'social-icon';
        anchor.setAttribute('aria-label', link.name);
        anchor.setAttribute('data-social', link.name.toLowerCase());
        
        const img = document.createElement('img');
        img.className = 'social-logo';
        img.alt = link.name;
        img.src = currentTheme === 'dark' ? link.iconDark : link.iconLight;
        
        anchor.appendChild(img);
        container.appendChild(anchor);
    });
}

// 📌 テーマに応じてアイコンを更新
function updateThemeIcons() {
    // SNSアイコンを更新
    socialLinks.forEach(link => {
        const anchor = document.querySelector(`[data-social="${link.name.toLowerCase()}"]`);
        if (anchor) {
            const img = anchor.querySelector('img');
            img.src = currentTheme === 'dark' ? link.iconDark : link.iconLight;
        }
    });
    
    // コピーボタンのアイコンを更新
    document.querySelectorAll('.copy-icon').forEach(icon => {
        icon.src = currentTheme === 'dark' ? iconConfig.copy.dark : iconConfig.copy.light;
    });
}

// 📌 コピーボタンの機能
function setupCopyButtons() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const emailType = btn.getAttribute('data-email');
            const email = emailType === 'school' ? contactData.schoolEmail : contactData.personalEmail;
            
            navigator.clipboard.writeText(email).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<span style="color: var(--card);">✓</span>';
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });
}

// 📌 初期化
// 保存されたテーマを読み込む
const savedTheme = localStorage.getItem('theme') || 'dark';
currentTheme = savedTheme;
document.body.setAttribute('data-theme', currentTheme);

applyLanguage(currentLang); 
initContact();
setupCopyButtons();

// テーマ切り替えボタン
document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// ハンバーガーメニューの制御
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuOverlay = document.getElementById('menuOverlay');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    menuOverlay.classList.toggle('open');
});

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        menuOverlay.classList.remove('open');
    });
});

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        hamburgerBtn.classList.remove('active');
        menuOverlay.classList.remove('open');
    }
});

// ショートカットボタン
document.getElementById('scrollToAbout').addEventListener('click', () => {
    document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToIntro').addEventListener('click', () => {
    document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToProjects').addEventListener('click', () => {
    document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToSkills').addEventListener('click', () => {
    document.getElementById('skills-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToActivities').addEventListener('click', () => {
    document.getElementById('activities-section').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToContact').addEventListener('click', () => {
    document.getElementById('contact-section').scrollIntoView({ behavior: 'smooth' });
});

// 言語切り替え
document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    applyLanguage(newLang);
});

// モーダル
document.getElementById('modalCloseBtn').addEventListener('click', hideSkillModal);
document.getElementById('skillDetailModal').addEventListener('click', (e) => {
    if (e.target.id === 'skillDetailModal') {
        hideSkillModal();
    }
});