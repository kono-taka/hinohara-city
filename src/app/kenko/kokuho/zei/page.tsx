import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "令和8年度 国民健康保険税について" };

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
            <span>令和8年度 国民健康保険税について</span>
          </div>
          <h1 className="page-title">令和8年度 国民健康保険税について</h1>
          
          <div className="content-box">
            <h3>令和8年度 国民健康保険税（年額）の計算方法</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>医療分 所得割</th><td>加入者の前年所得（基礎控除後）× 7.8%</td></tr>
                <tr><th>医療分 均等割</th><td>加入者1人につき 31,200円</td></tr>
                <tr><th>医療分 平等割</th><td>1世帯につき 23,400円</td></tr>
                <tr><th>医療分 課税限度額</th><td>年65万円</td></tr>
                <tr><th>後期高齢者支援分 所得割</th><td>前年所得（基礎控除後）× 2.4%</td></tr>
                <tr><th>後期高齢者支援分 均等割</th><td>加入者1人につき 10,800円</td></tr>
                <tr><th>介護分（40〜64歳）所得割</th><td>前年所得（基礎控除後）× 1.8%</td></tr>
                <tr><th>介護分 均等割</th><td>加入者1人につき 9,600円</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>軽減制度</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>7割軽減</th><td>世帯の所得合計が43万円以下（扶養人数×43万円加算）</td></tr>
                <tr><th>5割軽減</th><td>世帯の所得合計が43万円＋加入者数×29.5万円以下</td></tr>
                <tr><th>2割軽減</th><td>世帯の所得合計が43万円＋加入者数×54.5万円以下</td></tr>
                <tr><th>減免申請</th><td>失業・廃業・病気など特別な事情がある場合は市民課へご相談を</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　市民課（国保係）　☎ 0100-88-1113
          </div>
          <PageInfo department="健康推進課" division="国保係" tel="0100-88-1165（内線 165）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
