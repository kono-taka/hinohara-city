import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お盆期間中の市役所窓口・業務取扱について（令和8年度）",
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
            <span>お盆期間中の市役所窓口・業務取扱について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年8月4日</span>
            <span>担当課：市民課・総務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">お盆期間中の市役所窓口・業務取扱について（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年のお盆期間（8月11日〜8月16日）中における市役所窓口および各部署の業務取扱状況についてお知らせします。手続きのご予定がある方は、下記の開庁スケジュールをご確認のうえ、ご来庁ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>開庁スケジュール</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>日　程</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>開庁状況</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>備　考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["8月11日（火）", "閉　庁", "山の日（国民の祝日）"],
                  ["8月12日（水）", "通常開庁　8:30〜17:15", ""],
                  ["8月13日（木）", "通常開庁　8:30〜17:15", ""],
                  ["8月14日（金）", "通常開庁　8:30〜17:15", ""],
                  ["8月15日（土）", "閉　庁", "（通常の土曜閉庁と同様）"],
                  ["8月16日（日）", "閉　庁", "（通常の日曜閉庁と同様）"],
                ].map(([day, status, note]) => (
                  <tr key={day}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{day}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", color: status.includes("閉") ? "#c00" : "inherit", fontWeight: status.includes("閉") ? "bold" : "normal" }}>{status}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#666" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 8月11日（火）は「山の日」のため、市役所・各公民館・図書館等の公共施設は休館となります。<br />
              ※ お盆期間（8月12日〜14日）の平日は通常どおり開庁しておりますが、例年この時期は窓口が混雑する傾向があります。お時間に余裕をもってご来庁ください。
            </p>

            <div style={{ background: "#eef7ee", border: "1px solid #9ccf9c", padding: "10px 14px", borderRadius: 3, marginTop: 16, marginBottom: 16 }}>
              <strong>コンビニ証明書交付サービスのご利用をお勧めします</strong>
              <p style={{ margin: "6px 0 0", fontSize: 13 }}>
                マイナンバーカードをお持ちの方は、コンビニエンスストア（セブン‐イレブン・ローソン・ファミリーマート等）のマルチコピー機から、住民票の写し・印鑑登録証明書・課税証明書等を早朝から深夜まで（6:30〜23:00）取得することができます（年末年始を除く）。窓口へのご来庁なしに手続きが完了しますので、ぜひご利用ください。
              </p>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>各種サービスの取扱いについて</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>サービス</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>8月11日（祝）</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>8月12日〜14日（平日）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["住民票・各種証明書の窓口交付", "✕ 休止", "○ 通常取扱"],
                  ["コンビニ証明書交付", "○ 利用可（6:30〜23:00）", "○ 利用可（6:30〜23:00）"],
                  ["戸籍・転出入届の受付", "✕ 休止（※1）", "○ 通常取扱"],
                  ["国民健康保険の手続き", "✕ 休止", "○ 通常取扱"],
                  ["ごみ収集（可燃・不燃）", "✕ 休収（※2）", "○ 通常収集"],
                  ["水道緊急連絡（漏水等）", "○ 24時間対応", "○ 24時間対応"],
                ].map(([service, holiday, weekday]) => (
                  <tr key={service}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{service}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", color: holiday.includes("✕") ? "#c00" : "inherit" }}>{holiday}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{weekday}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※1 戸籍届（出生・死亡・婚姻等）は、時間外・休日でも市役所守衛室（1階）にて受付します（宿直対応）。<br />
              ※2 8月11日（山の日）のごみ収集については、別途「<a href="/news/r8-gomi-obon" style={{ color: "var(--link-color)" }}>山の日・お盆期間中のごみ収集について</a>」をご参照ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>緊急連絡先</h3>
            <p>
              夜間・休日に緊急の用件が発生した場合は、下記の連絡先にご連絡ください。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["水道の漏水・断水（緊急）", "0439-88-1275（上下水道課 24時間緊急専用）"],
                  ["火災・救急", "119番"],
                  ["事件・事故", "110番"],
                  ["DV・ハラスメント相談", "よりそいホットライン　0120-279-338（24時間）"],
                ].map(([category, contact]) => (
                  <tr key={category}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold", whiteSpace: "nowrap", background: "#eef3f8", width: "35%" }}>{category}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: "#fff8e1", border: "1px solid #f9c740", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>【熱中症・食中毒に注意してください】</strong><br />
              お盆期間は気温が高く、熱中症や食中毒のリスクが高まります。こまめな水分補給と冷房の適切な使用を心がけるとともに、食品の管理にもご注意ください。体調不良を感じた場合は、無理をせず早めに医療機関へご相談ください。
            </div>
          </div>

          <PageInfo department="市民課・総務課" tel="0439-88-1201（市民課 内線201）" updated="令和8年8月4日" />
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
