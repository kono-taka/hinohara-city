export default function CityEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="日野原市章"
    >
      <circle cx="50" cy="50" r="48" fill="#1a6e5a" />
      <circle cx="50" cy="50" r="45" fill="none" stroke="#fff" strokeWidth="2.5" />
      {/* 「ひ」を抽象化 - 波と丘のモチーフ（房総・海と緑） */}
      {/* 丘陵の稜線 */}
      <path d="M20 62 Q35 38 50 44 Q65 50 80 38" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
      {/* 海の波 */}
      <path d="M20 72 Q32 67 44 72 Q56 77 68 72 Q74 69 80 72" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" />
      {/* 太陽 */}
      <circle cx="72" cy="28" r="8" fill="none" stroke="#fff" strokeWidth="2.5" />
      <circle cx="72" cy="28" r="3.5" fill="#fff" />
    </svg>
  );
}
