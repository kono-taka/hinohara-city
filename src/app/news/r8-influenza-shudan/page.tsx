import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 集団インフルエンザ予防接種（市民文化センター）のご案内",
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
            <span>令和8年度 集団インフルエンザ予防接種（市民文化センター）のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月9日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 集団インフルエンザ予防接種（市民文化センター）のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市では、令和8年度のインフルエンザ予防接種について、かかりつけ医のない方や個別接種が難しい方を対象に、
              市民文化センターにて集団接種を実施します。事前のお申し込みが必要です。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>実施概要</strong>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 8 }}>
                <tbody>
                  {[
                    ["実施日", "第1回：令和8年10月25日（土）　第2回：令和8年11月8日（土）"],
                    ["受付時間", "9:00〜12:00（接種終了は12:30を予定）"],
                    ["会場", "日野原市民文化センター 大会議室（2階）\n〒299-XXXX 日野原市中央二丁目1番1号"],
                    ["定員", "各回 100名（先着順・事前申込制）"],
                  ].map(([label, value], i) => (
                    <tr key={i}>
                      <td style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#eef3f8", fontWeight: "bold", whiteSpace: "nowrap", width: "30%" }}>{label}</td>
                      <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "pre-line" }}>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>対象者・自己負担額</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>対象</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>自己負担額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["65歳以上の市内在住の方（定期接種）", "1,500円"],
                  ["60〜64歳で心臓・腎臓・呼吸器に一定の障がいのある方", "1,500円"],
                  ["妊娠中の方（任意）", "2,000円（1回限り）"],
                  ["生後6か月〜中学3年生（任意）", "2,000円（13歳未満は2回接種可）"],
                  ["上記以外の市内在住の方（任意）", "3,500円"],
                ].map(([target, fee], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{target}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※市民税非課税世帯に属する65歳以上の方は、自己負担が免除になる場合があります。申込時にお申し出ください。<br />
              ※接種当日、本人確認書類（健康保険証またはマイナンバーカード等）をお持ちください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>お申込み方法</h3>
            <p>
              電話または市ホームページの申込フォームにてお申し込みください。定員に達し次第、受付を終了します。
            </p>
            <ul style={{ paddingLeft: 18, marginTop: 4 }}>
              <li>電話：健康推進課 <strong>0439-88-1161（内線 161）</strong><br />
                受付時間：平日 8:30〜17:15</li>
              <li style={{ marginTop: 6 }}>ホームページ申込フォーム：令和8年10月9日（木）〜各回前日まで受付</li>
            </ul>
            <p style={{ marginTop: 8, fontSize: 12, color: "#555" }}>
              ※申込後のキャンセルは、接種日の3日前までに健康推進課へご連絡ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>当日の流れ</h3>
            <ol style={{ paddingLeft: 18, marginTop: 4 }}>
              <li>受付（接種開始時刻より10分前からご来場ください）</li>
              <li>問診票記入・体温確認</li>
              <li>医師による問診・接種</li>
              <li>接種後15分間の経過観察</li>
            </ol>
            <p style={{ marginTop: 6, fontSize: 12, color: "#555" }}>
              ※問診票は、市役所健康推進課窓口・市内各公民館・市民文化センターにてお受け取りいただくか、市ホームページからダウンロードしてご持参いただくと、受付がスムーズです。
            </p>

            <div style={{ background: "#fff8e8", border: "1px solid #e8c84a", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【個別接種について】</strong><br />
              集団接種のほか、市内の協力医療機関でも個別に接種を受けていただけます。協力医療機関の一覧は
              <a href="/news/r8-influenza-yobo" style={{ color: "var(--link-color)" }}>インフルエンザ予防接種費用助成のご案内</a>をご覧ください。
            </div>
          </div>

          <PageInfo department="健康推進課" division="感染症対策係" tel="0439-88-1161（内線 161）" updated="令和8年10月9日" />
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
