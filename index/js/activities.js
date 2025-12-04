// IconUtils を使用してアイコン生成を共通化

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

            // アイコン/画像を表示(IconUtilsを使用)
            const iconContainer = document.createElement('div');
            iconContainer.className = 'activity-icon-container';
            
            // iconTypeを判定(指定がなければ自動判定)
            const iconType = a.iconType || IconUtils.detectIconType(a.icon || a.image);
            
            if (iconType === 'original') {
                // 画像パスの場合
                const img = document.createElement('img');
                img.className = 'activity-icon';
                img.src = a.image || a.icon;
                img.alt = a.title[currentLang];
                iconContainer.appendChild(img);
            } else {
                // Font Awesome / Devicon の場合
                const iconWrapper = document.createElement('div');
                iconWrapper.className = 'activity-icon-fa';
                iconWrapper.innerHTML = IconUtils.createIconHTML(iconType, a.icon, a.title[currentLang], {
                    size: 'medium'
                });
                iconContainer.appendChild(iconWrapper);
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

        // モーダルアイコンを設定(IconUtilsを使用)
        const modalIcon = document.getElementById('modalSkillIcon');
        modalIcon.innerHTML = IconUtils.createFromData(activity, { size: 'large' });
        
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
function renderActivities() {
    if (window.activitiesInstance) {
        window.activitiesInstance.render();
    }
}