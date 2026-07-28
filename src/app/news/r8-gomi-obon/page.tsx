import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "山の日・お盆期間中のごみ収集について（令和8年度）",
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
            <span>山の日・お盆期間中のごみ収集について（令和8年度）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月28日</span>
            <span>担当課：環境対策課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">山の日・お盆期間中のごみ収集について（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の山の日（8月11日・火曜日）および、お盆期間中のごみ収集日程・環境センターの受入れ時間についてお知らせします。収集日の変更や環境センターの休業期間をご確認のうえ、引き続きごみ出しのルールをお守りいただきますようお願いいたします。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e0c060", padding: "10px 14px", borderRadius: 3, marginBottom: 20 }}>
              <strong>【ご注意】</strong><br />
              8月11日（火・山の日）の収集は振替となります。詳細は下記をご確認ください。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>1．山の日（8月11日・火曜日）の収集振替について</h3>
            <p>
              8月11日（火曜日）は「山の日」（国民の祝日）のため、当日に収集を予定していた地区のごみ収集は、翌<strong>8月12日（水曜日）</strong>に振り替えて実施します。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "35%" }}>種類</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>振替日・対象</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["燃やすごみ", "8月11日（火）収集予定の全地区 → 8月12日（水）に振替"],
                  ["資源ごみ（缶・びん・ペットボトル等）", "8月11日（火）収集予定の全地区 → 8月12日（水）に振替"],
                  ["紙・布類（集団回収を含む）", "8月11日（火）収集予定の全地区 → 8月12日（水）に振替"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>振替日（8月12日）の朝は収集が集中します。ごみは前日（8月11日・祝日当日）の夜から出さず、必ず<strong>当日（8月12日）の朝8時まで</strong>に集積場へお出しください。</li>
              <li>プラスチック製容器包装、小型家電等の収集日程に変更はありません。</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>2．お盆期間中（8月12日〜16日）の収集について</h3>
            <p>
              お盆期間中（8月12日（水）〜16日（日））の燃やすごみ・資源ごみの収集は、<strong>通常のスケジュール通り実施</strong>します。ただし、8月12日（水）は山の日の振替収集が重なるため、収集作業に時間がかかる場合があります。あらかじめご了承ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>3．環境センター（ごみの直接搬入）のお盆期間休業について</h3>
            <p>
              日野原市環境センター（一般廃棄物処理場）は、以下の期間を休業とします。この期間中の直接搬入（持ち込みによる処理）はできませんのでご注意ください。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <tbody>
                {[
                  ["休業期間", "令和8年8月13日（木）〜8月15日（土）（3日間）"],
                  ["搬入受入れ再開", "令和8年8月18日（月）8:30〜"],
                  ["搬入受入れ時間（通常）", "平日 8:30〜16:30（土曜日は12:00まで受付）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 170, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>4．ごみ集積場の適切な管理にご協力を</h3>
            <p>
              気温が高い夏場は、ごみ集積場に臭気が発生しやすく、カラス・害虫等の被害も増加する時期です。各ご家庭および地区集積場当番の皆様には、引き続き以下の点についてご協力をお願いいたします。
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>燃やすごみは、指定のごみ袋に入れ口をしっかりと縛って出してください。</li>
              <li>生ごみは水分を十分に切り、新聞紙等に包んでから袋に入れると臭気を抑えられます。</li>
              <li>ごみは収集日当日の朝8時までに出し、前日夜からの早出しはご遠慮ください。</li>
              <li>集積場のネット・フタは、収集終了後にきちんと元に戻してください。</li>
            </ul>

            <div style={{ background: "#f4f8ff", border: "1px solid #b0c8e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>収集日程の詳細・分別方法のご確認は</strong><br />
              <span style={{ display: "block", marginTop: 6 }}>
                ・<a href="/kurashi/gomi" style={{ color: "var(--link-color)" }}>ごみの出し方・分別（くらし・手続きページ）</a><br />
                ・地区別収集日程表（各ご家庭への配布済み、または環境対策課窓口で配布中）
              </span>
            </div>
          </div>

          <PageInfo department="環境対策課" division="廃棄物対策係" tel="0439-88-1293（内線 293）" updated="令和8年7月28日" />
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
