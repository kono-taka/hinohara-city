import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "道路・河川・公共交通 | 日野原市",
};

export default function DoroPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/kurashi">くらし・手続き</a><span>›</span><span>道路・河川・公共交通</span>
          </div>

          <h1 className="page-title">道路・河川・公共交通</h1>

          <div className="content-box">
            <h2 className="section-title">道路の損傷・陥没の通報</h2>
            <p>市道の穴、路面の陥没、側溝の破損、道路標識の損傷などを発見された場合はご連絡ください。</p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>通報先（建設課）</th>
                  <td>☎ 0100-88-1130</td>
                </tr>
                <tr>
                  <th>受付時間</th>
                  <td>24時間受付（夜間・休日は当直室が対応）</td>
                </tr>
                <tr>
                  <th>市ウェブサイト</th>
                  <td>道路損傷通報フォームから写真付きで通報可能</td>
                </tr>
              </tbody>
            </table>
            <p>※国道・県道の通報先はそれぞれ千葉国道事務所（☎ 043-213-5511）・千葉県君津土木事務所（☎ 0100-56-2100）へお願いします。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">市道の占用・掘削許可申請</h2>
            <p>ガス管・水道管の設置や電柱の建設など、市道を占用・掘削する場合は事前に許可申請が必要です。</p>
            <h3>必要書類</h3>
            <ul>
              <li>道路占用（掘削）許可申請書</li>
              <li>位置図・平面図・断面図</li>
              <li>工事施工計画書</li>
              <li>写真（現状）</li>
            </ul>
            <h3>審査・許可</h3>
            <ul>
              <li>審査期間：申請受付から約2週間</li>
              <li>占用料：占用物件の種類・面積・期間により算定（道路法施行令に基づく）</li>
              <li>工事完了後は完了届の提出が必要です</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">市営バス「ひのはらバス」</h2>
            <p>市内3路線を運行しています。時刻表は市役所・各停留所および市ウェブサイトでご確認ください。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>路線名</th>
                  <th>主な経由地</th>
                  <th>運賃</th>
                  <th>1日の便数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>中央線</td>
                  <td>市役所前〜中央小学校〜市民文化センター〜南部住宅</td>
                  <td>150〜300円</td>
                  <td>平日10便・土休日6便</td>
                </tr>
                <tr>
                  <td>原野温泉線</td>
                  <td>市役所前〜北部地区〜原野公民館〜原野温泉</td>
                  <td>200〜500円</td>
                  <td>平日6便・土休日4便</td>
                </tr>
                <tr>
                  <td>白嶺高原線</td>
                  <td>市役所前〜白嶺地区センター〜白嶺高原</td>
                  <td>300〜600円</td>
                  <td>平日4便・土休日2便</td>
                </tr>
              </tbody>
            </table>
            <p>※ICカード（Suica等）は使用できません。整理券を取り、乗車区間の運賃を降車時にお支払いください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">デマンドタクシー</h2>
            <p>路線バスが運行していない地域や時間帯を補完する予約制乗合タクシーです。</p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>対象地域</th>
                  <td>市内全域（バス路線内も利用可）</td>
                </tr>
                <tr>
                  <th>利用登録</th>
                  <td>事前に建設課または市ウェブサイトで利用者登録が必要</td>
                </tr>
                <tr>
                  <th>予約方法</th>
                  <td>電話予約（☎ 0100-88-1130）：乗車日の前日17時までに受付</td>
                </tr>
                <tr>
                  <th>運賃</th>
                  <td>1乗車 500円（65歳以上・障害者手帳をお持ちの方は300円）</td>
                </tr>
                <tr>
                  <th>運行時間</th>
                  <td>平日・土曜 8:00〜18:00（日曜・祝日・年末年始は運休）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>窓口</th>
                  <td>建設課（市役所2階）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>☎ 0100-88-1130</td>
                </tr>
                <tr>
                  <th>開庁時間</th>
                  <td>平日 8:30〜17:15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="建設課" division="道路係" tel="0100-88-1181（内線 181）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
