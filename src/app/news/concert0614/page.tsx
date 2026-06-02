import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "初夏の声楽コンサート 参加者募集",
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
            <span>初夏の声楽コンサート 参加者募集</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月21日</span>
            <span>担当課：生涯学習課</span>
            <span className="news-tag event" style={{ fontSize: 11 }}>イベント</span>
          </div>

          <h1 className="page-title">初夏の声楽コンサート 参加者募集</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市民文化センター主催による「初夏の声楽コンサート」を開催します。千葉県内で活躍するソプラノ・テノール歌手3名が、イタリア歌曲から日本の名歌、オペラアリアまで幅広い演目をお届けします。どなたでも無料でご参加いただけます（要事前申込）。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>開催概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["日時", "令和8年6月14日（土）14:00〜16:00（開場 13:30）"],
                  ["会場", "日野原市民文化センター 中ホール"],
                  ["出演", "ソプラノ 2名・テノール 1名（千葉県内在住）"],
                  ["演目", "イタリア歌曲・日本の名歌・オペラアリア ほか"],
                  ["定員", "50名（先着順）"],
                  ["入場料", "無料（要申込）"],
                  ["申込締切", "令和8年6月7日（日）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 110, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>申込方法</h3>
            <p>
              電話（市民文化センター ☎ 0439-88-3800）または市公式ウェブサイトの申込フォームよりお申し込みください。定員に達し次第、締切前でも受付を終了する場合があります。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>市民文化センター　☎ 0439-88-3800（平日 9:00〜17:00）</p>
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
