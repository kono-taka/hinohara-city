import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年第3回 市議会定例会（9月定例会）の開催について",
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
            <span>令和8年第3回 市議会定例会（9月定例会）の開催について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年9月25日</span>
            <span>担当課：議会事務局</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年第3回 市議会定例会（9月定例会）の開催について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年第3回日野原市議会定例会（9月定例会）を下記のとおり開催します。
              市議会は原則として公開されており、どなたでも傍聴することができます（事前申込不要）。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>会期</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年9月29日（月）〜 令和8年10月9日（木）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>（会期 11日間）</span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な日程</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>日程</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>時刻</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["9月29日（月）", "開会・提案理由説明", "午前10時"],
                  ["9月30日（火）・10月1日（水）", "一般質問", "午前10時"],
                  ["10月3日（金）", "常任委員会（総務・文教厚生）", "午前10時"],
                  ["10月6日（月）", "常任委員会（産業建設）", "午前10時"],
                  ["10月9日（木）", "委員会報告・採決・閉会", "午前10時"],
                ].map(([date, content, time], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{content}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※日程は変更される場合があります。傍聴の際は、当日の市役所掲示板をご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な審議予定事項</h3>
            <ul style={{ paddingLeft: 20, margin: "0 0 12px" }}>
              <li>令和7年度 一般会計・特別会計 歳入歳出決算の認定</li>
              <li>令和8年度 一般会計補正予算（第3号）</li>
              <li>日野原市道路の指定及び廃止について</li>
              <li>日野原市立保育所条例の一部改正について</li>
              <li>その他報告事項</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666" }}>
              ※上記は予定であり、追加・変更される場合があります。詳細は議会事務局へお問い合わせください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>傍聴のご案内</h3>
            <p>
              傍聴は事前申込不要です。開会時刻の30分前から市役所4階の市議会傍聴受付にてお申し出ください。
              傍聴席は20席（車いす対応席2席を含む）です。傍聴席が満席の場合は、市役所1階ロビーのモニターでご覧いただけます。
            </p>
            <p>
              なお、定例会の模様はインターネット中継（ライブ配信）でもご覧いただけます。詳細は日野原市議会公式ページをご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>議事録について</h3>
            <p>
              議事録は閉会後おおむね2か月以内に市議会ホームページへ掲載いたします。
            </p>
          </div>

          <PageInfo department="議会事務局" division="議事係" tel="0439-88-1115（内線 115）" updated="令和8年9月25日" />
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
