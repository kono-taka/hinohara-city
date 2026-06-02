import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市老人福祉センター（長寿の家）" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>老人福祉センター（長寿の家）</span>
          </div>
          <h1 className="page-title">日野原市老人福祉センター「長寿の家」</h1>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8805　千葉県日野原市南部2丁目3番地15号</td></tr>
                <tr><th>電話</th><td>0439-88-6100　／　FAX：0439-88-6101</td></tr>
                <tr><th>開館時間</th><td>午前9時〜午後5時</td></tr>
                <tr><th>休館日</th><td>日曜日・年末年始（12月29日〜1月3日）</td></tr>
                <tr><th>利用対象</th><td>市内在住の60歳以上の方（無料）</td></tr>
                <tr><th>駐車場</th><td>無料・50台</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>施設のご案内</h3>
            <table className="content-table">
              <thead><tr><th>施設</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>浴室</td><td>大浴場（男女別）・シャワー室。介護浴対応の設備あり。無料。石けん・シャンプー等は持参ください。</td></tr>
                <tr><td>大集会室</td><td>100名収容。各種サークル活動・講座・行事に利用。</td></tr>
                <tr><td>小集会室（2室）</td><td>各30名収容。囲碁・将棋・麻雀等のサークルが常時活動中。</td></tr>
                <tr><td>軽体操室</td><td>ヨガマット・軽体操器具完備。健康体操教室を毎週開催。</td></tr>
                <tr><td>休憩室</td><td>テレビ・新聞・雑誌あり。お茶の無料サービス（午前10時・午後2時）。</td></tr>
                <tr><td>相談室</td><td>健康・介護・生活の相談を随時受け付けています。</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>定期開催の教室・サークル</h3>
            <table className="content-table">
              <tbody>
                <tr><th>健康体操教室</th><td>月・水・金 午前10時〜11時（講師指導・無料）</td></tr>
                <tr><th>太極拳</th><td>火・木 午後1時〜2時30分（無料）</td></tr>
                <tr><th>書道教室</th><td>毎週月曜 午後1時〜3時（材料費実費）</td></tr>
                <tr><th>絵手紙教室</th><td>毎週水曜 午後1時〜3時（材料費実費）</td></tr>
                <tr><th>囲碁・将棋サークル</th><td>毎日開放（自由参加）</td></tr>
                <tr><th>カラオケ</th><td>第2・第4火曜 午後1時〜4時（無料）</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　日野原市老人福祉センター「長寿の家」　☎ 0439-88-6100<br />
            高齢者支援課（☎ 0439-88-1121）でも施設についての相談を受け付けています。
          </div>
          <PageInfo department="介護保険課" division="高齢支援係" tel="0439-88-1162（内線 162）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
