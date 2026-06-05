import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "住居確保給付金" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/seikatsu">生活保護・生活困窮</a><span>›</span>
            <span>住居確保給付金</span>
          </div>
          <h1 className="page-title">住居確保給付金</h1>
          
          <div className="content-box">
            <h3>制度の概要</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>目的</th><td>離職・廃業・収入の大幅減少などにより家賃の支払いが困難になった方が住居を失わないよう、一定期間家賃相当額を支給する制度</td></tr>
                <tr><th>支給対象</th><td>離職・廃業後2年以内の方、または収入が減少し離職等と同程度の状況にある方　※資産・収入の要件あり</td></tr>
                <tr><th>支給額</th><td>市内で賃貸住宅に居住する実際の家賃額（上限あり）</td></tr>
                <tr><th>支給上限（日野原市）</th><td>単身世帯：月額 53,700円　2人世帯：月額 64,000円　3人以上世帯：月額 69,800円</td></tr>
                <tr><th>支給期間</th><td>原則3か月（求職活動等の要件を満たす場合、最大9か月まで延長可）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>申請手続き</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>申請窓口</th><td>市役所1階 福祉課 ☎ 0100-88-1120</td></tr>
                <tr><th>必要書類</th><td>申請書・収入申告書・身分証明書・賃貸借契約書・通帳写しなど</td></tr>
                <tr><th>申請後</th><td>状況確認のうえ、要件を満たす場合は支給決定。家主へ直接振込。</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0100-88-1120
          </div>
          <PageInfo department="福祉課" tel="0100-88-1161（内線 163）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
