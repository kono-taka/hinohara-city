import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "日野原市民文化センター" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>日野原市民文化センター</span>
          </div>
          <h1 className="page-title">日野原市民文化センター</h1>

          <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
            <Image
              src="/images/facilities/facility-bunka.png"
              alt="日野原市民文化センター"
              width={740}
              height={220}
              style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
            />
          </div>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央3丁目5番地</td></tr>
                <tr><th>電話</th><td>0100-88-3800　／　FAX：0100-88-3801</td></tr>
                <tr><th>開館時間</th><td>午前9時〜午後9時30分</td></tr>
                <tr><th>休館日</th><td>毎週月曜日・祝日の翌日（月曜が祝日の場合は翌平日）・年末年始（12月28日〜1月3日）</td></tr>
                <tr><th>駐車場</th><td>センター専用駐車場（無料・80台）　大型バス駐車可（要事前連絡）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>施設のご案内</h3>
            <table className="content-table">
              <thead><tr><th>施設名</th><th>収容人数</th><th>主な用途</th><th>使用料（1時間）</th></tr></thead>
              <tbody>
                <tr><td>大ホール</td><td>800席（固定席）</td><td>コンサート・講演会・式典</td><td>10,000円〜（目的・時間帯により変動）</td></tr>
                <tr><td>中ホール</td><td>250席（可動席）</td><td>演劇・発表会・研修</td><td>4,500円〜</td></tr>
                <tr><td>第1会議室</td><td>50名</td><td>会議・研修・セミナー</td><td>1,200円</td></tr>
                <tr><td>第2会議室</td><td>30名</td><td>会議・打合せ</td><td>800円</td></tr>
                <tr><td>第3会議室</td><td>20名</td><td>会議・打合せ</td><td>600円</td></tr>
                <tr><td>展示室</td><td>—</td><td>美術展・写真展・展示会</td><td>2,000円</td></tr>
                <tr><td>練習室A</td><td>15名</td><td>音楽練習（防音仕様）</td><td>900円</td></tr>
                <tr><td>練習室B・C</td><td>各10名</td><td>音楽・ダンス練習</td><td>各700円</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※市民・市内団体は一般料金の半額。学生団体は3割引。詳細は窓口またはお電話でお問い合わせください。</p>
          </div>

          <div className="content-box">
            <h3>ご予約方法</h3>
            <ul style={{ fontSize: 13, lineHeight: 1.9, margin: 0, paddingLeft: 20 }}>
              <li>使用希望日の6か月前から受付開始（窓口・電話・インターネット）</li>
              <li>インターネット予約：「ひのはら施設予約システム」（要利用者登録）</li>
              <li>窓口受付：開館時間中いつでも可</li>
              <li>仮予約後14日以内に本申込・使用料の納付が必要</li>
            </ul>
          </div>

          <div className="content-box">
            <h3>令和8年度 主催・共催公演予定</h3>
            <table className="content-table">
              <tbody>
                <tr><th>6月14日（土）</th><td>初夏の声楽コンサート（生涯学習課主催）</td></tr>
                <tr><th>7月19日（土）</th><td>ひのはら夏の映画祭2026（市民実行委員会主催）</td></tr>
                <tr><th>9月27日（土）</th><td>房総フィルハーモニー管弦楽団 日野原公演</td></tr>
                <tr><th>11月8日（土）</th><td>市民文化祭 総合公演（市民文化協会主催）</td></tr>
                <tr><th>12月20日（土）</th><td>第24回 市民クリスマスコンサート</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ・ご予約</strong><br />
            日野原市民文化センター　☎ 0100-88-3800<br />
            受付時間：開館時間中（午前9時〜午後9時30分）
          </div>
          <PageInfo department="生涯学習課" division="文化施設係" tel="0100-88-8312（内線 312）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
