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
            ja: "2025年度大阪で開かれた高専人会の運営スタッフにボランティアとして参加。高専人との交流を深める。", 
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
            ja: "", 
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
            ja: "AIやデータ分析を含む情報技術について学んでいく。", 
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
            ja: "学校で学んだことを学外の子どもたちへ説明する実験教室を行って自分たちの理解と造詣を深めるとともに、子どもたちの理科・技術への興味関心を高めることを目標にする学生・教員有志団体に参加。", 
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
            en: "" 
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
            ja: "当日の案内・受付スタッフとして参加。未踏人材に選ばれた開発者の方々と交流もする。", 
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
            ja: "", 
            en: "" 
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
            ja: "", 
            en: "" 
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
            en: "A game inspired by 'Only Up,' officially recognized by homeroom teacher Muroya-sensei, exhibited at the Kosen Festival." 
        }, 
        tags: ["python"], 
        date: "2025/11/8,9", 
        url: "../projects/kosen-fes/2025/index.html",
        image: "images/hisayoshi_thumbnail.png"
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
        id: 'python',
        name: 'Python',
        icon: 'fa-python',
        proficiency: 35,
        details: {
            ja: {
                level: "中級 (Numpy, Pandas, Matplotlib, pygame等のライブラリ使用経験あり)",
                summary: "データ分析や機械学習の基礎を学習。個人プロジェクトでの使用経験あり。高専祭でpygameを使用。"
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
        proficiency: 15,
        details: {
            ja: {
                level: "初級",
                summary: ""
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
        proficiency: 10,
        details: {
            ja: {
                level: "初級",
                summary: ""
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
        id: 'tex',
        name: 'TeX',
        icon: 'fa-tex',
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
        icon: 'fa-microsoft',
        frequency_text: {
            ja: "必要なときに使用",
            en: "Used as needed"
        },
        details: {
            ja: {
                summary: "Word, Excel, PowerPointをレポートや提出物で使用します。",
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
    personalEmail: "hrenju.works@gmail.com"
};