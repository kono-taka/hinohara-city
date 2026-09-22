import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年産 落花生直売所の開設について",
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
            <span>令和8年産 落花生直売所の開設について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年9月22日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年産 落花生直売所の開設について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内産の落花生（千葉半立・おおまさり）が収穫期を迎えました。今年も市内農家と農林振興課が連携し、市内3か所に直売所を設けます。
              収穫したての新鮮な落花生をぜひご利用ください。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>開設期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年9月22日（月）〜 10月19日（月）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※各直売所とも在庫がなくなり次第、当日の販売を終了します。早めにお越しください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所の場所・営業時間</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>場所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>定休日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["原野直売所", "原野地区 農業センター前（市道原野3号線沿い）", "9:00〜16:00", "水曜日"],
                  ["中央直売所", "中央地区 JA日野原 中央支店 駐車場内", "9:30〜16:00", "日・月曜日"],
                  ["北部直売所", "北部地区 北部公民館 横", "9:00〜15:00", "土・日・月曜日"],
                ].map(([name, location, hours, closed], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{location}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>販売品目・価格（目安）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>品目</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>規格</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>価格（税込）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["千葉半立（殻付き・生）", "500g袋", "450円"],
                  ["千葉半立（殻付き・生）", "1kg袋", "850円"],
                  ["おおまさり（殻付き・生）", "500g袋", "500円"],
                  ["おおまさり（殻付き・生）", "1kg袋", "950円"],
                ].map(([item, unit, price], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{item}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{unit}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※価格は目安です。生産農家の判断により変動する場合があります。<br />
              ※「おおまさり」は大粒で茹でて食べるのに適した品種です。収穫後は早めにお召し上がりください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>落花生の食べ方・保存について</h3>
            <p>
              生の落花生は傷みやすいため、購入後はなるべくお早めにお召し上がりください。茹で落花生は、殻付きのまま塩水（水1Lに塩大さじ2程度）で30〜40分ほど茹でると甘みが増し、おいしくいただけます。食べきれない分は、茹でてから冷凍保存することをお勧めします。
            </p>

            <div style={{ background: "#f5f9f0", border: "1px solid #b0cc99", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【今年の作柄について】</strong><br />
              令和8年産の落花生は、6月の適度な降雨と7〜8月の好天に恵まれ、昨年に比べて粒が充実した良質な仕上がりとなっています。農林振興課では、市内農家と連携して市産農産物の消費拡大に取り組んでいます。ぜひ日野原市の落花生をご賞味ください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年9月22日" />
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
