import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "入札・契約情報" };

const currentBids = [
  {
    id: "R8-建設-0047",
    title: "市道　原野幹線（下三区間内）路面補修工事",
    type: "工事",
    method: "指名競争入札",
    deadline: "令和8年6月16日（月）17:00",
    budget: "約850万円",
    dept: "建設課",
  },
  {
    id: "R8-建設-0048",
    title: "白峰ビジターセンター外壁塗装工事",
    type: "工事",
    method: "一般競争入札",
    deadline: "令和8年6月20日（金）17:00",
    budget: "約1,200万円",
    dept: "施設管理課",
  },
  {
    id: "R8-物品-0031",
    title: "令和8年度　市立小中学校給食用食材（米・野菜類）調達",
    type: "物品",
    method: "見積合わせ",
    deadline: "令和8年6月18日（水）12:00",
    budget: "約420万円",
    dept: "教育総務課",
  },
  {
    id: "R8-委託-0022",
    title: "ハザードマップ（改訂版）印刷・配布業務委託",
    type: "委託",
    method: "指名競争入札",
    deadline: "令和8年6月24日（火）17:00",
    budget: "約180万円",
    dept: "総務課",
  },
  {
    id: "R8-建設-0049",
    title: "南部保育所空調設備更新工事（設計・施工）",
    type: "工事",
    method: "一般競争入札",
    deadline: "令和8年7月4日（金）17:00",
    budget: "約2,300万円",
    dept: "子育て支援課",
  },
];

const recentResults = [
  {
    id: "R8-建設-0038",
    title: "市道　中央幹線（下三区間内）路面補修工事",
    result: "落札",
    winner: "日野建設株式会社",
    amount: "7,810,000円",
    rate: "97.6%",
    date: "令和8年5月28日",
  },
  {
    id: "R8-委託-0018",
    title: "市民文化センター清掃業務委託（令和8年度）",
    result: "落札",
    winner: "株式会社ひのはらクリーンサービス",
    amount: "4,236,000円",
    rate: "94.2%",
    date: "令和8年5月22日",
  },
  {
    id: "R8-物品-0024",
    title: "消防用小型動力ポンプ付積載車（1台）",
    result: "落札",
    winner: "モリタ防災テック株式会社",
    amount: "8,140,000円",
    rate: "92.1%",
    date: "令和8年5月20日",
  },
  {
    id: "R8-建設-0036",
    title: "老人福祉センター屋根防水改修工事",
    result: "落札",
    winner: "原野防水工業株式会社",
    amount: "3,520,000円",
    rate: "88.0%",
    date: "令和8年5月15日",
  },
  {
    id: "R8-建設-0035",
    title: "北部地区センター駐車場舗装補修工事",
    result: "不落随契",
    winner: "日野原道路株式会社",
    amount: "1,987,000円",
    rate: "—",
    date: "令和8年5月12日",
  },
];

export default function ChotatsuPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/shisei">市政情報</a> › 入札・契約情報
          </nav>
          <h1 className="page-title">入札・契約情報</h1>

          <div className="content-box" style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市が発注する公共工事・業務委託・物品調達に関する入札公告および落札結果を掲載しています。
              入札参加資格の申請・登録については<a href="/shisei/chotatsu">競争入札参加資格申請について</a>をご覧ください。
            </p>
          </div>

          {/* 現在公告中 */}
          <div className="section-title">現在公告中の案件</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", marginBottom: 20, background: "#fff" }}>
            <table className="content-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: 130 }}>案件番号</th>
                  <th>件名</th>
                  <th style={{ width: 70 }}>区分</th>
                  <th style={{ width: 110 }}>入札方式</th>
                  <th style={{ width: 170 }}>参加申込期限</th>
                  <th style={{ width: 110 }}>予算規模</th>
                </tr>
              </thead>
              <tbody>
                {currentBids.map((b, i) => (
                  <tr key={i}>
                    <td style={{ fontSize: 11.5, color: "#666" }}>{b.id}</td>
                    <td>
                      <a href="#" style={{ fontSize: 13 }}>{b.title}</a>
                      <span style={{ fontSize: 11, color: "#888", marginLeft: 6 }}>（{b.dept}）</span>
                    </td>
                    <td style={{ textAlign: "center" }}>
                      <span style={{
                        fontSize: 11, padding: "1px 6px", borderRadius: 2,
                        background: b.type === "工事" ? "#dbeafe" : b.type === "物品" ? "#dcfce7" : "#fef9c3",
                        color: b.type === "工事" ? "#1e40af" : b.type === "物品" ? "#166534" : "#854d0e",
                        fontWeight: "bold",
                      }}>{b.type}</span>
                    </td>
                    <td style={{ fontSize: 12.5 }}>{b.method}</td>
                    <td style={{ fontSize: 12, color: "#c0392b", fontWeight: 600 }}>{b.deadline}</td>
                    <td style={{ fontSize: 12.5 }}>{b.budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "8px 14px", fontSize: 11.5, color: "#888", borderTop: "1px solid #e8edf4" }}>
              ※入札説明書・仕様書等は各案件番号をクリックしてダウンロードしてください。
            </div>
          </div>

          {/* 落札結果 */}
          <div className="section-title">落札結果（直近）</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", marginBottom: 20, background: "#fff" }}>
            <table className="content-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: 130 }}>案件番号</th>
                  <th>件名</th>
                  <th style={{ width: 70 }}>結果</th>
                  <th style={{ width: 180 }}>落札者</th>
                  <th style={{ width: 120 }}>落札金額</th>
                  <th style={{ width: 70 }}>落札率</th>
                  <th style={{ width: 110 }}>決定日</th>
                </tr>
              </thead>
              <tbody>
                {recentResults.map((r, i) => (
                  <tr key={i}>
                    <td style={{ fontSize: 11.5, color: "#666" }}>{r.id}</td>
                    <td><a href="#" style={{ fontSize: 12.5 }}>{r.title}</a></td>
                    <td style={{ textAlign: "center" }}>
                      <span style={{
                        fontSize: 11, padding: "1px 6px", borderRadius: 2, fontWeight: "bold",
                        background: r.result === "落札" ? "#dcfce7" : "#fee2e2",
                        color: r.result === "落札" ? "#166534" : "#991b1b",
                      }}>{r.result}</span>
                    </td>
                    <td style={{ fontSize: 12 }}>{r.winner}</td>
                    <td style={{ fontSize: 12.5, fontWeight: 600 }}>{r.amount}</td>
                    <td style={{ fontSize: 12.5, textAlign: "center" }}>{r.rate}</td>
                    <td style={{ fontSize: 12 }}>{r.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "8px 14px", fontSize: 11.5, borderTop: "1px solid #e8edf4" }}>
              <a href="#" style={{ color: "var(--link-color)" }}>過去の落札結果一覧（年度別）→</a>
            </div>
          </div>

          {/* 参加資格・各種様式 */}
          <div className="content-box">
            <h3>競争入札参加資格・各種様式</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 12px", color: "#555" }}>
              日野原市の競争入札に参加するには事前の資格登録が必要です。申請要件・必要書類・各種様式は専用ページをご覧ください。
            </p>
            <a href="/shisei/chotatsu/shikaku" style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--city-primary)", color: "#fff",
              padding: "8px 20px", fontSize: 13, fontWeight: "bold",
              borderRadius: 2, textDecoration: "none",
            }}>
              競争入札参加資格申請 ―― 詳細・様式ダウンロード ▶
            </a>
            <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {[
                { title: "競争入札参加資格申請の手引き（令和7・8年度）（PDF）", href: "/shisei/chotatsu/shikaku" },
                { title: "参加資格申請書（工事・コンサルタント）（Word）", href: "/shisei/chotatsu/shikaku" },
                { title: "参加資格申請書（物品・委託）（Word）", href: "/shisei/chotatsu/shikaku" },
                { title: "入札保証金免除申請書（Word）", href: "/shisei/chotatsu/shikaku" },
                { title: "低入札価格調査制度について（PDF）", href: "/shisei/chotatsu/shikaku" },
                { title: "建設工事成績評定結果（令和7年度）（PDF）", href: "/shisei/chotatsu/shikaku" },
              ].map((item, i) => (
                <a key={i} href={item.href} style={{ fontSize: 12, display: "flex", gap: 5, alignItems: "flex-start", padding: "4px 0", color: "var(--link-color)" }}>
                  <span style={{ flexShrink: 0 }}>📄</span>{item.title}
                </a>
              ))}
            </div>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.9, marginTop: 16 }}>
            <strong>お問い合わせ</strong><br />
            入札・契約全般：総務課 契約検査係　☎ 0439-88-1122（内線 122）<br />
            工事・設計監理：建設課 工事係　☎ 0439-88-1183（内線 183）<br />
            受付時間：平日 8:30〜17:15
          </div>

          <PageInfo
            department="総務課"
            division="契約検査係"
            tel="0439-88-1122（内線 122）"
            updated="令和8年6月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
