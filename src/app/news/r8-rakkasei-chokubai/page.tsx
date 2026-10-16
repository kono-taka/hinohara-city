import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内落花生直売所の開設について",
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
            <span>令和8年度 市内落花生直売所の開設について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月16日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内落花生直売所の開設について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内の落花生が収穫の時期を迎えました。今年度も市内農家の皆さまのご協力により、
              新鮮な落花生を市民・観光客の皆さまに直接お届けする直売所を下記のとおり開設します。
              千葉県内有数の産地として知られる日野原産の落花生を、ぜひご賞味ください。
            </p>

            <div style={{ background: "#f0f7e8", border: "1px solid #a8cc88", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 直売所 開設期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月16日（木）〜 令和8年11月9日（日）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※収穫状況により、在庫がなくなり次第閉所となる場合があります。お出かけ前にお電話でご確認ください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>定休日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ひのはら産直センター（中央地区）", "日野原市中央二丁目14番地", "9:00〜17:00", "火曜日"],
                  ["原野農産物直売所", "日野原市原野中町3番地先", "9:00〜16:00", "水曜日"],
                  ["白峰ふれあい市（白峰地区）", "日野原市白峰上原125番地", "10:00〜15:00", "月・火曜日"],
                  ["北部直売広場（北部地区）", "日野原市北部新田112番地", "9:00〜16:00", "木曜日"],
                ].map(([name, addr, hours, closed], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{addr}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※各直売所の駐車場には限りがあります。公共交通機関や乗り合わせでのご来場にご協力をお願いします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な販売品目と価格の目安</h3>
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
                  ["生落花生（おおまさり）", "1kg袋", "900円〜1,100円"],
                  ["生落花生（千葉半立）", "1kg袋", "700円〜900円"],
                  ["乾燥落花生", "500g袋", "600円〜800円"],
                  ["煎り落花生", "200g袋", "350円〜500円"],
                ].map(([item, size, price], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{item}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{size}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※価格は農家・収穫状況により変動する場合があります。また、在庫は毎日変わります。<br />
              ※各直売所では落花生のほか、里芋・さつまいも・野菜等も販売する場合があります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>日野原産落花生の食べ方</h3>
            <p>
              収穫直後の生落花生は、塩茹でにしてお召し上がりいただくのが特においしい食べ方です。
              たっぷりの塩水（水1リットルに対し塩30〜40g）で40〜50分ほど茹でると、ほくほくとした食感と豊かな風味が楽しめます。
              乾燥落花生は、炒り豆や各種料理にもお使いいただけます。
            </p>

            <div style={{ background: "#fff8e8", border: "1px solid #ddc870", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【ふるさと納税返礼品としてもお取り寄せいただけます】</strong><br />
              日野原市のふるさと納税では、日野原産落花生（おおまさり・千葉半立）を返礼品としてご用意しています。
              市外にお住まいのご家族・ご友人への贈り物にもぜひご利用ください。
              詳しくは<a href="/furusato" style={{ color: "var(--link-color)" }}>ふるさと納税のページ</a>をご覧ください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月16日" />
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
