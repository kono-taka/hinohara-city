import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "採用情報（職員募集）",
  description: "日野原市職員採用試験・会計年度任用職員募集のご案内。事務・技術・保育士・司書など各職種の試験日程・受験資格・採用実績をご確認ください。",
};

const faqs = [
  { q: "採用試験の日程はどこで確認できますか？", a: "市公式サイトの「採用情報」ページおよび市役所総務課（1階）の掲示板でご確認ください。千葉県市町村職員採用試験（共同実施）に参加する場合は千葉県市町村総合事務組合のサイトにも掲載されます。" },
  { q: "社会人経験者でも受験できますか？", a: "一般事務（社会人枠）では民間企業等での職務経験5年以上を持つ方を対象とした採用区分があります（年齢上限は各年度の試験要項をご確認ください）。" },
  { q: "会計年度任用職員とは何ですか？", a: "地方公務員法に基づく1会計年度ごとの任用の職員です。フルタイム・パートタイムがあり、再度任用も可能です。社会保険・退職手当・期末手当の支給があります。正規職員とは異なる雇用形態です。" },
  { q: "採用後の勤務地はどこになりますか？", a: "原則として日野原市内の市役所本庁舎または各出張所・施設等に配属されます。採用区分・資格によって配属先が異なります。異動は原則3〜5年ごとです。" },
  { q: "育児休業・介護休暇は取得できますか？", a: "取得できます。育児休業の取得率は令和6年度で職員全体の96.4%（男性職員も積極的に取得）です。育児短時間勤務・所定外労働の免除なども整備されています。" },
];

const examTypes = [
  {
    type: "一般事務（大卒程度）",
    quota: "若干名",
    age: "22〜29歳（学卒含む）",
    exam: "一次：教養・専門筆記　二次：適性検査・論文　三次：個別面接",
    note: "令和8年度採用　一次試験：9月予定",
    color: "#1565c0",
  },
  {
    type: "一般事務（社会人経験者）",
    quota: "若干名",
    age: "30〜45歳（職務経験5年以上）",
    exam: "一次：経験論文・適性検査　二次：個別面接・プレゼン",
    note: "令和8年度採用　一次試験：10月予定",
    color: "#1565c0",
  },
  {
    type: "技術職（土木・建築）",
    quota: "若干名",
    age: "22〜35歳",
    exam: "一次：教養・専門筆記　二次：面接",
    note: "令和8年度採用　随時受付",
    color: "#2e7d32",
  },
  {
    type: "保育士",
    quota: "1〜2名",
    age: "22〜40歳",
    exam: "書類審査　→　実技・個別面接",
    note: "令和9年4月採用予定　12月締切予定",
    color: "#e91e63",
  },
  {
    type: "司書",
    quota: "若干名",
    age: "22〜35歳",
    exam: "一次：教養・専門筆記　二次：面接",
    note: "欠員が生じた場合のみ実施",
    color: "#f57c00",
  },
  {
    type: "消防職員",
    quota: "2〜3名",
    age: "18〜29歳",
    exam: "一次：体力・教養筆記　二次：適性・面接　三次：身体検査",
    note: "千葉県市町村共同実施試験（9月）",
    color: "#c62828",
  },
];

const partTimeJobs = [
  { title: "保育補助員（保育所）",         type: "パートタイム", hours: "週4日・6時間", pay: "時給1,050円", req: "保育士資格または幼稚園教諭免許", status: "募集中" },
  { title: "図書館司書補（市立図書館）",   type: "パートタイム", hours: "週3〜5日",    pay: "時給1,020円", req: "司書資格（司書補でも可）",          status: "募集中" },
  { title: "一般事務補助（市民課）",       type: "パートタイム", hours: "週5日・6時間", pay: "時給970円",   req: "不問",                               status: "随時募集" },
  { title: "介護予防指導員（保健センター）", type: "パートタイム", hours: "週2〜3日",   pay: "時給1,200円", req: "理学療法士・作業療法士資格",          status: "次回10月募集" },
  { title: "給食調理員（学校給食センター）", type: "フルタイム",  hours: "週5日・8時間", pay: "月額182,000円", req: "調理師免許（有利）",               status: "随時募集" },
  { title: "農業振興員（農林振興課）",     type: "パートタイム", hours: "週3日",       pay: "時給1,050円", req: "農業経験者優遇",                      status: "次回4月募集" },
];

export default function SaiyoPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "市政情報", href: "/shisei" },
        { name: "採用情報（職員募集）" },
      ]} />
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>採用情報（職員募集）</span>
          </div>
          <h1 className="page-title">採用情報（職員募集）</h1>

          {/* 採用メッセージ */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#eaf3ef" }}>
            <h2 className="section-title">日野原市で働きませんか</h2>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市は「日々に、まなざしを。」をキャッチコピーに、市民一人ひとりの暮らしに寄り添う行政サービスを目指しています。
              豊かな自然環境の中で地域に根差した仕事に携わりたい方、市民の生活を支える仕事に情熱を持てる方を求めています。
              育児休業取得率96.4%・テレワーク制度導入済みなど、<strong>働きやすい職場環境</strong>を整備しています。
            </p>
          </div>

          {/* 数字で見る日野原市 */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, margin: "16px 0 24px" }}>
            {[
              { label: "職員数",           value: "312",  unit: "名", note: "令和8年4月1日現在" },
              { label: "平均年齢",         value: "41.2", unit: "歳", note: "全職種平均" },
              { label: "育休取得率",       value: "96",   unit: "%",  note: "令和6年度" },
              { label: "平均残業時間",     value: "9.2",  unit: "h/月", note: "令和6年度実績" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #c8ddd5", borderTop: "3px solid #1a6e5a", borderRadius: 4, padding: "12px", textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#888" }}>{s.label}</div>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#1a6e5a", lineHeight: 1.2 }}>
                  {s.value}<span style={{ fontSize: 12, marginLeft: 2 }}>{s.unit}</span>
                </div>
                <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>{s.note}</div>
              </div>
            ))}
          </div>

          {/* 職員採用試験 */}
          <div className="content-box">
            <h2 className="section-title">令和8年度 職員採用試験</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {examTypes.map((e) => (
                <div key={e.type} style={{ border: `1px solid ${e.color}44`, borderLeft: `4px solid ${e.color}`, borderRadius: 3, overflow: "hidden", background: "#fff" }}>
                  <div style={{ display: "flex", gap: 12, padding: "10px 14px", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: "bold", fontSize: 14, color: e.color, marginBottom: 4 }}>{e.type}</div>
                      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "2px 10px", fontSize: 12 }}>
                        <span style={{ color: "#888", whiteSpace: "nowrap" }}>採用予定数</span>
                        <span>{e.quota}</span>
                        <span style={{ color: "#888", whiteSpace: "nowrap" }}>受験資格（年齢）</span>
                        <span>{e.age}</span>
                        <span style={{ color: "#888", whiteSpace: "nowrap" }}>試験内容</span>
                        <span>{e.exam}</span>
                      </div>
                    </div>
                    <div style={{ flexShrink: 0, background: `${e.color}18`, color: e.color, padding: "4px 10px", borderRadius: 12, fontSize: 11, fontWeight: "bold", whiteSpace: "nowrap" }}>
                      {e.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#555", marginTop: 12 }}>
              ※ 採用予定数・試験日程は変更される場合があります。受験申込前に必ず最新の試験要項をご確認ください。<br />
              ※ 受験申込書・試験要項は6月上旬から市役所総務課・市公式サイトで配布します。
            </p>
          </div>

          {/* 会計年度任用職員 */}
          <div className="content-box">
            <h2 className="section-title">会計年度任用職員（パート・フルタイム）募集</h2>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 12 }}>
              正規職員以外に、1会計年度ごとに任用される「会計年度任用職員」を各部署で随時募集しています。
              社会保険・期末手当の支給があり、再度任用も可能です。
            </p>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr><th>職種</th><th>雇用形態</th><th>勤務時間</th><th>報酬</th><th>資格</th><th>状況</th></tr>
                </thead>
                <tbody>
                  {partTimeJobs.map((j) => (
                    <tr key={j.title}>
                      <td style={{ fontWeight: "bold", fontSize: 12.5 }}>{j.title}</td>
                      <td style={{ fontSize: 12 }}>{j.type}</td>
                      <td style={{ fontSize: 12 }}>{j.hours}</td>
                      <td style={{ fontSize: 12, whiteSpace: "nowrap" }}>{j.pay}</td>
                      <td style={{ fontSize: 12 }}>{j.req}</td>
                      <td>
                        <span style={{
                          fontSize: 11, fontWeight: "bold", padding: "2px 8px", borderRadius: 10,
                          background: j.status === "募集中" ? "#e8f5e9" : j.status === "随時募集" ? "#e3f2fd" : "#fff8e1",
                          color: j.status === "募集中" ? "#2e7d32" : j.status === "随時募集" ? "#1565c0" : "#e65100",
                        }}>{j.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
              ※ 上記以外の職種についても随時募集する場合があります。総務課人事係（☎ 0439-88-1111 内線 111）へお問い合わせください。
            </p>
          </div>

          {/* 職場環境 */}
          <div className="content-box">
            <h2 className="section-title">職場環境・福利厚生</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
              {[
                { icon: "👶", title: "育児支援", desc: "育児休業（最大3年）・育児短時間勤務・所定外労働免除。男性取得も積極推進。" },
                { icon: "🏠", title: "テレワーク", desc: "在宅勤務・サテライトオフィス勤務を導入。週2日まで取得可能。" },
                { icon: "📅", title: "年次有給休暇", desc: "初年度15日付与（4月1日）。時間単位取得・半日取得も可能。取得率73%。" },
                { icon: "🎓", title: "研修・キャリア", desc: "初任者研修・職階別研修・国・県への出向派遣・自己啓発支援制度あり。" },
                { icon: "🏥", title: "健康管理", desc: "定期健康診断（全職員）・人間ドック補助・ストレスチェック・EAP（相談窓口）。" },
                { icon: "🌳", title: "ワークライフ", desc: "ノー残業デー（毎週水・金曜日）。フレックスタイム制（一部部署）。" },
              ].map((item) => (
                <div key={item.title} style={{ padding: "12px 14px", background: "#f8fbf9", border: "1px solid #d0e8d8", borderRadius: 4 }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{item.icon}</div>
                  <div style={{ fontWeight: "bold", fontSize: 13, color: "#1a6e5a", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* よくある質問 */}
          <div className="content-box">
            <h2 className="section-title">よくある質問</h2>
            <dl style={{ margin: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid #e0eae5", padding: "12px 0" }}>
                  <dt style={{ fontWeight: "bold", fontSize: 13, color: "#1a6e5a", marginBottom: 4 }}>Q. {q}</dt>
                  <dd style={{ fontSize: 13, lineHeight: 1.8, margin: 0, paddingLeft: 8, color: "#444" }}>A. {a}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* お問い合わせ */}
          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>総務課 人事係（市役所1階）</td></tr>
                <tr><th>電話</th><td>☎ <strong>0439-88-1111</strong>（内線 111）</td></tr>
                <tr><th>メール</th><td>jinji@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="総務課" division="人事係" tel="0439-88-1111（内線 111）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
