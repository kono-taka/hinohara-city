import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内落花生直売所が開設されました",
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
            <span>令和8年度 市内落花生直売所が開設されました</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月20日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内落花生直売所が開設されました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市は千葉県内有数の落花生産地として知られており、毎年秋の収穫期に合わせて市内各所に直売所が開設されます。
              令和8年度の落花生直売所が、10月18日（日）より順次開設されましたのでお知らせします。
              新鮮な採れたての落花生をぜひお求めください。
            </p>

            <div style={{ background: "#f9f4e8", border: "1px solid #d4b860", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 販売期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月18日（日）〜 11月3日（月・祝）頃まで</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※収穫量・天候により、販売終了日が前後する場合があります。売り切れ次第終了となる直売所もありますので、お早めにお越しください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な直売所一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>場所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>定休日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ひのはら農産物直売所「みのり」", "中央地区 市道幹線1号沿い（旧JAひのはら中央支店前）", "9:00〜17:00", "水曜日"],
                  ["北部ファームマーケット", "北部地区 北部農業センター駐車場内", "9:00〜16:30", "月曜日"],
                  ["原野産直コーナー", "原野地区 原野公民館横", "10:00〜16:00", "火・木曜日"],
                  ["白峰地区農産物販売所", "白峰地区 白峰地区センター前", "9:30〜15:00", "土・日曜日以外"],
                ].map(([name, loc, hours, closed], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{loc}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※上記以外にも、市内各農家による路地販売が各所で行われています。<br />
              ※駐車場については各直売所周辺の指定場所をご利用ください。路上駐車はご遠慮ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な販売品目・価格の目安</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>品目</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>規格</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>価格（目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["生落花生（おおまさり）", "500g袋", "350〜400円"],
                  ["生落花生（おおまさり）", "1kg袋", "680〜750円"],
                  ["乾燥落花生", "500g袋", "500〜600円"],
                  ["里芋（石川早生・土垂）", "1kg袋", "350〜400円"],
                  ["加工品（落花生味噌・ピーナッツバターなど）", "各種", "各直売所により異なります"],
                ].map(([item, size, price], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{item}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{size}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※価格は各生産者が設定しています。記載の価格はあくまで目安であり、変動する場合があります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>日野原市の落花生について</h3>
            <p>
              日野原市の落花生は、温暖な気候と水はけのよい砂質土壌に恵まれた市内北部・中央地区を中心に栽培されています。
              大粒品種「おおまさり」はゆで落花生として人気が高く、甘みと香りが豊かで、市外からも多くの方が求めにいらっしゃいます。
              収穫直後の新鮮な生落花生を塩ゆでにしてお召し上がりいただくのがおすすめです。
            </p>
            <p>
              また、同時期に里芋（石川早生・土垂）の収穫も最盛期を迎えており、各直売所で取り扱っています。
              秋の食卓にぜひ日野原市の農産物をお役立てください。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【ご来場の際のお願い】</strong><br />
              ・直売所周辺は農道・住宅地に隣接しています。速度を落とし、近隣住民の方への配慮をお願いします。<br />
              ・ゴミは必ずお持ち帰りください。<br />
              ・混雑時は入場を整理させていただく場合があります。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月20日" />
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
