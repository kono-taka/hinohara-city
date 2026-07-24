import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "市民夏まつり2026 開催に伴う交通規制・臨時駐車場のご案内（8月3日）",
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
            <span>市民夏まつり2026 開催に伴う交通規制・臨時駐車場のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月24日</span>
            <span>担当課：観光振興課</span>
            <span className="news-tag event" style={{ fontSize: 11 }}>イベント</span>
          </div>

          <h1 className="page-title">市民夏まつり2026 開催に伴う交通規制・臨時駐車場のご案内（8月3日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年8月3日（月）に中央グラウンドで開催される「市民夏まつり2026」について、当日は会場周辺に多数の来場者が見込まれます。交通渋滞・駐車場不足の緩和のため、以下のとおり交通規制および臨時駐車場を設置いたします。ご来場の際は公共交通機関および臨時駐車場をご利用いただき、ご協力をお願いいたします。
            </p>

            <div style={{ background: "#fff3f3", border: "1px solid #e8a0a0", padding: "10px 14px", borderRadius: 3, marginBottom: 16 }}>
              <strong>公共交通機関のご利用をお願いします</strong><br />
              当日夕方以降は会場周辺の道路が大変混雑することが予想されます。お車でのご来場はできる限りお控えいただき、路線バス・無料シャトルバスをご利用ください。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>開催概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["開催日時", "令和8年8月3日（月）15:00〜21:00（花火打上げ 20:30〜）"],
                  ["会　場", "中央グラウンド（日野原市中央四丁目）"],
                  ["主な内容", "盆踊り大会、地元飲食・物産ブース、ステージアトラクション、花火大会"],
                  ["主　催", "日野原市民夏まつり実行委員会・日野原市"],
                  ["入　場", "無料（花火観覧エリアへの入場制限なし）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold", whiteSpace: "nowrap", background: "#eef3f8", width: "22%" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 雨天・荒天時は花火打上げのみ翌日（8月4日（火））に延期する場合があります。延期の場合は市公式ホームページおよび市防災行政無線でお知らせします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>交通規制について</h3>
            <p>
              8月3日（月）の<strong>15:30〜21:30</strong>の間、中央グラウンド周辺の<strong>市道 中央四丁目線（グラウンド前通り）</strong>を一般車両通行止めとします。また、<strong>市道 中央1号線（中央公園通り）</strong>は同時刻に片側交互通行となります。
            </p>
            <p>
              迂回路として、<strong>北部バイパス（国道409号）</strong>または<strong>農協前通り</strong>をご利用ください。なお、路線バス（千葉中央バス）は通常どおり運行しますが、交通規制の影響により一部路線で遅延が生じる場合があります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>臨時駐車場のご案内</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>駐車場名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>場所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>収容台数</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["市役所西側臨時駐車場", "中央二丁目（市役所敷地内）", "約100台", "無料・シャトルバス乗降場あり"],
                  ["中央小学校グラウンド", "中央三丁目（中央小学校）", "約80台", "無料・シャトルバス乗降場あり"],
                  ["農業公園臨時駐車場", "下原地区（農業公園前広場）", "約60台", "無料・シャトルバス乗降場あり"],
                ].map(([name, place, cap, note]) => (
                  <tr key={name}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{place}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{cap}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 臨時駐車場の開場は15:00、閉場は22:00の予定です。<br />
              ※ 障がい者用駐車スペースは市役所西側臨時駐車場内に4台分を設けています。お体の不自由な方はお申し出ください。<br />
              ※ 会場周辺の一般有料駐車場は満車が見込まれます。臨時駐車場のご利用をお願いします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>無料シャトルバスの運行について</h3>
            <p>
              市役所西側臨時駐車場・中央小学校グラウンド・農業公園臨時駐車場の各乗降場から会場（中央グラウンド 正面ゲート前）まで、無料シャトルバスを運行します。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>区間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>運行時間帯</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>運行間隔</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["各臨時駐車場 → 会場（行き）", "14:45〜20:00（最終便は19:45発）", "約15〜20分間隔"],
                  ["会場 → 各臨時駐車場（帰り）", "20:00〜22:00（最終便は21:45発）", "約15〜20分間隔"],
                ].map(([section, time, interval]) => (
                  <tr key={section}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{section}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{time}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 花火終了後（21:00頃）は帰宅者が集中し、乗車まで時間がかかる場合があります。お時間に余裕をもってご利用ください。<br />
              ※ 大型バスへの乗車は定員になり次第、次便をお待ちいただく場合があります。
            </p>

            <div style={{ background: "#fff8e1", border: "1px solid #f9c740", padding: "10px 14px", borderRadius: 3, marginTop: 16, marginBottom: 16, fontSize: 13 }}>
              <strong>【熱中症対策のお願い】</strong><br />
              開催当日は日中から気温が高くなることが予想されます。会場内には給水所・救護所を設置しておりますが、来場の際はお飲み物・帽子等を持参のうえ、こまめな水分補給にご注意ください。
            </div>

            <div style={{ background: "#f0f4ff", border: "1px solid #b0c4e8", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>お問い合わせ先</strong>
              <p style={{ margin: "6px 0 0" }}>
                ・観光振興課（☎ 0439-88-1283　内線 283）平日 8:30〜17:15<br />
                ・当日のお問い合わせ：会場案内所（開場時間中 随時対応）<br />
                ・交通規制に関するお問い合わせ：建設課（☎ 0439-88-1261　内線 261）
              </p>
            </div>
          </div>

          <PageInfo department="観光振興課" tel="0439-88-1283（内線 283）" updated="令和8年7月24日" />
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
