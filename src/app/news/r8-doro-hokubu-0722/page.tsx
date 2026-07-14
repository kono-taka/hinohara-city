import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "市道 北部幹線（新田地内）舗装打換工事について（7月22日〜8月1日）",
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
            <span>市道 北部幹線（新田地内）舗装打換工事について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月14日</span>
            <span>担当課：建設課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">市道 北部幹線（新田地内）舗装打換工事について（7月22日〜8月1日）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              市道北部幹線（新田地区 新田南交差点〜日吉橋間）において、路盤を含む舗装の著しい劣化が確認されたため、下記のとおり舗装打換工事を実施します。工事期間中は交通規制を行いますので、ご不便をおかけしますが、ご理解・ご協力をお願いいたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>工事概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["工事名称", "市道北部幹線 舗装打換工事（令和8年度）"],
                  ["工事場所", "日野原市新田地区　新田南交差点〜日吉橋間　延長約420m"],
                  ["工事期間", "令和8年7月22日（火）〜8月1日（金）〔予定〕"],
                  ["施工時間", "平日 8:30〜17:00（土曜・日曜・祝日を除く）"],
                  ["工事内容", "アスファルト舗装打換・路盤補修・区画線塗り替え"],
                  ["施工業者", "（株）日野原建設工業（市内業者）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 120, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>交通規制について</h3>
            <p>
              工事期間中（施工時間帯）は、工事区間内において<strong>片側交互通行</strong>による交通規制を実施します。交通誘導員を配置しておりますが、通行に時間がかかる場合があります。お急ぎの際は迂回路のご利用をお勧めします。
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>夜間・土日祝日については交通規制を解除します（路面状況により、一部区間で仮舗装区間が残る場合があります）。</li>
              <li>緊急車両（救急・消防）の通行は常時確保しています。</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>推奨迂回路</h3>
            <p>
              工事区間を避けてお通りになる場合は、<strong>市道下新田線</strong>または<strong>千葉県道14号（日野原笠松線）</strong>をご利用ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e0c060", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【工期延長について】</strong><br />
              降雨・荒天等により施工が困難な場合は、工期を延長することがあります。工期に変更が生じた場合は、市公式ホームページおよび現地掲示板にてお知らせします。
            </div>
          </div>

          <PageInfo department="建設課" division="道路管理係" tel="0439-88-1261（内線 261）" updated="令和8年7月14日" />
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
