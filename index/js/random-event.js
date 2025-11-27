/* Undertaleのようにランダムでイベントが発生する機能を実装するためのJavaScriptコード
FUN値(1-100)をサイト訪問時に与えてそれに基づいてランダムイベントを発生させる
*/
//ダークモードボタンの三日月を満月に変える
//ハンバーガーメニューのボタンの見た目をハンバーガーに変える
//高専祭サムネをhisayoshi_thumbnail-color.pngに変える

// random-event.js - Undertale風FUN値イベントシステム
// ============================================
// ページ訪問時に1-100のFUN値を生成し、確率に基づいてイベントを発動

class FunEventSystem {
    constructor() {
        this.funValue = this.generateFunValue();
        this.events = this.defineEvents();
        this.triggeredEvents = [];
        
        console.log(`🎲 FUN Value: ${this.funValue}`);
    }

    // FUN値を生成（1-100のランダム値）
    generateFunValue() {
        // セッションストレージから取得（ページ内では同じ値を維持）
        const stored = sessionStorage.getItem('funValue');
        if (stored) {
            return parseInt(stored);
        }
        
        // 新規生成
        const funValue = Math.floor(Math.random() * 100) + 1;
        sessionStorage.setItem('funValue', funValue);
        return funValue;
    }

    // イベント定義（拡張しやすい構造）
    defineEvents() {
        return [
            // ===== レア度: 超レア (1%) =====
            {
                id: 'full-moon',
                name: 'ダークモードボタンが満月に',
                probability: 1,
                condition: () => document.documentElement.getAttribute('data-theme') === 'dark',
                execute: () => this.event_fullMoon(),
                description: 'ダークモードのとき、月アイコンが満月になる'
            },

            // ===== レア度: レア (5-10%) =====
            {
                id: 'hamburger-icon',
                name: 'ハンバーガーメニューが本物のハンバーガーに',
                probability: 10,
                execute: () => this.event_hamburgerIcon(),
                description: 'ハンバーガーメニューのアイコンが🍔に'
            },
            {
                id: 'avatar-variant',
                name: 'アバター画像が別バージョンに',
                probability: 5,
                execute: () => this.event_avatarVariant(),
                description: 'ヘッダーのアバター画像が変わる（要：別画像を用意）'
            },

            // ===== レア度: アンコモン (15-30%) =====
            {
                id: 'hisayoshi-color',
                name: '高専祭サムネイルがカラー版に',
                probability: 30,
                execute: () => this.event_hisayoshiColor(),
                description: '高専祭プロジェクトのサムネイルがカラーになる'
            },
            {
                id: 'footer-text',
                name: 'フッターテキストが変わる',
                probability: 15,
                execute: () => this.event_footerText(),
                description: 'All rights reserved → All wrongs reversed'
            },
            {
                id: 'timeline-rainbow',
                name: 'タイムラインが虹色に',
                probability: 8,
                execute: () => this.event_timelineRainbow(),
                description: 'タイムラインの線が虹色グラデーションになる'
            },

            // ===== レア度: コモン (20-25%) =====
            {
                id: 'lang-mystery',
                name: '謎の言語ボタン',
                probability: 25,
                execute: () => this.event_langMystery(),
                description: '言語切り替えに「？？？」が追加される'
            },
            {
                id: 'skill-shake',
                name: 'スキルアイコンが揺れる',
                probability: 20,
                execute: () => this.event_skillShake(),
                description: 'スキルカードのアイコンがわずかに揺れる'
            }
        ];
    }

    // イベント発動判定
    checkAndTriggerEvents() {
        this.events.forEach(event => {
            // 確率判定
            if (this.funValue <= event.probability) {
                // 条件チェック（あれば）
                if (event.condition && !event.condition()) {
                    return;
                }
                
                // イベント実行
                try {
                    event.execute();
                    this.triggeredEvents.push(event);
                    console.log(`✨ Event triggered: ${event.name}`);
                } catch (error) {
                    console.error(`❌ Event failed: ${event.id}`, error);
                }
            }
        });

        // トリガーされたイベントをコンソールに表示
        if (this.triggeredEvents.length > 0) {
            console.log('🎉 Triggered events:', this.triggeredEvents.map(e => e.name));
        } else {
            console.log('😶 No special events this time...');
        }
    }

    // ===== イベント実装 =====

    // 1. ダークモードボタンを満月に
    event_fullMoon() {
        const themeBtn = document.getElementById('themeToggle');
        if (!themeBtn) return;
        
        const icon = themeBtn.querySelector('i');
        if (icon && icon.className.includes('fa-moon')) {
            // 満月アイコンに変更
            icon.className = 'fas fa-circle';
            icon.style.color = '#ffd700';
            
            // ホバー時のアニメーション追加
            themeBtn.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
        }
    }

    // 2. ハンバーガーメニューのアイコンを🍔に
    event_hamburgerIcon() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        if (!hamburgerBtn) return;
        
        // 既存のspanを非表示
        const spans = hamburgerBtn.querySelectorAll('span');
        spans.forEach(span => span.style.display = 'none');
        
        // 絵文字を追加
        hamburgerBtn.innerHTML = '<span style="font-size: 24px;">🍔</span>';
        
        // クリック時の処理を再設定（ハンバーガーメニュー機能は維持）
        hamburgerBtn.addEventListener('click', () => {
            const menuOverlay = document.getElementById('menuOverlay');
            if (menuOverlay) {
                menuOverlay.classList.toggle('open');
                hamburgerBtn.classList.toggle('active');
            }
        });
    }

    // 3. アバター画像を別バージョンに（要：別画像）
    event_avatarVariant() {
        const avatarImg = document.querySelector('.avatar-img');
        if (!avatarImg) return;
        
        // 別バージョンの画像パス（要：実際の画像を用意）
        const variantPath = 'images/icons/hr-variant.png';
        
        // 画像が存在するか確認
        const img = new Image();
        img.onload = () => {
            avatarImg.src = variantPath;
            console.log('✨ Avatar variant loaded');
        };
        img.onerror = () => {
            console.log('⚠️ Avatar variant image not found, skipping event');
        };
        img.src = variantPath;
    }

    // 4. 高専祭サムネイルをカラー版に
    event_hisayoshiColor() {
        // プロジェクトデータを書き換え
        const hisayoshiProject = projects.find(p => p.id === 'p1');
        if (hisayoshiProject) {
            hisayoshiProject.image = 'images/hisayoshi_thumbnail-color.png';
            
            // プロジェクトを再レンダリング
            if (window.projectsInstance) {
                window.projectsInstance.render();
            }
        }
    }

    // 5. フッターテキストを変更
    event_footerText() {
        const footer = document.querySelector('footer');
        if (!footer) return;
        
        const messages = [
            '© 2024 Renju Harada. All wrongs reversed.',
            '© 2024 Renju Harada. Some rights reserved.',
            '© 2024 Renju Harada. No rights, only lefts.',
            '© ∞ Renju Harada. Time is an illusion.'
        ];
        
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        footer.textContent = randomMsg;
    }

    // 6. タイムラインを虹色に
    event_timelineRainbow() {
        const timeline = document.querySelector('.timeline-container');
        if (!timeline) return;
        
        // 虹色グラデーションのCSS追加
        const style = document.createElement('style');
        style.textContent = `
            .timeline-container::before {
                background: linear-gradient(
                    180deg,
                    #ff0000 0%,
                    #ff7f00 16.66%,
                    #ffff00 33.33%,
                    #00ff00 50%,
                    #0000ff 66.66%,
                    #4b0082 83.33%,
                    #9400d3 100%
                ) !important;
                width: 3px !important;
            }
            .timeline-item::before {
                border-color: #ff00ff !important;
                box-shadow: 0 0 10px rgba(255, 0, 255, 0.5) !important;
            }
        `;
        document.head.appendChild(style);
    }

    // 7. 謎の言語ボタン
    event_langMystery() {
        const langBtn = document.getElementById('langToggle');
        if (!langBtn) return;
        
        let mysteryMode = false;
        const originalToggle = window.toggleLanguage;
        
        // 3回クリックで謎言語モード
        let clickCount = 0;
        langBtn.addEventListener('click', () => {
            clickCount++;
            if (clickCount === 3 && !mysteryMode) {
                mysteryMode = true;
                langBtn.textContent = '？？？';
                
                // 次回クリックで元に戻す
                setTimeout(() => {
                    langBtn.addEventListener('click', () => {
                        if (mysteryMode) {
                            mysteryMode = false;
                            clickCount = 0;
                            originalToggle();
                        }
                    }, { once: true });
                }, 100);
            }
        });
    }

    // 8. スキルアイコンを揺らす
    event_skillShake() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes skill-shake {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(2deg); }
                75% { transform: rotate(-2deg); }
            }
            
            .skill-icon, .tool-icon {
                animation: skill-shake 3s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);
    }

    // ===== ユーティリティ =====

    // 発動したイベントのリストを取得
    getTriggeredEvents() {
        return this.triggeredEvents;
    }

    // デバッグ用：全イベント情報を表示
    logAllEvents() {
        console.table(this.events.map(e => ({
            ID: e.id,
            Name: e.name,
            Probability: `${e.probability}%`,
            Triggered: this.triggeredEvents.includes(e) ? '✓' : '✗'
        })));
    }
}

// ===== 初期化 =====
let funSystem;

document.addEventListener('DOMContentLoaded', () => {
    // FUN値システムを初期化
    funSystem = new FunEventSystem();
    
    // ページ読み込み完了後にイベント発動
    window.addEventListener('load', () => {
        funSystem.checkAndTriggerEvents();
    });
});

// グローバルに公開（デバッグ用）
window.getFunValue = () => funSystem ? funSystem.funValue : null;
window.showFunEvents = () => funSystem ? funSystem.logAllEvents() : null;

console.log('🎲 FUN Event System loaded! Type showFunEvents() to see all events.');










console.log("Oh...! You found me! So embarrassing.");