// config.js - データ設定ファイル

// タイムラインデータ
const timelineData = [
    { 
        year: "2024/04", 
        type: 'history',
        title: { 
            ja: "大阪公立大学工業高等専門学校 入学", 
            en: "Entered Osaka Metropolitan University College of Technology" 
        }, 
        description: { 
            ja: "プログラミング研究会に所属し、プログラミングの基礎を学ぶ。", 
            en: "Joined the Programming Research Club and began learning programming fundamentals." 
        }
    },
    { 
        year: "2024/11", 
        type: 'qual', 
        title: { 
            ja: "実用英語技能検定準2級 合格", 
            en: "Eiken Grade Pre-2 Passed" 
        }, 
        description: { ja: "", en: "" }
    },
    { 
        year: "2024/12", 
        type: 'qual',
        title: { 
            ja: "防災士 認定", 
            en: "Disaster Preparedness Advisor Certified" 
        }, 
        description: { 
            ja: "災害対策と地域防災に関する知識を習得。", 
            en: "Acquired knowledge on disaster countermeasures and local disaster prevention." 
        }
    },
    { 
        year: "2025/03", 
        type: 'qual',
        title: { 
            ja: "KOSENJIN SUMMIT 2025 ボランティア", 
            en: "KOSENJIN SUMMIT 2025 Volunteer" 
        }, 
        description: { 
            ja: "AIやデータ分析を含む情報技術の専門教育を開始。", 
            en: "Began specialized education in information technology, including AI and data analysis." 
        }
    },
    { 
        year: "2025/03", 
        type: 'history',
        title: { 
            ja: "学生有志団体PINTO OMUCT 所属", 
            en: "Joined PINTO OMUCT" 
        }, 
        description: { 
            ja: "AIやデータ分析を含む情報技術の専門教育を開始。", 
            en: "Began specialized education in information technology, including AI and data analysis." 
        }
    },
    { 
        year: "2025/04", 
        type: 'history',
        title: { 
            ja: "知能情報コース 進学", 
            en: "Advanced to Intelligent Informatics Course" 
        }, 
        description: { 
            ja: "AIやデータ分析を含む情報技術の専門教育を開始。", 
            en: "Began specialized education in information technology, including AI and data analysis." 
        }
    },
    { 
        year: "2025/05", 
        type: 'history',
        title: { 
            ja: "学生・教員有志団体FARAD 所属", 
            en: "Joined FARAD" 
        }, 
        description: { 
            ja: "AIやデータ分析を含む情報技術の専門教育を開始。", 
            en: "Began specialized education in information technology, including AI and data analysis." 
        }
    },
    { 
        year: "2025/07", 
        type: 'qual',
        title: { 
            ja: "漢字能力技能検定2級 合格", 
            en: "Kanji Proficiency Test Grade 2 Passed" 
        }, 
        description: { 
            ja: "", 
            en: "Demonstrated advanced Japanese language proficiency." 
        }
    },
    { 
        year: "2025/09", 
        type: 'qual',
        title: { 
            ja: "未踏MEET UP! in 大阪 運営協力(株式会社みらいスタジオ)", 
            en: "MITOU MEET UP! in Osaka Organizer" 
        }, 
        description: { 
            ja: "AIやデータ分析を含む情報技術の専門教育を開始。", 
            en: "Began specialized education in information technology, including AI and data analysis." 
        }
    },
    { 
        year: "2025/10", 
        type: 'qual',
        title: { 
            ja: "ITパスポート 合格", 
            en: "IT Passport Exam Passed" 
        }, 
        description: { 
            ja: "情報技術に関する基礎的な知識を幅広く習得。", 
            en: "Acquired broad basic knowledge of information technology." 
        }
    },
    { 
        year: "2025 - 現在", 
        type: 'history', 
        title: { 
            ja: "同校 同コース 在学中", 
            en: "Currently studying at Osaka Metropolitan University College of Technology, Intelligent Informatics Course" 
        }, 
        description: { 
            ja: "Webアプリケーション開発とUI/UX設計を専門的に学び、チーム開発を経験中。", 
            en: "Specializing in web application development and UI/UX design, currently experiencing team development." 
        }
    }
];

// プロジェクトデータ
const projects = [
    { 
        id: "p1", 
        title: { ja: "Hisayoshi", en: "Hisayoshi" }, 
        desc: { 
            ja: "2I担任である室谷先生公認のOnly Up風室谷先生ゲーム、Hisayoshi。高専祭で展示しました。", 
            en: "A game inspired by 'Only Up,' officially recognized by homeroom teacher Murotani-sensei, exhibited at the Kosen Festival." 
        }, 
        tags: ["python"], 
        date: "2025/11/8,9", 
        url: "./projects/omuct-fes_2025",
        image: "./images/hisayoshi_thumbnail.png"
    }
];

// アクティビティデータ
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

// スキルデータ
const skillsData = [
    {
        id: 'cpp',
        name: 'C++',
        icon: 'fa-code',
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
        name: 'HTML/CSS',
        icon: 'fa-html5',
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
        icon: 'fa-js',
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

// 開発ツールデータ
const devTools = [
    {
        id: 'vsc',
        name: 'Visual Studio Code',
        icon: 'fa-code',
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
        icon: 'fa-file-code',
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
        icon: 'fa-file-word',
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

// コンタクト情報
const contactData = {
    schoolEmail: "rh24098s@st.omu.ac.jp",
    personalEmail: "h.renju0602@gmail.com"
};