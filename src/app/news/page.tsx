import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "お知らせ・新着情報", description: "日野原市からの最新のお知らせ、行政情報、イベント情報、緊急・重要情報を掲載しています。" };

const allNews = [
  { date: "2026.06.05", tag: "important", label: "重要", text: "熱中症予防について（令和8年度）", dept: "健康推進課", href: "/news/r8-nessho-yobo" },
  { date: "2026.06.03", tag: "info", label: "お知らせ", text: "令和8年度 市内びわ直売所が開設されました", dept: "農林振興課", href: "/news/r8-biwa-chokubai" },
  { date: "2026.05.30", tag: "important", label: "重要", text: "令和8年度 市民税・固定資産税 納税通知書を発送しました", dept: "税務課", href: "/news/r8-nozei" },
  { date: "2026.05.28", tag: "info", label: "お知らせ", text: "日野原市ハザードマップ（改訂版）の全戸配布について", dept: "総務課", href: "/news/bousai-map" },
  { date: "2026.05.27", tag: "event", label: "イベント", text: "第19回 日野原やまびこ祭り 開催のお知らせ（6月14日・15日）", dept: "観光振興課", href: "/news/yamabiko2026" },
  { date: "2026.05.26", tag: "info", label: "お知らせ", text: "市道 中央幹線（下三区地内）の路面補修工事について（5月29日〜6月6日）", dept: "建設課", href: "/news/doro-r8-031" },
  { date: "2026.05.23", tag: "info", label: "お知らせ", text: "令和8年度 介護保険負担割合証の送付について", dept: "高齢者支援課", href: "/news/kaigo-futanwariai" },
  { date: "2026.05.22", tag: "bid", label: "入札・契約", text: "日野原市立南部小学校 給食棟改修工事 一般競争入札のお知らせ", dept: "財政課", href: "/news/r8-018" },
  { date: "2026.05.21", tag: "event", label: "イベント", text: "市民文化センター主催「初夏の声楽コンサート」参加者募集（定員50名）", dept: "生涯学習課", href: "/news/concert0614" },
  { date: "2026.05.20", tag: "info", label: "お知らせ", text: "白峰地区 農業用水路 清掃作業への地域住民参加のお願い", dept: "農林振興課", href: "/news/seisosakugyou" },
  { date: "2026.05.19", tag: "important", label: "重要", text: "個人番号（マイナンバー）の利用拡大に伴う各種手続きの変更について", dept: "市民課", href: "/news/mynumber-r8" },
  { date: "2026.05.16", tag: "info", label: "お知らせ", text: "令和8年度 市立保育所・認定こども園の一時預かり保育について", dept: "子育て支援課", href: "/news/kosodate-ichiji" },
  { date: "2026.05.14", tag: "event", label: "イベント", text: "ひのはら市民農業まつり 参加農家・出店者募集（6月7日開催）", dept: "農林振興課" },
  { date: "2026.05.13", tag: "info", label: "お知らせ", text: "令和8年度 狂犬病予防注射実施日程について", dept: "環境対策課" },
  { date: "2026.05.12", tag: "bid", label: "入札・契約", text: "白峰高原ビジターセンター 展示更新業務 プロポーザル実施のお知らせ", dept: "財政課" },
  { date: "2026.05.09", tag: "info", label: "お知らせ", text: "水道料金の改定について（令和8年10月〜）", dept: "上下水道課" },
  { date: "2026.05.08", tag: "important", label: "重要", text: "熊の目撃情報について（原野川沿い 下原地区）", dept: "環境対策課" },
  { date: "2026.05.07", tag: "event", label: "イベント", text: "令和8年度 第1回 市民大学 受講者募集（6月10日開講）", dept: "生涯学習課" },
  { date: "2026.05.02", tag: "info", label: "お知らせ", text: "市内幹線道路 一時通行止めのお知らせ（5月7日 終日）", dept: "建設課" },
  { date: "2026.04.30", tag: "info", label: "お知らせ", text: "令和8年度 固定資産税路線価図・評価証明の交付について", dept: "税務課" },
  { date: "2026.04.28", tag: "event", label: "イベント", text: "白峰自然観察ウォーク2026 参加者募集（6月21日開催）", dept: "環境対策課" },
  { date: "2026.04.25", tag: "info", label: "お知らせ", text: "令和8年度 粗大ごみ収集（申込受付）について", dept: "環境対策課" },
  { date: "2026.04.22", tag: "bid", label: "入札・契約", text: "市道 原野橋 補修工事 一般競争入札のお知らせ", dept: "財政課" },
  { date: "2026.04.21", tag: "info", label: "お知らせ", text: "令和8年度 国民健康保険税の算定について", dept: "市民課" },
  { date: "2026.04.18", tag: "event", label: "イベント", text: "「ひのはら子ども読書週間」開催（5月3日〜17日）", dept: "図書館" },
  { date: "2026.04.15", tag: "important", label: "重要", text: "令和8年度 新型インフルエンザ等対策行動計画の策定について", dept: "健康推進課" },
  { date: "2026.04.10", tag: "info", label: "お知らせ", text: "令和8年度 部活動地域移行の実施状況について", dept: "学校教育課" },
];

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>お知らせ・新着情報</span>
          </div>
          <h1 className="page-title">お知らせ・新着情報</h1>

          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            {["すべて", "重要", "お知らせ", "イベント", "入札・契約"].map((label) => (
              <span key={label} style={{ padding: "3px 12px", fontSize: 12, border: "1px solid var(--border-light)", background: label === "すべて" ? "var(--city-blue)" : "#fff", color: label === "すべて" ? "#fff" : "#555", borderRadius: 2, cursor: "pointer" }}>
                {label}
              </span>
            ))}
          </div>

          <div className="news-list" style={{ marginBottom: 16 }}>
            {allNews.map((item, i) => (
              <div key={i} className="news-item">
                <span className="news-date">{item.date}</span>
                <span className={`news-tag ${item.tag}`}>{item.label}</span>
                <span style={{ fontSize: 11, color: "#888", whiteSpace: "nowrap", minWidth: 80 }}>[{item.dept}]</span>
                {"href" in item
                  ? <a href={(item as { href: string }).href} className="news-link">{item.text}</a>
                  : <span className="news-link">{item.text}</span>
                }
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", padding: "12px 0", borderTop: "1px solid var(--border-light)", fontSize: 13, color: "#888" }}>
            過去のお知らせはこちらから検索できます。　<a href="/news">過去のお知らせ（年別）</a>
          </div>
          <PageInfo department="秘書広報課" division="広報係" tel="0100-88-1105（内線 105）" updated="令和8年6月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
