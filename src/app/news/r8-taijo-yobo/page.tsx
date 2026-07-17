import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 帯状疱疹予防接種費用助成のご案内",
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
            <span>令和8年度 帯状疱疹予防接種費用助成のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月17日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 帯状疱疹予防接種費用助成のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市では、帯状疱疹の発症や重症化を予防するため、65歳以上の市民を対象に帯状疱疹ワクチン接種費用の一部を助成します。帯状疱疹は免疫力が低下した際に発症しやすく、高齢者では後遺症（帯状疱疹後神経痛）が長引く場合があります。ワクチン接種による予防をお勧めします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>対象者</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>日野原市に住民登録がある65歳以上の方（令和8年4月1日時点）</li>
              <li>接種日において市内に住所を有する方</li>
              <li>本事業による助成を過去に受けていない方</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>助成対象ワクチンと助成額</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>ワクチンの種類</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>接種回数</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>助成額（1回あたり）</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>自己負担の目安</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["乾燥弱毒生水痘ワクチン（ビケン）", "1回", "4,000円", "約4,000〜6,000円"],
                  ["組換え帯状疱疹ワクチン（シングリックス）", "2回（2〜6か月間隔）", "10,000円", "約12,000〜16,000円/回"],
                ].map(([type, times, subsidy, cost]) => (
                  <tr key={type}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{type}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{times}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{subsidy}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 自己負担額は医療機関によって異なります。事前に接種を希望する医療機関へご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>助成期間</h3>
            <p>令和8年4月1日（水）〜令和9年3月31日（火）</p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>接種場所・申請方法</h3>
            <p>
              市内の指定医療機関で接種を受けてください。接種時に<strong>「帯状疱疹ワクチン接種費用助成申請書」</strong>を医療機関の窓口にご提出いただくことで、助成額が差し引かれた自己負担額のみをお支払いいただく方式（窓口払い方式）で接種できます。
            </p>
            <p>
              申請書は健康推進課窓口または市公式ホームページからダウンロードできます。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>市内指定医療機関（一部）</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>日野原市立病院　内科・皮膚科（中央地区 市役所通り）</li>
              <li>みやもと内科クリニック（北部地区 北部センター前）</li>
              <li>原野診療所（原野地区 下原）</li>
              <li>白嶺地区診療センター（白嶺地区）</li>
            </ul>
            <p style={{ color: "#666", fontSize: 12 }}>
              ※ 指定医療機関の詳細は健康推進課へお問い合わせいただくか、市公式ホームページの「指定医療機関一覧」をご確認ください。
            </p>

            <div style={{ background: "#f0f4ff", border: "1px solid #b0c4e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【ご注意】</strong><br />
              帯状疱疹ワクチンは任意接種です。接種を受ける前に、かかりつけ医または接種医療機関にご相談ください。なお、本助成は1人につき1ワクチン種類の接種を対象とします（シングリックスを選択された場合は2回分を助成）。
            </div>
          </div>

          <PageInfo department="健康推進課" division="健康づくり係" tel="0439-88-1161（内線 161）" updated="令和8年7月17日" />
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
