import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市立第一中学校" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化</a><span>›</span>
            <a href="/kyoiku/gakko">小学校・中学校</a><span>›</span>
            <span>日野原市立第一中学校</span>
          </div>
          <h1 className="page-title">日野原市立第一中学校</h1>

          <div className="content-box">
            <h3>学校基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>学校名</th><td>日野原市立第一中学校</td></tr>
                <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央4丁目2番地</td></tr>
                <tr><th>電話</th><td>0100-88-3100　／　FAX：0100-88-3101</td></tr>
                <tr><th>校長</th><td>河野 裕史（かわの ひろし）</td></tr>
                <tr><th>生徒数</th><td>428人（令和8年5月1日現在）</td></tr>
                <tr><th>学級数</th><td>12学級（1年4学級・2年4学級・3年4学級）</td></tr>
                <tr><th>教職員数</th><td>34人</td></tr>
                <tr><th>創立</th><td>昭和22年（1947年）4月1日</td></tr>
                <tr><th>校訓</th><td>自律・協働・創造</td></tr>
                <tr><th>校章</th><td>日野原市の山並みと中学校の「中」の字をあしらったデザイン（昭和30年制定）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>校長あいさつ</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市立第一中学校は、市内最大規模の中学校として、地域の皆様とともに歩んでまいりました。
              本校の校訓「自律・協働・創造」のもと、生徒一人ひとりが自らの可能性を信じ、互いを尊重しながら、
              未来を切り開く力を育んでいます。<br /><br />
              令和7年度より部活動の地域移行を段階的に進めており、地域の皆様のご理解とご協力をいただきながら、
              新たな学校と地域の連携のかたちを模索しています。引き続きよろしくお願いいたします。
            </p>
            <div style={{ textAlign: "right", fontSize: 13, fontWeight: "bold", marginTop: 8, color: "var(--city-blue)" }}>
              校長　河野 裕史
            </div>
          </div>

          <div className="content-box">
            <h3>学校の特色・取り組み</h3>
            <ul style={{ fontSize: 13, lineHeight: 2, margin: 0, paddingLeft: 20 }}>
              <li><strong>部活動の実績</strong>：野球部・バスケットボール部・吹奏楽部が千葉県大会出場。吹奏楽部は令和5年度千葉県吹奏楽コンクール銀賞。</li>
              <li><strong>英語教育推進校</strong>：ALT（外国語指導助手）週3回授業・英語スピーチコンテスト毎年参加。</li>
              <li><strong>部活動地域移行</strong>：令和7年度より段階実施。地域のスポーツクラブ・文化団体と連携し、放課後活動の充実を図っています。</li>
              <li><strong>キャリア教育</strong>：2年生全員の職場体験学習（年2日・市内約40事業所が協力）。</li>
              <li><strong>ICT教育</strong>：一人1台タブレット端末を活用した授業展開・デジタルポートフォリオ導入。</li>
            </ul>
          </div>

          <div className="content-box">
            <h3>年間主要行事</h3>
            <table className="content-table">
              <thead><tr><th>月</th><th>行事</th></tr></thead>
              <tbody>
                <tr><td>4月</td><td>入学式・始業式・部活動見学期間・学力テスト</td></tr>
                <tr><td>5月</td><td>体育祭・修学旅行（3年生・京都・奈良方面）</td></tr>
                <tr><td>6月</td><td>職場体験学習（2年生）・球技大会</td></tr>
                <tr><td>7月</td><td>期末テスト・終業式・夏季補習</td></tr>
                <tr><td>9月</td><td>始業式・合唱コンクール・郡市英語スピーチコンテスト</td></tr>
                <tr><td>10月</td><td>文化祭「第一祭」・中間テスト</td></tr>
                <tr><td>11月</td><td>持久走大会・進路説明会（3年生）</td></tr>
                <tr><td>12月</td><td>期末テスト・終業式</td></tr>
                <tr><td>1月</td><td>始業式・書き初め大会</td></tr>
                <tr><td>2月</td><td>学年末テスト・立志式（2年生）</td></tr>
                <tr><td>3月</td><td>卒業式・修了式</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>アクセス・通学区域</h3>
            <table className="content-table">
              <tbody>
                <tr><th>通学区域</th><td>中央地区・東部地区の一部（詳細は学校教育課へお問い合わせください）</td></tr>
                <tr><th>最寄りバス停</th><td>市営ひのはらバス「中央小学校前」停留所より徒歩5分（最寄り鉄道駅：JR君津駅）</td></tr>
                <tr><th>スクールバス</th><td>なし（徒歩・自転車通学）</td></tr>
                <tr><th>駐車場</th><td>来校者用駐車場あり（8台）。行事の際は混雑します。できる限り公共交通機関をご利用ください。</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong><br />
            日野原市立第一中学校　☎ 0100-88-3100<br />
            受付時間：平日 午前8時〜午後5時<br />
            学校に関する全般的なお問い合わせは、学校教育課（☎ 0100-88-1140）へもどうぞ。
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
