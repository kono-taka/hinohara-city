import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年第3回 市議会定例会（9月定例会）会議録の公開について",
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
            <span>令和8年第3回 市議会定例会（9月定例会）会議録の公開について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月30日</span>
            <span>担当課：議会事務局</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年第3回 市議会定例会（9月定例会）会議録の公開について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年9月9日（水）に開会し、令和8年9月26日（金）に閉会した令和8年第3回日野原市議会定例会（9月定例会）の会議録が確定しましたので、公開いたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>会議録の閲覧方法</strong><br />
              <ul style={{ margin: "6px 0 0 16px", padding: 0, fontSize: 13 }}>
                <li>日野原市議会ホームページ（<a href="/shisei/gikai" style={{ color: "var(--link-color)" }}>市議会のページ</a>）よりPDFにてダウンロード可能です。</li>
                <li>市役所 3階 議会事務局窓口にて冊子をご覧いただけます（平日 午前8時30分〜午後5時15分）。</li>
                <li>市立図書館（中央館）にも製本版を備え置いております。</li>
              </ul>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>令和8年第3回定例会 概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 200 }}>日程</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["令和8年9月9日（水）", "開会・議案上程・提案理由説明"],
                  ["令和8年9月11日（金）", "議案質疑"],
                  ["令和8年9月16日（水）〜18日（金）", "一般質問（登壇者：計14名）"],
                  ["令和8年9月19日（土）〜22日（火）", "決算審査特別委員会（令和7年度各会計）"],
                  ["令和8年9月24日（木）〜25日（金）", "常任委員会審査（総務・厚生・産業建設 各委員会）"],
                  ["令和8年9月26日（金）", "本会議（委員長報告・質疑・討論・採決・閉会）"],
                ].map(([day, content]) => (
                  <tr key={day}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", verticalAlign: "top", whiteSpace: "nowrap" }}>{day}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{content}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>上程議案・審議結果（概要）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 110 }}>議案番号</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>件　名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: 80 }}>審議結果</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["議案第41号", "令和8年度日野原市一般会計補正予算（第2号）", "原案可決"],
                  ["議案第42号", "日野原市廃棄物の適正処理等に関する条例の一部を改正する条例", "原案可決"],
                  ["議案第43号", "日野原市道路占用料徴収条例の一部を改正する条例", "原案可決"],
                  ["議案第44号", "令和7年度日野原市一般会計歳入歳出決算の認定について", "認定"],
                  ["議案第45号", "令和7年度日野原市国民健康保険特別会計歳入歳出決算の認定について", "認定"],
                  ["議案第46号", "令和7年度日野原市後期高齢者医療特別会計歳入歳出決算の認定について", "認定"],
                  ["議案第47号", "令和7年度日野原市公共下水道事業会計決算の認定について", "認定"],
                  ["議案第48号", "白嶺高原ビジターセンター展示更新業務委託契約の締結について", "原案可決"],
                ].map(([no, title, result], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{no}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{title}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>一般質問の主な質問事項</h3>
            <ul style={{ margin: "0 0 0 16px", padding: 0 }}>
              <li>令和7年度決算に見る財政状況と今後の財政運営について</li>
              <li>白嶺高原の観光振興および来訪者増加策について</li>
              <li>小中学校の学力向上対策と教員の働き方改革について</li>
              <li>地域公共交通の維持・確保に向けた取り組みについて</li>
              <li>空き家対策の現状と今後の方針について</li>
              <li>その他</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※一般質問の詳細および各議員の質問内容・答弁は、会議録本文をご参照ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>インターネット中継（録画）について</h3>
            <p>
              本定例会の本会議（9月9日・26日）および一般質問（9月16日〜18日）の模様は、日野原市議会インターネット中継システムにて録画映像をご覧いただけます。
              <a href="/shisei/gikai" style={{ color: "var(--link-color)" }}>市議会のページ</a>よりアクセスしてください。
            </p>
          </div>

          <PageInfo department="議会事務局" division="議事係" tel="0439-88-1101（内線 101）" updated="令和8年10月30日" />
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
