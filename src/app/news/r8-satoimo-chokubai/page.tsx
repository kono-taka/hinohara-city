import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年産 日野原さといも直売所のご案内",
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
            <span>令和8年産 日野原さといも直売所のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月30日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年産 日野原さといも直売所のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内の農家グループ「日野原さといも生産者の会」では、令和8年産さといもの直売を開始します。
              市内の原野地区および中央地区の2か所に直売所を設置いたします。
              地元産のとれたてさといもをぜひお買い求めください。
            </p>

            <div style={{ background: "#f5f8f2", border: "1px solid #a8c890", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>開設期間・販売日</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月31日（土）〜 令和8年11月24日（月・振替休日）</span><br />
              <span style={{ fontSize: 12, color: "#555", marginTop: 4, display: "block" }}>
                販売日：毎週土・日・祝日　午前9時〜正午（売り切れ次第終了）<br />
                ※在庫状況により販売日以外に閉所となる場合があります。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所の場所</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>名称</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["原野さといも直売所", "原野地区 原野川沿い農産物集出荷場（原野交差点そば）", "駐車場あり（10台）"],
                  ["中央さといも直売所", "中央地区 市農業公園 第2駐車場内（仮設テント）", "駐車場共用（農業公園駐車場）"],
                ].map(([name, address, note], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{address}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#555" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>販売品目・価格（予定）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>品種</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容量</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>価格（税込）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["石川早生（いしかわわせ）", "約1kg袋", "400円"],
                  ["土垂（どだれ）", "約1kg袋", "400円"],
                  ["セレベス（赤芽芋）", "約500g袋", "300円"],
                  ["親芋・孫芋 詰め合わせ", "約2kg袋", "700円"],
                ].map(([variety, amount, price], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{variety}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{amount}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※価格・品種は収穫状況により変更となる場合があります。<br />
              ※現金のみのお取り扱いとなります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>日野原市のさといもについて</h3>
            <p>
              日野原市のさといもは、原野地区を中心とした山間の水田地帯で栽培されており、昼夜の気温差と清冽な用水が独特のほくほくとした食感を生み出します。
              「日野原さといも」として千葉県農産物地産地消推進事業の認定産品にも選ばれており、市内の直売所でのみお買い求めいただける地域の自慢の農産物です。
            </p>
            <p>
              さといもは煮物・汁物・揚げ物など幅広いお料理にお使いいただけます。ぜひこの機会に旬のさといもをお楽しみください。
            </p>

            <div style={{ background: "#fff8e8", border: "1px solid #e8c97a", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【農家との直接交流について】</strong><br />
              直売所では生産農家が直接販売にあたります。調理方法や保存方法などについてもお気軽にお声がけください。
              また、11月3日（月・文化の日）には原野直売所にてさといも掘り体験コーナー（有料・要予約）を開催予定です。
              詳細は農林振興課までお問い合わせください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月30日" />
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
