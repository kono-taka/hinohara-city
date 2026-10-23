import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 インフルエンザ集団接種のご案内（10月25日・11月8日実施）",
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
            <span>令和8年度 インフルエンザ集団接種のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月1日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 インフルエンザ集団接種のご案内（10月25日・11月8日実施）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市では、令和8年度のインフルエンザ集団接種を市民文化センターにて実施します。
              かかりつけ医への予約が難しい方や、短時間で接種を希望する方はぜひご利用ください。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "14px 18px", borderRadius: 3, marginBottom: 20 }}>
              <strong style={{ fontSize: 13 }}>集団接種 実施概要</strong>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10, fontSize: 13 }}>
                <tbody>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#eef3f8", textAlign: "left", whiteSpace: "nowrap" }}>第1回</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>令和8年10月25日（土）　午前9時00分〜12時00分（受付終了 11時30分）</td>
                  </tr>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#eef3f8", textAlign: "left" }}>第2回</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>令和8年11月8日（土）　午前9時00分〜12時00分（受付終了 11時30分）</td>
                  </tr>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#eef3f8", textAlign: "left" }}>会場</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>日野原市民文化センター 多目的ホール（〒299-XXXX 日野原市中央区本町1丁目1番地）</td>
                  </tr>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#eef3f8", textAlign: "left" }}>定員</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>各回 150名（先着順・予約不要）</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>対象者と自己負担額</h3>
            <p>
              集団接種の対象者および自己負担額は、個別医療機関での接種と同一です。
              詳細は<a href="/news/r8-influenza-yobo" style={{ color: "var(--link-color)" }}>インフルエンザ予防接種費用助成のご案内</a>をご参照ください。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginTop: 8 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>対象</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>自己負担額</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["65歳以上の方（定期接種）", "1,500円"],
                  ["60〜64歳で心臓・腎臓・呼吸器等に障がいのある方", "1,500円"],
                  ["妊娠中の方（任意助成・1回限り）", "2,000円"],
                  ["生後6か月〜中学3年生（任意助成）", "2,000円（13歳未満は2回接種推奨）"],
                  ["上記に該当しない方（自費）", "3,500円"],
                ].map(([t, f], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{t}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{f}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>当日お持ちいただくもの</h3>
            <ul style={{ paddingLeft: 20, marginTop: 4 }}>
              <li>本人確認書類（健康保険証・マイナンバーカードなど）</li>
              <li>自己負担金（釣り銭のないようご準備ください）</li>
              <li>お薬手帳（お持ちの方）</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>会場へのアクセス</h3>
            <p>
              日野原市民文化センターへは、市営バス「文化センター前」停留所（市役所方面より約8分）をご利用ください。
              当日は会場周辺に一般駐車場（70台）をご利用いただけます。公共交通機関のご利用にご協力をお願いします。
            </p>

            <div style={{ background: "#fff8e1", border: "1px solid #f0c040", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【注意事項】</strong>
              <ul style={{ paddingLeft: 20, marginTop: 6, marginBottom: 0 }}>
                <li>当日の体調不良（発熱37.5℃以上、倦怠感等）の場合は接種をお控えください。</li>
                <li>37.5℃以上の発熱がある方は接種できません。</li>
                <li>インフルエンザワクチンにアレルギーをお持ちの方は、事前にかかりつけ医にご相談ください。</li>
                <li>定員（150名）に達した場合は受付を終了する場合があります。</li>
              </ul>
            </div>
          </div>

          <PageInfo department="健康推進課" division="感染症対策係" tel="0439-88-1161（内線 161）" updated="令和8年10月1日" />
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
