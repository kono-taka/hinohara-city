import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立第二中学校" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立第二中学校</span>
          </div>
          <h1 className="page-title">日野原市立第二中学校</h1>

          <div className="content-box">
            <h3>学校基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8804　千葉県日野原市北部2丁目20番地</td></tr>
                <tr><th>電話</th><td>0100-88-3200　／　FAX：0100-88-3201</td></tr>
                <tr><th>校長</th><td>岸田 明子（きしだ あきこ）</td></tr>
                <tr><th>生徒数</th><td>312人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>9学級（各学年3学級）</td></tr>
                <tr><th>創立</th><td>昭和24年（1949年）4月1日</td></tr>
                <tr><th>校訓</th><td>誠実・勤勉・思いやり</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>校長あいさつ</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              「誠実・勤勉・思いやり」の校訓を胸に、生徒たちは日々着実に成長しています。
              本校が誇る美術部・合唱部は全国レベルの実力を有し、令和7年度には合唱部が全日本合唱コンクール
              千葉県大会で金賞を受賞いたしました。芸術を通じた豊かな感性の育成は、本校の大きな強みです。
              地域の皆様の温かいご支援に感謝しながら、引き続き精進してまいります。
            </p>
            <div style={{ textAlign: "right", fontSize: 13, fontWeight: "bold", marginTop: 8, color: "var(--city-blue)" }}>
              校長　岸田 明子
            </div>
          </div>

          <div className="content-box">
            <h3>学校の特色・取り組み</h3>
            <ul style={{ fontSize: 13, lineHeight: 2, margin: 0, paddingLeft: 20 }}>
              <li><strong>美術・合唱の伝統</strong>：美術部は千葉県展入選実績多数。合唱部は令和7年度全日本合唱コンクール千葉県大会 金賞。</li>
              <li><strong>ひのはら学</strong>：総合学習「ひのはら学」では地域の伝統文化・農業・産業を3年間で体系的に学びます。</li>
              <li><strong>人権教育</strong>：年間を通じた人権学習・車椅子体験・高齢者交流などの福祉体験学習を実施。</li>
              <li><strong>環境教育</strong>：原野川水質調査・ごみゼロ運動・校内緑化活動。</li>
            </ul>
          </div>

          <div className="content-box">
            <h3>年間主要行事</h3>
            <table className="content-table">
              <thead><tr><th>月</th><th>行事</th></tr></thead>
              <tbody>
                <tr><td>4月</td><td>入学式・新入生歓迎会・部活動紹介</td></tr>
                <tr><td>5月</td><td>体育祭・1年野外学習（白嶺高原）</td></tr>
                <tr><td>6月</td><td>2年修学旅行（関西方面）・生徒総会</td></tr>
                <tr><td>9月</td><td>合唱コンクール・文化祭「ひのはら祭」</td></tr>
                <tr><td>10月</td><td>郡市新人大会・職場体験（2年）</td></tr>
                <tr><td>11月</td><td>持久走大会・3年進路懇談</td></tr>
                <tr><td>2月</td><td>立志式（2年）・学年末テスト</td></tr>
                <tr><td>3月</td><td>卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　日野原市立第二中学校　☎ 0100-88-3200（平日 8:00〜17:00）
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和4年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
