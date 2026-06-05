import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "著作権について" };

export default function CopyrightPage() {
  return (
    <>
      <SiteHeader current="/" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>著作権について</span>
          </div>
          <h1 className="page-title">著作権について</h1>

          <div className="content-box">
            <h2 className="section-title">著作権の帰属</h2>
            <p>日野原市公式ウェブサイト（以下「本サイト」）に掲載されているテキスト・画像・動画・音声・データ・デザイン・プログラムその他一切のコンテンツ（以下「コンテンツ」）の著作権は、<strong>日野原市</strong>または正当な権利を有する第三者に帰属します。</p>
            <p>著作権法で認められた私的使用・引用等の場合を除き、権利者の許諾なくコンテンツを複製・転載・改変・頒布・公衆送信等することを禁止します。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">リンクについて</h2>
            <p>本サイトへのリンクは、原則として自由です。ただし、以下の場合はリンクをお断りする場合があります。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>本サイトのコンテンツを誤認させるようなリンクの張り方をする場合</li>
              <li>公序良俗に反するサイトからのリンク</li>
              <li>フレーム等を使用して本サイトのコンテンツを自サイトのコンテンツとして表示する場合</li>
              <li>本市の名誉・信用を傷つけるおそれのある場合</li>
            </ul>
            <p style={{ fontSize: 13 }}>リンクを張る際に事前連絡は不要ですが、張っていただけた場合はお知らせいただけると幸いです（広報情報課 ☎0100-88-1113）。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">コンテンツの引用・転載</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>報道・研究・教育等の正当な目的での引用は、著作権法の範囲内で行っていただけます。</li>
              <li>引用の際は、<strong>「出典: 日野原市公式ウェブサイト（https://www.city.hinohara.lg.jp）」</strong>と明記してください。</li>
              <li>商業目的での複製・転載には、事前に本市の許諾が必要です。</li>
              <li>オープンデータとして提供しているコンテンツはクリエイティブ・コモンズ（CC BY 4.0）ライセンスに従い利用できます（各データページにライセンス表記あり）。</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">第三者の著作物</h2>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>本サイト内には第三者の著作物（写真・地図・統計データ等）が含まれる場合があります。これらの著作権は各権利者に帰属しており、本市はそれらについて利用許諾を得て掲載しています。第三者の著作物の二次利用については、各権利者へ直接お問い合わせください。</p>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>総務課 広報情報係</td></tr>
                <tr><th>電話</th><td>☎0100-88-1113</td></tr>
                <tr><th>メール</th><td>somu@city.hinohara.lg.jp</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="秘書広報課" tel="0100-88-1105（内線 105）" updated="令和元年5月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
