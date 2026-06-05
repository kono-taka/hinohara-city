import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内びわ直売所が開設されました",
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
            <span>令和8年度 市内びわ直売所が開設されました</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年6月3日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内びわ直売所が開設されました</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度のびわ収穫シーズンが始まり、市内各農園において直売所が開設されました。今シーズンは5月の日照時間が平年を上回り、実の肥大が良好です。甘みが強く、香り豊かな日野原産びわをぜひご賞味ください。
            </p>
            <p>
              今年は昨年と比べ収穫量がやや多く、比較的手に取りやすい価格での提供が見込まれます。びわは収穫後の日持ちが短いため、新鮮なうちにお求めいただくことをおすすめします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>主な直売所一覧（令和8年6月3日現在）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>販売終了予定</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["白峰農園直売所", "白峰地区 白峰1丁目地内（白峰高原入口交差点そば）", "9:00〜16:00（売切次第終了）", "6月下旬"],
                  ["原野農産物直売所（あぐりひのはら）", "原野地区 下原345番地先（県道沿い）", "9:00〜17:00（月曜定休）", "6月下旬"],
                  ["北部地区農家直売（北の恵み）", "北部地区 市道北部線沿い（北部公民館前）", "10:00〜15:00（土・日のみ）", "6月中旬"],
                ].map(([name, addr, hours, end]) => (
                  <tr key={name}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{addr}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{hours}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{end}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666" }}>
              ※ 天候や収穫状況により、営業日・在庫が予告なく変更になる場合があります。お越しの前に各直売所へお問い合わせいただくことをおすすめします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>ふるさと納税返礼品としてのびわ</h3>
            <p>
              日野原産びわは市のふるさと納税返礼品にも選ばれています。令和8年度産は6月10日（水）より順次発送予定です。詳しくはふるさと納税申込みページをご確認ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>びわ農業に関心のある方へ</strong><br />
              農林振興課では、びわ農園の後継者確保や新規就農希望者への支援を行っています。見学・相談を希望される方は農林振興課までお気軽にご連絡ください。
            </div>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>農林振興課　☎ 0100-88-1271（内線 271）（平日 8:30〜17:15）</p>
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
