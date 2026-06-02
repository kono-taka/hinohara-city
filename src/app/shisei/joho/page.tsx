import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "情報公開・個人情報保護" };

export default function JohoPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/shisei">市政情報</a><span>›</span><span>情報公開・個人情報保護</span>
          </div>
          <h1 className="page-title">情報公開・個人情報保護</h1>

          <div className="content-box">
            <h2 className="section-title">行政文書の公開請求</h2>
            <p>日野原市では「日野原市情報公開条例」に基づき、市が保有する行政文書の公開請求を受け付けています。</p>
            <table className="content-table">
              <tbody>
                <tr><th>請求できる方</th><td>どなたでも（市民に限りません）</td></tr>
                <tr><th>請求書の提出先</th><td>総務課情報公開係（市役所1階）または郵送・FAX・電子申請</td></tr>
                <tr><th>様式</th><td>窓口配布・市ウェブサイトよりダウンロード可</td></tr>
                <tr><th>審査期間</th><td>請求を受けた日から<strong>15日以内</strong>に公開・非公開を決定（延長する場合は通知）</td></tr>
                <tr><th>不服申立て</th><td>非公開等の決定に不服がある場合は、審査請求（情報公開審査会への諮問）が可能</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">公開・非公開の基準</h2>
            <p>原則として行政文書は公開しますが、以下に該当する情報は非公開とします。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>個人のプライバシーに関する情報（氏名・住所・病歴等）</li>
              <li>法人の正当な利益を害するおそれがある情報</li>
              <li>捜査・公訴・刑の執行に支障が生じるおそれがある情報</li>
              <li>審議・検討・協議中の事項で、公開すると意思決定の公正性が損なわれる情報</li>
              <li>公共の安全・秩序の維持に支障が生じるおそれがある情報</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">手数料</h2>
            <table className="content-table">
              <tbody>
                <tr><th>閲覧</th><td><strong>無料</strong></td></tr>
                <tr><th>写しの交付（A4・A3モノクロ）</th><td><strong>1枚10円</strong></td></tr>
                <tr><th>写しの交付（A4・A3カラー）</th><td>1枚50円</td></tr>
                <tr><th>電磁的記録（CD-R）</th><td>1枚100円</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">審議会・委員会の会議公開</h2>
            <p>市の附属機関（審議会・委員会等）の会議は原則として公開しています。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>会議の開催予定: 市公式ウェブサイトの「会議・委員会情報」に掲載（開催1週間前まで）</li>
              <li>傍聴: 希望者は事務局へ事前連絡の上、当日受付にて傍聴票を記入</li>
              <li>会議録: 会議終了後、概ね2か月以内に市ウェブサイトに掲載</li>
              <li>非公開の場合: 個人情報審議など特定の案件のみ非公開とし、その理由を公表</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">保有個人情報の開示請求</h2>
            <p>「個人情報の保護に関する法律」および「日野原市個人情報保護条例」に基づき、市が保有するご自身の個人情報の開示・訂正・利用停止を請求できます。</p>
            <table className="content-table">
              <tbody>
                <tr><th>請求できる方</th><td>本人（代理人による請求も可・委任状が必要）</td></tr>
                <tr><th>本人確認</th><td>マイナンバーカード・運転免許証・パスポート等の本人確認書類</td></tr>
                <tr><th>審査期間</th><td>30日以内に決定通知</td></tr>
                <tr><th>申請窓口</th><td>総務課情報公開係（市役所1階）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">統計データ・オープンデータの公開</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>日野原市統計書</strong>: 人口・世帯・産業・財政等のデータを収録。毎年3月に刊行（市ウェブサイトにてPDF公開）</li>
              <li><strong>オープンデータ</strong>: 市が保有する各種データをCC BY 4.0ライセンスで公開。主要施設位置情報・予算・決算データ等</li>
              <li><strong>各種調査結果</strong>: 市民意識調査・農業センサス・工業統計・商業統計の結果を公開</li>
              <li>オープンデータポータルサイト: 市公式サイト内「統計・オープンデータ」から利用可能</li>
            </ul>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>総務課 情報公開係</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1112</strong></td></tr>
                <tr><th>FAX</th><td>0439-88-1199</td></tr>
                <tr><th>メール</th><td>joho@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="総務課" division="情報公開係" tel="0439-88-1121（内線 201）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
