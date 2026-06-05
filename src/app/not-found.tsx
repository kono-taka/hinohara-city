import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "40px 16px 60px" }}>
        <div style={{ border: "1px solid var(--border-light)", background: "#fff", padding: "40px 32px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}>
            <Image src="/images/hinopon/hinopon.png" alt="ひのぽん" width={160} height={160} style={{ objectFit: "contain" }} />
          </div>
          <div style={{ fontSize: 13, color: "var(--city-primary)", fontWeight: "bold", marginBottom: 4 }}>
            あれれ…ぽん？ページが見つからないぽん…
          </div>
          <div style={{ fontSize: 48, fontWeight: "bold", color: "#c8d4e8", lineHeight: 1, marginBottom: 8 }}>404</div>
          <h1 style={{ fontSize: 20, color: "var(--city-blue)", margin: "0 0 16px", fontWeight: "bold" }}>
            お探しのページが見つかりません
          </h1>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.9, margin: "0 0 24px" }}>
            お探しのページは、移動・削除されたか、URLが正しく入力されていない可能性があります。<br />
            お手数ですが、トップページから再度お探しいただくか、サイト内検索をご利用ください。
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/"
              style={{ display: "inline-block", background: "var(--city-blue)", color: "#fff", padding: "10px 28px", fontWeight: "bold", fontSize: 13, borderRadius: 2 }}>
              トップページへ戻る
            </a>
            <a href="/sitemap"
              style={{ display: "inline-block", background: "#f4f6fb", color: "var(--city-blue)", border: "1px solid var(--border-light)", padding: "10px 28px", fontWeight: "bold", fontSize: 13, borderRadius: 2 }}>
              サイトマップ
            </a>
          </div>
          <div style={{ marginTop: 32, textAlign: "left", display: "inline-block" }}>
            <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>よく利用されるページ</p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                { label: "くらし・手続き（転入・転出、住民登録など）", href: "/kurashi" },
                { label: "市税・国民健康保険のご案内", href: "/kurashi" },
                { label: "子育て・保育のご案内", href: "/kenko/kosodate" },
                { label: "ごみ・リサイクルのご案内", href: "/kurashi" },
                { label: "施設案内", href: "/shisetsu" },
                { label: "観光・移住のご案内", href: "/kanko" },
              ].map((l, i) => (
                <li key={i}>
                  <a href={l.href} style={{ fontSize: 13, color: "var(--link-color)" }}>▶ {l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{ fontSize: 11, color: "#888", marginTop: 12, textAlign: "center" }}>
          問題が解決しない場合は、<a href="/inquiry">お問い合わせフォーム</a>よりご連絡ください。<br />
          日野原市役所 代表電話：0100-88-1111（平日 午前8時30分〜午後5時15分）
        </p>
      </div>
      <SiteFooter />
    </>
  );
}
