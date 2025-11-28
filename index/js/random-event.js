// random-event.js - Undertale風FUN値イベントシステム

class FunEventSystem {
    constructor() {
        this.triggeredEvents = [];
        console.log('🎲 FUN Event System initialized');
    }

    // イベント発動判定
    checkAndTriggerEvents() {
        const events = [
            { prob: 1, name: 'スプラッシュ画面', fn: () => this.event_splash() },
            { prob: 2, name: '満月', fn: () => this.event_fullMoon(), cond: () => document.documentElement.getAttribute('data-theme') === 'dark' },
            { prob: 3, name: '雪が降る', fn: () => this.event_snow() },
            { prob: 3, name: 'アバター別版', fn: () => this.event_avatarVariant() },
            { prob: 5, name: 'カード浮遊', fn: () => this.event_floatingCards() },
            { prob: 5, name: 'ヘッダーグラデーション', fn: () => this.event_headerGradient() },
            { prob: 8, name: 'タイムライン虹色', fn: () => this.event_timelineRainbow() },
            { prob: 10, name: 'ハンバーガー🍔', fn: () => this.event_hamburgerIcon() },
            { prob: 10, name: '桜吹雪', fn: () => this.event_sakura() },
            { prob: 10, name: '高専祭カラー', fn: () => this.event_hisayoshiColor() },
            { prob: 10, name: '装飾ライン', fn: () => this.event_decorativeLines() },
            { prob: 20, name: 'スキル揺れ', fn: () => this.event_skillShake() }
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

 // スプラッシュ画面（Undertale/Flowey Style）
    event_splash() {
        const splash = document.createElement('div');
        
        // スタイル定義（Google Fontsの読み込みを含む）
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

            /* 全体のフェードアウト */
            @keyframes fadeOut {
                0% { opacity: 1; }
                90% { opacity: 1; } /* 読む時間を確保するため、消える直前まで不透明 */
                100% { opacity: 0; pointer-events: none; }
            }

            /* 花のゆらゆらアニメーション */
            @keyframes sway {
                0%, 100% { transform: rotate(-5deg); }
                50% { transform: rotate(5deg); }
            }

            /* テキストの点滅（カーソル待ちのような表現） */
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        // スプラッシュ画面のコンテナスタイル
        splash.style.cssText = `
            position: fixed; top: 0; left: 0; right: 0; bottom: 0;
            background-color: black;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            z-index: 10000;
            font-family: 'VT323', monospace; /* ドット絵風フォント */
            animation: fadeOut 4s forwards; /* 少し時間を長めに確保 */
            cursor: default;
        `;

        // Flowey風のセリフ
        // "Howdy! Thanks for visiting my portfolio! Golly, make yourself at home!"
        const funValue = Math.floor(Math.random() * 100);

        splash.innerHTML = `
            <div style="font-size: 80px; margin-bottom: 20px; animation: sway 2s ease-in-out infinite;">
                🌻
            </div>

            <div style="
                border: 4px solid white;
                padding: 20px;
                width: 80%;
                max-width: 600px;
                background: black;
                color: white;
                position: relative;
            ">
                <div style="font-size: 28px; line-height: 1.4; text-align: left;">
                    * Howdy! Thanks for visiting!<br>
                    * Golly, take your time and<br>
                    &nbsp;&nbsp;have some <span style="color: #ffff00;">FUN</span> looking around!
                </div>
                
                <div style="
                    position: absolute; bottom: 10px; right: 15px; 
                    font-size: 20px; animation: blink 1s infinite;
                ">▼</div>
            </div>

            <div style="
                color: gray; 
                font-size: 16px; 
                margin-top: 20px; 
                font-family: monospace;
            ">
                FUN Value: ${funValue}
            </div>
        `;

        document.body.appendChild(splash);

        // アニメーションに合わせて要素を削除 (4000ms = 4s)
        setTimeout(() => {
            splash.remove();
            style.remove(); // スタイルタグも掃除
        }, 4000);
    }

    // 満月
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

    //アバター別版
    event_avatarVariant() {
        const avatarImg = document.querySelector('.avatar-img');
        if (!avatarImg) return;
        
        const img = new Image();
        img.onload = () => avatarImg.src = 'images/icons/hr-variant.png';
        img.src = 'images/icons/hr-variant.png';
    }

    //タイムライン虹色
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

// ハンバーガー🍔
    event_hamburgerIcon() {
        const btn = document.getElementById('hamburgerBtn');
        if (!btn) return;
        
        const spans = btn.querySelectorAll('span');
        if (spans.length >= 3) {
            // 1. 上下の線を非表示にする
            spans[0].style.display = 'none';
            spans[2].style.display = 'none';

            // 2. 真ん中の線を編集する
            const target = spans[1];
            target.innerHTML = '🍔';
            
            // ★修正ポイント: CSSで強制されている「線」としてのスタイルを打ち消す
            target.style.width = 'auto';       // 幅20px固定を解除
            target.style.height = 'auto';      // 高さ2px固定を解除（これがズレの主原因）
            target.style.background = 'transparent'; // 線の色を消す
            
            // 絵文字用のスタイル
            target.style.fontSize = '26px';    // ボタンサイズに合わせて調整
            target.style.lineHeight = '1';     // 行間による余計な余白を排除
            target.style.transform = 'none';
            
            // 念のためブロック要素のままにするが、余白等の影響をリセット
            target.style.margin = '0';
            target.style.padding = '0';
        }
    }

    //桜吹雪
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

    // カード浮遊（
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

    // スキル揺れ
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

    // 高専祭カラー
    event_hisayoshiColor() {
        const project = projects.find(p => p.id === 'p1');
        if (project) {
            project.image = 'images/hisayoshi_thumbnail-color.png';
            if (window.projectsInstance) {
                window.projectsInstance.render();
            }
        }
    }
    // ヘッダーグラデーション
    event_headerGradient() {
        const header = document.getElementById('stickyHeader');
        if (!header) return;
        
        header.style.background = 'linear-gradient(90deg, rgba(94, 234, 212, 0.1) 0%, transparent 100%)';
    }

    //装飾ライン
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