import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "第19回 日野原やまびこ祭り 開催に伴う交通規制・臨時駐車場のご案内",
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
            <span>第19回 日野原やまびこ祭り 開催に伴う交通規制・臨時駐車場のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年6月12日</span>
            <span>担当課：観光振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">第19回 日野原やまびこ祭り 開催に伴う交通規制・臨時駐車場のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年6月14日（土）・15日（日）に中央公園特設会場で開催される「第19回 日野原やまびこ祭り」について、当日は会場周辺に多くの来場者が予想されます。交通渋滞・駐車場不足の緩和のため、以下のとおり交通規制および臨時駐車場を設置いたします。ご来場の際はご協力をお願いいたします。
            </p>

            <div style={{ background: "#fff3f3", border: "1px solid #e8a0a0", padding: "10px 14px", borderRadius: 3, marginBottom: 16 }}>
              <strong>公共交通機関のご利用をお願いします</strong><br />
              当日は会場周辺の道路が大変混雑することが予想されます。できるだけ路線バス・無料シャトルバスをご利用ください。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>開催概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["開催日時", "令和8年6月14日（土）13:00〜21:00 ／ 6月15日（日）10:00〜20:00"],
                  ["会　場", "中央公園特設会場（日野原市中央一丁目）"],
                  ["主　催", "日野原やまびこ祭り実行委員会・日野原市"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold", whiteSpace: "nowrap", background: "#eef3f8", width: "25%" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>交通規制について</h3>
            <p>
              6月14日（土）・15日（日）の両日とも、12:00〜21:30の間、中央公園前交差点から中央三丁目交差点にかけての<strong>市道中央1号線（中央公園通り）</strong>を一般車両通行止めとします。また、<strong>駅前通り（市道2号線）</strong>は14日（土）の17:00〜21:30の間、片側交互通行となります。迂回路として、北部バイパス（国道409号）または農協前通りをご利用ください。
            </p>
            <p>
              なお、路線バス（千葉中央バス）は通常どおり運行しますが、交通規制の影響により一部路線で遅延が生じる場合があります。時刻に余裕をもってご利用ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>臨時駐車場のご案内</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>駐車場名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>場所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>台数</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["市役所西側臨時駐車場", "中央二丁目（市役所敷地内）", "約120台", "無料・シャトルバス乗降場あり"],
                  ["農業公園臨時駐車場", "下原地区（農業公園前広場）", "約80台", "無料・シャトルバス乗降場あり"],
                  ["中央小学校グラウンド", "中央三丁目（中央小学校）", "約60台", "6月15日（日）のみ開放"],
                ].map(([name, place, cap, note]) => (
                  <tr key={name}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{place}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{cap}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8 }}>
              ※ 中央公園周辺の一般有料駐車場は満車になることが予想されます。臨時駐車場のご利用をお願いします。<br />
              ※ 障がい者用駐車スペースは各臨時駐車場内に設けています。お体の不自由な方はお申し出ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>無料シャトルバスの運行について</h3>
            <p>
              市役所西側臨時駐車場および農業公園臨時駐車場から会場（中央公園前）まで、無料シャトルバスを運行します。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>日程</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>運行時間帯</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>運行間隔</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6月14日（土）", "12:30〜22:00（最終便は21:45発）", "約20分間隔"],
                  ["6月15日（日）", "9:30〜20:30（最終便は20:15発）", "約20分間隔"],
                ].map(([day, time, interval]) => (
                  <tr key={day}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{day}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{time}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{interval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8 }}>
              ※ 大型バスへの乗車は定員になり次第、次便をお待ちいただく場合があります。<br />
              ※ シャトルバス乗降場の詳細は、各臨時駐車場内の案内板でご確認ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>お問い合わせ先</strong>
              <span style={{ display: "block", marginTop: 6 }}>
                ・観光振興課（☎ 0100-88-1283　内線 283）平日 8:30〜17:15<br />
                ・祭り当日のお問い合わせ：会場入口案内所（随時対応）<br />
                ・交通規制に関するお問い合わせ：建設課（☎ 0100-88-1261　内線 261）
              </span>
            </div>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>観光振興課　☎ 0100-88-1283（内線 283）（平日 8:30〜17:15）</p>
          </div>
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
