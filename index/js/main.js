// main.js - メイン初期化スクリプト

// アプリケーション全体を管理するクラス
class PortfolioApp {
    constructor() {
        this.instances = {};
    }

    // アプリケーションを初期化する
    init() {
        // 1. テーマを初期化
        initTheme();

        // 2. 各モジュールのインスタンスを作成
        this.instances.timeline = new Timeline();
        this.instances.projects = new Projects();
        this.instances.activities = new Activities();
        this.instances.skills = new Skills();
        this.instances.devTools = new DevTools();
        this.instances.modal = new Modal();
        this.instances.contact = new Contact();
        this.instances.hamburgerMenu = new HamburgerMenu();
        this.instances.scrollNav = new ScrollNavigation();

        // 3. グローバル変数として保存（他のモジュールから参照できるように）
        window.timelineInstance = this.instances.timeline;
        window.projectsInstance = this.instances.projects;
        window.activitiesInstance = this.instances.activities;
        window.skillsInstance = this.instances.skills;
        window.devToolsInstance = this.instances.devTools;
        window.modalInstance = this.instances.modal;

        // 4. 各モジュールを初期化
        this.instances.timeline.init();
        this.instances.projects.init();
        this.instances.activities.init();
        this.instances.skills.init();
        this.instances.devTools.init();

        // 5. 多言語対応を初期化（デフォルトは日本語）
        applyLanguage('ja');

        // 6. イベントリスナーを設定
        this.setupEventListeners();
    }

    // イベントリスナーを設定する
    setupEventListeners() {
        // テーマ切り替えボタン
        document.getElementById('themeToggle').addEventListener('click', () => {
            toggleTheme();
        });

        // 言語切り替えボタン
        document.getElementById('langToggle').addEventListener('click', () => {
            toggleLanguage();
        });
    }
}

// DOMの読み込みが完了したらアプリケーションを初期化する
document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
    
    console.log('Portfolio application initialized successfully! 🎉');
});