/**
 * 數位科技概論 (上) 隨堂測驗智慧學習網 - 核心腳本
 * Digital Technology Quiz Study Platform
 */

// ================= 1. 考卷題庫資料集 =================
const EXAM_DATA = [
  {
    id: 1,
    question: "隨機存取記憶體 (RAM) 區分為動態隨機存取記憶體 (DRAM) 及靜態隨機存取記憶體 (SRAM) 兩種，請問下列哪一項是 SRAM 優於 DRAM 的特點？",
    options: {
      A: "單位資料的存取速度較快",
      B: "單位面積所能儲存資料量較小",
      C: "需要持續充電更新 (refresh)，才能確保資料完整",
      D: "每單位資料的儲存成本較低。"
    },
    answer: "A",
    studentAnswer: "A",
    studentStatus: "correct",
    category: "cat-memory",
    categoryName: "記憶體架構",
    difficulty: "基礎概念",
    points: 4,
    topPercent: 11.2,
    heightPercent: 6.3,
    explanation: "SRAM（靜態隨機存取記憶體）使用雙極性或正反器電路，速度極快且不需要週期性充電更新（refresh），但其電路結構複雜、積體密度低且造價昂貴，因此常用於 CPU 的快取記憶體（Cache）。DRAM 則利用電容蓄電原理，速度較慢且必須定時 refresh，但成本低、密度高，廣泛用於主記憶體。",
    mnemonic: "💡 記憶訣竅：S 代表 Speed（快！不用Refresh）；D 代表 Dynamic（動態！要一直充電Refresh）。"
  },
  {
    id: 2,
    question: "傑克將 iPhone 手機拍攝的照片轉存到電腦中，並列印出來與朋友分享。請問列印設備在電腦的五大單元中，是歸屬為下列哪一個單元？",
    options: {
      A: "控制單元",
      B: "輸入單元",
      C: "輸出單元",
      D: "記憶單元。"
    },
    answer: "C",
    studentAnswer: "C",
    studentStatus: "correct",
    category: "cat-io",
    categoryName: "五大單元",
    difficulty: "基礎概念",
    points: 4,
    topPercent: 17.5,
    heightPercent: 6.3,
    explanation: "電腦硬體五大單元中，『輸出單元 (Output Unit, OU)』負責將電腦內部處理完成的資料或影像呈現至實體媒體（如印表機列印紙張、螢幕顯示畫面、喇叭播放聲音）。手機照片匯入電腦則屬於輸入過程。",
    mnemonic: "💡 記憶訣竅：從電腦向外吐資料或印在紙上，統統是輸出單元（OU）！"
  },
  {
    id: 3,
    question: "下列對於電腦硬體五大單元的敘述何者有誤？",
    options: {
      A: "輸入單元：待處理的資料須經由此單元進入電腦",
      B: "輸出單元：處理完成之資料由此單元送出",
      C: "算術邏輯單元：所有的算術運算均在此單元完成",
      D: "記憶單元：僅儲存輸入待處理之資料。"
    },
    answer: "D",
    studentAnswer: "A",
    studentStatus: "wrong",
    category: "cat-io",
    categoryName: "五大單元",
    difficulty: "易錯陷阱題",
    points: 4,
    topPercent: 23.8,
    heightPercent: 7.7,
    teacherNote: "考卷紅筆圈選 (D)，並在旁親筆寫下批改筆記：『存放程式資料的地方』！",
    trapAnalysis: "考生原答 (A) 被劃紅叉扣 4 分！選項 (D) 包含命題陷阱關鍵字『僅』。記憶單元 (MU) 不只儲存輸入資料，還負責儲存『電腦程式指令』以及『運算處理後的結果』！",
    explanation: "記憶單元 (Memory Unit, MU) 是電腦儲存中心，其儲存內容包含三大部分：(1) 程式指令 (2) 原始輸入資料 (3) 處理運算之中間與最終結果。題目稱『僅儲存輸入待處理之資料』以偏概全，敘述錯誤。",
    mnemonic: "💡 破題法眼：選擇題看到『僅』、『只能』、『絕對』時務必提高警覺！MU 是大庫房，程式資料都放它！"
  },
  {
    id: 4,
    question: "電腦基本架構中有數個主要的組成單元 (或部門)，其中負責存放電腦程式與資料的單元是：",
    options: {
      A: "算術邏輯單元",
      B: "輸入單元",
      C: "記憶單元",
      D: "控制單元。"
    },
    answer: "C",
    studentAnswer: "C",
    studentStatus: "correct",
    category: "cat-io",
    categoryName: "五大單元",
    difficulty: "基礎概念",
    points: 4,
    topPercent: 31.5,
    heightPercent: 5.3,
    explanation: "馮·紐曼 (Von Neumann) 內儲程式架構中，將電腦程式指令與相關資料事先存放在記憶體中由 CPU 逐一讀取執行，這個負責存放程式與資料的單元就是『記憶單元 (Memory Unit, MU)』。",
    mnemonic: "💡 觀念連結：第 4 題與第 3 題正好相互印證——記憶單元專門負責『存放電腦程式與資料』。"
  },
  {
    id: 5,
    question: "在電腦的組成單元中，下列哪兩個單元合稱為中央處理單元？",
    options: {
      A: "輸入單元及控制單元",
      B: "控制單元及算術／邏輯單元",
      C: "輸入單元及輸出單元",
      D: "算術／邏輯單元及記憶單元。"
    },
    answer: "B",
    studentAnswer: "D",
    studentStatus: "wrong",
    category: "cat-cpu",
    categoryName: "CPU架構",
    difficulty: "核心常考題",
    points: 4,
    topPercent: 36.8,
    heightPercent: 7.4,
    teacherNote: "考卷紅筆圈出 (B)，並在試卷右側畫了五大單元流程圖：『ALU / CU ➔ OU, IU ➔ CU, MU』。",
    trapAnalysis: "考生原選 (D) 扣 4 分。很多人會將記憶單元 (MU) 誤以為是 CPU 的一部分。切記：CPU 包含『控制單元 (CU)』與『算術邏輯單元 (ALU)』，MU 屬於外部支援，不屬於 CPU 核心！",
    explanation: "中央處理單元 (CPU, Central Processing Unit) 是電腦的心臟與大腦，由『控制單元 (CU)』與『算術邏輯單元 (ALU)』合稱，內部通常還配備有高速暫存器 (Registers) 與內部匯流排。記憶單元 (MU) 則是獨立的儲存單元。",
    mnemonic: "💡 必背口訣：CPU = CU（指揮控制）+ ALU（計算比對）！記憶單元 (MU) 是外面的糧倉，絕不能混為一談。"
  },
  {
    id: 6,
    question: "請問所謂的 I/O 指的是",
    options: {
      A: "1 跟 0",
      B: "物聯網 (IoT)",
      C: "輸入與輸出",
      D: "整合式辦公室系統 (integrated office system)。"
    },
    answer: "C",
    studentAnswer: "C",
    studentStatus: "correct",
    category: "cat-io",
    categoryName: "五大單元",
    difficulty: "基礎概念",
    points: 4,
    topPercent: 44.2,
    heightPercent: 5.6,
    explanation: "在計算機科學中，I/O 代表 Input / Output，即『輸入與輸出』。I/O 設備包含鍵盤、滑鼠、螢幕、印表機等週邊硬體。",
    mnemonic: "💡 延伸常識：IoT 是 Internet of Things（物聯網），切勿與 I/O 混淆。"
  },
  {
    id: 7,
    question: "關於 \"熱插拔\" 的敘述，何者為真？",
    options: {
      A: "只能在開機的情況下插拔",
      B: "只能在關機的情況下插拔",
      C: "在關機及開機的情況下皆可插拔",
      D: "只有當主機溫度高於一定溫度時才可插拔。"
    },
    answer: "C",
    studentAnswer: "C",
    studentStatus: "correct",
    category: "cat-io",
    categoryName: "匯流排與介面",
    difficulty: "生活應用",
    points: 4,
    topPercent: 49.8,
    heightPercent: 6.7,
    explanation: "『熱插拔 (Hot Swapping / Hot Plugging)』是指使用者可以在電腦處於運作（通電開機）狀態下，直接插入或拔除硬體設備（如 USB 隨身碟、外接硬碟、HDMI 螢幕線），作業系統會自動識別且不需重新啟動主機。關機狀態下當然也可以隨意插拔，因此 (C)『在關機及開機的情況下皆可插拔』為正確選項。",
    mnemonic: "💡 趣味避坑：『熱』是指系統通電發熱運轉中，不是指機器發燙溫度高！"
  },
  {
    id: 8,
    question: "阿布想要為自己的筆記型電腦擴充 2G 的 RAM，請問他應該將 RAM 安插在下列哪一種插槽？",
    options: {
      A: "記憶體插槽",
      B: "PCI-E 插槽",
      C: "CPU 插槽",
      D: "M.2 插槽。"
    },
    answer: "A",
    studentAnswer: "A",
    studentStatus: "correct",
    category: "cat-memory",
    categoryName: "記憶體架構",
    difficulty: "硬體組裝",
    points: 4,
    topPercent: 56.5,
    heightPercent: 5.5,
    explanation: "RAM（隨機存取記憶體）專用的擴充插槽即為『記憶體插槽』（桌機常見 DIMM 插槽，筆記型電腦通常採用體積較小的 SO-DIMM 插槽）。PCI-E 插槽通常用於獨立顯示卡或高速介面卡；CPU 插槽安裝處理器；M.2 插槽多用於 NVMe 固態硬碟或 Wi-Fi 網卡。",
    mnemonic: "💡 記憶體規格辨別：RAM 插在 RAM Slot (DIMM/SO-DIMM)，SSD 插在 M.2 或 SATA。"
  },
  {
    id: 9,
    question: "微軟公司在台灣成立了亞洲第一座「雲端運算」中心，以整合電腦的運算資源，來提供給國內各項創新研究計畫使用。一般而言，研究計畫都需要大量的運算，包括計算、比對、配對等不同的處理，請問電腦中負責這些運算工作的是下列哪一個單元？",
    options: {
      A: "CU",
      B: "MU",
      C: "ALU",
      D: "OU。"
    },
    answer: "C",
    studentAnswer: "C",
    studentStatus: "correct",
    category: "cat-cpu",
    categoryName: "CPU架構",
    difficulty: "情境應用",
    points: 4,
    topPercent: 62.0,
    heightPercent: 7.2,
    explanation: "負責所有資料『運算處理』的單元就是『算術邏輯單元 (Arithmetic and Logic Unit, ALU)』。它包含：算術運算（加、減、乘、除）與邏輯運算（比對、大於、小於、等於、AND、OR、NOT）。CU 是控制排程，MU 是儲存，OU 是輸出。",
    mnemonic: "💡 英文拆解：A = Arithmetic (算術加減乘除)；L = Logic (邏輯判斷比對)。"
  },
  {
    id: 10,
    question: "MIPS 為一種衡量電腦 CPU 之測量指標，其中 I 代表：",
    options: {
      A: "資訊 (Information)",
      B: "指令 (Instruction)",
      C: "輸入 (Input)",
      D: "內部 (Internal)。"
    },
    answer: "B",
    studentAnswer: "B",
    studentStatus: "correct",
    category: "cat-cpu",
    categoryName: "CPU架構",
    difficulty: "名詞縮寫",
    points: 4,
    topPercent: 69.2,
    heightPercent: 5.0,
    explanation: "MIPS 全名為 Million Instructions Per Second（每秒百萬個指令數），是用來評估 CPU 執行指令速度快慢的度量單位。其中：M = Million (百萬)，I = Instruction (指令)，P = Per (每)，S = Second (秒)。",
    mnemonic: "💡 常考兄弟檔：MFLOPS 是 Million Floating-point Operations Per Second（每秒百萬次浮點運算）。"
  },
  {
    id: 11,
    question: "在「星際迷航記」影集中，船長寇克領導眾船員一同探索宇宙，當遇上危機時，船長便會指揮船舶員完成各自的工作，並引導船員們脫離險境。請問若以船長扮演的角色來看，可比喻成電腦的哪一個單元最恰當？",
    options: {
      A: "輸入單元",
      B: "記憶單元",
      C: "輸出單元",
      D: "控制單元。"
    },
    answer: "D",
    studentAnswer: "D",
    studentStatus: "correct",
    category: "cat-cpu",
    categoryName: "CPU架構",
    difficulty: "生動比喻",
    points: 4,
    topPercent: 74.2,
    heightPercent: 6.0,
    explanation: "船長負責發號施令、指揮調度船舶員各司其職，正如電腦中的『控制單元 (Control Unit, CU)』負責從記憶體讀出指令、解碼並指揮輸入、輸出、運算等所有單元協同工作。",
    mnemonic: "💡 人事比喻法：船長/交警/總指揮 = CU (控制)；苦力計算機 = ALU (運算)；倉庫管理員 = MU (記憶)。"
  },
  {
    id: 12,
    question: "志華購買了一台安插 8GB 記憶體的 64 位元電腦，下列有關該台電腦的敘述何者正確？",
    options: {
      A: "8GB 指的是快取記憶體的容量",
      B: "一般用途暫存器的位元數為 8GB",
      C: "CPU 時脈頻率為 64位元",
      D: "64 位元指的是一般用途暫存器的位元數。"
    },
    answer: "D",
    studentAnswer: "A",
    studentStatus: "wrong",
    category: "cat-cpu",
    categoryName: "CPU架構",
    difficulty: "統測高頻陷阱題",
    points: 4,
    topPercent: 80.2,
    heightPercent: 7.0,
    teacherNote: "考卷紅筆在 (A) 旁批註『Dynamic』(代表是動態主記憶體)，並在 (D) 劃上醒目紅線標出正解！",
    trapAnalysis: "考生原答 (A) 被劃叉扣 4 分！市面上電腦標榜的『8GB 記憶體』是指主記憶體 (RAM/DRAM)，快取記憶體 (Cache) 通常只有 8MB~64MB 左右。另外，『64 位元電腦』的核心指標就是 CPU 內『一般用途暫存器』的字組寬度！",
    explanation: "『N 位元電腦』的正式定義：是指 CPU 內部『一般用途暫存器 (General Purpose Registers)』的位元數，同時通常也是資料匯流排一次能傳輸的位元寬度。8GB 是指動態隨機存取記憶體（DRAM 主記憶體）容量；時脈頻率單位為 GHz（赫茲），不是位元。",
    mnemonic: "💡 統測超級必考：幾位元電腦 ＝ 一般用途暫存器位元數 ＝ 資料匯流排位元寬度！"
  },
  {
    id: 13,
    question: "高雄六龜區為了成立社區數位機會中心 (digital opportunity center)，打算將原社區教室的電腦全數移轉至該中心。如果你是數位機會中心的電腦管理員，為了要提升這些電腦的執行效能，下列何者最不可能是你優先考慮更換的設備或元件？",
    options: {
      A: "CPU",
      B: "主記憶體",
      C: "顯示卡",
      D: "鍵盤。"
    },
    answer: "D",
    studentAnswer: "D",
    studentStatus: "correct",
    category: "cat-io",
    categoryName: "電腦硬體與效能",
    difficulty: "實務綜合應用",
    points: 4,
    topPercent: 87.2,
    heightPercent: 7.3,
    explanation: "鍵盤純粹是輸入周邊設備，更換手感好或昂貴的鍵盤完全不會提升主機核心運算與執行速度。若要改善電腦執行速度，應優先更換或升級：(1) 更強大的 CPU (2) 加大主記憶體容量以減少磁碟分頁換頁 (3) 升級高速顯示卡或固態硬碟 SSD。",
    mnemonic: "💡 核心原則：輸入輸出外設只影響使用者體驗，主機內三巨頭（CPU、RAM、SSD/GPU）才決定運算效能！"
  }
];

// 核心知識快閃卡資料
const FLASHCARDS_DATA = [
  { q: "電腦五大單元分別為何？", a: "輸入單元 (IU)、輸出單元 (OU)、記憶單元 (MU)、控制單元 (CU)、算術邏輯單元 (ALU)" },
  { q: "中央處理單元 (CPU) 包含哪兩個單元？", a: "控制單元 (CU) + 算術邏輯單元 (ALU)（外加暫存器 Registers）" },
  { q: "SRAM 與 DRAM 誰的速度快？誰需要定時充電更新 (Refresh)？", a: "SRAM 速度極快（做快取）；DRAM 速度較慢且需定時充電更新（做主記憶體）" },
  { q: "所謂「64 位元電腦」中的 64 位元指的是什麼？", a: "CPU 內部「一般用途暫存器 (General Purpose Registers)」的位元數！" },
  { q: "衡量 CPU 運算速度的 MIPS 代表什麼意義？", a: "Million Instructions Per Second（每秒百萬個指令數），I 代表 Instruction。" },
  { q: "何謂「熱插拔 (Hot Swapping)」？", a: "在電腦開機通電運作中，可以隨時插拔周邊設備（如 USB），關機時亦可插拔。" }
];

// ================= 2. 狀態管理 =================
const state = {
  activeTab: 'tab-dual',
  currentFilter: 'all',
  activeQuestionId: 1,
  showOverlay: true,
  zoomLevel: 1.0,
  isSoundEnabled: true,
  isInstantFeedback: true,
  quizAnswers: {}, // { 1: 'A', 2: 'B', ... }
  starredQuestions: new Set(JSON.parse(localStorage.getItem('starred_q') || '[]')),
  quizTimeSeconds: 0,
  quizTimerInterval: null,
  isQuizSubmitted: false
};

// ================= 3. 音效合成器 (Web Audio API) =================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playCorrect() {
    if (!state.isSoundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }

  playWrong() {
    if (!state.isSoundEnabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(260, now);
    osc.frequency.linearRampToValueAtTime(190, now + 0.2);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }
}

const sfx = new SoundFX();

// ================= 4. 初始化與事件綁定 =================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavTabs();
  initHotspotOverlay();
  renderQuestionCards();
  renderWrongCorrectionCards();
  renderQuizMode();
  renderFlashcards();
  updateStarredCount();
  bindToolbarEvents();
  startQuizTimer();
});

// 主題切換 (Dark / Light)
function initTheme() {
  const savedTheme = localStorage.getItem('app_theme') || 'theme-light';
  document.body.className = savedTheme;
  updateThemeIcon(savedTheme);

  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    const isDark = document.body.classList.contains('theme-dark');
    const newTheme = isDark ? 'theme-light' : 'theme-dark';
    document.body.className = newTheme;
    localStorage.setItem('app_theme', newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.textContent = theme === 'theme-dark' ? '☀️' : '🌙';
  }
}

// 分頁導覽
function initNavTabs() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetId = tab.dataset.tab;
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        state.activeTab = targetId;
      }
    });
  });
}

// ================= 5. 原卷互動熱區 (Hotspot Overlay) =================
function initHotspotOverlay() {
  const overlay = document.getElementById('hotspotOverlay');
  if (!overlay) return;
  overlay.innerHTML = '';

  EXAM_DATA.forEach(q => {
    const box = document.createElement('div');
    box.className = `hotspot-box ${q.studentStatus === 'wrong' ? 'wrong-hotspot' : ''}`;
    box.style.top = `${q.topPercent}%`;
    box.style.height = `${q.heightPercent}%`;
    box.dataset.qid = q.id;

    box.innerHTML = `
      <div class="hotspot-tag">
        <span>第 ${q.id} 題</span>
        ${q.studentStatus === 'wrong' ? '<span title="此題在考卷被打叉扣4分">❌ -4分</span>' : '<span>✓</span>'}
      </div>
    `;

    box.addEventListener('click', () => {
      highlightQuestion(q.id, true);
    });

    overlay.appendChild(box);
  });
}

// 高亮指定題目 (雙向聯動)
function highlightQuestion(qid, scrollToList = false) {
  state.activeQuestionId = qid;

  // 更新熱區高亮
  document.querySelectorAll('.hotspot-box').forEach(b => {
    b.classList.toggle('active-hotspot', parseInt(b.dataset.qid) === qid);
  });

  // 更新題目卡片高亮
  document.querySelectorAll('.q-card').forEach(c => {
    const isTarget = parseInt(c.dataset.qid) === qid;
    c.classList.toggle('highlighted-card', isTarget);
    if (isTarget && scrollToList) {
      c.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // 更新跳題選單
  const jumpSelect = document.getElementById('jumpSelect');
  if (jumpSelect && jumpSelect.value !== String(qid)) {
    jumpSelect.value = qid;
  }
}

// 原卷平移定位到特定題目
function scrollImageToQuestion(qid) {
  const q = EXAM_DATA.find(item => item.id === qid);
  if (!q) return;

  const wrapper = document.getElementById('imageWrapper');
  const img = document.getElementById('examImg');
  if (!wrapper || !img) return;

  const totalHeight = img.clientHeight * state.zoomLevel;
  const targetTop = (q.topPercent / 100) * totalHeight;

  wrapper.scrollTo({
    top: targetTop - 80,
    behavior: 'smooth'
  });

  highlightQuestion(qid, false);
}

// ================= 6. 渲染原卷對照卡片列表 =================
function renderQuestionCards() {
  const container = document.getElementById('questionsContainer');
  const jumpSelect = document.getElementById('jumpSelect');
  if (!container) return;

  container.innerHTML = '';
  if (jumpSelect) jumpSelect.innerHTML = '';

  EXAM_DATA.forEach(q => {
    // 建立跳題選單選項
    if (jumpSelect) {
      const opt = document.createElement('option');
      opt.value = q.id;
      opt.textContent = `第 ${q.id} 題 ${q.studentStatus === 'wrong' ? '(原卷錯題 ❌)' : ''}`;
      jumpSelect.appendChild(opt);
    }

    const card = document.createElement('div');
    card.className = `q-card ${q.studentStatus === 'wrong' ? 'wrong-card' : ''}`;
    card.id = `qCard_${q.id}`;
    card.dataset.qid = q.id;
    card.dataset.category = q.category;

    const isStarred = state.starredQuestions.has(q.id);

    card.innerHTML = `
      <div class="q-header">
        <div class="q-number-box">
          <span class="q-badge">第 ${q.id} 題</span>
          <span class="cat-badge">${q.categoryName}</span>
          ${q.studentStatus === 'wrong' ? '<span class="badge-count">原卷失分 -4</span>' : ''}
        </div>
        <div class="q-actions">
          <button class="btn btn-sm btn-outline btn-jump-img" title="在原卷照片中定位此題" data-qid="${q.id}">
            🔍 原卷定位
          </button>
          <button class="btn-action-icon star-btn ${isStarred ? 'starred' : ''}" title="收藏標記此題" data-qid="${q.id}">
            ${isStarred ? '★' : '☆'}
          </button>
        </div>
      </div>

      <div class="q-text">${q.id}. ${q.question}</div>

      <div class="options-list">
        ${Object.entries(q.options).map(([letter, text]) => {
          let extraClass = '';
          if (q.studentStatus === 'wrong') {
            if (letter === q.answer) extraClass = 'is-correct';
            if (letter === q.studentAnswer) extraClass = 'is-wrong';
          } else {
            if (letter === q.answer) extraClass = 'is-correct';
          }

          return `
            <div class="option-item ${extraClass}">
              <div class="option-letter">${letter}</div>
              <div class="option-content">${text}</div>
              ${letter === q.answer ? '<span title="正解" style="color:var(--success);font-weight:700;">✓ 正解</span>' : ''}
              ${letter === q.studentAnswer && q.studentStatus === 'wrong' ? '<span title="原卷作答" style="color:var(--danger);font-weight:700;">(學生原答 ✗)</span>' : ''}
            </div>
          `;
        }).join('')}
      </div>

      ${q.teacherNote ? `
        <div class="teacher-note-banner">
          <span class="note-pen-icon">✍️</span>
          <div class="note-text">
            <strong>【老師試卷紅筆批改手寫還原】</strong>
            <p>${q.teacherNote}</p>
          </div>
        </div>
      ` : ''}

      <div class="explanation-box">
        <div class="exp-title">
          <span>📖 名師觀念剖析</span>
        </div>
        <div class="exp-detail">
          <p>${q.explanation}</p>
          ${q.mnemonic ? `<div class="exp-mnemonic">${q.mnemonic}</div>` : ''}
        </div>
      </div>
    `;

    // 點擊卡片時高亮
    card.addEventListener('click', (e) => {
      if (e.target.closest('.star-btn') || e.target.closest('.btn-jump-img')) return;
      highlightQuestion(q.id, false);
    });

    container.appendChild(card);
  });

  // 綁定跳轉按鈕
  container.querySelectorAll('.btn-jump-img').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const qid = parseInt(btn.dataset.qid);
      scrollImageToQuestion(qid);
    });
  });

  // 綁定收藏按鈕
  container.querySelectorAll('.star-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const qid = parseInt(btn.dataset.qid);
      toggleStar(qid, btn);
    });
  });

  // 綁定跳題選單切換
  if (jumpSelect) {
    jumpSelect.addEventListener('change', () => {
      const qid = parseInt(jumpSelect.value);
      highlightQuestion(qid, true);
      scrollImageToQuestion(qid);
    });
  }
}

// 收藏題目切換
function toggleStar(qid, btn) {
  if (state.starredQuestions.has(qid)) {
    state.starredQuestions.delete(qid);
    btn.textContent = '☆';
    btn.classList.remove('starred');
  } else {
    state.starredQuestions.add(qid);
    btn.textContent = '★';
    btn.classList.add('starred');
  }
  localStorage.setItem('starred_q', JSON.stringify([...state.starredQuestions]));
  updateStarredCount();
}

function updateStarredCount() {
  const el = document.getElementById('starredCount');
  if (el) el.textContent = state.starredQuestions.size;
}

// ================= 7. 渲染錯題深度訂正專區 =================
function renderWrongCorrectionCards() {
  const area = document.getElementById('wrongCardsArea');
  if (!area) return;

  const wrongList = EXAM_DATA.filter(q => q.studentStatus === 'wrong');
  area.innerHTML = '';

  wrongList.forEach(q => {
    const card = document.createElement('div');
    card.className = 'wrong-detail-card';

    card.innerHTML = `
      <div class="wrong-card-top">
        <div style="display:flex;align-items:center;gap:0.75rem;">
          <span class="q-badge" style="background:var(--danger-light);color:var(--danger-text);">第 ${q.id} 題 錯題檔案</span>
          <span class="cat-badge">${q.categoryName}</span>
        </div>
        <span class="score-loss-tag">扣 4 分 (原卷失分)</span>
      </div>

      <h3 style="font-size:1.05rem;font-weight:700;margin-bottom:1rem;line-height:1.5;">${q.id}. ${q.question}</h3>

      <div class="comparison-box">
        <div class="ans-column col-wrong">
          <div class="col-header">學生原先選取 (錯誤)</div>
          <div class="col-choice">(${q.studentAnswer})</div>
          <div class="col-text">${q.options[q.studentAnswer]}</div>
        </div>

        <div class="ans-column col-right">
          <div class="col-header">標準正解 (正確答案)</div>
          <div class="col-choice">(${q.answer})</div>
          <div class="col-text">${q.options[q.answer]}</div>
        </div>
      </div>

      <div class="teacher-note-banner" style="margin: 1rem 0;">
        <span class="note-pen-icon">✍️</span>
        <div class="note-text">
          <strong>【試卷紅色筆記原樣重現】</strong>
          <p>${q.teacherNote}</p>
        </div>
      </div>

      <div style="background-color:rgba(239,68,68,0.06);border-left:4px solid var(--danger);padding:0.85rem 1.15rem;border-radius:var(--radius-sm);margin-bottom:1rem;font-size:0.9rem;">
        <strong style="color:var(--danger);">⚠️ 陷阱思維與失分原因：</strong>
        <p style="margin-top:0.35rem;">${q.trapAnalysis}</p>
      </div>

      <div class="explanation-box">
        <div class="exp-title">
          <span>💡 觀念導正與名師詳解</span>
        </div>
        <p>${q.explanation}</p>
        ${q.mnemonic ? `<div class="exp-mnemonic" style="margin-top:0.6rem;">${q.mnemonic}</div>` : ''}
      </div>
    `;

    area.appendChild(card);
  });
}

// ================= 8. 線上模擬測驗引擎 =================
function renderQuizMode() {
  const container = document.getElementById('quizQuestionsArea');
  if (!container) return;
  container.innerHTML = '';

  EXAM_DATA.forEach(q => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.id = `quizCard_${q.id}`;

    card.innerHTML = `
      <div class="q-header">
        <div class="q-number-box">
          <span class="q-badge">第 ${q.id} 題</span>
          <span class="cat-badge">${q.categoryName}</span>
        </div>
        <span style="font-size:0.8rem;color:var(--text-muted);font-weight:600;">配分：4 分</span>
      </div>

      <div class="q-text">${q.id}. ${q.question}</div>

      <div class="options-list">
        ${Object.entries(q.options).map(([letter, text]) => `
          <div class="option-item quiz-opt" data-qid="${q.id}" data-choice="${letter}">
            <div class="option-letter">${letter}</div>
            <div class="option-content">${text}</div>
          </div>
        `).join('')}
      </div>

      <div class="explanation-box hidden" id="quizExp_${q.id}">
        <div class="exp-title">
          <span>📖 解析說明</span>
        </div>
        <p>${q.explanation}</p>
      </div>
    `;

    container.appendChild(card);
  });

  // 綁定選項點擊
  container.querySelectorAll('.quiz-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      if (state.isQuizSubmitted && !state.isInstantFeedback) return;

      const qid = parseInt(opt.dataset.qid);
      const choice = opt.dataset.choice;
      selectQuizOption(qid, choice);
    });
  });
}

function selectQuizOption(qid, choice) {
  state.quizAnswers[qid] = choice;
  const q = EXAM_DATA.find(item => item.id === qid);
  const card = document.getElementById(`quizCard_${qid}`);
  const expBox = document.getElementById(`quizExp_${qid}`);
  if (!card) return;

  const isCorrect = choice === q.answer;

  // 更新選項選取狀態
  card.querySelectorAll('.quiz-opt').forEach(item => {
    item.classList.remove('selected', 'is-correct', 'is-wrong');
    if (item.dataset.choice === choice) {
      item.classList.add('selected');
    }
  });

  // 若開啓「即時顯示正誤解析」
  if (state.isInstantFeedback) {
    if (isCorrect) {
      sfx.playCorrect();
      card.querySelector(`.quiz-opt[data-choice="${choice}"]`).classList.add('is-correct');
    } else {
      sfx.playWrong();
      card.querySelector(`.quiz-opt[data-choice="${choice}"]`).classList.add('is-wrong');
      // 高亮正確答案
      const correctOpt = card.querySelector(`.quiz-opt[data-choice="${q.answer}"]`);
      if (correctOpt) correctOpt.classList.add('is-correct');
    }
    if (expBox) expBox.classList.remove('hidden');
  }

  updateQuizProgress();
}

function updateQuizProgress() {
  const answeredCount = Object.keys(state.quizAnswers).length;
  let correctCount = 0;

  Object.entries(state.quizAnswers).forEach(([qid, choice]) => {
    const q = EXAM_DATA.find(item => item.id === parseInt(qid));
    if (q && q.answer === choice) correctCount++;
  });

  const liveScore = correctCount * 4;
  const percent = Math.round((answeredCount / EXAM_DATA.length) * 100);

  const answeredEl = document.getElementById('answeredCount');
  const scoreEl = document.getElementById('liveScore');
  const barEl = document.getElementById('quizProgressBar');

  if (answeredEl) answeredEl.textContent = answeredCount;
  if (scoreEl) scoreEl.textContent = liveScore;
  if (barEl) barEl.style.width = `${percent}%`;
}

// 繳交測驗計分
function submitQuiz() {
  state.isQuizSubmitted = true;
  let correctCount = 0;
  const total = EXAM_DATA.length;
  const breakdown = [];

  EXAM_DATA.forEach(q => {
    const userChoice = state.quizAnswers[q.id];
    const isCorrect = userChoice === q.answer;
    if (isCorrect) correctCount++;

    const card = document.getElementById(`quizCard_${q.id}`);
    const expBox = document.getElementById(`quizExp_${q.id}`);

    if (card) {
      card.querySelectorAll('.quiz-opt').forEach(opt => {
        opt.classList.remove('is-correct', 'is-wrong');
        if (opt.dataset.choice === q.answer) {
          opt.classList.add('is-correct');
        } else if (opt.dataset.choice === userChoice && !isCorrect) {
          opt.classList.add('is-wrong');
        }
      });
    }
    if (expBox) expBox.classList.remove('hidden');

    breakdown.push({
      id: q.id,
      isCorrect: isCorrect,
      userChoice: userChoice || '未作答',
      answer: q.answer
    });
  });

  const finalScore = correctCount * 4;
  const maxScore = total * 4;

  // 顯示結果彈窗
  showScoreModal(finalScore, maxScore, correctCount, total, breakdown);
}

function showScoreModal(score, maxScore, correctCount, total, breakdown) {
  const modal = document.getElementById('scoreModal');
  const scoreText = document.getElementById('finalScoreText');
  const feedbackMsg = document.getElementById('modalFeedbackText');
  const breakdownList = document.getElementById('modalBreakdownList');

  if (!modal) return;

  scoreText.textContent = score;

  let msg = '';
  if (score === maxScore) {
    msg = '🏆 太狂了！13 題全對拿滿分！硬體核心概念已完全掌握！';
    sfx.playCorrect();
  } else if (score >= 44) {
    msg = `🎉 表現優異！答對 ${correctCount} 題，已超越原考卷的 72 分成績！`;
  } else if (score >= 32) {
    msg = `👍 穩紮穩打！答對 ${correctCount} 題，建議特別複習錯題訂正專區！`;
  } else {
    msg = `💪 還有很大進步空間！請多參考「第 3 章重點手冊」強化記憶！`;
  }
  feedbackMsg.textContent = msg;

  // 渲染錯題小結
  if (breakdownList) {
    const wrongItems = breakdown.filter(b => !b.isCorrect);
    if (wrongItems.length === 0) {
      breakdownList.innerHTML = '<div style="color:var(--success);font-weight:700;">🌟 恭喜沒有任何錯誤！完美通關！</div>';
    } else {
      breakdownList.innerHTML = `
        <div style="font-weight:700;color:var(--danger);margin-bottom:0.35rem;">
          本次錯題 (${wrongItems.length} 題)：
        </div>
        ${wrongItems.map(w => `
          <div>第 ${w.id} 題：你選 (${w.userChoice})，標準答案為 (${w.answer})</div>
        `).join('')}
      `;
    }
  }

  modal.classList.remove('hidden');
}

// ================= 9. 3D 翻轉快閃卡 =================
function renderFlashcards() {
  const deck = document.getElementById('flashcardsDeck');
  if (!deck) return;

  deck.innerHTML = '';
  FLASHCARDS_DATA.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flashcard';

    card.innerHTML = `
      <div class="flashcard-inner">
        <div class="flashcard-front">
          <strong style="font-size:0.95rem;line-height:1.5;">${item.q}</strong>
          <span class="card-hint">（點擊翻面看答案 👆）</span>
        </div>
        <div class="flashcard-back">
          <p style="font-size:0.875rem;line-height:1.5;font-weight:600;">${item.a}</p>
          <span class="card-hint">（再次點擊翻回）</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });

    deck.appendChild(card);
  });
}

// ================= 10. 計時器與事件工具列 =================
function startQuizTimer() {
  state.quizTimerInterval = setInterval(() => {
    state.quizTimeSeconds++;
    const minutes = String(Math.floor(state.quizTimeSeconds / 60)).padStart(2, '0');
    const seconds = String(state.quizTimeSeconds % 60).padStart(2, '0');
    const timerEl = document.getElementById('quizTimer');
    if (timerEl) timerEl.textContent = `${minutes}:${seconds}`;
  }, 1000);
}

function bindToolbarEvents() {
  // 圖片縮放按鈕
  const container = document.getElementById('imageContainer');
  const zoomInBtn = document.getElementById('zoomInBtn');
  const zoomOutBtn = document.getElementById('zoomOutBtn');
  const zoomResetBtn = document.getElementById('zoomResetBtn');
  const toggleOverlayBtn = document.getElementById('toggleOverlayBtn');

  if (zoomInBtn && container) {
    zoomInBtn.addEventListener('click', () => {
      state.zoomLevel = Math.min(state.zoomLevel + 0.25, 2.5);
      container.style.transform = `scale(${state.zoomLevel})`;
    });
  }

  if (zoomOutBtn && container) {
    zoomOutBtn.addEventListener('click', () => {
      state.zoomLevel = Math.max(state.zoomLevel - 0.25, 0.75);
      container.style.transform = `scale(${state.zoomLevel})`;
    });
  }

  if (zoomResetBtn && container) {
    zoomResetBtn.addEventListener('click', () => {
      state.zoomLevel = 1.0;
      container.style.transform = 'scale(1)';
    });
  }

  if (toggleOverlayBtn) {
    toggleOverlayBtn.addEventListener('click', () => {
      state.showOverlay = !state.showOverlay;
      const overlay = document.getElementById('hotspotOverlay');
      if (overlay) {
        overlay.style.display = state.showOverlay ? 'block' : 'none';
      }
      toggleOverlayBtn.textContent = state.showOverlay ? '🎯 標記熱區: 開' : '🎯 標記熱區: 關';
      toggleOverlayBtn.classList.toggle('btn-primary', state.showOverlay);
    });
  }

  // 篩選晶片 (Filter Chips)
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.dataset.filter;
      state.currentFilter = filter;
      applyFilter(filter);
    });
  });

  // 音效開關
  const soundBtn = document.getElementById('soundToggleBtn');
  if (soundBtn) {
    soundBtn.addEventListener('click', () => {
      state.isSoundEnabled = !state.isSoundEnabled;
      const icon = document.getElementById('soundIcon');
      if (icon) icon.textContent = state.isSoundEnabled ? '🔊' : '🔇';
    });
  }

  // 列印按鈕
  const printBtn = document.getElementById('printBtn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // 測驗設定
  const instantToggle = document.getElementById('instantFeedbackToggle');
  if (instantToggle) {
    instantToggle.addEventListener('change', (e) => {
      state.isInstantFeedback = e.target.checked;
    });
  }

  const submitQuizBtn = document.getElementById('submitQuizBtn');
  const submitQuizBtnBottom = document.getElementById('submitQuizBtnBottom');
  if (submitQuizBtn) submitQuizBtn.addEventListener('click', submitQuiz);
  if (submitQuizBtnBottom) submitQuizBtnBottom.addEventListener('click', submitQuiz);

  const resetQuizBtn = document.getElementById('resetQuizBtn');
  if (resetQuizBtn) {
    resetQuizBtn.addEventListener('click', () => {
      state.quizAnswers = {};
      state.isQuizSubmitted = false;
      state.quizTimeSeconds = 0;
      renderQuizMode();
      updateQuizProgress();
    });
  }

  // 彈窗關閉
  const closeModalBtn = document.getElementById('closeModalBtn');
  const scoreModal = document.getElementById('scoreModal');
  if (closeModalBtn && scoreModal) {
    closeModalBtn.addEventListener('click', () => {
      scoreModal.classList.add('hidden');
    });
  }

  const reviewErrorsBtn = document.getElementById('reviewErrorsBtn');
  if (reviewErrorsBtn && scoreModal) {
    reviewErrorsBtn.addEventListener('click', () => {
      scoreModal.classList.add('hidden');
      // 跳轉至錯題訂正頁
      document.querySelector('.nav-tab[data-tab="tab-correction"]').click();
    });
  }

  const modalRetestBtn = document.getElementById('modalRetestBtn');
  if (modalRetestBtn && scoreModal) {
    modalRetestBtn.addEventListener('click', () => {
      scoreModal.classList.add('hidden');
      if (resetQuizBtn) resetQuizBtn.click();
    });
  }
}

// 卡片篩選器邏輯
function applyFilter(filter) {
  document.querySelectorAll('.q-card').forEach(card => {
    const qid = parseInt(card.dataset.qid);
    const cat = card.dataset.category;
    const isWrong = card.classList.contains('wrong-card');
    const isStarred = state.starredQuestions.has(qid);

    let isVisible = false;
    if (filter === 'all') isVisible = true;
    else if (filter === 'wrong') isVisible = isWrong;
    else if (filter === 'starred') isVisible = isStarred;
    else if (filter === cat) isVisible = true;

    card.style.display = isVisible ? 'block' : 'none';
  });
}
