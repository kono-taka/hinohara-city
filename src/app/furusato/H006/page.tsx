import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市産 旬の野菜詰め合わせ（8〜10種）｜ふるさと納税" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/furusato">ふるさと納税</a><span>›</span>
            <span>日野原市産 旬の野菜詰め合わせ（8〜10種）</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 200, height: 200, flexShrink: 0, border: "1px solid var(--border-light)", overflow: "hidden", position: "relative" }}>
              <img src="/images/furusato/furusato-h006.png" alt="商品写真" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>品番：H006　提供者：JAひのはら野菜部会</div>
              <h1 style={{ fontSize: 18, fontWeight: "bold", color: "var(--city-blue)", margin: "0 0 8px", lineHeight: 1.4 }}>
                日野原市産 旬の野菜詰め合わせ（8〜10種）
              </h1>
              <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 12px", fontSize: 13, marginBottom: 8 }}>
                <strong>寄附金額：8,000円以上</strong>
              </div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                発送時期：6月〜10月（月1回発送）<br />
                配送方法：6〜10月
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>商品のご説明</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              房総の豊かな土壌と清らかな水で育てた季節の野菜を、農家から直接お届けします。品目は季節・収穫状況に応じて変わりますが、とうもろこし・レタス・キャベツ・ミニトマト・ズッキーニ・えだまめ・じゃがいも・かぼちゃ等を旬に応じてセット。
            </p>
          </div>

          <div className="content-box">
            <h3>商品仕様</h3>
            <table className="content-table">
              <tbody>
                <tr><th>内容</th><td>8〜10種の旬の野菜（約3kg相当）</td></tr>
                <tr><th>配送</th><td>常温便（一部クール便）</td></tr>
                <tr><th>発送時期</th><td>6月〜10月（月1回発送・時期指定不可）</td></tr>
                <tr><th>注意</th><td>品目・数量は収穫状況により変動します</td></tr>
                <tr><th>提供者</th><td>JAひのはら野菜部会</td></tr>
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
