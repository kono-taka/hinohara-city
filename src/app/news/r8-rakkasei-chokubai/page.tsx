import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年産 落花生（らっかせい）直売所が開設されました",
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
            <span>令和8年産 落花生（らっかせい）直売所が開設されました</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月13日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年産 落花生（らっかせい）直売所が開設されました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年産の落花生が収穫の時期を迎え、市内の農家直売所が順次開設されています。日野原市は千葉県内でも有数の落花生産地のひとつであり、採れたての新鮮な落花生をお求めいただける絶好の機会です。ぜひご利用ください。
            </p>

            <div style={{ background: "#f5f0e8", border: "1px solid #c8b87a", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>直売所の開設期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月上旬〜11月上旬（予定）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※収穫状況により閉所時期が変動する場合があります。各農家直売所へ事前にお問い合わせください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な直売所（市内）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>地区</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>開設場所の目安</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["中央地区", "中央農産物直売所（市農協前）", "9:00〜17:00（売切れ次第終了）"],
                  ["北部地区", "農道沿い各農家直売ブース（新田・上原地内）", "8:30〜16:30頃"],
                  ["原野地区", "原野農産センター敷地内", "9:00〜16:00（土・日のみ）"],
                  ["白峰地区", "白峰高原入口付近 農産物即売テント", "10:00〜15:00頃"],
                ].map(([area, place, hours], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{area}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{place}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#555" }}>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※上記は例年の目安です。個別の農家直売所の場所・時間は農林振興課または各農協支所にお問い合わせください。<br />
              ※駐車スペースが限られる場合があります。譲り合ってご利用ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>販売品目と価格の目安</h3>
            <p>
              主な取扱品目は、生落花生（茹で用）・乾燥落花生（炒り豆用）・殻付き落花生です。
              品種は「千葉半立（ちばはんだち）」「郷の香（さとのか）」が中心で、大粒で風味豊かな地場産品です。
              価格は農家・品種・規格によって異なりますが、生落花生500g当たりおよそ300〜500円程度が多くなっています（令和8年現地参考価格）。
            </p>
            <p>
              茹で落花生用の生落花生はとくに鮮度が大切ですので、購入後はなるべく早くお召し上がりください。保存する場合は冷蔵もしくは茹でた後に冷凍保存をお勧めします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>移住・観光の方へ</h3>
            <p>
              日野原市の秋の味覚として、落花生は市外からも多くの方にお越しいただいております。
              公共交通でお越しの方は、JR久留里線沿線バスや市内循環バス「ひのはらライナー」をご利用ください。
              白峰高原方面との合わせた日帰りコースもお勧めです。
            </p>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月13日" />
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
