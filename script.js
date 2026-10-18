const $ = s => document.querySelector(s), esc = s => String(s || '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
function skillCard(x) { return `<article class="card"><div class="icon">${esc(x.icon)}</div><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><div class="tags">${x.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div></article>` }
function render() {
    const practice = portfolioData.skills.filter(x => x.status === 'practice'), learning = portfolioData.skills.filter(x => x.status === 'learning');
    $('#skillsPractice').innerHTML = practice.map(skillCard).join(''); $('#skillsLearning').innerHTML = learning.map(skillCard).join('');
    $('#projectsGrid').innerHTML = portfolioData.projects.map(x => `<article class="card project-card">${x.image ? `<a class="project-image-link" href="${esc(x.image)}" target="_blank" aria-label="Open ${esc(x.title)} image"><img class="project-image" src="${esc(x.image)}" alt="${esc(x.title)} project preview" loading="lazy"></a>` : ''}<span class="project-num">${esc(x.number)}</span><span class="project-type">${esc(x.type)}</span><h3>${esc(x.title)}</h3><p>${esc(x.description)}</p><div class="tags">${x.tags.map(t => `<span class="tag">${esc(t)}</span>`).join('')}</div><div class="links">${(x.links || []).map(l => `<a href="${esc(l.url)}" target="_blank" rel="noreferrer">${esc(l.label)} ↗</a>`).join('')}</div></article>`).join('');
    $('#experienceList').innerHTML = portfolioData.experience.map(x => `<article><small>${esc(x.date)}</small><h3>${esc(x.title)}</h3><p><b>${esc(x.place)}</b></p><p>${esc(x.description)}</p></article>`).join('');
    $('#educationList').innerHTML = portfolioData.education.map(x => `<article><small>${esc(x.date)}</small><h3>${esc(x.title)}</h3><p><b>${esc(x.place)}</b></p><p>${esc(x.description)}</p></article>`).join('');
    $('#certificatesList').innerHTML = portfolioData.certificates.map(x => `<article class="card">${x.image ? `<a href="${esc(x.image)}" target="_blank"><img class="certificate-image" src="${esc(x.image)}" alt="${esc(x.title)}"></a>` : ''}<div class="icon">${esc(x.icon)}</div><h3>${esc(x.title)}</h3><p><b>${esc(x.issuer)}</b></p><p>${esc(x.description)}</p>${x.url ? `<p class="credential-link"><a href="${esc(x.url)}" target="_blank" rel="noreferrer">${esc(x.label || 'View credential')} ↗</a></p>` : ''}${x.file ? `<p><a href="${esc(x.file)}" target="_blank">Open certificate file ↗</a></p>` : ''}</article>`).join('');
}
// Contact details are controlled in portfolio-data.js; replace placeholders before publishing.
const contact = portfolioData.contact || {};
const contactBox = document.querySelector('#contact .wrap');
if (contactBox) { const details = document.createElement('div'); details.className = 'contact-details'; details.innerHTML = `<a href="mailto:${esc(contact.email || '')}">✉ ${esc(contact.email || 'Add your email in portfolio-data.js')}</a><a href="tel:${esc((contact.phone || '').replace(/[^+0-9]/g, ''))}">☎ ${esc(contact.phone || 'Add your phone in portfolio-data.js')}</a><span>⌖ ${esc(contact.location || '')}</span>`; contactBox.appendChild(details); }
render(); $('#year').textContent = new Date().getFullYear();
// Theme toggle: dark mode is available immediately and the preference is remembered.
const themeToggle = $('#themeToggle'); const savedTheme = localStorage.getItem('mazen-portfolio-theme'); if (savedTheme === 'dark') document.body.classList.add('dark-theme'); 
function updateThemeButton() {
    if (!themeToggle) return; 
    const dark = document.body.classList.contains('dark-theme'); 
    themeToggle.innerHTML = dark ? '☀ <span data-en="Light mode" data-ar="الوضع الفاتح">Light mode</span>' : '☾ <span data-en="Dark mode" data-ar="الوضع الداكن">Dark mode</span>'; themeToggle.setAttribute('aria-pressed', String(dark));
 } 
 updateThemeButton();
themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('mazen-portfolio-theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light'); 
    updateThemeButton(); 
});
let lang = 'en'; $('#lang').onclick = () => { lang = lang === 'en' ? 'ar' : 'en'; document.documentElement.lang = lang; document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'; document.querySelectorAll('[data-en]').forEach(e => e.textContent = e.dataset[lang] || e.dataset.en); $('#lang').textContent = lang === 'en' ? 'العربية' : 'English' }; $('#menu').onclick = () => $('#nav').classList.toggle('open'); document.querySelectorAll('#nav a').forEach(a => a.onclick = () => $('#nav').classList.remove('open'));

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
