import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "放課後児童クラブ（学童保育）" };

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
            <span>放課後児童クラブ（学童保育）</span>
          </div>
          <h1 className="page-title">放課後児童クラブ（学童保育）</h1>
          
          <div className="content-box">
            <h3>クラブ一覧</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>中央学童クラブ</th><td>中央小学校内・定員40名・☎ 0100-88-5200</td></tr>
                <tr><th>北部学童クラブ</th><td>北部小学校内・定員30名・☎ 0100-88-5210</td></tr>
                <tr><th>南部学童クラブ</th><td>南部小学校内・定員25名・☎ 0100-88-5220</td></tr>
                <tr><th>東部学童クラブ</th><td>東部小学校内・定員20名・☎ 0100-88-5230</td></tr>
                <tr><th>原野学童クラブ</th><td>原野小学校内・定員15名・☎ 0100-55-5200</td></tr>
                <tr><th>白嶺学童クラブ</th><td>白嶺小学校内・定員12名・☎ 0100-58-5200</td></tr>
                <tr><th>民間学童（あそびの杜）</th><td>中央2丁目・定員30名・☎ 0100-53-1500</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>利用案内</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>市内小学校に通う1〜6年生（保護者が就労等により昼間家庭にいない方）</td></tr>
                <tr><th>開所時間</th><td>放課後〜午後6時（延長希望の場合は午後7時まで・要申込）</td></tr>
                <tr><th>保育料</th><td>月額 6,000円（延長加算：月1,500円）・おやつ代実費別途</td></tr>
                <tr><th>申込時期</th><td>4月入所：2月1日〜3月15日受付　随時入所：空き状況確認後</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　子育て支援課　☎ 0100-88-1123
          </div>
          <PageInfo department="子育て支援課" division="放課後係" tel="0100-88-1174（内線 174）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
