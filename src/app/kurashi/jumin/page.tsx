import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "住民登録・戸籍・マイナンバー | 日野原市",
};

export default function JuminPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/kurashi">くらし・手続き</a> › 住民登録・戸籍・マイナンバー
          </nav>

          <h1 className="page-title">住民登録・戸籍・マイナンバー</h1>

          <div className="content-box">
            <h2 className="section-title">転入・転出・転居の手続き</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th>手続き名</th>
                  <th>必要書類</th>
                  <th>手数料</th>
                  <th>窓口</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>転入届</td>
                  <td>転出証明書・本人確認書類（マイナンバーカード、運転免許証など）</td>
                  <td>無料</td>
                  <td>市民課</td>
                </tr>
                <tr>
                  <td>転出届</td>
                  <td>本人確認書類</td>
                  <td>無料</td>
                  <td>市民課または郵送可</td>
                </tr>
                <tr>
                  <td>転居届</td>
                  <td>本人確認書類</td>
                  <td>無料</td>
                  <td>市民課</td>
                </tr>
                <tr>
                  <td>婚姻届</td>
                  <td>婚姻届書（証人2名の署名）・戸籍謄本（本籍が市外の場合）・本人確認書類</td>
                  <td>無料</td>
                  <td>市民課</td>
                </tr>
                <tr>
                  <td>離婚届</td>
                  <td>離婚届書・戸籍謄本・本人確認書類（協議離婚の場合は証人2名の署名）</td>
                  <td>無料</td>
                  <td>市民課</td>
                </tr>
                <tr>
                  <td>出生届</td>
                  <td>出生届書（医師・助産師の証明）・母子健康手帳</td>
                  <td>無料</td>
                  <td>市民課（出生後14日以内）</td>
                </tr>
                <tr>
                  <td>死亡届</td>
                  <td>死亡届書（医師の死亡診断書）・届出人の本人確認書類</td>
                  <td>無料</td>
                  <td>市民課（死亡後7日以内）</td>
                </tr>
              </tbody>
            </table>
            <p>※届出の際は、届出人（本人・世帯主・同居の親族など）がお越しください。代理人が届け出る場合は委任状が必要です。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">各種証明書の交付</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th>証明書の種類</th>
                  <th>手数料</th>
                  <th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>住民票の写し</td>
                  <td>1通 300円</td>
                  <td>マイナンバーカードで自動交付機利用時は200円</td>
                </tr>
                <tr>
                  <td>印鑑登録証明書</td>
                  <td>1通 300円</td>
                  <td>印鑑登録カードまたはマイナンバーカードが必要</td>
                </tr>
                <tr>
                  <td>戸籍謄本（全部事項証明）</td>
                  <td>1通 450円</td>
                  <td>本籍が日野原市の方のみ</td>
                </tr>
                <tr>
                  <td>戸籍抄本（個人事項証明）</td>
                  <td>1通 450円</td>
                  <td>本籍が日野原市の方のみ</td>
                </tr>
                <tr>
                  <td>戸籍の附票</td>
                  <td>1通 300円</td>
                  <td>本籍が日野原市の方のみ</td>
                </tr>
              </tbody>
            </table>
            <p>自動交付機はマイナンバーカードをお持ちの方が利用できます。市役所1階・市民文化センター・北部出張所に設置しています（稼働時間：平日8:30〜17:00）。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">マイナンバーカードの申請・交付</h2>
            <p>マイナンバーカードは無料で申請できます。申請から交付まで約1〜2か月かかります。</p>
            <h3>申請方法</h3>
            <ul>
              <li><strong>郵便申請：</strong>個人番号カード交付申請書に顔写真を貼付し、返信用封筒で郵送</li>
              <li><strong>オンライン申請：</strong>スマートフォンのカメラで顔写真を撮影し、マイナンバーカード総合サイトから申請</li>
              <li><strong>市役所窓口：</strong>市民課にて申請補助を行っています（要予約）</li>
            </ul>
            <h3>交付の受け取り</h3>
            <p>交付通知書（ハガキ）が届いたら、以下の書類を持参の上、市民課窓口にお越しください。</p>
            <ul>
              <li>交付通知書（ハガキ）</li>
              <li>通知カード（お持ちの方）</li>
              <li>本人確認書類（運転免許証・パスポートなど）</li>
              <li>住民基本台帳カード（お持ちの方）</li>
            </ul>
            <p>※本人による受け取りが原則です。15歳未満または成年被後見人の方は、法定代理人が同行してください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>窓口</th>
                  <td>市民課（市役所1階）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>☎ 0100-88-1113</td>
                </tr>
                <tr>
                  <th>開庁時間</th>
                  <td>平日 8:30〜17:15</td>
                </tr>
                <tr>
                  <th>土曜窓口</th>
                  <td>第2・第4土曜日 8:30〜12:00（住民票・印鑑証明等の交付のみ）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="市民課" division="窓口班" tel="0100-88-1113（内線 212）" updated="令和7年10月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
