/* =====================================================
   Hetty's Bubble World 静态网页脚本
   设计者维护方式：只改顶部数据区和 assets 文件夹
   ===================================================== */

// ===============================
// 这里修改个人信息
// ===============================
const profileData = {
  name: "Hetty",
  slogan: "欢迎来到我的泡泡世界。",
  identityTags: ["新媒体运营", "视频制作", "视觉排版", "文案创作"],
  intro: "ISFJ。这里收集 Hetty 的运营、视觉、影像、文字和摄影调色作品。",
  skills: ["内容运营", "视频剪辑", "公众号排版", "海报设计", "PPT设计", "帖子文案", "广播广告", "原创小说", "摄影调色"],
  contacts: [
    { label: "邮箱", value: "hetty322zjy@163.com" }
  ]
};

// ===============================
// 这里修改进入页照片
// 设计者只需把照片放入 assets/images 并修改 src
// ===============================
const photoList = [
  { title: "故宫背影", src: "assets/images/photo1.jpg" },
  { title: "湖边夕阳", src: "assets/images/photo2.jpg" },
  { title: "港湾望风", src: "assets/images/photo3.jpg" },
  { title: "抱花时刻", src: "assets/images/photo4.jpg" },
  { title: "挥手记忆", src: "assets/images/photo5.jpg" }
];

// ===============================
// 这里修改作品分区
// ===============================
const bubbleCategories = [
  { id: "identity", label: "身份卡", type: "profile", desc: "关于 Hetty 的个人信息与关键词。" },
  { id: "operation", label: "运营", type: "works", desc: "新媒体运营、账号分析、内容复盘与营销策划。" },
  { id: "layout", label: "排版设计", type: "works", desc: "公众号排版、海报设计、PPT设计。" },
  { id: "video", label: "视频制作", type: "works", desc: "一些二创混剪、原创剧情片、剪辑vlog。" },
  { id: "copywriting", label: "文案", type: "works", desc: "帖子文案、广播广告、原创小说。" },
  { id: "photographyColor", label: "摄影调色", type: "photoWall", desc: "固定展示 12 张摄影与调色作品。" },
  { id: "message", label: "留言", type: "message", desc: "给 Hetty 留下一颗匿名泡泡。" }
];

// ===============================
// 这里修改作品内容
// 每个项目都可以新增 / 删除 / 修改；访客不能在网页中编辑
// type 可填 image / video / audio / novel / text / mixed
// ===============================
const worksData = {
  operation: {
    intro: "这里展示 Hetty 的新媒体运营、账号内容、选题策划、数据复盘与活动运营作品。",
    items: [
      {
        id: "op-001",
        bubbleText: "内容复盘",
        title: "小红书爆款内容分析",
        type: "image",
        date: "2026",
        role: "选题分析 / 数据复盘 / 内容拆解",
        intro: "分析小红书爆款内容的选题、封面、标题、评论区和互动数据，总结可复用的内容方法。",
        highlight: "用数据解释内容为什么能被点击、收藏和讨论，并提炼下一轮选题方向。",
        cover: "assets/images/operation-01-cover.jpg",
        images: ["assets/images/operation-01-1.jpg"],
        link: "#"
      }
    ]
  },
  layout: {
    intro: "这里展示 Hetty 的排版与视觉设计作品。",
    subcategories: {
      wechat: {
        title: "公众号排版",
        intro: "这里收集公众号图文排版作品，包括标题设计、正文节奏、配图安排与整体视觉统一。",
        items: [
          {
            id: "wechat-layout-001",
            bubbleText: "公众号 01",
            title: "公众号图文排版 01",
            type: "image",
            date: "2026",
            role: "图文排版 / 视觉统一",
            intro: "允许自己潦草生长—致这个春天还在找实习的你",
            highlight: "统一标题、段落和配图，让长图文更容易阅读。",
            cover: "assets/images/wechat-layout-01-cover.jpg",
            images: ["assets/images/wechat-layout-01-1.jpg"],
            link: "#"
          },
          {
            id: "wechat-layout-002",
            bubbleText: "公众号 02",
            title: "公众号图文排版 02",
            type: "image",
            date: "2026",
            role: "图文排版 / 视觉统一",
            intro: "我在二十一世纪的夏天漫步北平的冬天",
            highlight: "保持文字层级、配图节奏和阅读舒适度。",
            cover: "assets/images/wechat-layout-02-cover.jpg",
            images: ["assets/images/wechat-layout-02-1.jpg"],
            link: "#"
          }
        ]
      },
      poster: {
        title: "海报设计",
        intro: "这里展示活动海报、视觉主图、课程宣传图、作品集海报等平面视觉设计内容。",
        items: Array.from({ length: 7 }, (_, index) => {
          const num = String(index + 1).padStart(2, "0");
          return {
            id: `poster-${num}`,
            bubbleText: `海报 ${num}`,
            title: `海报设计 ${num}`,
            type: "image",
            date: "2026",
            role: "海报设计 / 信息排版",
            intro: "活动海报、视觉主图或作品集海报设计。",
            highlight: "把标题、时间、地点和视觉焦点整理到清晰层级里。",
            cover: `assets/images/poster-${num}-cover.jpg`,
            images: [`assets/images/poster-${num}-1.jpg`],
            link: "#"
          };
        })
      },
      ppt: {
        title: "PPT设计",
        intro: "这里展示课程汇报、项目展示、策划案路演等 PPT 视觉设计内容。",
        items: [
          {
            id: "ppt-001",
            bubbleText: "PPT",
            title: "PPT视觉设计",
            type: "image",
            date: "2026",
            role: "PPT排版 / 页面设计",
            intro: "课程汇报、项目展示或策划案路演的 PPT 页面设计。",
            highlight: "用清晰的版式和节奏承载汇报信息。",
            cover: "assets/images/ppt-01-cover.jpg",
            images: ["assets/images/ppt-01-page1.jpg"],
            link: "#"
          }
        ]
      },
      aiDesign: {
        title: "AI设计",
        intro: "这里展示 Hetty 使用 AI 工具辅助完成的视觉设计作品，包括品牌策划视觉、桌游视觉、活动物料与创意图像生成。",
        items: [
          {
            id: "ai-design-001",
            bubbleText: "HBN视觉",
            title: "HBN大广赛策划案视觉设计",
            category: "排版设计 / AI设计",
            type: "image",
            date: "2026",
            role: "AI视觉生成 / 画面设计 / 视觉风格统一",
            intro: "这里展示 HBN 大广赛策划案中的 AI 辅助视觉设计内容，包括产品视觉、活动物料、传播主视觉或页面设计。该作品获2026年第18届大广赛广东省三等奖。",
            cover: "assets/images/ai-design-01-cover.jpg",
            images: ["assets/images/ai-design-01-1.jpg"],
            videos: [],
            link: "#"
          },
          {
            id: "ai-design-002",
            bubbleText: "桌游视觉",
            title: "健康科普桌游视觉设计",
            category: "排版设计 / AI设计",
            type: "image",
            date: "2026",
            role: "AI视觉生成 / 桌游组件设计 / 视觉系统设计",
            intro: "这里展示健康科普桌游项目中的 AI 辅助视觉设计内容，包括棋盘、卡牌、规则书、包装盒或组件视觉。",
            cover: "assets/images/ai-design-02-cover.jpg",
            images: ["assets/images/ai-design-02-1.jpg"],
            videos: [],
            link: "#"
          }
        ]
      }
    }
  },
  video: {
    intro: "一些二创混剪、原创剧情片、剪辑vlog。",
    items: [
      {
        id: "video-work-001",
        title: "视频制作 01",
        type: "图片作品",
        cover: "assets/images/video-work-01.jpg",
        images: ["assets/images/video-work-01.jpg"]
      },
      {
        id: "video-work-002",
        title: "视频制作 02",
        type: "图片作品",
        cover: "assets/images/video-work-02.jpg",
        images: ["assets/images/video-work-02.jpg"]
      },
      {
        id: "video-work-003",
        title: "视频制作 03",
        type: "图片作品",
        cover: "assets/images/video-work-03.jpg",
        images: ["assets/images/video-work-03.jpg"]
      },
      {
        id: "video-work-004",
        title: "视频制作 04",
        type: "图片作品",
        cover: "assets/images/video-work-04.jpg",
        images: ["assets/images/video-work-04.jpg"]
      }
    ]
  },
  copywriting: {
    intro: "这里展示 Hetty 的文字创作与声音文案作品。",
    subcategories: {
      posts: {
        title: "帖子文案",
        intro: "收集自己编写的小红书文案和公众号推文；",
        items: [
          {
            id: "post-001",
            bubbleText: "帖子文案",
            title: "小红书文案",
            type: "image",
            date: "2026",
            role: "标题 / 正文 / 截图整理",
            intro: "for宋银硕",
            highlight: "图片可点击放大查看。",
            cover: "assets/images/post-copy-01-cover.jpg",
            images: ["assets/images/post-copy-01-1.jpg"],
            link: "#"
          },
          {
            id: "post-002",
            bubbleText: "公众号推文",
            title: "公众号推文",
            type: "image",
            date: "2026",
            role: "标题 / 正文 / 截图整理",
            intro: "公众号推文文案与截图展示。",
            highlight: "图片可点击放大查看。",
            cover: "assets/images/post-copy-02-cover.png",
            images: ["assets/images/post-copy-02-1.png"],
            link: "#"
          }
        ]
      },
      radio: {
        title: "广播广告",
        intro: "这里展示广播广告脚本与录音作品，包括广告创意、口播文案和声音节奏。",
        items: [
          {
            id: "radio-001",
            bubbleText: "HBN",
            title: "HBN广播广告",
            type: "audio",
            date: "2026",
            role: "广告创意 / 口播文案",
            intro: "这里展示 HBN 相关广播广告脚本与录音作品，包含广告创意、声音节奏与口播文案设计。",
            script: "让真功效名副其实。",
            cover: "assets/images/radio-ad-01-cover.png",
            audio: "assets/audio/radio-ad-01.mp3"
          },
          {
            id: "radio-002",
            bubbleText: "娃哈哈",
            title: "娃哈哈广播广告",
            type: "audio",
            date: "2026",
            role: "广告创意 / 口播文案",
            intro: "这里展示娃哈哈广播广告脚本与录音作品。该作品获2026年第18届大广赛广东省一等奖。",
            script: "陪你酸酸甜甜，懂你可可爱爱。",
            cover: "assets/images/radio-ad-02-cover.png",
            audio: "assets/audio/radio-ad-02.mp3"
          },
          {
            id: "radio-003",
            bubbleText: "纳爱斯",
            title: "纳爱斯广播广告",
            type: "audio",
            date: "2026",
            role: "广告创意 / 口播文案",
            intro: "这里展示纳爱斯广播广告脚本与录音作品。该作品获2026年第18届大广赛广东省三等奖。",
            script: "根源修护力，笑容超元气。",
            cover: "assets/images/radio-ad-03-cover.png",
            audio: "assets/audio/radio-ad-03.mp3"
          }
        ]
      },
      novel: {
        title: "原创小说",
        intro: "这里收录原创小说作品，点击后可在弹窗中滚动阅读长篇正文。",
        items: [
          {
            id: "novel-001",
            bubbleText: "原创小说",
            title: "柠檬青",
            type: "novel",
            date: "2026",
            role: "小说创作 / 长文本编辑",
            intro: "华大的学生周澄在一场车祸后患上逆行性遗忘，丢失了过去一年的记忆。他循着熟悉的柠檬香再次遇见许之盈，也拾起散落的记忆。",
            highlight: "心脏比记忆更早认出她，而他希望一切都还来得及。",
            textPath: "assets/texts/novel-01.txt",
            estimatedMinutes: 320
          }
        ]
      }
    }
  }
};

const photographyColorData = {
  title: "摄影调色",
  intro: "",
  photos: Array.from({ length: 12 }, (_, index) => {
    const num = String(index + 1).padStart(2, "0");
    return {
      id: `photo-color-${num}`,
      title: `照片${num}`,
      src: `assets/images/photo-color-${num}.jpg`
    };
  })
};

// ===============================
// 这里修改音乐列表
// 设计者如需更换歌曲：把音乐放入 assets/music，再改下面 src
// ===============================
const playlist = [
  { title: "Bubble Gum", src: "assets/music/Bubble Gum.mp3" },
  { title: "Deja Vu", src: "assets/music/Deja Vu.mp3" },
  { title: "Out of Melodies", src: "assets/music/Out of Melodies.mp3" },
  { title: "pine cone", src: "assets/music/pine cone.mp3" },
  { title: "Ditto", src: "assets/music/Ditto.mp3" },
  { title: "The Chase", src: "assets/music/The Chase.mp3" }
];

// ===============================
// 这里修改留言配置
// 留言为本地浏览器 localStorage 版本，不是全站共享
// ===============================
const messageStorageKey = "hetty_bubble_messages";

const state = {
  current: "desktop",
  historyStack: [],
  loadingTimer: null,
  loadingPercent: 0,
  collectedPhotos: new Set(),
  currentTrack: 0,
  hasRenderedPhotos: false,
  entryDialogTimer: null,
  novelScrollTimer: null,
  novelScrollSpeed: 1
};

const screens = {
  desktop: "desktop-screen",
  loading: "loading-screen",
  photoCollect: "photo-screen",
  bubbleWorld: "bubble-world-screen",
  categoryDetail: "category-screen",
  messageZone: "message-screen"
};

function $(id) { return document.getElementById(id); }

function initApp() {
  renderDesktopFiles();
  renderBubbleCategories();
  initGlobalNav();
  initMusicPlayer();
  initBubbleCursor();
  initEntryButtons();
  renderMessages();
  showScreen("desktop", false);
  createWorldDecorBubbles();
  scheduleEntryDialog();
}

function scheduleEntryDialog() {
  const dialog = document.querySelector(".entry-dialog");
  const message = $("entry-dialog-message");
  if (!dialog) return;
  dialog.classList.remove("is-visible");
  if (message) message.textContent = "是否进入 Hetty 的泡泡世界？";
  window.clearTimeout(state.entryDialogTimer);
  state.entryDialogTimer = window.setTimeout(() => {
    if (state.current === "desktop") dialog.classList.add("is-visible");
  }, 5000);
}

function initEntryButtons() {
  $("enter-world-btn").addEventListener("click", () => {
    safePlay();
    startLoading();
  });
  $("not-now-btn").addEventListener("click", () => {
    const msg = $("entry-dialog-message");
    if (msg) msg.textContent = "Hetty在泡泡世界等你";
    const dialog = document.querySelector(".entry-dialog");
    dialog.classList.remove("shake");
    void dialog.offsetWidth;
    dialog.classList.add("shake");
  });
}

function showScreen(nextState, pushHistory = true) {
  if (pushHistory && state.current && state.current !== nextState) {
    state.historyStack.push(state.current);
  }
  state.current = nextState;
  Object.entries(screens).forEach(([key, id]) => {
    const el = $(id);
    if (el) el.classList.toggle("active", key === nextState);
  });
  $("global-nav").classList.toggle("hidden", nextState === "desktop");
  document.body.classList.toggle("photo-wall-mode", nextState === "categoryDetail" && $("category-title")?.textContent === photographyColorData.title);
}

function goBack() {
  stopLoading();
  const prev = state.historyStack.pop() || "desktop";
  showScreen(prev, false);
}

function goHome() {
  stopLoading();
  state.historyStack = [];
  state.collectedPhotos.clear();
  state.hasRenderedPhotos = false;
  clearModal();
  showScreen("desktop", false);
  scheduleEntryDialog();
}

function initGlobalNav() {
  $("back-btn").addEventListener("click", goBack);
  $("home-btn").addEventListener("click", goHome);
}

function renderDesktopFiles() {
  const area = $("desktop-files");
  area.innerHTML = "";
  area.setAttribute("aria-label", "空白文件窗口");
}

function startLoading() {
  stopLoading();
  state.loadingPercent = 0;
  $("loading-text").textContent = "正在进入泡泡世界 0%";
  $("progress-bar").style.width = "0%";
  $("loading-screen").style.setProperty("--sea-opacity", "0");
  $("loading-screen").style.setProperty("--desktop-opacity", "1");
  $("loading-bubbles").innerHTML = "";
  showScreen("loading");
  state.loadingTimer = setInterval(() => {
    state.loadingPercent += 1;
    updateLoadingStage(state.loadingPercent);
    if (state.loadingPercent >= 100) {
      stopLoading(false);
      setTimeout(() => enterPhotoCollect(), 850);
    }
  }, 45);
}

function stopLoading(clear = true) {
  if (state.loadingTimer) clearInterval(state.loadingTimer);
  state.loadingTimer = null;
  if (clear) state.loadingPercent = 0;
}

function updateLoadingStage(percent) {
  const seaOpacity = Math.min(1, Math.max(0, (percent - 20) / 80));
  const desktopOpacity = Math.max(0.14, 1 - percent / 115);
  $("loading-screen").style.setProperty("--sea-opacity", seaOpacity.toFixed(2));
  $("loading-screen").style.setProperty("--desktop-opacity", desktopOpacity.toFixed(2));
  $("loading-text").textContent = percent >= 100 ? "泡泡世界已打开 100%" : `正在进入泡泡世界 ${percent}%`;
  $("progress-bar").style.width = `${percent}%`;
  if (percent % 3 === 0) spawnLoadingBubble(percent);
}

function spawnLoadingBubble(percent) {
  const bubble = document.createElement("span");
  bubble.className = "floating-bubble";
  const size = 22 + Math.random() * (percent > 65 ? 110 : 68);
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;
  bubble.style.left = `${Math.random() * 96}%`;
  bubble.style.setProperty("--duration", `${5 + Math.random() * 6}s`);
  bubble.style.setProperty("--drift", `${-60 + Math.random() * 120}px`);
  bubble.style.zIndex = Math.random() > .72 ? 3 : 1;
  $("loading-bubbles").appendChild(bubble);
  bubble.addEventListener("animationend", () => bubble.remove());
}

function enterPhotoCollect() {
  state.collectedPhotos.clear();
  state.hasRenderedPhotos = false;
  showScreen("photoCollect");
  renderPhotos();
}

function renderPhotos() {
  const area = $("photo-window-area");
  area.innerHTML = "";
  $("photo-count").textContent = `0 / ${photoList.length} 泡泡已收集`;
  const positions = [
    { left: "13%", top: "30%", rot: "-5deg" },
    { left: "39%", top: "24%", rot: "0deg" },
    { left: "62%", top: "42%", rot: "2deg" },
    { left: "25%", top: "61%", rot: "0deg" },
    { left: "50%", top: "67%", rot: "-2deg" }
  ];
  photoList.forEach((photo, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "photo-window";
    card.style.left = positions[index]?.left || "40%";
    card.style.top = positions[index]?.top || "45%";
    card.style.setProperty("--rot", positions[index]?.rot || "0deg");
    card.innerHTML = `
      <div class="mac-titlebar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><strong></strong></div>
      <img src="${photo.src}" alt="${photo.title}" onerror="this.style.display='none'; this.parentElement.classList.add('no-image');">`;
    card.addEventListener("click", () => handlePhotoToBubble(card, photo, index));
    area.appendChild(card);
    setTimeout(() => card.classList.add("rise-in"), 260 + index * 260);
  });
}

function handlePhotoToBubble(card, photo, index) {
  if (state.collectedPhotos.has(index)) return;
  state.collectedPhotos.add(index);
  const rect = card.getBoundingClientRect();
  const bubble = document.createElement("div");
  bubble.className = "photo-memory-bubble";
  bubble.style.left = `${rect.left + rect.width / 2 - 55}px`;
  bubble.style.top = `${rect.top + rect.height / 2 - 55}px`;
  bubble.style.width = "110px";
  bubble.style.height = "110px";
  bubble.style.backgroundImage = `linear-gradient(rgba(210,235,255,.22), rgba(255,255,255,.16)), url('${photo.src}')`;
  document.body.appendChild(bubble);
  bubble.addEventListener("animationend", () => bubble.remove());
  card.classList.add("collected");
  $("photo-count").textContent = `${state.collectedPhotos.size} / ${photoList.length} 泡泡已收集`;
  if (state.collectedPhotos.size === photoList.length) {
    $("photo-count").textContent = "所有泡泡已收集，正在进入 Hetty 的泡泡世界。";
    setTimeout(() => showScreen("bubbleWorld"), 1600);
  }
}

function createWorldDecorBubbles() {
  const area = $("world-decor-bubbles");
  if (!area) return;
  area.innerHTML = "";
  // 泡泡世界持续漂浮大量装饰泡泡；层级低于标题、弹窗和作品内容，不遮盖交互弹窗。
  for (let i = 0; i < 72; i++) {
    const b = document.createElement("span");
    b.className = "decor-bubble";
    const size = 22 + Math.random() * 142;
    b.style.width = `${size}px`;
    b.style.height = `${size}px`;
    b.style.left = `${Math.random() * 100}%`;
    b.style.top = `${Math.random() * 110}%`;
    b.style.setProperty("--drift-x", `${-55 + Math.random() * 110}px`);
    b.style.setProperty("--drift-duration", `${14 + Math.random() * 18}s`);
    b.style.setProperty("--bubble-opacity", `${.22 + Math.random() * .33}`);
    b.style.setProperty("--bubble-blur", `${Math.random() * 1.1}px`);
    b.style.animationDelay = `${-Math.random() * 20}s, ${-Math.random() * 18}s`;
    area.appendChild(b);
  }
}

function renderBubbleCategories() {
  const area = $("bubble-category-area");
  const coords = [
    [8, 28], [28, 12], [49, 25], [72, 17], [10, 62], [34, 67], [56, 62], [78, 58]
  ];
  area.innerHTML = bubbleCategories.map((cat, index) => {
    const [left, top] = coords[index] || [20 + index * 8, 40];
    return `<button class="pixel-bubble interactive-bubble" type="button" data-category="${cat.id}" style="left:${left}%;top:${top}%;animation-delay:${-index * .5}s"><span class="bubble-label">${cat.label}</span></button>`;
  }).join("");
  area.querySelectorAll("[data-category]").forEach(btn => {
    btn.addEventListener("click", () => openCategory(btn.dataset.category));
  });
}

function openCategory(categoryId) {
  const cat = bubbleCategories.find(c => c.id === categoryId);
  if (!cat) return;
  if (cat.type === "message") {
    renderMessages();
    showScreen("messageZone");
    return;
  }
  showScreen("categoryDetail");
  $("category-title").textContent = cat.label;
  $("category-desc").textContent = cat.desc;
  document.body.classList.remove("photo-wall-mode");
  if (cat.type === "profile") renderProfile();
  else if (cat.type === "photoWall") renderPhotographyColor();
  else renderWorks(categoryId);
}

function renderProfile() {
  $("category-content").innerHTML = `
    <div class="profile-card">
      <div class="profile-avatar" aria-hidden="true"></div>
      <div>
        <h3>${profileData.name}</h3>
        <p>${profileData.slogan}</p>
        <p>${profileData.intro}</p>
        <div class="keywords">${profileData.identityTags.map(k => `<span>${k}</span>`).join("")}</div>
        <div class="keywords">${profileData.skills.map(k => `<span>${k}</span>`).join("")}</div>
        <div class="profile-contacts">${profileData.contacts.map(item => `<p>${item.label}：${item.value}</p>`).join("")}</div>
      </div>
    </div>`;
}

function renderWorks(categoryId) {
  const section = worksData[categoryId];
  if (!section) {
    $("category-content").innerHTML = `<div class="empty-state">这个分区还没有作品。设计者可在 script.js 顶部 worksData.${categoryId} 中新增项目。</div>`;
    return;
  }
  if (section.subcategories) {
    const subs = Object.entries(section.subcategories);
    $("category-content").innerHTML = `
      <p class="action-hint">点击作品查看完整内容</p>
      <div class="work-bubble-area subcategory-area">${subs.map(([key, sub]) => `
        <button class="work-bubble subcategory-bubble" type="button" data-subcategory="${key}">
          <span>${sub.title}</span><small>${sub.items.length} 个作品</small>
        </button>`).join("")}</div>`;
    document.querySelectorAll("[data-subcategory]").forEach(btn => {
      btn.addEventListener("click", () => renderSubcategory(categoryId, btn.dataset.subcategory));
    });
    return;
  }
  if (categoryId === "video") {
    $("category-title").textContent = "视频制作";
    $("category-desc").textContent = section.intro;
    renderVideoImageGallery(section.items || []);
    return;
  }
  renderWorkItems(categoryId, section.title || "", section.intro, section.items || []);
}

function renderSubcategory(categoryId, subcategoryId) {
  const sub = worksData[categoryId]?.subcategories?.[subcategoryId];
  if (!sub) return;
  $("category-title").textContent = sub.title;
  $("category-desc").textContent = sub.intro;
  renderWorkItems(categoryId, subcategoryId, sub.intro, sub.items || []);
}

function renderVideoImageGallery(items) {
  $("category-content").innerHTML = `
    <p class="action-hint">点击图片查看完整内容</p>
    <div class="media-grid">${items.map(item => `
      <button type="button" class="media-button" data-img="${item.cover}" aria-label="${item.title}">
        <img src="${item.cover}" alt="${item.title}" onerror="this.style.display='none';this.parentElement.classList.add('missing-media');this.parentElement.insertAdjacentHTML('beforeend','<span>图片待补充</span>')">
      </button>`).join("")}</div>`;
  document.querySelectorAll("[data-img]").forEach(btn => {
    btn.addEventListener("click", () => openImageLightbox(btn.dataset.img));
  });
}

function renderWorkItems(categoryId, subcategoryId, intro, works) {
  if (!works.length) {
    $("category-content").innerHTML = `
      <p class="action-hint">点击作品查看完整内容</p>
      <div class="empty-state">这个空间还没有作品。设计者可在 script.js 顶部对应 items 数组中新增项目。</div>`;
    return;
  }
  $("category-content").innerHTML = `
    <p class="action-hint">${categoryId === "photographyColor" ? "点击图片查看完整内容" : "点击作品查看完整内容"}</p>
    <div class="work-bubble-area">${works.map(work => `
    <button class="work-bubble" type="button" data-work="${work.id}" data-category="${categoryId}">
      <span>${work.bubbleText || work.title}</span><small>${work.type}</small>
    </button>`).join("")}</div>`;
  document.querySelectorAll(".work-bubble").forEach(btn => {
    btn.addEventListener("click", () => {
      const work = works.find(w => w.id === btn.dataset.work);
      openWorkDetail(work);
    });
  });
}

function renderPhotographyColor() {
  document.body.classList.add("photo-wall-mode");
  $("category-title").textContent = photographyColorData.title;
  $("category-desc").textContent = "";
  $("category-content").innerHTML = `
    <p class="action-hint">点击图片查看完整内容</p>
    <div class="photo-wall">${photographyColorData.photos.map((photo, index) => `
      <button type="button" class="photo-wall-item" data-photo-index="${index}" style="--stagger:${index * 42}ms">
        <span class="photo-thumb-frame">
          <img loading="lazy" decoding="async" src="${photo.src}" alt="${photo.title}" onload="this.closest('.photo-wall-item').classList.add('loaded')" onerror="this.style.display='none';this.closest('.photo-wall-item').classList.add('missing-photo');">
        </span>
        <span class="photo-wall-label">${photo.title}</span>
      </button>`).join("")}</div>`;
  document.querySelectorAll("[data-photo-index]").forEach(btn => {
    btn.addEventListener("click", () => openPhotoLightbox(Number(btn.dataset.photoIndex)));
  });
}

function openWorkDetail(work) {
  if (!work) return;
  if (work.type === "novel") {
    openNovelReader(work);
    return;
  }
  const media = renderWorkMedia(work);
  const imageHint = hasImageMedia(work) ? `<span class="modal-side-hint">点击图片查看全文</span>` : "";
  openModal(`
    <div class="modal-card">
      <h3>${work.title}</h3>
      <div class="modal-meta"><span>${work.type}</span><span>${work.date || "待补充时间"}</span><span>${work.role || "待补充职责"}</span></div>
      <p>${work.intro}</p>
      ${work.script ? `<blockquote class="script-quote">${work.script}</blockquote>` : ""}
      ${media}
      <div class="modal-actions">
        ${imageHint}
        ${work.link && work.link !== "#" ? `<a class="pixel-button" href="${work.link}" target="_blank" rel="noopener">查看链接</a>` : ""}
        <button class="pixel-button primary" type="button" data-close-modal>关闭</button>
      </div>
    </div>`);
}

function renderWorkMedia(work) {
  const images = work.images && work.images.length ? work.images : (work.cover ? [work.cover] : []);
  const imgHtml = images.length ? `<div class="media-grid">${images.map(src => `<button type="button" class="media-button" data-img="${src}"><img src="${src}" alt="${work.title}" onerror="this.style.display='none';this.parentElement.classList.add('missing-media');this.parentElement.insertAdjacentHTML('beforeend','<span>图片待补充</span>')"></button>`).join("")}</div>` : "";
  const audioHtml = work.audio ? `<div class="audio-work"><audio controls preload="metadata" src="${work.audio}" onerror="this.nextElementSibling.classList.remove('hidden')">录音文件待补充</audio><p class="asset-fallback hidden">录音文件待补充</p></div>` : "";
  return imgHtml + audioHtml;
}

function hasImageMedia(work) {
  return Boolean((work.images && work.images.length) || work.cover);
}

function openModal(html) {
  const root = $("modal-root");
  root.innerHTML = html;
  root.classList.remove("hidden");
  root.querySelectorAll("[data-close-modal]").forEach(btn => btn.addEventListener("click", clearModal));
  root.querySelectorAll("[data-img]").forEach(btn => btn.addEventListener("click", () => openImageLightbox(btn.dataset.img)));
  root.querySelectorAll("[data-photo-prev]").forEach(btn => btn.addEventListener("click", () => openPhotoLightbox(Number(btn.dataset.photoPrev))));
  root.querySelectorAll("[data-photo-next]").forEach(btn => btn.addEventListener("click", () => openPhotoLightbox(Number(btn.dataset.photoNext))));
  root.querySelectorAll("[data-novel-action]").forEach(btn => btn.addEventListener("click", () => handleNovelAction(btn.dataset.novelAction)));
}

function clearModal() {
  const root = $("modal-root");
  window.clearInterval(state.novelScrollTimer);
  state.novelScrollTimer = null;
  root.classList.add("hidden");
  root.innerHTML = "";
}

function openImageLightbox(src) {
  openModal(`<img class="lightbox-img" src="${src}" alt="放大图片"><div class="modal-actions"><span class="modal-side-hint">点击图片查看全文</span><button class="pixel-button primary" type="button" data-close-modal>关闭</button></div>`);
}

function openPhotoLightbox(index) {
  const photos = photographyColorData.photos;
  const safeIndex = (index + photos.length) % photos.length;
  const photo = photos[safeIndex];
  const prev = (safeIndex - 1 + photos.length) % photos.length;
  const next = (safeIndex + 1) % photos.length;
  openModal(`
    <div class="modal-card photo-lightbox-card">
      <h3>${photo.title}</h3>
      <img class="lightbox-img" decoding="async" src="${photo.src}" alt="${photo.title}" onerror="this.style.display='none';this.insertAdjacentHTML('afterend','<div class=&quot;empty-state&quot;>照片待补充</div>')">
      <div class="modal-actions">
        <span class="modal-side-hint">点击图片查看全文</span>
        <button class="pixel-button" type="button" data-photo-prev="${prev}">上一张</button>
        <button class="pixel-button" type="button" data-photo-next="${next}">下一张</button>
        <button class="pixel-button primary" type="button" data-close-modal>关闭</button>
      </div>
    </div>`);
}

function openNovelReader(work) {
  openModal(`
    <div class="modal-card novel-card">
      <h3>${work.title}</h3>
      <div class="modal-meta"><span>${work.type}</span><span>${work.date || "待补充时间"}</span><span>${work.role || "待补充职责"}</span></div>
      <p>${work.intro}</p>
      <p class="asset-fallback">预计阅读完成需约 ${work.estimatedMinutes || "待估算"} 分钟，可手动滚动，也可开启自动滚动。</p>
      <div id="novel-reader" class="novel-reader" data-text-path="${work.textPath}">小说正文加载中...</div>
      <div class="modal-actions novel-controls">
        <button class="pixel-button" type="button" data-novel-action="start">自动滚动</button>
        <button class="pixel-button" type="button" data-novel-action="pause">暂停滚动</button>
        <button class="pixel-button" type="button" data-novel-action="slow">慢速</button>
        <button class="pixel-button" type="button" data-novel-action="medium">中速</button>
        <button class="pixel-button" type="button" data-novel-action="fast">快速</button>
        <button class="pixel-button primary" type="button" data-close-modal>关闭</button>
      </div>
    </div>`);
  loadNovelText(work.textPath);
}

function loadNovelText(path) {
  const reader = $("novel-reader");
  fetch(path)
    .then(res => {
      if (!res.ok) throw new Error("missing");
      return res.clone().text().then(text => {
        if (!text.includes("�")) return text;
        return res.arrayBuffer().then(buffer => {
          try {
            return new TextDecoder("gb18030").decode(buffer);
          } catch {
            return text;
          }
        });
      });
    })
    .then(text => {
      reader.textContent = text.trim() || "小说正文待补充";
    })
    .catch(() => {
      reader.textContent = "小说正文待补充";
    });
}

function handleNovelAction(action) {
  const reader = $("novel-reader");
  if (!reader) return;
  if (action === "pause") {
    window.clearInterval(state.novelScrollTimer);
    state.novelScrollTimer = null;
    return;
  }
  if (action === "slow") state.novelScrollSpeed = 0.6;
  if (action === "medium") state.novelScrollSpeed = 1.2;
  if (action === "fast") state.novelScrollSpeed = 2.2;
  window.clearInterval(state.novelScrollTimer);
  state.novelScrollTimer = window.setInterval(() => {
    reader.scrollTop += state.novelScrollSpeed;
    if (reader.scrollTop + reader.clientHeight >= reader.scrollHeight) {
      window.clearInterval(state.novelScrollTimer);
      state.novelScrollTimer = null;
    }
  }, 24);
}

function initMusicPlayer() {
  const audio = $("audio-player");
  audio.src = playlist[0].src;
  $("track-title").textContent = playlist[0].title;
  $("play-btn").addEventListener("click", safePlay);
  $("pause-btn").addEventListener("click", () => { audio.pause(); updateCd(false); });
  $("next-btn").addEventListener("click", nextTrack);
  audio.addEventListener("ended", nextTrack);
  audio.addEventListener("play", () => updateCd(true));
  audio.addEventListener("pause", () => updateCd(false));
}

function safePlay() {
  const audio = $("audio-player");
  if (!audio.src) audio.src = playlist[state.currentTrack].src;
  audio.play().catch(() => {
    // 浏览器可能禁止自动播放；用户点击播放按钮后会正常播放。
  });
}

function nextTrack() {
  const audio = $("audio-player");
  state.currentTrack = (state.currentTrack + 1) % playlist.length;
  audio.src = playlist[state.currentTrack].src;
  $("track-title").textContent = playlist[state.currentTrack].title;
  safePlay();
}

function updateCd(isPlaying) {
  $("cd-disc").classList.toggle("is-playing", isPlaying);
}

function getMessages() {
  try { return JSON.parse(localStorage.getItem(messageStorageKey) || "[]"); }
  catch { return []; }
}

function setMessages(messages) {
  localStorage.setItem(messageStorageKey, JSON.stringify(messages));
}

function initMessages() {
  $("create-message-btn").addEventListener("click", saveMessage);
}

function saveMessage() {
  const input = $("message-input");
  const text = input.value.trim();
  const tip = $("message-tip");
  if (!text) { tip.textContent = "请先写下一句话。"; return; }
  const messages = getMessages();
  messages.unshift({ id: String(Date.now()), text, createdAt: new Date().toLocaleString() });
  setMessages(messages);
  input.value = "";
  tip.textContent = "一颗新的泡泡已生成。";
  renderMessages(true);
}

function renderMessages(markNew = false) {
  const area = $("message-bubble-area");
  if (!area) return;
  const messages = getMessages();
  area.innerHTML = messages.length ? messages.map((msg, index) => {
    const preview = msg.text.length > 10 ? msg.text.slice(0, 10) + "…" : msg.text || "匿名泡泡";
    return `<button class="message-bubble ${markNew && index === 0 ? "new" : ""}" type="button" data-message="${msg.id}">${preview}</button>`;
  }).join("") : `<div class="empty-state">还没有留言泡泡。写下一句话，让它留在这里。</div>`;
  area.querySelectorAll("[data-message]").forEach(btn => btn.addEventListener("click", () => openMessageDetail(btn.dataset.message)));
}

function openMessageDetail(id) {
  const msg = getMessages().find(m => m.id === id);
  if (!msg) return;
  openModal(`
    <div class="modal-card">
      <h3>一颗匿名泡泡</h3>
      <p>${escapeHtml(msg.text)}</p>
      <p><small>${msg.createdAt}</small></p>
      <div class="modal-actions">
        <button class="pixel-button" type="button" data-delete-message="${msg.id}">删除这颗泡泡</button>
        <button class="pixel-button primary" type="button" data-close-modal>关闭</button>
      </div>
    </div>`);
  const del = document.querySelector("[data-delete-message]");
  if (del) del.addEventListener("click", () => deleteMessage(id));
}

function deleteMessage(id) {
  const messages = getMessages().filter(m => m.id !== id);
  setMessages(messages);
  clearModal();
  renderMessages();
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch]));
}

function initBubbleCursor() {
  const cursor = document.createElement("div");
  cursor.className = "bubble-cursor";
  document.body.appendChild(cursor);
  document.addEventListener("mousemove", e => {
    cursor.style.transform = `translate3d(${e.clientX - 14}px, ${e.clientY - 14}px, 0)`;
  });
  document.addEventListener("mouseover", e => {
    if (e.target.closest("button, a, .interactive-bubble, .pixel-bubble, .photo-window, .desktop-icon, .music-player button, .message-bubble, .work-bubble, .media-button")) {
      cursor.classList.add("is-hovering");
    }
  });
  document.addEventListener("mouseout", e => {
    if (e.target.closest("button, a, .interactive-bubble, .pixel-bubble, .photo-window, .desktop-icon, .music-player button, .message-bubble, .work-bubble, .media-button")) {
      cursor.classList.remove("is-hovering");
    }
  });
  document.addEventListener("click", e => createBubbleRipple(e.clientX, e.clientY));
  document.addEventListener("touchstart", e => {
    const touch = e.touches[0];
    if (touch) createBubbleRipple(touch.clientX, touch.clientY);
  }, { passive: true });
}

function createBubbleRipple(x, y) {
  const ripple = document.createElement("div");
  ripple.className = "bubble-click-ripple";
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);
  ripple.addEventListener("animationend", () => ripple.remove());
}

// 初始化留言按钮监听需要在 DOM 就绪后绑定
window.addEventListener("DOMContentLoaded", () => {
  initApp();
  initMessages();
});
