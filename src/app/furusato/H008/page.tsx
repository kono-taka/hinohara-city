import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市立歴史民俗資料館 縄文土器レプリカ（手のひらサイズ）｜ふるさと納税" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/furusato">ふるさと納税</a><span>›</span>
            <span>市立歴史民俗資料館 縄文土器レプリカ（手のひらサイズ）</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 200, height: 200, flexShrink: 0, border: "1px solid var(--border-light)", overflow: "hidden", position: "relative" }}>
              <img src="/images/furusato/furusato-h008.png" alt="商品写真" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>品番：H008　提供者：日野原市教育委員会</div>
              <h1 style={{ fontSize: 18, fontWeight: "bold", color: "var(--city-blue)", margin: "0 0 8px", lineHeight: 1.4 }}>
                市立歴史民俗資料館 縄文土器レプリカ（手のひらサイズ）
              </h1>
              <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 12px", fontSize: 13, marginBottom: 8 }}>
                <strong>寄附金額：20,000円以上</strong>
              </div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                発送時期：通年発送（在庫限り）<br />
                配送方法：通年
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>商品のご説明</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              国指定史跡・下原遺跡から出土した縄文土器を、地元の陶芸作家との協力で忠実に再現した手のひらサイズのレプリカです。縄文時代中期（約4,500年前）の渦巻き文様を細部まで丁寧に再現。展示・インテリアとして、また日野原の歴史を伝える贈り物にも。
            </p>
          </div>

          <div className="content-box">
            <h3>商品仕様</h3>
            <table className="content-table">
              <tbody>
                <tr><th>内容</th><td>縄文土器レプリカ（高さ約12cm）×1個・解説書付き</td></tr>
                <tr><th>素材</th><td>陶器（手作りのため個体差があります）</td></tr>
                <tr><th>制作</th><td>地元陶芸家・山田工房（日野原市）との協力制作</td></tr>
                <tr><th>注意</th><td>在庫限りの品のため、品切れの場合はご連絡します</td></tr>
                <tr><th>提供者</th><td>日野原市教育委員会（生涯学習課）</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <a href="/furusato" style={{ display: "inline-block", background: "var(--city-blue)", color: "#fff", padding: "10px 32px", fontWeight: "bold", fontSize: 14, borderRadius: 2, marginRight: 8 }}>
              寄附申込はこちら（外部サイト）
            </a>
            <a href="/furusato" style={{ display: "inline-block", background: "#f4f6fb", color: "var(--city-blue)", border: "1px solid var(--border-light)", padding: "10px 20px", fontSize: 13, borderRadius: 2 }}>
              ← お礼の品一覧に戻る
            </a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
