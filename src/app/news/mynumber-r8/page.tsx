import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "マイナンバー利用拡大に伴う各種手続きの変更について",
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
            <span>マイナンバー利用拡大に伴う各種手続きの変更について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月19日</span>
            <span>担当課：市民課</span>
            <span className="news-tag important" style={{ fontSize: 11 }}>重要</span>
          </div>

          <h1 className="page-title">マイナンバー利用拡大に伴う各種手続きの変更について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度より、マイナンバーカードを利用したコンビニエンスストアでの各種証明書交付サービスが拡充されました。これにより、市役所窓口に来庁することなく、全国のコンビニ等のマルチコピー機から各種証明書を取得できます。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>コンビニ交付で取得できる証明書</h3>
            <ul style={{ paddingLeft: 20, margin: "4px 0" }}>
              <li>住民票の写し</li>
              <li>印鑑登録証明書</li>
              <li>戸籍謄本・戸籍抄本（本籍地が日野原市の方）</li>
            </ul>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>手数料と利用可能店舗</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["手数料", "1通250円（窓口交付より50円安い）"],
                  ["利用可能時間", "6:30〜23:00（年中無休）"],
                  ["利用可能店舗", "セブン-イレブン・ローソン・ファミリーマート 等全国対応店舗"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 130, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>マイナンバーカードをお持ちでない方へ</h3>
            <p>
              マイナンバーカードはお住まいの市区町村へ申請できます。日野原市では市民課窓口で申請書の受取・写真撮影のサポートを行っています。お気軽にご来庁ください。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>市民課　☎ 0100-88-1113（平日 8:30〜17:15）</p>
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
