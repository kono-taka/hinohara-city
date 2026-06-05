import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "生活困窮者自立支援制度" };

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
            <span>生活困窮者自立支援制度</span>
          </div>
          <h1 className="page-title">生活困窮者自立支援制度</h1>
          
          <div className="content-box">
            <h3>支援の内容</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>自立相談支援事業</th><td>生活や仕事の困りごとについて、専任の支援員が相談に乗り、問題解決に向けて一緒に考えます（市役所福祉課）</td></tr>
                <tr><th>就労準備支援事業</th><td>すぐに働くことが難しい方に、社会参加や就労に向けたプログラムを提供</td></tr>
                <tr><th>家計改善支援事業</th><td>家計の見直し・債務整理の支援。収支の把握から貯蓄に向けたアドバイス</td></tr>
                <tr><th>一時生活支援事業</th><td>住む場所がない・住む場所を失うおそれがある方に、宿泊場所と食事を一定期間提供</td></tr>
                <tr><th>子どもの学習支援</th><td>生活困窮世帯の子どもへの無料学習支援（週2回・市内2か所）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>利用できる方</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>生活保護を受けていない方で、生活に困窮している・なりかねないと感じている方</td></tr>
                <tr><th>費用</th><td>基本的に無料（一時生活支援は一部実費）</td></tr>
                <tr><th>申込方法</th><td>まずは市役所1階 福祉課へご相談ください（予約不要・随時）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0100-88-1120
          </div>
          <PageInfo department="福祉課" division="生活困窮者支援係" tel="0100-88-1161（内線 163）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
