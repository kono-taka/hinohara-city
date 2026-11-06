import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内里芋直売所が開設されました",
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
            <span>令和8年度 市内里芋直売所が開設されました</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月6日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内里芋直売所が開設されました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市の特産品である里芋の収穫期を迎え、令和8年11月6日（木）より市内各所の里芋直売所が開設されました。
              今年度は生育期間中の気候にも恵まれ、良質な里芋の収穫が期待されます。ぜひこの機会に地元の新鮮な里芋をお求めください。
            </p>

            <div style={{ background: "#f4f9f0", border: "1px solid #9ec87a", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 里芋直売所 開設期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年11月6日（木）〜 令和8年11月下旬（予定）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※在庫状況により、予定より早く終了する場合があります。各直売所へ事前にお電話でご確認いただくことをお勧めします。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>市内直売所一覧</h3>
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
                  ["原野農産物直売所", "日野原市原野地区 市道原野中央線沿い", "9:00〜16:00", "水・木曜日"],
                  ["北部ふれあい市場", "日野原市北部地区 JAちば東葛日野原北部出張所前", "8:30〜17:00", "日曜日"],
                  ["白峰高原農家直売コーナー", "日野原市白峰地区 白峰高原入口付近", "10:00〜15:00", "月・火曜日"],
                  ["中央地区 農産物販売所", "日野原市中央地区 市民会館駐車場内（臨時設置）", "9:00〜12:00", "土・日・祝日"],
                ].map(([name, place, hours, closed], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{place}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{closed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※販売数量は各農家の収穫量によります。売り切れの場合はご容赦ください。<br />
              ※天候・農作業の都合により、急遽販売が休止となる場合があります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>日野原市の里芋について</h3>
            <p>
              日野原市の里芋は、市内北部・原野地区を中心に栽培されており、粘り気が強く、やわらかな食感が特長です。
              煮物や汁物はもちろん、地元ではすり流しや芋煮鍋など秋の郷土料理に広く活用されています。
              JAちば東葛の直売所（市内各所）でもお求めいただけます。
            </p>

            <div style={{ background: "#f0f8ff", border: "1px solid #a0c4e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【農家からのお知らせ】</strong><br />
              今年度は生育期間中の降雨量が適切で、例年に比べ大粒の里芋が多く収穫できています。
              地元産の里芋をぜひご家庭の食卓にお役立てください。<br />
              <span style={{ fontSize: 12, color: "#555" }}>（原野地区生産者一同）</span>
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年11月6日" />
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
