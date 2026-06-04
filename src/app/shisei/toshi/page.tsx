import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "都市計画・土地利用",
  description: "日野原市都市計画マスタープランの概要、用途地域、開発許可など都市計画に関する情報をご案内します。",
};

const zoningItems = [
  { type: "第一種低層住居専用地域", area: "約 320ha", desc: "低層住宅が中心の静かな住環境を守る地域。市街地東部の住宅団地など。" },
  { type: "第二種低層住居専用地域", area: "約 85ha",  desc: "低層住宅を中心に、小規模な店舗・飲食店も立地できる地域。" },
  { type: "第一種中高層住居専用地域", area: "約 210ha", desc: "中高層マンション等が立地できる地域。市街地中央部など。" },
  { type: "第一種住居地域", area: "約 460ha", desc: "住居の環境を保護しながら店舗・事務所も立地できる地域。" },
  { type: "近隣商業地域", area: "約 95ha",  desc: "日常的な買い物に対応する商業施設が集まる地域。各駅周辺など。" },
  { type: "商業地域", area: "約 42ha",   desc: "銀行・飲食・サービス業等が集積する都心型商業地域。中央駅周辺。" },
  { type: "準工業地域", area: "約 130ha", desc: "危険性の低い工場・物流施設等が立地できる地域。" },
  { type: "工業地域", area: "約 68ha",   desc: "工場が主体の地域。住宅・学校の立地は制限。北部産業団地など。" },
];

const procedures = [
  {
    title: "開発許可申請",
    desc: "市街化区域で 1,000m² 以上、市街化調整区域では規模を問わず、土地の区画形質を変更する場合に必要です。",
    dept: "都市建設課（開発許可係）",
  },
  {
    title: "建築確認申請",
    desc: "建築物の新築・増改築・用途変更を行う場合、建築基準法に基づく確認が必要です。市内建築は千葉県建築指導課または指定確認検査機関が窓口です。",
    dept: "都市建設課（建築指導係）",
  },
  {
    title: "農地転用許可",
    desc: "農地を農業以外の目的に使用する場合、農地法に基づく許可または届出が必要です。4ha 超は農林水産大臣許可、それ以下は千葉県知事許可（市経由）。",
    dept: "農業委員会事務局",
  },
  {
    title: "都市計画変更の提案",
    desc: "土地権利者・NPO等が用途地域などの都市計画変更を市に提案できる制度です（都市計画法 第 21 条の 2）。",
    dept: "都市建設課（都市計画係）",
  },
];

export default function ToshiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>都市計画・土地利用</span>
          </div>
          <h1 className="page-title">都市計画・土地利用</h1>

          {/* マスタープラン概要 */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#eaf3ef" }}>
            <h2 className="section-title">日野原市都市計画マスタープランとは</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              都市計画マスタープランは、都市計画法第 18 条の 2 に基づき、市が独自に定める都市計画の基本方針です。
              20 年後の都市の将来像を示し、土地利用・交通・緑・景観などの分野別方針と地域別のまちづくり方針を定めています。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">計画の概要</h2>
            <table className="content-table">
              <tbody>
                <tr><th>計画名称</th><td>日野原市都市計画マスタープラン（第 2 次）</td></tr>
                <tr><th>計画期間</th><td>令和 4 年度（2022 年度）〜 令和 23 年度（2041 年度）<strong>　20 年計画</strong></td></tr>
                <tr><th>都市計画区域</th><td>市全域 312.4 km²（市街化区域 約 28 km² ／ 市街化調整区域 約 284 km²）</td></tr>
                <tr><th>目標とする都市像</th><td>「緑と水が織りなす　ひと・まち・自然が共生するコンパクトシティ　ひのはら」</td></tr>
                <tr><th>策定</th><td>令和 4 年 3 月（日野原市都市計画審議会の議を経て決定）</td></tr>
              </tbody>
            </table>
          </div>

          {/* 将来都市構造 */}
          <div className="content-box">
            <h2 className="section-title">将来都市構造</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 12 }}>
              市全体を「中心拠点」「地域拠点」「自然共生ゾーン」の 3 層構造で捉え、
              それぞれの役割を明確にしながら、持続可能なコンパクト＋ネットワーク型の都市構造を目指します。
            </p>
            {[
              { label: "中心拠点", color: "#1a6e5a", desc: "中央駅周辺。市全域を対象とした行政・商業・医療・交通の中枢機能を集積。" },
              { label: "地域拠点", color: "#2e7d32", desc: "北部・南部・東部の各駅周辺。日常生活サービスを提供する生活拠点として維持・強化。" },
              { label: "自然共生ゾーン", color: "#558b2f", desc: "市街化調整区域・農振地域。農地・森林・棚田景観を保全し、観光・交流の場として活用。" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 8, padding: "8px 12px", border: `1px solid ${item.color}`, borderRadius: 4 }}>
                <span style={{ background: item.color, color: "#fff", padding: "2px 10px", borderRadius: 12, fontSize: 12, whiteSpace: "nowrap", marginTop: 2 }}>{item.label}</span>
                <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 用途地域 */}
          <div className="content-box">
            <h2 className="section-title">用途地域（市街化区域）</h2>
            <p style={{ fontSize: 13, color: "#555", marginBottom: 12 }}>
              用途地域は、建築物の用途・高さ・容積率などを規制し、土地の合理的な利用を図るために定めています。
              市街化区域（約 28 km²）を 8 種類の用途地域に区分しています。
            </p>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: "35%" }}>用途地域</th>
                  <th style={{ width: "15%" }}>面積</th>
                  <th>概要</th>
                </tr>
              </thead>
              <tbody>
                {zoningItems.map((z) => (
                  <tr key={z.type}>
                    <td style={{ fontWeight: "bold", fontSize: 12 }}>{z.type}</td>
                    <td style={{ textAlign: "center", fontSize: 12 }}>{z.area}</td>
                    <td style={{ fontSize: 12 }}>{z.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※ 用途地域図（GIS マップ）は<a href="https://www.pref.chiba.lg.jp" target="_blank" rel="noopener noreferrer">千葉県都市計画情報提供サービス</a>でご確認いただけます。
            </p>
          </div>

          {/* 手続き */}
          <div className="content-box">
            <h2 className="section-title">主な都市計画手続き</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {procedures.map((p) => (
                <div key={p.title} style={{ border: "1px solid #d0e0d8", borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ background: "#1a6e5a", color: "#fff", padding: "6px 12px", fontWeight: "bold", fontSize: 13 }}>
                    {p.title}
                  </div>
                  <div style={{ padding: "8px 12px", background: "#fff" }}>
                    <p style={{ fontSize: 13, lineHeight: 1.7, margin: "0 0 4px" }}>{p.desc}</p>
                    <p style={{ fontSize: 12, color: "#666", margin: 0 }}>担当：{p.dept}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 計画書ダウンロード */}
          <div className="content-box">
            <h2 className="section-title">計画書・関連資料</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 2 }}>
              <li>日野原市都市計画マスタープラン（第 2 次）本編（PDF・全 148 ページ）</li>
              <li>日野原市都市計画マスタープラン 概要版（PDF・A4・12 ページ）</li>
              <li>用途地域図（A1 判・PDF）</li>
              <li>日野原市立地適正化計画（令和 5 年 3 月策定）</li>
              <li>日野原市景観計画（令和 3 年 3 月改定）</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666", marginTop: 4 }}>
              各資料は都市建設課窓口でも配布しています（無料）。
            </p>
          </div>

          {/* 問い合わせ */}
          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>都市建設課（都市計画係）</td></tr>
                <tr><th>電話</th><td>☎ <strong>0439-88-1130</strong>（内線 210）</td></tr>
                <tr><th>メール</th><td>toshi@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
                <tr><th>窓口場所</th><td>市役所本庁舎 2 階　都市建設課</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="都市建設課" division="都市計画係" tel="0439-88-1130（内線 210）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
