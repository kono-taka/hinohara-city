import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "乳幼児予防接種スケジュール" };

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
            <span>乳幼児予防接種スケジュール</span>
          </div>
          <h1 className="page-title">乳幼児予防接種スケジュール</h1>
          
          <div className="content-box">
            <h3>定期接種スケジュール（令和8年度）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>BCG（結核）</th><td>生後3か月〜12か月　1回　無料</td></tr>
                <tr><th>ロタウイルス</th><td>生後6週〜24週（1価）または32週（5価）　2〜3回　無料（令和2年度以降出生）</td></tr>
                <tr><th>Hib（ヒブ）</th><td>生後2か月〜60か月　4回　無料</td></tr>
                <tr><th>肺炎球菌（小児）</th><td>生後2か月〜60か月　4回　無料</td></tr>
                <tr><th>4種混合（DPT-IPV）</th><td>生後3か月〜90か月　4回　無料</td></tr>
                <tr><th>B型肝炎</th><td>生後2か月〜12か月　3回　無料</td></tr>
                <tr><th>MR（麻疹・風疹）</th><td>1歳〜2歳（1期）・就学前年（2期）　各1回　無料</td></tr>
                <tr><th>水痘（水ぼうそう）</th><td>生後12か月〜36か月　2回　無料</td></tr>
                <tr><th>日本脳炎</th><td>3歳〜（1期3回・2期1回）　4回　無料</td></tr>
                <tr><th>HPV（子宮頸がん）</th><td>小6〜高1相当の女子　3回　無料　※男性も令和6年から定期接種</td></tr>
                <tr><th>2種混合（DT）</th><td>11〜13歳　1回　無料</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            接種会場：市保健センター・かかりつけ医院（市指定医療機関）。接種券は誕生月等に個別郵送します。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0100-88-1122
          </div>
          <PageInfo department="健康推進課" division="母子保健係" tel="0100-88-1167（内線 167）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
