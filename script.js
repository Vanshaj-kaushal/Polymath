const quotes = [
  { text: "Learning never exhausts the mind.", attr: "Leonardo da Vinci" },
  { text: "The noblest pleasure is the joy of understanding.", attr: "Leonardo da Vinci" },
  { text: "I have no special talent. I am only passionately curious.", attr: "Albert Einstein" },
  { text: "An investment in knowledge pays the best interest.", attr: "Benjamin Franklin" },
  { text: "The more I read, the more I acquire, the more certain I am that I know nothing.", attr: "Voltaire" },
  { text: "Employ your time in improving yourself by other men's writings.", attr: "Socrates" },
  { text: "Wonder is the beginning of wisdom.", attr: "Socrates" },
  { text: "He who loves practice without theory is like the sailor who boards ship without a rudder.", attr: "Leonardo da Vinci" },
];
let qIdx = 0;
function cycleQuote() {
  qIdx = (qIdx + 1) % quotes.length;
  document.getElementById('quote-text').textContent = quotes[qIdx].text;
  document.getElementById('quote-attr').textContent = '— ' + quotes[qIdx].attr;
}

const schedule = [
  { time: "6:30am", discipline: "science", label: "Science / Math study", detail: "Khan Academy lesson · textbook chapter · 5 min journal entry on what you learned", duration: "45 min" },
  { time: "7:15am", discipline: null, label: "Physical practice", detail: "Yoga, calisthenics, martial arts, or sport · vary weekly", duration: "30 min" },
  { time: "7:45am", discipline: null, label: "Breakfast & reading", detail: "Read 10 pages of a history or philosophy book while eating", duration: "20 min" },
  { time: "12:30pm", discipline: "arts", label: "Arts practice", detail: "Drawing, music, writing, or photography · deliberate practice on one skill", duration: "30 min" },
  { time: "7:00pm", discipline: "history", label: "History & humanities", detail: "Podcast, documentary, or reading · link to current events", duration: "30 min" },
  { time: "7:30pm", discipline: "math", label: "Logic / problem sets", detail: "Brilliant.org puzzle · code challenge · proof writing", duration: "20 min" },
  { time: "9:00pm", discipline: null, label: "Reflection journal", detail: "What connected today? What confused you? What will you explore tomorrow?", duration: "10 min" },
];

const discColors = {
  science: "#3A7BD5",
  arts: "#C2416A",
  history: "#8B5E3C",
  math: "#2E8B57",
  physical: "#7B3FA0",
};

const disciplines = [
  {
    id: "science",
    name: "Science",
    color: "#3A7BD5",
    resources: [
      { type: "Course", name: "Understanding Einstein (Coursera)", sub: "Stanford · free to audit · 8 weeks", url: "https://www.coursera.org/learn/einstein-relativity" },
      { type: "YouTube", name: "Veritasium", sub: "Deep physics & science misconceptions", url: "https://youtube.com/@veritasium" },
      { type: "YouTube", name: "Kurzgesagt", sub: "Beautiful animated science explainers", url: "https://youtube.com/@kurzgesagt" },
      { type: "Khan", name: "Physics · Biology · Chemistry", sub: "Khan Academy — full curriculum, free", url: "https://www.khanacademy.org/science" },
      { type: "Course", name: "Introduction to Biology (Coursera)", sub: "MIT · free to audit · self-paced", url: "https://www.coursera.org/learn/introduction-biology" },
    ]
  },
  {
    id: "arts",
    name: "Arts",
    color: "#C2416A",
    resources: [
      { type: "Course", name: "Drawing Nature, Science & Culture (Coursera)", sub: "U of Newcastle · free to audit", url: "https://www.coursera.org/learn/drawing" },
      { type: "YouTube", name: "Proko", sub: "Anatomy & figure drawing for all levels", url: "https://youtube.com/@proko" },
      { type: "YouTube", name: "Adam Neely", sub: "Music theory — deep and delightful", url: "https://youtube.com/@adamneely" },
      { type: "Course", name: "Developing Your Musicianship (Coursera)", sub: "Berklee Online · free to audit · 6 weeks", url: "https://www.coursera.org/learn/develop-your-musicianship" },
      { type: "Free", name: "Smarthistory.org", sub: "World's greatest open art history textbook", url: "https://smarthistory.org" },
    ]
  },
  {
    id: "history",
    name: "History",
    color: "#8B5E3C",
    resources: [
      { type: "YouTube", name: "Crash Course History", sub: "World history from John & Hank Green", url: "https://youtube.com/@crashcourse" },
      { type: "YouTube", name: "Toldinstone", sub: "Ancient Rome — Professor Garrett Ryan", url: "https://youtube.com/@toldinstone" },
      { type: "Course", name: "A History of the World Since 1300 (Coursera)", sub: "Princeton · free to audit · 12 weeks", url: "https://www.coursera.org/learn/history-of-the-world" },
      { type: "Free", name: "Internet History Sourcebooks", sub: "Primary sources across all eras, Fordham Univ.", url: "https://sourcebooks.fordham.edu" },
      { type: "Podcast", name: "Revolutions — Mike Duncan", sub: "Deep narrative history of every revolution", url: "https://thehistoryofrome.typepad.com/revolutions_podcast/" },
    ]
  },
  {
    id: "math",
    name: "Math & Logic",
    color: "#2E8B57",
    resources: [
      { type: "Khan", name: "Calculus · Statistics · Linear Algebra", sub: "Khan Academy — full curriculum, free", url: "https://www.khanacademy.org/math" },
      { type: "Course", name: "Introduction to Logic (Coursera)", sub: "Stanford · free to audit · 10 weeks", url: "https://www.coursera.org/learn/logic-introduction" },
      { type: "YouTube", name: "3Blue1Brown", sub: "Visual intuition for deep mathematics", url: "https://youtube.com/@3blue1brown" },
      { type: "Free", name: "Brilliant.org", sub: "Interactive problem solving — free tier available", url: "https://brilliant.org" },
      { type: "YouTube", name: "Numberphile", sub: "Mathematicians talk about numbers", url: "https://youtube.com/@numberphile" },
    ]
  },
  {
    id: "physical",
    name: "Physical Skills",
    color: "#7B3FA0",
    resources: [
      { type: "YouTube", name: "Tom Merrick (Bodyweight Warrior)", sub: "Calisthenics & mobility — no equipment needed", url: "https://youtube.com/@BodyweightWarrior" },
      { type: "Course", name: "Science of Exercise (Coursera)", sub: "University of Colorado · free to audit", url: "https://www.coursera.org/learn/science-exercise" },
      { type: "YouTube", name: "Yoga With Adriene", sub: "30-day yoga journeys for all levels, free", url: "https://youtube.com/@yogawithadriene" },
      { type: "Free", name: "MovNat.com Blog", sub: "Natural movement philosophy & practice guides", url: "https://www.movnat.com/blog/" },
      { type: "YouTube", name: "Athlean-X", sub: "Evidence-based strength & injury prevention", url: "https://youtube.com/@athleanx" },
    ]
  },
];

const projects = [
  { week: 1, title: "The Observer's Log", desc: "Spend 7 days sketching one natural object (leaf, rock, cloud) in increasing detail. Research its scientific name, history of discovery, and mathematical patterns (Fibonacci?). Present findings in a single illustrated page.", skills: ["Science", "Arts", "Math"], diff: "Beginner" },
  { week: 2, title: "Timeline of a Breakthrough", desc: "Pick a scientific discovery (penicillin, electricity, calculus). Create a visual timeline showing its historical context, the logic of the discovery, and a short illustrated portrait of its inventor.", skills: ["History", "Science", "Arts"], diff: "Beginner" },
  { week: 3, title: "Move Like an Athlete, Think Like a Coach", desc: "Design a one-week training plan using principles of periodization. Research the history of athletic training. Calculate your training load in sets × reps × weight and graph progress.", skills: ["Physical", "Math", "History"], diff: "Beginner" },
  { week: 4, title: "The Music of Mathematics", desc: "Explore the mathematical ratios behind musical harmony. Play three chords using free software (Chrome Music Lab). Explain the physics of sound waves and why harmony feels good to the human ear.", skills: ["Math", "Arts", "Science"], diff: "Intermediate" },
  { week: 5, title: "Reconstruct a Historical Recipe", desc: "Find a food recipe from 500+ years ago. Cook it. Research the trade routes that made the ingredients available. Write a short essay on how this dish reflects the politics of its era.", skills: ["History", "Science", "Physical"], diff: "Intermediate" },
  { week: 6, title: "Teach Something in 5 Minutes", desc: "Pick any concept from your studies and create a 5-minute video or illustrated guide teaching it to a beginner. Feynman's rule: if you can't explain it simply, you don't understand it yet.", skills: ["All disciplines"], diff: "Intermediate" },
  { week: 7, title: "Physical Geometry", desc: "Study the geometry of a physical discipline (yoga poses as vectors, martial arts as lever physics, dance as rotational motion). Create a diagram of three movements with their geometric properties labeled.", skills: ["Physical", "Math", "Arts"], diff: "Advanced" },
  { week: 8, title: "One Invention, Five Perspectives", desc: "Choose an invention (the printing press, the microchip, the compass). Write 500 words each from the perspective of: a scientist, an artist, a historian, a mathematician, and an athlete. What did it change for each?", skills: ["All disciplines"], diff: "Advanced" },
  { week: 9, title: "Your Polymath Manifesto", desc: "Write a 1,000-word personal manifesto on your intellectual identity. What are the disciplines you're building? What unique connections have you discovered? What will you create in the next 90 days that nobody else could?", skills: ["All disciplines"], diff: "Advanced" },
];

const smart = [
  { letter: "S", word: "Specific", template: "I will complete one Khan Academy unit on differential calculus by Day 30." },
  { letter: "M", word: "Measurable", template: "I will track daily practice with a check-in log, aiming for 25 of 30 days completed." },
  { letter: "A", word: "Achievable", template: "I will dedicate 45 minutes each morning — no longer — to focused study." },
  { letter: "R", word: "Relevant", template: "This skill connects to my goal of understanding physics at a deeper mathematical level." },
];

const milestones = [
  { text: "Complete a full week of all five disciplines without skipping", day: "Day 7", done: false },
  { text: "Finish your first weekly synthesis project", day: "Day 14", done: false },
  { text: "Fill one full journal (or 30 entries)", day: "Day 30", done: false },
  { text: "Identify one cross-discipline insight and write about it", day: "Day 35", done: false },
  { text: "Teach someone else a concept from your studies", day: "Day 45", done: false },
  { text: "Complete 3 synthesis projects", day: "Day 60", done: false },
  { text: "Notice a pattern linking at least 3 disciplines", day: "Day 65", done: false },
  { text: "Create original work using 3+ disciplines", day: "Day 80", done: false },
  { text: "Write your Polymath Manifesto", day: "Day 90", done: false },
];

const progressBars = [
  { name: "Science", color: "#3A7BD5", pct: 12 },
  { name: "Arts", color: "#C2416A", pct: 8 },
  { name: "History", color: "#8B5E3C", pct: 15 },
  { name: "Math & Logic", color: "#2E8B57", pct: 5 },
  { name: "Physical Skills", color: "#7B3FA0", pct: 20 },
];

let activeDiscipline = "science";
let activeWeek = 1;
let milestoneState = milestones.map(m => m.done);

function switchTab(tab) {
  document.querySelectorAll('.nav-tab').forEach((t, i) => {
    const tabs = ['overview','schedule','disciplines','projects','progress'];
    t.classList.toggle('active', tabs[i] === tab);
  });
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.getElementById('panel-' + tab).classList.add('active');
}

function renderSchedule() {
  const list = document.getElementById('schedule-list');
  list.innerHTML = schedule.map(s => {
    const color = s.discipline ? discColors[s.discipline] : '#888';
    return `<div class="time-block">
      <div class="time-col">${s.time}</div>
      <div class="disc-dot" style="background:${color};margin-top:5px;"></div>
      <div class="block-info">
        <div class="block-title">${s.label}</div>
        <div class="block-detail">${s.detail}</div>
      </div>
      <div class="block-duration">${s.duration}</div>
    </div>`;
  }).join('');
}

function renderDisciplines() {
  const pills = document.getElementById('disc-pills');
  pills.innerHTML = disciplines.map(d => `
    <div class="disc-pill ${d.id === activeDiscipline ? 'active' : ''}"
      style="background:${d.color}22;color:${d.color};"
      data-id="${d.id}">${d.name}</div>
  `).join('');

  const d = disciplines.find(x => x.id === activeDiscipline);
  const typeColors = { Course: '#3A7BD5', YouTube: '#C2416A', Khan: '#2E8B57', Free: '#8B5E3C', Podcast: '#7B3FA0' };
  const content = document.getElementById('disc-content');
  content.innerHTML = `
    <div class="disc-section">
      <div class="disc-section-header" style="background:${d.color}18;color:${d.color};">Curated free resources · ${d.name}</div>
      <div class="resource-list">
        ${d.resources.map(r => `
          <div class="resource-item">
            <span class="resource-type" style="background:${(typeColors[r.type]||'#888')}18;color:${typeColors[r.type]||'#888'};">${r.type}</span>
            <div>
              <div class="resource-name" data-url="${r.url}">${r.name}</div>
              <div class="resource-sub">${r.sub}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  // Add event listeners
  document.querySelectorAll('.disc-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const id = pill.getAttribute('data-id');
      setDiscipline(id);
    });
  });

  document.querySelectorAll('.resource-name').forEach(name => {
    name.addEventListener('click', () => {
      const url = name.getAttribute('data-url');
      window.open(url, '_blank');
    });
  });
}

function setDiscipline(id) {
  activeDiscipline = id;
  renderDisciplines();
}

function renderProjects() {
  const select = document.getElementById('week-select');
  const weeks = [1,2,3,4,5,6,7,8,9];
  select.innerHTML = weeks.map(w => `
    <button class="week-btn ${w === activeWeek ? 'active' : ''}" data-week="${w}">Week ${w}</button>
  `).join('');

  const cards = document.getElementById('project-cards');
  cards.innerHTML = projects.map(p => {
    const diffColors = { Beginner: '#2E8B57', Intermediate: '#C9A84C', Advanced: '#C2416A' };
    const dc = diffColors[p.diff] || '#888';
    return `<div class="project-card ${p.week === activeWeek ? 'active' : ''}" id="project-week-${p.week}">
      <div class="project-card-top">
        <div class="project-title">${p.title}</div>
        <div class="project-diff" style="background:${dc}18;color:${dc};">${p.diff}</div>
      </div>
      <div class="project-desc">${p.desc}</div>
      <div class="project-skills">
        ${p.skills.map(s => `<div class="skill-tag">${s}</div>`).join('')}
      </div>
    </div>`;
  }).join('');

  // Add event listeners
  document.querySelectorAll('.week-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const w = parseInt(btn.getAttribute('data-week'));
      setWeek(w, btn);
    });
  });
}

function setWeek(w, btn) {
  activeWeek = w;
  document.querySelectorAll('.project-card').forEach(card => card.classList.remove('active'));
  document.getElementById(`project-week-${w}`).classList.add('active');
  document.querySelectorAll('.week-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function renderProgress() {
  const smartG = document.getElementById('smart-grid');
  smartG.innerHTML = smart.map(s => `
    <div class="smart-card">
      <div class="smart-letter">${s.letter}</div>
      <div class="smart-word">${s.word}</div>
      <div class="smart-template">${s.template}</div>
    </div>
  `).join('');

  const bars = document.getElementById('progress-bars');
  bars.innerHTML = `<div style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:0.08em;color:var(--muted);margin-bottom:10px;">Discipline progress</div>` +
    progressBars.map(b => `
      <div class="progress-label-row">
        <div class="progress-disc-name">${b.name}</div>
        <div class="progress-pct">${b.pct}%</div>
      </div>
      <div class="progress-bar-bg">
        <div class="progress-bar-fill" style="width:${b.pct}%;background:${b.color};"></div>
      </div>
    `).join('');

  const ml = document.getElementById('milestone-list');
  ml.innerHTML = milestones.map((m, i) => `
    <div class="milestone-item ${milestoneState[i] ? 'done' : ''}" data-index="${i}">
      <div class="milestone-check ${milestoneState[i] ? 'done' : ''}"></div>
      <div class="milestone-text">${m.text}</div>
      <div class="milestone-day">${m.day}</div>
    </div>
  `).join('');

  // Add event listeners
  document.querySelectorAll('.milestone-item').forEach(item => {
    item.addEventListener('click', () => {
      const i = parseInt(item.getAttribute('data-index'));
      toggleMilestone(i);
    });
  });
}

function toggleMilestone(i) {
  milestoneState[i] = !milestoneState[i];
  renderProgress();
}

function openLink(url) {
  window.open(url, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  // Quote bar
  document.querySelector('.quote-bar').addEventListener('click', cycleQuote);

  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  // Initial renders
  renderSchedule();
  renderDisciplines();
  renderProjects();
  renderProgress();
});