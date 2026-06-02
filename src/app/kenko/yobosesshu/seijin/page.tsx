import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "成人・高齢者の予防接種" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/yobosesshu">予防接種・健康診断</a><span>›</span>
            <span>成人・高齢者の予防接種</span>
          </div>
          <h1 className="page-title">成人・高齢者の予防接種</h1>
          
          <div className="content-box">
            <h3>高齢者インフルエンザ予防接種（令和8年度）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>接種日に65歳以上の方（60〜64歳で心臓・腎臓・呼吸器等の機能に重い障害のある方も対象）</td></tr>
                <tr><th>接種期間</th><td>10月1日〜1月31日</td></tr>
                <tr><th>費用（自己負担）</th><td>1,500円（市民税非課税世帯の方は無料）</td></tr>
                <tr><th>接種場所</th><td>市指定医療機関（市内4か所・近隣市も可）・事前予約が必要</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>高齢者肺炎球菌予防接種（定期）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>令和8年度中に65・70・75・80・85・90・95・100歳になる方（個別通知します）</td></tr>
                <tr><th>費用</th><td>2,500円（非課税世帯無料）</td></tr>
                <tr><th>接種方法</th><td>通知書を持参し市指定医療機関で接種（1回のみ）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>その他の予防接種（任意）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>帯状疱疹ワクチン</th><td>50歳以上が対象。費用の一部助成あり（1回8,000円助成・要申請）</td></tr>
                <tr><th>成人麻疹（はしか）</th><td>麻疹の免疫が不十分な方への任意接種（助成なし・実費）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0439-88-1122
          </div>
          <PageInfo department="健康推進課" division="保健係" tel="0439-88-1167（内線 167）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
