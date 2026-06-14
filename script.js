// ====== Data ======
const SKILLS = [
  { icon: '☕', name: 'Java', level: 'Primary language' },
  { icon: '🧮', name: 'DSA', level: 'Daily practice' },
  { icon: '🐍', name: 'Python', level: 'ML & scripting' },
  { icon: '🌐', name: 'HTML/CSS', level: 'Frontend basics' },
  { icon: '⚡', name: 'JavaScript', level: 'Web interactivity' },
  { icon: '🗄️', name: 'SQL', level: 'Databases' },
  { icon: '🔧', name: 'Git/GitHub', level: 'Version control' },
  { icon: '🧠', name: 'OOP', level: 'Design principles' },
];

const PROJECTS = [
  {
    title: 'DSA Java Solutions',
    desc: 'Curated repository of 100+ Data Structures & Algorithms problems solved in Java, following NeetCode roadmap with clean, commented solutions.',
    tags: ['Java', 'DSA', 'LeetCode'],
    link: 'https://leetcode.com/u/Kapil_7088/',
  },
  {
    title: 'Personal Portfolio',
    desc: 'Recruiter-focused, fully responsive portfolio built with HTML, CSS, and JavaScript. Glassmorphism UI, smooth animations, SEO optimized.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
  },
  {
    title: 'Java Mini Projects',
    desc: 'Collection of Java console & GUI mini-projects exploring OOP, file I/O, and collections — calculator, banking system, todo CLI.',
    tags: ['Java', 'OOP', 'Swing'],
    link: '#',
  },
];

const ACHIEVEMENTS = [
  { ico: '🧠', title: 'Amazon ML Summer School', desc: 'Applicant — exploring ML fundamentals & applied algorithms.' },
  { ico: '💯', title: '100+ DSA Problems', desc: 'Solved on LeetCode using Java with optimal approaches.' },
  { ico: '🚀', title: 'NeetCode Roadmap', desc: 'Actively following the structured interview-prep path.' },
  { ico: '🎓', title: 'B.Tech CSE 2028', desc: 'GL Bajaj Group of Institutions, Mathura.' },
];

// ====== Render ======
const skillsGrid = document.getElementById('skillsGrid');
SKILLS.forEach(s => {
  const el = document.createElement('div');
  el.className = 'skill-card reveal';
  el.innerHTML = `<div class="skill-icon">${s.icon}</div><h4>${s.name}</h4><p>${s.level}</p>`;
  skillsGrid.appendChild(el);
});

const projectsGrid = document.getElementById('projectsGrid');
PROJECTS.forEach(p => {
  const el = document.createElement('div');
  el.className = 'project-card reveal';
  el.innerHTML = `
    <h3>${p.title}</h3>
    <p class="desc">${p.desc}</p>
    <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <a class="link" href="${p.link}" target="_blank" rel="noreferrer">View project →</a>
  `;
  projectsGrid.appendChild(el);
});

const achGrid = document.getElementById('achievementsGrid');
ACHIEVEMENTS.forEach(a => {
  const el = document.createElement('div');
  el.className = 'ach-card reveal';
  el.innerHTML = `<div class="ico">${a.ico}</div><h4>${a.title}</h4><p>${a.desc}</p>`;
  achGrid.appendChild(el);
});

// ====== Loader ======
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 400);
});

// ====== Mobile Menu ======
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// ====== Reveal on Scroll ======
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ====== Contact Form (mailto) ======
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const [name, email, msg] = e.target.querySelectorAll('input, textarea');
  const subject = encodeURIComponent(`Portfolio contact from ${name.value}`);
  const body = encodeURIComponent(`${msg.value}\n\n— ${name.value} (${email.value})`);
  window.location.href = `mailto:pandeykapil7088@gmail.com?subject=${subject}&body=${body}`;
});

// ====== Year ======
document.getElementById('year').textContent = new Date().getFullYear();
