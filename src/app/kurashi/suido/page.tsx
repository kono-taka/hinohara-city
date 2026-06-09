import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "水道・下水道",
  description: "日野原市の水道・下水道に関する手続き（開栓・閉栓・名義変更）、水道料金、凍結対策、浄化槽の管理などをご案内します。",
};

export default function SuidoPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "くらし・手続き", href: "/kurashi" },
        { name: "水道・下水道" },
      ]} />
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kurashi">くらし・手続き</a><span>›</span>
            <span>水道・下水道</span>
          </div>
          <h1 className="page-title">水道・下水道</h1>

          {/* ── 申請手続き ── */}
          <div className="content-box">
            <h2 className="section-title">水道の使用開始・停止・名義変更</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 10 }}>
              転入・転出・引越しの際は、水道の使用開始または停止の手続きが必要です。
              引越し予定日の<strong>3日前まで</strong>にお申し込みください。
            </p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 160 }}>水道の使用開始（開栓）</th>
                  <td>転入・新規入居時。申込後、市職員が現地で開栓します。立会いが必要です（所要15分程度）。</td>
                </tr>
                <tr>
                  <th>水道の使用停止（閉栓）</th>
                  <td>転出・退去時。申込後、市職員が現地で閉栓します。立会いが必要な場合があります。</td>
                </tr>
                <tr>
                  <th>名義変更</th>
                  <td>売買・相続・同居人変更等による使用者の変更。「水道使用者変更届」に新旧の使用者情報を記入して提出。</td>
                </tr>
                <tr>
                  <th>申込方法</th>
                  <td>
                    ☎ <strong>0100-88-1170</strong>（上下水道課　平日 8:30〜17:15）<br />
                    または市ウェブサイトの電子申請フォームからも受付中（24時間）
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 料金 ── */}
          <div className="content-box">
            <h2 className="section-title">水道料金（令和8年4月改定）</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 10 }}>
              水道料金は2か月ごとの検針にもとづいて請求します（偶数月検針・翌月請求）。
              料金は基本料金＋使用量料金の合計です。
            </p>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: 100 }}>口径</th>
                  <th style={{ width: 120 }}>基本料金（2か月）</th>
                  <th>使用量料金（1㎥あたり）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>13mm（家庭用標準）</td>
                  <td>1,210円</td>
                  <td>0〜10㎥：160円　11〜20㎥：210円　21㎥以上：270円</td>
                </tr>
                <tr>
                  <td>20mm</td>
                  <td>2,310円</td>
                  <td>0〜10㎥：160円　11〜20㎥：210円　21㎥以上：270円</td>
                </tr>
                <tr>
                  <td>25mm以上</td>
                  <td>3,740円〜</td>
                  <td>口径・用途により異なります。上下水道課へお問い合わせください。</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※料金はすべて税込です。下水道使用料（または浄化槽維持管理費）は別途必要です。<br />
              ※水道料金の支払い方法：口座振替（推奨）・納付書払い（コンビニ・金融機関）。
            </p>
          </div>

          {/* ── 凍結対策 ── */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">冬季の水道管凍結にご注意ください</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 10 }}>
              日野原市は標高200〜380mの内陸山間地に位置し、12月〜3月にかけて気温が氷点下になる日があります。
              屋外の水道管や給水管は<strong>凍結・破裂のリスク</strong>があります。特に白嶺地区・原野地区の高地集落は注意が必要です。
            </p>
            <table className="content-table">
              <thead>
                <tr><th>予防策</th><th>方法</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>水道管の保温</td>
                  <td>屋外露出部分に保温材（ポリエチレン製保温筒等）を巻く。ホームセンターで購入可。市では保温材の配布を行っています（要申請・先着順）。</td>
                </tr>
                <tr>
                  <td>水を少量流したままにする</td>
                  <td>気温が大きく下がる夜間、蛇口から細くチョロチョロ出し続けることで凍結防止になります。</td>
                </tr>
                <tr>
                  <td>元栓を閉める</td>
                  <td>長期不在時は元栓（止水栓）を閉め、配管内の水を抜いてください。</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginTop: 10 }}>
              <strong>水道管が破裂した場合：</strong>まず元栓（止水栓）を閉めてください。その後、上下水道課（☎ 0100-88-1170）または夜間・休日は市役所当直（☎ 0100-88-1111）にご連絡ください。
            </p>
          </div>

          {/* ── 下水道・浄化槽 ── */}
          <div className="content-box">
            <h2 className="section-title">下水道・合併処理浄化槽</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 10 }}>
              日野原市では、市街地（中央・北部・南部・東部地区の一部）を公共下水道処理区域としています。
              下水道区域外の地区（原野地区・白嶺地区および一部郊外）は、合併処理浄化槽の設置・維持管理が必要です。
            </p>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 160 }}>公共下水道の接続</th>
                  <td>下水道が整備された区域では、水洗化工事が義務付けられています（区域内通知から3年以内）。工事には市の排水設備指定工事店をご利用ください。</td>
                </tr>
                <tr>
                  <th>下水道使用料</th>
                  <td>水道使用量に応じて算定（2か月ごと）。基本料金680円（2か月）＋使用量料金（1㎥あたり120〜200円）。</td>
                </tr>
                <tr>
                  <th>合併処理浄化槽の設置補助</th>
                  <td>市では合併処理浄化槽の新規設置に補助金を交付しています（5〜7人槽：132,000円、8〜10人槽：198,000円）。詳しくは上下水道課へ。</td>
                </tr>
                <tr>
                  <th>浄化槽の法定検査</th>
                  <td>浄化槽は年1回の法定検査（水質検査）が義務です。千葉県指定検査機関（☎ 043-000-0000）にお申し込みください。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 水質 ── */}
          <div className="content-box">
            <h2 className="section-title">水道水の水質情報</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              日野原市の水道水は、原野川・白嶺川流域の水源地から取水し、市内の浄水場で処理しています。
              毎月実施している水質検査の結果は「<a href="/shisei/joho">情報公開</a>」ページに掲載しています。
              水道水の味や臭いに異常を感じた場合は上下水道課へご連絡ください。
            </p>
            <table className="content-table">
              <tbody>
                <tr><th>水源地</th><td>原野川水源（原野地区）・白嶺川第1取水堰（白嶺地区）</td></tr>
                <tr><th>浄水場</th><td>日野原市立中央浄水場（中央四丁目）・原野浄水場（原野字宮前）</td></tr>
                <tr><th>水質検査頻度</th><td>毎月実施（51項目）。年1回は全51項目の精密検査を実施。</td></tr>
                <tr><th>直近の水質検査結果</th><td>令和8年5月実施分 — 全項目で水質基準値以内（適合）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>上下水道課</th><td>市役所2階　☎ <strong>0100-88-1170</strong>（内線 170）</td></tr>
                <tr><th>開庁時間</th><td>平日 8:30〜17:15（土日祝・年末年始を除く）</td></tr>
                <tr><th>夜間・休日の緊急連絡</th><td>市役所当直 ☎ 0100-88-1111（水道管破裂等の緊急時）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="上下水道課" tel="0100-88-1170（内線 170）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
