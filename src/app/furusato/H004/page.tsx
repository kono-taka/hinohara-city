import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ひのはら味噌 熟成蔵出し2種セット（計2kg）｜ふるさと納税" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/furusato">ふるさと納税</a><span>›</span>
            <span>ひのはら味噌 熟成蔵出し2種セット（計2kg）</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 200, height: 200, flexShrink: 0, border: "1px solid var(--border-light)", overflow: "hidden", position: "relative" }}>
              <img src="/images/furusato/furusato-h004.png" alt="商品写真" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>品番：H004　提供者：日野原市味噌工房</div>
              <h1 style={{ fontSize: 18, fontWeight: "bold", color: "var(--city-blue)", margin: "0 0 8px", lineHeight: 1.4 }}>
                ひのはら味噌 熟成蔵出し2種セット（計2kg）
              </h1>
              <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 12px", fontSize: 13, marginBottom: 8 }}>
                <strong>寄附金額：12,000円以上</strong>
              </div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                発送時期：通年発送<br />
                配送方法：通年
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>商品のご説明</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              国産大豆・米麹・天然塩のみを使い、杉の木桶で1年以上じっくり熟成させた本格味噌。麦味噌（1kg）と米味噌（1kg）の食べ比べセットです。化学調味料・保存料は一切使用していません。
            </p>
          </div>

          <div className="content-box">
            <h3>商品仕様</h3>
            <table className="content-table">
              <tbody>
                <tr><th>内容</th><td>麦味噌 1kg＋米味噌 1kg（各真空パック）</td></tr>
                <tr><th>原材料</th><td>大豆（国産）・麹（米または麦）・食塩</td></tr>
                <tr><th>アレルギー</th><td>大豆（小麦を含む場合あり）</td></tr>
                <tr><th>保存方法</th><td>冷蔵保存（開封後は早めにご使用ください）</td></tr>
                <tr><th>賞味期限</th><td>発送から4か月</td></tr>
                <tr><th>提供者</th><td>日野原市味噌工房（日野原市下原）</td></tr>
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
