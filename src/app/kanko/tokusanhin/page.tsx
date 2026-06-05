import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市の特産品" };

export default function TokusanhinPage() {
  return (
    <>
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/kanko">観光・移住</a><span>›</span><span>日野原市の特産品</span>
          </div>
          <h1 className="page-title">日野原市の特産品</h1>

          <div className="content-box">
            <h2 className="section-title">主要特産品のご紹介</h2>

            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px", borderBottom: "1px solid #ddd", paddingBottom: 4 }}>びわ（ぽんなわびわ・房州びわ）</h3>
            <div style={{ background: "#fffbe8", border: "1px solid #e8c840", padding: "8px 12px", fontSize: 12, marginBottom: 8, lineHeight: 1.7 }}>
              <strong>🏆 ぽんなわびわ</strong>　令和4年「千葉県地理的表示推奨産品」認定。市内旧本縄地区（ほんなわ→ぽんなわ）に江戸時代末期から伝わる希少な在来品種。糖度15〜17度・大玉（1個90〜120g）・皮薄で種小さく食べやすいのが特徴。一般的な房州びわより2週間ほど早い5月上旬〜下旬が旬。生産農家14戸・年産約3.8トン。ふるさと納税の返礼品でも人気No.1。
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>温暖な房総丘陵の気候が育む、甘みと香りが豊かなびわ。千葉県は全国第2位のびわ産地で、千葉県南部が中心産地です。日野原市では「ぽんなわびわ（5月）」に続き「房州早生（6月）」まで長い旬を楽しめます。収穫期には観光農園でのびわ狩り体験も人気です。毎年6月中旬に「日野原びわまつり」を開催しています。</p>

            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px", borderBottom: "1px solid #ddd", paddingBottom: 4 }}>落花生</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>千葉県は全国1位の落花生産地。日野原市でも広く栽培されており、収穫期（8〜9月）には落花生掘り体験も実施しています。煎り落花生・ゆで落花生・落花生バターなど多様な加工品も人気です。毎年10月に「落花生フェスタ」を開催します。</p>

            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px", borderBottom: "1px solid #ddd", paddingBottom: 4 }}>房総野菜</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>里芋・さつまいも・ほうれんそう・大根など、房総丘陵の温暖な気候と肥沃な土で育つ房総野菜。里芋は特に品質が高く、収穫期（9〜11月）に道の駅や直売所で新鮮なものが手に入ります。</p>

            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px", borderBottom: "1px solid #ddd", paddingBottom: 4 }}>ひのはら味噌</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>地元産の大豆と米を使い、1年以上じっくり熟成させた房総の発酵文化に根ざした発酵食品。市内の「ひのはら味噌工房」が製造する「白嶺こうじ味噌」は、全国味噌品評会で入賞歴があります。</p>

            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px", borderBottom: "1px solid #ddd", paddingBottom: 4 }}>白嶺牛乳</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>白嶺高原の清澄な空気と豊富な牧草で育った乳牛からとれる濃厚な牛乳。「白嶺乳業」が製造するノンホモ牛乳・ヨーグルトは市内外のファンから人気を集めています。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">農産物直売所・道の駅一覧</h2>
            <table className="content-table">
              <thead>
                <tr><th>名称</th><th>住所</th><th>営業時間</th><th>電話</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>道の駅「ひのはら原野」</strong></td>
                  <td>原野字上原1234（国道410号沿い）</td>
                  <td>9:00〜18:00（冬季〜17:00）火定休</td>
                  <td>☎0100-58-7700</td>
                </tr>
                <tr>
                  <td>中央直売所「みのりの里」</td>
                  <td>中央3丁目5-2</td>
                  <td>8:00〜12:00（土日のみ）</td>
                  <td>☎0100-88-9900</td>
                </tr>
                <tr>
                  <td>白嶺農産物直売所</td>
                  <td>白嶺字里255</td>
                  <td>9:00〜16:00（6〜10月のみ）</td>
                  <td>☎0100-56-4455</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">通信販売・ふるさと納税</h2>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>市内特産品は通信販売でお取り寄せいただけます。また、日野原市のふるさと納税返礼品として全国からご支援いただいており、令和7年度の寄附額は<strong>約5.8億円</strong>を記録しました。主な返礼品: 房州びわ詰め合わせ・落花生セット・里芋セット・棚田米・ひのはら味噌・地域商品券。</p>
            <p style={{ fontSize: 12, color: "#666" }}>詳細はふるさと納税ポータルサイト（さとふる・ふるさとチョイス等）で「日野原市」を検索してください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">地元食品事業者のご紹介</h2>
            <table className="content-table">
              <thead>
                <tr><th>事業者名</th><th>主な商品</th><th>見学・直売</th></tr>
              </thead>
              <tbody>
                <tr><td>ひのはら味噌工房</td><td>白嶺こうじ味噌・減塩味噌・麦味噌</td><td>直売あり（要事前連絡）☎0100-55-1188</td></tr>
                <tr><td>日野原農産加工所</td><td>煎り落花生・落花生バター・落花生油</td><td>工場直売所（月〜土 9:00〜17:00）</td></tr>
                <tr><td>白嶺乳業（株）</td><td>白嶺牛乳・ヨーグルト・バター・チーズ</td><td>牧場見学・直売（土日のみ）</td></tr>
                <tr><td>高原菓子工房「ひのはら堂」</td><td>びわゼリー・落花生まんじゅう・地酒ケーキ</td><td>市内2店舗にて販売</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">ひのはらブランド認定品（全26品目）</h2>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>日野原市は地域産品のブランド価値向上を図るため、「ひのはらブランド」認定制度を設けています。品質・地域性・独自性の基準を満たした26品目を認定（令和8年度現在）。</p>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>主な認定品: 白嶺こうじ味噌 / ぽんなわびわ / 房州びわ（房州早生・大房） / 白嶺牛乳 / ひのはら落花生（煎り・ゆで・バター）/ 棚田米コシヒカリ / 房総里芋 / ひのはら天然はちみつ / 菜種油「ひのはらの花」/ 干しきのこセット（エリンギ・なめこ）/ 白嶺バター / ひのはら地酒「白嶺の雫」（3種）/ びわゼリー・びわジャム / 落花生ドライフルーツ / 房総本染め（日野原更紗）/ 木工クラフト「白嶺の森」/ ほか</p>
            <p style={{ fontSize: 12, color: "#666" }}>認定品の詳細一覧は観光振興課・観光協会窓口にてパンフレットを配布しています。</p>
          </div>
          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
