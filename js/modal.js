// modal.js - モーダル機能モジュール

// モーダル管理クラス
class Modal {
    constructor() {
        this.modal = document.getElementById('skillDetailModal');
        this.closeBtn = document.getElementById('modalCloseBtn');
        this.init();
    }

    // モーダルを表示する
    show() {
        this.modal.classList.add('visible');
        document.body.classList.add('modal-open');
    }

    // モーダルを非表示にする
    hide() {
        this.modal.classList.remove('visible');
        document.body.classList.remove('modal-open');
    }

    // イベントリスナーを初期化する
    init() {
        // 閉じるボタンのクリックイベント
        this.closeBtn.addEventListener('click', () => {
            this.hide();
        });

        // モーダルの背景をクリックしたら閉じる
        this.modal.addEventListener('click', (e) => {
            if (e.target.id === 'skillDetailModal') {
                this.hide();
            }
        });
    }
}

// グローバルに公開するための関数
function hideSkillModal() {
    if (window.modalInstance) {
        window.modalInstance.hide();
    }
}