// skills.js - スキル・ツール機能モジュール

// スキル管理クラス
class Skills {
    constructor() {
        this.container = document.getElementById("skillsContainer");
    }

    // スキルをレンダリングする（DeviconとFont Awesome両対応）
    render() {
        this.container.innerHTML = '';

        skillsData.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.setAttribute('data-skill-id', skill.id);
            skillCard.addEventListener('click', () => this.showModal(skill.id));

            // アイコンタイプに応じて適切なクラスを設定
            const icon = document.createElement('div');
            icon.className = 'skill-icon';
            
            if (skill.iconType === 'devicon') {
                // Deviconの場合
                icon.innerHTML = `<i class="${skill.icon} colored"></i>`;
            } else {
                // Font Awesomeの場合（デフォルト）
                icon.innerHTML = `<i class="fas ${skill.icon}"></i>`;
            }

            const name = document.createElement('h3');
            name.textContent = skill.name;

            skillCard.appendChild(icon);
            skillCard.appendChild(name);
            this.container.appendChild(skillCard);
        });
    }

    // スキルのモーダルを表示する
    showModal(skillId) {
        const skill = skillsData.find(s => s.id === skillId);
        if (!skill) return;

        const lang = currentLang;

        // アイコンを表示
        const modalIcon = document.getElementById('modalSkillIcon');
        if (skill.iconType === 'devicon') {
            modalIcon.innerHTML = `<i class="${skill.icon} colored"></i>`;
        } else {
            modalIcon.innerHTML = `<i class="fas ${skill.icon}"></i>`;
        }
        
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

// 開発ツール管理クラス
class DevTools {
    constructor() {
        this.container = document.getElementById("devToolsContainer");
    }

    // ツールをレンダリングする（DeviconとFont Awesome両対応）
    render() {
        this.container.innerHTML = '';

        devTools.forEach(tool => {
            const toolCard = document.createElement('div');
            toolCard.className = 'tool-card';
            toolCard.setAttribute('data-tool-id', tool.id);
            toolCard.addEventListener('click', () => this.showModal(tool.id));

            // アイコンタイプに応じて適切なクラスを設定
            const icon = document.createElement('div');
            icon.className = 'tool-icon';
            
            if (tool.iconType === 'devicon') {
                // Deviconの場合
                icon.innerHTML = `<i class="${tool.icon} colored"></i>`;
            } else {
                // Font Awesomeの場合
                icon.innerHTML = `<i class="${tool.icon}"></i>`;
            }

            const name = document.createElement('h3');
            name.textContent = tool.name;

            toolCard.appendChild(icon);
            toolCard.appendChild(name);
            this.container.appendChild(toolCard);
        });
    }

    // ツールのモーダルを表示する
    showModal(toolId) {
        const tool = devTools.find(t => t.id === toolId);
        if (!tool) return;

        const lang = currentLang;

        // アイコンを表示
        const modalIcon = document.getElementById('modalSkillIcon');
        if (tool.iconType === 'devicon') {
            modalIcon.innerHTML = `<i class="${tool.icon} colored"></i>`;
        } else {
            modalIcon.innerHTML = `<i class="${tool.icon}"></i>`;
        }
        
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

// グローバルに公開するための関数
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