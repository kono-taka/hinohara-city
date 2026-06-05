import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "補装具・日常生活用具の給付" };

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
            <span>補装具・日常生活用具の給付</span>
          </div>
          <h1 className="page-title">補装具・日常生活用具の給付</h1>
          
          <div className="content-box">
            <h3>補装具費の支給</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象者</th><td>身体障害者手帳を持つ方（一部は難病患者も対象）</td></tr>
                <tr><th>主な対象品目</th><td>車椅子・電動車椅子・補聴器・義肢・装具・歩行補助つえ・重度障害者用意思伝達装置など</td></tr>
                <tr><th>費用負担</th><td>原則1割負担（所得に応じた上限あり・低所得者は無料）</td></tr>
                <tr><th>申請方法</th><td>市役所1階 福祉課へ申請→専門家による判定→決定→業者から購入</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>日常生活用具の給付</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象者</th><td>在宅の障がいのある方・難病患者</td></tr>
                <tr><th>主な対象品目</th><td>入浴補助用具・ストマ用品・視覚障害者用音声時計・電磁調理器・火災警報器など</td></tr>
                <tr><th>費用負担</th><td>原則1割（所得に応じた上限あり）</td></tr>
                <tr><th>申請方法</th><td>市役所1階 福祉課で申請・見積書の提出が必要</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0100-88-1120
          </div>
          <PageInfo department="福祉課" division="障がい福祉係" tel="0100-88-1161（内線 161）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
