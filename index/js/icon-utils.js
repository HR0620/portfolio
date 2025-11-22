// icon-utils.js - アイコン生成ユーティリティ
// ============================================
// すべてのモジュールで共通して使用するアイコン生成機能を提供します。
// 
// 対応するiconType:
//   - 'devicon'     : Deviconのクラス名（例: 'devicon-python-plain'）
//   - 'fontawesome' : Font Awesomeのクラス名（例: 'fa-solid fa-question'）
//   - 'original'    : 画像パス（例: './images/icon.png'）
//
// 使用例:
//   IconUtils.createIconHTML('devicon', 'devicon-python-plain', 'Python');
//   IconUtils.createIconHTML('fontawesome', 'fa-solid fa-code', 'Code');
//   IconUtils.createIconHTML('original', './images/icon.png', 'My Icon');

const IconUtils = {
    /**
     * アイコンのHTML文字列を生成する
     * @param {string} iconType - 'devicon' | 'fontawesome' | 'original'
     * @param {string} icon - クラス名または画像パス
     * @param {string} altText - alt属性用テキスト（originalの場合に使用）
     * @param {object} options - オプション設定
     * @param {string} options.size - サイズ（'small' | 'medium' | 'large' | 'xlarge' またはカスタムCSS）
     * @param {string} options.className - 追加のCSSクラス
     * @returns {string} HTML文字列
     */
    createIconHTML: function(iconType, icon, altText = '', options = {}) {
        // デフォルトオプション
        const defaultOptions = {
            size: 'medium',
            className: ''
        };
        const opts = { ...defaultOptions, ...options };
        
        // サイズに応じたスタイルを取得
        const sizeStyle = this.getSizeStyle(opts.size);
        
        // iconTypeに応じてHTMLを生成
        switch (iconType) {
            case 'original':
                // 画像パスの場合
                return `<img src="${icon}" alt="${altText}" class="icon-img ${opts.className}" style="${sizeStyle}">`;
            
            case 'devicon':
                // Deviconの場合（coloredクラスを追加）
                return `<i class="${icon} colored ${opts.className}" style="${sizeStyle}"></i>`;
            
            case 'fontawesome':
            default:
                // Font Awesomeの場合
                // 'fa-'を含む場合はそのまま、含まない場合は'fas'を追加
                const faClass = icon.includes('fa-') ? icon : `fas ${icon}`;
                return `<i class="${faClass} ${opts.className}" style="${sizeStyle}"></i>`;
        }
    },

    /**
     * サイズに応じたCSSスタイルを返す
     * @param {string} size - 'small' | 'medium' | 'large' | 'xlarge' またはカスタムCSS
     * @returns {string} CSSスタイル文字列
     */
    getSizeStyle: function(size) {
        const sizes = {
            'small': 'width: 24px; height: 24px; font-size: 24px; object-fit: contain;',
            'medium': 'width: 48px; height: 48px; font-size: 48px; object-fit: contain;',
            'large': 'width: 60px; height: 60px; font-size: 60px; object-fit: contain;',
            'xlarge': 'width: 80px; height: 80px; font-size: 80px; object-fit: contain;'
        };
        
        // 定義済みサイズの場合
        if (sizes[size]) {
            return sizes[size];
        }
        
        // カスタムサイズの場合（そのまま返す）
        return size || sizes['medium'];
    },

    /**
     * アイコンタイプを自動判定する
     * @param {string} iconValue - アイコンの値
     * @returns {string} 'devicon' | 'fontawesome' | 'original'
     */
    detectIconType: function(iconValue) {
        if (!iconValue) return 'fontawesome';
        
        // 画像パスの判定（拡張子を含む場合）
        if (iconValue.match(/\.(png|jpg|jpeg|gif|svg|webp)$/i) || iconValue.startsWith('./') || iconValue.startsWith('../') || iconValue.startsWith('/')) {
            return 'original';
        }
        
        // Deviconの判定
        if (iconValue.startsWith('devicon-')) {
            return 'devicon';
        }
        
        // Font Awesome（デフォルト）
        return 'fontawesome';
    },

    /**
     * データオブジェクトからアイコンHTMLを生成する（便利メソッド）
     * iconType が指定されていない場合は自動判定する
     * @param {object} data - { icon, iconType?, image?, name? } を含むオブジェクト
     * @param {object} options - createIconHTMLのオプション
     * @returns {string} HTML文字列
     */
    createFromData: function(data, options = {}) {
        // iconTypeが指定されていない場合は自動判定
        let iconType = data.iconType;
        let iconValue = data.icon || data.image;
        
        if (!iconType) {
            iconType = this.detectIconType(iconValue);
        }
        
        // originalの場合はimageを優先
        if (iconType === 'original' && data.image) {
            iconValue = data.image;
        }
        
        const altText = data.name || data.title || '';
        
        return this.createIconHTML(iconType, iconValue, altText, options);
    }
};

// グローバルに公開
window.IconUtils = IconUtils;