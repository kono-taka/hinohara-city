import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "市道 中央幹線（下三区地内）路面補修工事について",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>市道 中央幹線（下三区地内）路面補修工事について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月26日</span>
            <span>担当課：建設課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">市道 中央幹線（下三区地内）路面補修工事について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              市道中央幹線（中央3丁目地内）において路面の損傷が確認されたため、下記のとおり補修工事を実施します。工事期間中は交通規制を行いますので、ご不便をおかけしますが、ご理解・ご協力をお願いいたします。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>工事概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["工事期間", "5月29日（木）〜 6月6日（金）※雨天の場合は順延"],
                  ["工事区間", "中央幹線 中央3丁目地内 約320m"],
                  ["交通規制", "片側交互通行（交通誘導員を配置）"],
                  ["推奨迂回路", "東部幹線（県道85号線）をご利用ください"],
                  ["施工時間", "8:30〜17:00（日曜・祝日を除く）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 110, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 12 }}>
              工事期間中は通行に時間がかかる場合があります。お急ぎの方は迂回路のご利用をお勧めします。緊急車両の通行は確保しております。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>建設課　☎ 0439-88-1130（平日 8:30〜17:15）</p>
          </div>
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <a href="/news" style={{ fontSize: 13, color: "var(--link-color)" }}>← お知らせ・新着情報 一覧に戻る</a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
