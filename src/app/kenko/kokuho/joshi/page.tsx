import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "医療費の助成（子ども・障がい者）" };

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
            <span>医療費の助成（子ども・障がい者）</span>
          </div>
          <h1 className="page-title">医療費の助成（子ども・障がい者）</h1>
          
          <div className="content-box">
            <h3>子ども医療費助成制度</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>市内在住の0歳〜高校3年生（18歳に達した日以後最初の3月31日まで）</td></tr>
                <tr><th>助成内容</th><td>健康保険適用の医療費の自己負担分を全額助成</td></tr>
                <tr><th>対象医療機関</th><td>千葉県内の医療機関（県外は申請により還付）</td></tr>
                <tr><th>手続き</th><td>出生後・転入時に市民課または子育て支援課で「医療費助成受給券」を申請</td></tr>
                <tr><th>所得制限</th><td>なし</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>重度心身障害者（児）医療費助成制度</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>身体障害者手帳1・2級または療育手帳A判定を持つ方（所得制限あり）</td></tr>
                <tr><th>助成内容</th><td>健康保険適用の医療費の自己負担分を助成（入院・通院・調剤）</td></tr>
                <tr><th>手続き</th><td>市役所1階 福祉課（医療費助成受給者証の申請が必要）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>ひとり親家庭医療費助成</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>児童扶養手当受給者などひとり親家庭の親と18歳未満の子（所得制限あり）</td></tr>
                <tr><th>助成内容</th><td>健康保険適用の医療費の一部または全部を助成</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　市民課（国保係）　☎ 0100-88-1113
          </div>
          <PageInfo department="健康推進課" division="国保係" tel="0100-88-1165（内線 165）" updated="令和6年10月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
