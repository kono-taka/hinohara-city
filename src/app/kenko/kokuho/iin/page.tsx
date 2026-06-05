import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市内医療機関一覧" };

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
            <span>市内医療機関一覧</span>
          </div>
          <h1 className="page-title">市内医療機関一覧</h1>
          
          <div className="content-box">
            <h3>病院・診療所</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>日野原市民病院（180床）</th><td>中央2-3-1　☎ 0100-88-2000　内科・外科・整形外科・小児科等／二次救急対応／高度医療は君津・木更津方面へ紹介</td></tr>
                <tr><th>南部クリニック</th><td>南部1-8-5　☎ 0100-88-3300　内科・循環器科</td></tr>
                <tr><th>原野診療所</th><td>原野字中沢80　☎ 0100-55-2200　内科・小児科（月・水・金）</td></tr>
                <tr><th>白嶺へき地診療所</th><td>白嶺字里200　☎ 0100-58-2500　内科（火・木・土）</td></tr>
                <tr><th>たかはし整形外科クリニック</th><td>北部1-2-8　☎ 0100-88-4800　整形外科・リハビリ</td></tr>
                <tr><th>ひのはら眼科</th><td>中央4-1-9　☎ 0100-53-0300　眼科</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>歯科・その他</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>中央歯科クリニック</th><td>中央3-5-2　☎ 0100-88-5000</td></tr>
                <tr><th>みなみ歯科医院</th><td>南部2-4-1　☎ 0100-88-5100</td></tr>
                <tr><th>調剤薬局（市内5店舗）</th><td>ドラッグストア内含む（詳細は市HPで確認）</td></tr>
                <tr><th>休日急病診療センター</th><td>市中央病院内　日曜・祝日 午前9時〜午後5時（☎ 0100-88-2020）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            市内医療機関の最新情報・専門科目は、千葉県医療機関情報システム（外部リンク）でもご確認いただけます。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0100-88-1122
          </div>
          <PageInfo department="健康推進課" division="国保係" tel="0100-88-1165（内線 165）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
