const activitiesData = {
  Myths_Wonders: { // 錄異記
    coin: 135,
    stamina: 24,
    material: [19, 21, 12, 18, 29, 21, 25, 28, 17, 17, 29, 29, 38, 38, 8, 23],
    specialItems: []
  },
  The_Decameron: { // 十日談
    coin: 280,
    stamina: 14,
    material: [30, 32, 16, 28, 43, 28, 36, 45, 25, 25, 41, 41, 58, 58, 11, 40],
    specialItems: []
  },
  Midnight_Epilogue: { //暗夜終章-復刻
    coin: 120,
    stamina: 14,
    material: [30, 29, 28, 43, 46, 27, 41, 48, 32, 32, 48, 48, 57, 57, 14, 28],
    specialItems: []
  },
  Mist_City_1: { //霧隱都市
    coin: 330,
    stamina: 20,
    material: [57, 62, 33, 53, 83, 59, 78, 83, 47, 48, 77, 77, 107, 107, 18, 59],
    specialItems: []
  },
  Mist_City_2: { //霧隱都市-2
    coin: 360,
    stamina: 20,
    material: [65, 70, 36, 59, 92, 66, 86, 92, 52, 52, 86, 85, 119, 119, 20, 66],
    specialItems: []
  },
  tide_1: { //潮汐瓦解
    name: "潮汐瓦解-1",
    coin: 160,
    stamina: 20,
    material: [30, 32, 16, 28, 43, 28, 36, 45, 25, 25, 41, 41, 58, 58, 12, 40],
    specialItems: []
  },
  tide_2: { //潮汐瓦解
    name: "潮汐瓦解-2",
    coin: 160,
    stamina: 20,
    material: [30, 34, 16, 28, 43, 30, 38, 48, 25, 25, 41, 41, 58, 58, 12, 42],
    specialItems: []
  },
  ayn_2025: {
    name: "艾因生日25",
    coin: 77,
    stamina: 20,
    material: [12, 12, 6, 11, 16, 10, 13, 16, 9, 9, 15, 15, 22, 22, 1000000, 1000000],
    specialItems: [],
    color: "#FFD1DC"
  },
  jewel: {
    name: "珠寶(1+2)",
    coin: 100,
    stamina: 20,
    material: [15, 15, 10, 15, 25, 15, 20, 25, 10, 10, 20, 20, 30, 30, 5, 15],
    specialItems: [],
    color: "#CDA581"
  },
  wedding: {
    name: "漫長的箴言",
    coin: 100,
    stamina: 20,
    material: [18, 20, 11, 17, 29, 19, 22, 24, 17, 17, 29, 29, 38, 38, 7, 26],
    color: "#87CEEB"
  },
  lu_personal: {
    name: "長日為伴",
    coin: 88,
    stamina: 14,
    material: [24, 24, 12, 22, 32, 20, 26, 32, 16, 16, 26, 26, 40, 40, 1000000, 1000000],
    specialItems: [
      { name: "夢境之羽", note: "升技能用" },
      { name: "好感禮盒.路辰", note: "升好感度，只會有路辰的禮物" },
      { name: "金幣300", note: "無法計算價值" },
      { name: "金幣100", note: "無法計算價值" }
    ],
    color: "#D8EACC"
  },
  chinese_wedding: {
    name: "與卿書復刻",
    coin: 42,
    stamina: 10,
    material: [21, 22, 11, 19, 29, 20, 27, 29, 17, 17, 28, 28, 41, 41, 4, 14],
    specialItems: [
      { name: "錫幣", note: "抽繪卷" },
      { name: "星塵明輝", note: "升經驗，但只能用在SR以下"},
      { name: "時光手札", note: "解鎖和兌換復刻相關商品"},
      { name: "好感禮盒.路辰", note: "升好感度，只會有路辰的禮物" },
      { name: "好感禮盒.羅夏", note: "升好感度，只會有羅夏的禮物" },
      { name: "好感禮盒.艾因", note: "升好感度，只會有艾因的禮物" },
      { name: "好感禮盒.司嵐", note: "升好感度，只會有司嵐的禮物" },
      { name: "好感禮盒.葉瑄", note: "升好感度，只會有葉瑄的禮物" },
      { name: "金幣3000", note: "價值比300高，較好" },
      { name: "金幣300", note: "價值比3000低，較差" }
    ],
    color: "#ffcaca"
  },
  dark_mountain_1: {
    name: "黑暗的遠山-城邦市集",
    coin: 150,
    stamina: 20,
    material: [30, 32, 16, 28, 43, 28, 36, 45, 25, 25, 41, 41, 58, 58, 12, 40],
    specialItems: [
      { name: "老荷蘭顏料", note: "-" },
      { name: "夢境之羽", note: "-" },
      { name: "裂隙之海", note: "活動SR" },
      { name: "誕生", note: "活動繪卷"},
      { name: "【誕生】", note: "升級活動繪卷"},
      { name: "金幣300", note: "-" }
    ],
    color: "#5d4667"
  },
  dark_mountain_2: {
    name: "黑暗的遠山-魔藥交易所",
    coin: 160,
    stamina: 20,
    material: [30, 32, 16, 28, 43, 28, 36, 45, 25, 25, 41, 41, 58, 58, 12, 40],
    specialItems: [
      { name: "老荷蘭顏料", note: "-" },
      { name: "夢境之羽", note: "-" },
      { name: "裂隙之海", note: "活動SR" },
      { name: "誕生", note: "活動繪卷"},
      { name: "【誕生】", note: "升級活動繪卷"},
      { name: "金幣300", note: "-" }
    ],
    color: "#5d4667"
  }
};

const info_arr = [
  { name: "星塵之鈴.承", stamina: 4.0 }, //注意數值是 * 3
  { name: "星塵之鈴.破", stamina: 4.45 },
  { name: "突破材料.初階", stamina: 2.15 },
  { name: "突破材料.中階", stamina: 5.13 },
  { name: "突破材料.高階", stamina: 5.875 },
  { name: "技能材料.初階", stamina: 4.31 },
  { name: "技能材料.中階", stamina: 6.67 },
  { name: "技能材料.高階", stamina: 6.54 },
  { name: "蝴蝶胸針", stamina: 3.43 },
  { name: "珍珠耳釘", stamina: 3.43 },
  { name: "抹茶餅乾", stamina: 5.59 },
  { name: "金屬書籤", stamina: 5.59 },
  { name: "白桃果凍", stamina: 8.56 },
  { name: "指南針", stamina: 8.56 },
  { name: "記憶銘刻.影", stamina: 0.77 },
  { name: "記憶銘刻.灼", stamina: 2.57 }
];

let currentActivity = null;

function renderSpecialItems(activity) {
  const container = document.getElementById("special-items");

  if (!activity.specialItems || activity.specialItems.length === 0) {
    container.innerHTML = "<p>本活動沒有特殊物品</p>";
    return;
  }

  let table = `
    <table class="result-table">
      <thead>
        <tr>
          <th>物品名稱</th>
          <th>備註</th>
        </tr>
      </thead>
      <tbody>
        ${activity.specialItems.map(item => `
          <tr>
            <td>${item.name}</td>
            <td>${item.note}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  container.innerHTML = table;
}

function selectActivity(key) {
  currentActivity = key;
  const activity = activitiesData[key];
  document.body.style.background = activity.color || "white";
  document.getElementById("output").textContent = "";
  document.getElementById("CurrentActivityName").textContent = activity.name || key;

  renderSpecialItems(activity);
}


function calculate() {
  if (!currentActivity) {
    alert("請先選擇一個活動！");
    return;
  }

  const bonus = parseFloat(document.getElementById("bonus").value) || 0;
  const activity = activitiesData[currentActivity];

  let coin_once = activity.coin;
  let stamina_once = activity.stamina;
  coin_once *= (1 + bonus / 100.0);
  
  const coin_stamina = stamina_once / coin_once;

  let cost_effectiveness_arr = info_arr.map((item, i) => {
    let per_material_price = activity.material[i] * coin_stamina;
    let cost_effectiveness = per_material_price / item.stamina;
    return { name: item.name, value: cost_effectiveness };
  });

  cost_effectiveness_arr.sort((a, b) => a.value - b.value);
  let table = `
    <table class="result-table">
      <thead>
        <tr>
          <th>排名</th>
          <th>道具名稱</th>
          <th>性價比(越小越好)</th>
        </tr>
      </thead>
      <tbody>
        ${cost_effectiveness_arr.map((item, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.value > 100 ? '-' : item.value.toFixed(4)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>`;
  
  document.getElementById("output").innerHTML = table;
}