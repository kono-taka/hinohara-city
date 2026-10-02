import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内（10月31日）",
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
            <span>令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月2日</span>
            <span>担当課：税務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内（10月31日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 市民税・県民税（普通徴収）第3期の納期限が近づいております。
              お手元の納税通知書（納付書）にてご確認のうえ、期限内のお納めをお願いいたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 市民税・県民税（普通徴収）第3期</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>納期限：令和8年10月31日（土）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※ 納期限が土曜日・日曜日・祝日にあたる場合は、翌営業日が納期限となります。<br />
                　令和8年10月31日（土）の場合、翌営業日は令和8年11月4日（水）となります。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>令和8年度 市民税・県民税（普通徴収）の納期一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>期別</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納期限</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>状況</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["第1期", "令和8年7月31日（金）", "納付済み"],
                  ["第2期", "令和8年9月30日（水）", "納付済み"],
                  ["第3期", "令和8年10月31日（土）→11月4日（水）", "納付期限"],
                  ["第4期", "令和9年1月31日（土）→2月2日（月）", "未到来"],
                ].map(([term, date, status], i) => (
                  <tr key={i} style={i === 2 ? { background: "#fffef0" } : {}}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: i === 2 ? "bold" : "normal" }}>{term}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: i === 2 ? "bold" : "normal" }}>{date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: i === 2 ? "#c00" : "#888" }}>{status}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付方法</h3>
            <ul style={{ paddingLeft: 18, lineHeight: 2 }}>
              <li><strong>金融機関・郵便局の窓口：</strong>お手元の納付書をお持ちください。</li>
              <li><strong>コンビニエンスストア：</strong>バーコード付きの納付書でご利用いただけます（1枚あたりの納付限度額：30万円未満）。</li>
              <li><strong>口座振替（自動振込）：</strong>口座振替をご利用中の方は、自動的に引き落としされます。通帳の残高をご確認ください。</li>
              <li><strong>スマートフォン決済：</strong>PayPay・LINE Pay等の対応アプリからバーコードを読み取ってお支払いいただけます。</li>
              <li><strong>市役所税務課窓口：</strong>平日8:30〜17:15（土・日・祝日を除く）</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>口座振替のご案内</h3>
            <p>
              市民税・県民税の口座振替（自動振込）を希望される方は、市内の金融機関窓口または市役所税務課で手続きができます。
              令和8年度第4期分（令和9年1月末納期限）から適用を希望される場合は、令和8年11月28日（金）までにお手続きください。
            </p>

            <div style={{ background: "#fff0f0", border: "1px solid #e0b0b0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>納期限を過ぎた場合について</strong><br />
              納期限を過ぎると、地方税法の規定に基づき延滞金が加算される場合があります。納付が困難な場合は、早めに税務課収納係までご相談ください。
            </div>
          </div>

          <PageInfo department="税務課" division="市民税係" tel="0439-88-1211（内線 211）" updated="令和8年10月2日" />
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
