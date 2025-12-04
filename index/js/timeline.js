// timeline.js - タイムライン機能モジュール（テック系デザイン版）

// タイムライン管理クラス
class Timeline {
    constructor() {
        this.container = document.getElementById("timelineContainer");
        this.currentFilter = 'all';
        this.observer = null;
    }

    // タイムラインをレンダリングする
    render() {
        this.container.innerHTML = '';

        timelineData.forEach((item, index) => {
            // タイムラインアイテム
            const itemEl = document.createElement('div');
            itemEl.className = 'timeline-item';
            itemEl.setAttribute('data-type', item.type);
            itemEl.setAttribute('data-index', index);

            // フィルター適用
            if (this.currentFilter !== 'all' && item.type !== this.currentFilter) {
                itemEl.classList.add('hidden');
            }

            // ノード（円）を作成
            const node = document.createElement('div');
            node.className = 'timeline-node';

            // コンテンツカード
            const content = document.createElement('div');
            content.className = 'timeline-content';

            // 年バッジ
            const year = document.createElement('div');
            year.className = 'timeline-year';
            year.textContent = item.year;

            // タイトル
            const title = document.createElement('h3');
            title.className = 'timeline-title';
            title.textContent = item.title[currentLang];

            // 説明文
            const description = document.createElement('p');
            description.textContent = item.description[currentLang];

            // 組み立て
            content.appendChild(year);
            content.appendChild(title);
            if (item.description[currentLang]) {
                content.appendChild(description);
            }

            itemEl.appendChild(node);
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
                // 再表示時にアニメーションをリセット
                item.classList.remove('visible');
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
            threshold: 0.15
        };

        const callback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // 遅延を付けて順番にアニメーション
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
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