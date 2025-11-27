// random-event.js - Undertale風FUN値イベントシステム（シンプル版）
// ============================================
// Math.random()を使ったシンプルな確率判定

class FunEventSystem {
    constructor() {
        this.triggeredEvents = [];
        console.log('🎲 FUN Event System initialized');
    }

    // イベント発動判定（シンプル版）
    checkAndTriggerEvents() {
        // 各イベントごとに0-100のランダム値を生成して判定
        
        // 1. 満月イベント（1%） - ダークモード時のみ
        const funValue1 = Math.random() * 100;
        if (funValue1 < 1 && document.documentElement.getAttribute('data-theme') === 'dark') {
            this.event_fullMoon();
            console.log('✨ Event triggered: Full Moon (1%)');
        }
        
        // 2. アバター別バージョン（5%）
        const funValue2 = Math.random() * 100;
        if (funValue2 < 5) {
            this.event_avatarVariant();
            console.log('✨ Event triggered: Avatar Variant (5%)');
        }
        
        // 3. タイムライン虹色（8%）
        const funValue3 = Math.random() * 100;
        if (funValue3 < 8) {
            this.event_timelineRainbow();
            console.log('✨ Event triggered: Rainbow Timeline (8%)');
        }
        
        // 4. ハンバーガー🍔（10%）
        const funValue4 = Math.random() * 100;
        if (funValue4 < 10) {
            this.event_hamburgerIcon();
            console.log('✨ Event triggered: Hamburger Icon (10%)');
        }
        
        // 5. フッターテキスト変更（15%）
        const funValue5 = Math.random() * 100;
        if (funValue5 < 15) {
            this.event_footerText();
            console.log('✨ Event triggered: Footer Text (15%)');
        }
        
        // 6. スキルアイコン揺れ（20%）
        const funValue6 = Math.random() * 100;
        if (funValue6 < 20) {
            this.event_skillShake();
            console.log('✨ Event triggered: Skill Shake (20%)');
        }
        
        // 7. 謎の言語ボタン（25%）
        const funValue7 = Math.random() * 100;
        if (funValue7 < 25) {
            this.event_langMystery();
            console.log('✨ Event triggered: Mystery Language (25%)');
        }
        
        // 8. 高専祭カラー版（30%）
        const funValue8 = Math.random() * 100;
        if (funValue8 < 30) {
            this.event_hisayoshiColor();
            console.log('✨ Event triggered: Hisayoshi Color (30%)');
        }
        
        console.log('🎉 FUN events check completed!');
    }

    // ===== イベント実装 =====

    // 1. ダークモードボタンを満月に
    event_fullMoon() {
        const themeBtn = document.getElementById('themeToggle');
        if (!themeBtn) return;
        
        const icon = themeBtn.querySelector('i');
        if (icon && icon.className.includes('fa-moon')) {
            icon.className = 'fas fa-circle';
            icon.style.color = '#ffd700';
            themeBtn.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
        }
    }

    // 2. ハンバーガーメニューのアイコンを🍔に
    event_hamburgerIcon() {
        const hamburgerBtn = document.getElementById('hamburgerBtn');
        if (!hamburgerBtn) return;
        
        const spans = hamburgerBtn.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.display = 'none';
            spans[1].innerHTML = '🍔';
            spans[1].style.transform = 'none';
            spans[1].style.fontSize = '24px';
            spans[1].style.lineHeight = '1';
            spans[2].style.display = 'none';
        }
    }

    // 3. アバター画像を別バージョンに
    event_avatarVariant() {
        const avatarImg = document.querySelector('.avatar-img');
        if (!avatarImg) return;
        
        const variantPath = 'images/icons/hr-variant.png';
        const img = new Image();
        img.onload = () => {
            avatarImg.src = variantPath;
        };
        img.onerror = () => {
            console.log('⚠️ Avatar variant not found');
        };
        img.src = variantPath;
    }

    // 4. 高専祭サムネイルをカラー版に
    event_hisayoshiColor() {
        const hisayoshiProject = projects.find(p => p.id === 'p1');
        if (hisayoshiProject) {
            hisayoshiProject.image = 'images/hisayoshi_thumbnail-color.png';
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
        const style = document.createElement('style');
        style.id = 'rainbow-timeline';
        style.textContent = `
            .timeline-container::before {
                background: linear-gradient(
                    180deg,
                    #ff0000 0%, #ff7f00 16.66%, #ffff00 33.33%,
                    #00ff00 50%, #0000ff 66.66%, #4b0082 83.33%, #9400d3 100%
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
        
        let clickCount = 0;
        let mysteryMode = false;
        
        const mysteryHandler = () => {
            clickCount++;
            if (clickCount === 3 && !mysteryMode) {
                mysteryMode = true;
                langBtn.textContent = '？？？';
                console.log('🌀 Mystery mode activated!');
            } else if (mysteryMode) {
                mysteryMode = false;
                clickCount = 0;
                langBtn.textContent = currentLang === 'ja' ? 'EN' : 'JP';
            }
        };
        
        langBtn.addEventListener('click', mysteryHandler);
    }

    // 8. スキルアイコンを揺らす
    event_skillShake() {
        const style = document.createElement('style');
        style.id = 'skill-shake';
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
}

// ===== 初期化 =====
let funSystem;

document.addEventListener('DOMContentLoaded', () => {
    funSystem = new FunEventSystem();
    
    // ページ読み込み完了後にイベント発動
    window.addEventListener('load', () => {
        funSystem.checkAndTriggerEvents();
    });
});

// デバッグ用：各イベントを手動テスト
window.testEvent = (eventName) => {
    if (!funSystem) return;
    
    const eventMap = {
        'moon': () => funSystem.event_fullMoon(),
        'hamburger': () => funSystem.event_hamburgerIcon(),
        'avatar': () => funSystem.event_avatarVariant(),
        'hisayoshi': () => funSystem.event_hisayoshiColor(),
        'footer': () => funSystem.event_footerText(),
        'rainbow': () => funSystem.event_timelineRainbow(),
        'mystery': () => funSystem.event_langMystery(),
        'shake': () => funSystem.event_skillShake()
    };
    
    if (eventMap[eventName]) {
        eventMap[eventName]();
        console.log(`🔧 Tested: ${eventName}`);
    } else {
        console.log('Available: moon, hamburger, avatar, hisayoshi, footer, rainbow, mystery, shake');
    }
};

console.log('🎲 FUN System ready! Test with: testEvent("hamburger")');