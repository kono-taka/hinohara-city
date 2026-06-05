import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "フードバンク・食料支援" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/seikatsu">生活保護・生活困窮</a><span>›</span>
            <span>フードバンク・食料支援</span>
          </div>
          <h1 className="page-title">フードバンク・食料支援</h1>
          
          <div className="content-box">
            <h3>ひのはらフードバンク</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>運営主体</th><td>日野原市社会福祉協議会（市委託事業）</td></tr>
                <tr><th>内容</th><td>家庭で使いきれない食品を寄附いただき、食に困っている方・世帯に提供します</td></tr>
                <tr><th>食品の寄附を受け付ける場所</th><td>市役所1階 福祉課・社会福祉協議会（中央2-6-1）</td></tr>
                <tr><th>寄附できる食品</th><td>未開封・賞味期限2か月以上・常温保存可能な食品（缶詰・インスタント・調味料等）</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>食品の提供を受けるには</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>食に困っているすべての方（所得制限なし・事前審査なし）</td></tr>
                <tr><th>申請方法</th><td>市役所1階 福祉課または社会福祉協議会へご相談ください（秘密厳守）</td></tr>
                <tr><th>提供内容</th><td>状況に応じて食品セット（3日〜1週間分程度）を提供</td></tr>
                <tr><th>緊急時</th><td>急に食べるものがなくなった場合も、まずはご連絡ください</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 12, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.8, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            食品の寄附も随時受け付けています。職場・学校・地域での「フードドライブ」にもご協力ください。
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0100-88-1120
          </div>
          <PageInfo department="福祉課" tel="0100-88-1161（内線 163）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
