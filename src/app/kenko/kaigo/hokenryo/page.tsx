import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "介護保険料のご案内（令和8年度）" };

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
            <span>介護保険料のご案内（令和8年度）</span>
          </div>
          <h1 className="page-title">介護保険料のご案内（令和8年度）</h1>
          
          <div className="content-box">
            <h3>令和8年度 介護保険料（第1号被保険者）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>第1段階（生活保護等）</th><td>月額 3,200円　年額 38,400円</td></tr>
                <tr><th>第2段階（住民税非課税・年金収入等80万円以下）</th><td>月額 3,700円　年額 44,400円</td></tr>
                <tr><th>第3段階（住民税非課税・年金収入等80万円超）</th><td>月額 5,850円　年額 70,200円</td></tr>
                <tr><th>第4段階（住民税課税・合計所得120万円未満）</th><td>月額 6,500円（基準額）　年額 78,000円</td></tr>
                <tr><th>第5段階（合計所得120万円以上200万円未満）</th><td>月額 7,800円　年額 93,600円</td></tr>
                <tr><th>第6段階（合計所得200万円以上300万円未満）</th><td>月額 9,100円　年額 109,200円</td></tr>
                <tr><th>第7段階（合計所得300万円以上）</th><td>月額 10,400円　年額 124,800円</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>保険料の納め方</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>特別徴収（年金天引き）</th><td>老齢・退職・障害・遺族年金が年額18万円以上の方</td></tr>
                <tr><th>普通徴収（口座振替・納付書）</th><td>年金額が18万円未満の方・年度途中に65歳になった方</td></tr>
                <tr><th>口座振替手続き</th><td>市役所または金融機関窓口で手続き。毎月27日（金融機関休業日の場合は翌営業日）に引落</td></tr>
                <tr><th>減額申請</th><td>災害・失業・所得減少など特別な事情がある場合は高齢者支援課へご相談ください</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　高齢者支援課　☎ 0100-88-1121
          </div>
          <PageInfo department="介護保険課" division="保険料係" tel="0100-88-1162（内線 163）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
