import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "地域包括支援センターのご案内" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/kaigo">介護保険</a><span>›</span>
            <span>地域包括支援センターのご案内</span>
          </div>
          <h1 className="page-title">地域包括支援センターのご案内</h1>
          
          <div className="content-box">
            <h3>センター一覧</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>中央センター（担当：中央・東部地区）</th><td>〒299-1401　市中央1丁目5番地（市福祉センター内）☎ 0100-88-6500</td></tr>
                <tr><th>原野センター（担当：原野地区）</th><td>〒298-8812　原野字中沢130番地（原野公民館内）☎ 0100-55-6500</td></tr>
                <tr><th>白嶺センター（担当：白嶺地区）</th><td>〒298-8821　白嶺字里150番地（白嶺地区センター内）☎ 0100-58-6500</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>主なサービス</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>総合相談</th><td>介護・医療・福祉・生活全般の相談を受け付け、適切なサービスにつなぎます</td></tr>
                <tr><th>要支援認定者のケアプラン作成</th><td>要支援1・2の方の介護予防サービス計画を作成します</td></tr>
                <tr><th>権利擁護</th><td>成年後見制度の利用支援・虐待防止・消費者被害への対応</td></tr>
                <tr><th>介護予防教室</th><td>転倒予防・口腔ケア・認知症予防などの教室を各地区で開催</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　高齢者支援課　☎ 0100-88-1121
          </div>
          <PageInfo department="介護保険課" division="地域支援係" tel="0100-88-1162（内線 164）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
