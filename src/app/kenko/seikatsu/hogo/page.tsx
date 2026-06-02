import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "生活保護の申請" };

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
            <span>生活保護の申請</span>
          </div>
          <h1 className="page-title">生活保護の申請</h1>
          
          <div className="content-box">
            <h3>生活保護制度とは</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>目的</th><td>生活に困窮するすべての方に、最低限度の生活を保障しつつ、自立を助長する制度</td></tr>
                <tr><th>保護の種類</th><td>生活扶助・住宅扶助・医療扶助・教育扶助・介護扶助など8種類</td></tr>
                <tr><th>申請先</th><td>日野原市役所1階 福祉課 生活保護係（☎ 0439-88-1120）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>申請の流れ</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>① 相談</th><td>まずは福祉課へ相談。申請の意思を伝えてください（申請は権利です）</td></tr>
                <tr><th>② 申請書の提出</th><td>申請書・資産申告書・収入申告書など必要書類を提出</td></tr>
                <tr><th>③ 調査</th><td>家庭訪問・資産・扶養義務者の確認（約14日間）</td></tr>
                <tr><th>④ 決定通知</th><td>申請から14日以内に決定通知（最大30日）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            生活保護は「最後のセーフティネット」です。生活に困ったらためらわずにご相談ください。相談に来ることで申請したことにはなりません。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0439-88-1120
          </div>
          <PageInfo department="福祉課" division="生活保護係" tel="0439-88-1161（内線 163）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
