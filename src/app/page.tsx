import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import HeroSlider from "@/components/HeroSlider";
import {
  IconJumin, IconZei, IconGomi, IconKosodate, IconKaigo,
  IconGakko, IconDoro, IconJutaku, IconBousai, IconShomeisho,
} from "@/components/ServiceIcons";
import {
  PickupIconIju, PickupIconZaisei, PickupIconFurusato,
  PickupIconCarbon, PickupIconMynumber, PickupIconToshi,
  IconMapPin,
} from "@/components/InlineIcons";

const newsItems = [
  { date: "2026.06.03", tag: "info", label: "お知らせ", text: "令和8年度 市内びわ直売所が開設されました", href: "/news/r8-biwa-chokubai" },
  { date: "2026.06.01", tag: "info", label: "お知らせ", text: "日野原市公式ホームページをリニューアルしました（令和8年6月1日）", href: "/news/renewal2026" },
  { date: "2026.05.30", tag: "important", label: "重要", text: "令和8年度 市民税・固定資産税 納税通知書を発送しました", href: "/news/r8-nozei" },
  { date: "2026.05.28", tag: "info", label: "お知らせ", text: "日野原市ハザードマップ（改訂版）の全戸配布について", href: "/news/bousai-map" },
  { date: "2026.05.27", tag: "event", label: "イベント", text: "第19回 日野原やまびこ祭り 開催のお知らせ（6月14日・15日）", href: "/news/yamabiko2026" },
  { date: "2026.05.26", tag: "info", label: "お知らせ", text: "市道 中央幹線（下三区地内）の路面補修工事について（5月29日〜6月6日）", href: "/news/doro-r8-031" },
  { date: "2026.05.23", tag: "info", label: "お知らせ", text: "令和8年度 介護保険負担割合証の送付について", href: "/news/kaigo-futanwariai" },
  { date: "2026.05.22", tag: "bid", label: "入札・契約", text: "日野原市立南部小学校 給食棟改修工事 一般競争入札のお知らせ", href: "/news/r8-018" },
  { date: "2026.05.21", tag: "event", label: "イベント", text: "市民文化センター主催「初夏の声楽コンサート」参加者募集（定員50名）", href: "/news/concert0614" },
  { date: "2026.05.20", tag: "info", label: "お知らせ", text: "白峰地区 農業用水路 清掃作業への地域住民参加のお願い", href: "/news/seisosakugyou" },
  { date: "2026.05.19", tag: "important", label: "重要", text: "個人番号（マイナンバー）の利用拡大に伴う各種手続きの変更について", href: "/news/mynumber-r8" },
  { date: "2026.05.16", tag: "info", label: "お知らせ", text: "令和8年度 市立保育所・認定こども園の一時預かり保育について", href: "/news/kosodate-ichiji" },
];

const services = [
  { Icon: IconJumin,     label: "転入・転出\n住民登録",   href: "/kurashi/jumin" },
  { Icon: IconZei,       label: "市税・\n国民健康保険",   href: "/kurashi/zei" },
  { Icon: IconGomi,      label: "ごみ・\nリサイクル",     href: "/kurashi/gomi" },
  { Icon: IconKosodate,  label: "子育て・\n保育",         href: "/kenko/kosodate" },
  { Icon: IconKaigo,     label: "介護・\n高齢者支援",     href: "/kenko/kaigo" },
  { Icon: IconGakko,     label: "小中学校・\n教育",       href: "/kyoiku/gakko" },
  { Icon: IconDoro,      label: "道路・\n公共交通",       href: "/kurashi/doro" },
  { Icon: IconJutaku,    label: "住宅・\n建築",           href: "/kurashi/jutaku" },
  { Icon: IconBousai,    label: "防災・\n防犯",           href: "/kurashi/bousai" },
  { Icon: IconShomeisho, label: "各種証明書\n申請",       href: "/kurashi/shomeisho" },
];

const events = [
  { month: "6月", day: "7", weekday: "土", title: "ひのはら市民農業まつり", place: "農業公園（下原地区）" },
  { month: "6月", day: "14", weekday: "土", title: "第19回 日野原やまびこ祭り", place: "中央公園特設会場" },
  { month: "6月", day: "15", weekday: "日", title: "第19回 日野原やまびこ祭り（2日目）", place: "中央公園特設会場" },
  { month: "6月", day: "21", weekday: "土", title: "白峰自然観察ウォーク2026", place: "白峰ビジターセンター集合" },
  { month: "6月", day: "28", weekday: "土", title: "子ども図書館まつり（読み聞かせ・工作）", place: "市立中央図書館" },
];

const pickups = [
  { Icon: PickupIconIju,      title: "移住・定住支援", desc: "日野原市への移住をお考えの方へ。補助金・空き家情報。", href: "/kanko" },
  { Icon: PickupIconZaisei,   title: "財政状況の公表", desc: "令和7年度 決算概要・予算執行状況を公開しました。", href: "/shisei" },
  { Icon: PickupIconFurusato, title: "ふるさと納税", desc: "日野原市へのふるさと納税。地元特産品でお礼の品をお届け。", href: "/furusato" },
  { Icon: PickupIconCarbon,   title: "ゼロカーボン推進", desc: "2050年脱炭素社会の実現に向けた市の取り組みをご覧ください。", href: "/sangyo" },
  { Icon: PickupIconMynumber, title: "マイナンバーカード", desc: "マイナンバーカードの申請・更新・各種利用についてご案内。", href: "/kurashi" },
  { Icon: PickupIconToshi,    title: "都市計画・土地利用", desc: "日野原市都市計画マスタープランの概要と手続きについて。", href: "/kurashi" },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="notice-bar">
        <span className="notice-label">緊急情報</span>
        <a href="/bousai/keikai">【注意】梅雨前線の接近に伴い、土砂災害警戒情報に注意してください（6月1日 午前9時現在）</a>
      </div>
      <div className="main-container">
        <main className="main-content">
          {/* ヒーローエリア */}
          <HeroSlider />

          {/* サービスグリッド */}
          <div className="section-title">よく利用される手続き・サービス</div>
          <div className="service-grid" style={{ marginTop: 0, borderTop: "none" }}>
            {services.map((s) => (
              <a key={s.href} href={s.href} className="service-item">
                <s.Icon />
                <span className="service-label" style={{ whiteSpace: "pre-line" }}>{s.label}</span>
              </a>
            ))}
          </div>

          {/* お知らせ */}
          <div className="section-title">
            お知らせ・新着情報
            <a href="/news">一覧を見る &gt;&gt;</a>
          </div>
          <div className="news-list">
            {newsItems.map((item, i) => (
              <div key={i} className="news-item">
                <span className="news-date">{item.date}</span>
                <span className={`news-tag ${item.tag}`}>{item.label}</span>
                <a href={item.href} className="news-link">{item.text}</a>
              </div>
            ))}
          </div>

          {/* イベント & 市長メッセージ */}
          <div className="two-col">
            <div>
              <div className="section-title">
                イベント情報
                <a href="/kanko/event">一覧を見る &gt;&gt;</a>
              </div>
              <div className="event-list">
                {events.map((ev, i) => (
                  <div key={i} className="event-item">
                    <div className="event-date-block">
                      <div className="month">{ev.month}</div>
                      <div className="day">{ev.day}</div>
                      <div className="weekday">（{ev.weekday}）</div>
                    </div>
                    <div className="event-info">
                      <div className="event-title"><a href="/kanko/event">{ev.title}</a></div>
                      <div className="event-place"><IconMapPin /> {ev.place}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-title">市長からのメッセージ</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", padding: "12px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <div style={{ width: 70, height: 88, flexShrink: 0, border: "1px solid #c0d0e0", overflow: "hidden", position: "relative" }}>
                    <Image src="/mayor.jpg" alt="日野原市長 宮本誠二郎" fill style={{ objectFit: "cover", objectPosition: "center top" }} sizes="70px" />
                  </div>
                  <div style={{ fontSize: 12, lineHeight: 1.8, color: "#333" }}>
                    <p style={{ margin: "0 0 6px" }}>
                      市民の皆様に支えられ、日野原市は本年、市制施行20周年を迎えることができました。
                      これもひとえに市民の皆様のご支援とご協力の賜物と深く感謝申し上げます。
                    </p>
                    <p style={{ margin: 0, fontSize: 11, color: "#888" }}>
                      <a href="/mayor">▶ 市長メッセージ全文を読む</a>
                    </p>
                  </div>
                </div>
                <div style={{ textAlign: "right", fontSize: 13, fontWeight: "bold", marginTop: 8, color: "var(--city-blue)" }}>
                  日野原市長　宮本 誠二郎
                </div>
              </div>
            </div>
          </div>

          {/* ひのぽんバナー */}
          <div style={{ border: "1px solid #e8c840", background: "#fffbe8", borderRadius: 4, display: "flex", alignItems: "center", gap: 14, padding: "10px 16px", marginBottom: 18 }}>
            <Image src="/hinopon.png" alt="ひのぽん" width={64} height={64} style={{ objectFit: "contain", flexShrink: 0 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: "bold", color: "#a07000", marginBottom: 2 }}>日野原市マスコットキャラクター</div>
              <div style={{ fontSize: 15, fontWeight: "bold", color: "#333", marginBottom: 2 }}>ひのぽん</div>
              <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>ぽんなわびわの妖精だぽん！日野原市の魅力をみんなに届けるぽん！</div>
            </div>
            <a href="/shisei/mascot" style={{ flexShrink: 0, fontSize: 12, color: "var(--city-primary)", fontWeight: "bold", border: "1px solid var(--city-primary)", padding: "5px 12px", borderRadius: 2, whiteSpace: "nowrap" }}>
              ひのぽんを知る ▶
            </a>
          </div>

          {/* 注目情報 */}
          <div className="section-title">注目情報・ピックアップ</div>
          <div className="pickup-grid" style={{ marginTop: 0, borderTop: "none" }}>
            {pickups.map((p, i) => (
              <a key={i} href={p.href} className="pickup-item">
                <p.Icon />
                <span className="pickup-title">{p.title}</span>
                <span className="pickup-desc">{p.desc}</span>
              </a>
            ))}
          </div>
        </main>

        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
