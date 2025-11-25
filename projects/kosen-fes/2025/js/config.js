// config.js - 高専祭2025 データ設定ファイル
// ============================================
// このファイルでは、ページに表示するデータを管理します。
// 新しいデータを追加する場合は、各配列に要素を追加してください。

// ===== プロジェクト情報（Hisayoshi） =====
const projectData = {
    // プロジェクト名
    name: "Hisayoshi",
    // サブタイトル
    subtitle: {
        ja: "室谷先生公認 Only Up風アクションゲーム",
        en: "Official Muroya-sensei Approved Only Up Style Action Game"
    },
    // 説明文
    description: {
        ja: "2I担任である室谷文祥先生をモデルにした、Only Up風の縦スクロールアクションゲームです。プレイヤーは室谷先生を操作し、様々な障害物を乗り越えながら上を目指します。高専祭2025にて展示し、多くの来場者に楽しんでいただきました。",
        en: "A vertical scrolling action game inspired by 'Only Up', featuring Muroya Fumiyoshi-sensei, the 2I homeroom teacher, as the main character. Players control Muroya-sensei and aim to reach the top while overcoming various obstacles. Exhibited at Kosen Festival 2025 and enjoyed by many visitors."
    },
    // デモGIFのパス（仮）
    demoMedia: "./images/demo-1.gif",
    // 開発期間
    duration: {
        ja: "約4ヶ月",
        en: "About 4 months"
    },
    // 使用技術
    technologies: ["Python", "pygame"],
    // GitHubリポジトリURL
    githubUrl: "https://github.com/HR0620/2025_2I_kosen-fes",
    // サムネイル画像パス
    thumbnail: "./images/hisayoshi.png"
};

// ===== チームメンバーデータ =====
const teamMembers = [
    {
        id: "higashi",
        name: "東 達仁",
        nameEn: "Tatsuhito Higashi",
        role: {
            ja: "企画・設計、コーディング、イラスト",
            en: "Planning, Design, Coding, Illustration"
        },
        github: "tatsukodx",
        // アバター画像パス。nullの場合はアイコンを表示
        avatar: null
    },
    {
        id: "harada",
        name: "原田 連寿",
        nameEn: "Renju Harada",
        role: {
            ja: "リファクタリング",
            en: "Refactoring"
        },
        github: "HR0620",
        avatar: null
    },
    {
        id: "ishida",
        name: "石田 和磨",
        nameEn: "Kazuma Ishida",
        role: {
            ja: "コーディング",
            en: "Coding"
        },
        github: "wakka810",
        avatar: null
    },
    {
        id: "suzuki",
        name: "鈴木 結愛",
        nameEn: "Yume Suzuki",
        role: {
            ja: "デザイン",
            en: "Desigin"
        },
        github: "r24056",
        avatar: null
    },
    {
        id: "okada",
        name: "岡田 貫太郎",
        nameEn: "Kantaro Okada",
        role: {
            ja: "監督",
            en: "Director"
        },
        github: null,
        avatar: null
    },
    {
        id: "kakitani",
        name: "柿谷 耕太郎",
        nameEn: "Kotaro Kakitani",
        role: {
            ja: "監督",
            en: "Director"
        },
        github: "KKotaro0840",
        avatar: null
    },
    {
        id: "katayama",
        name: "片山 航志郎",
        nameEn: "Koshiro Katayama",
        role: {
            ja: "監督",
            en: "Director"
        },
        github: null,
        avatar: null
    },
    {
        id: "kishimoto",
        name: "岸本 浬",
        nameEn: "Kairi Kishimoto",
        role: {
            ja: "監督",
            en: "Director"
        },
        github: "dddd145",
        avatar: null
    }
];

// ===== 協力者データ =====
const collaborators = [
    {
        name: {
            ja: "室谷 文祥 先生",
            en: "Mr. Muroya Hisayoshi"
        },
        contribution: {
            ja: "音声提供、モデル",
            en: "Voice, Model"
        }
    },
    {
        name: {
            ja: "平林 大介 先生",
            en: "Mr. Hirabayashi Daisuke"
        },
        contribution: {
            ja: "コンテンツ提供",
            en: "Content Provider"
        }
    }
];

// ===== タイムラインデータ =====
// position: "left" または "right" で表示位置を指定
const timelineData = [
    {
        id: "t1",
        date: "2025/07",
        title: {
            ja: "企画開始",
            en: "Project Planning Started"
        },
        description: {
            ja: "チームメンバーが集まり、高専祭に向けたゲーム制作の企画を開始。Only Up風のゲームを室谷先生をモデルに作ることを決定。",
            en: "Team members gathered and started planning game development for the Kosen Festival. Decided to create an Only Up style game featuring Muroya-sensei."
        },
        position: "left"
    },
    {
        id: "t2",
        date: "2025/08",
        title: {
            ja: "開発スタート",
            en: "Development Started"
        },
        description: {
            ja: "Pythonとpygameを使用した開発を開始。基本的なゲームシステムの実装に着手。",
            en: "Started development using Python and pygame. Began implementing the basic game system."
        },
        position: "right"
    },
    {
        id: "t3",
        date: "2025/09",
        title: {
            ja: "素材制作・デバッグ",
            en: "Asset Creation & Debugging"
        },
        description: {
            ja: "イラストや音声素材の制作を進行。室谷先生から音声を収録。バグの修正とゲームバランスの調整。",
            en: "Progressed with illustration and audio asset creation. Recorded voice from Muroya-sensei. Bug fixes and game balance adjustments."
        },
        position: "left"
    },
    {
        id: "t4",
        date: "2025/10",
        title: {
            ja: "最終調整",
            en: "Final Adjustments"
        },
        description: {
            ja: "リファクタリングによるコードの整理。最終テストとブラッシュアップを実施。",
            en: "Code organization through refactoring. Conducted final testing and polish."
        },
        position: "right"
    },
    {
        id: "t5",
        date: "2025/11/8-9",
        title: {
            ja: "高専祭当日",
            en: "Kosen Festival Day"
        },
        description: {
            ja: "高専祭にてHisayoshiを展示。多くの来場者にプレイしていただき、好評を得ました。",
            en: "Exhibited Hisayoshi at the Kosen Festival. Many visitors played the game and received positive feedback."
        },
        position: "left"
    }
];

// ===== ギャラリーデータ =====
const galleryData = [
    {
        id: "g1",
        src: "./images/gallery/photo1.jpg",
        thumbnail: "./images/gallery/photo1_thumb.jpg",
        caption: {
            ja: "Hisayoshiの展示ブース",
            en: "Hisayoshi Exhibition Booth"
        }
    },
    {
        id: "g2",
        src: "./images/gallery/photo2.jpg",
        thumbnail: "./images/gallery/photo2_thumb.jpg",
        caption: {
            ja: "来場者がゲームをプレイ中",
            en: "Visitors Playing the Game"
        }
    },
    {
        id: "g3",
        src: "./images/gallery/photo3.jpg",
        thumbnail: "./images/gallery/photo3_thumb.jpg",
        caption: {
            ja: "チームメンバー集合写真",
            en: "Team Members Group Photo"
        }
    },
    {
        id: "g4",
        src: "./images/gallery/photo4.jpg",
        thumbnail: "./images/gallery/photo4_thumb.jpg",
        caption: {
            ja: "ゲーム画面のクローズアップ",
            en: "Game Screen Close-up"
        }
    },
    {
        id: "g6",
        src: "./images/gallery/photo6.jpg",
        thumbnail: "./images/gallery/photo6_thumb.jpg",
        caption: {
            ja: "高専祭会場全景",
            en: "Kosen Festival Venue Overview"
        }
    }
];

// ===== 来場者の声データ =====
const testimonialData = [
    {
        id: "v1",
        content: {
            ja: "室谷先生のゲームがあると聞いて来ました。想像以上に完成度が高くて驚きました！",
            en: "I came because I heard there was a game about Muroya-sensei. I was surprised by how polished it was!"
        },
        author: {
            ja: "来場者 A さん",
            en: "Visitor A"
        }
    },
    {
        id: "v2",
        content: {
            ja: "操作が簡単で、小学生の弟も楽しめました。また遊びたいです。",
            en: "The controls were simple, and even my younger brother in elementary school enjoyed it. I want to play again."
        },
        author: {
            ja: "来場者 B さん",
            en: "Visitor B"
        }
    },
    {
        id: "v3",
        content: {
            ja: "Only Up風ということで挑戦しましたが、難しすぎず楽しめました。先生の声が面白かったです。",
            en: "I tried it because it's Only Up style, and it was challenging but enjoyable. The teacher's voice was funny."
        },
        author: {
            ja: "来場者 C さん",
            en: "Visitor C"
        }
    },
    {
        id: "v4",
        content: {
            ja: "学生が作ったとは思えないクオリティでした。来年も楽しみにしています！",
            en: "The quality was so good I couldn't believe students made it. Looking forward to next year!"
        },
        author: {
            ja: "来場者 D さん",
            en: "Visitor D"
        }
    }
];

// ===== 振り返り/学びデータ =====
const reflectionData = [
    {
        id: "r1",
        icon: "fa-lightbulb",
        title: {
            ja: "チーム開発の経験",
            en: "Team Development Experience"
        },
        content: {
            ja: "複数人での開発を通じて、Git/GitHubを使ったバージョン管理やコードレビューの重要性を学びました。",
            en: "Through multi-person development, I learned the importance of version control using Git/GitHub and code reviews."
        }
    },
    {
        id: "r2",
        icon: "fa-code",
        title: {
            ja: "リファクタリングの重要性",
            en: "Importance of Refactoring"
        },
        content: {
            ja: "コードを整理することで、バグの発見が容易になり、他のメンバーも理解しやすくなることを実感しました。",
            en: "I realized that organizing code makes it easier to find bugs and for other members to understand."
        }
    },
    {
        id: "r3",
        icon: "fa-users",
        title: {
            ja: "来場者との交流",
            en: "Interaction with Visitors"
        },
        content: {
            ja: "直接フィードバックをもらえる貴重な機会でした。ユーザー目線の大切さを再認識しました。",
            en: "It was a valuable opportunity to receive direct feedback. I re-recognized the importance of the user's perspective."
        }
    },
    {
        id: "r4",
        icon: "fa-clock",
        title: {
            ja: "スケジュール管理",
            en: "Schedule Management"
        },
        content: {
            ja: "4ヶ月という期間で完成させるために、計画的な進行が必要でした。締め切りを意識した開発を学びました。",
            en: "Planned progress was necessary to complete within the 4-month period. I learned deadline-conscious development."
        }
    }
];

// ===== FAQデータ =====
const faqData = [
    {
        id: "f1",
        question: {
            ja: "ゲームの操作方法は？",
            en: "How do I control the game?"
        },
        answer: {
            ja: "矢印キーまたはWASDキーで移動、スペースキーでジャンプです。タイミングよくジャンプして上を目指してください。",
            en: "Use arrow keys or WASD to move, and the space key to jump. Time your jumps well and aim for the top."
        }
    },
    {
        id: "f2",
        question: {
            ja: "ゲームをダウンロードできますか？",
            en: "Can I download the game?"
        },
        answer: {
            ja: "現在、一般公開はしておりません。今後、GitHubリポジトリでの公開を検討しています。",
            en: "Currently, it is not available for public download. We are considering releasing it on GitHub in the future."
        }
    },
    {
        id: "f3",
        question: {
            ja: "開発に使用した言語・ツールは？",
            en: "What languages and tools did you use?"
        },
        answer: {
            ja: "プログラミング言語はPythonを使用し、ゲームライブラリとしてpygameを採用しました。バージョン管理にはGitを使用しています。",
            en: "We used Python as the programming language and pygame as the game library. Git was used for version control."
        }
    },
    {
        id: "f4",
        question: {
            ja: "室谷先生の許可は得ていますか？",
            en: "Did you get permission from Muroya-sensei?"
        },
        answer: {
            ja: "はい、室谷先生公認のもと制作しています。音声の収録にもご協力いただきました。",
            en: "Yes, we created it with official approval from Muroya-sensei. He also cooperated with voice recording."
        }
    }
];

// ===== その他の活動データ（FARAD等） =====
const otherActivitiesData = [
    {
        id: "farad",
        title: {
            ja: "FARAD 実験教室",
            en: "FARAD Experiment Class"
        },
        shortDesc: {
            ja: "ブロックプログラミングでロボットアームを操作",
            en: "Operating robot arms with block programming"
        },
        icon: "fa-robot",
        // モーダル用の詳細説明
        fullDesc: {
            ja: "FARADは、学校で学んだことを学外の子どもたちへ説明する実験教室を行う学生・教員有志団体です。高専祭では、Scratchのようなブロックプログラミングを使ってロボットアームを操作するクレーンゲーム体験を提供しました。私は案内役兼接客として参加し、子どもたちにプログラミングの楽しさを伝える手伝いをしました。",
            en: "FARAD is a student-teacher volunteer group that conducts experimental classes to explain what students learn at school to children outside. At the Kosen Festival, we provided a crane game experience where visitors could operate robot arms using block programming like Scratch. I participated as a guide and receptionist, helping to convey the fun of programming to children."
        },
        role: {
            ja: "案内役・接客",
            en: "Guide & Reception"
        }
    }
];

// ===== 謝辞データ =====
const acknowledgmentsData = {
    message: {
        ja: "Hisayoshiの制作にあたり、多くの方々にご協力いただきました。室谷先生には音声収録とモデルとしてのご協力、平林先生にはコンテンツのご提供をいただきました。また、高専祭に来場し、ゲームをプレイしてくださった皆様、そしてチームメンバー全員に心より感謝申し上げます。",
        en: "Many people helped in the creation of Hisayoshi. Muroya-sensei cooperated with voice recording and as a model, and Hirabayashi-sensei provided content. We would also like to express our sincere gratitude to everyone who visited the Kosen Festival and played the game, as well as all team members."
    },
    tags: {
        ja: ["室谷文祥 先生", "平林大介 先生", "¬ハッカソンメンバー", "FARADメンバー", "高専祭来場者の皆様", "プログラミング研究会"],
        en: ["Muroya-sensei", "Hirabayashi-sensei", "¬Hackathon Members", "FARAD Members", "Kosen Festival Visitors", "Programming Research Club"]
    }
};

// ===== フッターリンクデータ =====
const footerLinks = {
    portfolio: "../../index/index.html",
    github: "https://github.com/HR0620"
};