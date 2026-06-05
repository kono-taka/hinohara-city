import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "第19回 日野原やまびこ祭り 開催のお知らせ（6月14日・15日）",
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
            <span>第19回 日野原やまびこ祭り 開催のお知らせ</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月27日</span>
            <span>担当課：観光振興課・やまびこ祭り実行委員会</span>
            <span className="news-tag event" style={{ fontSize: 11 }}>イベント</span>
          </div>

          <h1 className="page-title">第19回 日野原やまびこ祭り 開催のお知らせ（6月14日・15日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              毎年恒例の「日野原やまびこ祭り」を今年も開催いたします。地元の食・伝統文化・音楽が一堂に集まる2日間です。ぜひご家族・お友達と一緒にお越しください。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>開催概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["日時", "6月14日（土）12:00〜21:00 ／ 6月15日（日）10:00〜20:00"],
                  ["会場", "中央公園特設会場（日野原市中央1丁目）"],
                  ["花火大会", "6月14日（土）20:00〜（約2,000発）"],
                  ["屋台・出店", "約80店（地元グルメ・物産・クラフト等）"],
                  ["入場料", "無料"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 110, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>駐車場・シャトルバス</h3>
            <p>
              会場周辺の駐車場は大変混雑が予想されます。市総合体育館駐車場（約500台）をご利用のうえ、シャトルバスをご活用ください。シャトルバスは両日とも9:30〜22:00の間、約15分間隔で運行します。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>荒天時の対応</h3>
            <p>
              荒天等による中止・変更の場合は、市公式SNS（X・Instagram・LINE公式アカウント）にてお知らせします。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>観光振興課　☎ 0100-88-1138（平日 8:30〜17:15）</p>
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
