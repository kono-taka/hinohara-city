import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "子育て支援センター（ひのはらキッズひろば）" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/kosodate">子育て・保育</a><span>›</span>
            <span>子育て支援センター（ひのはらキッズひろば）</span>
          </div>
          <h1 className="page-title">子育て支援センター（ひのはらキッズひろば）</h1>
          
          <div className="content-box">
            <h3>施設概要</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>名称</th><td>ひのはらキッズひろば（日野原市子育て支援センター）</td></tr>
                <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央3丁目2番地（市民文化センター1階）</td></tr>
                <tr><th>電話</th><td>0100-88-5100</td></tr>
                <tr><th>開所時間</th><td>月〜土曜日 午前9時〜午後5時</td></tr>
                <tr><th>休所日</th><td>日曜・祝日・年末年始（12月29日〜1月3日）</td></tr>
                <tr><th>対象</th><td>市内在住の就学前の子どもとその保護者（無料・予約不要）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>提供サービス</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>自由遊びスペース</th><td>おもちゃ・絵本・体を動かせるスペース。年齢別ゾーン設置。</td></tr>
                <tr><th>育児相談</th><td>保育士・保健師が育児の悩みに個別対応。事前予約不要。</td></tr>
                <tr><th>各種イベント</th><td>親子体操・絵本読み聞かせ・季節の工作など毎週プログラムあり。</td></tr>
                <tr><th>交流サロン</th><td>子育て中の保護者同士の交流の場。仲間づくりの機会を提供します。</td></tr>
                <tr><th>一時預かり</th><td>就労・通院・リフレッシュ目的で1日2,000円・要予約（定員3名）。</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　子育て支援課　☎ 0100-88-1123
          </div>
          <PageInfo department="子育て支援課" tel="0100-88-1172（内線 172）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
