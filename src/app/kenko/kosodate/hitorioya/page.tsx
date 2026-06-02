import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ひとり親家庭への支援" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/kosodate">子育て・保育</a><span>›</span>
            <span>ひとり親家庭への支援</span>
          </div>
          <h1 className="page-title">ひとり親家庭への支援</h1>
          
          <div className="content-box">
            <h3>児童扶養手当</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>支給対象</th><td>18歳に達する日以後の最初の3月31日までの子を養育するひとり親家庭の親（所得制限あり）</td></tr>
                <tr><th>支給額（全部支給）</th><td>月額 45,500円（第2子加算 10,750円、第3子以降 6,450円）</td></tr>
                <tr><th>申請窓口</th><td>市役所1階 福祉課 ☎ 0439-88-1120</td></tr>
                <tr><th>支払月</th><td>1月・3月・5月・7月・9月・11月の11日前後</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>その他の支援</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>母子・父子・寡婦福祉資金貸付</th><td>修学資金・就職支度資金など低利・無利子の貸付制度あり</td></tr>
                <tr><th>就業支援</th><td>市内ハローワーク出張相談（毎月第3火曜）・マザーズハローワーク案内</td></tr>
                <tr><th>法律相談</th><td>弁護士による無料相談（要予約）月1回 市役所相談室</td></tr>
                <tr><th>ひとり親家庭等医療費助成</th><td>医療費の自己負担分を助成（所得制限あり・市民課で申請）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0439-88-1120
          </div>
          <PageInfo department="子育て支援課" division="給付係" tel="0439-88-1173（内線 173）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
