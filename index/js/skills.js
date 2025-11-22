// skills.js - スキル・ツール機能モジュール

// ===== アイコン生成ユーティリティ関数 =====
// iconType: 'devicon' | 'fontawesome' | 'original'
// icon: クラス名（devicon/fontawesome）または画像パス（original）
// altText: original時のalt属性用テキスト（オプション）
function createIconElement(iconType, icon, altText = '') {
    // originalの場合は画像要素を返す
    if (iconType === 'original') {
        return `<img src="${icon}" alt="${altText}" style="width: 48px; height: 48px; object-fit: contain;">`;
    }
    // deviconの場合
    if (iconType === 'devicon') {
        return `<i class="${icon} colored"></i>`;
    }
    // fontawesomeの場合（デフォルト）
    // 'fas'や'fab'が含まれているかチェック
    if (icon.includes('fa-')) {
        return `<i class="${icon}"></i>`;
    }
    return `<i class="fas ${icon}"></i>`;
}

// ===== スキル管理クラス =====
class Skills {
    constructor() {
        this.container = document.getElementById("skillsContainer");
    }

    // スキルをレンダリングする（devicon / fontawesome / original 対応）
    render() {
        this.container.innerHTML = '';

        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.setAttribute('data-skill-id', skill.id);
            skillCard.addEventListener('click', () => this.showModal(skill.id));

            // アイコンを生成
            const iconDiv = document.createElement('div');
            iconDiv.className = 'skill-icon';
            iconDiv.innerHTML = createIconElement(skill.iconType, skill.icon, skill.name);

            // 名前を表示
            const name = document.createElement('h3');
            name.textContent = skill.name;

            skillCard.appendChild(iconDiv);
            skillCard.appendChild(name);
            this.container.appendChild(skillCard);
        });
    }

    // スキルのモーダルを表示する
    showModal(skillId) {
        const skill = skillsData.find(s => s.id === skillId);
        if (!skill) return;

        const lang = currentLang;

        // モーダルにアイコンを表示
        const modalIcon = document.getElementById('modalSkillIcon');
        modalIcon.innerHTML = createIconElement(skill.iconType, skill.icon, skill.name);
        
        // タイトルを設定
        document.getElementById('modalSkillName').textContent = skill.name;

        // 熟練度バーを表示
        document.getElementById('modalProficiencySection').style.display = 'block';
        
        const modalBar = document.getElementById('modalProficiencyBar');
        modalBar.style.width = '0%'; // リセット
        setTimeout(() => {
            modalBar.style.width = skill.proficiency + '%';
        }, 100);
        
        document.getElementById('modalProficiencyText').textContent = `${skill.proficiency}%`;
        document.getElementById('modalExperienceContent').textContent = skill.details[lang].summary;
        document.getElementById('modalProficiencyLevelText').textContent = skill.details[lang].level;
        
        // モーダルを表示
        document.getElementById('skillDetailModal').classList.add('visible');
        document.body.classList.add('modal-open'); 
    }

    // 初期化処理
    init() {
        this.render();
    }
}

// ===== 開発ツール管理クラス =====
class DevTools {
    constructor() {
        this.container = document.getElementById("devToolsContainer");
    }

    // ツールをレンダリングする（devicon / fontawesome / original 対応）
    render() {
        this.container.innerHTML = '';

        devTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.setAttribute('data-tool-id', tool.id);
            toolCard.addEventListener('click', () => this.showModal(tool.id));

            // アイコンを生成
            const iconDiv = document.createElement('div');
            iconDiv.className = 'tool-icon';
            iconDiv.innerHTML = createIconElement(tool.iconType, tool.icon, tool.name);

            // 名前を表示
            const name = document.createElement('h3');
            name.textContent = tool.name;

            toolCard.appendChild(iconDiv);
            toolCard.appendChild(name);
            this.container.appendChild(toolCard);
        });
    }

    // ツールのモーダルを表示する
    showModal(toolId) {
        const tool = devTools.find(t => t.id === toolId);
        if (!tool) return;

        const lang = currentLang;

        // モーダルにアイコンを表示
        const modalIcon = document.getElementById('modalSkillIcon');
        modalIcon.innerHTML = createIconElement(tool.iconType, tool.icon, tool.name);
        
        // タイトルを設定
        document.getElementById('modalSkillName').textContent = tool.name;

        // 熟練度バーを非表示
        document.getElementById('modalProficiencySection').style.display = 'none';

        document.getElementById('modalExperienceContent').textContent = tool.details[lang].summary;
        document.getElementById('modalProficiencyLevelText').textContent = tool.details[lang].frequency;
        
        // モーダルを表示
        document.getElementById('skillDetailModal').classList.add('visible');
        document.body.classList.add('modal-open'); 
    }

    // 初期化処理
    init() {
        this.render();
    }
}

// ===== グローバルに公開するための関数 =====
function renderSkills() {
    if (window.skillsInstance) {
        window.skillsInstance.render();
    }
}

function renderDevTools() {
    if (window.devToolsInstance) {
        window.devToolsInstance.render();
    }
}

// createIconElement関数をグローバルに公開（他のモジュールからも使えるように）
window.createIconElement = createIconElement;