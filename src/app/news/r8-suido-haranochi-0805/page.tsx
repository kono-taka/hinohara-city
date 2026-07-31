import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "原野地区 配水管布設替え工事に伴う断水のお知らせ（8月5日）",
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
            <span>原野地区 配水管布設替え工事に伴う断水のお知らせ（8月5日）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月31日</span>
            <span>担当課：上下水道課</span>
            <span className="news-tag important" style={{ fontSize: 11 }}>重要</span>
          </div>

          <h1 className="page-title">原野地区 配水管布設替え工事に伴う断水のお知らせ（8月5日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              原野地区 中原野2丁目地内において老朽化した配水管（布設後約42年経過）の布設替え工事を実施するにあたり、下記のとおり断水が発生いたします。対象区域にお住まいの皆様には大変ご不便をおかけしますが、ご理解とご協力をお願いいたします。
            </p>

            <div style={{ background: "#fff3f3", border: "1px solid #e8a0a0", padding: "10px 14px", borderRadius: 3, marginBottom: 16 }}>
              <strong>断水期間中は水の使用ができません。</strong><br />
              事前に飲料水・生活用水を確保していただくようお願いいたします。給水車による応急給水は、対象地区の所定位置にて対応いたします。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>断水の概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["断水日時", "令和8年8月5日（水）　午前9時〜午後5時（予定）"],
                  ["断水区域", "原野地区 中原野2丁目 地内（約85世帯）"],
                  ["工事内容", "配水管（φ100mm）布設替え　延長 約190m"],
                  ["施工箇所", "市道 原野1号線（中原野2丁目 交差点付近〜同丁目末端）"],
                  ["施工業者", "（有）南部管工業　現場代理人：鈴木 正夫"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 170, textAlign: "left", fontWeight: "normal", verticalAlign: "top" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ marginTop: 12, fontSize: 12, color: "#555" }}>
              ※ 断水の開始・終了時刻は工事の進捗状況により前後する場合があります。<br />
              ※ 悪天候等により工事が延期となる場合は、上下水道課よりお知らせいたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>給水車設置場所（断水時間中）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>設置場所</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>対象地区の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["原野地区コミュニティセンター 駐車場", "中原野2丁目 全域"],
                ].map(([place, area]) => (
                  <tr key={place}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{place}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{area}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>通水（断水終了）後のお願い</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>通水後しばらくの間、蛇口から空気混じりの音がしたり、水が白く濁って見えることがあります。しばらく流していただくと通常の水質に戻ります。</li>
              <li>炊飯や調理等には、水が透明に戻ってからご使用ください。</li>
              <li>洗濯機の使用は、通水後30分程度経過してからお試しください（フィルターの清掃も推奨いたします）。</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>透析治療を受けている方・医療機器をご使用の方へ</h3>
            <p>
              透析治療や在宅医療機器をご使用の方は、断水が医療行為に影響を与える場合があります。かかりつけ医療機関に事前にご相談いただくとともに、心配な点がございましたら上下水道課までご連絡ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>事前に断水のお知らせを各戸にポスティングいたします（8月1日頃）。</strong><br />
              <span style={{ fontSize: 12, color: "#666" }}>
                ポスティングの対象に含まれていない場合や、ご不明な点がある場合は、上下水道課（管路整備係）までお問い合わせください。
              </span>
            </div>

            <p style={{ color: "#666", fontSize: 12, marginTop: 16 }}>
              ※ 本工事は、老朽化した配水管の更新を計画的に進める「日野原市水道管路更新事業（第3期）」の一環として実施するものです。安心・安全な水道水の安定供給のため、引き続き皆様のご理解をお願いいたします。
            </p>
          </div>

          <PageInfo department="上下水道課" division="管路整備係" tel="0439-88-3131（内線 281）" updated="令和8年7月31日" />
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
