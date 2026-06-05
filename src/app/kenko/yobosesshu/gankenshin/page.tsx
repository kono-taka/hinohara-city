import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "がん検診のご案内（令和8年度）" };

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
            <span>がん検診のご案内（令和8年度）</span>
          </div>
          <h1 className="page-title">がん検診のご案内（令和8年度）</h1>
          
          <div className="content-box">
            <h3>令和8年度 各種がん検診</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>胃がん検診（胃内視鏡）</th><td>対象：50歳以上（偶数年齢）　費用：2,000円　期間：7〜11月</td></tr>
                <tr><th>肺がん検診</th><td>対象：40歳以上　費用：500円（喀痰は別途500円）　期間：6〜10月</td></tr>
                <tr><th>大腸がん検診</th><td>対象：40歳以上　費用：500円　期間：6〜10月</td></tr>
                <tr><th>子宮頸がん検診</th><td>対象：20歳以上女性（2年に1回）　費用：1,000円　期間：6〜10月</td></tr>
                <tr><th>乳がん検診（マンモグラフィ）</th><td>対象：40歳以上女性（2年に1回）　費用：1,000円　期間：7〜11月</td></tr>
                <tr><th>前立腺がん検診（PSA）</th><td>対象：50歳以上男性　費用：1,000円　期間：6〜9月</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>申込・受診方法</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>申込方法</th><td>健康推進課への電話申込（☎ 0100-88-1122）または市ウェブフォーム</td></tr>
                <tr><th>申込受付</th><td>5月中旬〜（各検診の定員に達し次第締切）</td></tr>
                <tr><th>受診場所</th><td>市保健センター・市内指定医療機関・巡回会場</td></tr>
                <tr><th>結果通知</th><td>受診後3〜6週間で郵送</td></tr>
                <tr><th>精密検査が必要な場合</th><td>要精密検査通知が届いた方は必ず専門医を受診してください</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0100-88-1122
          </div>
          <PageInfo department="健康推進課" division="保健係" tel="0100-88-1167（内線 167）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
