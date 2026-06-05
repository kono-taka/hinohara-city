import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "後期高齢者医療制度のご案内" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/kokuho">国民健康保険</a><span>›</span>
            <span>後期高齢者医療制度のご案内</span>
          </div>
          <h1 className="page-title">後期高齢者医療制度のご案内</h1>
          
          <div className="content-box">
            <h3>制度の概要</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>運営</th><td>千葉県後期高齢者医療広域連合（千葉県内の全市区町村で構成）</td></tr>
                <tr><th>対象</th><td>75歳以上の方　または　65〜74歳で一定の障害がある方（申請により加入）</td></tr>
                <tr><th>保険料（令和8年度）</th><td>均等割額 49,800円＋所得割（総所得金額等−43万円）× 9.34%　※上限 85万円</td></tr>
                <tr><th>自己負担割合</th><td>1割（現役並み所得者は3割、一定以上所得のある方は2割）</td></tr>
                <tr><th>保険証</th><td>毎年8月1日に更新（前年度の保険証は7月31日まで有効）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>各種手続き</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>加入時の手続き</th><td>75歳の誕生月に自動的に加入。手続き不要（保険証が届きます）</td></tr>
                <tr><th>住所変更</th><td>市民課へ住所変更の届出と同時に手続き</td></tr>
                <tr><th>保険証の紛失・破損</th><td>市民課へ再交付申請（当日交付可）</td></tr>
                <tr><th>高額療養費の申請</th><td>支給対象の場合は広域連合から申請書が届きます</td></tr>
                <tr><th>お問い合わせ窓口</th><td>市民課（日野原市役所）または千葉県後期高齢者医療広域連合（☎ 043-224-5500）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　市民課（国保係）　☎ 0100-88-1113
          </div>
          <PageInfo department="健康推進課" division="後期高齢者医療係" tel="0100-88-1165（内線 166）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
