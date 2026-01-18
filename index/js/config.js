// config.js - データ設定ファイル
// ============================================
// iconType の種類:
//   - 'devicon'     : Deviconのクラス名を指定（例: 'devicon-python-plain'）
//   - 'fontawesome' : Font Awesomeのクラス名を指定（例: 'fa-solid fa-question'）
//   - 'original'    : 画像パスを指定（例: './images/icon.png'）

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
        year: "2025/03", 
        type: 'qual',
        title: { 
            ja: "KOSENJIN SUMMIT 2025 ボランティア", 
            en: "KOSENJIN SUMMIT 2025 Volunteer" 
        }, 
        description: { 
            ja: "2025年度大阪で開かれた高専人会の運営スタッフにボランティアとして参加。高専人との交流を深める。", 
            en: "Participated as a volunteer staff member at the Kosen community event held in Osaka, deepening exchanges with Kosen people." 
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
            en: "" 
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
            en: "Joined a student-teacher volunteer group aiming to deepen understanding through experimental classes for children outside school." 
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
            en: "Participated as guidance and reception staff, interacting with developers selected for the MITOU program." 
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

// 資格データ
const certificationsData = [
    {
        id: "cert1",
        name: { 
            ja: "実用英語技能検定準2級", 
            en: "Eiken Grade Pre-2" 
        },
        organization: { 
            ja: "公益財団法人 日本英語検定協会", 
            en: "The Society for Testing English Proficiency (STEP)" 
        },
        date: "2024/11"
    },
    {
        id: "cert2",
        name: { 
            ja: "防災士", 
            en: "Disaster Preparedness Advisor" 
        },
        organization: { 
            ja: "特定非営利活動法人 日本防災士機構", 
            en: "Japan Disaster Preparedness Advisor Organization" 
        },
        date: "2024/12"
    },
    {
        id: "cert3",
        name: { 
            ja: "漢字能力検定2級", 
            en: "Kanji Proficiency Test Grade 2" 
        },
        organization: { 
            ja: "公益財団法人 日本漢字能力検定協会", 
            en: "The Japan Kanji Aptitude Testing Foundation" 
        },
        date: "2025/07"
    },
    {
        id: "cert4",
        name: { 
            ja: "ITパスポート", 
            en: "IT Passport Exam" 
        },
        organization: { 
            ja: "独立行政法人 情報処理推進機構(IPA)", 
            en: "Information-technology Promotion Agency (IPA)" 
        },
        date: "2025/10"
    },
    {
        id: "cert5",
        name: { 
            ja: "基本情報技術者試験", 
            en: "Fundamental Information Technology Engineer Examination" 
        },
        organization: { 
            ja: "独立行政法人 情報処理推進機構(IPA)", 
            en: "Information-technology Promotion Agency (IPA)" 
        },
        date: "2026/1"
    },
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
        tags: ["python","pygame"], 
        date: "2025/11/8,9", 
        url: "../projects/kosen-fes/2025/index.html",
        image: "images/hisayoshi_thumbnail.png"
    },
    { 
        id: "p2", 
        title: { ja: "プログラミング1", en: "Programming1" }, 
        desc: { 
            ja: "プログラミング1の授業で作成したプロジェクト。", 
            en: "A project created in Programming 1 class." 
        }, 
        tags: ["python","Numpy"],
        date: "2025/04-2026/03", 
        url: "../projects/class/programming-1/index.html",
        image: 'fa-solid fa-laptop-code'
    },
    { 
        id: "p3", 
        title: { ja: "ATMシミュレータ", en: "ATM Simulator" }, 
        desc: { 
            ja: "画像認識(Teachable Machine)を使用してATMの操作を模倣したアプリ", 
            en: "An ATM simulator app that uses image recognition (Teachable Machine)." 
        }, 
        tags: ["python","tkinter","teachable machine","open cv","Pillow","pyYAML","h5py","tensor flow"], 
        date: "2025/12/25,2026/01/18", 
        url: "https://github.com/HR0620/ATM-simulator.git",
        image: "bi bi-cash-coin"
    },
];

// ===== アクティビティデータ =====
// iconType: 'original' | 'fontawesome' | 'devicon'
const activitiesData = [
    { 
        id: "a1", 
        title: { ja: "COMING SOON...", en: "COMING SOON..." }, 
        iconType: 'fontawesome',
        icon: 'fa-solid fa-question',
        desc: { ja: "", en: "" }, 
        tags: [""], 
        date: "B.C.20xx/xx/xx", 
        url: "#",
        image: null  // fontawesomeの場合はnullでOK
    }
];

// ===== スキルデータ =====
// iconType: 'devicon' | 'fontawesome' | 'original'
const skillsData = [
    {
        id: 'python',
        name: 'Python',
        iconType: 'devicon',
        icon: 'devicon-python-plain',
        proficiency: 35,
        details: {
            ja: {
                level: "中級 (Numpy, Pandas, Matplotlib, pygame等のライブラリ使用経験あり)",
                summary: "データ分析や機械学習の基礎を学習。個人プロジェクトでの使用経験あり。高専祭でpygameを使用。"
            },
            en: {
                level: "Intermediate (Experience with libraries like Numpy, Pandas, Matplotlib, pygame)",
                summary: "Studied basics of data analysis and machine learning. Experience with personal projects. Used pygame at Kosen Festival."
            }
        }
    },
    {
        id: 'html',
        name: 'HTML/CSS',
        iconType: 'devicon',
        icon: 'devicon-html5-plain',
        proficiency: 15,
        details: {
            ja: {
                level: "初級",
                summary: "基本的なWebページの構造とスタイリングを学習中。"
            },
            en: {
                level: "Beginner",
                summary: "Learning basic web page structure and styling."
            }
        }
    },
    {
        id: 'javascript',
        name: 'JavaScript',
        iconType: 'devicon',
        icon: 'devicon-javascript-plain',
        proficiency: 10,
        details: {
            ja: {
                level: "初級",
                summary: "基本的な文法と簡単な動的コンテンツの作成を学習中。"
            },
            en: {
                level: "Beginner",
                summary: "Learning basic syntax and simple dynamic content creation."
            }
        }
    }
    // 画像アイコンを使う場合の例:
    // {
    //     id: 'custom',
    //     name: 'カスタムスキル',
    //     iconType: 'original',
    //     icon: './images/custom_icon.png',
    //     proficiency: 50,
    //     details: { ... }
    // }
];

// ===== 開発ツールデータ =====
// iconType: 'devicon' | 'fontawesome' | 'original'
const devTools = [
    {
        id: 'vsc',
        name: 'Visual Studio Code',
        iconType: 'devicon',
        icon: 'devicon-vscode-plain',
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
        iconType: 'devicon',
        icon: 'devicon-latex-original',
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
        iconType: 'fontawesome',
        icon: 'fab fa-microsoft',
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