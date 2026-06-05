import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市立保育所・認定こども園の一時預かり保育について",
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
            <span>令和8年度 市立保育所・認定こども園の一時預かり保育について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月16日</span>
            <span>担当課：子育て支援課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市立保育所・認定こども園の一時預かり保育について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の一時預かり保育の実施概要をお知らせします。保護者の就労・通院・リフレッシュ等の理由により、一時的に保育が必要なご家庭はご活用ください。在園児でない方もご利用いただけます。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>対象施設</h3>
            <ul style={{ paddingLeft: 20, margin: "4px 0" }}>
              <li>市立ひのはら保育所（日野原市中央2丁目）</li>
              <li>市立北部保育所（日野原市北部1丁目）</li>
              <li>市立原野保育所（日野原市原野地区）</li>
            </ul>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>利用概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["対象", "生後6か月〜就学前の子ども（在園児でない方も可）"],
                  ["利用料", "1日2,000円（給食あり・給食費込み）"],
                  ["定員", "1施設あたり3名程度（定員に限りがあります）"],
                  ["受付時間", "月〜金曜日 7:30〜18:00（祝日・年末年始を除く）"],
                  ["予約方法", "利用希望日の前日17時までに各施設へお電話ください"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 120, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 12 }}>
              初めてご利用の方は、事前に子育て支援課または各保育所へご相談ください。お子様の健康状態やアレルギー等について確認させていただきます。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>子育て支援課　☎ 0100-88-1123（平日 8:30〜17:15）</p>
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
