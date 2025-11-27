// random-event.js - Undertale風FUN値イベントシステム（修正版）
// ============================================
// 【修正内容】
// 1. 確率判定を正しく実装（各イベントが独立した確率で発動）
// 2. ハンバーガーメニューのイベント修正（機能を維持）

class FunEventSystem {
    constructor() {
        this.events = this.defineEvents();
        this.triggeredEvents = [];
        
        console.log('🎲 FUN Event System initialized');
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

    // 【修正】イベント発動判定（各イベントが独立した確率で判定）
    checkAndTriggerEvents() {
        this.events.forEach(event => {
            // 【修正】1-100のランダム値を生成し、確率以下なら発動
            const roll = Math.floor(Math.random() * 100) + 1;
            const shouldTrigger = roll <= event.probability;
            
            if (shouldTrigger) {
                // 条件チェック（あれば）
                if (event.condition && !event.condition()) {
                    console.log(`⏭️ Event "${event.name}" skipped (condition not met)`);
                    return;
                }
                
                // イベント実行
                try {
                    event.execute();
                    this.triggeredEvents.push(event);
                    console.log(`✨ Event triggered: ${event.name} (Roll: ${roll}/${event.probability})`);
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

    // 【修正】2. ハンバーガーメニューのアイコンを🍔に
    event_hamburgerIcon() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        if (!hamburgerBtn) return;
        
        // 既存のspanに絵文字を設定（spanは維持）
        const spans = hamburgerBtn.querySelectorAll('span');
        if (spans.length >= 3) {
            // 中央のspanだけにハンバーガー絵文字を表示
            spans[0].style.display = 'none';
            spans[1].innerHTML = '🍔';
            spans[1].style.transform = 'none'; // トランスフォームをリセット
            spans[1].style.fontSize = '24px';
            spans[1].style.lineHeight = '1';
            spans[2].style.display = 'none';
        }
        
        // ハンバーガーメニューの機能は既存のHamburgerMenuクラスが管理しているので
        // ここでは見た目だけを変更（機能は維持される）
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
        style.id = 'rainbow-timeline-style';
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
        let clickCount = 0;
        
        // オリジナルのクリックイベントを保存
        const originalText = langBtn.textContent;
        
        // カスタムクリックリスナー追加
        const mysteryClickHandler = () => {
            clickCount++;
            if (clickCount === 3 && !mysteryMode) {
                mysteryMode = true;
                langBtn.textContent = '？？？';
                
                console.log('🌀 Mystery language mode activated!');
            } else if (mysteryMode) {
                // 謎言語モード解除
                mysteryMode = false;
                clickCount = 0;
                langBtn.textContent = currentLang === 'ja' ? 'EN' : 'JP';
            }
        };
        
        langBtn.addEventListener('click', mysteryClickHandler);
    }

    // 8. スキルアイコンを揺らす
    event_skillShake() {
        const style = document.createElement('style');
        style.id = 'skill-shake-style';
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
            Triggered: this.triggeredEvents.some(t => t.id === e.id) ? '✓' : '✗'
        })));
    }

    // 【デバッグ用】特定のイベントを強制発動
    forceEvent(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (!event) {
            console.error(`Event "${eventId}" not found`);
            return;
        }
        
        try {
            event.execute();
            console.log(`🔧 Force triggered: ${event.name}`);
        } catch (error) {
            console.error(`❌ Force trigger failed:`, error);
        }
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
window.showFunEvents = () => funSystem ? funSystem.logAllEvents() : null;
window.forceEvent = (eventId) => funSystem ? funSystem.forceEvent(eventId) : null;

// デバッグコマンド一覧を表示
console.log(`
🎲 FUN Event System loaded!

Available debug commands:
- showFunEvents()           : Show all events and their status
- forceEvent('event-id')    : Force trigger a specific event
  
Available event IDs:
- 'full-moon'        (1%)  : Full moon icon
- 'avatar-variant'   (5%)  : Avatar variant
- 'timeline-rainbow' (8%)  : Rainbow timeline
- 'hamburger-icon'   (10%) : Hamburger emoji
- 'footer-text'      (15%) : Changed footer text
- 'skill-shake'      (20%) : Shaking skill icons
- 'lang-mystery'     (25%) : Mystery language button
- 'hisayoshi-color'  (30%) : Color thumbnail

Example: forceEvent('hamburger-icon')
`);