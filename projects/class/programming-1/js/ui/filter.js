// filter.js - タグフィルタリング機能

let selectedTags = new Set();

/**
 * フィルター機能を初期化
 */
function initializeFilter() {
    const allTags = extractAllTags();
    renderFilterUI(allTags);
}

/**
 * 全課題からタグを抽出
 */
function extractAllTags() {
    const tagsSet = new Set();
    assignmentsData.forEach(assignment => {
        assignment.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
}

/**
 * フィルターUIをレンダリング
 */
function renderFilterUI(tags) {
    const container = document.querySelector('.container');
    
    const filterHTML = `
        <div class="filter-section">
            <div class="filter-header">
                <h3 class="filter-title">
                    <i class="fas fa-filter"></i>
                    ${getText('filterByTag')}
                </h3>
                <button class="filter-clear-btn" id="clearFilterBtn" style="display: none;">
                    <i class="fas fa-times"></i>
                    ${getText('clearFilter')}
                </button>
            </div>
            <div class="filter-tags" id="filterTags">
                ${tags.map(tag => `
                    <button class="filter-tag" data-tag="${tag}">
                        ${tag}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    const vscodeTabs = container.querySelector('.vscode-tabs');
    vscodeTabs.insertAdjacentHTML('beforebegin', filterHTML);
    
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.addEventListener('click', () => toggleTagFilter(btn));
    });
    
    document.getElementById('clearFilterBtn').addEventListener('click', clearAllFilters);
}

/**
 * タグフィルターを切り替え
 */
function toggleTagFilter(button) {
    const tag = button.getAttribute('data-tag');
    
    if (selectedTags.has(tag)) {
        selectedTags.delete(tag);
        button.classList.remove('active');
    } else {
        selectedTags.add(tag);
        button.classList.add('active');
    }
    
    updateClearButtonVisibility();
    applyFilters();
}

/**
 * すべてのフィルターをクリア
 */
function clearAllFilters() {
    selectedTags.clear();
    document.querySelectorAll('.filter-tag').forEach(btn => {
        btn.classList.remove('active');
    });
    updateClearButtonVisibility();
    applyFilters();
}

/**
 * クリアボタンの表示/非表示を更新
 */
function updateClearButtonVisibility() {
    const clearBtn = document.getElementById('clearFilterBtn');
    if (selectedTags.size > 0) {
        clearBtn.style.display = 'flex';
    } else {
        clearBtn.style.display = 'none';
    }
}

/**
 * フィルターを適用
 */
function applyFilters() {
    if (selectedTags.size === 0) {
        initializeTabs();
        const sortedAssignments = [...assignmentsData].sort((a, b) => b.number - a.number);
        if (sortedAssignments.length > 0) {
            selectTab(sortedAssignments[0].id);
        }
        return;
    }
    
    const filteredAssignments = assignmentsData.filter(assignment => {
        return Array.from(selectedTags).some(tag => assignment.tags.includes(tag));
    });
    
    const tabsContainer = document.getElementById('tabsContainer');
    tabsContainer.innerHTML = '';
    
    const sortedAssignments = [...filteredAssignments].sort((a, b) => b.number - a.number);
    
    sortedAssignments.forEach(assignment => {
        const tab = document.createElement('button');
        tab.className = 'tab';
        tab.setAttribute('data-id', assignment.id);
        tab.innerHTML = `
            <i class="fab fa-python"></i>
            <span>${getText('tabPrefix')} ${assignment.number}</span>
        `;
        
        tab.addEventListener('click', () => {
            selectTab(assignment.id);
        });
        
        tabsContainer.appendChild(tab);
    });
    
    if (sortedAssignments.length > 0) {
        selectTab(sortedAssignments[0].id);
    } else {
        document.getElementById('assignmentContent').innerHTML = `
            <div style="text-align: center; padding: 60px 20px; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 48px; margin-bottom: 20px; opacity: 0.5;"></i>
                <p style="font-size: 18px;">${getText('noMatchingAssignments')}</p>
            </div>
        `;
    }
}