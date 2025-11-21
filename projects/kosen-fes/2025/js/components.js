// components.js - 高専祭2025 各セクションのコンポーネント
// ============================================

// ===== プロジェクトセクション =====
class ProjectSection {
    constructor() {
        this.container = document.getElementById('projectSection');
    }
    
    render() {
        if (!this.container) return;
        
        const data = projectData;
        const lang = currentLang;
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionProject')}</h2>
                <p class="section-description">${t('sectionProjectDesc')}</p>
            </div>
            
            <div class="project-showcase">
                <div class="project-media">
                    <span class="demo-badge">DEMO</span>
                    <img src="${data.demoMedia}" alt="${data.name} Demo" loading="lazy">
                </div>
                
                <div class="project-info">
                    <h3>${data.name}</h3>
                    <p class="project-description">${data.description[lang]}</p>
                    
                    <div class="project-meta">
                        <div class="meta-item">
                            <i class="fas fa-clock"></i>
                            <span>${t('projectDuration')}: ${data.duration[lang]}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-code"></i>
                            <span>${t('projectTech')}: ${data.technologies.join(', ')}</span>
                        </div>
                    </div>
                    
                    <div class="project-tags">
                        ${data.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                    </div>
                    
                    <div class="project-links">
                        <a href="${data.githubUrl}" target="_blank" rel="noopener" class="btn btn-primary">
                            <i class="fab fa-github"></i> ${t('viewOnGithub')}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }
}

// ===== チームセクション =====
class TeamSection {
    constructor() {
        this.container = document.getElementById('teamSection');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        // メンバーカードを生成
        const memberCards = teamMembers.map(member => {
            const avatarContent = member.avatar 
                ? `<img src="${member.avatar}" alt="${member.name}">`
                : `<i class="fas fa-user"></i>`;
            
            const githubLink = member.github 
                ? `<a href="https://github.com/${member.github}" target="_blank" rel="noopener" class="member-github">
                     <i class="fab fa-github"></i> @${member.github}
                   </a>`
                : '';
            
            return `
                <div class="member-card">
                    <div class="member-avatar">${avatarContent}</div>
                    <div class="member-name">${member.name}</div>
                    <div class="member-role">${member.role[lang]}</div>
                    ${githubLink}
                </div>
            `;
        }).join('');
        
        // 協力者リストを生成
        const collabList = collaborators.map(c => 
            `<span class="acknowledgment-tag">${c.name[lang]} (${c.contribution[lang]})</span>`
        ).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionTeam')}</h2>
                <p class="section-description">${t('sectionTeamDesc')}</p>
            </div>
            
            <div class="team-grid">${memberCards}</div>
            
            <div style="margin-top: 30px; text-align: center;">
                <h4 style="margin-bottom: 15px; color: var(--text-secondary);">
                    <i class="fas fa-handshake" style="color: var(--accent);"></i> ${t('collaborators')}
                </h4>
                <div class="acknowledgments-list">${collabList}</div>
            </div>
        `;
    }
}

// ===== タイムラインセクション =====
class TimelineSection {
    constructor() {
        this.container = document.getElementById('timelineSection');
        this.observer = null;
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        // タイムラインアイテムを生成
        const timelineItems = timelineData.map(item => `
            <div class="timeline-item ${item.position}" data-id="${item.id}">
                <span class="timeline-date">${item.date}</span>
                <div class="timeline-content">
                    <h4>${item.title[lang]}</h4>
                    <p>${item.description[lang]}</p>
                </div>
            </div>
        `).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionTimeline')}</h2>
                <p class="section-description">${t('sectionTimelineDesc')}</p>
            </div>
            
            <div class="timeline">${timelineItems}</div>
        `;
        
        // スクロールアニメーションを設定
        this.setupScrollAnimation();
    }
    
    // スクロールアニメーションの設定
    setupScrollAnimation() {
        if (this.observer) {
            this.observer.disconnect();
        }
        
        const items = document.querySelectorAll('.timeline-item');
        
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
        
        items.forEach(item => this.observer.observe(item));
    }
}

// ===== 来場者の声セクション =====
class TestimonialSection {
    constructor() {
        this.container = document.getElementById('testimonialSection');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        const cards = testimonialData.map(item => `
            <div class="testimonial-card">
                <p class="testimonial-content">${item.content[lang]}</p>
                <div class="testimonial-author">— ${item.author[lang]}</div>
            </div>
        `).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionTestimonials')}</h2>
                <p class="section-description">${t('sectionTestimonialsDesc')}</p>
            </div>
            
            <div class="testimonials-grid">${cards}</div>
        `;
    }
}

// ===== 振り返りセクション =====
class ReflectionSection {
    constructor() {
        this.container = document.getElementById('reflectionSection');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        const cards = reflectionData.map(item => `
            <div class="reflection-card">
                <div class="reflection-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <h4>${item.title[lang]}</h4>
                <p>${item.content[lang]}</p>
            </div>
        `).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionReflection')}</h2>
                <p class="section-description">${t('sectionReflectionDesc')}</p>
            </div>
            
            <div class="reflection-grid">${cards}</div>
        `;
    }
}

// ===== FAQセクション =====
class FaqSection {
    constructor() {
        this.container = document.getElementById('faqSection');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        const items = faqData.map(item => `
            <div class="faq-item" data-id="${item.id}">
                <button class="faq-question">
                    <span>${item.question[lang]}</span>
                    <i class="fas fa-chevron-down faq-icon"></i>
                </button>
                <div class="faq-answer">
                    <div class="faq-answer-content">${item.answer[lang]}</div>
                </div>
            </div>
        `).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionFaq')}</h2>
                <p class="section-description">${t('sectionFaqDesc')}</p>
            </div>
            
            <div class="faq-list">${items}</div>
        `;
        
        // FAQのアコーディオン機能を設定
        this.setupAccordion();
    }
    
    // アコーディオン機能の設定
    setupAccordion() {
        const questions = document.querySelectorAll('.faq-question');
        
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // 他のアイテムを閉じる
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // クリックしたアイテムを開く/閉じる
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });
    }
}

// ===== その他の活動セクション =====
class OtherActivitiesSection {
    constructor() {
        this.container = document.getElementById('otherActivitiesSection');
        this.modal = document.getElementById('activityModal');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        const cards = otherActivitiesData.map(item => `
            <div class="activity-card" data-activity-id="${item.id}">
                <div class="activity-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <h4>${item.title[lang]}</h4>
                <p>${item.shortDesc[lang]}</p>
            </div>
        `).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionOtherActivities')}</h2>
                <p class="section-description">${t('sectionOtherActivitiesDesc')}</p>
            </div>
            
            <div class="activities-grid">${cards}</div>
        `;
        
        // カードクリックイベントを設定
        this.setupCardClick();
    }
    
    // カードクリックでモーダルを表示
    setupCardClick() {
        const cards = document.querySelectorAll('.activity-card');
        
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const activityId = card.getAttribute('data-activity-id');
                this.showModal(activityId);
            });
        });
    }
    
    // モーダルを表示
    showModal(activityId) {
        const activity = otherActivitiesData.find(a => a.id === activityId);
        if (!activity || !this.modal) return;
        
        const lang = currentLang;
        
        // モーダル内容を更新
        document.getElementById('activityModalTitle').textContent = activity.title[lang];
        document.getElementById('activityModalRole').innerHTML = 
            `<strong>${t('role')}:</strong> ${activity.role[lang]}`;
        document.getElementById('activityModalDesc').textContent = activity.fullDesc[lang];
        
        // モーダルを表示
        this.modal.classList.add('active');
        document.body.classList.add('modal-open');
    }
    
    // モーダルを閉じる
    closeModal() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    }
}

// ===== 技術解説セクション =====
class TechSection {
    constructor() {
        this.container = document.getElementById('techSection');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        
        // 技術解説の内容（日英対応）
        const techContent = {
            ja: {
                overview: "Hisayoshiは、Pythonのゲームライブラリ「pygame」を使用して開発されました。シンプルながらも拡張性のある設計を心がけました。",
                features: [
                    "pygameによる2Dゲーム描画とイベント処理",
                    "衝突判定によるプラットフォームの実装",
                    "キャラクターアニメーションの制御",
                    "効果音・BGMの再生機能",
                    "スコアシステムとゲームオーバー処理"
                ]
            },
            en: {
                overview: "Hisayoshi was developed using pygame, a Python game library. We aimed for a simple yet extensible design.",
                features: [
                    "2D game rendering and event handling with pygame",
                    "Platform implementation using collision detection",
                    "Character animation control",
                    "Sound effects and BGM playback",
                    "Score system and game over handling"
                ]
            }
        };
        
        const features = techContent[lang].features.map(f => `
            <li><i class="fas fa-check-circle"></i> ${f}</li>
        `).join('');
        
        this.container.innerHTML = `
            <div class="section-header">
                <h2 class="section-title">${t('sectionTech')}</h2>
                <p class="section-description">${t('sectionTechDesc')}</p>
            </div>
            
            <div class="tech-explanation">
                <h4><i class="fas fa-cogs"></i> ${lang === 'ja' ? '技術概要' : 'Technical Overview'}</h4>
                <p style="color: var(--text-secondary); margin-bottom: 20px;">
                    ${techContent[lang].overview}
                </p>
                
                <h4><i class="fas fa-list-check"></i> ${lang === 'ja' ? '主な機能' : 'Key Features'}</h4>
                <ul class="tech-list">${features}</ul>
            </div>
        `;
    }
}

// ===== 謝辞セクション =====
class AcknowledgmentsSection {
    constructor() {
        this.container = document.getElementById('acknowledgmentsSection');
    }
    
    render() {
        if (!this.container) return;
        
        const lang = currentLang;
        const data = acknowledgmentsData;
        
        const tags = data.tags[lang].map(tag => 
            `<span class="acknowledgment-tag">${tag}</span>`
        ).join('');
        
        this.container.innerHTML = `
            <div class="acknowledgments">
                <h3 class="acknowledgments-title">
                    <i class="fas fa-heart" style="color: #e74c3c;"></i> ${t('sectionAcknowledgments')}
                </h3>
                <p class="acknowledgments-content">${data.message[lang]}</p>
                <div class="acknowledgments-list">${tags}</div>
            </div>
        `;
    }
}