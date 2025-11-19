// theme.js - テーマ管理モジュール

// 現在のテーマ設定（デフォルトはダークモード）
let currentTheme = 'dark';

// テーマを初期化する関数（localStorageから読み込み）
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    currentTheme = savedTheme;
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

// テーマを切り替える関数
function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

// テーマアイコンを更新する関数
function updateThemeIcon() {
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');
    
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// ハンバーガーメニューを制御するクラス
class HamburgerMenu {
    constructor() {
        this.hamburgerBtn = document.getElementById('hamburgerBtn');
        this.menuOverlay = document.getElementById('menuOverlay');
        this.init();
    }

    init() {
        // ハンバーガーボタンクリック時の処理
        this.hamburgerBtn.addEventListener('click', () => {
            this.toggle();
        });

        // メニューアイテムをクリックしたらメニューを閉じる
        document.querySelectorAll('.menu-item').forEach(item => {
            item.addEventListener('click', () => {
                this.close();
            });
        });

        // オーバーレイをクリックしたらメニューを閉じる
        this.menuOverlay.addEventListener('click', (e) => {
            if (e.target === this.menuOverlay) {
                this.close();
            }
        });
    }

    toggle() {
        this.hamburgerBtn.classList.toggle('active');
        this.menuOverlay.classList.toggle('open');
    }

    close() {
        this.hamburgerBtn.classList.remove('active');
        this.menuOverlay.classList.remove('open');
    }
}