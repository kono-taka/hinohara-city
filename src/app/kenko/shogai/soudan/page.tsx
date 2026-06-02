import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "障がい者相談支援センター「ひのはら相談室」" };

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
            <span>障がい者相談支援センター「ひのはら相談室」</span>
          </div>
          <h1 className="page-title">障がい者相談支援センター「ひのはら相談室」</h1>
          
          <div className="content-box">
            <h3>施設概要</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>名称</th><td>日野原市障がい者相談支援センター「ひのはら相談室」</td></tr>
                <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央4丁目5番地2号</td></tr>
                <tr><th>電話</th><td>0439-88-6200　／　FAX：0439-88-6201</td></tr>
                <tr><th>開所時間</th><td>平日 午前9時〜午後5時</td></tr>
                <tr><th>運営</th><td>市より委託（社会福祉法人 日野原市社会福祉協議会）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>提供サービス</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>一般相談</th><td>障がいのある方・ご家族からの生活・福祉・就労・医療に関する相談</td></tr>
                <tr><th>サービス等利用計画の作成</th><td>障害福祉サービスの利用に必要な計画（指定特定相談支援）</td></tr>
                <tr><th>継続サービス利用支援</th><td>サービス利用開始後の定期的なモニタリング</td></tr>
                <tr><th>地域移行支援</th><td>入院・入所中の方の地域生活への移行支援</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0439-88-1120
          </div>
          <PageInfo department="福祉課" division="相談支援係" tel="0439-88-1161（内線 162）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
