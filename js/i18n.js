// i18n.js - 多言語対応モジュール

// 多言語テキストデータ
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
        filter_all: "すべて",
        filter_history: "経歴",
        filter_qual: "資格",
        
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
        filter_all: "All",
        filter_history: "History",
        filter_qual: "Qualifications",
        
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

// 現在の言語設定（デフォルトは日本語）
let currentLang = 'ja';

// 言語を適用する関数
function applyLanguage(lang) {
    currentLang = lang;
    const data = i18n[lang];

    // タイトル・ヘッダー情報の更新
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
    
    // Timeline フィルターボタンのテキスト更新
    document.getElementById("filterAll").textContent = data.filter_all;
    document.getElementById("filterHistory").textContent = data.filter_history;
    document.getElementById("filterQual").textContent = data.filter_qual;

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

    // 各コンテンツを再描画
    renderProjects();
    renderTimeline();
    renderActivities();
    renderSkills();
    renderDevTools();

    // 言語ボタンの表示を更新（JP/ENに短縮）
    document.getElementById('langToggle').textContent = lang === 'ja' ? 'EN' : 'JP';
    document.getElementById('langToggle').setAttribute('aria-label', 
        lang === 'ja' ? 'Switch to English' : '日本語に切り替える');
}

// 言語切り替え関数
function toggleLanguage() {
    const newLang = currentLang === 'ja' ? 'en' : 'ja';
    applyLanguage(newLang);
}