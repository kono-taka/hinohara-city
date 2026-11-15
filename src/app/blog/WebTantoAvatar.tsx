export default function WebTantoAvatar({ size = 140 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      role="img"
      aria-label="Web担当のイラスト（ヘッドセットをつけた、緑のジャケットの職員）"
      style={{ flexShrink: 0, maxWidth: "100%" }}
    >
      <defs>
        <clipPath id="wt-clip">
          <circle cx="80" cy="80" r="78" />
        </clipPath>
      </defs>
      <circle cx="80" cy="80" r="78" fill="#eaf3ef" stroke="#c8ddd5" strokeWidth="2" />
      <g clipPath="url(#wt-clip)">
        {/* 上半身 */}
        <path d="M18 162 C18 128 46 114 80 114 C114 114 142 128 142 162 Z" fill="#1a6e5a" />
        <path d="M66 115 L80 137 L94 115 Z" fill="#ffffff" />
        <rect x="70" y="96" width="20" height="22" rx="6" fill="#f2c9a5" />
        {/* 名札 */}
        <path d="M70 120 L76 141 M90 120 L84 141" stroke="#e67c1b" strokeWidth="2" fill="none" />
        <rect x="70" y="139" width="20" height="14" rx="2" fill="#ffffff" stroke="#c8ddd5" />
        <circle cx="80" cy="146" r="3" fill="#1a6e5a" />
        {/* 顔 */}
        <ellipse cx="80" cy="76" rx="28" ry="31" fill="#f6d3b3" />
        {/* 髪 */}
        <path d="M50 76 C46 44 68 31 82 32 C102 32 116 46 110 76 C105 63 98 56 80 55 C62 56 55 63 50 76 Z" fill="#2b2b3a" />
        {/* ヘッドセット */}
        <path d="M47 78 C44 38 116 38 113 78" stroke="#4a5568" strokeWidth="4" fill="none" strokeLinecap="round" />
        <rect x="42" y="72" width="9" height="17" rx="4" fill="#4a5568" />
        <rect x="109" y="72" width="9" height="17" rx="4" fill="#4a5568" />
        <path d="M46 88 Q50 104 70 101" stroke="#4a5568" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <circle cx="71" cy="101" r="3.2" fill="#4a5568" />
        {/* 表情 */}
        <circle cx="69" cy="78" r="3" fill="#2b2b3a" />
        <circle cx="91" cy="78" r="3" fill="#2b2b3a" />
        <circle cx="62" cy="88" r="4.5" fill="#f4a59a" opacity="0.5" />
        <circle cx="98" cy="88" r="4.5" fill="#f4a59a" opacity="0.5" />
        <path d="M71 90 Q80 98 89 90" stroke="#b5654a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  );
}
