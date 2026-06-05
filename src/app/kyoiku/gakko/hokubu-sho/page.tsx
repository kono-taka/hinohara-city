import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立北部小学校" };

export default function HokubuShoPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立北部小学校</span>
          </div>
          <h1 className="page-title">日野原市立北部小学校</h1>

          <div className="section-title">基本情報</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>学校名</th><td>日野原市立北部小学校</td></tr>
                <tr><th>所在地</th><td>〒384-0001　千葉県日野原市北部3丁目8番地</td></tr>
                <tr><th>電話番号</th><td>0100-88-2200</td></tr>
                <tr><th>FAX</th><td>0100-88-2201</td></tr>
                <tr><th>校長名</th><td>松沢 健太郎（まつざわ けんたろう）</td></tr>
                <tr><th>児童数</th><td>218人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>8学級</td></tr>
                <tr><th>創立</th><td>昭和23年（1948年）</td></tr>
                <tr><th>校訓</th><td>「かしこく　なかよく　たくましく」</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">校長メッセージ</div>
          <div className="content-box">
            <p style={{ lineHeight: 1.9, margin: 0 }}>
              北部小学校は「かしこく なかよく たくましく」の校訓のもと、知・徳・体のバランスのとれた子どもの育成に取り組んでいます。近くを流れる小川を活用した理科自然観察など、地域の豊かな環境を活かした教育が本校の誇りです。金管バンド部をはじめ、各種活動でも子どもたちが輝いています。地域・保護者の皆様とともに歩む学校づくりを続けてまいります。
            </p>
            <p style={{ textAlign: "right", marginTop: 8, marginBottom: 0, color: "#555", fontSize: 13 }}>
              校長　松沢 健太郎
            </p>
          </div>

          <div className="section-title">学校の特色・取り組み</div>
          <div className="content-box">
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>北部地区の小学校として、地域に根ざした教育活動を展開しています。</li>
              <li>理科の自然観察に力を入れており、学校近くの小川で水生生物調査を毎年実施しています。採取した生物の種類や水質を調べ、環境への関心と科学的思考力を育てています。</li>
              <li>金管バンド部が千葉県大会に出場した経験を持つなど、音楽活動が盛んです。</li>
              <li>GIGAスクール構想による一人1台タブレット端末を活用し、協働学習・個別最適化学習を推進しています。</li>
              <li>地域の方々を招いた「ふるさと学習」を定期的に実施し、地域への愛着と誇りを育んでいます。</li>
            </ul>
          </div>

          <div className="section-title">年間主要行事</div>
          <div className="content-box">
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 80 }}>時期</th><th>主な行事</th></tr>
              </thead>
              <tbody>
                <tr><td>4月</td><td>入学式・始業式・1年生を迎える会・交通安全教室</td></tr>
                <tr><td>5月</td><td>春の遠足・運動会</td></tr>
                <tr><td>6月</td><td>プール開き・水生生物調査（全学年）</td></tr>
                <tr><td>9月</td><td>校外学習・避難訓練（不審者対応）</td></tr>
                <tr><td>10月</td><td>学習発表会・金管バンド定期演奏会</td></tr>
                <tr><td>11月</td><td>マラソン大会・秋の読書週間</td></tr>
                <tr><td>2月</td><td>なわとび大会・6年生を送る会</td></tr>
                <tr><td>3月</td><td>卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">学校へのアクセス</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>最寄りバス停</th><td>路線バス「北部三丁目」停留所より徒歩約5分</td></tr>
                <tr><th>スクールバス</th><td>なし（徒歩通学区域）</td></tr>
                <tr><th>駐車場</th><td>来校の際は事前に学校へご連絡ください</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">お問い合わせ</div>
          <div className="content-box">
            <p style={{ margin: 0 }}>
              日野原市立北部小学校　☎ <strong>0100-88-2200</strong>（FAX: 0100-88-2201）<br />
              受付時間：平日 8:00〜17:00
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: "#666" }}>
              ※学校へのご意見・ご要望は、日野原市教育委員会学校教育係（0100-88-1188）でも受け付けております。
            </p>
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
