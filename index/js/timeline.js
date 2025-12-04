// timeline.js - タイムライン機能モジュール

// タイムライン管理クラス
class Timeline {
    constructor() {
        this.container = document.getElementById("timelineContainer");
        this.currentFilter = 'all';
        this.observer = null;
    }

    // タイムラインをレンダリングする
// タイムラインをレンダリングする
    render() {
        this.container.innerHTML = ''; 

        timelineData.forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'timeline-item';
            itemEl.setAttribute('data-type', item.type);
            
            // フィルター適用(現在のフィルターに応じて表示/非表示)
            if (this.currentFilter !== 'all' && item.type !== this.currentFilter) {
                itemEl.classList.add('hidden');
            }
            
            const content = document.createElement('div');
            content.className = 'timeline-content';
            
            const year = document.createElement('div');
            year.className = 'timeline-year';
            year.textContent = item.year;

            const title = document.createElement('h3');
            title.className = 'timeline-title';
            title.textContent = item.title[currentLang];
            
            const description = document.createElement('p');
            description.textContent = item.description[currentLang];
            
            content.appendChild(year);
            content.appendChild(title);
            content.appendChild(description);
            itemEl.appendChild(content); 
            this.container.appendChild(itemEl);
        });
        
        this.setupScrollReveal(); 
    }

    // フィルターを適用する
    applyFilter(filter) {
        this.currentFilter = filter;
        
        // フィルターボタンのアクティブ状態を更新
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        // タイムラインアイテムの表示/非表示を切り替え
        const items = document.querySelectorAll('.timeline-item');
        items.forEach(item => {
            const itemType = item.getAttribute('data-type');
            if (filter === 'all' || itemType === filter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
        
        // スクロールアニメーションを再設定
        this.setupScrollReveal();
    }

    // スクロールアニメーションを設定する
    setupScrollReveal() {
        // 既存のobserverがあれば切断
        if (this.observer) {
            this.observer.disconnect();
        }
        
        const timelineItems = document.querySelectorAll('.timeline-item:not(.hidden)');
        
        const options = {
            root: null, 
            rootMargin: '0px',
            threshold: 0.2
        };

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        this.observer = new IntersectionObserver(callback, options);

        timelineItems.forEach(item => {
            this.observer.observe(item);
        });
    }

    // 初期化処理
    init() {
        this.render();

        // フィルターボタンのイベントリスナーを設定
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                this.applyFilter(filter);
            });
        });
    }
}

// グローバルに公開するための関数
function renderTimeline() {
    if (window.timelineInstance) {
        window.timelineInstance.render();
    }
}