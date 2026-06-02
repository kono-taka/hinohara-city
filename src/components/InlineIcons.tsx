// 小さなインライン SVG アイコン（22×22px ベース）
const p = { width: 22, height: 22, viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
const s = "#1a4494";
const sw = "1.6";

// ===== ピックアップグリッド用（大きめ・32px） =====
const big = { width: 32, height: 32, viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" };

export function PickupIconIju() {
  // 移住・家＋人
  return (
    <svg {...big}>
      <path d="M3 14l13-10 13 10" stroke={s} strokeWidth="2" strokeLinejoin="round" />
      <rect x="6" y="14" width="20" height="14" stroke={s} strokeWidth="2" strokeLinejoin="round" />
      <rect x="13" y="20" width="6" height="8" stroke={s} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="25" cy="10" r="3" stroke={s} strokeWidth="1.5" />
      <path d="M22 22c0-3 1.5-5 3-5s3 2 3 5" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PickupIconZaisei() {
  // 財政・棒グラフ
  return (
    <svg {...big}>
      <rect x="3" y="18" width="5" height="10" stroke={s} strokeWidth="2" />
      <rect x="11" y="10" width="5" height="18" stroke={s} strokeWidth="2" />
      <rect x="19" y="4" width="5" height="24" stroke={s} strokeWidth="2" />
      <line x1="2" y1="28" x2="30" y2="28" stroke={s} strokeWidth="2" strokeLinecap="round" />
      <path d="M15 3l5 3-2 1 5 5" stroke={s} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PickupIconFurusato() {
  // ふるさと納税・封筒＋ハート
  return (
    <svg {...big}>
      <rect x="2" y="7" width="28" height="20" rx="2" stroke={s} strokeWidth="2" />
      <path d="M2 9l14 10L30 9" stroke={s} strokeWidth="2" strokeLinejoin="round" />
      <path d="M21 4c0-2 2-3 3-2s2 2.5 0 4.5L21 9l-3-2.5C16 4.5 17 3 18 4s2 2 3 0z" fill={s} opacity="0.7" />
    </svg>
  );
}

export function PickupIconCarbon() {
  // ゼロカーボン・葉
  return (
    <svg {...big}>
      <path d="M16 28V14" stroke={s} strokeWidth="2" strokeLinecap="round" />
      <path d="M16 14C16 6 6 3 4 10c-1 4 2 8 6 9 2 .5 4 .5 6-5z" stroke={s} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <path d="M16 14c0-8 10-11 12-4 1 4-2 8-6 9-2 .5-4 .5-6-5z" stroke={s} strokeWidth="2" fill="none" strokeLinejoin="round" />
      <circle cx="24" cy="6" r="3" stroke={s} strokeWidth="1.5" />
      <path d="M22 6l2-2 2 2" stroke={s} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PickupIconMynumber() {
  // マイナンバーカード
  return (
    <svg {...big}>
      <rect x="2" y="6" width="28" height="20" rx="2" stroke={s} strokeWidth="2" />
      <rect x="5" y="10" width="9" height="11" rx="1" stroke={s} strokeWidth="1.5" />
      <line x1="17" y1="11" x2="27" y2="11" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="15" x2="27" y2="15" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="17" y1="19" x2="24" y2="19" stroke={s} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PickupIconToshi() {
  // 都市計画・グリッド
  return (
    <svg {...big}>
      <rect x="2" y="2" width="28" height="28" stroke={s} strokeWidth="2" strokeLinejoin="round" />
      <line x1="2" y1="12" x2="30" y2="12" stroke={s} strokeWidth="1.5" />
      <line x1="2" y1="22" x2="30" y2="22" stroke={s} strokeWidth="1.5" />
      <line x1="12" y1="2" x2="12" y2="30" stroke={s} strokeWidth="1.5" />
      <line x1="22" y1="2" x2="22" y2="30" stroke={s} strokeWidth="1.5" />
      <rect x="13" y="13" width="8" height="8" fill={s} opacity="0.2" />
    </svg>
  );
}

// ===== セクションヘッダー用（小：18px） =====
function SmIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", marginRight: 4, flexShrink: 0 }}>
      {children}
    </svg>
  );
}
const c = "#fff"; // section header icon color (white bg)

export function CatIconKosodate() {
  return <SmIcon>
    <circle cx="7" cy="5" r="3" stroke={c} strokeWidth="1.5" />
    <path d="M2 15c0-3 2-6 5-6s5 3 5 6" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 4l1 2 2 .5-2 .5-1 2-1-2-2-.5 2-.5z" fill={c} />
  </SmIcon>;
}

export function CatIconKoreisha() {
  return <SmIcon>
    <circle cx="7" cy="4.5" r="2.5" stroke={c} strokeWidth="1.5" />
    <path d="M4 12c0-2.5 1.5-5 3-5s3 1.5 3 3.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <line x1="12" y1="10" x2="12" y2="17" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <path d="M10 11.5l2-1.5 2 1.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </SmIcon>;
}

export function CatIconShogai() {
  return <SmIcon>
    <circle cx="9" cy="3" r="2" stroke={c} strokeWidth="1.5" />
    <circle cx="9" cy="12" r="5" stroke={c} strokeWidth="1.5" />
    <line x1="9" y1="7" x2="9" y2="9" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
  </SmIcon>;
}

export function CatIconKokuho() {
  return <SmIcon>
    <rect x="2" y="4" width="14" height="10" rx="1" stroke={c} strokeWidth="1.5" />
    <path d="M5 9h8M9 7v4" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="14" cy="13" r="3.5" fill="none" stroke={c} strokeWidth="1.5" />
    <path d="M13 13l1 1 2-2" stroke={c} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </SmIcon>;
}

export function CatIconYobosesshu() {
  return <SmIcon>
    <path d="M11 3l4 4-7 7-2-1-1-2z" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="9" y1="5" x2="13" y2="9" stroke={c} strokeWidth="1" />
    <path d="M3 14l1-2 2 1z" fill={c} />
    <rect x="12" y="2" width="3" height="1.5" rx=".5" stroke={c} strokeWidth="1" transform="rotate(45 12 2)" />
  </SmIcon>;
}

export function CatIconSeikatsu() {
  return <SmIcon>
    <circle cx="9" cy="6" r="3" stroke={c} strokeWidth="1.5" />
    <path d="M3 16c0-4 3-7 6-7s6 3 6 7" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M13 10l3 2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="15" cy="13" r="2" stroke={c} strokeWidth="1.5" />
  </SmIcon>;
}

export function CatIconNogyo() {
  return <SmIcon>
    <path d="M9 14V8" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 8C9 4 4 2 3 5c-.5 2 1 4 3 4.5C7 10 8 10 9 8z" stroke={c} strokeWidth="1.4" />
    <path d="M9 8c0-4 5-6 6-3 .5 2-1 4-3 4.5C11 10 10 10 9 8z" stroke={c} strokeWidth="1.4" />
    <line x1="5" y1="16" x2="13" y2="16" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
  </SmIcon>;
}

export function CatIconShoko() {
  return <SmIcon>
    <rect x="2" y="8" width="14" height="8" stroke={c} strokeWidth="1.5" />
    <path d="M1 8h16" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M4 8V6a5 5 0 0 1 10 0v2" stroke={c} strokeWidth="1.5" />
    <rect x="7" y="11" width="4" height="5" stroke={c} strokeWidth="1" />
  </SmIcon>;
}

export function CatIconKankyo() {
  return <SmIcon>
    <circle cx="9" cy="9" r="7" stroke={c} strokeWidth="1.5" />
    <path d="M9 5v2M9 12v2M5 9H3M15 9h-2" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="9" cy="9" r="2.5" stroke={c} strokeWidth="1.5" />
  </SmIcon>;
}

export function CatIconNochi() {
  return <SmIcon>
    <rect x="2" y="10" width="14" height="6" stroke={c} strokeWidth="1.5" />
    <path d="M2 10l7-7 7 7" stroke={c} strokeWidth="1.5" strokeLinejoin="round" />
    <line x1="4" y1="13" x2="14" y2="13" stroke={c} strokeWidth="1" strokeDasharray="2 2" />
  </SmIcon>;
}

// ===== くらしページ ライフイベント用 =====
export function LifeIconBaby() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="10" r="5" stroke={s} strokeWidth="1.8" />
      <path d="M6 22c0-4.5 3-7 7-7s7 2.5 7 7" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 7l2-2 1 1-2 2z" stroke={s} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LifeIconKekkon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="9" cy="9" r="4" stroke={s} strokeWidth="1.8" />
      <circle cx="17" cy="9" r="4" stroke={s} strokeWidth="1.8" />
      <path d="M3 22c0-3.5 2.5-6 6-6" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M23 22c0-3.5-2.5-6-6-6" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M10 16c1-.5 2-.5 3 0 .5.3 2.5 1 3 6H10c.5-5 1.5-5.7 0-6z" stroke={s} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function LifeIconHikkoshi() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="15" height="11" stroke={s} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M7 12l8.5-7 8.5 7" stroke={s} strokeWidth="1.8" strokeLinejoin="round" />
      <rect x="12" y="17" width="4" height="6" stroke={s} strokeWidth="1.5" />
      <path d="M8 17H3l2-5h3" stroke={s} strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="5" cy="22" r="2" stroke={s} strokeWidth="1.5" />
    </svg>
  );
}

export function LifeIconNyugaku() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="12" width="18" height="11" stroke={s} strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M3 12l10-8 10 8" stroke={s} strokeWidth="1.8" strokeLinejoin="round" />
      <line x1="13" y1="4" x2="13" y2="8" stroke={s} strokeWidth="1.5" />
      <path d="M11 4.5l2-2 2 2" stroke={s} strokeWidth="1.5" fill={s} />
      <rect x="10" y="16" width="6" height="7" stroke={s} strokeWidth="1.5" />
    </svg>
  );
}

export function LifeIconShinu() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 3v16M5 11l8-8 8 8" stroke={s} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 19h8" stroke={s} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="5" y="21" width="16" height="3" rx="1" stroke={s} strokeWidth="1.5" />
    </svg>
  );
}

// ===== 施設・観光ページの地図ピン・電話 =====
export function IconMapPin({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", marginRight: 3 }}>
      <path d="M7 1a4 4 0 0 1 4 4c0 3-4 8-4 8S3 8 3 5a4 4 0 0 1 4-4z" stroke={s} strokeWidth="1.3" />
      <circle cx="7" cy="5" r="1.5" fill={s} />
    </svg>
  );
}

export function IconPhone({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", marginRight: 3 }}>
      <path d="M3 2h3l1 3-2 1a8 8 0 0 0 3 3l1-2 3 1v3c0 1-4 1-5-1A10 10 0 0 1 2 3c0-1 1-1 1-1z" stroke={s} strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCalendar({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block", verticalAlign: "middle", marginRight: 3 }}>
      <rect x="1" y="2" width="11" height="10" rx="1" stroke="#666" strokeWidth="1.2" />
      <line x1="1" y1="5" x2="12" y2="5" stroke="#666" strokeWidth="1.2" />
      <line x1="4" y1="1" x2="4" y2="4" stroke="#666" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="9" y1="1" x2="9" y2="4" stroke="#666" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="4" y="7" width="2" height="2" fill="#666" opacity="0.6" />
      <rect x="7.5" y="7" width="2" height="2" fill="#666" opacity="0.6" />
    </svg>
  );
}
