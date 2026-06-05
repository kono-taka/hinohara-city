import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市立中央図書館" };

export default function ToshokanPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化・スポーツ</a><span>›</span>
            <span>市立中央図書館</span>
          </div>
          <h1 className="page-title">市立中央図書館</h1>

          {/* 基本情報 */}
          <h2 className="section-title">基本情報</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>所在地</td><td>中央2丁目8番12号</td></tr>
                <tr><td>電話</td><td>☎ 0100-88-4500</td></tr>
                <tr><td>FAX</td><td>0100-88-4501</td></tr>
                <tr>
                  <td>開館時間</td>
                  <td>
                    平日（火〜金）：9:00〜19:00<br />
                    土・日・祝日：9:00〜17:00
                  </td>
                </tr>
                <tr>
                  <td>休館日</td>
                  <td>
                    月曜日（祝日の場合は翌平日）<br />
                    毎月末の図書整理日（月末が日曜・祝日の場合は前週）<br />
                    年末年始（12月28日〜1月4日）<br />
                    特別整理期間（年1回・約1週間）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 蔵書・サービス */}
          <h2 className="section-title">蔵書・施設・サービス</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>総蔵書数</td><td>約14万冊（図書・雑誌・視聴覚資料）</td></tr>
                <tr><td>視聴覚資料</td><td>CD約2,800点・DVD約1,200点</td></tr>
                <tr><td>郷土資料室</td><td>日野原市および佐久地域に関する資料・地域の古文書・絵図・写真</td></tr>
                <tr><td>こどもの読書室</td><td>絵本・児童書コーナー、読み聞かせスペース完備</td></tr>
                <tr><td>インターネット端末</td><td>2台（1回1時間・無料、図書館カード必要）</td></tr>
                <tr><td>複写サービス</td><td>所蔵資料のコピー可（A4・B4：1枚10円）</td></tr>
                <tr><td>相互貸借</td><td>千葉県内他図書館の資料を取り寄せて貸出可（申込から1〜2週間）</td></tr>
              </tbody>
            </table>
          </div>

          {/* 利用カード */}
          <h2 className="section-title">図書館利用カードの作成</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>図書館の資料を借りるには、利用カードが必要です。図書館カウンターで申請できます（無料）。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>申請できる方</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>日野原市内に在住・在勤・在学している方</li>
              <li>隣接市町村（佐久市・小諸市・南牧村・川上村・北相木村・南相木村）に在住の方</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>申請に必要なもの</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>現住所が確認できる身分証明書（運転免許証・マイナンバーカード・保険証 等）</li>
              <li>中学生以下の方は保護者同伴または保護者の署名があれば申請可</li>
            </ul>
          </div>

          {/* 貸出条件 */}
          <h2 className="section-title">貸出条件</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>資料の種類</th><th>貸出冊数・点数</th><th>貸出期間</th></tr></thead>
              <tbody>
                <tr><td>図書・雑誌</td><td>合計15冊まで</td><td>2週間</td></tr>
                <tr><td>CD・DVD</td><td>合計5点まで</td><td>2週間</td></tr>
                <tr><td>予約（取り置き）</td><td>20冊まで</td><td>準備できた日から1週間以内に来館</td></tr>
              </tbody>
            </table>
            <p style={{ marginTop: 10, lineHeight: 1.8 }}>
              <strong>貸出延長：</strong>返却期限前であれば電話（☎ 0100-88-4500）またはカウンターで1回のみ延長できます（予約が入っている場合は延長不可）。<br />
              <strong>インターネット予約：</strong>市立図書館ホームページからも予約が可能です（要カード番号・パスワード）。
            </p>
          </div>

          {/* 読み聞かせイベント */}
          <h2 className="section-title">読み聞かせイベント・おはなし会</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>イベント名</th><th>開催日時</th><th>対象</th><th>担当</th></tr></thead>
              <tbody>
                <tr>
                  <td>おはなし会（定例）</td>
                  <td>毎週土曜日 10:30〜11:00（約30分）</td>
                  <td>3歳〜小学生とその保護者</td>
                  <td>ボランティア団体「おはなしたんぽぽ」</td>
                </tr>
                <tr>
                  <td>赤ちゃん絵本タイム</td>
                  <td>毎月第2水曜日 10:30〜（約20分）</td>
                  <td>0〜2歳とその保護者</td>
                  <td>図書館司書</td>
                </tr>
                <tr>
                  <td>夏のスペシャルおはなし会</td>
                  <td>7月・8月 各週土曜日（拡大版）</td>
                  <td>全年齢</td>
                  <td>おはなしたんぽぽ・司書</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※申込不要、参加無料です。こどもの読書室にお集まりください。</p>
          </div>

          {/* 図書館まつり */}
          <h2 className="section-title">令和8年度 図書館まつり</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>今年で第15回を迎える図書館まつりを開催します。本の雑誌市・著者トークショー・工作ワークショップなど、本に親しめる催しが盛りだくさんです。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>日程</th><th>主な内容</th></tr></thead>
              <tbody>
                <tr>
                  <td>第1日：令和8年6月28日（日）</td>
                  <td>開幕式・本の雑誌市（除籍本の無料配布・古本市）・読み聞かせスペシャル</td>
                </tr>
                <tr>
                  <td>第2日：令和8年7月5日（日）</td>
                  <td>地元作家によるトークショー・しおり手作りワークショップ・クイズラリー</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>両日とも10:00〜16:00。入場無料。詳しくは図書館へお問い合わせください。</p>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            市立中央図書館<br />
            ☎ 0100-88-4500　開館時間内にお電話ください<br />
            貸出延長・予約も電話で受け付けています
          </div>
          <PageInfo department="生涯学習課" division="図書館係" tel="0100-88-8311（内線 311）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
