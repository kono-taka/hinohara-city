import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年産 落花生 農産物直売所のご案内（北部農産物直売センター）",
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
            <span>令和8年産 落花生 農産物直売所のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月9日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年産 落花生 農産物直売所のご案内（北部農産物直売センター）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年の落花生収穫が始まりました。日野原市北部地区を中心とする農家が丹精込めて育てた新鮮な落花生を、
              北部農産物直売センターにてお求めいただけます。今年は天候にも恵まれ、実入りの良い出来となっております。
              ぜひご利用ください。
            </p>

            <div style={{ background: "#f5f0e8", border: "1px solid #c8a870", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>北部農産物直売センター 直売情報</strong>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 8 }}>
                <tbody>
                  {[
                    ["開設期間", "令和8年10月9日（木）〜11月上旬予定\n（在庫状況により早期終了となる場合があります）"],
                    ["営業日", "木曜日・土曜日・日曜日"],
                    ["営業時間", "9:00〜16:00\n（売り切れ次第終了）"],
                    ["所在地", "日野原市北部地区 国道410号沿い「北部農産物直売センター」\n（市民文化センターから北へ約5km）"],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <td style={{ border: "1px solid #c8a870", padding: "6px 10px", background: "#ede3d0", fontWeight: "bold", whiteSpace: "nowrap", width: "30%" }}>{label}</td>
                      <td style={{ border: "1px solid #c8a870", padding: "6px 10px", whiteSpace: "pre-line" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>取扱品目・価格の目安</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#ede3d0" }}>
                  <th style={{ border: "1px solid #c8a870", padding: "6px 10px", textAlign: "left" }}>品種・形態</th>
                  <th style={{ border: "1px solid #c8a870", padding: "6px 10px", textAlign: "left" }}>価格（税込）</th>
                  <th style={{ border: "1px solid #c8a870", padding: "6px 10px", textAlign: "left" }}>備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["おおまさり（生・さやつき）500g", "350円〜", "茹で落花生用。新鮮なうちにお召し上がりください"],
                  ["おおまさり（生・さやつき）1kg", "650円〜", ""],
                  ["千葉半立（乾燥・さやつき）500g", "450円〜", "炒り豆・煮豆に最適。保存がきく"],
                  ["千葉半立（乾燥・さやつき）1kg", "850円〜", ""],
                  ["落花生みそ（加工品）1袋", "500円", "農家手作り。数量限定"],
                ].map(([item, price, note], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #c8a870", padding: "6px 10px" }}>{item}</td>
                    <td style={{ border: "1px solid #c8a870", padding: "6px 10px", whiteSpace: "nowrap" }}>{price}</td>
                    <td style={{ border: "1px solid #c8a870", padding: "6px 10px", fontSize: 12, color: "#555" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※価格は農家の出荷状況により変動する場合があります。<br />
              ※品切れの場合はご容赦ください。入荷状況はセンターに直接お問い合わせください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>おすすめの食べ方</h3>
            <p>
              <strong>茹で落花生（おおまさり）：</strong>生のさやつき落花生を水洗いし、3〜4%の塩水で40〜50分ほど茹でてお召し上がりください。
              ほくほくとした食感と豊かな風味が特徴です。購入後はできるだけ早めに（当日または翌日中に）茹でることをおすすめします。
            </p>
            <p>
              <strong>炒り落花生（千葉半立）：</strong>フライパンまたはオーブンで弱火からじっくり加熱してお楽しみください。
              乾燥品は常温でお保ちいただけますが、開封後はお早めにお召し上がりください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>お問い合わせ先</h3>
            <p>
              北部農産物直売センター（営業日のみ）：<strong>0439-88-XXXX</strong>（日野原市農協 北部支所 代表）<br />
              市役所 農林振興課：<strong>0439-88-1271（内線 271）</strong>
            </p>

            <div style={{ background: "#f5f0e8", border: "1px solid #c8a870", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【里芋の収穫もまもなく】</strong><br />
              日野原市の秋の味覚「里芋」も、10月下旬〜11月にかけて収穫の最盛期を迎えます。
              準備が整い次第、北部農産物直売センターおよび市内各直売所にて販売予定です。詳細は農林振興課または各直売所にお問い合わせください。
            </div>
          </div>

          <PageInfo department="農林振興課" tel="0439-88-1271（内線 271）" updated="令和8年10月9日" />
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
