import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 介護保険負担割合証の送付について",
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
            <span>令和8年度 介護保険負担割合証の送付について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月23日</span>
            <span>担当課：高齢者支援課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 介護保険負担割合証の送付について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の<strong>介護保険負担割合証</strong>（有効期間：令和8年8月1日〜令和9年7月31日）を、5月下旬に郵送にてお送りします。介護サービスを利用される際は、必ず被保険者証とあわせてサービス事業所へご提示ください。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>負担割合の判定基準</h3>
            <ul style={{ paddingLeft: 20, margin: "4px 0" }}>
              <li><strong>1割負担</strong>：合計所得金額が160万円未満の方</li>
              <li><strong>2割負担</strong>：合計所得金額が160万円以上220万円未満で、一定の年金・合計所得が基準額以上の方</li>
              <li><strong>3割負担</strong>：合計所得金額が220万円以上で、一定の年金・合計所得が基準額以上の方</li>
            </ul>
            <p>
              判定は前年（令和7年）の所得をもとに行います。所得更正等により負担割合が変わる場合は、改めてお送りすることがあります。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>紛失した場合</h3>
            <p>
              負担割合証を紛失した場合は、高齢者支援課窓口にて再発行いたします。来庁の際は本人確認書類（マイナンバーカード・運転免許証等）をお持ちください。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>高齢者支援課　☎ 0439-88-1121（平日 8:30〜17:15）</p>
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
