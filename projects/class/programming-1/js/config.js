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
 * @property {string} images[].caption - 画像の説明（多言語対応）
 * @property {Object} images[].caption.ja - 日本語キャプション
 * @property {Object} images[].caption.en - 英語キャプション
 * @property {string} codeFilePath - Pythonコードファイルのパス
 */

const assignmentsData = [
    {
        id: 'assignment-1',
        number: 1,
        title: {
            ja: 'Numpyの基礎演習',
            en: 'Numpy Basics Exercise'
        },
        description: {
            ja: 'Numpyの基本的な配列操作、スライス、ブロードキャストなどの機能を学習し、実践的な演習を通じて理解を深めました。行列演算や統計計算の基礎を習得しました。',
            en: 'Learned basic Numpy array operations, slicing, broadcasting, and other features through practical exercises. Mastered fundamentals of matrix operations and statistical calculations.'
        },
        tags: ['Python', 'Numpy', '配列操作', 'データ分析'],
        date: '2025/04/15',
        colabLink: '#', // Google Colabリンク（実際のリンクに置き換え）
        images: [
            {
                src: 'images/assignment1/screenshot1.png',
                caption: {
                    ja: '配列の生成と基本操作',
                    en: 'Array Creation and Basic Operations'
                }
            },
            {
                src: 'images/assignment1/screenshot2.png',
                caption: {
                    ja: 'スライシングとインデックス',
                    en: 'Slicing and Indexing'
                }
            },
            {
                src: 'images/assignment1/result.gif',
                caption: {
                    ja: '実行結果のアニメーション',
                    en: 'Animation of Execution Results'
                }
            }
        ],
        // Pythonコードファイルのパス
        codeFilePath: 'code/assignment1.py'
    },
    
    {
        id: 'assignment-2',
        number: 2,
        title: {
            ja: 'Pandasによるデータ分析',
            en: 'Data Analysis with Pandas'
        },
        description: {
            ja: 'PandasのDataFrameを使ったデータの読み込み、加工、可視化の基礎を学びました。CSVファイルの処理、欠損値の処理、グループ化などの実践的な操作を習得しました。',
            en: 'Learned basics of data loading, processing, and visualization using Pandas DataFrames. Mastered practical operations such as CSV file processing, handling missing values, and grouping.'
        },
        tags: ['Python', 'Pandas', 'データ分析', '可視化'],
        date: '2025/04/22',
        colabLink: '#',
        images: [
            {
                src: 'images/assignment2/screenshot1.png',
                caption: {
                    ja: 'DataFrameの基本操作',
                    en: 'Basic DataFrame Operations'
                }
            },
            {
                src: 'images/assignment2/screenshot2.png',
                caption: {
                    ja: 'グループ化と集計',
                    en: 'Grouping and Aggregation'
                }
            },
            {
                src: 'images/assignment2/visualization.gif',
                caption: {
                    ja: 'データの可視化',
                    en: 'Data Visualization'
                }
            }
        ],
        codeFilePath: 'code/assignment2.py'
    },
    
    {
        id: 'assignment-3',
        number: 3,
        title: {
            ja: 'Matplotlibでデータ可視化',
            en: 'Data Visualization with Matplotlib'
        },
        description: {
            ja: 'Matplotlibを使った様々なグラフの作成方法を学習しました。折れ線グラフ、棒グラフ、散布図、ヒストグラムなどの基本的なグラフから、サブプロットやカスタマイズまで幅広く習得しました。',
            en: 'Learned to create various graphs using Matplotlib. Mastered a wide range of skills from basic graphs such as line graphs, bar charts, scatter plots, and histograms to subplots and customization.'
        },
        tags: ['Python', 'Matplotlib', '可視化', 'グラフ'],
        date: '2025/05/01',
        colabLink: '#',
        images: [
            {
                src: 'images/assignment3/linechart.png',
                caption: {
                    ja: '折れ線グラフの例',
                    en: 'Line Chart Example'
                }
            },
            {
                src: 'images/assignment3/barchart.png',
                caption: {
                    ja: '棒グラフの比較',
                    en: 'Bar Chart Comparison'
                }
            },
            {
                src: 'images/assignment3/scatter.gif',
                caption: {
                    ja: '散布図のアニメーション',
                    en: 'Scatter Plot Animation'
                }
            }
        ],
        codeFilePath: 'code/assignment3.py'
    },
    
    {
        id: 'assignment-4',
        number: 4,
        title: {
            ja: '統計分析の基礎',
            en: 'Fundamentals of Statistical Analysis'
        },
        description: {
            ja: 'Pythonを使った基本的な統計分析手法を学習しました。記述統計、確率分布、仮説検定、相関分析などの基礎を理解し、実データへの適用方法を習得しました。',
            en: 'Learned basic statistical analysis methods using Python. Understood fundamentals of descriptive statistics, probability distributions, hypothesis testing, and correlation analysis, and learned how to apply them to real data.'
        },
        tags: ['Python', 'Numpy', '統計', 'データ分析'],
        date: '2025/05/10',
        colabLink: '#',
        images: [
            {
                src: 'images/assignment4/distribution.png',
                caption: {
                    ja: '確率分布の可視化',
                    en: 'Probability Distribution Visualization'
                }
            },
            {
                src: 'images/assignment4/correlation.png',
                caption: {
                    ja: '相関分析の結果',
                    en: 'Correlation Analysis Results'
                }
            },
            {
                src: 'images/assignment4/hypothesis.gif',
                caption: {
                    ja: '仮説検定のプロセス',
                    en: 'Hypothesis Testing Process'
                }
            }
        ],
        codeFilePath: 'code/assignment4.py'
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
        date: '2025/05/20',
        colabLink: '#',
        images: [
            {
                src: 'images/assignment5/regression.png',
                caption: {
                    ja: '線形回帰モデル',
                    en: 'Linear Regression Model'
                }
            },
            {
                src: 'images/assignment5/classification.png',
                caption: {
                    ja: '分類問題の結果',
                    en: 'Classification Results'
                }
            },
            {
                src: 'images/assignment5/training.gif',
                caption: {
                    ja: 'モデルの学習過程',
                    en: 'Model Training Process'
                }
            }
        ],
        codeFilePath: 'code/assignment5.py'
    }
];

// 課題データをエクスポート
// （グローバル変数として使用可能）