import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "介護保険制度の概要と申請方法" };

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
            <span>介護保険制度の概要と申請方法</span>
          </div>
          <h1 className="page-title">介護保険制度の概要と申請方法</h1>
          
          <div className="content-box">
            <h3>介護保険制度とは</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>保険者</th><td>日野原市（65歳以上が第1号被保険者、40〜64歳が第2号被保険者）</td></tr>
                <tr><th>保険料（第1号）</th><td>所得段階別・月額3,200円〜10,400円（令和8年度）</td></tr>
                <tr><th>保険料（第2号）</th><td>加入している医療保険（健保・国保）の保険料に含まれます</td></tr>
                <tr><th>サービス利用の自己負担</th><td>1〜3割（所得に応じて異なります）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>認定申請の流れ</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>① 申請</th><td>市役所1階 高齢者支援課 または地域包括支援センターで申請書を提出</td></tr>
                <tr><th>② 認定調査</th><td>調査員が自宅等に訪問し、心身の状況を調査（申請後おおむね2週間以内）</td></tr>
                <tr><th>③ 主治医意見書</th><td>市が主治医に意見書作成を依頼します（費用は市が負担）</td></tr>
                <tr><th>④ 審査・判定</th><td>介護認定審査会（医療・保健・福祉の専門家）が審査</td></tr>
                <tr><th>⑤ 認定結果通知</th><td>申請から原則30日以内に認定結果を通知します</td></tr>
                <tr><th>⑥ ケアプラン作成</th><td>要介護1〜5：居宅介護支援事業所　要支援1〜2：地域包括支援センター</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　高齢者支援課　☎ 0439-88-1121
          </div>
          <PageInfo department="介護保険課" tel="0439-88-1162（内線 162）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
