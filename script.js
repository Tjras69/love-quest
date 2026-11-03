const quests = [
  {
    chapter:'CHAPTER 01 · MEDITATION',
    title:'MEDITATION',
    desc:'This will help you stabilize your mood.',
    task:'Take a calm place and close your eyes, try to focus on one sound for 5 minutes.',
    hint:'Akipio ny maso de mihainoa feo iray de mifantoka amzay pendant 5 min.'
  },
  {
    chapter:'CHAPTER 02 · RESPIRATION',
    title:'Respiration',
    desc:'Helps your brain while memorising.',
    task:'Try to inhale for 4 sec and exhale for 8 sec. 😌',
    hint:'Misintona rivotra 4sec de avotsitra pendant 8sec'
  },
  {
    chapter:'CHAPTER 03 · DUOLINGO',
    title:'Duolingo',
    desc:'stay motivated to impro you english.',
    task:'Try to use new words while speaking with me.',
    hint:'Manaova Duolingo dia aveo mampiasa vocabulaire vaovao ref mispeak tsika.'
  },
  {
    chapter:'CHAPTER 04 · DRINK WATER',
    title:'Drink water',
    desc:'It helps your body to cool down and helps your brain to avoid headache',
    task:'Drink 0.5L of water , muuahhh',
    hint:'Misotroa rano eoeo am 0.5L.'
  },
  {
    chapter:'CHAPTER 05 · FEEDBACK',
    title:'Feedback',
    desc:'about your day in english.',
    task:'Write your day and then read it then send it as a video to me so i can correct you , don\'t stress its okay to feel that. ',
    hint:'Soraty en anglais ny journée anla androany de vakio de raiso video de alefaso aty.'
  }
];

let current = 0;
let done = 0;

function startQuest() {
  document.getElementById('intro').classList.add('hidden');
  document.getElementById('quest').classList.remove('hidden');
  render();
}

function render() {
  const q = quests[current];
  document.getElementById('count').textContent = q.chapter;
  document.getElementById('title').textContent = q.title;
  document.getElementById('desc').textContent = q.desc;
  document.getElementById('task').textContent = q.task;
  document.getElementById('progressText').textContent = done + ' / 5 complete';
  document.getElementById('progressBar').style.width = (done / 5 * 100) + '%';
  document.getElementById('dots').innerHTML = quests.map((_, i) =>
    `<i class="${i === current ? 'active' : ''}"></i>`
  ).join('');
  document.getElementById('completeBtn').textContent =
    current === 4 ? 'Unlock my surprise ♡' : 'I did it ♡';
}

function completeQuest() {
  done = Math.max(done, current + 1);
  if (current < 4) {
    current++;
    render();
  } else {
    document.getElementById('quest').classList.add('hidden');
    document.getElementById('final').classList.remove('hidden');
    document.getElementById('progressBar').style.width = '100%';
    document.getElementById('footer').textContent =
      'The end of the quest. The beginning of another lovely day. ♡';
    celebrate();
  }
}

function hint() {
  const q = quests[current];
  const task = document.getElementById('task');
  task.textContent = q.hint;
  task.style.color = '#c05a82';
  setTimeout(() => {
    task.textContent = q.task;
    task.style.color = '';
  }, 4500);
}

function celebrate() {
  const box = document.getElementById('confetti');
  const bits = ['♡', '✦', '💗', '✧', '🌸'];
  for (let i = 0; i < 42; i++) {
    const s = document.createElement('span');
    s.textContent = bits[Math.floor(Math.random() * bits.length)];
    s.style.left = Math.random() * 100 + '%';
    s.style.animationDelay = Math.random() * 1.2 + 's';
    s.style.fontSize = (13 + Math.random() * 18) + 'px';
    box.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}

