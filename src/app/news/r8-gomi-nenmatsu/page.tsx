import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年末年始のごみ収集・清掃施設休業のお知らせ（令和8年度）",
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
            <span>年末年始のごみ収集・清掃施設休業のお知らせ（令和8年度）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月17日</span>
            <span>担当課：環境対策課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">年末年始のごみ収集・清掃施設休業のお知らせ（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年の年末年始におけるごみ収集日程および日野原市環境センター（清掃工場）の休業期間についてお知らせします。
              通常の収集日と異なる場合がありますので、ご確認のうえ、正しい日にごみをお出しください。
            </p>

            <div style={{ background: "#fff8e6", border: "1px solid #e0b040", padding: "10px 14px", borderRadius: 3, marginBottom: 20 }}>
              <strong>【重要】年末最終収集日・年始収集開始日</strong>
              <ul style={{ margin: "6px 0 0 0", paddingLeft: 20 }}>
                <li>年末の最終収集日：<strong>令和8年12月28日（月曜日）</strong></li>
                <li>年始の収集開始日：<strong>令和9年1月5日（月曜日）</strong></li>
              </ul>
              <p style={{ marginTop: 8, marginBottom: 0, fontSize: 12, color: "#666" }}>
                ※12月29日（火）〜1月4日（日）の間は収集を行いません。この期間のごみは、年始の収集開始日以降にお出しください。
              </p>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>1．ごみ収集日程の変更一覧</h3>
            <p>各収集区分の年末年始の変更日程は以下のとおりです。</p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "30%" }}>収集区分</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>年末最終収集</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>年始収集開始</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["燃やすごみ", "令和8年12月28日（月）", "令和9年1月5日（月）"],
                  ["プラスチック製容器包装", "令和8年12月25日（金）", "令和9年1月8日（木）"],
                  ["資源ごみ（缶・びん・ペットボトル等）", "令和8年12月26日（土）", "令和9年1月9日（金）"],
                  ["紙・布類", "令和8年12月24日（木）", "令和9年1月7日（水）"],
                  ["粗大ごみ（電話申込み制）", "令和8年12月22日（火）まで申込受付", "令和9年1月6日（火）より申込受付再開"],
                ].map(([kind, last, first]) => (
                  <tr key={kind}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{kind}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{last}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{first}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666" }}>
              ※地区によって収集曜日が異なります。収集開始日は上記を基準に各地区の曜日に応じてご確認ください。<br />
              ※詳細な地区別日程は、各ご家庭にお配りしているごみ収集カレンダーでご確認いただくか、環境対策課（下記）にお問い合わせください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>2．日野原市環境センター（清掃工場）の休業について</h3>
            <p>
              ごみの直接持ち込み搬入ができる日野原市環境センターは、年末年始の下記期間を休業いたします。
              休業期間中はごみの直接搬入（個人・事業者ともに）ができませんのでご注意ください。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <tbody>
                {[
                  ["休業期間", "令和8年12月29日（火）〜 令和9年1月3日（土）（6日間）"],
                  ["受入れ再開", "令和9年1月4日（日）（ただし燃やすごみのみ。午前8時30分〜正午）"],
                  ["通常業務再開", "令和9年1月5日（月）8:30〜 より通常通り受入れ"],
                  ["通常の受入れ時間", "平日 8:30〜16:30（土曜日は12:00まで受付、日曜・祝日は休業）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", textAlign: "left", fontWeight: "normal", whiteSpace: "nowrap", width: 160 }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>3．年末年始のごみ出しに際してのお願い</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>年末は大掃除等で普段より多くのごみが出ます。指定ごみ袋が足りなくなる前に早めにご用意ください。</li>
              <li>大掃除で出た家具・家電などの粗大ごみは、事前に環境対策課へお申し込みいただく必要があります（電話申込み制、有料）。</li>
              <li>飲食の機会が増えるお正月に向けて、生ごみの水切りをしっかり行い、臭気・害虫の発生にご注意ください。</li>
              <li>年末年始の収集休止期間中に、ごみ集積場に出さないようご注意ください。不法投棄となる場合があります。</li>
            </ul>
            <div style={{ background: "#f4f8ff", border: "1px solid #b0c8e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>分別方法・収集カレンダーの確認は</strong><br />
              <span style={{ display: "block", marginTop: 6 }}>
                ・<a href="/kurashi/gomi" style={{ color: "var(--link-color)" }}>ごみの出し方・分別（くらし・手続きページ）</a><br />
                ・地区別ごみ収集カレンダー（各ご家庭への配布済み、または環境対策課窓口で配布中）
              </span>
            </div>
          </div>

          <PageInfo department="環境対策課" division="廃棄物対策係" tel="0439-88-1293（内線 293）" updated="令和8年11月17日" />
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
