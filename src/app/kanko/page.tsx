import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "観光・移住", description: "白峰高原・やまびこ祭りなど観光情報、移住・定住支援制度、空き家バンク、特産品（びわ・落花生）など日野原市の魅力をご案内します。" };

const spots = [
  {
    name: "日野原アルプス（標高382m）",
    desc: "本市の象徴。6月下旬から7月にかけて房総の山野草が咲き誇り、ハイキング客で賑わいます。",
    season: "ハイキングシーズン：通年（春・秋が最適）",
    photo: "/images/spots/spot-alps.png",
    alt: "日野原アルプスの山並み",
  },
  {
    name: "白峰温泉郷",
    desc: "泉質はナトリウム・カルシウム－塩化物泉（食塩泉）。標高280mの丘陵地に湧く温泉で、周囲の照葉樹林が美しい。",
    season: "通年営業（旅館6軒・日帰り施設2か所）",
    photo: "/images/spots/spot-onsen2.png",
    alt: "白峰温泉郷の露天風呂",
  },
  {
    name: "原野川渓谷",
    desc: "全長約18kmの渓谷。新緑と紅葉の季節は特に美しく、ハイキングコースが整備されています。",
    season: "紅葉見頃：10月中旬〜11月上旬",
    photo: "/images/spots/spot-valley.png",
    alt: "原野川渓谷の紅葉",
  },
  {
    name: "下原遺跡（縄文時代）",
    desc: "縄文時代中期の遺跡。国指定史跡。出土品は市立歴史民俗資料館で展示。",
    season: "史跡公園：4月〜11月（無料）",
    photo: "/images/spots/spot-ruins.png",
    alt: "下原遺跡の史跡公園",
  },
  {
    name: "びわ狩り観光農園",
    desc: "市内旧本縄地区の幻の在来種「ぽんなわびわ」（5月旬）と、一般的な房州びわ（6月旬）の2シーズンでびわ狩りが楽しめます。特にぽんなわびわは糖度15〜17度の希少品です。",
    season: "ぽんなわびわ：5月上旬〜下旬　房州びわ：6月上旬〜下旬",
    photo: "/images/spots/spot-biwa.png",
    alt: "ぽんなわびわ狩り体験農園",
  },
  {
    name: "中央公園・市民の森",
    desc: "市街地に隣接する約8haの公園。桜並木（約300本）で春には花見客が多く訪れます。",
    season: "桜の見頃：4月中旬（例年）",
    photo: "/images/spots/spot-park.png",
    alt: "中央公園の桜並木",
  },
];

export default function KankoPage() {
  return (
    <>
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>観光・移住</span>
          </div>
          <h1 className="page-title">観光・移住</h1>

          <div className="section-title">日野原市の観光スポット</div>
          <div className="spot-grid" style={{ marginTop: 0, borderTop: "none" }}>
            {spots.map((s, i) => (
              <div key={i} className="spot-card">
                <div className="spot-photo" style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={s.photo}
                    alt={s.alt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="220px"
                  />
                </div>
                <div className="spot-body">
                  <h4>{s.name}</h4>
                  <p>{s.desc}</p>
                  <p style={{ marginTop: 6, fontSize: 11, color: "#888", background: "#f4f6fb", padding: "2px 6px", borderLeft: "2px solid var(--city-blue)" }}>
                    期間：{s.season}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>特産品・グルメ</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>びわ（ぽんなわびわ・房州びわ）</th>
                  <td>日野原市を代表する農産物。旧本縄地区の在来種「ぽんなわびわ」（5月・糖度15〜17度・千葉県地理的表示推奨産品）と「房州びわ」（6月）の二本柱。毎年6月中旬に「日野原びわまつり」を開催。</td>
                </tr>
                <tr>
                  <th>落花生</th>
                  <td>千葉県は全国1位の落花生産地。日野原市でも広く栽培。煎り落花生・ゆで落花生・落花生バターなど加工品も豊富。毎年10月に「落花生フェスタ」が開催されます。</td>
                </tr>
                <tr>
                  <th>ひのはら味噌</th>
                  <td>大豆と米麹を使った伝統的な味噌。「ひのはら味噌工房」の製品は市内スーパーや道の駅で販売。</td>
                </tr>
                <tr>
                  <th>山菜・きのこ</th>
                  <td>春はこごみ・わらび・たらの芽、秋はまいたけ・なめこ・えのき。道の駅では地元産の旬の山の幸を販売しています。</td>
                </tr>
                <tr>
                  <th>白峰牛乳・乳製品</th>
                  <td>白峰高原牧場産の生乳を使った牛乳・ヨーグルト・チーズ。牧場直営ショップで購入可。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>移住・定住支援</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <h3>日野原市への移住をお考えの方へ</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 12 }}>
              日野原市では、人口減少対策として移住・定住の促進に積極的に取り組んでいます。
              豊かな自然環境の中でのスローライフ、テレワークを活用した働き方など、
              都市部とは異なる暮らしのスタイルをご提案します。
            </p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>移住支援金</th>
                  <td>東京圏から移住した方に対し、最大100万円（単身は60万円）の支援金を交付します。（要件あり）</td>
                </tr>
                <tr>
                  <th>空き家バンク</th>
                  <td>市内の空き家・空き地情報を提供しています。現地見学の調整もお手伝いします。</td>
                </tr>
                <tr>
                  <th>お試し移住体験</th>
                  <td>最大1か月間、市内のお試し住宅に格安で滞在しながら暮らしを体験できます。（要予約）</td>
                </tr>
                <tr>
                  <th>移住相談窓口</th>
                  <td>市役所 企画政策課 移住定住推進係　☎ 0439-88-1114<br />オンライン相談も受け付けています（要予約）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>アクセス</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>鉄道</th>
                  <td>JR内房線「日野原駅」下車（君津駅より約25分）<br />特急さざなみ・新宿さざなみ利用で新宿駅より約1時間50分</td>
                </tr>
                <tr>
                  <th>高速バス</th>
                  <td>新宿〜日野原市中央（バスターミナル）直行便あり（所要約3時間10分）<br />1日4往復運行（京王電鉄バス・アルピコ交通 共同運行）</td>
                </tr>
                <tr>
                  <th>車</th>
                  <td>館山自動車道「君津IC」より約35分<br />駐車場：市役所前駐車場（無料・120台）、観光案内所隣（無料・40台）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="産業振興課" division="観光係" tel="0439-88-1144（内線 144）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
