import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 インフルエンザ予防接種費用助成のご案内",
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
            <span>令和8年度 インフルエンザ予防接種費用助成のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年9月11日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 インフルエンザ予防接種費用助成のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市では、令和8年度のインフルエンザ予防接種について、対象となる方への費用助成を実施します。
              接種シーズンは例年10月から翌年1月ごろにかけてとなります。今年度も早めの接種にご協力くださいますようお願いいたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 接種期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年10月1日（木）〜 令和9年1月31日（土）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※医療機関の在庫状況によっては早期に接種できない場合があります。事前に医療機関へお問い合わせください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>助成の対象となる方と自己負担額</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>対象</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>自己負担額</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["65歳以上の方（予防接種法に基づく定期接種）", "1,500円", "市内協力医療機関での接種に限る"],
                  ["60〜64歳で心臓・腎臓・呼吸器に障がいのある方等", "1,500円", "対象要件あり。事前に健康推進課へお問い合わせを"],
                  ["妊娠中の方（任意助成）", "2,000円", "市内協力医療機関のみ。1回限り"],
                  ["生後6か月〜中学3年生（任意助成）", "2,000円（1回目）／2,000円（2回目）", "13歳未満は2回接種推奨"],
                ].map(([target, fee, note], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{target}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{fee}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12, color: "#555" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※上記の自己負担額を超える費用（接種手技料など）が医療機関によって別途かかる場合があります。<br />
              ※市民税非課税世帯に属する65歳以上の方は、自己負担が免除される場合があります。詳細はお問い合わせください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>接種を受ける方法</h3>
            <p>
              市内協力医療機関に直接ご予約のうえ、接種当日に窓口で「日野原市の住民であること」をお申し出ください。
              本人確認のため、健康保険証・マイナンバーカードなどをお持ちください。市外の医療機関で接種を希望する場合は、事前に健康推進課までご相談ください（後日償還払いとなる場合があります）。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>市内協力医療機関</h3>
            <p>
              市内協力医療機関の一覧は、10月1日（木）以降に市ホームページへ掲載するほか、市役所健康推進課窓口・各地区の公民館でも配布いたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>インフルエンザの感染予防について</h3>
            <p>
              インフルエンザは、例年11月ごろから感染者数が増加し、12月〜翌年1月にかけてピークを迎えます。特に高齢者や基礎疾患のある方は重症化リスクが高いため、早めの接種をお勧めします。また、予防接種とあわせて手洗い・うがい・適切なマスクの着用など、日常的な感染予防対策を心がけましょう。
            </p>

            <div style={{ background: "#f0fff0", border: "1px solid #99cc99", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【市内の集団接種について】</strong><br />
              令和8年度は、市民文化センターにおける集団接種（日時：令和8年10月25日（土）・11月8日（土）、各9:00〜12:00）も実施予定です。
              受付・定員等の詳細は、10月上旬に市ホームページおよび広報ひのはら10月号でお知らせします。
            </div>
          </div>

          <PageInfo department="健康推進課" division="感染症対策係" tel="0439-88-1161（内線 161）" updated="令和8年9月11日" />
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
