[Read in English](README.en.md)
# HRのポートフォリオ

多言語対応（日本語/英語）のレスポンシブポートフォリオサイト。HTML/CSS/JavaScriptのみで構成されたシンプルで拡張性の高い個人プロジェクト紹介サイトです。

🌐 **Live Demo:** [https://hr0620.github.io/portfolio/index/index.html](https://hr0620.github.io/portfolio/index/index.html)

## 特徴

- 📱 **レスポンシブデザイン** - モバイル/タブレット/デスクトップに対応
- 🌍 **多言語対応** - 日本語と英語の言語切り替え機能
- 🎨 **ダーク/ライトテーマ** - 目にやさしいテーマ切り替え機能
- ✨ **テック系デザイン** - グロー効果やアニメーションを取り入れたモダンなUI
- ♿ **アクセシブル** - セマンティックHTMLとARIA属性に対応

## 構成

```
portfolio/
├── index/
│   ├── index.html          # メインHTMLファイル
│   ├── css/
│   │   ├── themes.css      # テーマカラー定義
│   │   ├── style.css       # 基本レイアウト
│   │   ├── ui.css          # Header, Menu, Modal
│   │   ├── timeline.css    # タイムライン
│   │   ├── cards.css       # カードコンポーネント
│   │   └── carousel.css    # 資格カルーセル
│   ├── js/
│   │   ├── main.js         # メインロジック
│   │   ├── config.js       # データ設定
│   │   ├── i18n.js         # 多言語対応
│   │   ├── theme.js        # テーマ制御
│   │   ├── timeline.js     # タイムライン機能
│   │   ├── certifications.js # 資格カルーセル
│   │   ├── projects.js     # プロジェクト表示
│   │   ├── skills.js       # スキル表示
│   │   └── ...             # その他モジュール
│   └── assets/             # 画像等のアセット
├── projects/               # プロジェクト詳細ページ
│   ├── class/              # 授業関連プロジェクト
│   └── kosen-fes/          # 高専祭プロジェクト
├── README.md               # このファイル
├── README.en.md            # 英語版README
└── License                 # MITライセンス
```

## 使用技術

- **HTML5** - セマンティックマークアップ
- **CSS3** - グリッドレイアウト、カスタムプロパティ、アニメーション
- **Vanilla JavaScript** - フレームワーク不要
- **Font Awesome** - アイコン
- **Prism.js** - コードシンタックスハイライト

## License

詳細は [License](./License) ファイルを参照してください。

## Author

**原田 連寿** (Renju Harada)