import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 秋の全国交通安全運動 実施のお知らせ（9月21日〜30日）",
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
            <span>令和8年度 秋の全国交通安全運動 実施のお知らせ</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年8月21日</span>
            <span>担当課：総務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 秋の全国交通安全運動 実施のお知らせ（9月21日〜30日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 秋の全国交通安全運動が、9月21日（日）から9月30日（火）までの10日間、全国一斉に実施されます。
              日野原市では、千葉県交通安全運動推進委員会および日野原警察署と連携し、市内各地で街頭啓発活動等を行います。
              市民の皆様のご理解とご協力をお願いいたします。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 運動期間</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年9月21日（日）〜 9月30日（火）</span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>令和8年度の重点目標</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li><strong>子供と高齢者をはじめとする歩行者の安全確保</strong></li>
              <li><strong>夕暮れ時・夜間の交通事故防止と反射材・ライトの活用</strong></li>
              <li><strong>飲酒・ながらスマホ運転の根絶</strong></li>
              <li><strong>自転車・電動キックボードの安全利用の推進</strong></li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>市内における主な取組</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "30%" }}>日時</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>内容・場所</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["9月21日（日）7:00〜", "街頭啓発・交通安全キャンペーン（市役所前 国道沿い）"],
                  ["9月22日（月）〜30日（火）朝", "通学路等における交通安全指導（各小・中学校 通学路）"],
                  ["9月25日（木）18:00〜", "夕暮れ時の一斉街頭指導（中央地区・北部地区 主要交差点）"],
                  ["9月30日（火）", "交通安全運動最終日 広報活動（市内巡回 広報車）"],
                ].map(([time, content], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{time}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{content}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※上記の取組は天候等の状況により変更・中止となる場合があります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>秋の交通事故防止のポイント</h3>
            <p>
              秋は日没が早まる時期であり、夕暮れ時の視認性の低下による交通事故が多くなります。ドライバーの方は早めのライト点灯を心がけ、歩行者・自転車の方は反射材の活用をお願いします。また、稲刈りや農作業のシーズンでもあり、農業機械や軽トラックの道路通行が増えることから、相互の十分な注意が必要です。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>交通安全推進委員の協力依頼</h3>
            <p>
              市内の各地区交通安全推進委員の皆様には、街頭啓発活動や広報チラシの配布についてご協力をお願いしております。詳細は、後日、総務課よりご連絡いたします。
            </p>

            <div style={{ background: "#fff8f0", border: "1px solid #e8c888", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【交通事故防止を呼びかけましょう】</strong><br />
              「思いやり・ゆずり合い・安全確認」を合言葉に、市民一人ひとりが交通安全意識を高めていただきますようお願いいたします。
            </div>
          </div>

          <PageInfo department="総務課" division="生活安全係" tel="0439-88-1121（内線 121）" updated="令和8年8月21日" />
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
