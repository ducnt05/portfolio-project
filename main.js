const body = document.body;
const progress = document.querySelector('.scroll-progress');
const backTop = document.querySelector('.back-top');
const glow = document.querySelector('.cursor-glow');

document.addEventListener('pointermove', (event) => {
  if (glow) { glow.style.left = `${event.clientX}px`; glow.style.top = `${event.clientY}px`; }
});
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
  backTop.classList.toggle('show', scrollY > 500);
}, { passive: true });
backTop.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
document.querySelector('.theme-toggle').addEventListener('click', () => body.classList.toggle('light'));
document.querySelector('.menu-toggle').addEventListener('click', () => document.querySelector('.nav-links').classList.toggle('open'));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelectorAll('.filter-tabs button').forEach((button) => button.addEventListener('click', () => {
  document.querySelectorAll('.filter-tabs button').forEach((item) => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  document.querySelectorAll('.project-card').forEach((card) => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));

const clock = document.querySelector('#clock');
const updateClock = () => { clock.textContent = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Ho_Chi_Minh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date()); };
updateClock();
setInterval(updateClock, 1000);

const visitorCount = document.querySelector('#visitor-count');
const visitorEndpoint = 'https://counterapi.com/api/ducnt.id.vn/view/homepage';
if (visitorCount) {
  window.updateVisitorCount = (data) => {
    visitorCount.textContent = Number(data.value).toLocaleString('en-US');
  };
  const visitorScript = document.createElement('script');
  visitorScript.src = `${visitorEndpoint}?callback=updateVisitorCount`;
  visitorScript.onerror = () => { visitorCount.textContent = '—'; };
  document.body.appendChild(visitorScript);
}
