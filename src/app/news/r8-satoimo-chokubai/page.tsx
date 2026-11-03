import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内里芋直売所 開設のお知らせ",
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
            <span>令和8年度 市内里芋直売所 開設のお知らせ</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月3日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内里芋直売所 開設のお知らせ</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内の里芋農家では、今年度も収穫作業がほぼ終了し、採れたての里芋の販売が始まっています。
              市内直売所では、新鮮な地場産里芋をお買い求めいただけます。どうぞお越しください。
            </p>

            <div style={{ background: "#f4faee", border: "1px solid #a8cc88", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 里芋直売期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月下旬 〜 令和8年12月上旬（予定）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※在庫状況により、販売終了日が前後する場合があります。お早めにお求めください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業日・時間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["道の駅 ひのはら産直コーナー", "中央地区 国道410号沿い", "毎日 9:00〜17:00"],
                  ["原野農産物直売所", "原野地区 原野公民館隣", "土・日・祝日 9:00〜14:00"],
                  ["白峰ふるさと市場", "白峰地区 市道白峰線沿い", "金・土・日 9:00〜15:00"],
                  ["農業公園 ひのはら野菜市", "中央地区 日野原農業公園内", "毎日 10:00〜16:00（火曜定休）"],
                ].map(([name, loc, time], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#444" }}>{loc}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#444" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666" }}>
              ※上記のほか、市内各集落での農家直売を行っている場合がありますので、農林振興課までお問い合わせください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>今年度の里芋について</h3>
            <p>
              令和8年度産の里芋は、夏場の適度な降雨と9月以降の好天に恵まれ、例年並みかそれ以上の豊作となっています。
              日野原市の里芋は「土垂（どたれ）」系の品種が中心で、粘りが強くとろりとした食感が特徴です。
              煮物・汁物はもちろん、里芋ごはんや里芋コロッケなど、様々な料理に活用いただけます。
            </p>
            <p>
              市内の農家が丹精込めて育てた里芋をぜひご賞味ください。また、ふるさと納税の返礼品としても発送を承っております（12月上旬の申込受付分まで。詳細は<a href="/furusato" style={{ color: "var(--link-color)" }}>ふるさと納税のページ</a>をご覧ください）。
            </p>

            <div style={{ background: "#f0fff0", border: "1px solid #99cc99", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【農家の皆様へ】直売所への出荷登録について</strong><br />
              来年度以降の直売所出荷に関心のある農家の方は、農林振興課（内線271）にご連絡ください。
              出荷登録・衛生管理等の説明会を随時実施しております。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年11月3日" />
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
