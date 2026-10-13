import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 固定資産税・都市計画税（第3期）納期限のご案内",
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
            <span>令和8年度 固定資産税・都市計画税（第3期）納期限のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月13日</span>
            <span>担当課：税務課</span>
            <span className="news-tag important" style={{ fontSize: 11 }}>重要</span>
          </div>

          <h1 className="page-title">令和8年度 固定資産税・都市計画税（第3期）納期限のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 固定資産税・都市計画税の第3期納期限が近づいています。お手元の納付書にてお早めにお支払いください。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>第3期 納期限</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月31日（土）→ 振替納付期限：令和8年11月2日（月）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※10月31日は土曜日のため、金融機関窓口での納付は翌営業日（11月2日・月曜日）が期限となります。コンビニ・スマートフォン決済は10月31日（土）まで可能です。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>令和8年度 固定資産税・都市計画税 納期限一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>期</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納期限</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>状況</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["第1期", "令和8年6月30日（火）", "納付済"],
                  ["第2期", "令和8年9月1日（月）", "納付済"],
                  ["第3期", "令和8年10月31日（土）→ 11月2日（月）", "★ 今期の納期限"],
                  ["第4期", "令和9年2月2日（月）", "—"],
                ].map(([k, v, s], i) => (
                  <tr key={i} style={i === 2 ? { background: "#fff8f0", fontWeight: "bold" } : {}}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: i === 2 ? "#c06000" : "#888" }}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付方法</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
              <li><strong>金融機関窓口</strong>：千葉銀行・千葉興業銀行・京葉銀行・日野原市農協ほか各指定金融機関</li>
              <li><strong>コンビニエンスストア</strong>：バーコード付き納付書（30万円以下）に限る</li>
              <li><strong>スマートフォン決済</strong>：PayPay・LINE Pay・au PAY・d払い（納付書のバーコードを読み取り）</li>
              <li><strong>口座振替</strong>：登録済みの方は期限日に自動引き落としとなります。残高不足にご注意ください。</li>
              <li><strong>市役所窓口</strong>：平日8:30〜17:15（税務課）</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666" }}>
              ※納付書をお持ちでない場合や紛失された場合は、税務課窓口にてお申し出ください。<br />
              ※督促状・催告状が届いた場合は、お早めに税務課へご相談ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>延滞金について</h3>
            <p>
              納期限を過ぎた場合、翌日より延滞金が発生します。延滞金は地方税法の規定に基づき計算されます（令和8年度の延滞金率：納期限から1ヶ月以内2.4%、1ヶ月超8.7%の年率）。早めのお支払いをお勧めします。
            </p>
            <p>
              特別な事情により納付が困難な場合は、分割納付のご相談も承っております。お気軽に税務課までお問い合わせください。
            </p>
          </div>

          <PageInfo department="税務課" division="固定資産税係" tel="0439-88-1211（内線 211）" updated="令和8年10月13日" />
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
