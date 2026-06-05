import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市の歩み" };

export default function RekishiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>日野原市の歩み</span>
          </div>
          <h1 className="page-title">日野原市の歩み</h1>

          <div className="content-box" style={{ borderTop: "none" }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              日野原市域は、房総丘陵の中央部に位置し、古くから森林と水に支えられた暮らしが営まれてきました。
              丘陵上の台地や原野川流域では縄文時代から人の営みが確認され、市内各所に遺跡や集落跡が残されています。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              中世には、上総国と安房国の境界に近い山間地域として、在地武士や土豪による小規模な支配が行われました。
              室町から戦国期にかけては、安房里見氏と後北条氏の勢力争いの影響を受け、白嶺山麓には山城が築かれたと伝えられています。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              江戸時代には、山林資源を生かした林業・炭焼きと、谷筋に広がる棚田農業が地域の暮らしを支えました。
              薪炭や木材は、日野街道や原野川沿いの道を通じて内房方面へ運ばれ、周辺地域の生活や経済を支える資源となりました。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              明治以降は、日野町・原野村・白嶺村の三町村を中心に、農林業と小規模商業のまちとして発展しました。
              戦後の高度経済成長期には道路や生活基盤の整備が進む一方、若年層の市外流出や山間集落の人口減少が課題となりました。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0" }}>
              平成18年（2006年）3月20日、旧日野町・原野村・白嶺村が合併し、日野原市が誕生しました。
              現在は「山と水と人が輝く みんなのふるさと ひのはら」を将来像に掲げ、移住支援、農林業の振興、観光交流、公共交通の維持など、地域の持続可能性を高める取り組みを進めています。
            </p>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>年表</div>

          <div style={{ fontSize: 13, fontWeight: "bold", color: "var(--city-blue)", background: "#e8f0fb", padding: "6px 14px", borderLeft: "4px solid var(--city-blue)", marginBottom: 0 }}>
            古代・中世
          </div>
          <div className="content-box" style={{ borderTop: "none", marginBottom: 0 }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ whiteSpace: "nowrap", minWidth: 140 }}>縄文時代</th>
                  <td>房総丘陵の台地上に集落が形成される。市内各所で縄文土器・石器が出土（原野遺跡群・下原遺跡・白嶺台地遺跡ほか）。</td>
                </tr>
                <tr>
                  <th>弥生〜古墳時代</th>
                  <td>原野川流域に稲作農耕が広まる。丘陵上に前方後円墳を含む群集墳が築造される（日野古墳群）。</td>
                </tr>
                <tr>
                  <th>奈良・平安時代</th>
                  <td>上総国・安房国の国境近くに位置し、国衙への年貢輸送路として原野川沿いの道が整備される。</td>
                </tr>
                <tr>
                  <th>鎌倉時代</th>
                  <td>原野川流域を中心に在地武士や土豪が定着し、日野郷・原野郷の地名が文書に見られるようになる。</td>
                </tr>
                <tr>
                  <th>室町〜戦国時代</th>
                  <td>安房里見氏と後北条氏の勢力争いの影響を受け、白嶺山麓には防御用の山城（白嶺城跡）が築かれたと伝えられる。林業・炭焼きが盛んになる。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 下原遺跡 写真資料 */}
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fafafa", padding: "14px 16px", marginBottom: 0 }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 10, fontWeight: "bold", letterSpacing: "0.04em" }}>
              写真資料 ― 下原遺跡 発掘調査記録
            </div>

            {/* メイン：発掘現場 */}
            <figure style={{ margin: "0 0 10px" }}>
              <Image
                src="/images/rekishi/hakkutsu.png"
                alt="下原遺跡 発掘調査の様子"
                width={1536}
                height={1024}
                style={{ width: "100%", height: "auto", display: "block", border: "1px solid #ddd" }}
              />
              <figcaption style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.6 }}>
                下原遺跡の発掘調査（平成28年度）。発掘区画ごとにロープで仕切られた調査区内で、作業員が土層を丁寧に掘り進めている。スケール棒は50cm。
              </figcaption>
            </figure>

            {/* サブ：土器片・看板 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <figure style={{ margin: 0 }}>
                <Image
                  src="/images/rekishi/hakkutsu2.png"
                  alt="出土した縄文土器片"
                  width={1536}
                  height={1024}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid #ddd" }}
                />
                <figcaption style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.6 }}>
                  出土した縄文時代の土器片。土付きのまま取り上げられた状態。出土品の一部は市立歴史民俗資料館で展示している。
                </figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <Image
                  src="/images/rekishi/hakkutsu3.png"
                  alt="下原遺跡 現地説明看板"
                  width={1536}
                  height={1024}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid #ddd" }}
                />
                <figcaption style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.6 }}>
                  史跡公園内に設置された現地説明看板。国指定史跡として整備されており、見学は無料（4〜11月）。
                </figcaption>
              </figure>
            </div>
          </div>

          <div style={{ fontSize: 13, fontWeight: "bold", color: "var(--city-blue)", background: "#e8f0fb", padding: "6px 14px", borderLeft: "4px solid var(--city-blue)", marginBottom: 0, borderTop: "1px solid var(--border-light)" }}>
            近世（江戸時代）
          </div>
          <div className="content-box" style={{ borderTop: "none", marginBottom: 0 }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ whiteSpace: "nowrap", minWidth: 140 }}>慶長6年（1601）</th>
                  <td>里見氏の上総支配が終わり、当地域が江戸幕府直轄領（天領）となる。代官所が日野宿（現・中央地区）に設置される。</td>
                </tr>
                <tr>
                  <th>江戸中期</th>
                  <td>房総山林の伐採・運材が本格化。杉・ヒノキの植林が奨励され、原野川沿いの道や日野街道を通じて薪炭・木材が内房方面や江戸市場へ運ばれた。</td>
                </tr>
                <tr>
                  <th>享保年間（1716〜36）</th>
                  <td>新田開発が進み、原野盆地や山裾に棚田が広がる。里芋・雑穀などの栽培が行われる。</td>
                </tr>
                <tr>
                  <th>天明3年（1783）</th>
                  <td>浅間山噴火による冷害・飢饉（天明の飢饉）が房総内陸部にも及び、当地域でも深刻な食糧不足が生じる。</td>
                </tr>
                <tr>
                  <th>文化・文政期（1804〜30）</th>
                  <td>原野地区の本縄周辺でびわの栽培が始まる。のちに在来系統のびわとして受け継がれ、現在のブランドびわ「ぽんなわびわ」の基礎となる。江戸への物資輸送路（日野街道）が整備される。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ fontSize: 13, fontWeight: "bold", color: "var(--city-blue)", background: "#e8f0fb", padding: "6px 14px", borderLeft: "4px solid var(--city-blue)", marginBottom: 0, borderTop: "1px solid var(--border-light)" }}>
            近代（明治・大正・昭和前期）
          </div>
          <div className="content-box" style={{ borderTop: "none", marginBottom: 0 }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ whiteSpace: "nowrap", minWidth: 140 }}>明治4年（1871）</th>
                  <td>廃藩置県により木更津県に編入。翌年、千葉県が成立し千葉県の所管となる。</td>
                </tr>
                <tr>
                  <th>明治22年（1889）</th>
                  <td>市町村制施行により日野町・原野村・白嶺村が成立。日野郡（のちに君津郡に統合）に属する。</td>
                </tr>
                <tr>
                  <th>明治30年代</th>
                  <td>鉄道網の発達により安価な木材が流通し始め、房総内陸部の林業が徐々に衰退に向かう。明治後期から大正期にかけて、びわ・落花生などの換金作物の栽培が農家の副収入として広まっていく。</td>
                </tr>
                <tr>
                  <th>大正9年（1920）</th>
                  <td>第1回国勢調査。3村合計人口 約23,400人。農林業就業者が人口の75%を占める。</td>
                </tr>
                <tr>
                  <th>昭和6年（1931）</th>
                  <td>日野原農業組合が設立。びわ・落花生の共同出荷が始まり、農家の収入が安定化する。</td>
                </tr>
                <tr>
                  <th>昭和18年（1943）</th>
                  <td>戦時下の食糧増産令により棚田の開墾が進む。若年男性の徴兵により農業労働力が不足する。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ fontSize: 13, fontWeight: "bold", color: "var(--city-blue)", background: "#e8f0fb", padding: "6px 14px", borderLeft: "4px solid var(--city-blue)", marginBottom: 0, borderTop: "1px solid var(--border-light)" }}>
            現代（昭和後期・平成・令和）
          </div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ whiteSpace: "nowrap", minWidth: 140 }}>昭和30年代</th>
                  <td>高度経済成長の波及により君津・木更津の工業地帯へ通勤する居住者が増加し、人口が増加傾向に転じる。</td>
                </tr>
                <tr>
                  <th>昭和47年（1972）</th>
                  <td>国道465号の整備が完了し、市原市・君津市への交通アクセスが向上する。</td>
                </tr>
                <tr>
                  <th>昭和55年（1980）</th>
                  <td>3村合計人口がピーク（約48,600人）に達する。白嶺温泉が観光開発され、旅館・宿泊施設が相次いで開業する。</td>
                </tr>
                <tr>
                  <th>平成3年（1991）</th>
                  <td>バブル経済崩壊後、若年層の都市部流出が加速し、人口減少が続くようになる。</td>
                </tr>
                <tr>
                  <th>平成13年（2001）</th>
                  <td>日野町・原野村・白嶺村による「日野原地域合併協議会」が設置される。行政の効率化と地域振興の観点から合併の検討を開始。</td>
                </tr>
                <tr>
                  <th>平成17年（2005）</th>
                  <td>合併協定書に調印。市名を「日野原市」とすることが決定される。合併前の3村合計人口 約42,800人。</td>
                </tr>
                <tr>
                  <th>平成18年3月20日（2006）</th>
                  <td><strong>日野原市が誕生。</strong>旧日野町・原野村・白嶺村が合併し市制を施行。初代市長に田中義雄氏が就任。</td>
                </tr>
                <tr>
                  <th>平成21年（2009）</th>
                  <td>「日野原市移住・定住促進条例」を制定。空き家バンク制度を千葉県内でいち早く導入する。</td>
                </tr>
                <tr>
                  <th>平成28年（2016）</th>
                  <td>市制施行10周年。棚田米「日野原ひかり」が千葉県優良米品評会で最優秀賞を受賞。</td>
                </tr>
                <tr>
                  <th>令和5年（2023）</th>
                  <td>宮本誠二郎市長が2期目に就任。「第3次日野原市総合計画」（令和5〜14年度）を策定・公表。</td>
                </tr>
                <tr>
                  <th>令和8年3月（2026）</th>
                  <td>市制施行20周年。記念式典を開催。人口35,200人（令和7年5月現在）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 昭和の中央地区 古写真 */}
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fafafa", padding: "14px 16px", marginBottom: 18 }}>
            <div style={{ fontSize: 11, color: "#888", marginBottom: 10, fontWeight: "bold", letterSpacing: "0.04em" }}>
              写真資料 ― 昭和の中央地区（合併以前）
            </div>

            {/* メイン：商店街 */}
            <figure style={{ margin: "0 0 10px" }}>
              <Image
                src="/images/rekishi/showa-shotengai.png"
                alt="昭和40〜50年代の日野町中央商店街"
                width={1536}
                height={1024}
                style={{ width: "100%", height: "auto", display: "block", border: "1px solid #ddd" }}
              />
              <figcaption style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.6 }}>
                日野町中央商店街（昭和40年代後半ごろ）。電柱が連なる街道沿いに個人商店が並び、軽トラックが行き交う。当時の商店街は地域住民の生活の中心だった。／写真提供：日野原市文書館
              </figcaption>
            </figure>

            {/* サブ：旧役場・旧バス停 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <figure style={{ margin: 0 }}>
                <Image
                  src="/images/rekishi/kyu-yakuba.png"
                  alt="旧日野町役場庁舎"
                  width={1536}
                  height={1024}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid #ddd" }}
                />
                <figcaption style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.6 }}>
                  旧日野町役場庁舎（昭和40年代）。小規模な庁舎に古看板が掲げられ、合併まで行政の中心として機能した。現在は現存しない。／日野原市文書館所蔵
                </figcaption>
              </figure>
              <figure style={{ margin: 0 }}>
                <Image
                  src="/images/rekishi/kyu-basutei.png"
                  alt="日野街道沿いのバス停留所"
                  width={1536}
                  height={1024}
                  style={{ width: "100%", height: "auto", display: "block", border: "1px solid #ddd" }}
                />
                <figcaption style={{ fontSize: 11, color: "#666", marginTop: 5, lineHeight: 1.6 }}>
                  日野街道沿いのバス停留所（昭和50年代）。山間道路を走る路線バスは、当時の集落住民にとって欠かせない交通手段だった。／日野原市文書館所蔵
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>合併の経緯と旧3町村の紹介</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 14px" }}>
              平成の市町村合併推進政策を背景に、行財政の効率化と住民サービスの維持・向上を目的として、旧日野町・原野村・白嶺村が合併協議を進めました。
              平成13年（2001年）の合併協議会設置から約4年の協議を経て、平成18年（2006年）3月20日に日野原市が発足しました。
            </p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>旧町村名</th>
                  <th>現在の地区名</th>
                  <th>面積</th>
                  <th>合併直前人口</th>
                  <th>特色</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>日野町<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（ひのまち）</span></th>
                  <td>中央地区</td>
                  <td>約108km²</td>
                  <td>約23,100人</td>
                  <td>市域最大の町。旧代官所跡に役場が置かれ、商業・行政の中心。落花生・棚田米の産地。</td>
                </tr>
                <tr>
                  <th>原野村<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（はらのむら）</span></th>
                  <td>原野地区</td>
                  <td>約112km²</td>
                  <td>約11,700人</td>
                  <td>原野川の源流域に位置する農業・林業の村。里芋・菜の花の産地として知られる。本縄地区では在来系統のびわ栽培が受け継がれた。原野盆地に市役所が置かれた。</td>
                </tr>
                <tr>
                  <th>白嶺村<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（しらみねむら）</span></th>
                  <td>白嶺地区</td>
                  <td>約92km²</td>
                  <td>約8,000人</td>
                  <td>市域南部の山間村。温泉地（白嶺温泉）として知られ、林業と山間観光を中心に発展した。スギ・ヒノキの人工林とシイ・カシ類を中心とした照葉樹林が広がる。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>市名の由来</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 10px" }}>
              「日野原（ひのはら）」という市名は、合併した3町村のうち最大の旧日野町の「日野（ひの）」と、
              市役所が置かれる原野村の「原（はら）」を組み合わせたものです。
              また、「日野」は古くからこの地に広がる「日当たりのよい野」を意味し、「原」は房総丘陵内に広がる盆地状の
              平原を指すとも言われており、市域の地形的特徴をよく表した名称となっています。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 10px" }}>
              市名は平成17年（2005年）に公募が行われ、寄せられた約1,200件の応募の中から合併協議会が審議のうえ決定しました。
              「太陽の光が降り注ぐ、広々とした原野」というイメージが市民に親しまれ、新しいまちの名前として採用されました。
            </p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>市名</th>
                  <td>日野原市（ひのはらし）</td>
                </tr>
                <tr>
                  <th>由来</th>
                  <td>旧日野町の「日野（ひの）」＋旧原野村の「原（はら）」の合成。「日当たりのよい野と原」を意味する。</td>
                </tr>
                <tr>
                  <th>決定時期</th>
                  <td>平成17年（2005年）9月　合併協議会にて決定</td>
                </tr>
                <tr>
                  <th>公募件数</th>
                  <td>約1,200件（旧3町村住民・出身者から募集）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="企画政策課" tel="0100-88-1114（内線 101）" updated="令和8年6月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
