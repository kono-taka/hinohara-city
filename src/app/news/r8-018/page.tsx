import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日野原市立南部小学校 給食棟改修工事 一般競争入札のお知らせ",
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
            <span>日野原市立南部小学校 給食棟改修工事 一般競争入札のお知らせ</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月22日</span>
            <span>担当課：財政課（契約検査係）</span>
            <span className="news-tag bid" style={{ fontSize: 11 }}>入札・契約</span>
          </div>

          <h1 className="page-title">日野原市立南部小学校 給食棟改修工事 一般競争入札のお知らせ</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              下記のとおり一般競争入札（電子入札）を実施します。参加を希望する業者は、参加資格等を確認のうえお申し込みください。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>入札概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["工事名", "日野原市立南部小学校 給食棟外壁・屋根改修工事"],
                  ["工事場所", "日野原市南部3丁目 市立南部小学校内"],
                  ["設計金額", "非公表"],
                  ["入札方式", "一般競争入札（電子入札）"],
                  ["入札日時", "令和8年6月19日（金）10:00"],
                  ["入札場所", "日野原市役所 本庁舎3階 入札室"],
                  ["参加資格", "市内業者または建設工事格付けB等級以上の業者"],
                  ["図書閲覧", "財政課窓口・市公式ウェブサイト（6月2日〜6月13日）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 120, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 12 }}>
              参加申請書の受付期間は6月2日（月）から6月10日（火）17時までです。詳細は入札公告文書をご確認ください。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>財政課（契約検査係）　☎ 0100-88-1117（平日 8:30〜17:15）</p>
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
