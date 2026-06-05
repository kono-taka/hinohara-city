import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "住宅・建築のご案内 | 日野原市",
};

export default function JutakuPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/kurashi">くらし・手続き</a> › 住宅・建築のご案内
          </nav>

          <h1 className="page-title">住宅・建築のご案内</h1>

          <div className="content-box">
            <h2 className="section-title">市営住宅のご案内</h2>
            <p>日野原市では7団地・186戸の市営住宅を管理しています。入居申込は毎年4月・10月に受付を行います。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>団地名</th>
                  <th>戸数</th>
                  <th>間取り</th>
                  <th>月額家賃</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>中央第1住宅</td>
                  <td>48戸</td>
                  <td>2LDK〜3K</td>
                  <td>2.8〜4.5万円</td>
                </tr>
                <tr>
                  <td>中央第2住宅</td>
                  <td>32戸</td>
                  <td>2DK〜2LDK</td>
                  <td>2.5〜4.2万円</td>
                </tr>
                <tr>
                  <td>北部住宅</td>
                  <td>24戸</td>
                  <td>3K〜3DK</td>
                  <td>2.8〜3.8万円</td>
                </tr>
                <tr>
                  <td>原野住宅</td>
                  <td>20戸</td>
                  <td>3K</td>
                  <td>2.5〜3.2万円</td>
                </tr>
                <tr>
                  <td>白峰住宅</td>
                  <td>18戸</td>
                  <td>3K</td>
                  <td>2.5〜3.0万円</td>
                </tr>
                <tr>
                  <td>東部第1住宅</td>
                  <td>28戸</td>
                  <td>3K〜3DK</td>
                  <td>2.8〜4.0万円</td>
                </tr>
                <tr>
                  <td>南部住宅</td>
                  <td>16戸</td>
                  <td>2K〜2DK</td>
                  <td>2.5〜3.5万円</td>
                </tr>
              </tbody>
            </table>
            <p>家賃は所得に応じて決定されます（公営住宅法に基づく応能応益家賃制度）。ペット飼育・楽器演奏は原則禁止です。入居資格・申込方法の詳細は建設課住宅係までお問い合わせください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">住宅リフォーム補助金</h2>
            <p>市内に居住する方が、市内業者を利用して住宅のリフォーム工事を行う場合に補助します。</p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>対象工事</th>
                  <td>屋根・外壁・内装・設備・バリアフリー等の改修工事（工事費20万円以上）</td>
                </tr>
                <tr>
                  <th>補助率</th>
                  <td>対象工事費の1/5</td>
                </tr>
                <tr>
                  <th>補助上限額</th>
                  <td>30万円</td>
                </tr>
                <tr>
                  <th>申請時期</th>
                  <td>工事着工前（着工後の申請は不可）</td>
                </tr>
                <tr>
                  <th>予算</th>
                  <td>年度ごとに予算額を上限として受付（先着順）</td>
                </tr>
              </tbody>
            </table>
            <p>※耐震改修工事・省エネ改修工事については別途上乗せ補助制度があります。詳しくはお問い合わせください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">建築確認申請</h2>
            <p>建築物の新築・増改築・用途変更を行う場合は、建築基準法に基づく確認申請が必要です。</p>
            <ul>
              <li><strong>申請窓口：</strong>建設課（市役所2階）または千葉県建築確認機関</li>
              <li><strong>対象：</strong>床面積10㎡を超える建築物の新築・増改築等</li>
              <li><strong>必要書類：</strong>建築確認申請書・設計図書・その他添付書類</li>
              <li><strong>審査期間：</strong>木造2階建て以下は7日、その他は35日が目安</li>
              <li><strong>手数料：</strong>建築物の種類・規模により異なります（建設課にご確認ください）</li>
            </ul>
            <p>都市計画法上の開発行為（一定規模以上の土地の形質変更）を伴う場合は、開発許可申請も必要です。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">空き家バンク</h2>
            <p>日野原市では空き家の利活用を促進するため、「空き家バンク」を運営しています。移住・定住をお考えの方は、登録物件一覧・利用方法を移住・定住情報ページでご覧ください。</p>
            <p><a href="/kanko/iju">移住・定住のご案内（空き家バンク情報）</a></p>
            <ul>
              <li>空き家の登録（売却・賃貸）をご希望の方も建設課住宅係にご相談ください</li>
              <li>空き家の適切な管理についての相談も受け付けています</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>窓口</th>
                  <td>建設課 住宅係（市役所2階）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>☎ 0100-88-1131</td>
                </tr>
                <tr>
                  <th>開庁時間</th>
                  <td>平日 8:30〜17:15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="建設課" division="住宅係" tel="0100-88-1182（内線 182）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
