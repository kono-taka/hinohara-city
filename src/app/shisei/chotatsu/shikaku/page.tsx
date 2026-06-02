import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "競争入札参加資格申請" };

const kojiDocs = [
  { name: "参加資格申請書（工事・コンサルタント）（様式第1号）", format: "Word", required: true },
  { name: "誓約書（様式第2号）", format: "Word", required: true },
  { name: "登記事項証明書（履歴事項全部証明書）", format: "原本", required: true, note: "申請日前3か月以内のもの" },
  { name: "経営事項審査結果通知書（建設業のみ）", format: "写し", required: true, note: "有効期間内のもの" },
  { name: "建設業許可通知書または許可証明書", format: "写し", required: true },
  { name: "納税証明書（その3の2）", format: "原本", required: true, note: "申請日前3か月以内" },
  { name: "市税の完納証明書（日野原市内に事業所がある場合）", format: "原本", required: false, note: "該当者のみ" },
  { name: "委任状（支店・営業所が申請する場合）", format: "原本", required: false, note: "該当者のみ" },
];

const busshoDocs = [
  { name: "参加資格申請書（物品・委託）（様式第3号）", format: "Word", required: true },
  { name: "誓約書（様式第2号）", format: "Word", required: true },
  { name: "登記事項証明書（法人の場合）または個人事業の開業届の写し", format: "原本/写し", required: true, note: "申請日前3か月以内" },
  { name: "納税証明書（その3の2）", format: "原本", required: true, note: "申請日前3か月以内" },
  { name: "市税の完納証明書（日野原市内に事業所がある場合）", format: "原本", required: false, note: "該当者のみ" },
  { name: "許認可証の写し（許認可が必要な業種の場合）", format: "写し", required: false, note: "該当者のみ" },
  { name: "委任状（支店・営業所が申請する場合）", format: "原本", required: false, note: "該当者のみ" },
];

const forms = [
  {
    category: "申請書・誓約書",
    items: [
      { title: "競争入札参加資格申請の手引き（令和7・8年度）", format: "PDF", size: "842KB", updated: "令和7年4月", href: "/files/chotatsu/tebiki-r7r8.pdf" },
      { title: "参加資格申請書（工事・コンサルタント）（様式第1号）", format: "Word", size: "38KB", updated: "令和7年4月", href: "/files/chotatsu/shinsho-koji.doc" },
      { title: "参加資格申請書（物品・委託）（様式第3号）", format: "Word", size: "36KB", updated: "令和7年4月", href: "/files/chotatsu/shinsho-busshi.doc" },
      { title: "誓約書（様式第2号）", format: "Word", size: "22KB", updated: "令和7年4月", href: "/files/chotatsu/seiyakusho.doc" },
      { title: "委任状（様式第4号）", format: "Word", size: "18KB", updated: "令和5年4月", href: "/files/chotatsu/inintate.doc" },
    ],
  },
  {
    category: "変更・更新手続き",
    items: [
      { title: "登録事項変更届（様式第5号）", format: "Word", size: "24KB", updated: "令和5年4月", href: "/files/chotatsu/henkototsuchi.doc" },
      { title: "資格更新申請書（様式第6号）", format: "Word", size: "30KB", updated: "令和7年4月", href: "/files/chotatsu/koshin.doc" },
      { title: "廃業・解散届（様式第7号）", format: "Word", size: "16KB", updated: "令和3年4月", href: "/files/chotatsu/haigyo.doc" },
    ],
  },
  {
    category: "入札・契約関連",
    items: [
      { title: "入札保証金免除申請書", format: "Word", size: "18KB", updated: "令和3年4月", href: "/files/chotatsu/menjoshinsei.doc" },
      { title: "前払金請求書", format: "Word", size: "20KB", updated: "令和4年4月", href: "/files/chotatsu/maebararai.doc" },
      { title: "低入札価格調査制度について", format: "PDF", size: "156KB", updated: "令和6年4月", href: "/files/chotatsu/teikkakaku.pdf" },
      { title: "建設工事成績評定結果（令和7年度）", format: "PDF", size: "228KB", updated: "令和8年4月", href: "/files/chotatsu/seiseki-r7.pdf" },
      { title: "日野原市建設工事請負契約約款", format: "PDF", size: "312KB", updated: "令和4年4月", href: "/files/chotatsu/yakkan.pdf" },
    ],
  },
];

function FormatBadge({ format }: { format: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    PDF: { bg: "#fee2e2", color: "#991b1b" },
    Word: { bg: "#dbeafe", color: "#1e40af" },
    Excel: { bg: "#dcfce7", color: "#166534" },
    "原本": { bg: "#f3f4f6", color: "#374151" },
    "写し": { bg: "#f3f4f6", color: "#374151" },
    "原本/写し": { bg: "#f3f4f6", color: "#374151" },
  };
  const c = colors[format] ?? { bg: "#f3f4f6", color: "#374151" };
  return (
    <span style={{
      fontSize: 10, fontWeight: "bold", padding: "1px 6px", borderRadius: 2,
      background: c.bg, color: c.color, whiteSpace: "nowrap",
    }}>
      {format}
    </span>
  );
}

export default function ShikakuPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/shisei">市政情報</a> › <a href="/shisei/chotatsu">入札・契約情報</a> › 競争入札参加資格申請
          </nav>
          <h1 className="page-title">競争入札参加資格申請</h1>

          {/* 概要 */}
          <div className="content-box">
            <h3>申請の概要</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 10px" }}>
              日野原市が発注する建設工事・測量・設計・物品調達・業務委託の競争入札に参加するためには、事前に参加資格の審査・登録が必要です。
              登録は2年ごとに更新が必要です（令和7・8年度が現有効期間）。
            </p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 160 }}>有効期間</th>
                  <td>令和7年4月1日〜令和9年3月31日（2年間）</td>
                </tr>
                <tr>
                  <th>定期受付（次回）</th>
                  <td>令和9年1月6日（月）〜2月28日（金）※令和9・10年度分</td>
                </tr>
                <tr>
                  <th>随時受付</th>
                  <td>随時受け付けています。登録後は次の定期更新まで有効です。</td>
                </tr>
                <tr>
                  <th>受付窓口</th>
                  <td>総務課 契約検査係（市役所2階）<br />受付時間：平日 8:30〜17:15（郵送可）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 申請区分 */}
          <div className="content-box">
            <h3>申請区分・要件</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ border: "1px solid var(--border-light)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: "#1a4494", color: "#fff", padding: "7px 12px", fontSize: 13, fontWeight: "bold" }}>
                  工事・測量・設計・コンサルタント
                </div>
                <div style={{ padding: "10px 12px", fontSize: 12.5, lineHeight: 1.8 }}>
                  <p style={{ margin: "0 0 8px" }}>以下のすべてを満たす法人・個人</p>
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 2 }}>
                    <li>建設業法に基づく建設業許可を有すること</li>
                    <li>経営事項審査（経審）を受審し、結果通知書が有効であること</li>
                    <li>国税・市税を滞納していないこと</li>
                    <li>会社更生法・民事再生法による手続き中でないこと</li>
                    <li>暴力団等の関係者でないこと</li>
                  </ul>
                </div>
              </div>
              <div style={{ border: "1px solid var(--border-light)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: "#2a6041", color: "#fff", padding: "7px 12px", fontSize: 13, fontWeight: "bold" }}>
                  物品調達・業務委託
                </div>
                <div style={{ padding: "10px 12px", fontSize: 12.5, lineHeight: 1.8 }}>
                  <p style={{ margin: "0 0 8px" }}>以下のすべてを満たす法人・個人</p>
                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 2 }}>
                    <li>日本国内に事業所を有すること</li>
                    <li>国税・市税を滞納していないこと</li>
                    <li>許認可が必要な業種は有効な許認可を有すること</li>
                    <li>会社更生法・民事再生法による手続き中でないこと</li>
                    <li>暴力団等の関係者でないこと</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 工事必要書類 */}
          <div className="content-box">
            <h3>必要書類一覧 ― 工事・コンサルタント</h3>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: 28 }}>必須</th>
                  <th>書類名</th>
                  <th style={{ width: 80 }}>形式</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {kojiDocs.map((d, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center" }}>
                      {d.required
                        ? <span style={{ color: "#c0392b", fontWeight: "bold" }}>必須</span>
                        : <span style={{ color: "#888" }}>条件</span>
                      }
                    </td>
                    <td style={{ fontSize: 13 }}>{d.name}</td>
                    <td><FormatBadge format={d.format} /></td>
                    <td style={{ fontSize: 12, color: "#555" }}>{d.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 物品必要書類 */}
          <div className="content-box">
            <h3>必要書類一覧 ― 物品調達・業務委託</h3>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: 28 }}>必須</th>
                  <th>書類名</th>
                  <th style={{ width: 80 }}>形式</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                {busshoDocs.map((d, i) => (
                  <tr key={i}>
                    <td style={{ textAlign: "center" }}>
                      {d.required
                        ? <span style={{ color: "#c0392b", fontWeight: "bold" }}>必須</span>
                        : <span style={{ color: "#888" }}>条件</span>
                      }
                    </td>
                    <td style={{ fontSize: 13 }}>{d.name}</td>
                    <td><FormatBadge format={d.format} /></td>
                    <td style={{ fontSize: 12, color: "#555" }}>{d.note ?? ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 各種様式ダウンロード */}
          <div className="section-title">各種様式ダウンロード</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 20 }}>
            {forms.map((cat, ci) => (
              <div key={ci}>
                <div style={{
                  background: "#f4f6fb", padding: "7px 14px",
                  fontSize: 12.5, fontWeight: "bold", color: "#333",
                  borderBottom: "1px solid var(--border-light)",
                  borderTop: ci > 0 ? "2px solid var(--border-light)" : "none",
                }}>
                  {cat.category}
                </div>
                {cat.items.map((item, ii) => (
                  <div key={ii} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 14px",
                    borderBottom: ii < cat.items.length - 1 ? "1px solid #e8edf4" : "none",
                  }}>
                    <FormatBadge format={item.format} />
                    <a href={item.href} download style={{ fontSize: 13, flex: 1 }}>{item.title}</a>
                    <span style={{ fontSize: 11, color: "#999", whiteSpace: "nowrap" }}>{item.size}</span>
                    <span style={{ fontSize: 11, color: "#bbb", whiteSpace: "nowrap" }}>更新：{item.updated}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* 注意事項・問い合わせ */}
          <div style={{ padding: 14, background: "#fff8e6", border: "1px solid #f0c830", fontSize: 12.5, lineHeight: 1.9, marginBottom: 16 }}>
            <strong>【注意事項】</strong><br />
            ・申請書類に不備がある場合、登録まで時間がかかる場合があります。余裕をもってお申し込みください。<br />
            ・登録後、商号・代表者・所在地等に変更が生じた場合は速やかに「登録事項変更届」を提出してください。<br />
            ・登録資格は譲渡・貸与できません。<br />
            ・虚偽申請が判明した場合、資格を取り消し、一定期間入札参加を制限することがあります。
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9 }}>
            <strong>お問い合わせ</strong><br />
            総務課 契約検査係　☎ 0439-88-1122（内線 122）<br />
            〒299-1401　千葉県日野原市中央一丁目1番地1号　日野原市役所2階<br />
            受付時間：平日 8:30〜17:15
          </div>

          <PageInfo
            department="総務課"
            division="契約検査係"
            tel="0439-88-1122（内線 122）"
            updated="令和7年4月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
