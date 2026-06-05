import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "障害者手帳の申請" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/shogai">障がい福祉</a><span>›</span>
            <span>障害者手帳の申請</span>
          </div>
          <h1 className="page-title">障害者手帳の申請</h1>
          
          <div className="content-box">
            <h3>手帳の種類と申請先</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>身体障害者手帳</th><td>視覚・聴覚・肢体不自由・内部障害など。申請：市役所1階 福祉課</td></tr>
                <tr><th>療育手帳（知的障害）</th><td>知的障害のある方。申請：市役所1階 福祉課（千葉県による判定）</td></tr>
                <tr><th>精神障害者保健福祉手帳</th><td>精神疾患（うつ病・統合失調症等）のある方。申請：市役所1階 福祉課</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>共通の申請書類</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>申請書</th><td>窓口でお渡しします（各手帳ごとに様式が異なります）</td></tr>
                <tr><th>写真</th><td>縦4cm×横3cmの顔写真（6か月以内撮影・正面・背景白）</td></tr>
                <tr><th>個人番号確認書類</th><td>マイナンバーカードまたは通知カード＋本人確認書類</td></tr>
                <tr><th>診断書・意見書</th><td>指定された様式の診断書（主治医に作成依頼）</td></tr>
                <tr><th>審査期間</th><td>申請から交付まで約2か月（身体・精神）または約3か月（療育）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            手帳の等級により受けられる支援が異なります。詳細はお気軽に窓口へお問い合わせください。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0100-88-1120
          </div>
          <PageInfo department="福祉課" division="障がい福祉係" tel="0100-88-1161（内線 161）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
