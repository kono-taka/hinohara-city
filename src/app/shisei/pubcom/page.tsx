import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "パブリックコメント（意見公募）" };

const current = [
  {
    title: "日野原市地球温暖化対策実行計画（第3期）（案）に対する意見の募集",
    dept: "環境対策課",
    period: "令和8年6月1日（日）〜令和8年6月30日（月）",
    summary: "2050年ゼロカーボンシティの実現に向けた令和8〜17年度の行動計画案です。再エネ導入目標・省エネ推進・グリーン購入等の施策を盛り込んでいます。",
    docs: [
      { name: "計画案（全文）（PDF・4.2MB）", href: "#" },
      { name: "意見書様式（Word）", href: "#" },
    ],
  },
];

const past = [
  {
    title: "第3次日野原市総合計画後期基本計画（案）",
    dept: "企画政策課",
    period: "令和8年1月6日〜2月5日",
    count: 48,
    summary: "令和8〜14年度を計画期間とする後期基本計画案。47名・1団体から48件のご意見をいただきました。",
    result: "意見の概要と市の考え方（PDF）",
    href: "#",
  },
  {
    title: "日野原市空き家等の適切な管理に関する条例（案）",
    dept: "都市計画課",
    period: "令和7年10月1日〜10月31日",
    count: 12,
    summary: "空き家の適切な管理及び利活用を促進するための条例案。",
    result: "意見の概要と市の考え方（PDF）",
    href: "#",
  },
  {
    title: "日野原市国民健康保険税条例の一部改正（案）",
    dept: "健康推進課",
    period: "令和7年12月15日〜令和8年1月14日",
    count: 23,
    summary: "令和8年度の国民健康保険税率改定に係る条例改正案。23件のご意見をいただきました。",
    result: "意見の概要と市の考え方（PDF）",
    href: "#",
  },
  {
    title: "日野原市地域防災計画（修正案）",
    dept: "総務課",
    period: "令和7年8月1日〜8月31日",
    count: 7,
    summary: "令和6年能登半島地震の知見を踏まえた地域防災計画の修正案。",
    result: "意見の概要と市の考え方（PDF）",
    href: "#",
  },
  {
    title: "日野原市第2次子ども・子育て支援事業計画（案）",
    dept: "子育て支援課",
    period: "令和6年12月2日〜令和7年1月6日",
    count: 31,
    summary: "令和7〜11年度を計画期間とする第2次計画案。31件のご意見をいただきました。",
    result: "意見の概要と市の考え方（PDF）",
    href: "#",
  },
];

export default function PubComPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/shisei">市政情報</a> › パブリックコメント（意見公募）
          </nav>
          <h1 className="page-title">パブリックコメント（意見公募）</h1>

          <div className="content-box" style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市では、市の基本的な計画・条例等の策定・改廃にあたり、市民の皆様から広くご意見をいただく「パブリックコメント制度（意見公募手続）」を実施しています。
              いただいたご意見は、計画等の策定に活かすとともに、意見の概要と市の考え方を公表します。
            </p>
          </div>

          {/* 現在募集中 */}
          <div className="section-title" style={{ background: "#c0392b" }}>現在募集中</div>
          {current.length > 0 ? (
            <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 20 }}>
              {current.map((c, i) => (
                <div key={i} style={{ padding: "16px 16px", borderBottom: "1px solid #e8edf4" }}>
                  <div style={{ fontSize: 14, fontWeight: "bold", color: "var(--city-primary)", marginBottom: 6 }}>{c.title}</div>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 12.5, color: "#555", marginBottom: 8 }}>
                    <span>担当：{c.dept}</span>
                    <span style={{ color: "#c0392b", fontWeight: "bold" }}>募集期間：{c.period}</span>
                  </div>
                  <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 10px" }}>{c.summary}</p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                    {c.docs.map((d, di) => (
                      <a key={di} href={d.href} style={{ fontSize: 12.5, color: "var(--link-color)", display: "flex", gap: 4 }}>
                        📄 {d.name}
                      </a>
                    ))}
                  </div>
                  <div style={{ marginTop: 12, padding: "10px 14px", background: "#f4f6fb", border: "1px solid var(--border-light)", borderRadius: 4, fontSize: 12.5 }}>
                    <strong>意見の提出方法：</strong>
                    ①市役所企画政策課（持参・郵送）、②電子メール（pubcom@city.hinohara.lg.jp）、③FAX（0100-88-1199）<br />
                    様式は任意ですが、①氏名・住所、②意見、③該当箇所 をご記入ください。
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ border: "1px solid var(--border-light)", borderTop: "none", padding: "16px", fontSize: 13, color: "#888", marginBottom: 20 }}>
              現在、募集中の案件はありません。
            </div>
          )}

          {/* 過去の結果 */}
          <div className="section-title">過去の実施結果</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 20 }}>
            <table className="content-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th>計画・条例名</th>
                  <th style={{ width: 170 }}>募集期間</th>
                  <th style={{ width: 70 }}>意見数</th>
                  <th style={{ width: 50 }}>結果</th>
                </tr>
              </thead>
              <tbody>
                {past.map((p, i) => (
                  <tr key={i}>
                    <td>
                      <div style={{ fontSize: 13, fontWeight: "bold" }}>{p.title}</div>
                      <div style={{ fontSize: 11.5, color: "#888", marginTop: 2 }}>{p.dept}</div>
                    </td>
                    <td style={{ fontSize: 12 }}>{p.period}</td>
                    <td style={{ textAlign: "center", fontWeight: "bold" }}>{p.count}件</td>
                    <td style={{ textAlign: "center" }}>
                      <a href={p.href} style={{ fontSize: 11.5 }}>📄 公表</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>パブリックコメント制度について</h3>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 160 }}>根拠規定</th><td>日野原市パブリックコメント手続条例（平成20年条例第18号）</td></tr>
                <tr><th>対象となる計画等</th><td>市の基本的な計画・条例・規則の制定・改廃のうち、広く市民の意見を聴くことが適当なもの</td></tr>
                <tr><th>意見を提出できる方</th><td>市内に住所を有する方、市内に事業所を有する法人・団体、市内の施設に通勤・通学する方、その他市の政策に利害関係を有する方</td></tr>
                <tr><th>担当</th><td>企画政策課 政策企画係　☎ 0100-88-1114（内線 101）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo
            department="企画政策課"
            division="政策企画係"
            tel="0100-88-1114（内線 101）"
            updated="令和8年6月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
