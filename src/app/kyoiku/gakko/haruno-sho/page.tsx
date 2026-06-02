import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立原野小学校" };

export default function HarunoShoPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立原野小学校</span>
          </div>
          <h1 className="page-title">日野原市立原野小学校</h1>

          <div className="section-title">基本情報</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>学校名</th><td>日野原市立原野小学校</td></tr>
                <tr><th>所在地</th><td>〒384-0101　千葉県日野原市原野字宮ノ下45番地</td></tr>
                <tr><th>電話番号</th><td>0439-55-1100</td></tr>
                <tr><th>FAX</th><td>0439-55-1101</td></tr>
                <tr><th>校長名</th><td>北沢 茂雄（きたざわ しげお）</td></tr>
                <tr><th>児童数</th><td>84人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>6学級（複式学級1学級含む）</td></tr>
                <tr><th>創立</th><td>昭和22年（1947年）</td></tr>
                <tr><th>校訓</th><td>「ふるさとを愛し　心豊かに　たくましく生きる」</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">校長メッセージ</div>
          <div className="content-box">
            <p style={{ lineHeight: 1.9, margin: 0 }}>
              原野小学校は、豊かな自然に囲まれた山間の地に昭和22年に創立した、原野地区の小学校です。「ふるさとを愛し 心豊かに たくましく生きる」の校訓のもと、この地の自然・文化・人との出会いを大切にした教育を行っています。びわ狩り体験・落花生掘り体験・森林学習・農業体験などを通じて、ふるさとへの誇りと愛着を育んでいます。少人数ならではの丁寧な指導で、一人ひとりの個性と可能性を伸ばしてまいります。
            </p>
            <p style={{ textAlign: "right", marginTop: 8, marginBottom: 0, color: "#555", fontSize: 13 }}>
              校長　北沢 茂雄
            </p>
          </div>

          <div className="section-title">学校の特色・取り組み</div>
          <div className="content-box">
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>原野地区の山間に位置する少人数校です。複式学習・少人数の利点を活かした個別指導・きめ細かな支援を行っています。</li>
              <li>地域農業の体験としてびわ狩り（6月）・落花生掘り（9月）を毎年実施。地元農家の方を講師に招き、全学年が参加しています。</li>
              <li>原野の森を使った森林学習（森のようちえん連携含む）を通じて、自然への感謝と環境意識を育てています。</li>
              <li>地域農家の方々の協力による農業体験（田植え・稲刈り・野菜づくり）を年間を通じて実施しています。</li>
              <li>スクールバスを原野地区内3路線で運行しており、安全な通学環境を確保しています。</li>
            </ul>
          </div>

          <div className="section-title">年間主要行事</div>
          <div className="content-box">
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 80 }}>時期</th><th>主な行事</th></tr>
              </thead>
              <tbody>
                <tr><td>4月</td><td>入学式・始業式・田植え体験（5・6年生）</td></tr>
                <tr><td>5月</td><td>春の遠足・野菜の種まき・苗植え</td></tr>
                <tr><td>6月</td><td>森林学習（全学年）・プール開き</td></tr>
                <tr><td>9月</td><td>稲刈り体験・校外学習・運動会</td></tr>
                <tr><td>10月</td><td>落花生加工体験（3年生以上）・収穫祭</td></tr>
                <tr><td>11月</td><td>学習発表会・マラソン大会</td></tr>
                <tr><td>2月</td><td>なわとび大会・スキー学習（全学年）</td></tr>
                <tr><td>3月</td><td>卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">スクールバスについて</div>
          <div className="content-box">
            <p style={{ marginTop: 0 }}>原野地区内の3路線でスクールバスを運行しています。</p>
            <table className="content-table">
              <thead>
                <tr><th>路線名</th><th>主な停留所</th><th>備考</th></tr>
              </thead>
              <tbody>
                <tr><td>宮ノ下線</td><td>宮ノ下・原野公民館前・学校</td><td>朝・夕各1便</td></tr>
                <tr><td>上野線</td><td>上野・原野神社前・学校</td><td>朝・夕各1便</td></tr>
                <tr><td>中沢線</td><td>中沢・原野郵便局前・学校</td><td>朝・夕各1便</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginBottom: 0 }}>
              ※時刻表・停留所の詳細は学校または日野原市教育委員会へお問い合わせください。
            </p>
          </div>

          <div className="section-title">お問い合わせ</div>
          <div className="content-box">
            <p style={{ margin: 0 }}>
              日野原市立原野小学校　☎ <strong>0439-55-1100</strong>（FAX: 0439-55-1101）<br />
              受付時間：平日 8:00〜17:00
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: "#666" }}>
              ※学校へのご意見・ご要望は、日野原市教育委員会学校教育係（0439-88-1188）でも受け付けております。
            </p>
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0439-88-8301（内線 301）" updated="令和4年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
