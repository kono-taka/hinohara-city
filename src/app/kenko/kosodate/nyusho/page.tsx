import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "保育所・認定こども園の入所申込" };

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
            <span>保育所・認定こども園の入所申込</span>
          </div>
          <h1 className="page-title">保育所・認定こども園の入所申込</h1>
          
          <div className="content-box">
            <h3>申込の流れ</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>申込受付期間</th><td>令和9年度入所分：令和8年10月1日（水）〜11月15日（金）※一次申込</td></tr>
                <tr><th>申込窓口</th><td>市役所1階 子育て支援課 保育係（☎ 0439-88-1123）</td></tr>
                <tr><th>申請書類</th><td>入所申込書（窓口または市ウェブよりダウンロード）・就労証明書・源泉徴収票など</td></tr>
                <tr><th>利用調整</th><td>令和8年12月上旬に一次結果を通知します</td></tr>
                <tr><th>二次申込</th><td>令和9年1月6日〜1月31日（一次で未定となった方・途中入所希望の方）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>利用者負担額（保育料）の目安</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>0〜2歳児（非課税世帯）</th><td>無料</td></tr>
                <tr><th>0〜2歳児（市町村民税課税世帯・年収360万円未満相当）</th><td>月額6,000〜16,000円程度</td></tr>
                <tr><th>0〜2歳児（それ以外）</th><td>月額16,000〜46,000円（所得に応じた認定）</td></tr>
                <tr><th>3〜5歳児</th><td>無料（幼児教育・保育の無償化対象）</td></tr>
                <tr><th>給食費（3〜5歳）</th><td>月額4,500円（実費）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            令和8年10月以降、マイナポータルを通じたオンライン申請も受付予定です。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　子育て支援課　☎ 0439-88-1123
          </div>
          <PageInfo department="子育て支援課" division="保育係" tel="0439-88-1172（内線 172）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
