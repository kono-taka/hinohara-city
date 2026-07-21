import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 特定健康診査・特定保健指導のご案内",
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
            <span>令和8年度 特定健康診査・特定保健指導のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月21日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 特定健康診査・特定保健指導のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市国民健康保険に加入されている40歳〜74歳の方を対象に、令和8年度の特定健康診査（特定健診）を実施しています。特定健診は、糖尿病・高血圧症・脂質異常症などの生活習慣病のリスクを早期に発見するための健診です。受診票の有効期間内に、ぜひご受診ください。
            </p>

            <div style={{ background: "#fff8e1", border: "1px solid #f9c740", padding: "10px 14px", borderRadius: 3, marginTop: 16, marginBottom: 16, fontSize: 13 }}>
              <strong>【受診票の有効期間】</strong><br />
              令和8年4月1日（水）〜令和8年10月31日（金）<br />
              <span style={{ color: "#c0392b", fontWeight: "bold" }}>※ 有効期間を過ぎますと受診できなくなります。お早めにご受診ください。</span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>対象者</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>日野原市国民健康保険に加入している40歳〜74歳の方</li>
              <li>受診日において日野原市に住民登録がある方</li>
            </ul>
            <p style={{ color: "#666", fontSize: 12 }}>
              ※ 職場の健康保険（協会けんぽ・共済組合等）に加入されている方は、各保険者が実施する健診をご利用ください。<br />
              ※ 後期高齢者医療制度に加入されている75歳以上の方は、千葉県後期高齢者医療広域連合が実施する健診の対象となります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>受診方法</h3>
            <p>
              4月上旬に郵送した<strong>「特定健康診査受診票」</strong>と<strong>「受診者証」</strong>をお持ちのうえ、指定の医療機関または集団健診会場にてご受診ください。
            </p>
            <p>
              受診票が見当たらない場合は、健康推進課にご連絡ください。再発行いたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>検査項目</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>区分</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>検査内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["基本的な健診", "問診・身体計測（身長・体重・腹囲）・血圧測定・血液検査（脂質・血糖・肝機能・腎機能等）・尿検査"],
                  ["詳細な健診（医師判断）", "心電図検査・眼底検査・貧血検査"],
                ].map(([cat, items]) => (
                  <tr key={cat}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap", verticalAlign: "top" }}>{cat}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>自己負担額</h3>
            <p>
              日野原市国民健康保険の被保険者は<strong>無料</strong>です（受診票に記載された指定医療機関での受診に限ります）。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>集団健診（会場健診）の日程</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>日時</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>会場</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>受付時間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["令和8年8月5日（火）", "日野原市保健センター（中央地区 市民会館隣）", "8:30〜10:00"],
                  ["令和8年8月19日（火）", "原野地区公民館（原野地区 下原）", "8:30〜10:00"],
                  ["令和8年9月2日（火）", "北部コミュニティセンター（北部地区 新田）", "8:30〜10:00"],
                  ["令和8年9月18日（木）", "白嶺地区集会所（白嶺地区）", "8:30〜10:00"],
                  ["令和8年10月7日（水）", "日野原市保健センター（中央地区 市民会館隣）", "8:30〜10:00"],
                ].map(([date, venue, time]) => (
                  <tr key={date}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{venue}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 集団健診は事前予約制です。健康推進課（電話 0439-88-1163）または市ホームページ予約フォームからお申し込みください。<br />
              ※ 健診当日は朝食を抜いてご来場ください（水・お茶は可）。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>個別健診（医療機関での受診）</h3>
            <p>
              市内の指定医療機関であれば、ご都合のよい日時にご受診いただけます。受診の際は必ず事前に医療機関へご予約ください。指定医療機関の一覧は健康推進課窓口および市ホームページにてご確認いただけます。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>特定保健指導について</h3>
            <p>
              特定健診の結果、メタボリックシンドローム（内臓脂肪症候群）と判定された方には、市の保健師・管理栄養士による<strong>特定保健指導</strong>のご案内をお送りします。特定保健指導は生活習慣の改善をサポートする無料のプログラムです。案内が届いた方はぜひご参加ください。
            </p>

            <div style={{ background: "#f0f4ff", border: "1px solid #b0c4e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【受診票を紛失された方へ】</strong><br />
              受診票の再発行は健康推進課（内線 163）にてお手続きいただけます。ご本人確認書類（マイナンバーカード・運転免許証等）をお持ちのうえ窓口にお越しいただくか、お電話にてお問い合わせください。
            </div>
          </div>

          <PageInfo department="健康推進課" division="健康づくり係" tel="0439-88-1163（内線 163）" updated="令和8年7月21日" />
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
