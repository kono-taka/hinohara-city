import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "第3次日野原市総合計画" };

export default function KeikakuPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/shisei">市政情報</a><span>›</span><span>第3次日野原市総合計画</span>
          </div>
          <h1 className="page-title">第3次日野原市総合計画</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #1565c0", background: "#e8eef8" }}>
            <h2 className="section-title">将来像</h2>
            <p style={{ fontSize: 18, fontWeight: "bold", textAlign: "center", padding: "12px 0", color: "#1a237e" }}>「山と水と人が輝く　みんなのふるさと ひのはら」</p>
            <p style={{ fontSize: 13, textAlign: "center", color: "#555" }}>― 第3次日野原市総合計画 基本構想より ―</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">計画の概要</h2>
            <table className="content-table">
              <tbody>
                <tr><th>計画期間</th><td>令和5年度（2023年度）〜令和14年度（2032年度）　<strong>10年計画</strong></td></tr>
                <tr><th>計画の構成</th><td>基本構想（10年）+ 基本計画（5年：前期・後期）+ 実施計画（3年・毎年ローリング）</td></tr>
                <tr><th>目標人口</th><td>令和14年度末 <strong>38,000人</strong>（現状維持目標・社人研推計より上回りを目指す）</td></tr>
                <tr><th>策定年月</th><td>令和5年3月（日野原市議会議決を経て決定）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">5つの基本目標と主要施策</h2>

            {[
              {
                num: "1",
                title: "豊かな自然と共生するまち",
                sub: "環境・農林業",
                policies: ["ゼロカーボンシティの実現（2050年カーボンニュートラル）", "農林業の持続的な発展と担い手育成", "白峰高原・棚田等の自然環境・景観の保全", "生物多様性の保全と外来種対策"],
              },
              {
                num: "2",
                title: "安全・安心に暮らせるまち",
                sub: "防災・医療・福祉",
                policies: ["大規模災害に備えた防災体制の強化", "地域医療・救急医療体制の維持・充実", "高齢者・障がい者が住み慣れた地域で暮らせる福祉の推進", "消費生活相談・犯罪・交通安全対策"],
              },
              {
                num: "3",
                title: "人を育て、文化を育むまち",
                sub: "教育・生涯学習",
                policies: ["学校教育の質向上（ICT活用・少人数指導）", "子育て支援の充実（保育・放課後・相談体制）", "生涯学習・スポーツ・文化活動の振興", "文化財の保護・活用と歴史的まちなみの整備"],
              },
              {
                num: "4",
                title: "活力ある産業が育つまち",
                sub: "農商工・観光・移住",
                policies: ["農業・林業の6次産業化と販路開拓", "中小企業・商業の振興と創業支援", "観光振興計画に基づく体験型観光・インバウンド誘致", "移住・定住の促進とテレワーク環境整備"],
              },
              {
                num: "5",
                title: "みんなで支えるまちづくり",
                sub: "市民参画・行財政改革",
                policies: ["市民・NPO・地域団体との協働によるまちづくり", "デジタル化（DX）による行政サービスの効率化", "財政健全化の維持と公共施設の適正管理", "広域連携（南房総広域行政組合・近隣市町村との連携）"],
              },
            ].map((goal) => (
              <div key={goal.num} style={{ marginBottom: 16, border: "1px solid #dde5f4", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: "#1565c0", color: "#fff", padding: "8px 12px", fontWeight: "bold", fontSize: 14 }}>
                  基本目標{goal.num}　{goal.title}　<span style={{ fontWeight: "normal", fontSize: 12 }}>（{goal.sub}）</span>
                </div>
                <ul style={{ margin: 0, padding: "8px 16px 8px 32px", fontSize: 13, lineHeight: 1.8, background: "#fff" }}>
                  {goal.policies.map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="content-box">
            <h2 className="section-title">パブリックコメント・策定経緯</h2>
            <table className="content-table">
              <tbody>
                <tr><th>総合計画審議会</th><td>令和4年6月〜令和5年1月（計8回開催）。委員15名（市民代表・各団体・有識者）</td></tr>
                <tr><th>市民アンケート</th><td>令和4年7月実施。配布2,000人・回収率42%（840人）</td></tr>
                <tr><th>パブリックコメント</th><td>令和4年11月（30日間）。意見提出: 82件（52人・団体）</td></tr>
                <tr><th>議会議決</th><td>令和5年3月定例会で可決</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">計画書のダウンロード</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>基本構想（PDF・全35ページ）</li>
              <li>基本計画 前期（令和5〜9年度）（PDF・全120ページ）</li>
              <li>実施計画 令和8年度版（PDF・全85ページ）</li>
              <li>概要版（A4・8ページ）</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>計画書は市公式ウェブサイトの「市政情報 › 総合計画」ページからダウンロードできます。紙の冊子は企画政策課窓口にて配布（無料）しています。</p>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>企画政策課（総合計画係）</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1114</strong></td></tr>
                <tr><th>メール</th><td>kikaku@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="企画政策課" division="総合計画係" tel="0439-88-1114（内線 101）" updated="令和5年3月31日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
