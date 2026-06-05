import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "市立中央図書館" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>市立中央図書館</span>
          </div>
          <h1 className="page-title">日野原市立中央図書館</h1>

          <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
            <Image
              src="/images/facilities/facility-toshokan.png"
              alt="日野原市立中央図書館"
              width={740}
              height={220}
              style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
            />
          </div>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央2丁目8番地12号</td></tr>
                <tr><th>電話</th><td>0100-88-4500　／　FAX：0100-88-4501</td></tr>
                <tr><th>メール</th><td>toshokan@city.hinohara.lg.jp</td></tr>
                <tr><th>開館時間</th><td>平日：午前9時〜午後7時　　土日祝：午前9時〜午後5時</td></tr>
                <tr><th>休館日</th><td>毎週月曜日・毎月末日（整理日）・年末年始（12月28日〜1月4日）・特別整理期間（8月下旬 1週間程度）</td></tr>
                <tr><th>蔵書数</th><td>約140,000冊（図書120,000冊・雑誌200タイトル・CD・DVD等）</td></tr>
                <tr><th>駐車場</th><td>図書館専用駐車場（無料・30台）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>施設のご案内</h3>
            <table className="content-table">
              <thead><tr><th>フロア</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>1階</td><td>カウンター・一般図書・雑誌コーナー・新聞コーナー（12紙）・インターネット端末（2台・無料）・複写機</td></tr>
                <tr><td>2階</td><td>こどもの読書室（絵本・児童書）・郷土資料室（日野原市・千葉県関連）・視聴覚コーナー（CD・DVD）・学習室（20席）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>利用カードの作成</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 8px" }}>
              図書館の利用には利用カードが必要です。カウンターで無料で作成できます。
            </p>
            <table className="content-table">
              <tbody>
                <tr><th>対象</th><td>日野原市在住・在勤・在学の方、および近隣市町村（君津市・市原市・南房総市等）在住の方</td></tr>
                <tr><th>持参物</th><td>住所・氏名を確認できるもの（運転免許証・マイナンバーカード・保険証等）</td></tr>
                <tr><th>有効期限</th><td>3年間（更新無料）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>貸出条件</h3>
            <table className="content-table">
              <tbody>
                <tr><th>図書・雑誌</th><td>15冊まで・2週間</td></tr>
                <tr><th>CD・DVD</th><td>5点まで・2週間</td></tr>
                <tr><th>予約</th><td>20冊まで（電話・窓口・インターネット）</td></tr>
                <tr><th>延長</th><td>1回まで可（返却期限前に窓口・電話・インターネットで手続き）</td></tr>
                <tr><th>他館取寄せ</th><td>市内所蔵のない資料は県内図書館から取寄せ可（1〜2週間）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>読み聞かせ・イベント</h3>
            <table className="content-table">
              <tbody>
                <tr><th>おはなし会</th><td>毎週土曜日 午前10時30分〜（こどもの読書室・対象：3歳〜小学2年生）</td></tr>
                <tr><th>ブックスタート</th><td>4か月健診時に絵本セットをプレゼント（市と連携）</td></tr>
                <tr><th>子ども図書館まつり</th><td>毎年6月下旬〜7月上旬（読み聞かせ・工作・スタンプラリー等）</td></tr>
                <tr><th>読書感想文講座</th><td>毎年7月（小学生対象・無料・要申込）</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　日野原市立中央図書館　☎ 0100-88-4500<br />
            インターネット予約・利用状況確認：「日野原市図書館蔵書検索システム」（市ウェブトップページよりアクセス）
          </div>
          <PageInfo department="生涯学習課" division="図書館係" tel="0100-88-8311（内線 311）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
