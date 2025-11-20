// contact.js - コンタクト機能モジュール

// コンタクト管理クラス
class Contact {
    constructor() {
        this.init();
    }

    // コンタクト情報を初期化する
    init() {
        // メールアドレスを設定
        document.getElementById('schoolEmail').textContent = contactData.schoolEmail;
        document.getElementById('personalEmail').textContent = contactData.personalEmail;
        
        // コピーボタンのイベントリスナーを設定
        this.setupCopyButtons();
    }

    // コピーボタンの機能を設定する（サイズ固定でアニメーション改善）
    setupCopyButtons() {
        document.querySelectorAll('.copy-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const emailType = btn.getAttribute('data-email');
                const email = emailType === 'school' ? contactData.schoolEmail : contactData.personalEmail;
                
                // クリップボードにコピー
                navigator.clipboard.writeText(email).then(() => {
                    // アイコンをチェックマークに変更（サイズは統一）
                    btn.innerHTML = '<i class="fas fa-check"></i>';
                    
                    // 3秒後に元に戻す
                    setTimeout(() => {
                        btn.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 3000);
                }).catch(err => {
                    console.error('コピーに失敗しました:', err);
                    alert('コピーに失敗しました。手動でコピーしてください。');
                });
            });
        });
    }
}

// スクロール機能クラス
class ScrollNavigation {
    constructor() {
        this.init();
    }

    // スクロールナビゲーションを初期化する
    init() {
        // ショートカットボタン（スムーズスクロール）
        document.getElementById('scrollToAbout').addEventListener('click', () => {
            this.scrollToSection('about-section');
        });

        document.getElementById('scrollToIntro').addEventListener('click', () => {
            this.scrollToSection('introduction');
        });

        document.getElementById('scrollToProjects').addEventListener('click', () => {
            this.scrollToSection('projects-section');
        });

        document.getElementById('scrollToSkills').addEventListener('click', () => {
            this.scrollToSection('skills-section');
        });

        document.getElementById('scrollToCertifications').addEventListener('click', () => {
            this.scrollToSection('certifications-section');
        });

        document.getElementById('scrollToActivities').addEventListener('click', () => {
            this.scrollToSection('activities-section');
        });

        document.getElementById('scrollToContact').addEventListener('click', () => {
            this.scrollToSection('contact-section');
        });
    }

    // 指定されたセクションにスムーズスクロールする
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}