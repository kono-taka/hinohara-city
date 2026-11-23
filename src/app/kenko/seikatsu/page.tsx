import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "生活保護・生活困窮",
  description:
    "生活にお困りの方のための相談・支援のご案内です。生活保護、生活困窮者自立支援、フードバンク、住居確保給付金の各ページへ進めます。",
};

const items = [
  { label: "生活保護の申請", href: "/kenko/seikatsu/hogo", desc: "収入や資産では生活を続けるのがむずかしいとき。まずはご相談ください。" },
  { label: "生活困窮者自立支援制度", href: "/kenko/seikatsu/konku", desc: "仕事や家計、住まいのことなど、困りごとをまとめて相談できます。" },
  { label: "フードバンク・食料支援", href: "/kenko/seikatsu/foodbank", desc: "食べるものに困ったときの食料支援です。" },
  { label: "住居確保給付金", href: "/kenko/seikatsu/juukyo", desc: "離職などで住まいを失うおそれがある方への家賃の支援です。" },
];

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>生活保護・生活困窮</span>
          </div>
          <h1 className="page-title">生活保護・生活困窮</h1>

          <div style={{ padding: 14, background: "#fff8e6", border: "1px solid #f39c12", fontSize: 13, lineHeight: 1.9, borderRadius: "var(--radius-sm)", marginBottom: 16 }}>
            <strong>ひとりで悩まず、まずはご相談ください。</strong><br />
            どの制度が当てはまるか分からなくても大丈夫です。市役所1階の福祉課の窓口でお話をうかがいます。
          </div>

          <div className="section-title">困りごとから探す</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 16 }}>
            {items.map((item) => (
              <div key={item.href} style={{ padding: "10px 14px", borderBottom: "1px solid #e8edf4" }}>
                <a href={item.href} style={{ fontSize: 14, fontWeight: "bold" }}>▶ {item.label}</a>
                <div style={{ fontSize: 12.5, color: "#555", lineHeight: 1.7, marginTop: 2 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "var(--radius-sm)" }}>
            <strong>相談窓口</strong>　市役所1階 福祉課<br />
            電話番号は各制度のページに掲載しています。
          </div>
          <PageInfo department="福祉課" updated="令和8年11月23日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
