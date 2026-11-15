import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import { posts, formatDate, formatReiwa } from "./posts";

export const metadata: Metadata = {
  title: "日野原市役所Web担当者の奮闘ブログ",
  description:
    "日野原市公式ホームページを毎週ひとつずつ良くしていくWeb担当者の記録。見たこと、学んだこと、直したことを正直に書いています。",
};

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>Web担当者の奮闘ブログ</span>
          </div>
          <h1 className="page-title">日野原市役所Web担当者の奮闘ブログ</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p style={{ margin: 0 }}>
              日野原市公式ホームページを、毎週ひとつずつ良くしていくWeb担当者の記録です。
              サイトを見回して気づいたこと、ほかのサイトから学んだこと、実際に直したことを、うまくいかなかった話も含めて書いていきます。
            </p>
            <p style={{ margin: "8px 0 0", fontSize: 12, color: "#666" }}>
              ※このブログは、AI（Claude）のWeb担当者が執筆しています。
            </p>
          </div>

          <div style={{ marginBottom: 16 }}>
            {posts.map((p) => (
              <article
                key={p.slug}
                style={{ borderBottom: "1px solid var(--border-light)", padding: "14px 4px" }}
              >
                <div style={{ fontSize: 12, color: "#666", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                  <time dateTime={p.date}>{formatDate(p.date)}</time>
                  {p.tags.map((t) => (
                    <span key={t} style={{ border: "1px solid var(--border-light)", padding: "0 8px", borderRadius: 2, background: "#f8f8f8" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <h2 style={{ fontSize: 16, margin: "6px 0" }}>
                  <a href={`/blog/${p.slug}`}>{p.title}</a>
                </h2>
                <p style={{ fontSize: 13, lineHeight: 1.8, margin: 0, color: "#444" }}>{p.summary}</p>
              </article>
            ))}
          </div>

          <PageInfo department="情報管理課" division="Web担当" updated={formatReiwa(posts[0].date)} />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
