import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "公共交通・バス路線",
  description: "日野原市の公共交通案内。市営ひのはらバス3路線の時刻表・路線案内、デマンドタクシーの利用方法、東京方面高速バス、JR君津駅アクセス方法など。",
};

const faqs = [
  { q: "日野原市内に鉄道駅はありますか？", a: "市内に鉄道駅はありません。最寄り駅はJR内房線「君津駅」（南口）です。君津駅から市営ひのはらバス「日野原中央行き」で約35分です。" },
  { q: "バスでSuicaは使えますか？", a: "市営ひのはらバスではSuica・PASMOなどのICカードは利用できません。乗車時に整理券を取り、降車時に現金でお支払いください。両替は乗務員にお申し出ください。" },
  { q: "デマンドタクシーとバスの違いは何ですか？", a: "路線バスは決まった路線・時刻を定期運行します。デマンドタクシーは事前予約制の乗合タクシーで、自宅付近から目的地まで比較的自由に利用できます（運賃500円均一）。路線バスが運行していない地区や時間帯に活用できます。" },
  { q: "東京から日帰りで来ることはできますか？", a: "可能です。東京駅八重洲口から高速バスで日野原中央バスターミナルまで直行便があります（所要約1時間50分・1日3往復）。またはJR内房線で君津駅まで（特急さざなみ利用で約50分）、そこから市営バスで約35分です。" },
];

export default function KotsuPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "くらし・手続き", href: "/kurashi" },
        { name: "公共交通・バス路線" },
      ]} />
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kurashi">くらし・手続き</a><span>›</span>
            <span>公共交通・バス路線</span>
          </div>
          <h1 className="page-title">公共交通・バス路線</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">日野原市の交通案内</h2>
            <p style={{ fontSize: 13, lineHeight: 1.85 }}>
              日野原市内には鉄道駅がありません。市民の移動手段は主に<strong>市営ひのはらバス</strong>・<strong>デマンドタクシー</strong>・<strong>自家用車</strong>です。
              市外からのアクセスは、JR内房線「君津駅」からの路線バス、または東京方面からの高速バスをご利用ください。
            </p>
          </div>

          {/* ── 市営バス ── */}
          <div className="content-box">
            <h2 className="section-title">市営ひのはらバス — 路線案内</h2>
            <p style={{ fontSize: 13, marginBottom: 12 }}>市内3路線を運行。ICカード不可・整理券方式・現金払いです。</p>

            {/* 中央線 */}
            <div style={{ border: "1px solid var(--border-light)", marginBottom: 14 }}>
              <div style={{ background: "#1a6e5a", color: "#fff", padding: "6px 12px", fontWeight: "bold", fontSize: 13 }}>
                中央線　君津駅南口 ⇔ 日野原中央バスターミナル
              </div>
              <div style={{ padding: 12, fontSize: 12 }}>
                <p style={{ marginBottom: 8, color: "#444" }}>主な停留所：君津駅南口 → 君津市役所前 → 大矢野 → 日野原市境 → 中央小学校前 → 市役所前 → 日野原中央バスターミナル（終点）</p>
                <table className="content-table" style={{ margin: 0 }}>
                  <thead><tr><th>方向</th><th>便数</th><th>始発</th><th>終発</th><th>所要時間</th></tr></thead>
                  <tbody>
                    <tr><td>君津駅 → 日野原中央</td><td>平日10便・土休日6便</td><td>6:45発</td><td>18:50発</td><td>約35分</td></tr>
                    <tr><td>日野原中央 → 君津駅</td><td>平日10便・土休日6便</td><td>7:30発</td><td>19:40発</td><td>約35分</td></tr>
                  </tbody>
                </table>
                <p style={{ marginTop: 6, color: "#888" }}>運賃：200〜300円（区間により異なります）</p>
              </div>
            </div>

            {/* 原野温泉線 */}
            <div style={{ border: "1px solid var(--border-light)", marginBottom: 14 }}>
              <div style={{ background: "#2c7873", color: "#fff", padding: "6px 12px", fontWeight: "bold", fontSize: 13 }}>
                原野温泉線　市役所前 ⇔ 原野温泉
              </div>
              <div style={{ padding: 12, fontSize: 12 }}>
                <p style={{ marginBottom: 8, color: "#444" }}>主な停留所：日野原中央バスターミナル → 市役所前 → 北部地区センター → 下原遺跡前 → 本縄農園入口 → 原野公民館 → 原野温泉（終点）</p>
                <table className="content-table" style={{ margin: 0 }}>
                  <thead><tr><th>方向</th><th>便数</th><th>始発</th><th>終発</th><th>所要時間</th></tr></thead>
                  <tbody>
                    <tr><td>市役所 → 原野温泉</td><td>平日6便・土休日4便</td><td>8:10発</td><td>17:20発</td><td>約25分</td></tr>
                    <tr><td>原野温泉 → 市役所</td><td>平日6便・土休日4便</td><td>9:00発</td><td>18:10発</td><td>約25分</td></tr>
                  </tbody>
                </table>
                <p style={{ marginTop: 6, color: "#888" }}>運賃：200〜500円（区間により異なります）</p>
              </div>
            </div>

            {/* 白嶺高原線 */}
            <div style={{ border: "1px solid var(--border-light)", marginBottom: 14 }}>
              <div style={{ background: "#4a7c59", color: "#fff", padding: "6px 12px", fontWeight: "bold", fontSize: 13 }}>
                白嶺高原線　市役所前 ⇔ 白嶺ビジターセンター（夏季・土日祝のみ）
              </div>
              <div style={{ padding: 12, fontSize: 12 }}>
                <p style={{ marginBottom: 8, color: "#444" }}>主な停留所：市役所前 → 白嶺地区センター → 白嶺温泉郷 → 棚田展望台前 → 白嶺ビジターセンター（終点）</p>
                <table className="content-table" style={{ margin: 0 }}>
                  <thead><tr><th>運行期間</th><th>便数</th><th>始発</th><th>終発</th></tr></thead>
                  <tbody>
                    <tr><td>7月〜9月 土日祝のみ</td><td>1日4便（往復）</td><td>9:00発（市役所）</td><td>16:30発（市役所）</td></tr>
                  </tbody>
                </table>
                <p style={{ marginTop: 6, color: "#888" }}>運賃：300〜600円（区間により異なります）</p>
              </div>
            </div>

            <div style={{ background: "#f4f6fb", border: "1px solid var(--border-light)", padding: 10, fontSize: 12, lineHeight: 1.8 }}>
              📄 <strong>時刻表PDFダウンロード</strong>：
              <a href="/files/kotsu/r8-bus-chuo.pdf" style={{ marginLeft: 8 }}>中央線</a>
              <a href="/files/kotsu/r8-bus-haruno.pdf">原野温泉線</a>
              <a href="/files/kotsu/r8-bus-shirotaki.pdf">白嶺高原線（夏季）</a>
            </div>
          </div>

          {/* ── デマンドタクシー ── */}
          <div className="content-box">
            <h2 className="section-title">デマンドタクシー（予約制乗合タクシー）</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 10 }}>
              路線バスが運行していない地域・時間帯を補完する予約制の乗合タクシーです。
              事前に利用者登録を行い、乗車日の前日17時までに電話予約してください。
            </p>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 130 }}>対象地域</th><td>市内全域（バス路線上も利用可）</td></tr>
                <tr><th>利用者登録</th><td>市役所建設課窓口または市ウェブサイトで事前登録が必要です。</td></tr>
                <tr><th>予約受付</th><td>☎ 0100-88-1181　乗車日の前日17:00まで（平日・土曜のみ）</td></tr>
                <tr><th>運賃</th><td>1乗車 <strong>500円</strong>（65歳以上・障害者手帳所持者は <strong>300円</strong>）</td></tr>
                <tr><th>運行日時</th><td>平日・土曜 8:00〜18:00（日曜・祝日・年末年始は運休）</td></tr>
                <tr><th>乗降場所</th><td>市内の指定停留所（自宅前への対応は要相談）</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── 高速バス ── */}
          <div className="content-box">
            <h2 className="section-title">高速バス（東京方面）</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 130 }}>路線</th>
                  <td>東京駅八重洲口 〜 日野原中央バスターミナル（直行）</td>
                </tr>
                <tr>
                  <th>所要時間</th>
                  <td>約1時間50分（交通状況により異なります）</td>
                </tr>
                <tr>
                  <th>運行便数</th>
                  <td>1日3往復（朝・昼・夕）</td>
                </tr>
                <tr>
                  <th>運賃</th>
                  <td>片道 2,100円（往復割引あり・事前購入）</td>
                </tr>
                <tr>
                  <th>問い合わせ</th>
                  <td>日野原市観光協会 ☎ 0100-58-8888（9:00〜17:00）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── JRアクセス ── */}
          <div className="content-box">
            <h2 className="section-title">最寄り駅からのアクセス（JR君津駅）</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 130 }}>最寄り駅</th>
                  <td>JR内房線「君津駅」南口（千葉県君津市）</td>
                </tr>
                <tr>
                  <th>東京からの所要時間</th>
                  <td>
                    特急さざなみ利用：東京駅から約50分（1日4〜6本）<br />
                    各停・快速利用：東京駅から約1時間20分
                  </td>
                </tr>
                <tr>
                  <th>君津駅からのバス</th>
                  <td>南口 → 市営ひのはらバス「日野原中央行き」乗車 → 市役所前まで約35分</td>
                </tr>
                <tr>
                  <th>タクシー</th>
                  <td>君津駅から日野原市役所まで約30分・目安3,000〜4,000円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 高齢者等支援 ── */}
          <div className="content-box">
            <h2 className="section-title">高齢者・障がい者の移動支援</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 180 }}>65歳以上バス優待制度</th>
                  <td>市内在住の65歳以上の方に、市営バス乗車券（年間12,000円分）を交付します。市役所市民課または各地区センターで申請できます。</td>
                </tr>
                <tr>
                  <th>福祉タクシー券</th>
                  <td>身体障害者手帳（1・2級）、療育手帳（A判定）、精神障害者保健福祉手帳（1・2級）をお持ちの方に、タクシー利用補助券を交付（年間24枚・1枚500円分）。</td>
                </tr>
                <tr>
                  <th>通院支援</th>
                  <td>介護認定を受けた方の通院に、福祉有償運送サービスが利用できます。詳しくは地域福祉課（☎ 0100-88-1125）へ。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <div className="content-box">
            <h2 className="section-title">よくある質問</h2>
            <dl style={{ margin: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid #e0eae5", padding: "12px 0" }}>
                  <dt style={{ fontWeight: "bold", fontSize: 13, color: "#1a6e5a", marginBottom: 4 }}>Q. {q}</dt>
                  <dd style={{ fontSize: 13, lineHeight: 1.8, margin: 0, paddingLeft: 8, color: "#444" }}>A. {a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <PageInfo department="建設課" division="交通政策係" tel="0100-88-1181（内線 181）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
