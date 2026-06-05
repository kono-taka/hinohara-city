import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "日野原市歴史民俗資料館" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>日野原市歴史民俗資料館</span>
          </div>
          <h1 className="page-title">日野原市歴史民俗資料館</h1>

          <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
            <Image
              src="/images/facilities/facility-rekishi.png"
              alt="日野原市立歴史民俗資料館"
              width={740}
              height={220}
              style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
            />
          </div>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8808　千葉県日野原市下原字宮ノ前820番地</td></tr>
                <tr><th>電話</th><td>0100-88-7200　／　FAX：0100-88-7201</td></tr>
                <tr><th>開館時間</th><td>午前9時〜午後5時（入館は午後4時30分まで）</td></tr>
                <tr><th>休館日</th><td>毎週月曜日・祝日の翌平日・年末年始（12月28日〜1月4日）・展示替え期間</td></tr>
                <tr><th>入館料</th><td>一般 300円　高校・大学生 150円　中学生以下 無料　※65歳以上・障がい者手帳所持者 150円</td></tr>
                <tr><th>駐車場</th><td>資料館前無料駐車場（30台）・大型バス可</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>常設展示のご案内</h3>
            <table className="content-table">
              <thead><tr><th>展示室</th><th>テーマ・内容</th></tr></thead>
              <tbody>
                <tr><td>第1展示室</td><td><strong>縄文の世界</strong>　国指定史跡・下原遺跡からの出土品を中心に展示。縄文土器・石器・装身具など約600点。復元住居の1/4模型。</td></tr>
                <tr><td>第2展示室</td><td><strong>日野原の歴史</strong>　古代から近代まで、旧日野町・原野村・白峰村の歩みを写真・資料で紹介。明治期の農業・林業の道具類。</td></tr>
                <tr><td>第3展示室</td><td><strong>くらしの民具</strong>　農具・漁具・生活用品など約1,200点の民具を収蔵・展示。白峰地区の養蚕・機織り道具の実物展示。</td></tr>
                <tr><td>屋外展示</td><td>旧農家の石組み蔵（江戸後期・市指定文化財）・水車（復元）・農業用具の野外展示。</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>令和8年度 企画展</h3>
            <table className="content-table">
              <tbody>
                <tr><th>前期企画展</th><td>「白峰の棚田と人々のくらし」（5月24日〜8月31日）</td></tr>
                <tr><th>後期企画展</th><td>「ひのはら昭和の記憶 ―写真でたどる戦後の70年―」（9月20日〜12月7日）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>体験学習プログラム</h3>
            <ul style={{ fontSize: 13, lineHeight: 1.9, margin: 0, paddingLeft: 20 }}>
              <li><strong>縄文土器づくり体験</strong>：毎月第2・第4土曜日 午後1時〜（要申込・材料費300円）</li>
              <li><strong>昔の道具体験</strong>：臼・杵・唐箕など昔の農具を実際に使う体験。団体要予約。</li>
              <li><strong>学習出前講座</strong>：市内小中学校への出前授業（縄文時代・地域の歴史・民具）を実施中。</li>
            </ul>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　日野原市歴史民俗資料館　☎ 0100-88-7200<br />
            団体見学・体験学習の予約は電話またはメール（rekishi@city.hinohara.lg.jp）で受け付けています。
          </div>
          <PageInfo department="生涯学習課" division="文化財・歴史係" tel="0100-88-8313（内線 313）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
