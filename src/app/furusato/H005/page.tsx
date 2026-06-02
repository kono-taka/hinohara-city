import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "白峰高原牧場 乳製品詰め合わせ｜ふるさと納税" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/furusato">ふるさと納税</a><span>›</span>
            <span>白峰高原牧場 乳製品詰め合わせ</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 200, height: 200, flexShrink: 0, border: "1px solid var(--border-light)", overflow: "hidden", position: "relative" }}>
              <img src="/images/furusato/furusato-h005.png" alt="商品写真" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>品番：H005　提供者：有限会社 白峰高原牧場</div>
              <h1 style={{ fontSize: 18, fontWeight: "bold", color: "var(--city-blue)", margin: "0 0 8px", lineHeight: 1.4 }}>
                白峰高原牧場 乳製品詰め合わせ
              </h1>
              <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 12px", fontSize: 13, marginBottom: 8 }}>
                <strong>寄附金額：15,000円以上</strong>
              </div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                発送時期：通年発送（クール便）<br />
                配送方法：通年
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>商品のご説明</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              標高280mの高原で育てたジャージー牛の生乳から作る乳製品セット。濃厚なミルクの風味をそのままにした牧場直送品です。ヨーグルトは無糖・プレーンで素材の味を大切にしています。
            </p>
          </div>

          <div className="content-box">
            <h3>商品仕様</h3>
            <table className="content-table">
              <tbody>
                <tr><th>内容</th><td>牛乳900ml×2本・ヨーグルト200g×4個・バター200g×1個・チーズ（ゴーダ）100g×2個</td></tr>
                <tr><th>配送</th><td>クール便（冷蔵）</td></tr>
                <tr><th>賞味期限</th><td>発送から7〜14日（各商品により異なります）</td></tr>
                <tr><th>注意</th><td>冷蔵にて保存し、お早めにお召し上がりください</td></tr>
                <tr><th>提供者</th><td>有限会社 白峰高原牧場（☎ 0439-58-3100）</td></tr>
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
