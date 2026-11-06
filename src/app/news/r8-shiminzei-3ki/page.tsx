import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内（11月30日）",
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
            <span>発信日：2026年11月6日</span>
            <span>担当課：税務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内（11月30日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 市民税・県民税（普通徴収）第3期の納期限が近づいております。
              お手元の納税通知書をご確認のうえ、期限までにお納めくださいますようお願いいたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 第3期 納期限</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年11月30日（月）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※納期限当日は金融機関・市役所窓口が大変混み合う場合があります。お早めのお手続きをお勧めします。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納税方法</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納税方法</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>取扱場所・備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["金融機関窓口", "千葉銀行・京葉銀行・農協（JAちば東葛）・郵便局 等（納税通知書の裏面に記載の金融機関）"],
                  ["コンビニエンスストア", "バーコード付き納付書をお持ちください（1枚あたりの納付金額が30万円以下のもの）"],
                  ["市役所税務課窓口", "平日8:30〜17:15（市役所1階 税務課）"],
                  ["口座振替", "登録済みの方は、11月30日に指定口座から自動引き落としとなります"],
                  ["スマートフォン決済", "PayPay・LINEPay等（バーコード付き納付書が必要です）"],
                ].map(([method, note], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{method}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納期限を過ぎた場合</h3>
            <p>
              納期限を過ぎますと、延滞金が加算される場合があります。納付が困難な事情がある場合は、納期限前に税務課までご相談ください。
              分割納付や猶予制度についてご案内いたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>口座振替をご利用の方へ</h3>
            <p>
              口座振替をご登録の方は、令和8年11月30日（月）に指定口座より自動引き落としとなります。
              事前に残高のご確認をお願いいたします。なお、引き落とし日に残高不足等があった場合は、口座振替が行われませんのでご注意ください。
              その場合は、金融機関窓口・コンビニ等でお手続きください。
            </p>

            <div style={{ background: "#fff8e6", border: "1px solid #e0c46e", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【令和8年度 普通徴収 納期限一覧】</strong>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginTop: 8 }}>
                <thead>
                  <tr style={{ background: "#f5eccc" }}>
                    <th style={{ border: "1px solid #c8a830", padding: "4px 8px", textAlign: "left" }}>期</th>
                    <th style={{ border: "1px solid #c8a830", padding: "4px 8px", textAlign: "left" }}>納期限</th>
                    <th style={{ border: "1px solid #c8a830", padding: "4px 8px", textAlign: "left" }}>状況</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["第1期", "令和8年7月31日（金）", "納付済み"],
                    ["第2期", "令和8年9月30日（水）", "納付済み"],
                    ["第3期", "令和8年11月30日（月）", "今回"],
                    ["第4期", "令和9年2月2日（月）", "—"],
                  ].map(([ki, limit, status], i) => (
                    <tr key={i} style={status === "今回" ? { fontWeight: "bold", background: "#fefae8" } : {}}>
                      <td style={{ border: "1px solid #c8a830", padding: "4px 8px" }}>{ki}</td>
                      <td style={{ border: "1px solid #c8a830", padding: "4px 8px" }}>{limit}</td>
                      <td style={{ border: "1px solid #c8a830", padding: "4px 8px", color: status === "今回" ? "#b05010" : "#666" }}>{status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <PageInfo department="税務課" division="市民税係" tel="0439-88-1213（内線 213）" updated="令和8年11月6日" />
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
