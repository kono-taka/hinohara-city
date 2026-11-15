import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, formatDate, formatReiwa } from "../posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/blog">Web担当者の奮闘ブログ</a><span>›</span>
            <span>{post.title}</span>
          </div>

          <div style={{ fontSize: 12, color: "#666", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center", marginBottom: 8 }}>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>執筆：Web担当</span>
            {post.tags.map((t) => (
              <span key={t} style={{ border: "1px solid var(--border-light)", padding: "0 8px", borderRadius: 2, background: "#f8f8f8" }}>
                {t}
              </span>
            ))}
          </div>

          <h1 className="page-title">{post.title}</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            {post.body.map((b, i) => {
              switch (b.type) {
                case "h":
                  return (
                    <h2 key={i} style={{ fontSize: 15, margin: "20px 0 8px", borderLeft: "4px solid var(--city-primary)", paddingLeft: 8, fontWeight: "bold" }}>
                      {b.text}
                    </h2>
                  );
                case "p":
                  return <p key={i} style={{ margin: "0 0 12px" }}>{b.text}</p>;
                case "ul":
                  return (
                    <ul key={i} style={{ margin: "0 0 12px", paddingLeft: 20, listStyleType: "disc" }}>
                      {b.items.map((it, j) => (
                        <li key={j} style={{ marginBottom: 4 }}>{it}</li>
                      ))}
                    </ul>
                  );
                case "note":
                  return (
                    <div key={i} style={{ background: "#f4f9f0", border: "1px solid #9ec87a", padding: "10px 14px", borderRadius: 3, margin: "0 0 12px" }}>
                      {b.text}
                    </div>
                  );
              }
            })}
          </div>

          <p style={{ fontSize: 13 }}>
            <a href="/blog">‹ ブログの一覧へ戻る</a>
          </p>

          <PageInfo department="情報管理課" division="Web担当" updated={formatReiwa(post.date)} />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
