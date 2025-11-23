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
            ja: 'Numpyの基礎演習',
            en: 'Numpy Basics Exercise'
        },
        description: {
            ja: 'Numpyの基本的な配列操作、スライス、ブロードキャストなどの機能を学習し、実践的な演習を通じて理解を深めました。行列演算や統計計算の基礎を習得しました。',
            en: 'Learned basic Numpy array operations, slicing, broadcasting, and other features through practical exercises. Mastered fundamentals of matrix operations and statistical calculations.'
        },
        tags: ['Python', 'Numpy', '配列操作', 'データ分析'],
        tagsEn: ['Python', 'Numpy', 'Array Operations', 'Data Analysis'],
        date: '2025/04/15',
        colabLink: '#',
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
        codeFilePath: 'assignment/01/assignment-1.py',
        // 追加セクション（自由に編集可能）
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
            ja: 'Pandasによるデータ分析',
            en: 'Data Analysis with Pandas'
        },
        description: {
            ja: 'PandasのDataFrameを使ったデータの読み込み、加工、可視化の基礎を学びました。CSVファイルの処理、欠損値の処理、グループ化などの実践的な操作を習得しました。',
            en: 'Learned basics of data loading, processing, and visualization using Pandas DataFrames. Mastered practical operations such as CSV file processing, handling missing values, and grouping.'
        },
        tags: ['Python', 'Pandas', 'データ分析', '可視化'],
        tagsEn: ['Python', 'Pandas', 'Data Analysis', 'Visualization'],
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
        tagsEn: ['Python', 'Matplotlib', 'Visualization', 'Graphs'],
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
        codeFilePath: 'assignment/03/assignment-3.py',
        sections: [
            {
                icon: 'fa-cogs',
                title: {
                    ja: '使用技術',
                    en: 'Technologies Used'
                },
                content: {
                    ja: 'Matplotlib、Seaborn、Numpyを使用。複数のグラフタイプとスタイルのカスタマイズを学習しました。',
                    en: 'Used Matplotlib, Seaborn, and Numpy. Learned multiple graph types and style customization.'
                }
            },
            {
                icon: 'fa-exclamation-triangle',
                title: {
                    ja: '苦労した点',
                    en: 'Challenges'
                },
                content: {
                    ja: 'サブプロットのレイアウト調整が難しかったです。また、日本語フォントの設定に苦労しました。',
                    en: 'Subplot layout adjustment was difficult. Also struggled with Japanese font configuration.'
                }
            },
            {
                icon: 'fa-lightbulb',
                title: {
                    ja: '工夫した点',
                    en: 'Innovations'
                },
                content: {
                    ja: 'カラーマップを効果的に使い、視覚的に分かりやすいグラフを作成しました。凡例の配置にも配慮しました。',
                    en: 'Effectively used colormaps to create visually clear graphs. Paid attention to legend placement.'
                }
            },
            {
                icon: 'fa-heart',
                title: {
                    ja: '感想',
                    en: 'Impressions'
                },
                content: {
                    ja: 'データを視覚化することの重要性を実感しました。見やすいグラフ作りのセンスを磨きたいと思います。',
                    en: 'Realized the importance of data visualization. Want to refine my sense for creating clear graphs.'
                }
            }
        ]
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
        tagsEn: ['Python', 'Numpy', 'Statistics', 'Data Analysis'],
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