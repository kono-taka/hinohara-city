import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年末年始のごみ収集・環境センター休業のお知らせ（令和8年〜9年）",
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
            <span>年末年始のごみ収集・環境センター休業のお知らせ</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月24日</span>
            <span>担当課：環境対策課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">年末年始のごみ収集・環境センター休業のお知らせ（令和8年〜9年）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              年末年始の期間中は、ごみの収集日程が変更となります。また、日野原市環境センターも休業いたします。
              下記の日程をご確認のうえ、ごみの排出にご協力をお願いいたします。
            </p>

            <div style={{ background: "#fff4f4", border: "1px solid #e8b8b8", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13, color: "#c0392b" }}>■ ごみ収集 休止期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年12月31日（水）〜 令和9年1月3日（土）</span><br />
              <span style={{ fontSize: 12, color: "#666" }}>※この期間はすべての地区でごみ収集を行いません。</span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>収集日程の変更一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "28%" }}>ごみの種別</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "36%" }}>年内の最終収集日</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>年明けの収集再開日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["燃えるごみ（全地区）", "令和8年12月30日（火）", "令和9年1月5日（月）"],
                  ["燃えないごみ（奇数週 月曜地区）", "令和8年12月22日（月）", "令和9年1月5日（月）"],
                  ["燃えないごみ（奇数週 金曜地区）", "令和8年12月26日（金）", "令和9年1月9日（金）"],
                  ["プラスチック製容器包装", "令和8年12月29日（月）", "令和9年1月5日（月）"],
                  ["古紙・古布", "令和8年12月22日（月）", "令和9年1月19日（月）"],
                  ["缶・びん・ペットボトル", "令和8年12月19日（金）", "令和9年1月16日（金）"],
                ].map(([kind, last, first], i) => (
                  <tr key={i} style={{ background: i % 2 === 1 ? "#fafafa" : undefined }}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{kind}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{last}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{first}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※収集日は各地区の通常の収集曜日に依存します。地区ごとの詳細な収集日は、市から配布している「ごみ収集カレンダー」またはお電話にてご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>日野原市環境センター 年末年始休業</h3>
            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong>休業期間：令和8年12月29日（月）〜 令和9年1月4日（日）</strong><br />
              <span style={{ fontSize: 12, color: "#555" }}>この期間は、ごみ・粗大ごみの持込受付を行いません。</span>
            </div>
            <p>
              環境センターへの直接持込は、令和8年12月26日（金）（午前8時30分〜午後4時）が年内の最終受付日となります。
              年明けは令和9年1月5日（月）から通常どおり受付を再開します。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>ごみを出す際のお願い</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>収集休止期間中はごみを道路や収集場所に出さないようお願いします。</li>
              <li>年末は大掃除等でごみの量が増えます。収集日の<strong>午前8時まで</strong>に所定の場所へ出してください。</li>
              <li>年末年始の粗大ごみは、事前の申込が必要です。受付は環境対策課（0439-88-1141）までお電話ください。</li>
              <li>不法投棄は廃棄物処理法により罰則の対象となります。ルールを守った適正な排出をお願いします。</li>
            </ul>

            <div style={{ background: "#f8f8f8", border: "1px solid #ddd", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>ごみ収集日程に関するお問い合わせ</strong><br />
              お住まいの地区の収集日が不明な場合は、環境対策課（0439-88-1141）にお問い合わせください。<br />
              なお、令和9年度のごみ収集カレンダーは、令和9年1月下旬を目途に全戸配布する予定です。
            </div>
          </div>

          <PageInfo department="環境対策課" tel="0439-88-1141（内線 141）" updated="令和8年11月24日" />
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
