// config.js - Programming 1 課題データ設定（複数ファイル対応版）
// ============================================
// 【重要】codeFilePath（単一ファイル）と codeFiles（複数ファイル）の両方に対応

/**
 * 課題データの構造
 * 
 * === 単一ファイルの場合 ===
 * codeFilePath: 'assignment/01/assignment-1.py'
 * 
 * === 複数ファイルの場合 ===
 * codeFiles: [
 *   {
 *     name: 'main.py',           // ファイル名（タブに表示）
 *     path: 'assignment/01/main.py',  // ファイルパス
 *     language: 'python'         // 言語（python, html, css, javascript, java, cpp など）
 *   },
 *   {
 *     name: 'index.html',
 *     path: 'assignment/01/index.html',
 *     language: 'html'
 *   }
 * ]
 * 
 * 【注意】codeFiles が存在する場合、codeFilePath は無視されます
 */

const assignmentsData = [
    // ===== 課題1: 単一ファイルの例 =====
    {
        id: 'assignment-1',
        number: 1,
        title: {
            ja: 'pythonを用いた数学解答',
            en: 'Mathematical Problem Solving with Python'
        },
        description: {
            ja: '条件分岐・例外処理・配列等について学べました。',
            en: 'Learned about conditionals, exception handling, arrays, and more.'
        },
        tags: ['Python', '配列操作'],
        tagsEn: ['Python', 'Array Operations'],
        date: '2025/04/30',
        colabLink: 'https://colab.research.google.com/drive/1gKPFu2A_OY4BLfTLFnxHTvf2Ig-M-4xy?usp=sharing',
        images: [
            {
                src: 'assignment/01/photos/question.png',
                caption: {
                    ja: '問題文(設問5のみ抜粋)',
                    en: 'Problem Statement (Excerpt of Question 5)'
                }
            },
            {
                src: 'assignment/01/photos/answer.png',
                caption: {
                    ja: '出力例',
                    en: 'Example Output'
                }
            }
        ],
        // 単一ファイルの場合はこちらを使用
        codeFilePath: 'assignment/01/assignment-1.py',
        sections: [
            {
                icon: 'fa-cogs',
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'Python 3.x、Numpy、Matplotlibを使用しました。',
                    en: 'Used Python 3.x, Numpy, and Matplotlib.'
                }
            }
        ]
    },
    
    // ===== 課題2: タートルグラフィックス =====
    {
        id: 'assignment-2',
        number: 2,
        title: {
            ja: 'タートルグラフィックスで図形描画',
            en: 'Described Shapes with Turtle Graphics'
        },
        description: {
            ja: 'タートルグラフィックスを使って様々な図形を描画しました。',
            en: 'Drew various shapes using Turtle Graphics.'
        },
        tags: ['Python', 'Turtle Graphics', '可視化'],
        tagsEn: ['Python', 'Turtle Graphics','Visualization'],
        date: '2025/05/14',
        colabLink: 'https://colab.research.google.com/drive/1sTbTR-mPJlvHiVnhGi1Tlz3rsQTuUBWd?usp=sharing',
        images: [
            {
                src: 'assignment/02/photos/candy.png',
                caption: {
                    ja: '実行結果',
                    en: 'Execution Result'
                }
            }
        ],
        codeFilePath: 'assignment/02/assignment-2.py',
        sections: []
    },
    
    // ===== 課題4: ガチャシミュレーション =====
    {
        id: 'assignment-4',
        number: 4,
        title: {
            ja: '乱数の利用によるガチャ',
            en: 'Gacha Simulation Using Random Numbers'
        },
        description: {
            ja: 'Pythonの乱数機能を使ったガチャシミュレーション。',
            en: 'Gacha simulation using Python random functions.'
        },
        tags: ['Python', 'Random', 'Numpy'],
        tagsEn: ['Python', 'Random', 'Numpy'],
        date: '2025/06/25',
        colabLink: 'https://colab.research.google.com/drive/1wM2VRFl7teGG2rD1T7hoP9QZoHlF4Qvj?usp=sharing',
        images: [
            {
                src: 'assignment/04/photos/result.png',
                caption: {
                    ja: '実行結果',
                    en: 'Execution Result'
                }
            },
            {
                src: 'assignment/04/photos/demo_gacha.gif',
                caption: {
                    ja: '「ガチャ」プレイ動画',
                    en: '"Gacha" Gameplay Video'
                }
            },
            {
                src: 'assignment/04/photos/demo_toruneko.gif',
                caption: {
                    ja: 'ガチャ...?',
                    en: 'Gacha...?'
                }
            }
        ],
        codeFilePath: 'assignment/04/assignment-4.py',
        sections: []
    },
    
    // ===== 課題5: 機械学習入門（複数ファイルの例） =====
    {
        id: 'assignment-5',
        number: 5,
        title: {
            ja: '機械学習入門（自由課題）',
            en: 'Introduction to Machine Learning (Free Assignment)'
        },
        description: {
            ja: '機械学習の基礎として、線形回帰、ロジスティック回帰、決定木などのアルゴリズムを学習しました。',
            en: 'As an introduction to machine learning, learned algorithms such as linear regression, logistic regression, and decision trees.'
        },
        tags: ['Python', 'scikit-learn', '機械学習', 'データ分析'],
        tagsEn: ['Python', 'scikit-learn', 'Machine Learning', 'Data Analysis'],
        date: '2025/05/20',
        colabLink: '#',
        images: [
            {
                src: 'assignment/05/photos/memorize.gif',
                caption: {
                    ja: '「瞬間記憶ゲーム」プレイ動画',
                    en: '"Instant Memory Game" Gameplay Video'
                }
            },
            {
                src: 'assignment/05/photos/flash.gif',
                caption: {
                    ja: '「フラッシュ暗算」プレイ動画',
                    en: '"Flash Mental Arithmetic" Gameplay Video'
                }
            },
            {
                src: 'assignment/05/photos/keyboard.gif',
                caption: {
                    ja: '「キーボード早押し対決」プレイ動画',
                    en: '"Keyboard Fast-Press Showdown" Gameplay Video'
                }
            }
        ],
        // 複数ファイルの場合はこちらを使用
        // codeFilePath は無視されます
        codeFiles: [
            {
                name: 'main.py',
                path: 'assignment/05/main.py',
                language: 'python'
            },
            {
                name: 'game.py',
                path: 'assignment/05/game.py',
                language: 'python'
            },
            {
                name: 'index.html',
                path: 'assignment/05/index.html',
                language: 'html'
            },
            {
                name: 'style.css',
                path: 'assignment/05/style.css',
                language: 'css'
            },
            {
                name: 'script.js',
                path: 'assignment/05/script.js',
                language: 'javascript'
            }
        ],
        sections: [
            {
                icon: 'fa-cogs',
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'HTML, CSS, JavaScript, Pythonを使用。ゲームロジックとUIを分離しました。',
                    en: 'Used HTML, CSS, JavaScript, and Python. Separated game logic and UI.'
                }
            },
            {
                icon: 'fa-lightbulb',
                title: {
                    ja: '工夫した点',
                    en: 'Innovations'
                },
                content: {
                    ja: 'モジュール設計により、各ファイルの役割を明確に分けました。',
                    en: 'Clearly separated roles of each file through modular design.'
                }
            }
        ]
    }
];

// ===== 追加の課題例（複数ファイル対応） =====
// 将来的にオブジェクト指向プログラミングの課題を追加する場合は以下のような形式で追加できます：
/*
{
    id: 'assignment-6',
    number: 6,
    title: {
        ja: 'オブジェクト指向プログラミング',
        en: 'Object-Oriented Programming'
    },
    description: {
        ja: 'クラスと継承を用いたプログラム設計。',
        en: 'Program design using classes and inheritance.'
    },
    tags: ['Python', 'OOP', 'クラス設計'],
    tagsEn: ['Python', 'OOP', 'Class Design'],
    date: '2025/07/10',
    colabLink: '#',
    images: [],
    codeFiles: [
        {
            name: 'main.py',
            path: 'assignment/06/main.py',
            language: 'python'
        },
        {
            name: 'models.py',
            path: 'assignment/06/models.py',
            language: 'python'
        },
        {
            name: 'utils.py',
            path: 'assignment/06/utils.py',
            language: 'python'
        },
        {
            name: 'test.py',
            path: 'assignment/06/test.py',
            language: 'python'
        }
    ],
    sections: []
}
*/