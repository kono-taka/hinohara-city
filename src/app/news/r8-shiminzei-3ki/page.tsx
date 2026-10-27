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
            <span>発信日：2026年10月27日</span>
            <span>担当課：税務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市民税・県民税（普通徴収）第3期 納期限のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 市民税・県民税（普通徴収）第3期の納期限が近づいております。
              納付書に記載された税額を、下記の納期限までにお納めくださいますようお願いいたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>第3期 納期限</strong><br />
              <span style={{ fontSize: 17, fontWeight: "bold", color: "#1a3a6b" }}>令和8年11月30日（月）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※口座振替をご利用の方は、11月30日（月）に口座残高をご確認ください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付方法</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納付方法</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>取扱場所・備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["金融機関窓口・ATM", "千葉銀行・京葉銀行・ゆうちょ銀行・農協（JAちば東葛）など　納付書が必要です"],
                  ["コンビニエンスストア", "バーコード付きの納付書に限ります（1枚30万円未満）"],
                  ["市役所 税務課窓口", "平日 8:30〜17:15（土日祝日・年末年始は休業）"],
                  ["口座振替（自動引落）", "事前に税務課または金融機関での申込が必要です"],
                  ["地方税統一QRコード（eL-QR）", "スマートフォン決済アプリなど対応アプリからお支払い可能。納付書の2次元コードをご利用ください"],
                ].map(([method, detail], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold", whiteSpace: "nowrap" }}>{method}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12 }}>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付書を紛失された場合</h3>
            <p>
              納付書を紛失された場合は、税務課窓口にて再発行いたします。本人確認書類（マイナンバーカード・運転免許証等）をお持ちのうえ、窓口までお越しください。代理の方がお越しになる場合は、委任状が必要です。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付が困難な場合</h3>
            <p>
              災害・失業・疾病などのやむを得ない理由により納付が困難な場合は、徴収の猶予または分割納付の相談をお受けしています。納期限前にお早めに税務課へご相談ください。
            </p>

            <div style={{ background: "#fff8e6", border: "1px solid #e8c96e", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 12 }}>
              <strong>【令和8年度 普通徴収 納期一覧（参考）】</strong>
              <table style={{ marginTop: 8, borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
                <tbody>
                  {[
                    ["第1期", "令和8年7月31日（木）", "納付済"],
                    ["第2期", "令和8年9月30日（火）", "納付済"],
                    ["第3期", "令和8年11月30日（月）", "今回"],
                    ["第4期", "令和9年1月31日（土）", ""],
                  ].map(([period, due, note], i) => (
                    <tr key={i} style={{ background: note === "今回" ? "#fff0e0" : "transparent" }}>
                      <td style={{ border: "1px solid #ddd", padding: "4px 8px" }}>{period}</td>
                      <td style={{ border: "1px solid #ddd", padding: "4px 8px" }}>{due}</td>
                      <td style={{ border: "1px solid #ddd", padding: "4px 8px", color: note === "今回" ? "#c05000" : "#888" }}>{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <PageInfo department="税務課" division="市民税係" tel="0439-88-1211（内線 211）" updated="令和8年10月27日" />
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
