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
            <span>発信日：2026年9月25日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内落花生直売所が開設されました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内の落花生が収穫の時期を迎え、令和8年9月25日（木）より、市内各所の農産物直売所において令和8年産落花生の販売が始まりました。
            </p>
            <p>
              市内産の落花生は、山間部の豊かな土壌と昼夜の寒暖差を活かして育てられており、ホクホクとした食感と豊かな甘みが特徴です。令和8年産は生育期間中の天候に恵まれ、例年以上の品質に仕上がっています。ぜひこの機会にご賞味ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>市内落花生直売所一覧（令和8年度）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>販売予定期間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["道の駅 ひのはら（産直コーナー）", "中央地区 市道中央幹線沿い", "9:00〜17:00（火曜定休）", "9月25日〜10月中旬"],
                  ["農産物直売所 はらの里（原野地区）", "原野地区 原野川沿い", "8:30〜16:30（水曜定休）", "9月25日〜10月下旬"],
                  ["ふれあいファーム ひのはら（北部地区）", "北部地区 国道沿い", "9:00〜17:00（木曜定休）", "9月27日〜10月末"],
                ].map(([name, place, hours, period], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{place}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{period}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※販売数量には限りがあります。売り切れ次第終了となりますのでお早めにお越しください。<br />
              ※天候等の事情により、販売開始日・終了日が前後する場合があります。各直売所へ事前にご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>商品のご案内</h3>
            <ul style={{ paddingLeft: 20, margin: "0 0 12px" }}>
              <li>生落花生（茹で用）：500g入り 350円〜</li>
              <li>乾燥落花生（煎り用）：500g入り 400円〜</li>
              <li>さやつき落花生（大袋）：2kg入り 1,200円〜</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666" }}>
              ※価格は生産者・品種ごとに異なります。数量・価格の詳細は各直売所へお問い合わせください。
            </p>

            <div style={{ background: "#f0fff0", border: "1px solid #99cc99", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【落花生の美味しい食べ方】</strong><br />
              生落花生は収穫直後が最も甘みが強く、塩茹でにするとホクホクとした食感をお楽しみいただけます。茹で時間の目安は、沸騰後30〜40分程度です。乾燥落花生はフライパンで中火のまま10〜15分ほど煎ると、香ばしい風味が引き立ちます。ぜひご家庭でお試しください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年9月25日" />
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
