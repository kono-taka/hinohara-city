import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 落花生直売所の開設について（10月4日〜19日）",
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
            <span>令和8年度 落花生直売所の開設について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月6日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 落花生直売所の開設について（10月4日〜19日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市内の農家が丹精込めて育てた落花生の収穫シーズンを迎え、今年度も市内2か所に落花生直売所を開設しております。
              千葉県を代表する品種「千葉半立（ちばはんだち）」をはじめ、大粒で甘みの強い「おおまさり」など、採れたての新鮮な落花生をお求めいただけます。
              ぜひこの機会にお立ち寄りください。
            </p>

            <div style={{ background: "#f5f0e8", border: "1px solid #c8b88a", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>開設期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月4日（土）〜 10月19日（日）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※土曜日・日曜日のみ開設（平日は販売しておりません）<br />
                ※農産物の在庫状況によって、品切れの場合は早期閉所することがあります。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所の場所・営業時間</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>場所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["道の駅ひのはら 農産物コーナー", "中央地区 大久保1丁目地内（道の駅ひのはら敷地内）", "午前9時〜午後4時"],
                  ["原野農業センター 直売コーナー", "原野地区 原野町543番地（原野農業センター入口付近）", "午前9時〜正午（売り切れ次第終了）"],
                ].map(([name, address, hours], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{address}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>販売品目と目安価格（令和8年度）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>品目</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>規格</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>目安価格</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["生落花生（千葉半立）", "1kg袋", "500円（税込）"],
                  ["生落花生（おおまさり）", "500g袋", "400円（税込）"],
                  ["乾燥落花生（千葉半立・殻付き）", "500g袋", "350円（税込）"],
                  ["塩茹で落花生（当日調理・数量限定）", "約300g入りパック", "300円（税込）"],
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
              ※価格は農家・日によって変動する場合があります。<br />
              ※塩茹で落花生は原野農業センター直売コーナーのみの販売となります。数量に限りがございますので、お早めにお越しください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>落花生のおいしい食べ方</h3>
            <p>
              収穫直後の生落花生は、塩茹でにすると格別の甘みとほくほくとした食感が楽しめます。塩茹での目安は、水1リットルに対して塩大さじ3〜4杯（3〜4%の塩水）で、沸騰後30〜40分ほど茹でるのがおすすめです。
              乾燥落花生は煎って食べるほか、炊き込みごはんや和え物にもよく合います。
            </p>

            <div style={{ background: "#f0fff0", border: "1px solid #99cc99", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【農産物直売に関するお問い合わせ先】</strong><br />
              各直売所の品目・在庫状況については、農林振興課までお気軽にお問い合わせください。<br />
              また、日野原市産の農産物は市内道の駅・農産物直売所のほか、一部の市内スーパーでもお求めいただけます。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月6日" />
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
