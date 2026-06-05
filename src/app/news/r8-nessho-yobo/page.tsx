import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "熱中症予防について（令和8年度）",
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
            <span>熱中症予防について（令和8年度）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年6月5日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag important" style={{ fontSize: 11 }}>重要</span>
          </div>

          <h1 className="page-title">熱中症予防について（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              梅雨入り前後から、気温・湿度が急激に上昇し、体が暑さに慣れていない状態で屋外や室内に長時間いると、熱中症を発症するリスクが高まります。市では今年度も熱中症の予防に関する啓発を行いますので、ご家庭や職場での対策にお役立てください。
            </p>

            <div style={{ background: "#fff3f3", border: "1px solid #e8a0a0", padding: "10px 14px", borderRadius: 3, marginBottom: 16 }}>
              <strong>熱中症警戒アラートにご注意ください</strong><br />
              環境省・気象庁が発表する「熱中症警戒アラート」が発令された日は、特に外出を控え、こまめな水分補給・冷房の使用をお願いします。アラートはテレビ・ラジオ・市公式SNSでもお知らせします。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>熱中症が起こりやすい状況</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>気温が高い日・湿度が高い日（特に梅雨の晴れ間）</li>
              <li>急に暑くなった日（体が暑さに慣れていない時期）</li>
              <li>風が弱く、日差しが強い屋外作業や農作業中</li>
              <li>冷房を使用していない室内（高齢者の独居世帯など）</li>
              <li>激しい運動・スポーツ中（部活動・体育授業を含む）</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>予防のポイント</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "30%" }}>対策</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>具体的な行動</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["こまめな水分補給", "のどが渇く前に、1時間ごとにコップ1杯程度の水や経口補水液を摂取しましょう。アルコールやカフェインを多く含む飲み物は控えてください。"],
                  ["室内の冷房使用", "「がまん」は禁物です。エアコンや扇風機を適切に使用し、室温28℃以下を目安に保ちましょう。"],
                  ["外出時の注意", "帽子・日傘を使用し、通気性のよい衣服を着用してください。午前10時〜午後3時の外出はできるだけ避け、休憩をこまめにとりましょう。"],
                  ["農作業・屋外作業時", "作業は涼しい早朝や夕方に行い、1時間ごとに日陰での休憩をとってください。2人以上での作業を心がけ、お互いの体調に気を配りましょう。"],
                ].map(([title, detail]) => (
                  <tr key={title}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{title}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>高齢者・子どもへの特別な配慮をお願いします</h3>
            <p>
              高齢者は暑さや脱水を感じにくい場合があります。ご家族や近隣の方が声をかけ、室内の温度確認や水分補給の声かけをお願いします。
              お子さんは地面に近い位置にいるため、大人よりも高温の影響を受けやすい状況にあります。ベビーカーや地面付近での活動には十分にご注意ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>熱中症かな？と思ったら</h3>
            <p>
              めまい・立ちくらみ・大量の発汗・頭痛・吐き気などの症状が現れた場合は、涼しい場所に移動し、水分・塩分を補給してください。
              意識がはっきりしない、呼びかけに反応しないなど重症が疑われる場合は、すぐに<strong>119番</strong>へ通報してください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>熱中症に関する相談窓口</strong><br />
              <span style={{ display: "block", marginTop: 6 }}>
                ・健康推進課（保健センター内）　☎ 0100-88-1161（内線 161）<br />
                ・千葉県熱中症対策相談電話　☎ 0570-100-200（平日 9:00〜17:00）<br />
                ・救急安心センター（#7119）　24時間・年中無休
              </span>
            </div>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>健康推進課　☎ 0100-88-1161（内線 161）（平日 8:30〜17:15）</p>
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
