import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 日野原産落花生の直売所が開設されました",
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
            <span>令和8年度 日野原産落花生の直売所が開設されました</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月2日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 日野原産落花生の直売所が開設されました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の落花生収穫シーズンを迎え、市内各農園において直売所が開設されました。
              今年度は夏場の日照と降水量のバランスが良く、例年より粒が大きくふっくらとした仕上がりとなっています。
              千葉県産落花生の中でも日野原産は甘みとコクが特徴です。ぜひ旬の味をお楽しみください。
            </p>
            <p>
              落花生は生（なま）・茹で・煎りとさまざまな形でお楽しみいただけます。収穫直後の生落花生は塩茹でにすることで独特のやわらかさと甘みが引き立ちます。お早めにお求めください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>主な直売所一覧（令和8年10月2日現在）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>販売終了予定</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["原野農産物直売所（あぐりひのはら）", "原野地区 下原345番地先（県道沿い）", "9:00〜17:00（月曜定休）", "10月下旬"],
                  ["北部農家直売所（北の恵み）", "北部地区 市道北部線沿い（北部公民館前）", "9:00〜16:00（売切次第終了）", "10月中旬"],
                  ["中央地区ファーマーズマーケット", "中央地区 市役所通り沿い（市役所南隣駐車場内）", "10:00〜15:00（土・日のみ）", "10月下旬"],
                ].map(([name, addr, hours, end]) => (
                  <tr key={name}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{addr}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 天候や収穫状況により、在庫がなくなり次第終了する場合があります。お越しの前に各直売所へお問い合わせください。<br />
              ※ 上記以外にも農家個人での直売を行っている場合があります。詳しくは農林振興課にご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>販売品目と価格の目安</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>品目</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容量</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>価格の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["生落花生（半立）", "500g入り袋", "350〜450円程度"],
                  ["生落花生（半立）", "1kg入り袋", "680〜800円程度"],
                  ["煎り落花生", "200g入り袋", "400〜500円程度"],
                ].map(([item, qty, price], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{item}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{qty}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 6, fontSize: 12, color: "#666" }}>
              ※ 価格は農家・直売所によって異なります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>ふるさと納税返礼品としての落花生</h3>
            <p>
              日野原産落花生は市のふるさと納税返礼品にも選ばれています。令和8年度産は10月中旬より順次発送予定です。遠方にお住まいのご家族・知人の方へのご利用もぜひご検討ください。詳しくはふるさと納税申込みページをご確認ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>落花生栽培に関心のある方へ</strong><br />
              農林振興課では、落花生をはじめとした農産物の新規就農支援・栽培相談を随時受け付けています。就農を検討されている方、栽培に興味のある方はお気軽にご連絡ください。
            </div>
          </div>

          <PageInfo department="農林振興課" tel="0439-88-1271（内線 271）" updated="令和8年10月2日" />
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
