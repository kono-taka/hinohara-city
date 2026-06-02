import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "児童手当の申請・届出" };

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
            <span>児童手当の申請・届出</span>
          </div>
          <h1 className="page-title">児童手当の申請・届出</h1>
          
          <div className="content-box">
            <h3>支給対象と金額（令和6年10月改正後）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>3歳未満</th><td>月額 15,000円／人</td></tr>
                <tr><th>3歳〜高校生</th><td>月額 10,000円／人（第3子以降は30,000円）</td></tr>
                <tr><th>所得制限</th><td>令和6年10月より所得制限・所得上限を撤廃</td></tr>
                <tr><th>支払月</th><td>偶数月（2月・4月・6月・8月・10月・12月）の10日前後</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>申請手続き</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>申請期限</th><td>出生・転入の翌日から15日以内（15日を超えると受給が翌月からになる場合があります）</td></tr>
                <tr><th>必要書類</th><td>認定請求書・請求者の個人番号確認書類・口座情報がわかるもの</td></tr>
                <tr><th>申請窓口</th><td>市役所1階 子育て支援課（☎ 0439-88-1123）またはマイナポータルからオンライン申請可</td></tr>
                <tr><th>変更届</th><td>住所変更・金融機関変更・受給者の変更などは速やかに届出を</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　子育て支援課　☎ 0439-88-1123
          </div>
          <PageInfo department="子育て支援課" division="給付係" tel="0439-88-1173（内線 173）" updated="令和8年10月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
