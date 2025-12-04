// scroll-effects.js - スクロールエフェクト・ギミック集
// ============================================
// スクロールに応じたアニメーション、パララックス効果を提供

class ScrollEffects {
    constructor() {
        // パララックス対象要素
        this.parallaxElements = [];
        
        // フェードイン対象要素
        this.fadeElements = [];
        
        // 現在のスクロール位置
        this.scrollY = 0;
        
        // 初期化
        this.init();
    }

    // 初期化処理
    init() {
        // スクロールイベントリスナーを設定(パフォーマンス考慮)
        this.setupScrollListener();
        
        // パララックス効果を設定
        this.setupParallax();
        
        // フェードインアニメーションを設定
        this.setupFadeIn();
        
        // ホバーエフェクトを強化
        this.enhanceHoverEffects();
    }

    // スクロールイベントリスナーを設定(throttle付き)
    setupScrollListener() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            this.scrollY = window.scrollY;
            
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.updateParallax();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // パララックス効果を設定
    setupParallax() {
        // ヘッダーにパララックス効果
        const header = document.querySelector('.brand');
        if (header) {
            this.parallaxElements.push({
                element: header,
                speed: 0.3 // スクロール速度の30%で動く
            });
        }
        
        // プロジェクトカードにパララックス効果
        const projects = document.querySelectorAll('.project');
        projects.forEach((project, index) => {
            this.parallaxElements.push({
                element: project,
                speed: 0.1 + (index % 2) * 0.05 // 交互に異なる速度
            });
        });
    }

    // パララックス効果を更新
    updateParallax() {
        this.parallaxElements.forEach(({ element, speed }) => {
            const rect = element.getBoundingClientRect();
            const elementTop = rect.top + this.scrollY;
            const offset = (this.scrollY - elementTop) * speed;
            
            // ビューポート内にある場合のみ適用
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.style.transform = `translateY(${-offset}px)`;
            }
        });
    }

    // フェードインアニメーションを設定
    setupFadeIn() {
        // 対象要素を取得
        const targets = document.querySelectorAll('.card, .skill-card, .tool-card, .activity-card');
        
        targets.forEach(element => {
            // 初期状態を設定
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            
            this.fadeElements.push(element);
        });
        
        // Intersection Observerでフェードイン
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        this.fadeElements.forEach(element => {
            observer.observe(element);
        });
    }

    // ホバーエフェクトを強化
    enhanceHoverEffects() {
        // プロジェクトカードに3D効果
        const projects = document.querySelectorAll('.project');
        projects.forEach(project => {
            project.addEventListener('mouseenter', (e) => {
                project.style.transform = 'translateY(-8px) rotateX(2deg)';
                project.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
            });
            
            project.addEventListener('mouseleave', () => {
                project.style.transform = 'translateY(0) rotateX(0)';
            });
            
            // マウス位置に応じた傾き
            project.addEventListener('mousemove', (e) => {
                const rect = project.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -5; // -5deg ~ 5deg
                const rotateY = (x - centerX) / centerX * 5;
                
                project.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
        });
        
        // スキルカードにパルスエフェクト
        const skills = document.querySelectorAll('.skill-card, .tool-card');
        skills.forEach(skill => {
            skill.addEventListener('mouseenter', () => {
                const icon = skill.querySelector('.skill-icon, .tool-icon');
                if (icon) {
                    icon.style.animation = 'pulse-icon 0.6s ease-in-out';
                }
            });
            
            skill.addEventListener('animationend', () => {
                const icon = skill.querySelector('.skill-icon, .tool-icon');
                if (icon) {
                    icon.style.animation = '';
                }
            });
        });
        
        // パルスアニメーションを追加
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse-icon {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.15); }
            }
        `;
        document.head.appendChild(style);
    }
}

// グローバルに公開
window.ScrollEffects = ScrollEffects;