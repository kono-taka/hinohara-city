import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "予防接種・健康診断" };

export default function YobosesshuPage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>予防接種・健康診断</span>
          </div>
          <h1 className="page-title">予防接種・健康診断</h1>

          {/* 乳幼児定期接種 */}
          <h2 className="section-title">乳幼児定期接種スケジュール</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>定期接種は法律に基づき無料または低額で受けられる予防接種です。接種券は対象年齢になると自動的に郵送します。</p>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>ワクチン名</th>
                    <th>対象年齢</th>
                    <th>接種回数</th>
                    <th>費用</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>BCG（結核）</td>
                    <td>生後3〜12か月</td>
                    <td>1回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>DPT-IPV（4種混合）</td>
                    <td>生後3か月〜（標準：3〜8か月で3回、12〜18か月で1回）</td>
                    <td>4回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>Hib（ヒブ）</td>
                    <td>生後2か月〜（標準：2〜6か月で3回、12〜15か月で1回）</td>
                    <td>4回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>小児用肺炎球菌</td>
                    <td>生後2か月〜（標準：2〜6か月で3回、12〜15か月で1回）</td>
                    <td>4回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>MR（麻疹・風疹混合）</td>
                    <td>1期：1歳〜2歳未満 / 2期：就学前年度の4月1日〜3月31日</td>
                    <td>各1回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>水痘（水ぼうそう）</td>
                    <td>1歳〜3歳未満（標準：1歳で1回、6〜12か月後に1回）</td>
                    <td>2回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>日本脳炎</td>
                    <td>1期：3〜4歳（2回）・4〜5歳（1回）/ 2期：9〜12歳（1回）</td>
                    <td>計4回</td>
                    <td>無料</td>
                  </tr>
                  <tr>
                    <td>HPV（子宮頸がん）</td>
                    <td>小学6年生〜高校1年生相当の女子（標準：中学1年生）</td>
                    <td>3回</td>
                    <td>無料</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※接種は市が委託する市内の医療機関（かかりつけ医）で受けてください。市外の医療機関で接種する場合は事前に健康推進課へご連絡ください。
            </p>
          </div>

          {/* 成人・高齢者の予防接種 */}
          <h2 className="section-title">成人・高齢者の予防接種</h2>
          <div className="content-box">
            <table className="content-table">
              <thead>
                <tr><th>ワクチン名</th><th>対象</th><th>接種時期</th><th>自己負担額</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>インフルエンザ</td>
                  <td>65歳以上の市民（60〜64歳で一定の障がいがある方を含む）</td>
                  <td>10月〜12月</td>
                  <td>1,500円</td>
                </tr>
                <tr>
                  <td>肺炎球菌（23価）</td>
                  <td>65・70・75・80・85・90・95・100歳になる方（年齢到達時に1回）</td>
                  <td>通年（要予約）</td>
                  <td>2,500円</td>
                </tr>
                <tr>
                  <td>帯状疱疹（不活化）</td>
                  <td>50歳以上（任意接種）</td>
                  <td>通年（要予約）</td>
                  <td>実費（一部助成あり）</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※市民税非課税世帯の方は自己負担が免除される場合があります。詳しくは健康推進課へお問い合わせください。</p>
          </div>

          {/* 健診スケジュール */}
          <h2 className="section-title">令和8年度 各種健診スケジュール</h2>
          <div className="content-box">
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>健診名</th>
                    <th>対象</th>
                    <th>実施時期</th>
                    <th>費用</th>
                    <th>申込方法</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>特定健康診査（メタボ健診）</td>
                    <td>40〜74歳の国保加入者</td>
                    <td>6月〜11月</td>
                    <td>無料〜1,000円（年齢により異なる）</td>
                    <td>受診券が5月に届きます</td>
                  </tr>
                  <tr>
                    <td>後期高齢者健診</td>
                    <td>75歳以上の後期高齢者医療加入者</td>
                    <td>6月〜11月</td>
                    <td>無料</td>
                    <td>受診券が5月に届きます</td>
                  </tr>
                  <tr>
                    <td>胃がん検診（バリウム）</td>
                    <td>40歳以上</td>
                    <td>6月〜10月</td>
                    <td>1,000円</td>
                    <td>5月に送付の申込書で要申込</td>
                  </tr>
                  <tr>
                    <td>肺がん検診（X線・喀痰）</td>
                    <td>40歳以上</td>
                    <td>6月〜10月</td>
                    <td>500円（喀痰検査追加：700円）</td>
                    <td>5月に送付の申込書で要申込</td>
                  </tr>
                  <tr>
                    <td>大腸がん検診（便潜血）</td>
                    <td>40歳以上</td>
                    <td>6月〜10月</td>
                    <td>500円</td>
                    <td>5月に送付の申込書で要申込</td>
                  </tr>
                  <tr>
                    <td>子宮頸がん検診</td>
                    <td>20歳以上の女性（2年に1回）</td>
                    <td>6月〜10月</td>
                    <td>1,000円</td>
                    <td>5月に送付の申込書で要申込</td>
                  </tr>
                  <tr>
                    <td>乳がん検診（マンモグラフィ）</td>
                    <td>40歳以上の女性（2年に1回）</td>
                    <td>6月〜10月</td>
                    <td>1,000円</td>
                    <td>5月に送付の申込書で要申込</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 接種会場・日程 */}
          <h2 className="section-title">接種会場・日程</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>定期接種・各種健診は、以下の会場で実施しています。</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2, marginTop: 8 }}>
              <li><strong>市保健センター</strong>（中央1丁目6番地、☎ 0439-88-1122）：乳幼児健診・集団接種</li>
              <li><strong>各地区公民館</strong>（原野・白峰・北部・南部）：集団健診・巡回接種</li>
              <li><strong>かかりつけ医療機関</strong>：個別予防接種（要予約）</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              詳しい日程は毎年4月発行の「保健だより」および市ホームページでご確認ください。
            </p>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            健康推進課（市保健センター内）<br />
            ☎ 0439-88-1122　受付時間：平日 8:30〜17:15
          </div>
          <div className="section-title" style={{ marginTop: 16 }}>予防接種・健診 関連情報</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { href: "/kenko/yobosesshu/nyuyoji",    label: "乳幼児予防接種スケジュール" },
              { href: "/kenko/yobosesshu/seijin",     label: "成人・高齢者の予防接種" },
              { href: "/kenko/yobosesshu/tokutei",    label: "特定健康診査（メタボ健診）" },
              { href: "/kenko/yobosesshu/gankenshin", label: "がん検診のご案内（令和8年度）" },
              { href: "/kenko/yobosesshu/kokoro",     label: "こころの健康相談・自殺予防" },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #e8edf4" : "none", fontSize: 13 }}>
                <a href={item.href}>▶ {item.label}</a>
              </div>
            ))}
          </div>
          <PageInfo department="健康推進課" division="保健係" tel="0439-88-1167（内線 167）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
