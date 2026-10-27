import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 秋の農産物直売所（落花生・里芋）のご案内",
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
            <span>令和8年度 秋の農産物直売所（落花生・里芋）のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月27日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 秋の農産物直売所（落花生・里芋）のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内では現在、秋の恵みを代表する農産物「落花生」と「里芋」の収穫が最盛期を迎えています。
              市内各所の農産物直売所では、市内農家が丹精込めて育てた新鮮な秋の農産物を販売中です。ぜひこの機会にご利用ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主要直売所のご案内</h3>
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
                  ["農産物直売所「ひのはら畑の恵」", "中央地区 市農業公園内", "9:00〜16:00", "月曜日（祝日の場合は翌日）"],
                  ["白峰地区 農産物直売所", "白峰地区 白峰高原入口付近", "9:00〜15:00", "火・水曜日"],
                  ["原野地区 産直コーナー（道の駅ひのはら内）", "原野地区 国道沿い", "10:00〜17:00", "年中無休（年末年始を除く）"],
                ].map(([name, location, hours, closed], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{location}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#555" }}>{closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な取扱品目と販売期間の目安</h3>
            <div style={{ background: "#f8fdf4", border: "1px solid #b8d8b0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <div style={{ marginBottom: 10 }}>
                <strong>◆ 落花生（おおまさり・郷の香など）</strong><br />
                <span style={{ fontSize: 12, color: "#555" }}>収穫時期：9月下旬〜10月下旬　販売期間：10月末頃まで（数量限定）</span><br />
                <p style={{ marginTop: 4, marginBottom: 0 }}>
                  日野原市産の落花生は、大粒で風味豊かな「おおまさり」が特に人気です。
                  生落花生は塩ゆでにするとひと味違う秋の風味が楽しめます。数量に限りがありますので、お早めにお買い求めください。
                  乾燥落花生は11月以降も引き続き販売予定です。
                </p>
              </div>
              <div>
                <strong>◆ 里芋（土垂・石川早生など）</strong><br />
                <span style={{ fontSize: 12, color: "#555" }}>収穫時期：10月上旬〜11月中旬　販売期間：11月中旬頃まで</span><br />
                <p style={{ marginTop: 4, marginBottom: 0 }}>
                  ほくほくとした食感が特徴の市内産里芋は、豊かな土壌と昼夜の温度差により旨みが凝縮されています。
                  煮物やけんちん汁など、秋の食卓にぴったりの食材です。
                </p>
              </div>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>ふるさと納税返礼品への採用について</h3>
            <p>
              市内産の落花生（乾燥）および里芋は、日野原市のふるさと納税返礼品としてもご用意しております。
              市外にお住まいのご家族・ご友人へのお取り寄せにもご活用ください。詳細は<a href="/furusato">ふるさと納税のページ</a>をご覧ください。
            </p>

            <div style={{ background: "#fff8e6", border: "1px solid #e8c96e", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 12, color: "#555" }}>
              <strong>【農産物の在庫状況について】</strong><br />
              在庫状況は日により異なります。遠方からお越しの方は、お電話にて事前にご確認いただくことをお勧めします。
              また、天候の影響により収穫量が変動する場合があります。あらかじめご了承ください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月27日" />
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
