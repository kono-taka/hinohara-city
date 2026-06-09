import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "夏の水難事故防止について（令和8年度）",
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
            <span>夏の水難事故防止について（令和8年度）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年6月9日</span>
            <span>担当課：消防本部 予防課</span>
            <span className="news-tag important" style={{ fontSize: 11 }}>重要</span>
          </div>

          <h1 className="page-title">夏の水難事故防止について（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              梅雨が明け気温が上昇する時期を前に、市内の河川や水辺でのレジャーが増えるとともに、水難事故のリスクも高まります。日野原市消防本部では、市民の皆様が安全に夏の水辺を楽しんでいただけるよう、注意事項をお知らせします。
            </p>

            <div style={{ background: "#fff3f3", border: "1px solid #e8a0a0", padding: "10px 14px", borderRadius: 3, marginBottom: 16 }}>
              <strong>原野川・白嶺渓流付近での遊泳・立入は危険です</strong><br />
              原野川（下原地区〜北部地区）および白嶺高原の渓流沿いは、増水時に流れが急変します。増水・濁流が予測される雨天時・雨天翌日は、河川敷や渓流への立入を厳にお控えください。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>水難事故が多く発生する場所と状況</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>河川の浅瀬・中洲付近（急な増水による孤立）</li>
              <li>渓流・滝つぼ周辺（足場が滑りやすく転落しやすい）</li>
              <li>海岸・磯（離岸流・高波）</li>
              <li>農業用水路（護岸が急傾斜で脱出困難）</li>
              <li>プール・貯水槽（監視の手が届かない時間帯）</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>水辺での安全のポイント</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "30%" }}>場面</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>注意事項</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["河川・渓流", "必ず複数人で行動し、単独での入水はしないでください。ライフジャケットを着用し、天気予報・河川情報を事前に確認してください。上流で雨が降っている場合は、晴天でも急激に増水することがあります。"],
                  ["子どもの水遊び", "大人が必ず目を離さないでください。浮き輪・救命具を活用し、子どもだけで水辺に近づかせないようにしましょう。農業用水路は特に危険です。"],
                  ["プール（家庭用含む）", "幼児用プールであっても少量の水で溺水が起こります。使用しない時間帯は必ず水を抜くか蓋をしてください。子どもから目を離さないでください。"],
                  ["飲酒後", "飲酒後の水泳・ボート等の水上活動は絶対にしないでください。判断力・体力が著しく低下し、事故の危険が高まります。"],
                ].map(([scene, note]) => (
                  <tr key={scene}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold", verticalAlign: "top" }}>{scene}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>水難事故を目撃した・救助が必要な場合</h3>
            <p>
              溺れている人を発見した際は、まず<strong>119番</strong>または<strong>110番</strong>に通報してください。助けようと自ら飛び込む行為は、二次被害につながる危険があります。
              浮き輪・ペットボトル・ロープなど身近にあるものを投げて浮力を確保しながら、救助隊の到着を待ちましょう。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>市内の主な遊泳禁止・注意エリア（令和8年度）</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>原野川 下原橋〜中野橋区間（急流・転落注意）</li>
              <li>白嶺渓流 第一堰堤上流（立入禁止区域設定済み）</li>
              <li>北部地区 農業用幹線水路沿い（護岸整備工事中）</li>
            </ul>
            <p style={{ color: "#666" }}>
              ※上記以外の場所でも、河川への無断立入・遊泳は地権者や周辺住民の迷惑となる場合があります。ルールを守ってご利用ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>水難事故・救急に関する問い合わせ先</strong><br />
              <span style={{ display: "block", marginTop: 6 }}>
                ・緊急の場合　☎ <strong>119</strong>（救急・火災）<br />
                ・日野原市消防本部 予防課　☎ 0439-88-1119（内線 291）　平日 8:30〜17:15<br />
                ・千葉県水難事故防止キャンペーン情報　千葉県防災安全部（代表 043-223-2110）
              </span>
            </div>
          </div>

          <PageInfo department="消防本部 予防課" tel="0439-88-1119（内線 291）" updated="令和8年6月9日" />
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
