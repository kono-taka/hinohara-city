import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立白峰小学校" };

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
            <span>日野原市立白峰小学校</span>
          </div>
          <h1 className="page-title">日野原市立白峰小学校</h1>

          <div style={{ padding: "8px 12px", background: "#fff3cd", border: "1px solid #ffc107", fontSize: 12, marginBottom: 12, lineHeight: 1.7 }}>
            ※白峰地区の少子化に伴い、令和10年度を目途に近隣校との統合について保護者・地域と協議中です。
            詳細は学校教育課（☎ 0100-88-1140）または学校へお問い合わせください。
          </div>

          <div className="content-box">
            <h3>学校基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8821　千葉県日野原市白峰字学校台200番地</td></tr>
                <tr><th>電話</th><td>0100-58-1200　／　FAX：0100-58-1201</td></tr>
                <tr><th>校長</th><td>長田 真由美（おさだ まゆみ）</td></tr>
                <tr><th>児童数</th><td>47人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>6学級（全学年複式学級）</td></tr>
                <tr><th>創立</th><td>昭和22年（1947年）4月1日</td></tr>
                <tr><th>校訓</th><td>心豊かに　たくましく　仲良く</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>学校の特色・取り組み</h3>
            <ul style={{ fontSize: 13, lineHeight: 2, margin: 0, paddingLeft: 20 }}>
              <li><strong>自然を活かした教育</strong>：白峰高原での登山学習（4〜6年）・ブナ林の自然観察・スノーシュー体験を毎年実施。</li>
              <li><strong>複式学習の強み</strong>：全学年複式のため、異年齢の交流が日常的。上級生のリーダーシップと下級生の向上心が自然に育まれます。</li>
              <li><strong>全校縦割り活動</strong>：給食・清掃・学校行事すべてを全校47名で協力して行います。</li>
              <li><strong>地域連携</strong>：白峰地区の農家・温泉旅館・林業事業者との連携学習を実施。地域の方が学校応援ボランティアとして活動中。</li>
            </ul>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　日野原市立白峰小学校　☎ 0100-58-1200（平日 8:00〜17:00）<br />
            スクールバス（市街地〜白峰）については学校または学校教育課（☎ 0100-88-1140）へ。
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和3年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
