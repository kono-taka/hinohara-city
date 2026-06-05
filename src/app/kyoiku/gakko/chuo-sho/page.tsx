import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立中央小学校" };

export default function ChuoShoPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立中央小学校</span>
          </div>
          <h1 className="page-title">日野原市立中央小学校</h1>

          <div className="section-title">基本情報</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>学校名</th><td>日野原市立中央小学校</td></tr>
                <tr><th>所在地</th><td>〒384-0000　千葉県日野原市中央2丁目12番地</td></tr>
                <tr><th>電話番号</th><td>0100-88-2100</td></tr>
                <tr><th>FAX</th><td>0100-88-2101</td></tr>
                <tr><th>校長名</th><td>田口 幸子（たぐち さちこ）</td></tr>
                <tr><th>児童数</th><td>342人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>12学級（各学年2クラス）</td></tr>
                <tr><th>創立</th><td>昭和22年（1947年）4月1日</td></tr>
                <tr><th>校訓</th><td>「よく考え　たくましく　思いやりのある子」</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">校長メッセージ</div>
          <div className="content-box">
            <p style={{ lineHeight: 1.9, margin: 0 }}>
              中央小学校は、日野原市の中心市街地に位置する全市最大規模の小学校です。「よく考え たくましく 思いやりのある子」の校訓のもと、全教職員が一丸となって子どもたちの成長を支えています。算数・理科の研究指定校として、思考力・探究力を育む授業づくりに取り組んでいます。地域の皆様や保護者の方々と連携を深め、地域に根ざした学校づくりを推進してまいります。どうぞよろしくお願いいたします。
            </p>
            <p style={{ textAlign: "right", marginTop: 8, marginBottom: 0, color: "#555", fontSize: 13 }}>
              校長　田口 幸子
            </p>
          </div>

          <div className="section-title">学校の特色・取り組み</div>
          <div className="content-box">
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>中央市街地に位置する、日野原市内最大規模の小学校です。</li>
              <li>算数・理科の研究指定校（令和6〜8年度・千葉県教育委員会）として、思考力・問題解決力を育む授業研究を実施しています。</li>
              <li>畑活動や総合学習を通じた地域連携が盛んで、地域の方々を講師に迎えた体験学習を年間を通して行っています。</li>
              <li>放課後子供教室「なかよしクラブ」を月曜日〜金曜日の放課後に開室し、安心・安全な居場所を提供しています。</li>
              <li>GIGAスクール構想による一人1台タブレット端末を活用し、ICTを活用した学習活動を推進しています。</li>
              <li>給食は市内給食センターより提供しており、食物アレルギーへの対応も行っています。</li>
            </ul>
          </div>

          <div className="section-title">年間主要行事</div>
          <div className="content-box">
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 80 }}>時期</th><th>主な行事</th></tr>
              </thead>
              <tbody>
                <tr><td>4月</td><td>入学式・始業式・1年生を迎える会</td></tr>
                <tr><td>5月</td><td>遠足（全学年）・運動会</td></tr>
                <tr><td>6月</td><td>プール開き・歯科検診・救急救命講習（高学年）</td></tr>
                <tr><td>9月</td><td>校外学習（社会科・総合学習）・避難訓練</td></tr>
                <tr><td>10月</td><td>芸術鑑賞会・秋の読書週間</td></tr>
                <tr><td>11月</td><td>マラソン大会・音楽発表会</td></tr>
                <tr><td>12月</td><td>クリスマス音楽会・2学期終業式</td></tr>
                <tr><td>1月</td><td>書き初め展・3学期始業式</td></tr>
                <tr><td>2月</td><td>なわとび大会・6年生を送る会準備</td></tr>
                <tr><td>3月</td><td>6年生を送る会・卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">学校へのアクセス</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>最寄りバス停</th><td>路線バス「中央二丁目」停留所より徒歩約3分</td></tr>
                <tr><th>スクールバス</th><td>なし（全校徒歩通学区域）</td></tr>
                <tr><th>駐車場</th><td>来校の際は市役所第2駐車場をご利用ください（事前に学校へご連絡ください）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">お問い合わせ</div>
          <div className="content-box">
            <p style={{ margin: 0 }}>
              日野原市立中央小学校　☎ <strong>0100-88-2100</strong>（FAX: 0100-88-2101）<br />
              受付時間：平日 8:00〜17:00
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: "#666" }}>
              ※学校へのご意見・ご要望は、日野原市教育委員会学校教育係（0100-88-1188）でも受け付けております。
            </p>
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和4年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
