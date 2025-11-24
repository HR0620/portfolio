// config.js - Programming 1 課題データ設定
// ============================================
// 拡張性を考慮した設計：新しい課題を追加する際は、このファイルにデータを追加するだけでOK

/**
 * 課題データの構造
 * @typedef {Object} Assignment
 * @property {string} id - 課題ID（一意）
 * @property {number} number - 課題番号
 * @property {Object} title - タイトル（多言語対応）
 * @property {string} title.ja - 日本語タイトル
 * @property {string} title.en - 英語タイトル
 * @property {Object} description - 説明文（多言語対応）
 * @property {string} description.ja - 日本語説明
 * @property {string} description.en - 英語説明
 * @property {string[]} tags - タグ（使用技術など）
 * @property {string} date - 作成日（YYYY/MM/DD形式）
 * @property {string} colabLink - Google Colabへのリンク
 * @property {Object[]} images - スクリーンショット/GIF
 * @property {string} images[].src - 画像パス
 * @property {Object} images[].caption - 画像の説明（多言語対応）
 * @property {string} images[].caption.ja - 日本語キャプション
 * @property {string} images[].caption.en - 英語キャプション
 * @property {string} codeFilePath - Pythonコードファイルのパス
 * @property {Object[]} sections - 追加セクション（技術、工夫、感想など）
 * @property {string} sections[].icon - Font Awesomeアイコンクラス
 * @property {Object} sections[].title - セクションタイトル（多言語対応）
 * @property {Object} sections[].content - セクション内容（多言語対応）
 */

const assignmentsData = [
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
            },
            {
                src: 'assignment/01/photos/playing.gif',
                caption: {
                    ja: '実行結果のアニメーション',
                    en: 'Animation of Execution Result'
                }
            }
        ],
        codeFilePath: 'assignment/01/assignment-1.py',
        sections: [
            {
                icon: 'fa-cogs', // Font Awesomeアイコン
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'Python 3.x、Numpy、Matplotlibを使用しました。配列操作とブロードキャストを中心に学習しました。',
                    en: 'Used Python 3.x, Numpy, and Matplotlib. Focused on array operations and broadcasting.'
                }
            },
            {
                icon: 'fa-exclamation-triangle',
                title: {
                    ja: '苦労した点',
                    en: 'Challenges'
                },
                content: {
                    ja: '多次元配列のインデックス操作の理解に時間がかかりました。特にスライシングの範囲指定で混乱することが多かったです。',
                    en: 'Understanding multi-dimensional array indexing took time. I was often confused by slice range specifications.'
                }
            },
            {
                icon: 'fa-lightbulb',
                title: {
                    ja: '工夫した点',
                    en: 'Innovations'
                },
                content: {
                    ja: 'ループを使わずにベクトル化により処理速度を大幅に向上させました。可読性を保つためにコメントを充実させました。',
                    en: 'Significantly improved processing speed through vectorization without loops. Enhanced readability with comprehensive comments.'
                }
            },
            {
                icon: 'fa-heart',
                title: {
                    ja: '感想',
                    en: 'Impressions'
                },
                content: {
                    ja: 'Numpyの強力さを実感し、データ処理の基礎を学べました。今後の機械学習やデータ分析に活かせる知識が得られました。',
                    en: 'Realized the power of Numpy and learned data processing fundamentals. Gained knowledge applicable to future machine learning and data analysis.'
                }
            }
        ]
    },
    
    {
        id: 'assignment-2',
        number: 2,
        title: {
            ja: 'タートルグラフィックスで図形描画',
            en: 'Described Shapes with Turtle Graphics'
        },
        description: {
            ja: 'PandasのDataFrameを使ったデータの読み込み、加工、可視化の基礎を学びました。CSVファイルの処理、欠損値の処理、グループ化などの実践的な操作を習得しました。',
            en: 'Learned basics of data loading, processing, and visualization using Pandas DataFrames. Mastered practical operations such as CSV file processing, handling missing values, and grouping.'
        },
        tags: ['Python', 'Turtle Graphics', '可視化'],
        tagsEn: ['Python', 'Turtle Graphics','Visualization'],
        date: '2025/05/14',
        colabLink: 'https://colab.research.google.com/drive/1sTbTR-mPJlvHiVnhGi1Tlz3rsQTuUBWd?usp=sharing',
        images: [
            {
                src: 'assignment/02/photos/task-5_flash.gif',
                caption: {
                    ja: 'DataFrameの基本操作',
                    en: 'Basic DataFrame Operations'
                }
            },
            {
                src: 'assignment/02/photos/task-5_flash.gif',
                caption: {
                    ja: 'グループ化と集計',
                    en: 'Grouping and Aggregation'
                }
            },
            {
                src: 'assignment/02/photos/task-5_flash.gif',
                caption: {
                    ja: 'データの可視化',
                    en: 'Data Visualization'
                }
            }
        ],
        codeFilePath: 'assignment/02/assignment-2.py',
        sections: [
            {
                icon: 'fa-cogs',
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'Pandas、Numpy、Matplotlibを組み合わせて使用。CSVの読み込みと前処理に重点を置きました。',
                    en: 'Combined Pandas, Numpy, and Matplotlib. Focused on CSV loading and preprocessing.'
                }
            },
            {
                icon: 'fa-exclamation-triangle',
                title: {
                    ja: '苦労した点',
                    en: 'Challenges'
                },
                content: {
                    ja: '欠損値の適切な処理方法の選択に悩みました。また、groupbyの使い方を理解するのに時間がかかりました。',
                    en: 'Struggled with choosing appropriate methods for handling missing values. Understanding groupby usage took time.'
                }
            },
            {
                icon: 'fa-lightbulb',
                title: {
                    ja: '工夫した点',
                    en: 'Innovations'
                },
                content: {
                    ja: 'メソッドチェーンを活用して処理を簡潔に記述しました。可視化では適切なグラフタイプを選択するよう心がけました。',
                    en: 'Used method chaining for concise code. Carefully selected appropriate graph types for visualization.'
                }
            },
            {
                icon: 'fa-heart',
                title: {
                    ja: '感想',
                    en: 'Impressions'
                },
                content: {
                    ja: 'Pandasの便利さに驚きました。実際のデータ分析業務で即戦力となる知識を得られたと感じています。',
                    en: 'Amazed by the convenience of Pandas. Feel I gained immediately applicable knowledge for actual data analysis work.'
                }
            }
        ]
    },
 //課題3は省略
    {
        id: 'assignment-4',
        number: 4,
        title: {
            ja: '乱数の利用によるガチャ',
            en: 'Gacha Simulation Using Random Numbers'
        },
        description: {
            ja: 'Pythonを使った基本的な統計分析手法を学習しました。記述統計、確率分布、仮説検定、相関分析などの基礎を理解し、実データへの適用方法を習得しました。',
            en: 'Learned basic statistical analysis methods using Python. Understood fundamentals of descriptive statistics, probability distributions, hypothesis testing, and correlation analysis, and learned how to apply them to real data.'
        },
        tags: ['Python', 'Random', 'Numpy'],
        tagsEn: ['Python', 'Rondom', 'Numpy'],
        date: '2025/06/25',
        colabLink: 'https://colab.research.google.com/drive/1wM2VRFl7teGG2rD1T7hoP9QZoHlF4Qvj?usp=sharing',
        images: [
            {
                src: 'assignment/04/photos/task-5_flash.gif',
                caption: {
                    ja: '確率分布の可視化',
                    en: 'Probability Distribution Visualization'
                }
            },
            {
                src: 'assignment/04/photos/task-5_flash.gif',
                caption: {
                    ja: '相関分析の結果',
                    en: 'Correlation Analysis Results'
                }
            },
            {
                src: 'assignment/04/photos/task-5_flash.gif',
                caption: {
                    ja: '仮説検定のプロセス',
                    en: 'Hypothesis Testing Process'
                }
            }
        ],
        codeFilePath: 'assignment/04/assignment-4.py',
        sections: [
            {
                icon: 'fa-cogs',
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'Scipy、Numpy、Pandas、Matplotlibを組み合わせて統計解析を実施しました。',
                    en: 'Combined Scipy, Numpy, Pandas, and Matplotlib for statistical analysis.'
                }
            },
            {
                icon: 'fa-exclamation-triangle',
                title: {
                    ja: '苦労した点',
                    en: 'Challenges'
                },
                content: {
                    ja: '統計的仮説検定の概念理解に時間がかかりました。p値の解釈が特に難しかったです。',
                    en: 'Understanding statistical hypothesis testing concepts took time. P-value interpretation was particularly difficult.'
                }
            },
            {
                icon: 'fa-lightbulb',
                title: {
                    ja: '工夫した点',
                    en: 'Innovations'
                },
                content: {
                    ja: '実データを使った分析を通じて、理論と実践を結びつけるよう心がけました。',
                    en: 'Tried to connect theory and practice through analysis using real data.'
                }
            },
            {
                icon: 'fa-heart',
                title: {
                    ja: '感想',
                    en: 'Impressions'
                },
                content: {
                    ja: '統計学の重要性を再認識しました。データから有意義な情報を引き出す面白さを感じました。',
                    en: 'Re-recognized the importance of statistics. Found it fascinating to extract meaningful information from data.'
                }
            }
        ]
    },
    
    {
        id: 'assignment-5',
        number: 5,
        title: {
            ja: '機械学習入門（自由課題）',
            en: 'Introduction to Machine Learning (Free Assignment)'
        },
        description: {
            ja: '機械学習の基礎として、線形回帰、ロジスティック回帰、決定木などのアルゴリズムを学習しました。scikit-learnを使った実装とモデルの評価方法を習得し、実データに適用しました。',
            en: 'As an introduction to machine learning, learned algorithms such as linear regression, logistic regression, and decision trees. Mastered implementation using scikit-learn and model evaluation methods, and applied them to real data.'
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
                    en: 'Instant Memory Game Gameplay Video'
                }
            },
            {
                src: 'assignment/05/photos/flash.gif',
                caption: {
                    ja: '「フラッシュ暗算」プレイ動画',
                    en: 'flash Anzan Gameplay Video'
                }
            },
            {
                src: 'assignment/05/photos/keyboard.gif',
                caption: {
                    ja: 'キーボード早押し対決プレイ動画',
                    en: 'Keyboard Fast-Press Showdown Gameplay Video'
                }
            }
        ],
        codeFilePath: 'assignment/05/assignment-5.py',
        sections: [
            {
                icon: 'fa-cogs',
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'scikit-learn、Pandas、Numpy、Matplotlibを使用。交差検証やハイパーパラメータチューニングも実施しました。',
                    en: 'Used scikit-learn, Pandas, Numpy, and Matplotlib. Also performed cross-validation and hyperparameter tuning.'
                }
            },
            {
                icon: 'fa-exclamation-triangle',
                title: {
                    ja: '苦労した点',
                    en: 'Challenges'
                },
                content: {
                    ja: '過学習と汎化性能のバランスを取るのが難しかったです。特徴量エンジニアリングにも苦労しました。',
                    en: 'Balancing overfitting and generalization performance was difficult. Also struggled with feature engineering.'
                }
            },
            {
                icon: 'fa-lightbulb',
                title: {
                    ja: '工夫した点',
                    en: 'Innovations'
                },
                content: {
                    ja: 'モデルの評価指標を複数用いて、多角的に性能を評価しました。可視化により結果の解釈性を高めました。',
                    en: 'Used multiple evaluation metrics for comprehensive performance assessment. Enhanced result interpretability through visualization.'
                }
            },
            {
                icon: 'fa-heart',
                title: {
                    ja: '感想',
                    en: 'Impressions'
                },
                content: {
                    ja: '機械学習の奥深さを感じました。今後はディープラーニングにも挑戦したいと思います。',
                    en: 'Felt the depth of machine learning. Want to challenge deep learning in the future.'
                }
            }
        ]
    }
];

// 課題データをエクスポート
// （グローバル変数として使用可能）