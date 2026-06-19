import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年第2回 市議会定例会（6月定例会）の開催について",
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
            <span>令和8年第2回 市議会定例会（6月定例会）の開催について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年6月19日</span>
            <span>担当課：議会事務局</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年第2回 市議会定例会（6月定例会）の開催について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年第2回日野原市議会定例会（6月定例会）は、令和8年6月10日（水）に開会し、会期18日間の日程で開催中です。令和8年6月27日（金）の本会議（採決・閉会）をもって閉会となります。
            </p>
            <p>
              本定例会には、令和8年度一般会計補正予算（第1号）をはじめ、条例改正・契約締結等に関する議案合計7件および諮問1件を上程しております。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>会期・日程</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 200 }}>日程</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["令和8年6月10日（水）", "開会・議案上程・提案理由説明"],
                  ["令和8年6月12日（金）", "議案質疑"],
                  ["令和8年6月16日（月）〜18日（水）", "一般質問（登壇者：計12名）"],
                  ["令和8年6月19日（木）〜20日（金）", "常任委員会審査（総務・厚生・産業建設 各委員会）"],
                  ["令和8年6月27日（金）", "本会議（委員長報告・質疑・討論・採決・閉会）"],
                ].map(([day, content]) => (
                  <tr key={day}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", verticalAlign: "top", whiteSpace: "nowrap" }}>{day}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{content}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>上程議案（概要）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 110 }}>議案番号</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>件　名</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["議案第34号", "令和8年度日野原市一般会計補正予算（第1号）"],
                  ["議案第35号", "日野原市税条例の一部を改正する条例"],
                  ["議案第36号", "日野原市国民健康保険税条例の一部を改正する条例"],
                  ["議案第37号", "日野原市立南部小学校給食棟改修工事請負契約の締結について"],
                  ["議案第38号", "財産の取得について（教育委員会事務用車両）"],
                  ["議案第39号", "市道路線の認定について（北部地区2路線）"],
                  ["議案第40号", "令和8年度日野原市公共下水道事業会計補正予算（第1号）"],
                  ["諮問第1号", "人権擁護委員の推薦について"],
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
              本会議は市役所4階 議場にて傍聴いただけます（入退場自由・定員30名）。傍聴を希望される方は、当日4階の議会事務局受付にて傍聴証をお受け取りください。なお、乳幼児の傍聴については議会事務局へご相談ください。
            </p>
            <p>
              本会議（6月27日）の模様は、日野原市議会インターネット中継にてライブ配信いたします。また、閉会後は録画映像もご覧いただけます。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>議事録・会議資料の公開</h3>
            <p>
              閉会後、会議録の確定後（閉会から概ね1ヶ月を目安）に、日野原市議会ホームページへ掲載します。上程議案の議案書・付属資料は、市役所1階情報公開コーナーおよび議会事務局にて閲覧いただけます。
            </p>
          </div>

          <PageInfo department="議会事務局" division="議事係" tel="0439-88-1101（内線 101）" updated="令和8年6月19日" />
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
