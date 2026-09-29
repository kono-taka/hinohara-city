import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内落花生直売所の開設について",
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
            <span>令和8年度 市内落花生直売所の開設について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年9月29日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内落花生直売所の開設について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市の秋の味覚を代表する落花生（ラッカセイ）の収穫が始まりました。
              市内各地の農家による直売所が順次開設されましたのでお知らせします。
              採れたての新鮮な落花生をぜひお求めください。
            </p>

            <div style={{ background: "#f5f0e8", border: "1px solid #c8b87a", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 直売期間（予定）</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年9月27日（土）〜 令和8年10月31日（土）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※収穫状況によっては、期間が前後する場合があります。各直売所へ事前にお問い合わせください。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な直売所一覧</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>場所・地区</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>営業時間（目安）</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["道の駅ひのはら 農産物コーナー", "中央地区 国道沿い", "9:00〜17:00（火曜定休）"],
                  ["みのりの里 農産物直売所", "中央地区 市農業公園内", "9:00〜16:00（月曜定休）"],
                  ["北部地区農家直売所（黒沢農園）", "北部地区 黒沢地内", "10:00〜なくなり次第終了"],
                  ["原野地区農家直売所（田中農場）", "原野地区 田代地内", "10:00〜なくなり次第終了"],
                  ["白峰地区農家直売所（山本農場）", "白峰地区 若葉台地内", "9:00〜15:00（土・日のみ）"],
                ].map(([name, loc, hours], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{loc}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontSize: 12 }}>{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※農家直売所は在庫がなくなり次第、当日の販売を終了することがあります。<br />
              ※雨天・強風時は急遽休業となる場合があります。あらかじめご了承ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>令和8年度の主な取扱品種</h3>
            <p>
              今年度は以下の品種を中心に販売を予定しています。
            </p>
            <ul style={{ paddingLeft: 20, marginTop: 4 }}>
              <li><strong>おおまさり</strong>（大粒・茹で落花生向け）：9月下旬〜10月中旬</li>
              <li><strong>千葉半立（ちばはんだち）</strong>（炒り豆・ピーナッツバター向け）：10月上旬〜10月下旬</li>
              <li><strong>ナカテユタカ</strong>（炒り豆向け）：10月中旬〜10月末</li>
            </ul>
            <p style={{ marginTop: 8 }}>
              特に「おおまさり」は、大粒で甘みが強く茹でて食べるのが絶品です。採れたての生落花生は鮮度が命ですので、
              お買い求めの際はできるだけ早めにお召し上がりください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>茹で落花生の作り方</h3>
            <p>
              生落花生は、さっと水洗いしたあと、塩分濃度3〜4%（水1リットルに対して塩30〜40g）の塩水で
              40〜50分程度ゆでるのが基本です。やわらかくなったら火を止め、塩水に漬けたまま冷ますと
              味がなじみます。茹でたてをそのままお召し上がりいただけます。
            </p>

            <div style={{ background: "#f0f4fa", border: "1px solid #b8c8e0", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【ふるさと納税の返礼品としても好評】</strong><br />
              日野原市のふるさと納税返礼品「日野原産 落花生セット」は、毎年10月上旬から受付を開始します。
              旬の落花生（生・乾燥）を農家から直送でお届けします。詳しくは<a href="/furusato" style={{ color: "var(--link-color)" }}>ふるさと納税のページ</a>をご覧ください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年9月29日" />
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
