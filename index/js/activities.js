// activities.js - アクティビティ管理モジュール

// ===== アクティビティ管理クラス =====
class Activities {
    constructor() {
        this.container = document.getElementById("activitiesContainer");
    }

    // アクティビティをレンダリングする
    render() {
        this.container.innerHTML = "";

        activitiesData.forEach(a => {
            const activityCard = document.createElement('div');
            activityCard.className = 'activity-card';
            activityCard.setAttribute('data-activity-id', a.id);
            activityCard.addEventListener('click', () => this.showModal(a.id));

            // アイコン/画像を表示
            // iconType: 'original'（画像パス）, 'fontawesome', 'devicon'
            const iconContainer = document.createElement('div');
            iconContainer.className = 'activity-icon-container';
            
            if (a.iconType === 'original' && a.image) {
                // 画像パスの場合
                const img = document.createElement('img');
                img.className = 'activity-icon';
                img.src = a.image;
                img.alt = a.title[currentLang];
                iconContainer.appendChild(img);
            } else if (a.iconType === 'devicon') {
                // Deviconの場合
                iconContainer.innerHTML = `<div class="activity-icon-fa"><i class="${a.icon} colored"></i></div>`;
            } else {
                // Font Awesomeの場合（デフォルト）
                iconContainer.innerHTML = `<div class="activity-icon-fa"><i class="${a.icon}"></i></div>`;
            }

            // タイトル
            const title = document.createElement('h3');
            title.textContent = a.title[currentLang];

            activityCard.appendChild(iconContainer);
            activityCard.appendChild(title);
            this.container.appendChild(activityCard);
        });
    }

    // アクティビティのモーダルを表示する
    showModal(activityId) {
        const activity = activitiesData.find(a => a.id === activityId);
        if (!activity) return;

        const lang = currentLang;

        // モーダルアイコンを設定
        const modalIcon = document.getElementById('modalSkillIcon');
        
        if (activity.iconType === 'original' && activity.image) {
            // 画像パスの場合
            modalIcon.innerHTML = `<img src="${activity.image}" style="width: 60px; height: 60px; object-fit: contain;" alt="${activity.title[lang]}">`;
        } else if (activity.iconType === 'devicon') {
            // Deviconの場合
            modalIcon.innerHTML = `<i class="${activity.icon} colored"></i>`;
        } else {
            // Font Awesomeの場合
            modalIcon.innerHTML = `<i class="${activity.icon}"></i>`;
        }
        
        // タイトルを設定
        document.getElementById('modalSkillName').textContent = activity.title[lang];

        // 熟練度バーを非表示
        document.getElementById('modalProficiencySection').style.display = 'none';

        // 内容を表示
        document.getElementById('modalExperienceContent').textContent = activity.desc[lang];
        document.getElementById('modalProficiencyLevelText').textContent = activity.date;
        
        // モーダルを表示
        document.getElementById('skillDetailModal').classList.add('visible');
        document.body.classList.add('modal-open'); 
    }

    // 初期化処理
    init() {
        this.render();
    }
}

// グローバルに公開
window.Activities = Activities;

// グローバルに公開するための関数
function renderProjects() {
    if (window.projectsInstance) {
        window.projectsInstance.render();
    }
}

function renderActivities() {
    if (window.activitiesInstance) {
        window.activitiesInstance.render();
    }
}