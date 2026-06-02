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
              日野原市域は、房総丘陵の中央部に位置し、古来より豊かな森林と清らかな水に恵まれた地として人々の生活を育んできました。
              縄文時代から人の営みが確認されており、丘陵上の台地には多くの遺跡が残されています。
              中世には安房国・上総国の境界に近い要衝として、戦国大名里見氏の影響下に置かれ、林業・炭焼き・棚田農業を基盤とした山村社会が形成されました。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              江戸時代には幕府直轄領（天領）として安定した統治のもと、房総内陸部の林業が発展し、建材・薪炭の供給地として江戸の消費経済を支えました。
              明治の廃藩置県・郡制施行により日野郡が置かれ、日野町・原野村・白峰村の三町村が形成されました。
              大正から昭和にかけて林業の需要が変化し、ぽんなわびわ（在来種）・落花生・里芋などの農業や棚田米の生産が地域経済の柱となっていきました。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0" }}>
              戦後の高度経済成長期には人口が増加し、生活基盤の整備が進みました。しかしバブル経済崩壊後から過疎化・少子高齢化が加速し、
              行政の効率化と地域の持続可能性を確保するため、平成18年（2006年）3月20日に旧日野町・原野村・白峰村が合併して日野原市が誕生しました。
              現在は「山と水と人が輝く みんなのふるさと ひのはら」を将来像に掲げ、移住支援・農業振興・観光振興による地域再生に取り組んでいます。
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
                  <td>房総丘陵の台地上に集落が形成される。市内各所で縄文土器・石器が出土（原野遺跡群・下白峰貝塚ほか）。</td>
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
                  <td>安房里見氏の家臣団が丘陵各地に土豪として定着。日野郷・原野郷の地名が文書に初出する。</td>
                </tr>
                <tr>
                  <th>室町〜戦国時代</th>
                  <td>里見氏と後北条氏の抗争に巻き込まれ、白峰山麓に防御用の山城（白峰城跡）が築かれる。林業・炭焼きが盛んになる。</td>
                </tr>
              </tbody>
            </table>
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
                  <td>房総山林の伐採・運材が本格化。杉・ヒノキの植林が奨励され、原野川を利用した筏流しで木材が江戸へ運ばれる。</td>
                </tr>
                <tr>
                  <th>享保年間（1716〜36）</th>
                  <td>新田開発が進み、原野盆地に棚田が拡大。落花生・里芋の栽培が始まる。</td>
                </tr>
                <tr>
                  <th>天明3年（1783）</th>
                  <td>浅間山噴火による冷害・飢饉（天明の飢饉）が房総内陸部にも及び、当地域でも深刻な食糧不足が生じる。</td>
                </tr>
                <tr>
                  <th>文化・文政期（1804〜30）</th>
                  <td>白峰地区でびわの栽培が始まる。江戸への物資輸送路（日野街道）が整備される。</td>
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
                  <td>市町村制施行により日野町・原野村・白峰村が成立。日野郡（のちに君津郡に統合）に属する。</td>
                </tr>
                <tr>
                  <th>明治30年代</th>
                  <td>鉄道網の発達により安価な木材が流通し始め、房総内陸部の林業が徐々に衰退に向かう。</td>
                </tr>
                <tr>
                  <th>大正9年（1920）</th>
                  <td>第1回国勢調査。3村合計人口 約23,400人。農林業就業者が人口の75%を占める。</td>
                </tr>
                <tr>
                  <th>昭和6年（1931）</th>
                  <td>日野原農業組合が設立。落花生・びわの共同出荷が始まり、農家の収入が安定化する。</td>
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
                  <td>3村合計人口がピーク（約54,200人）に達する。白峰温泉が観光開発され、旅館・ホテルが相次いで開業する。</td>
                </tr>
                <tr>
                  <th>平成3年（1991）</th>
                  <td>バブル経済崩壊後、若年層の都市部流出が加速し、人口減少が続くようになる。</td>
                </tr>
                <tr>
                  <th>平成13年（2001）</th>
                  <td>日野町・原野村・白峰村による「日野原地域合併協議会」が設置される。行政の効率化と地域振興の観点から合併の検討を開始。</td>
                </tr>
                <tr>
                  <th>平成17年（2005）</th>
                  <td>合併協定書に調印。市名を「日野原市」とすることが決定される。合併前の3村合計人口51,492人。</td>
                </tr>
                <tr>
                  <th>平成18年3月20日（2006）</th>
                  <td><strong>日野原市が誕生。</strong>旧日野町・原野村・白峰村が合併し市制を施行。初代市長に田中義雄氏が就任。</td>
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
                  <td>市制施行20周年。記念式典を開催。人口42,381人（令和7年5月現在）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>合併の経緯と旧3町村の紹介</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 14px" }}>
              平成の市町村合併推進政策を背景に、行財政の効率化と住民サービスの維持・向上を目的として、旧日野町・原野村・白峰村が合併協議を進めました。
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
                  <td>約27,800人</td>
                  <td>市域最大の町。旧代官所跡に役場が置かれ、商業・行政の中心。落花生・棚田米の産地。</td>
                </tr>
                <tr>
                  <th>原野村<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（はらのむら）</span></th>
                  <td>原野地区</td>
                  <td>約112km²</td>
                  <td>約14,200人</td>
                  <td>原野川の源流域に位置する農業・林業の村。里芋・菜の花の産地として知られる。原野盆地に市役所が置かれた。</td>
                </tr>
                <tr>
                  <th>白峰村<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（しらみねむら）</span></th>
                  <td>白峰地区</td>
                  <td>約92km²</td>
                  <td>約9,500人</td>
                  <td>市域南部の山間村。びわ栽培の発祥地で温泉地（白峰温泉）としても知られる。豊かなブナ林が残る。</td>
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
          <PageInfo department="企画政策課" tel="0439-88-1114（内線 101）" updated="平成18年3月20日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
