import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "こころの健康相談・自殺予防" };

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
            <span>こころの健康相談・自殺予防</span>
          </div>
          <h1 className="page-title">こころの健康相談・自殺予防</h1>
          
          <div className="content-box">
            <h3>相談窓口のご案内</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>健康推進課（市役所1階）</th><td>精神保健福祉士・保健師による相談（☎ 0100-88-1122）要予約・無料</td></tr>
                <tr><th>こころの健康相談（月1回）</th><td>精神科医による相談。市役所相談室。要予約（定員4名）</td></tr>
                <tr><th>よりそいホットライン</th><td>☎ 0120-100-000（24時間・無料）</td></tr>
                <tr><th>いのちの電話（千葉県）</th><td>☎ 043-227-3900（毎日16時〜21時）</td></tr>
                <tr><th>よりそいホットライン（女性専用）</th><td>☎ 0120-100-000（24時間）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>ゲートキーパー（自殺予防の見守り）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>ゲートキーパーとは</th><td>身近な人の悩みや変化に気づき、適切な支援につなぐ人</td></tr>
                <tr><th>ゲートキーパー養成講座</th><td>市内で年2回開催（参加無料・要申込）。職場・学校・地域への出前も可</td></tr>
                <tr><th>相談が難しいとき</th><td>まずは身近な人に話しかけてみましょう。一人で抱え込まないでください</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            緊急の場合や自殺の危険が高い場合は、直ちに119番または警察（110番）へ連絡してください。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　健康推進課　☎ 0100-88-1122
          </div>
          <PageInfo department="健康推進課" division="保健係" tel="0100-88-1167（内線 167）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
