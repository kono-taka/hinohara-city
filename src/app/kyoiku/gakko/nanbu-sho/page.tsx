import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立南部小学校" };

export default function NanbuShoPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立南部小学校</span>
          </div>
          <h1 className="page-title">日野原市立南部小学校</h1>

          <div className="section-title">基本情報</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>学校名</th><td>日野原市立南部小学校</td></tr>
                <tr><th>所在地</th><td>〒384-0002　千葉県日野原市南部1丁目15番地</td></tr>
                <tr><th>電話番号</th><td>0100-88-2300</td></tr>
                <tr><th>FAX</th><td>0100-88-2301</td></tr>
                <tr><th>校長名</th><td>宮崎 啓子（みやざき けいこ）</td></tr>
                <tr><th>児童数</th><td>196人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>8学級</td></tr>
                <tr><th>創立</th><td>昭和25年（1950年）</td></tr>
                <tr><th>校訓</th><td>「明るく　正しく　よく学ぶ」</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">校長メッセージ</div>
          <div className="content-box">
            <p style={{ lineHeight: 1.9, margin: 0 }}>
              南部小学校は「明るく 正しく よく学ぶ」を校訓に掲げ、すべての子どもが生き生きと学べる学校づくりを目指しています。地域の農家の方々と連携した農業体験学習は本校の大きな特色であり、実際に米や野菜を育てる体験を通じて、食への感謝の気持ちや勤労の尊さを学んでいます。令和8年度は給食棟の改修工事も予定しており、さらに充実した環境で子どもたちの成長を支えてまいります。
            </p>
            <p style={{ textAlign: "right", marginTop: 8, marginBottom: 0, color: "#555", fontSize: 13 }}>
              校長　宮崎 啓子
            </p>
          </div>

          <div className="section-title">学校の特色・取り組み</div>
          <div className="content-box">
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>農業体験学習に力を入れており、地元農家の方々の協力のもと、米づくり・野菜栽培を実施しています。田植えから稲刈りまでの一連の体験が子どもたちに好評です。</li>
              <li>収穫した野菜を使った調理体験や、生産者との交流を通じて、食育教育を推進しています。</li>
              <li>毎朝の読書タイムを設け、読書習慣の定着と語彙力・読解力の向上を図っています。</li>
              <li>GIGAスクール構想によるICT活用教育と、農業体験などのアナログ体験を組み合わせた総合的な学習を展開しています。</li>
              <li>【お知らせ】給食棟改修工事を令和8年夏休み（8月中旬〜9月上旬）に実施予定です。工事期間中の給食については別途ご案内します。</li>
            </ul>
          </div>

          <div className="section-title">年間主要行事</div>
          <div className="content-box">
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 80 }}>時期</th><th>主な行事</th></tr>
              </thead>
              <tbody>
                <tr><td>4月</td><td>入学式・始業式・田植え体験（5年生）</td></tr>
                <tr><td>5月</td><td>春の遠足・野菜の苗植え（全学年）</td></tr>
                <tr><td>6月</td><td>プール開き・歯と口の健康週間</td></tr>
                <tr><td>9月</td><td>稲刈り体験・校外学習・運動会</td></tr>
                <tr><td>10月</td><td>収穫祭・芸術鑑賞会</td></tr>
                <tr><td>11月</td><td>マラソン大会・学習発表会</td></tr>
                <tr><td>1月</td><td>書き初め大会・3学期始業式</td></tr>
                <tr><td>3月</td><td>卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">学校へのアクセス</div>
          <div className="content-box">
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 140 }}>最寄りバス停</th><td>路線バス「南部一丁目」停留所より徒歩約4分</td></tr>
                <tr><th>スクールバス</th><td>なし（徒歩通学区域）</td></tr>
                <tr><th>駐車場</th><td>来校の際は事前に学校へご連絡ください</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title">お問い合わせ</div>
          <div className="content-box">
            <p style={{ margin: 0 }}>
              日野原市立南部小学校　☎ <strong>0100-88-2300</strong>（FAX: 0100-88-2301）<br />
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
