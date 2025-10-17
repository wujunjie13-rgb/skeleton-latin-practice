// 当前状态变量
let currentLang = 'zh';
let currentBoneIndex = 0;
let answerVisible = false;
let detailsVisible = false;
let currentMode = 'study'; // 'study' 或 'quiz'
let selectedQuizOption = null;
let currentRegion = 'all'; // 用于筛选骨骼区域
let quizStats = {
  total: 15,
  correct: 12,
  streak: 3
};

// DOM 元素
const boneImage = document.getElementById('bone-image');
const quizBoneImage = document.getElementById('quiz-bone-image');
const latinName = document.getElementById('latin-name');
const commonName = document.getElementById('common-name');
const finnishName = document.getElementById('finnish-name');
const boneCategory = document.getElementById('bone-category');
const answerHidden = document.getElementById('answer-hidden');
const answerShown = document.getElementById('answer-shown');
const showAnswerBtn = document.getElementById('show-answer');
const showDetailsBtn = document.getElementById('show-details');
const boneDetails = document.getElementById('bone-details');
const boneDescriptionText = document.getElementById('bone-description-text');
const newBoneBtn = document.getElementById('new-bone');
const saveBoneBtn = document.getElementById('save-bone');
const loadingIndicator = document.getElementById('loading-indicator');
const langZhBtn = document.getElementById('lang-zh');
const langEnBtn = document.getElementById('lang-en');
const studyModeBtn = document.getElementById('study-mode-btn');
const quizModeBtn = document.getElementById('quiz-mode-btn');
const studyMode = document.getElementById('study-mode');
const quizMode = document.getElementById('quiz-mode');
const quizOptions = document.getElementById('quiz-options');
const checkAnswerBtn = document.getElementById('check-answer');
const nextQuizBtn = document.getElementById('next-quiz');
const quizFeedback = document.getElementById('quiz-feedback');
const feedbackText = document.getElementById('feedback-text');
const correctAnswer = document.getElementById('correct-answer');
const answerTranslation = document.getElementById('answer-translation');
const finnishTranslation = document.getElementById('finnish-translation');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const pronounceBtn = document.getElementById('pronounce-btn');
const boneRegionBtns = document.querySelectorAll('.bone-region-btn');

// 统计数据元素
const learnedCountEl = document.getElementById('learned-count');
const todayCountEl = document.getElementById('today-count');
const savedCountEl = document.getElementById('saved-count');
const totalQuizzesEl = document.getElementById('total-quizzes');
const correctAnswersEl = document.getElementById('correct-answers');
const accuracyEl = document.getElementById('accuracy');

// 初始化图表
let progressChart;
function initChart() {
  const ctx = document.getElementById('progress-chart').getContext('2d');
  progressChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      datasets: [{
        label: translations[currentLang]['correct-answers'],
        data: [2, 3, 1, 0, 2, 2, 2],
        borderColor: '#FF7D00',
        backgroundColor: 'rgba(255, 125, 0, 0.1)',
        tension: 0.4,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

// 切换语言
function switchLanguage(lang) {
  if (lang === currentLang) return;
  
  // 更新当前语言
  currentLang = lang;
  
  // 更新语言按钮状态
  langZhBtn.classList.toggle('active', lang === 'zh');
  langEnBtn.classList.toggle('active', lang === 'en');
  
  // 更新页面文本
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // 更新图表
  if (progressChart) {
    progressChart.data.datasets[0].label = translations[currentLang]['correct-answers'];
    progressChart.data.labels = currentLang === 'zh' 
      ? ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    progressChart.update();
  }
  
  // 更新当前骨骼信息
  updateBoneInfo();
  
  // 如果在测验模式，更新选项文本
  if (currentMode === 'quiz') {
    updateQuizOptionsText();
  }
}

// 更新骨骼信息（根据当前语言）
function updateBoneInfo() {
  const bone = bones[currentBoneIndex];
  commonName.textContent = bone.common[currentLang];
  boneCategory.textContent = translations[currentLang][bone.category];
  boneDescriptionText.textContent = bone.description[currentLang];
  finnishName.textContent = bone.finnish;
}

// 显示当前骨骼（学习模式）
function displayCurrentBone() {
  const bone = bones[currentBoneIndex];
  boneImage.src = `https://picsum.photos/id/${bone.imageId}/800/600`;
  latinName.textContent = bone.latin;
  
  // 根据当前语言更新信息
  updateBoneInfo();
  
  // 重置答案显示状态
  answerVisible = false;
  detailsVisible = false;
  answerHidden.classList.remove('hidden');
  answerShown.classList.add('hidden');
  boneDetailsDetails.classList.add('hidden');
  showAnswerBtn.querySelector('span').textContent = translations[currentLang]["show-answer"];
  showDetailsBtn.querySelector('span').textContent = translations[currentLang]["show-details"];
}

// 显示答案
showAnswerBtn.addEventListener('click', () => {
  if (!answerVisible) {
    answerHidden.classList.add('hidden');
    answerShown.classList.remove('hidden');
    showAnswerBtn.querySelector('span').textContent = translations[currentLang]["show-answer"].replace("显示", "隐藏").replace("Show", "Hide");
    answerVisible = true;
  } else {
    answerHidden.classList.remove('hidden');
    answerShown.classList.add('hidden');
    showAnswerBtn.querySelector('span').textContent = translations[currentLang]["show-answer"];
    answerVisible = false;
  }
});

// 显示/隐藏详细说明
showDetailsBtn.addEventListener('click', () => {
  if (!detailsVisible) {
    boneDetails.classList.remove('hidden');
    showDetailsBtn.querySelector('span').textContent = translations[currentLang]["show-details"].replace("显示", "隐藏").replace("Show", "Hide");
    detailsVisible = true;
  } else {
    boneDetailsDetails.classList.add('hidden');
    showDetailsBtn.querySelector('span').textContent = translations[currentLang]["show-details"];
    detailsVisible = false;
  }
});

// 发音功能
pronounceBtn.addEventListener('click', () => {
  const bone = bones[currentBoneIndex];
  // 使用Web Speech API朗读拉丁语名称
  const utterance = new Speech SpeechSynthesisUtterance(bone.latin);
  utterance.lang = 'la'; // 拉丁语
  speechSynthesis.speak(utterance);
});

// 加载新骨骼
newBoneBtn.addEventListener('click', () => {
  loadNewBone();
});

// 加载新骨骼的通用函数
function loadNewBone() {
  // 显示加载状态
  loadingIndicatorIndicator.classList.remove('hidden');
  boneImage.style.opacity = '0.5';
  
  // 根据当前区域筛选骨骼
  let filteredBones = currentRegion === 'all' 
    ? bones 
    : bones.filter(bone => bone.category === currentRegion);
  
  // 随机选择一个不同的骨骼
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * filteredBones.length);
  } while (filteredBones[newIndex] === bones[currentBoneIndex] && filteredBones.length > 1);
  
  // 找到在原始数组中的索引
  currentBoneIndex = bones.indexOf(filteredBones[newIndex]);
  
  // 模拟加载延迟
  setTimeout(() => {
    if (currentMode === 'study') {
      displayCurrentBone();
    } else {
      setupQuiz();
    }
    // 隐藏加载状态
    loadingIndicator.classList.add('hidden');
    boneImage.style.opacity = '1';
    
    // 添加过渡动画
    boneImage.classList.add('scale-105');
    setTimeout(() => {
      boneImage.classList.remove('scale-105');
    }, 300);
  }, 600);
}

// 收藏功能
saveBoneBtn.addEventListener('click', () => {
  const isSaved = saveBoneBtn.classList.contains('text-accent');
  
  if (isSaved) {
    saveBoneBtn.classList.remove('text-accent');
    saveBoneBtn.innerHTML = `<i class="fa fa-bookmark-o"></i> <span data-i18n="save">${translations[currentLang]["save"]}</span>`;
    // 更新统计
    updateStats('saved', -1);
  } else {
    saveBoneBtn.classList.add('text-accent');
    saveBoneBtn.innerHTML = `<i class="fa fa-bookmark"></i> <span data-i18n="save">${translations[currentLang]["save"].replace("收藏", "已收藏").replace("Save", "Saved")}</span>`;
    // 添加收藏动画
    saveBoneBtn.classList.add('scale-110');
    setTimeout(() => {
      saveBoneBtn.classList.remove('scale-110');
    }, 200);
    // 更新统计
    updateStats('saved', 1);
  }
});

// 更新统计数据
function updateStats(type, change) {
  let learned = parseInt(learnedCountEl.textContent);
  let today = parseInt(todayCountEl.textContent);
  let saved = parseInt(savedCountEl.textContent);
  
  switch(type) {
    case 'learned':
      learned += change;
      learnedCountEl.textContent = `${learned}/206`;
      // 更新进度条
      const progressBar = document.querySelector('.bg-primary.h-2.5');
      progressBar.style.width = `${(learned/206)*100}%`;
      document.querySelector('[data-i18n="overall-progress"]').textContent = 
        `${translations[currentLang]["overall-progress"].split(':')[0]}: ${Math.round((learned/206)*100)}%`;
      break;
    case 'today':
      today += change;
      todayCountEl.textContent = today;
      break;
    case 'saved':
      saved += change;
      savedCountEl.textContent = saved;
      break;
  }
}

// 更新测验统计
function updateQuizStats(isCorrect) {
  quizStats.total++;
  if (isCorrect) {
    quizStats.correct++;
    quizStats.streak++;
  } else {
    quizStats.streak = 0;
  }
  
  const accuracy = Math.round((quizStats.correct / quizStats.total) * 100);
  
  totalQuizzesEl.textContent = quizStats.total;
  correctAnswersEl.textContent = quizStats.correct;
  accuracyEl.textContent = `${accuracy}%`;
  
  // 更新图表
  if (progressChart) {
    const todayIndex = new Date().getDay() || 7; // 调整周日为索引6
    progressChart.data.datasets[0].data[todayIndex - 1] += isCorrect ? 1 : 0;
    progressChart.update();
  }
}

// 切换模式
studyModeBtn.addEventListener('click', () => {
  if (currentMode === 'study') return;
  
  currentMode = 'study';
  studyModeBtn.classList.remove('btn-secondary');
  studyModeBtn.classList.add('btn-primary');
  quizModeBtn.classList.remove('btn-primary');
  quizModeBtn.classList.add('btn-secondary');
  studyMode.classList.remove('hidden');
  quizMode.classList.add('hidden');
  displayCurrentBone();
});

quizModeBtn.addEventListener('click', () => {
  if (currentMode === 'quiz') return;
  
  currentMode = 'quiz';
  quizModeBtn.classList.remove('btn-secondary');
  quizModeBtn.classList.add('btn-primary');
  studyModeBtn.classList.remove('btn-primary');
  studyModeBtn.classList.add('btn-secondary');
  quizMode.classList.remove('hidden');
  studyMode.classList.add('hidden');
  setupQuiz();
});

// 设置测验
function setupQuiz() {
  // 根据当前区域筛选骨骼
  let filteredBones = currentRegion === 'all' 
    ? bones 
    : bones.filter(bone => bone.category === currentRegion);
  
  // 随机选择一个骨骼作为问题
  const questionBone = filteredBones[Math.floor(Math.random() * filteredBones.length)];
  currentBoneIndex = bones.indexOf(questionBone);
  
  // 设置图片
  quizBoneImage.src = `https://picsum.photos/id/${questionBone.imageId}/800/600`;
  
  // 生成选项（包括正确答案和3个干扰项）
  generateQuizOptions(questionBone);
  
  // 重置状态
  selectedQuizOption = null;
  quizFeedback.classList.add('hidden');
  checkAnswerBtn.classList.remove('hidden');
  nextQuizBtn.classList.add('hidden');
}

// 生成测验选项
function generateQuizOptions(correctBone) {
  quizOptions.innerHTML = '';
  
  // 收集所有可能的干扰项
  const allOptions = [correctBone];
  
  // 添加3个干扰项
  while (allOptions.length < 4) {
    const randomBone = bones[Math.floor(Math.random() * bones.length)];
    // 确保不重复
    if (!allOptions.some(option => option.latin === randomBone.latin)) {
      allOptions.push(randomBone);
    }
  }
  
  // 随机排序选项
  allOptions.sort(() => Math.random() - 0.5);
  
  // 创建选项按钮
  allOptions.forEach((bone, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.className = 'option-btn';
    optionBtn.dataset.index = index;
    optionBtn.dataset.correct = bone.latin === correctBone.latin;
    optionBtn.innerHTML = `
      <span class="font-latin font-medium">${bone.latin}</span>
      <span class="block text-sm text-gray-600">${bone.common[currentLang]}</span>
    `;
    
    optionBtn.addEventListener('click', () => {
      // 清除之前的选择
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/5');
      });
      
      // 设置当前选择
      optionBtn.classList.add('border-primary', 'bg-primary/5');
      selectedQuizOption = optionBtn;
    });
    
    quizOptions.appendChild(optionBtn);
  });
}

// 更新测验选项文本（语言切换时）
function updateQuizOptionsText() {
  const options = document.querySelectorAll('.option-btn');
  options.forEach(option => {
    const latinName = option.querySelector('.font-latin').textContent;
    const bone = bones.find(b => b.latin === latinName);
    if (bone) {
      option.querySelector('.text-gray-600').textContent = bone.common[currentLang];
    }
  });
}

// 检查答案
checkAnswerBtn.addEventListener('click', () => {
  if (!selectedQuizOption) return;
  
  const isCorrect = selectedQuizOption.dataset.correct === 'true';
  const correctBone = bones[currentBoneIndex];
  
  // 显示反馈
  quizFeedback.classList.remove('hidden');
  feedbackText.textContent = isCorrect 
    ? translations[currentLang]['correct'] 
    : `${translations[currentLang]['incorrect']}, ${translations[currentLang]['correct-answer']}:`;
  feedbackText.className = isCorrect 
    ? 'text-center text-green-600' 
    : 'text-center text-red-600';
  correctAnswer.textContent = correctBone.latin;
  answerTranslation.textContent = correctBone.common[currentLang];
  finnishTranslation.textContent = correctBone.finnish;
  
  // 高亮正确和错误选项
  document.querySelectorAll('.option-btn').forEach(btn => {
    if (btn.dataset.correct === 'true') {
      btn.classList.add('correct');
    } else if (btn === selectedQuizOption) {
      btn.classList.add('incorrect');
    }
  });
  
  // 更新统计
  updateQuizStats(isCorrect);
  
  // 切换按钮
  checkAnswerBtn.classList.add('hidden');
  nextQuizBtn.classList.remove('hidden');
});

// 下一题
nextQuizBtn.addEventListener('click', () => {
  loadNewBone();
});

// 移动端菜单切换
mobileMenuBtn.addEventListener('click', () => {
  mobileMenuMenu.classList.toggle('hidden');
});

// 骨骼区域筛选
boneRegionBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 更新按钮状态
    boneRegionBtns.forEach(b => b.classList.remove('bg-primary/10', 'border-primary'));
    btn.classList.add('bg-primary/10', 'border-primary');
    
    // 设置当前区域
    currentRegion = btn.dataset.region;
    
    // 加载新骨骼
    loadNewBone();
  });
});

// 初始化页面
function init() {
  displayCurrentCurrentBone();
  initChart();
}

// 语言切换事件
langZhBtn.addEventListener('click', () => switchLanguage('zh'));
langEnBtn.addEventListener('click', () => switchLanguage('en'));

// 初始化
window.addEventListener('DOMContentLoaded', init);
