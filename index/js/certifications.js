// certifications.js - 資格機能モジュール

// 資格管理クラス
class Certifications {
    constructor() {
        this.container = document.getElementById("certificationsContainer");
    }

    // 資格をレンダリングする
    render() {
        this.container.innerHTML = "";

        certificationsData.forEach(cert => {
            const certCard = document.createElement('div');
            certCard.className = 'certification-card';
            certCard.setAttribute('data-cert-id', cert.id);

            // 資格名（大きく表示）
            const name = document.createElement('div');
            name.className = 'certification-name';
            name.textContent = cert.name[currentLang];

            // 運営団体（小さく表示）
            const organization = document.createElement('div');
            organization.className = 'certification-organization';
            organization.textContent = cert.organization[currentLang];

            // 取得年月日（最下部に表示）
            const date = document.createElement('div');
            date.className = 'certification-date';
            date.textContent = cert.date;

            certCard.appendChild(name);
            certCard.appendChild(organization);
            certCard.appendChild(date);

            this.container.appendChild(certCard);
        });
    }

    // 初期化処理
    init() {
        this.render();
    }
}

// グローバルに公開するための関数
function renderCertifications() {
    if (window.certificationsInstance) {
        window.certificationsInstance.render();
    }
}