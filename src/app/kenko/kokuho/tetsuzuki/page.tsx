import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "国民健康保険の加入・脱退の手続き" };

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
            <span>国民健康保険の加入・脱退の手続き</span>
          </div>
          <h1 className="page-title">国民健康保険の加入・脱退の手続き</h1>
          
          <div className="content-box">
            <h3>加入の手続き</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>加入が必要な場合</th><td>職場の健康保険を脱退したとき・他の市区町村から転入したとき・子が生まれたとき</td></tr>
                <tr><th>届出期限</th><td>事由が発生した日から14日以内</td></tr>
                <tr><th>必要書類（転退職）</th><td>健康保険の資格喪失証明書・本人確認書類・マイナンバー</td></tr>
                <tr><th>必要書類（転入）</th><td>転出証明書・本人確認書類・マイナンバー</td></tr>
                <tr><th>保険証の交付</th><td>届出当日に交付（マイナンバーカードを保険証として利用する場合は登録が必要）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>脱退の手続き</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>脱退が必要な場合</th><td>就職して職場の健康保険に加入したとき・他の市区町村へ転出するとき・75歳になったとき</td></tr>
                <tr><th>届出期限</th><td>事由が発生した日から14日以内</td></tr>
                <tr><th>必要書類（就職）</th><td>新しい健康保険証・国保の保険証・マイナンバー</td></tr>
                <tr><th>必要書類（転出）</th><td>転出届と同時に手続き。国保の保険証を返却してください</td></tr>
                <tr><th>注意事項</th><td>脱退手続きをしないと国保税の請求が続きます。必ず届出をしてください</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　市民課（国保係）　☎ 0439-88-1113
          </div>
          <PageInfo department="健康推進課" division="国保係" tel="0439-88-1165（内線 165）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
