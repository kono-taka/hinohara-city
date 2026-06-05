import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立原野中学校" };

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
            <span>日野原市立原野中学校</span>
          </div>
          <h1 className="page-title">日野原市立原野中学校</h1>

          <div className="content-box">
            <h3>学校基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8812　千葉県日野原市原野字中沢120番地</td></tr>
                <tr><th>電話</th><td>0100-55-1300　／　FAX：0100-55-1301</td></tr>
                <tr><th>校長</th><td>村上 哲也（むらかみ てつや）</td></tr>
                <tr><th>生徒数</th><td>98人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>3学級（各学年1学級）</td></tr>
                <tr><th>創立</th><td>昭和22年（1947年）4月1日</td></tr>
                <tr><th>校訓</th><td>自ら学び　地域を愛し　未来を拓く</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>校長あいさつ</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              原野中学校は、原野の豊かな自然と温かなコミュニティに育まれた学校です。
              全校98名という小規模ならではの強みを最大限に活かし、一人ひとりの生徒に
              丁寧に向き合う指導を大切にしています。
              令和8年度より隣接市の高校との連携型中高一貫教育の準備を進めており、
              地域とともに新たな教育のかたちを模索しています。
            </p>
            <div style={{ textAlign: "right", fontSize: 13, fontWeight: "bold", marginTop: 8, color: "var(--city-blue)" }}>
              校長　村上 哲也
            </div>
          </div>

          <div className="content-box">
            <h3>学校の特色・取り組み</h3>
            <ul style={{ fontSize: 13, lineHeight: 2, margin: 0, paddingLeft: 20 }}>
              <li><strong>少人数・丁寧な指導</strong>：全校98名・各学年1クラスで、担任と生徒の距離が近く細やかな指導が可能。</li>
              <li><strong>地域探究学習</strong>：農業・林業・観光など原野地区の産業を3年間かけて探究し、地元事業者とのプロジェクト型学習を実施。</li>
              <li><strong>連携型中高一貫</strong>：令和8年度より君津市内の県立高校との連携型中高一貫教育準備中（令和10年度開始予定）。</li>
              <li><strong>全校縦割り活動</strong>：全校生徒が縦割り班で活動し、上級生がリーダーシップを発揮する場を多く設けています。</li>
            </ul>
          </div>

          <div style={{ padding: 14, background: "#fff8e8", border: "1px solid #e8c040", fontSize: 12, lineHeight: 1.8, marginBottom: 12 }}>
            <strong>スクールバスについて</strong><br />
            原野地区の広域から通学するため、スクールバスを運行しています（市街地〜原野中学校）。
            詳細は学校または学校教育課（☎ 0100-88-1140）へお問い合わせください。
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　日野原市立原野中学校　☎ 0100-55-1300（平日 8:00〜17:00）
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和4年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
