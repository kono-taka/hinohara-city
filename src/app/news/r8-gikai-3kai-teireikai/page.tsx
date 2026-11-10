import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年第3回 市議会定例会（12月定例会）の開催について",
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
            <span>令和8年第3回 市議会定例会（12月定例会）の開催について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月10日</span>
            <span>担当課：議会事務局</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年第3回 市議会定例会（12月定例会）の開催について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年第3回日野原市議会定例会（12月定例会）を下記の日程で開催します。市民の皆様の傍聴をお待ちしております。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>会　期</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年12月2日（火）〜 令和8年12月19日（金）（18日間）</span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>会期・日程</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 220 }}>日程</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["令和8年12月2日（火）", "開会・議案上程・提案理由説明"],
                  ["令和8年12月4日（木）", "議案質疑"],
                  ["令和8年12月8日（月）〜10日（水）", "一般質問（登壇予定：計10名）"],
                  ["令和8年12月11日（木）〜12日（金）", "常任委員会審査（総務・厚生・産業建設 各委員会）"],
                  ["令和8年12月19日（金）", "本会議（委員長報告・質疑・討論・採決・閉会）"],
                ].map(([day, content]) => (
                  <tr key={day}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", verticalAlign: "top", whiteSpace: "nowrap" }}>{day}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{content}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>上程予定議案（概要）</h3>
            <p style={{ fontSize: 12, color: "#666", marginBottom: 8 }}>
              ※議案の内容は変更になる場合があります。確定次第、市議会ホームページに掲載します。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 110 }}>議案番号</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>件　名</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["議案第41号", "令和8年度日野原市一般会計補正予算（第2号）"],
                  ["議案第42号", "令和8年度日野原市水道事業会計補正予算（第1号）"],
                  ["議案第43号", "日野原市職員の給与に関する条例の一部を改正する条例（人事院勧告に基づく改正）"],
                  ["議案第44号", "日野原市手数料条例の一部を改正する条例"],
                  ["議案第45号", "財産の取得について（道路維持用除雪機械）"],
                  ["諮問第2号", "固定資産評価審査委員会委員の選任について"],
                ].map(([no, title]) => (
                  <tr key={no}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{no}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{title}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>傍聴について</h3>
            <p>
              本会議は市役所4階 議場にて傍聴いただけます（入退場自由・定員30名）。傍聴を希望される方は、当日4階の議会事務局受付にて傍聴証をお受け取りください。乳幼児を連れての傍聴については、事前に議会事務局へご相談ください。
            </p>
            <p>
              開会日（12月2日）および閉会日（12月19日）の本会議は、日野原市議会インターネット中継にてライブ配信いたします。また、閉会後は録画映像もご覧いただけます。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>一般質問の通告について</h3>
            <p>
              議員による一般質問の通告は令和8年11月28日（金）正午を締め切りとしています。通告内容は締め切り後に議会事務局ホームページへ掲載いたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>議事録・会議資料の公開</h3>
            <p>
              閉会後、会議録の確定後（閉会から概ね1ヶ月を目安）に、日野原市議会ホームページへ掲載します。上程議案の議案書・付属資料は、市役所1階情報公開コーナーおよび議会事務局にて閲覧いただけます。
            </p>
          </div>

          <PageInfo department="議会事務局" division="議事係" tel="0439-88-1101（内線 101）" updated="令和8年11月10日" />
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
