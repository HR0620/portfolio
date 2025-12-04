// random-event.js - Undertale & ドラクエ風FUN値イベントシステム

class FunEventSystem {
    constructor() {
        this.triggeredEvents = [];
        console.log('🎲 FUN Event System initialized');
    }

    // イベント発動判定
    checkAndTriggerEvents() {
        const events = [
            { prob: 1, name: 'スプラッシュ画面', fn: () => this.event_splash() },
            { prob: 1, name: 'ドラクエ風ステータス', fn: () => this.event_dqStatus() },
            { prob: 2, name: 'マトリックス降下', fn: () => this.event_matrix() },
            { prob: 2, name: '満月', fn: () => this.event_fullMoon(), cond: () => document.documentElement.getAttribute('data-theme') === 'dark' },
            { prob: 3, name: 'レベルアップ通知', fn: () => this.event_levelUp() },
            { prob: 3, name: 'ターミナル風フッター', fn: () => this.event_terminalFooter() },
            { prob: 5, name: 'ドット絵アバター', fn: () => this.event_pixelAvatar() },
            { prob: 5, name: 'スライムカーソル', fn: () => this.event_slimeCursor() },
            { prob: 5, name: 'カード浮遊', fn: () => this.event_floatingCards() },
            { prob: 5, name: 'ヘッダーグラデーション', fn: () => this.event_headerGradient() },
            { prob: 8, name: 'タイムライン虹色', fn: () => this.event_timelineRainbow() },
            { prob: 10, name: 'ピクセルエフェクト', fn: () => this.event_pixelEffect() },
            { prob: 10, name: 'ハンバーガー🍔', fn: () => this.event_hamburgerIcon() },
            { prob: 10, name: '桜吹雪', fn: () => this.event_sakura() },
            { prob: 10, name: '高専祭カラー', fn: () => this.event_hisayoshiColor() },
            { prob: 10, name: '装飾ライン', fn: () => this.event_decorativeLines() },
            { prob: 15, name: 'コンボカウンター', fn: () => this.event_comboCounter() },
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

    // スプラッシュ画面(Undertale/Flowey Style)
    event_splash() {
        const splash = document.createElement('div');
        
        // スタイル定義(Google Fontsの読み込みを含む)
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

            /* 全体のフェードアウト */
            @keyframes fadeOut {
                0% { opacity: 1; }
                90% { opacity: 1; }
                100% { opacity: 0; pointer-events: none; }
            }

            /* 花のゆらゆらアニメーション */
            @keyframes sway {
                0%, 100% { transform: rotate(-5deg); }
                50% { transform: rotate(5deg); }
            }

            /* テキストの点滅 */
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
            font-family: 'VT323', monospace;
            animation: fadeOut 4s forwards;
            cursor: default;
        `;

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

        setTimeout(() => {
            splash.remove();
            style.remove();
        }, 4000);
    }

    // ドラクエ風ステータス画面
    event_dqStatus() {
        const status = document.createElement('div');
        
        const style = document.createElement('style');
        style.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
            
            @keyframes dqFadeIn {
                0% { opacity: 0; transform: scale(0.8); }
                100% { opacity: 1; transform: scale(1); }
            }
            
            @keyframes dqFadeOut {
                0% { opacity: 1; }
                100% { opacity: 0; pointer-events: none; }
            }
        `;
        document.head.appendChild(style);

        const level = Math.floor(Math.random() * 50) + 1;
        const exp = Math.floor(Math.random() * 9999);

        status.style.cssText = `
            position: fixed; top: 50%; left: 50%; 
            transform: translate(-50%, -50%);
            background: #000080;
            border: 4px solid #ffffff;
            padding: 30px;
            z-index: 10000;
            font-family: 'Press Start 2P', monospace;
            color: #ffffff;
            box-shadow: 0 0 30px rgba(0, 0, 255, 0.8);
            animation: dqFadeIn 0.3s ease-out, dqFadeOut 3s 2s forwards;
            min-width: 300px;
        `;

        status.innerHTML = `
            <div style="text-align: center; margin-bottom: 20px; font-size: 10px;">
                *** PORTFOLIO STATUS ***
            </div>
            <div style="font-size: 8px; line-height: 2;">
                NAME:  Harada Renju<br>
                LEVEL: ${level}<br>
                HP:    ████████████<br>
                MP:    ██████████<br>
                EXP:   ${exp}<br>
                <br>
                SKILLS:<br>
                - Python<br>
                - JavaScript<br>
                - HTML/CSS<br>
                <br>
                <div style="text-align: center; margin-top: 15px;">
                    Press Any Key...
                </div>
            </div>
        `;

        document.body.appendChild(status);

        const removeStatus = () => {
            status.remove();
            style.remove();
            document.removeEventListener('keydown', removeStatus);
            document.removeEventListener('click', removeStatus);
        };

        document.addEventListener('keydown', removeStatus);
        document.addEventListener('click', removeStatus);

        setTimeout(() => {
            removeStatus();
        }, 5000);
    }

    // マトリックス風コード降下
    event_matrix() {
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none; z-index: 9998;
            opacity: 0.7;
        `;
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        let frameCount = 0;
        const maxFrames = 300;

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0f0';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }

            frameCount++;
            if (frameCount < maxFrames) {
                requestAnimationFrame(draw);
            } else {
                canvas.style.opacity = '0';
                canvas.style.transition = 'opacity 1s';
                setTimeout(() => canvas.remove(), 1000);
            }
        };

        draw();
    }

    // レベルアップ通知
    event_levelUp() {
        const notification = document.createElement('div');
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes levelUpSlide {
                0% { transform: translateY(-100%); opacity: 0; }
                10% { transform: translateY(0); opacity: 1; }
                90% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(-100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);

        notification.style.cssText = `
            position: fixed; top: 20px; left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 16px;
            z-index: 10000;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            animation: levelUpSlide 3s ease-in-out;
        `;

        notification.innerHTML = `
            🎉 LEVEL UP! スキルが向上しました! 🎉
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 3000);
    }

    // ターミナル風フッター
    event_terminalFooter() {
        const footer = document.querySelector('footer');
        if (!footer) return;

        footer.style.cssText = `
            background: #1e1e1e;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            padding: 15px;
            border-top: 2px solid #00ff00;
            text-align: left;
            font-size: 12px;
        `;

        footer.innerHTML = `
            <div>$ cd /portfolio/harada-renju</div>
            <div>$ cat LICENSE.txt</div>
            <div style="margin-top: 5px;">© 2024 Renju Harada. All rights reserved.</div>
            <div>$ █</div>
        `;
    }

    // ドット絵風アバター
    event_pixelAvatar() {
        const avatarImg = document.querySelector('.avatar-img');
        if (!avatarImg) return;
        
        avatarImg.style.imageRendering = 'pixelated';
        avatarImg.style.filter = 'contrast(1.2) brightness(1.1)';
    }

    // スライムカーソル
    event_slimeCursor() {
        const style = document.createElement('style');
        style.textContent = `
            * {
                cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text y="20" font-size="20">🟦</text></svg>'), auto !important;
            }
        `;
        document.head.appendChild(style);
    }

    // ピクセルエフェクト
    event_pixelEffect() {
        const style = document.createElement('style');
        style.textContent = `
            .project-image {
                image-rendering: pixelated;
                filter: contrast(1.1);
            }
        `;
        document.head.appendChild(style);
    }

    // コンボカウンター(クリック時)
    event_comboCounter() {
        let combo = 0;
        let comboTimer = null;
        const comboDisplay = document.createElement('div');
        
        comboDisplay.style.cssText = `
            position: fixed; top: 100px; right: 30px;
            background: rgba(255, 215, 0, 0.9);
            color: #000;
            padding: 10px 20px;
            border-radius: 8px;
            font-weight: 700;
            font-size: 24px;
            z-index: 9999;
            display: none;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            font-family: 'Arial Black', sans-serif;
        `;
        
        document.body.appendChild(comboDisplay);
        
        document.addEventListener('click', () => {
            combo++;
            comboDisplay.textContent = `${combo} COMBO!`;
            comboDisplay.style.display = 'block';
            comboDisplay.style.animation = 'none';
            setTimeout(() => {
                comboDisplay.style.animation = 'pulse 0.3s ease-out';
            }, 10);
            
            clearTimeout(comboTimer);
            comboTimer = setTimeout(() => {
                combo = 0;
                comboDisplay.style.display = 'none';
            }, 2000);
        });
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

    // 桜吹雪
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

    //タイムライン虹色
    event_timelineRainbow() {
        const style = document.createElement('style');
        style.textContent = `
            .timeline-container::before {
                background: linear-gradient(180deg,
                    #ff0000 0%, #ff7f00 16.66%, #ffff00 33.33%,
                    #00ff00 50%, #0000ff 66.66%, #4b0082 83.33%, #9400d3 100%
                ) !important;
            }
            .timeline-item::before {
                filter: hue-rotate(0deg);
                animation: rainbow-footstep 3s linear infinite;
            }
            @keyframes rainbow-footstep {
                100% { filter: hue-rotate(360deg); }
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
            spans[0].style.display = 'none';
            spans[2].style.display = 'none';

            const target = spans[1];
            target.innerHTML = '🍔';
            target.style.width = 'auto';
            target.style.height = 'auto';
            target.style.background = 'transparent';
            target.style.fontSize = '26px';
            target.style.lineHeight = '1';
            target.style.transform = 'none';
            target.style.margin = '0';
            target.style.padding = '0';
        }
    }

    // カード浮遊
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

// デバッグ用テスト関数
window.testEvent = (name) => {
    const map = {
        'splash': () => funSystem.event_splash(),
        'dq': () => funSystem.event_dqStatus(),
        'matrix': () => funSystem.event_matrix(),
        'levelup': () => funSystem.event_levelUp(),
        'terminal': () => funSystem.event_terminalFooter(),
        'pixel': () => funSystem.event_pixelAvatar(),
        'slime': () => funSystem.event_slimeCursor(),
        'combo': () => funSystem.event_comboCounter(),
        'moon': () => funSystem.event_fullMoon(),
        'avatar': () => funSystem.event_pixelAvatar(),
        'rainbow': () => funSystem.event_timelineRainbow(),
        'hamburger': () => funSystem.event_hamburgerIcon(),
        'sakura': () => funSystem.event_sakura(),
        'float': () => funSystem.event_floatingCards(),
        'shake': () => funSystem.event_skillShake(),
        'hisayoshi': () => funSystem.event_hisayoshiColor(),
        'header': () => funSystem.event_headerGradient(),
        'lines': () => funSystem.event_decorativeLines(),
        'pixeleffect': () => funSystem.event_pixelEffect()
    };
    
    if (map[name]) {
        map[name]();
        console.log(`🔧 Tested: ${name}`);
    } else {
        console.log('📋 Available events:');
        console.log('  DQ系: dq, levelup, slime, terminal, pixel');
        console.log('  Tech系: matrix, combo, pixeleffect');
        console.log('  その他: splash, moon, rainbow, hamburger, sakura, float, shake, hisayoshi, header, lines');
    }
};

console.log('🎲 Type testEvent("dq") to test events!');