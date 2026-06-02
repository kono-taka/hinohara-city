import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "乳幼児健診・育児相談のご案内" };

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
            <span>乳幼児健診・育児相談のご案内</span>
          </div>
          <h1 className="page-title">乳幼児健診・育児相談のご案内</h1>
          
          <div className="content-box">
            <h3>定期健診スケジュール</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>3〜4か月健診</th><td>毎月2回・市保健センター（無料・個別通知）</td></tr>
                <tr><th>9〜10か月健診</th><td>毎月1回・市保健センター（無料・個別通知）</td></tr>
                <tr><th>1歳6か月健診</th><td>毎月1回・市保健センター（無料・個別通知）</td></tr>
                <tr><th>2歳児歯科健診</th><td>毎月1回・市保健センター（無料・個別通知）</td></tr>
                <tr><th>3歳児健診</th><td>毎月1回・市保健センター（無料・個別通知）</td></tr>
                <tr><th>就学前健診</th><td>市立小学校6校で実施（10〜11月・通知書を個別郵送）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>育児相談</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>育児相談窓口</th><td>健康推進課（市役所1階）☎ 0439-88-1122　随時受付</td></tr>
                <tr><th>乳幼児相談</th><td>毎月第2・第4木曜日 午後1時30分〜（保健師・栄養士）</td></tr>
                <tr><th>電話相談</th><td>平日 午前9時〜午後5時</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0439-88-1122
          </div>
          <PageInfo department="健康推進課" division="母子保健係" tel="0439-88-1167（内線 167）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
