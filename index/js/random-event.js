// random-event.js - Undertale風FUN値イベントシステム

class FunEventSystem {
    constructor() {
        this.triggeredEvents = [];
        console.log('🎲 FUN Event System initialized');
    }

    // イベント発動判定
    checkAndTriggerEvents() {
        const events = [
            // ===== 超レア (1-5%) =====
            { prob: 1, name: 'スプラッシュ画面', fn: () => this.event_splash() },
            { prob: 2, name: '満月', fn: () => this.event_fullMoon(), cond: () => document.documentElement.getAttribute('data-theme') === 'dark' },
            { prob: 3, name: '雪が降る', fn: () => this.event_snow() },
            { prob: 5, name: 'アバター別版', fn: () => this.event_avatarVariant() },
            
            // ===== レア (8-15%) =====
            { prob: 8, name: 'タイムライン虹色', fn: () => this.event_timelineRainbow() },
            { prob: 10, name: 'ハンバーガー🍔', fn: () => this.event_hamburgerIcon() },
            { prob: 12, name: '桜吹雪', fn: () => this.event_sakura() },
            
            // ===== アンコモン (18-30%) =====
            { prob: 18, name: 'カード浮遊', fn: () => this.event_floatingCards() },
            { prob: 20, name: 'スキル揺れ', fn: () => this.event_skillShake() },
            { prob: 30, name: '高専祭カラー', fn: () => this.event_hisayoshiColor() },
            
            // ===== コモン (35-50%) =====
            { prob: 35, name: 'ヘッダーグラデーション', fn: () => this.event_headerGradient() },
            { prob: 50, name: '装飾ライン', fn: () => this.event_decorativeLines() }
        ];
        
        events.forEach(event => {
            const roll = Math.random() * 100;
            if (roll < event.prob) {
                if (event.cond && !event.cond()) return;
                try {
                    event.fn();
                    console.log(`✨ ${event.name} (${event.prob}%)`);
                } catch (e) {
                    console.error(`❌ ${event.name} failed`, e);
                }
            }
        });
    }

    // ===== 超レアイベント (1-5%) =====

    // 1. スプラッシュ画面（1%）
    event_splash() {
        const splash = document.createElement('div');
        splash.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 10000; animation: fadeOut 2s 1s forwards;
        `;
        splash.innerHTML = `
            <div style="font-size: 48px; margin-bottom: 20px; animation: bounce 1s infinite;">
                🎲
            </div>
            <div style="color: white; font-size: 24px; font-weight: 700;">
                FUN Value: ${Math.floor(Math.random() * 100)}
            </div>
            <div style="color: rgba(255,255,255,0.8); font-size: 14px; margin-top: 10px;">
                Loading Portfolio...
            </div>
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                to { opacity: 0; pointer-events: none; }
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(splash);
        
        setTimeout(() => splash.remove(), 3000);
    }

    // 2. 満月（2%）
    event_fullMoon() {
        const themeBtn = document.getElementById('themeToggle');
        if (!themeBtn) return;
        
        const icon = themeBtn.querySelector('i');
        if (icon && icon.className.includes('fa-moon')) {
            icon.className = 'fas fa-circle';
            icon.style.color = '#ffd700';
            themeBtn.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.6)';
        }
    }

    // 3. 雪が降る（3%）
    event_snow() {
        const snowContainer = document.createElement('div');
        snowContainer.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            pointer-events: none; z-index: 9999; overflow: hidden;
        `;
        
        for (let i = 0; i < 50; i++) {
            const snowflake = document.createElement('div');
            snowflake.textContent = '❄️';
            snowflake.style.cssText = `
                position: absolute;
                top: -20px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 10 + 10}px;
                animation: fall ${Math.random() * 3 + 2}s linear infinite;
                animation-delay: ${Math.random() * 2}s;
                opacity: ${Math.random() * 0.6 + 0.4};
            `;
            snowContainer.appendChild(snowflake);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to { 
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(snowContainer);
    }

    // 4. アバター別版（5%）
    event_avatarVariant() {
        const avatarImg = document.querySelector('.avatar-img');
        if (!avatarImg) return;
        
        const img = new Image();
        img.onload = () => avatarImg.src = 'images/icons/hr-variant.png';
        img.src = 'images/icons/hr-variant.png';
    }

    // ===== レアイベント (8-15%) =====

    // 5. タイムライン虹色（8%）
    event_timelineRainbow() {
        const style = document.createElement('style');
        style.textContent = `
            .timeline-container::before {
                background: linear-gradient(180deg,
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

    // 6. ハンバーガー🍔（10%）
    event_hamburgerIcon() {
        const btn = document.getElementById('hamburgerBtn');
        if (!btn) return;
        
        const spans = btn.querySelectorAll('span');
        if (spans.length >= 3) {
            spans[0].style.display = 'none';
            spans[1].innerHTML = '🍔';
            spans[1].style.transform = 'none';
            spans[1].style.fontSize = '24px';
            spans[2].style.display = 'none';
        }
    }

    // 7. 桜吹雪（12%）
    event_sakura() {
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            pointer-events: none; z-index: 9999; overflow: hidden;
        `;
        
        for (let i = 0; i < 30; i++) {
            const petal = document.createElement('div');
            petal.textContent = '🌸';
            petal.style.cssText = `
                position: absolute;
                top: -20px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 15 + 15}px;
                animation: sakura-fall ${Math.random() * 4 + 3}s linear infinite;
                animation-delay: ${Math.random() * 3}s;
            `;
            container.appendChild(petal);
        }
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes sakura-fall {
                to { 
                    transform: translateY(100vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(container);
    }

    // ===== アンコモンイベント (18-30%) =====

    // 9. カード浮遊（18%）
    event_floatingCards() {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float-card {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .card { animation: float-card 3s ease-in-out infinite; }
        `;
        document.head.appendChild(style);
    }

    // 10. スキル揺れ（20%）
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

    // 12. 高専祭カラー（30%）
    event_hisayoshiColor() {
        const project = projects.find(p => p.id === 'p1');
        if (project) {
            project.image = 'images/hisayoshi_thumbnail-color.png';
            if (window.projectsInstance) {
                window.projectsInstance.render();
            }
        }
    }

    // ===== コモンイベント (35-50%) =====

    // 13. ヘッダーグラデーション（35%）
    event_headerGradient() {
        const header = document.getElementById('stickyHeader');
        if (!header) return;
        
        header.style.background = 'linear-gradient(90deg, rgba(94, 234, 212, 0.1) 0%, transparent 100%)';
    }

    // 15. 装飾ライン（50%）
    event_decorativeLines() {
        const style = document.createElement('style');
        style.textContent = `
            .card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background: linear-gradient(180deg, var(--accent) 0%, transparent 100%);
                border-radius: 12px 0 0 12px;
            }
            .card {
                position: relative;
            }
        `;
        document.head.appendChild(style);
    }
}

// 初期化
let funSystem;

document.addEventListener('DOMContentLoaded', () => {
    funSystem = new FunEventSystem();
    window.addEventListener('load', () => {
        funSystem.checkAndTriggerEvents();
    });
});

// デバッグ
window.testEvent = (name) => {
    const map = {
        'splash': () => funSystem.event_splash(),
        'moon': () => funSystem.event_fullMoon(),
        'snow': () => funSystem.event_snow(),
        'avatar': () => funSystem.event_avatarVariant(),
        'rainbow': () => funSystem.event_timelineRainbow(),
        'hamburger': () => funSystem.event_hamburgerIcon(),
        'sakura': () => funSystem.event_sakura(),
        'float': () => funSystem.event_floatingCards(),
        'shake': () => funSystem.event_skillShake(),
        'hisayoshi': () => funSystem.event_hisayoshiColor(),
        'header': () => funSystem.event_headerGradient(),
        'lines': () => funSystem.event_decorativeLines()
    };
    
    if (map[name]) {
        map[name]();
        console.log(`🔧 Tested: ${name}`);
    } else {
        console.log('Available:', Object.keys(map).join(', '));
    }
};

console.log('🎲 Type testEvent("splash") to test events!');