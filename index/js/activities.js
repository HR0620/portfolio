// アクティビティ管理クラス
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

            // サムネイル画像
            if (a.image) {
                const img = document.createElement('img');
                img.className = 'activity-icon';
                img.src = a.image;
                img.alt = a.title[currentLang];
                activityCard.appendChild(img);
            }

            // タイトル
            const title = document.createElement('h3');
            title.textContent = a.title[currentLang];
            activityCard.appendChild(title);

            this.container.appendChild(activityCard);
        });
    }

    // アクティビティのモーダルを表示する
    showModal(activityId) {
        const activity = activitiesData.find(a => a.id === activityId);
        if (!activity) return;

        const lang = currentLang;

        // 画像を設定（Font Awesomeアイコンではなく、画像URLを使用）
        if (activity.image) {
            const modalIcon = document.getElementById('modalSkillIcon');
            modalIcon.innerHTML = `<img src="${activity.image}" style="width: 60px; height: 60px; object-fit: contain;" alt="${activity.title[lang]}">`;
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