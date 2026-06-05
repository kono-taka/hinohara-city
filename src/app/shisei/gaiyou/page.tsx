import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日野原市の紹介",
  description: "日野原市の基本情報・人口・地理・産業・シンボルをご紹介します。人口35,200人・面積312.41km²。千葉県南部内陸に位置する房総丘陵の山間の市です。",
};

const stats = [
  { label: "総人口",     value: "35,200", unit: "人",   note: "令和7年5月1日現在" },
  { label: "世帯数",     value: "14,500", unit: "世帯", note: "令和7年5月1日現在" },
  { label: "総面積",     value: "312.41", unit: "km²",  note: "千葉県内第14位" },
  { label: "市制施行",   value: "2006",   unit: "年",   note: "平成18年3月20日" },
];

const symbols = [
  { label: "市章",   value: "市民公募により制定（平成18年3月）",   icon: "🏛" },
  { label: "市の木", value: "タブノキ",   icon: "🌳" },
  { label: "市の花", value: "ヤマユリ",   icon: "🌸" },
  { label: "市の鳥", value: "ルリビタキ", icon: "🐦" },
  { label: "市の歌", value: "「山よ　原よ　ひのはら」", icon: "🎵" },
  { label: "マスコット", value: "ひのぽん", icon: "🦔" },
];

const relatedLinks = [
  { label: "日野原市の歴史",          href: "/shisei/rekishi",  desc: "縄文時代から市制施行まで" },
  { label: "市政概要・統計データ",    href: "/shisei/gaiyou",   desc: "人口・面積などの統計資料" },
  { label: "総合計画",                href: "/shisei/keikaku",  desc: "第3次日野原市総合計画" },
  { label: "財政情報",                href: "/shisei/zaisei",   desc: "予算・決算の概要" },
  { label: "組織・部署案内",          href: "/shisei/soshiki",  desc: "市役所各部署の電話・場所" },
  { label: "市長室・市長挨拶",        href: "/mayor",           desc: "市長プロフィール・メッセージ" },
  { label: "ひのぽん（マスコット）",  href: "/shisei/mascot",   desc: "マスコットキャラクター紹介" },
  { label: "観光・移住",              href: "/kanko",           desc: "日野原市の魅力・移住支援" },
];

export default function GaiyouPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "市政情報", href: "/shisei" },
        { name: "日野原市の紹介" },
      ]} />
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>日野原市の紹介</span>
          </div>
          <h1 className="page-title">日野原市の紹介</h1>

          {/* ── 市章 ＋ キャッチ ── */}
          <div className="content-box" style={{
            display: "flex", gap: 24, alignItems: "center",
            background: "linear-gradient(135deg, #eaf3ef 0%, #f5faf7 100%)",
            borderLeft: "4px solid #1a6e5a",
          }}>
            <Image
              src="/images/emblem/emblem.png"
              alt="日野原市章"
              width={110}
              height={110}
              style={{ flexShrink: 0 }}
            />
            <div>
              <p style={{ fontSize: 20, fontWeight: "bold", color: "#1a6e5a", marginBottom: 6, lineHeight: 1.4 }}>
                日野原市（ひのはらし）
              </p>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.85, margin: 0 }}>
                千葉県南部内陸地域に位置する、緑豊かな山間の市です。<br />
                旧日野町・原野村・白嶺村が合併し、平成18年（2006年）3月20日に誕生しました。<br />
                「日々に、まなざしを。」をキャッチコピーに、自然と人が輝くまちづくりを進めています。
              </p>
            </div>
          </div>

          {/* ── キーデータ カード ── */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 12,
            margin: "20px 0",
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{
                background: "#fff",
                border: "1px solid #c8ddd5",
                borderTop: "3px solid #1a6e5a",
                borderRadius: 4,
                padding: "14px 12px",
                textAlign: "center",
              }}>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 26, fontWeight: "bold", color: "#1a6e5a", lineHeight: 1.1 }}>
                  {s.value}<span style={{ fontSize: 13, fontWeight: "normal", marginLeft: 2 }}>{s.unit}</span>
                </div>
                <div style={{ fontSize: 10, color: "#999", marginTop: 4 }}>{s.note}</div>
              </div>
            ))}
          </div>

          {/* ── 基本情報 表 ── */}
          <div className="content-box">
            <h2 className="section-title">基本情報</h2>
            <table className="content-table">
              <tbody>
                <tr><th>市名</th><td>日野原市（ひのはらし）</td></tr>
                <tr><th>所在地</th><td>千葉県南部内陸地域（房総丘陵中央部）</td></tr>
                <tr><th>市役所</th><td>〒299-1401　千葉県日野原市中央一丁目1番地1号<br />☎ 0100-88-1111（代表）</td></tr>
                <tr><th>市制施行日</th><td>平成18年（2006年）3月20日<br /><span style={{ fontSize: 12, color: "#666" }}>旧日野町・原野村・白嶺村の3町村が合併して発足</span></td></tr>
                <tr><th>総面積</th><td>312.41 km²</td></tr>
                <tr><th>人口密度</th><td>112.7人/km²</td></tr>
                <tr><th>隣接市町村</th><td>君津市、市原市、南房総市、鴨川市、鋸南町、富津市、木更津市</td></tr>
                <tr><th>標高</th><td>市役所付近：約240m　最高峰（大台山）：382m</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── 市のシンボル ── */}
          <div className="content-box">
            <h2 className="section-title">市のシンボル</h2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 10,
            }}>
              {symbols.map((s) => (
                <div key={s.label} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  padding: "10px 12px",
                  border: "1px solid #d8ede5",
                  borderRadius: 4,
                  background: "#f8fbf9",
                }}>
                  <span style={{ fontSize: 22 }}>{s.icon}</span>
                  <div>
                    <div style={{ fontSize: 11, color: "#888" }}>{s.label}</div>
                    <div style={{ fontSize: 13, fontWeight: "bold", color: "#1a6e5a" }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 10 }}>
              市章：「日野原」の頭文字「ひ」を図案化。三本の線は旧3町村の統合と房総丘陵の稜線を、
              円は市民の一体感と地域の調和を表します。（市民公募・平成18年3月制定）
            </p>
          </div>

          {/* ── 地理・地勢 ── */}
          <div className="content-box">
            <h2 className="section-title">地理・地勢</h2>
            <p style={{ fontSize: 13, lineHeight: 1.9, marginBottom: 10 }}>
              日野原市は千葉県南部内陸地域に位置し、東西約22km、南北約28kmにわたる山間の市です。
              市域の約72%を山林が占め、市街地は房総丘陵内の原野盆地（標高約230〜260m）に広がっています。
              市内には原野川とその支流が縦断し、気候は内陸性で夏涼しく、冬季は路面凍結やまれな降雪があります。市域は海に面しておらず、内房沿岸部へは車で約45分程度です。
              この豊かな自然がびわ・落花生・棚田米などの農業と、観光産業を支えています。
            </p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>地区区分</th>
                  <td>
                    <strong>中央地区</strong>（旧日野町）― 市役所・商店街・文化センター・市民病院など主要施設が集まる行政・商業の中心<br />
                    <strong>原野地区</strong>（旧原野村）― びわ・落花生・棚田米の産地。原野川沿いの農業集落。道の駅「ひのはら原野」<br />
                    <strong>白嶺地区</strong>（旧白嶺村）― 山林・温泉・ハイキングの中心。白嶺温泉郷・白嶺高原・白嶺ビジターセンター
                  </td>
                </tr>
                <tr><th>主な河川</th><td>原野川、白嶺川、下原川、槻沢川</td></tr>
                <tr><th>主な山岳</th><td>大台山（382m）、原野岳（379m）、高宕山（330m）、白嶺山（361m）</td></tr>
                <tr><th>森林面積</th><td>約17,800ha（市域の57.0%）</td></tr>
                <tr><th>農用地面積</th><td>約2,840ha（うち農地2,120ha）</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── 人口の推移 ── */}
          <div className="content-box">
            <h2 className="section-title">人口の推移</h2>
            <table className="content-table">
              <thead>
                <tr><th>年</th><th>人口（人）</th><th>世帯数</th><th>備考</th></tr>
              </thead>
              <tbody>
                <tr><td>平成17年（国勢調査）</td><td style={{ textAlign: "right" }}>51,492</td><td style={{ textAlign: "right" }}>18,344</td><td>合併前（3町村計）</td></tr>
                <tr><td>平成22年（国勢調査）</td><td style={{ textAlign: "right" }}>45,800</td><td style={{ textAlign: "right" }}>17,200</td><td></td></tr>
                <tr><td>平成27年（国勢調査）</td><td style={{ textAlign: "right" }}>43,200</td><td style={{ textAlign: "right" }}>16,500</td><td></td></tr>
                <tr><td>令和2年（国勢調査）</td><td style={{ textAlign: "right" }}>38,500</td><td style={{ textAlign: "right" }}>15,800</td><td></td></tr>
                <tr style={{ background: "#eaf3ef", fontWeight: "bold" }}>
                  <td>令和7年5月（住民基本台帳）</td>
                  <td style={{ textAlign: "right" }}>35,200</td>
                  <td style={{ textAlign: "right" }}>14,500</td>
                  <td>最新</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
              ※合計特殊出生率（令和5年）：1.18（全国平均1.20、千葉県平均1.23）
            </p>
          </div>

          {/* ── 産業 ── */}
          <div className="content-box">
            <h2 className="section-title">産業</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ whiteSpace: "nowrap" }}>農林業</th>
                  <td>市の基幹産業。びわ（ぽんなわびわ・房州びわ）・落花生・里芋・棚田米の生産が盛ん。農業産出額は約38億円（令和4年）。</td>
                </tr>
                <tr>
                  <th style={{ whiteSpace: "nowrap" }}>製造業</th>
                  <td>精密機械・電子部品製造業を中心に事業所が立地。製造品出荷額等：約245億円（令和3年）。</td>
                </tr>
                <tr>
                  <th style={{ whiteSpace: "nowrap" }}>観光業</th>
                  <td>年間入込客数：約78万人（令和5年度）。白嶺温泉郷・ハイキング・びわ狩り体験・落花生掘り体験が主な誘客資源。</td>
                </tr>
                <tr>
                  <th style={{ whiteSpace: "nowrap" }}>商業</th>
                  <td>中央商店街を中心に小売・飲食業が集積。年間商品販売額：約320億円（令和3年）。大型商業施設（ショッピングモール・映画館等）は木更津・君津方面（車30〜45分）を利用する市民が多い。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 生活圏 ── */}
          <div className="content-box">
            <h2 className="section-title">広域生活圏</h2>
            <table className="content-table">
              <tbody>
                <tr><th>大型商業・映画館</th><td>木更津市・君津市方面（車で約30〜45分）</td></tr>
                <tr><th>高校進学</th><td>市内2校（市立・私立）のほか、君津・木更津・市原方面への通学も多い</td></tr>
                <tr><th>高度医療</th><td>日野原市民病院（180床・二次救急）が中核。三次医療は君津中央病院・亀田総合病院（鴨川）へ</td></tr>
                <tr><th>就職・通勤</th><td>市内就労のほか、君津・木更津・市原の工業地帯へ通勤する市民も多い</td></tr>
                <tr><th>海へのアクセス</th><td>内房沿岸（富津・鋸南）へ車で約45分。海水浴・釣りは余暇圏として近接</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── 市民憲章 ── */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">市民憲章</h2>
            <p style={{ fontSize: 12, color: "#666", marginBottom: 12 }}>平成18年（2006年）9月制定</p>
            <ol style={{ paddingLeft: 20, fontSize: 14, lineHeight: 2.2, color: "#333", margin: 0 }}>
              <li>わたしたちは、豊かな自然を守り、美しいまちをつくります。</li>
              <li>わたしたちは、健康で明るい家庭を育てます。</li>
              <li>わたしたちは、互いに助けあい、温かい地域をつくります。</li>
              <li>わたしたちは、学び働き、活力あるまちを築きます。</li>
              <li>わたしたちは、ふるさとを愛し、誇りをもって未来を開きます。</li>
            </ol>
          </div>

          {/* ── 関連情報 ── */}
          <div className="content-box">
            <h2 className="section-title">関連情報</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
              {relatedLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex", flexDirection: "column",
                    padding: "10px 14px",
                    border: "1px solid #d0e4db",
                    borderRadius: 4,
                    textDecoration: "none",
                    background: "#fff",
                    transition: "background 0.15s",
                  }}
                >
                  <span style={{ fontSize: 13, fontWeight: "bold", color: "#1a6e5a" }}>▶ {item.label}</span>
                  <span style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{item.desc}</span>
                </a>
              ))}
            </div>
          </div>

          <PageInfo department="企画政策課" tel="0100-88-1114（内線 101）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
