import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "道の駅ひのはら（原野地区）",
  description: "日野原市の道の駅「ひのはら原野」のご案内。農産物直売所・地元グルメ食堂・観光情報コーナー・毎週土曜の朝市など。国道410号沿い。",
};

export default function MichiNoEkiPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "施設案内", href: "/shisetsu" },
        { name: "道の駅ひのはら（原野地区）" },
      ]} />
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>道の駅ひのはら（原野地区）</span>
          </div>
          <h1 className="page-title">道の駅ひのはら（原野地区）</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">道の駅ひのはらへようこそ</h2>
            <p style={{ fontSize: 13, lineHeight: 1.85 }}>
              「道の駅ひのはら原野」は、国道410号沿い・原野地区に位置する日野原市唯一の道の駅です。
              市内の農家が持ち込む朝採れ野菜や果物、びわ・落花生・里芋などの特産品のほか、
              地元食材を活かした食堂、観光情報コーナーを備えています。
              <strong>毎週土曜日の朝市</strong>（8:00〜10:00）は地元住民や観光客で賑わう人気イベントです。
            </p>
          </div>

          {/* ── 基本情報 ── */}
          <div className="content-box">
            <h2 className="section-title">基本情報</h2>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 130 }}>名称</th><td>道の駅ひのはら（愛称：原野の里）</td></tr>
                <tr><th>所在地</th><td>〒298-0XXX　千葉県日野原市原野字宮前246番地</td></tr>
                <tr><th>電話番号</th><td>☎ 0100-55-8000</td></tr>
                <tr><th>営業時間</th><td>
                  農産物直売所・売店：9:00〜17:00（年中無休）<br />
                  食堂：11:00〜15:00（月曜定休）<br />
                  土曜朝市：8:00〜10:00（売切次第終了）
                </td></tr>
                <tr><th>休業日</th><td>食堂のみ月曜定休。年末年始（12月31日〜1月2日）は全施設休業。</td></tr>
                <tr><th>駐車場</th><td>無料・200台（大型車15台分含む）　※祭り期間中は臨時駐車場あり</td></tr>
                <tr><th>トイレ</th><td>24時間利用可能（多目的トイレあり）</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── 施設案内 ── */}
          <div className="content-box">
            <h2 className="section-title">施設・コーナーのご案内</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, border: "1px solid var(--border-light)", borderBottom: "none" }}>
              {[
                {
                  icon: "🥬",
                  name: "農産物直売所（産直コーナー）",
                  desc: "市内農家約120戸が出荷する新鮮な農産物を毎朝入荷。ぽんなわびわ（5月・要確認）・房州びわ（6月）・落花生（9〜10月）・里芋・棚田米・菜の花・山菜・きのこなど、季節の旬の品が揃います。加工品（びわゼリー・落花生バター・ひのはら味噌・棚田米）も充実。",
                },
                {
                  icon: "🍱",
                  name: "地元食堂（原野食堂）",
                  desc: "里芋コロッケ定食・落花生入りカレー・びわソフトクリームなど、地元食材を使った日替わりメニューを提供。人気の「山の幸定食」（850円）は里芋・山菜・棚田米の組み合わせ。席数40席。",
                },
                {
                  icon: "🗺️",
                  name: "観光情報コーナー",
                  desc: "日野原市の観光パンフレット・ハイキングマップ・宿泊情報などを無料配布。観光協会スタッフが観光相談にも対応します（土日祝のみ）。",
                },
                {
                  icon: "🌸",
                  name: "ひのぽんショップ",
                  desc: "市マスコット「ひのぽん」グッズ・オリジナル商品を販売。日野原市限定のびわ飴・落花生プリンなどのお土産品も好評。",
                },
                {
                  icon: "🌳",
                  name: "休憩・緑地エリア",
                  desc: "敷地内に木製ベンチ・テーブルを設置。桜並木（4月中旬〜下旬）や山野草を眺めながら休憩できます。",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, padding: "12px 14px", borderBottom: "1px solid var(--border-light)", background: "#fff" }}>
                  <div style={{ fontSize: 28, flexShrink: 0, width: 40, textAlign: "center" }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 4 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 土曜朝市 ── */}
          <div className="content-box" style={{ borderLeft: "4px solid #f9a825", background: "#fffde7" }}>
            <h2 className="section-title">毎週土曜日 特設朝市「原野の朝市」</h2>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 100 }}>開催日時</th><td>毎週土曜日 8:00〜10:00（売り切れ次第終了）</td></tr>
                <tr><th>内容</th><td>通常の直売所に加え、農家が直接販売するコーナーを展開。朝採れ野菜・卵・自家製漬物・豆腐などを特価販売。</td></tr>
                <tr><th>備考</th><td>悪天候の場合は中止または規模縮小する場合があります。道の駅Facebookページ・市ウェブサイトでご確認ください。</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── アクセス ── */}
          <div className="content-box">
            <h2 className="section-title">アクセス</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 100 }}>お車</th>
                  <td>館山自動車道「君津IC」より国道410号経由 約25分<br />東京湾アクアライン（木更津東IC）から 約1時間10分</td>
                </tr>
                <tr>
                  <th>バス</th>
                  <td>市営ひのはらバス「原野温泉線」「原野温泉」行き乗車 → 「道の駅ひのはら前」バス停下車すぐ</td>
                </tr>
                <tr>
                  <th>高速バス</th>
                  <td>東京駅八重洲口〜日野原中央バスターミナル（高速バス）→ 中央バスターミナルで原野温泉線に乗換え</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>道の駅直通</th><td>☎ <strong>0100-55-8000</strong>（9:00〜17:00）</td></tr>
                <tr><th>管理・運営</th><td>日野原市産業振興公社　（産業振興課 ☎ 0100-88-1144）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="産業振興課" division="地域産業係" tel="0100-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
