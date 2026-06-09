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

/* ─── データ定義 ─────────────────────────────── */

const newsItems = [
  { date: "2026.06.09", tag: "important", label: "重要",       text: "夏の水難事故防止について（令和8年度）",                                           href: "/news/r8-suinan-yobo" },
  { date: "2026.06.05", tag: "important", label: "重要",       text: "熱中症予防について（令和8年度）",                                                 href: "/news/r8-nessho-yobo" },
  { date: "2026.06.03", tag: "info",      label: "お知らせ",   text: "令和8年度 市内びわ直売所が開設されました",                                       href: "/news/r8-biwa-chokubai" },
  { date: "2026.06.01", tag: "info",      label: "お知らせ",   text: "日野原市公式ホームページをリニューアルしました（令和8年6月1日）",                  href: "/news/renewal2026" },
  { date: "2026.05.30", tag: "important", label: "重要",       text: "令和8年度 市民税・固定資産税 納税通知書を発送しました",                           href: "/news/r8-nozei" },
  { date: "2026.05.28", tag: "info",      label: "お知らせ",   text: "日野原市ハザードマップ（改訂版）の全戸配布について",                               href: "/news/bousai-map" },
  { date: "2026.05.27", tag: "event",     label: "イベント",   text: "第19回 日野原やまびこ祭り 開催のお知らせ（6月14日・15日）",                        href: "/news/yamabiko2026" },
  { date: "2026.05.26", tag: "info",      label: "お知らせ",   text: "市道 中央幹線（下三区地内）の路面補修工事について（5月29日〜6月6日）",             href: "/news/doro-r8-031" },
  { date: "2026.05.23", tag: "info",      label: "お知らせ",   text: "令和8年度 介護保険負担割合証の送付について",                                       href: "/news/kaigo-futanwariai" },
  { date: "2026.05.22", tag: "bid",       label: "入札・契約", text: "日野原市立南部小学校 給食棟改修工事 一般競争入札のお知らせ",                        href: "/news/r8-018" },
  { date: "2026.05.21", tag: "event",     label: "イベント",   text: "市民文化センター主催「初夏の声楽コンサート」参加者募集（定員50名）",                 href: "/news/concert0614" },
  { date: "2026.05.19", tag: "important", label: "重要",       text: "個人番号（マイナンバー）の利用拡大に伴う各種手続きの変更について",                   href: "/news/mynumber-r8" },
  { date: "2026.05.16", tag: "info",      label: "お知らせ",   text: "令和8年度 市立保育所・認定こども園の一時預かり保育について",                        href: "/news/kosodate-ichiji" },
];

const services = [
  { Icon: IconJumin,     label: "転入・転出\n住民登録",   href: "/kurashi/jumin" },
  { Icon: IconZei,       label: "市税・\n国民健康保険",   href: "/kurashi/zei" },
  { Icon: IconGomi,      label: "ごみ・\nリサイクル",     href: "/kurashi/gomi" },
  { Icon: IconKosodate,  label: "子育て・\n保育",         href: "/kosodate" },
  { Icon: IconKaigo,     label: "介護・\n高齢者支援",     href: "/kenko/kaigo" },
  { Icon: IconGakko,     label: "小中学校・\n教育",       href: "/kyoiku/gakko" },
  { Icon: IconDoro,      label: "道路・\n公共交通",       href: "/kurashi/doro" },
  { Icon: IconJutaku,    label: "住宅・\n建築",           href: "/kurashi/jutaku" },
  { Icon: IconBousai,    label: "防災・\n防犯",           href: "/kurashi/bousai" },
  { Icon: IconShomeisho, label: "各種証明書\n申請",       href: "/kurashi/shomeisho" },
];

const lifeEvents = [
  { icon: "/images/icon/life_hikkoshi.png",  label: "引越し\n（転入・転出）",   href: "/kurashi/jumin" },
  { icon: "/images/icon/life_shussan.png",   label: "妊娠・\n出産",             href: "/kosodate" },
  { icon: "/images/icon/life_nyugaku.png",   label: "入園・\n入学",             href: "/kosodate" },
  { icon: "/images/icon/life_kekkon.png",    label: "結婚",                     href: "/kurashi/jumin" },
  { icon: "/images/icon/life_sumai.png",     label: "住まいを\n探す・買う",     href: "/kurashi/jutaku" },
  { icon: "/images/icon/life_shushoku.png",  label: "就職・\nしごと",           href: "/sangyo/shigoto" },
  { icon: "/images/icon/life_kaigo.png",     label: "介護が\n必要になったら",   href: "/kenko/kaigo" },
  { icon: "/images/icon/life_okuyami.png",   label: "おくやみ\n（死亡届）",     href: "/kurashi/jumin" },
  { icon: "/images/icon/life_shogai.png",    label: "障がい者\n支援",           href: "/kenko/shogai" },
  { icon: "/images/icon/life_mynumber.png",  label: "マイナンバー\nカード",     href: "/kurashi" },
];

const bousaiLinks = [
  { icon: "/images/icon/bousai_kyukyu.png",  title: "夜間・休日救急",   desc: "救急医療機関を検索",   href: "/kenko/kokuho/kyukyu" },
  { icon: "/images/icon/bousai_hazard.png",  title: "ハザードマップ",   desc: "土砂・洪水・地震",     href: "/news/bousai-map" },
  { icon: "/images/icon/bousai_hinan.png",   title: "避難所・避難情報", desc: "市内の指定避難所一覧", href: "/bousai" },
  { icon: "/images/icon/bousai_fire.png",    title: "消防・火災",       desc: "消防署・火災予防情報", href: "/kurashi/bousai" },
  { icon: "/images/icon/bousai_keikai.png",  title: "警戒・避難情報",   desc: "警戒レベルと行動指針", href: "/bousai/keikai" },
  { icon: "/images/icon/bousai_contact.png", title: "緊急連絡先",       desc: "市役所・各機関の電話", href: "/inquiry" },
];

const onlineServices = [
  { icon: "/images/icon/online_shinsei.png",  label: "申請書ダウンロード", desc: "各種様式・PDF",           href: "/shinsei" },
  { icon: "/images/icon/online_shisetsu.png", label: "施設の予約",         desc: "公共施設をオンライン予約", href: "/shisetsu" },
  { icon: "/images/icon/online_toshokan.png", label: "電子図書館",         desc: "電子書籍・雑誌を閲覧",   href: "/kyoiku/toshokan" },
  { icon: "/images/icon/online_myna.png",     label: "マイナポータル",     desc: "証明書取得・給付申請",   href: "https://myna.go.jp/" },
];

const events = [
  { month: "6月", day: "7",  weekday: "土", title: "ひのはら市民農業まつり",              place: "農業公園（下原地区）",       href: "/kanko/event" },
  { month: "6月", day: "14", weekday: "土", title: "第19回 日野原やまびこ祭り（1日目）", place: "中央公園特設会場",           href: "/kanko/yamabiko" },
  { month: "6月", day: "15", weekday: "日", title: "第19回 日野原やまびこ祭り（2日目）", place: "中央公園特設会場",           href: "/kanko/yamabiko" },
  { month: "6月", day: "21", weekday: "土", title: "白嶺自然観察ウォーク2026",           place: "白嶺ビジターセンター集合",   href: "/kanko/event" },
  { month: "6月", day: "28", weekday: "土", title: "子ども図書館まつり（読み聞かせ・工作）", place: "市立中央図書館",         href: "/kanko/event" },
];

const pickups = [
  { Icon: PickupIconIju,      title: "移住・定住支援",   desc: "日野原市への移住をお考えの方へ。補助金・空き家情報。", href: "/kanko/iju" },
  { Icon: PickupIconZaisei,   title: "財政状況の公表",   desc: "令和7年度 決算概要・予算執行状況を公開しました。",     href: "/shisei/zaisei" },
  { Icon: PickupIconFurusato, title: "ふるさと納税",     desc: "日野原市へのふるさと納税。地元特産品でお礼の品を。",   href: "/furusato" },
  { Icon: PickupIconCarbon,   title: "ゼロカーボン推進", desc: "2050年脱炭素社会の実現に向けた市の取り組みをご覧ください。", href: "/sangyo/kankyo" },
  { Icon: PickupIconMynumber, title: "マイナンバーカード", desc: "マイナンバーカードの申請・更新・各種利用についてご案内。", href: "/kurashi" },
  { Icon: PickupIconToshi,    title: "都市計画・土地利用", desc: "日野原市都市計画マスタープランの概要と手続きについて。", href: "/shisei/toshi" },
];

/* ─── コンポーネント ─────────────────────────── */

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* 緊急情報バー */}
      <div className="notice-bar">
        <span className="notice-label">緊急情報</span>
        <a href="/bousai/keikai">【注意】梅雨前線の接近に伴い、土砂災害警戒情報に注意してください（6月1日 午前9時現在）</a>
      </div>

      <div className="main-container">
        <main className="main-content">

          {/* ① ヒーロースライダー */}
          <HeroSlider />

          {/* ② よく利用されるサービス */}
          <div className="section-title">よく利用される手続き・サービス</div>
          <div className="service-grid" style={{ marginTop: 0, borderTop: "none" }}>
            {services.map((s) => (
              <a key={s.href} href={s.href} className="service-item">
                <s.Icon />
                <span className="service-label" style={{ whiteSpace: "pre-line" }}>{s.label}</span>
              </a>
            ))}
          </div>

          {/* ③ よく見られているページ（20項目） */}
          <div className="section-title">よく見られているページ</div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 0,
            border: "1px solid var(--border-light)",
            background: "#fff",
            marginBottom: 24,
          }}>
            {[
              { label: "住民票・証明書",       href: "/kurashi/shomeisho" },
              { label: "転入・転出手続き",      href: "/kurashi/jumin" },
              { label: "ごみの出し方・分別",    href: "/kurashi/gomi" },
              { label: "保育所・入所申込",      href: "/kosodate" },
              { label: "児童手当",              href: "/kenko/kosodate/jidoteate" },
              { label: "マイナンバーカード",    href: "/kurashi" },
              { label: "介護保険・認定",        href: "/kenko/kaigo/seido" },
              { label: "国民健康保険",          href: "/kenko/kokuho/tetsuzuki" },
              { label: "市税の支払い",          href: "/kurashi/zei" },
              { label: "道路・公共交通",        href: "/kurashi/doro" },
              { label: "粗大ごみ・申込",        href: "/kurashi/gomi" },
              { label: "住宅・リフォーム補助",  href: "/kurashi/jutaku" },
              { label: "防災・ハザードマップ",  href: "/bousai" },
              { label: "選挙・投票",            href: "/senkyo" },
              { label: "ふるさと納税",          href: "/furusato" },
              { label: "施設の予約",            href: "/shisetsu" },
              { label: "電子申請・手続き",      href: "/shinsei" },
              { label: "移住・定住支援",        href: "/kanko/iju" },
              { label: "事業者向け情報",        href: "/jigyosha" },
              { label: "採用情報",              href: "/saiyo" },
            ].map((item) => (
              <a key={item.label} href={item.href} className="popular-item">
                <span className="popular-item-arrow">›</span>
                {item.label}
              </a>
            ))}
          </div>

          {/* ④ ライフイベントから探す */}
          <div className="life-event-section">
            <div className="section-title">ライフイベントから探す</div>
            <div className="life-event-grid">
              {lifeEvents.map((ev) => (
                <a key={ev.label} href={ev.href} className="life-event-item">
                  <div className="life-event-icon" style={{ background: "#f5f9f7" }}>
                    <Image src={ev.icon} alt={ev.label.replace(/\n/g, "")} width={48} height={48} style={{ objectFit: "contain" }} />
                  </div>
                  <span className="life-event-label" style={{ whiteSpace: "pre-line" }}>{ev.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ④ もしものとき */}
          <div className="bousai-section">
            <div className="section-title-white">
              <span className="bousai-badge">緊急</span>もしものとき・緊急情報
            </div>
            <div className="bousai-grid">
              {bousaiLinks.map((item) => (
                <a key={item.title} href={item.href} className="bousai-item">
                  <Image src={item.icon} alt={item.title} width={32} height={32} className="bousai-item-icon" style={{ objectFit: "contain", flexShrink: 0 }} />
                  <div className="bousai-item-text">
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ⑤ オンラインサービス */}
          <div className="online-section">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: "bold", fontSize: 14, color: "#1a4e78" }}>
                オンラインサービス・電子申請
              </div>
              <a href="/shinsei" style={{ fontSize: 12, color: "#1a4e78", fontWeight: "bold" }}>
                申請書一覧 →
              </a>
            </div>
            <div className="online-grid">
              {onlineServices.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="online-item"
                  {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Image src={item.icon} alt={item.label} width={48} height={48} className="online-item-icon" style={{ objectFit: "contain" }} />
                  <span className="online-item-label">{item.label}</span>
                  <span className="online-item-desc">{item.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ⑥ お知らせ */}
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

          {/* ⑦ イベント ＆ 市長メッセージ */}
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
                      <div className="event-title"><a href={ev.href}>{ev.title}</a></div>
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

          {/* ⑧ ひのぽんバナー */}
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

          {/* ⑨ 注目情報 */}
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
