const $ = s => document.querySelector(s), esc = s => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
let lang = 'en';
const localized = (item, key) => lang === 'ar' && item.ar?.[key] !== undefined ? item.ar[key] : item[key];
function skillCard(x) { return `<article class="card"><div class="icon">${esc(x.icon)}</div><h3>${esc(localized(x, 'title'))}</h3><p>${esc(localized(x, 'description'))}</p><div class="tags">${localized(x, 'tags').map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div></article>` }
function render() {
    const practice = portfolioData.skills.filter(x => x.status === 'practice'), learning = portfolioData.skills.filter(x => x.status === 'learning');
    $('#skillsPractice').innerHTML = practice.map(skillCard).join(''); $('#skillsLearning').innerHTML = learning.map(skillCard).join('');
    $('#projectsGrid').innerHTML = portfolioData.projects.map(x => `<article class="card project-card">${x.image ? `<a class="project-image-link" href="${esc(x.image)}" target="_blank" aria-label="${esc(lang === 'ar' ? `فتح صورة ${localized(x, 'title')}` : `Open ${localized(x, 'title')} image`)}"><img class="project-image" src="${esc(x.image)}" alt="${esc(lang === 'ar' ? `معاينة مشروع ${localized(x, 'title')}` : `${localized(x, 'title')} project preview`)}" loading="lazy"></a>` : ''}<span class="project-num">${esc(x.number)}</span><span class="project-type">${esc(localized(x, 'type'))}</span><h3>${esc(localized(x, 'title'))}</h3><p>${esc(localized(x, 'description'))}</p><div class="tags">${localized(x, 'tags').map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div><div class="links">${(localized(x, 'links') || x.links || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noreferrer">${esc(l.label)} ↗</a>`).join('')}</div></article>`).join('');
    $('#experienceList').innerHTML = portfolioData.experience.map(x => `<article><small>${esc(localized(x, 'date'))}</small><h3>${esc(localized(x, 'title'))}</h3><p><b>${esc(localized(x, 'place'))}</b></p><p>${esc(localized(x, 'description'))}</p></article>`).join('');
    $('#educationList').innerHTML = portfolioData.education.map(x => `<article><small>${esc(localized(x, 'date'))}</small><h3>${esc(localized(x, 'title'))}</h3><p><b>${esc(localized(x, 'place'))}</b></p><p>${esc(localized(x, 'description'))}</p></article>`).join('');
    $('#certificatesList').innerHTML = portfolioData.certificates.map(x => `<article class="card">${x.image ? `<a href="${esc(x.image)}" target="_blank" rel="noreferrer"><img class="certificate-image" src="${esc(x.image)}" alt="${esc(localized(x, 'title'))}"></a>` : ''}<div class="icon">${esc(x.icon)}</div><h3>${esc(localized(x, 'title'))}</h3><p><b>${esc(localized(x, 'issuer'))}</b></p><p>${esc(localized(x, 'description'))}</p>${x.url ? `<p class="credential-link"><a href="${esc(x.url)}" target="_blank" rel="noreferrer">${esc(localized(x, 'label') || (lang === 'ar' ? 'عرض الشهادة' : 'View credential'))} ↗</a></p>` : ''}${x.file ? `<p><a href="${esc(x.file)}" target="_blank" rel="noreferrer">${lang === 'ar' ? 'فتح ملف الشهادة' : 'Open certificate file'} ↗</a></p>` : ''}</article>`).join('');
    renderContact();
}
// Contact details are controlled in portfolio-data.js; replace placeholders before publishing.
const contact = portfolioData.contact || {};
const contactBox = document.querySelector('#contact .wrap');
function renderContact() {
    if (!contactBox) return;
    let details = contactBox.querySelector('.contact-details');
    if (!details) {
        details = document.createElement('div');
        details.className = 'contact-details';
        contactBox.appendChild(details);
    }
    details.innerHTML = `<a href="mailto:${esc(contact.email || '')}">✉ ${esc(contact.email || (lang === 'ar' ? 'أضف بريدك الإلكتروني في portfolio-data.js' : 'Add your email in portfolio-data.js'))}</a><a href="tel:${esc((contact.phone || '').replace(/[^+0-9]/g, ''))}">☎ ${esc(contact.phone || (lang === 'ar' ? 'أضف رقم هاتفك في portfolio-data.js' : 'Add your phone in portfolio-data.js'))}</a><span>⌖ ${esc(lang === 'ar' ? contact.locationAr || contact.location || '' : contact.location || '')}</span>`;
}
render(); $('#year').textContent = new Date().getFullYear();
// Theme toggle: dark mode is available immediately and the preference is remembered.
const themeToggle = $('#themeToggle'); const savedTheme = localStorage.getItem('mazen-portfolio-theme'); if (savedTheme === 'dark') document.body.classList.add('dark-theme'); 
function updateThemeButton() {
    if (!themeToggle) return; 
    const dark = document.body.classList.contains('dark-theme'); 
    const label = dark ? { en: 'Light mode', ar: 'الوضع الفاتح' } : { en: 'Dark mode', ar: 'الوضع الداكن' };
    themeToggle.innerHTML = `${dark ? '☀' : '☾'} <span data-en="${label.en}" data-ar="${label.ar}">${label[lang]}</span>`;
    themeToggle.setAttribute('aria-pressed', String(dark));
 } 
 updateThemeButton();
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('mazen-portfolio-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light'); 
    updateThemeButton(); 
});
function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('[data-en]').forEach(element => {
        element.textContent = element.dataset[lang] || element.dataset.en;
    });
    document.querySelectorAll('[data-aria-label-en]').forEach(element => {
        element.setAttribute('aria-label', element.dataset[`ariaLabel${lang === 'en' ? 'En' : 'Ar'}`]);
    });
    document.querySelectorAll('[data-title-en]').forEach(element => {
        element.setAttribute('title', element.dataset[`title${lang === 'en' ? 'En' : 'Ar'}`]);
    });
    document.querySelectorAll('[data-alt-en]').forEach(element => {
        element.setAttribute('alt', element.dataset[`alt${lang === 'en' ? 'En' : 'Ar'}`]);
    });
    $('#lang').textContent = lang === 'en' ? 'العربية' : 'English';
}
$('#lang').onclick = () => { lang = lang === 'en' ? 'ar' : 'en'; applyLanguage(); render(); updateThemeButton() }; $('#menu').onclick = () => $('#nav').classList.toggle('open'); document.querySelectorAll('#nav a').forEach(a => a.onclick = () => $('#nav').classList.remove('open'));

// Subtle reveal-on-scroll animation with a safe fallback for browsers without IntersectionObserver.
const revealItems = document.querySelectorAll('.section,.hero,.card,.timeline article'); revealItems.forEach(el => el.classList.add('reveal')); if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target) } }), { threshold: .08 }); revealItems.forEach(el => observer.observe(el)); } else { revealItems.forEach(el => el.classList.add('visible')); }


// Project carousel: automatic horizontal movement, touch/swipe support, and manual controls.
const projectTrack = $('#projectsGrid'); let carouselTimer = null;
let carouselPaused = false;

function moveCarousel(direction = 1) {
    if (!projectTrack) return;
    const card = projectTrack.querySelector('.project-card');
    if (!card) return; 
    const distance = card.getBoundingClientRect().width + 24;
    const max = projectTrack.scrollWidth - projectTrack.clientWidth;
    if (max <= 4) return;
    if (direction > 0 && projectTrack.scrollLeft >= max - 5) projectTrack.scrollTo({ left: 0, behavior: 'smooth' });
    else if (direction < 0 && projectTrack.scrollLeft <= 5) projectTrack.scrollTo({ left: max, behavior: 'smooth' });
    else projectTrack.scrollBy({ left: direction * distance, behavior: 'smooth' });
}
function startCarousel() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
        if (!carouselPaused && !document.hidden) moveCarousel(1)
    }, 4200);
}
$('#projectsNext')?.addEventListener('click', () => moveCarousel(1));
$('#projectsPrev')?.addEventListener('click', () => moveCarousel(-1));
projectTrack?.addEventListener('mouseenter', () => carouselPaused = true); projectTrack?.addEventListener('mouseleave', () => carouselPaused = false);
projectTrack?.addEventListener('focusin', () => carouselPaused = true); projectTrack?.addEventListener('focusout', () => carouselPaused = false);
projectTrack?.addEventListener('touchstart', () => carouselPaused = true, { passive: true });
projectTrack?.addEventListener('touchend', () => { setTimeout(() => carouselPaused = false, 1800) }, { passive: true });
startCarousel();
