import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内",
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
            <span>発信日：2026年11月3日</span>
            <span>担当課：税務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 市民税・県民税（普通徴収）<strong>第3期</strong>の納期限が近づいております。
              お早めに納付いただきますようお願いいたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>第3期 納期限</strong><br />
              <span style={{ fontSize: 16, fontWeight: "bold" }}>令和8年11月30日（月）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※納期限を過ぎますと、延滞金が加算される場合があります。期限内のお支払いをお願いします。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付方法</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納付方法</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>詳細・取扱場所</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["金融機関・郵便局", "市内各金融機関および郵便局の窓口で納付できます（千葉銀行・京葉銀行・郵便局等）"],
                  ["市役所窓口", "税務課（1階）。平日8時30分〜17時15分"],
                  ["コンビニエンスストア", "納付書のバーコードを使用。30万円以下の納付書に限ります"],
                  ["スマートフォン決済", "PayPay・LINE Pay・d払い等でご利用いただけます（バーコード読み取り方式）"],
                  ["口座振替", "事前に金融機関でお手続きが必要です。第4期分から適用の場合は税務課へ"],
                ].map(([method, detail], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap", fontWeight: i === 0 ? undefined : undefined }}>{method}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#444" }}>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>令和8年度 普通徴収 納期一覧</h3>
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
                  ["第1期", "令和8年7月31日（金）", "納付済"],
                  ["第2期", "令和8年9月30日（水）", "納付済"],
                  ["第3期", "令和8年11月30日（月）", "今回"],
                  ["第4期", "令和9年2月2日（月）", ""],
                ].map(([ki, date, status], i) => (
                  <tr key={i} style={i === 2 ? { background: "#fff9e6" } : {}}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{ki}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12 }}>
                      {status === "納付済" ? <span style={{ color: "#666" }}>{status}</span> : status === "今回" ? <strong style={{ color: "#c0392b" }}>今回の納期</strong> : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p style={{ marginTop: 16 }}>
              納税通知書が手元にない場合や、住所変更・口座振替の手続きについては税務課窓口までお問い合わせください。
              また、一時的に納付が困難な場合は、早めにご相談ください。分割納付等のご相談に応じます。
            </p>

            <div style={{ background: "#fff9e6", border: "1px solid #e0c060", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【納付書を紛失された方へ】</strong><br />
              納付書を紛失された場合は、税務課窓口で再発行が可能です（本人確認書類をお持ちください）。
              来庁が困難な場合は電話またはFAX（0439-88-2211）にてご連絡ください。
            </div>
          </div>

          <PageInfo department="税務課" division="市民税係" tel="0439-88-1211（内線 211）" updated="令和8年11月3日" />
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
