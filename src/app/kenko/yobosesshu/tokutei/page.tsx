import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "特定健康診査（メタボ健診）" };

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
            <span>特定健康診査（メタボ健診）</span>
          </div>
          <h1 className="page-title">特定健康診査（メタボ健診）</h1>
          
          <div className="content-box">
            <h3>特定健康診査とは</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>目的</th><td>生活習慣病の発症・重症化予防のためのメタボリックシンドローム健診</td></tr>
                <tr><th>対象</th><td>日野原市国民健康保険に加入している40〜74歳の方</td></tr>
                <tr><th>実施期間</th><td>令和8年6月〜11月（受診期間は受診券に記載）</td></tr>
                <tr><th>費用</th><td>無料（受診券持参）</td></tr>
                <tr><th>検査項目</th><td>問診・身体計測（身長・体重・腹囲）・血圧・血糖・脂質・尿検査・心電図（一部）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>受診方法</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>受診券の送付</th><td>4月下旬〜5月上旬に郵送（国保加入の40歳の方には誕生月に送付）</td></tr>
                <tr><th>受診場所</th><td>市指定医療機関（市内6か所・近隣市も可）・要事前予約</td></tr>
                <tr><th>持参物</th><td>受診券・保険証・問診票（同封）</td></tr>
                <tr><th>結果通知</th><td>受診後4〜6週間で郵送。基準値を超えた場合は特定保健指導を案内</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0439-88-1122
          </div>
          <PageInfo department="健康推進課" division="保健係" tel="0439-88-1167（内線 167）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
