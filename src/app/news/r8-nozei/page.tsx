import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市民税・固定資産税 納税通知書を発送しました",
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
            <span>令和8年度 市民税・固定資産税 納税通知書を発送しました</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月30日</span>
            <span>担当課：税務課</span>
            <span className="news-tag important" style={{ fontSize: 11 }}>重要</span>
          </div>

          <h1 className="page-title">令和8年度 市民税・固定資産税 納税通知書を発送しました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の市民税（住民税）および固定資産税・都市計画税の納税通知書を、5月30日（月）付で発送いたしました。数日中にお手元に届く予定です。
            </p>
            <p>
              今年度の第1期納付期限は<strong>6月30日（火）</strong>です。金融機関窓口・コンビニエンスストアのほか、スマートフォン決済アプリ（PayPay・LINE Pay）でも納付が可能です。納付書のバーコードを読み取るだけで簡単にお支払いいただけます。
            </p>
            <p>
              口座振替をご利用の方は、第1期分について登録口座より自動引き落としが行われます。引き落とし日は6月30日です。残高不足にご注意ください。口座振替の新規申込みは税務課窓口または各金融機関窓口にてお手続きください。
            </p>
            <p>
              課税額にご不明な点がある場合や、納税通知書が届かない場合は、税務課までお問い合わせください。なお、転出・転居等により住所変更がある場合は、別途確認が必要となる場合があります。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>納期限一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>期</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納期限</th>
                </tr>
              </thead>
              <tbody>
                {[["第1期", "令和8年6月30日（火）"], ["第2期", "令和8年9月1日（月）"], ["第3期", "令和8年10月31日（土）→11月2日（月）"], ["第4期", "令和9年2月2日（月）"]].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>税務課　☎ 0100-88-1116（平日 8:30〜17:15）</p>
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
