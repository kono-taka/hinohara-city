const iconProps = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
};

const s = "#1a4494"; // stroke color
const sw = "2"; // strokeWidth
const sw15 = "1.5";

export function IconJumin() {
  // 人と矢印（転入・転出）
  return (
    <svg {...iconProps}>
      {/* 人物 */}
      <circle cx="13" cy="10" r="4" stroke={s} strokeWidth={sw} />
      <path d="M5 28c0-6 4-10 8-10h1" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      {/* 建物 */}
      <rect x="20" y="18" width="15" height="12" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M18 18l9.5-8 9.5 8" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      <rect x="25" y="23" width="5" height="7" stroke={s} strokeWidth={sw15} strokeLinejoin="round" />
      {/* 矢印 */}
      <path d="M15 23l4-3-4-3" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconZei() {
  // 硬貨・紙幣（市税）
  return (
    <svg {...iconProps}>
      {/* 紙幣 */}
      <rect x="3" y="8" width="28" height="18" rx="2" stroke={s} strokeWidth={sw} />
      <circle cx="17" cy="17" r="5" stroke={s} strokeWidth={sw} />
      <line x1="3" y1="13" x2="7" y2="13" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <line x1="27" y1="13" x2="31" y2="13" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <line x1="3" y1="21" x2="7" y2="21" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <line x1="27" y1="21" x2="31" y2="21" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      {/* 硬貨 */}
      <circle cx="31" cy="29" r="6" fill="white" stroke={s} strokeWidth={sw} />
      <line x1="31" y1="26" x2="31" y2="32" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <line x1="29" y1="27.5" x2="33" y2="27.5" stroke={s} strokeWidth={sw15} strokeLinecap="round" />
      <line x1="29" y1="30.5" x2="33" y2="30.5" stroke={s} strokeWidth={sw15} strokeLinecap="round" />
    </svg>
  );
}

export function IconGomi() {
  // ゴミ箱
  return (
    <svg {...iconProps}>
      {/* 本体 */}
      <path d="M9 14l2 20h18l2-20" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* フタ */}
      <rect x="6" y="10" width="28" height="4" rx="1" stroke={s} strokeWidth={sw} />
      {/* 持ち手 */}
      <path d="M16 10V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke={s} strokeWidth={sw} />
      {/* 線 */}
      <line x1="16" y1="18" x2="15" y2="30" stroke={s} strokeWidth={sw15} strokeLinecap="round" />
      <line x1="20" y1="18" x2="20" y2="30" stroke={s} strokeWidth={sw15} strokeLinecap="round" />
      <line x1="24" y1="18" x2="25" y2="30" stroke={s} strokeWidth={sw15} strokeLinecap="round" />
    </svg>
  );
}

export function IconKosodate() {
  // 子ども（保育）
  return (
    <svg {...iconProps}>
      {/* 子どもの頭 */}
      <circle cx="20" cy="11" r="6" stroke={s} strokeWidth={sw} />
      {/* 胴体 */}
      <path d="M12 28c0-5.5 3.5-10 8-10s8 4.5 8 10" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      {/* 星（かわいさ） */}
      <path d="M31 8l1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1z" stroke={s} strokeWidth="1" fill={s} />
      {/* 手 */}
      <path d="M12 22l-4 4" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <path d="M28 22l4 4" stroke={s} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
}

export function IconKaigo() {
  // 高齢者（杖）
  return (
    <svg {...iconProps}>
      {/* 頭 */}
      <circle cx="17" cy="8" r="4.5" stroke={s} strokeWidth={sw} />
      {/* 体 */}
      <path d="M12 22c0-4.5 2-9 5-9s5 2 5 5v6" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      {/* 腕 */}
      <path d="M13 20l-2 3 5 1" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      {/* 杖 */}
      <path d="M22 24v10" stroke={s} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M19 26l3-2 3 2" stroke={s} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      {/* 足 */}
      <path d="M17 33l-2 4M22 33l1 4" stroke={s} strokeWidth={sw} strokeLinecap="round" />
    </svg>
  );
}

export function IconGakko() {
  // 学校（校舎）
  return (
    <svg {...iconProps}>
      {/* 校舎 */}
      <rect x="4" y="16" width="32" height="18" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* 屋根 */}
      <path d="M2 16l18-12 18 12" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* 窓 */}
      <rect x="9" y="20" width="5" height="5" stroke={s} strokeWidth={sw15} />
      <rect x="26" y="20" width="5" height="5" stroke={s} strokeWidth={sw15} />
      {/* ドア */}
      <rect x="17" y="24" width="6" height="10" stroke={s} strokeWidth={sw} />
      {/* 旗 */}
      <line x1="20" y1="4" x2="20" y2="10" stroke={s} strokeWidth={sw15} />
      <path d="M20 4l5 2-5 2" stroke={s} strokeWidth={sw15} fill={s} />
    </svg>
  );
}

export function IconDoro() {
  // バス（公共交通）
  return (
    <svg {...iconProps}>
      {/* バス本体 */}
      <rect x="4" y="8" width="30" height="22" rx="3" stroke={s} strokeWidth={sw} />
      {/* 窓 */}
      <rect x="8" y="12" width="7" height="6" rx="1" stroke={s} strokeWidth={sw15} />
      <rect x="19" y="12" width="7" height="6" rx="1" stroke={s} strokeWidth={sw15} />
      {/* フロント */}
      <line x1="4" y1="21" x2="34" y2="21" stroke={s} strokeWidth={sw15} />
      {/* ドア */}
      <rect x="14" y="21" width="8" height="9" stroke={s} strokeWidth={sw15} />
      <line x1="18" y1="21" x2="18" y2="30" stroke={s} strokeWidth="1" />
      {/* タイヤ */}
      <circle cx="10" cy="31" r="4" fill="white" stroke={s} strokeWidth={sw} />
      <circle cx="10" cy="31" r="1.5" fill={s} />
      <circle cx="28" cy="31" r="4" fill="white" stroke={s} strokeWidth={sw} />
      <circle cx="28" cy="31" r="1.5" fill={s} />
    </svg>
  );
}

export function IconJutaku() {
  // 家（住宅）
  return (
    <svg {...iconProps}>
      {/* 屋根 */}
      <path d="M3 19L20 5l17 14" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* 煙突 */}
      <rect x="25" y="9" width="4" height="7" stroke={s} strokeWidth={sw15} />
      {/* 壁 */}
      <rect x="7" y="19" width="26" height="16" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* ドア */}
      <rect x="16" y="25" width="8" height="10" rx="1" stroke={s} strokeWidth={sw} />
      <circle cx="23" cy="30" r="1" fill={s} />
      {/* 窓 */}
      <rect x="9" y="22" width="5" height="5" stroke={s} strokeWidth={sw15} />
    </svg>
  );
}

export function IconBousai() {
  // シールド（防災）
  return (
    <svg {...iconProps}>
      {/* シールド */}
      <path d="M20 4l13 5v9c0 8-6 14-13 18C13 32 7 26 7 18V9z" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* チェックマーク */}
      <path d="M13 20l5 5 9-10" stroke={s} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconShomeisho() {
  // 書類（証明書）
  return (
    <svg {...iconProps}>
      {/* 用紙 */}
      <rect x="8" y="4" width="22" height="28" rx="1" stroke={s} strokeWidth={sw} />
      {/* 折り返し */}
      <path d="M22 4v7h8" stroke={s} strokeWidth={sw} strokeLinejoin="round" />
      {/* テキスト行 */}
      <line x1="12" y1="16" x2="24" y2="16" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <line x1="12" y1="21" x2="26" y2="21" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      <line x1="12" y1="26" x2="20" y2="26" stroke={s} strokeWidth={sw} strokeLinecap="round" />
      {/* ハンコ */}
      <circle cx="30" cy="30" r="6" fill="white" stroke="#c0392b" strokeWidth={sw} />
      <text x="30" y="34" textAnchor="middle" fontSize="8" fill="#c0392b" fontWeight="bold" aria-hidden="true">印</text>
    </svg>
  );
}
