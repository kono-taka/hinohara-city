import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原産 落花生 煎り・ゆでセット（500g×2種）｜ふるさと納税" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/furusato">ふるさと納税</a><span>›</span>
            <span>日野原産 落花生 煎り・ゆでセット（500g×2種）</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 200, height: 200, flexShrink: 0, border: "1px solid var(--border-light)", overflow: "hidden", position: "relative" }}>
              <img src="/images/furusato/furusato-h003.png" alt="商品写真" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>品番：H003　提供者：日野原落花生生産組合</div>
              <h1 style={{ fontSize: 18, fontWeight: "bold", color: "var(--city-blue)", margin: "0 0 8px", lineHeight: 1.4 }}>
                日野原産 落花生 煎り・ゆでセット（500g×2種）
              </h1>
              <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 12px", fontSize: 13, marginBottom: 8 }}>
                <strong>寄附金額：5,000円以上</strong>
              </div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                発送時期：10月上旬〜11月末（収穫状況により前後する場合があります）<br />
                配送方法：常温便
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>商品のご説明</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              千葉県は全国1位の落花生産地。日野原市の農家が丹精込めて育てた新鮮な落花生を、香ばしく仕上げた「煎り落花生」と、やわらかくほくほくの「ゆで落花生」の2種類でお届けします。
              素材の甘みと風味をそのままに、ふたつの食べ方の違いをぜひお楽しみください。
            </p>
          </div>

          <div className="content-box">
            <h3>商品仕様</h3>
            <table className="content-table">
              <tbody>
                <tr><th>内容</th><td>煎り落花生（殻付き）500g × 1袋、ゆで落花生（真空パック）500g × 1袋</td></tr>
                <tr><th>原材料</th><td>落花生（千葉県日野原市産）・食塩（ゆで落花生のみ）</td></tr>
                <tr><th>アレルギー</th><td>落花生（特定原材料）</td></tr>
                <tr><th>保存方法</th><td>煎り: 常温・直射日光を避けて保存　ゆで: 冷蔵庫で保存（開封後はお早めに）</td></tr>
                <tr><th>賞味期限</th><td>煎り: 発送から3か月　ゆで: 発送から2週間</td></tr>
                <tr><th>提供者</th><td>日野原落花生生産組合</td></tr>
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
