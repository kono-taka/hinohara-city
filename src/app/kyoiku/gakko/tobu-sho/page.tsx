import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立東部小学校" };

export default function TobuShoPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立東部小学校</span>
          </div>
          <h1 className="page-title">日野原市立東部小学校</h1>

          <div className="section-title">基本情報</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>学校名</th><td>日野原市立東部小学校</td></tr>
                <tr><th>所在地</th><td>〒384-0003　千葉県日野原市東部2丁目4番地</td></tr>
                <tr><th>電話番号</th><td>0439-88-2400</td></tr>
                <tr><th>FAX</th><td>0439-88-2401</td></tr>
                <tr><th>校長名</th><td>関口 誠一（せきぐち せいいち）</td></tr>
                <tr><th>児童数</th><td>143人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>6学級</td></tr>
                <tr><th>創立</th><td>昭和29年（1954年）</td></tr>
                <tr><th>校訓</th><td>「自ら学び　共に伸びる子」</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">校長メッセージ</div>
          <div className="content-box">
            <p style={{ lineHeight: 1.9, margin: 0 }}>
              東部小学校は「自ら学び 共に伸びる子」を校訓に、子どもたち一人ひとりの可能性を最大限に引き出す教育を実践しています。少人数の特色を活かした異学年交流学習では、上級生が下級生をリードする中でリーダーシップや思いやりの心が育まれています。ICT活用推進校として、プログラミング教育や探究型学習の充実にも力を入れています。木工・陶芸などの体験的な図工授業も子どもたちに大変人気があります。
            </p>
            <p style={{ textAlign: "right", marginTop: 8, marginBottom: 0, color: "#555", fontSize: 13 }}>
              校長　関口 誠一
            </p>
          </div>

          <div className="section-title">学校の特色・取り組み</div>
          <div className="content-box">
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>小規模校の特色を活かした異学年交流学習を積極的に取り入れ、縦割り班活動・異学年合同授業を実施しています。</li>
              <li>図工授業では木工・陶芸を取り入れ、創造力・造形力を育む体験的な学びを提供しています。地域の職人を招いた特別授業も好評です。</li>
              <li>ICT活用推進校として、一人1台タブレット端末を活用したプログラミング教育を低学年から段階的に実施しています。</li>
              <li>千葉県教育委員会の「探究型学習推進事業」の協力校として、子ども自身が課題を設定し解決する学習スタイルを取り入れています。</li>
              <li>放課後の補充学習「ステップアップ教室」を週2回実施し、個別の学習課題に対応しています。</li>
            </ul>
          </div>

          <div className="section-title">年間主要行事</div>
          <div className="content-box">
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 80 }}>時期</th><th>主な行事</th></tr>
              </thead>
              <tbody>
                <tr><td>4月</td><td>入学式・縦割り班顔合わせ・交通安全教室</td></tr>
                <tr><td>5月</td><td>春の遠足（縦割り班）・運動会</td></tr>
                <tr><td>6月</td><td>プール開き・陶芸体験（3・4年生）</td></tr>
                <tr><td>9月</td><td>校外学習・木工体験（5・6年生）</td></tr>
                <tr><td>10月</td><td>学習発表会・ICT成果発表会</td></tr>
                <tr><td>11月</td><td>マラソン大会・プログラミング授業公開</td></tr>
                <tr><td>2月</td><td>なわとび大会・作品展（図工・陶芸）</td></tr>
                <tr><td>3月</td><td>卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">学校へのアクセス</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>最寄りバス停</th><td>路線バス「東部二丁目」停留所より徒歩約6分</td></tr>
                <tr><th>スクールバス</th><td>なし（徒歩通学区域）</td></tr>
                <tr><th>駐車場</th><td>来校の際は事前に学校へご連絡ください</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">お問い合わせ</div>
          <div className="content-box">
            <p style={{ margin: 0 }}>
              日野原市立東部小学校　☎ <strong>0439-88-2400</strong>（FAX: 0439-88-2401）<br />
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
