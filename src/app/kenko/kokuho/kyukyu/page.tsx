import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "救急医療・時間外診療のご案内" };

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
            <span>救急医療・時間外診療のご案内</span>
          </div>
          <h1 className="page-title">救急医療・時間外診療のご案内</h1>
          
          <div className="content-box">
            <h3>休日急病診療センター</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>場所</th><td>日野原中央病院内（中央2-3-1）</td></tr>
                <tr><th>電話</th><td>0100-88-2020</td></tr>
                <tr><th>診療日時</th><td>日曜日・祝日 午前9時〜午後5時（内科・小児科）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>夜間・救急の対応</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>救急車の要請</th><td>☎ 119（24時間）</td></tr>
                <tr><th>千葉県救急医療情報センター</th><td>☎ 043-245-7711（24時間）病院・診療所の案内</td></tr>
                <tr><th>子どもの救急電話相談</th><td>☎ #8000（平日18時〜翌8時・土日祝24時間）</td></tr>
                <tr><th>大人の救急電話相談</th><td>☎ #7119（24時間）</td></tr>
                <tr><th>近隣の二次救急病院</th><td>君津中央病院（☎ 0100-88-3300）・亀田総合病院（☎ 04-7092-2211）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            救急か否か迷ったときは「#7119（救急安心センター）」にご相談ください。不要不急の救急要請はお控えください。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0100-88-1122
          </div>
          <PageInfo department="健康推進課" tel="0100-88-1165（内線 165）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
