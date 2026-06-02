import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "子育て・保育" };

export default function KosodatePage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>子育て・保育</span>
          </div>
          <h1 className="page-title">子育て・保育</h1>

          {/* 保育所・認定こども園一覧 */}
          <h2 className="section-title">保育所・認定こども園一覧</h2>
          <div className="content-box">
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>施設名</th>
                    <th>種別</th>
                    <th>住所</th>
                    <th>電話</th>
                    <th>定員</th>
                    <th>対象年齢</th>
                    <th>保育時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>市立ひのはら保育所</td>
                    <td>認定こども園</td>
                    <td>中央1丁目</td>
                    <td>0439-88-5200</td>
                    <td>120名</td>
                    <td>0〜5歳</td>
                    <td>7:00〜19:00</td>
                  </tr>
                  <tr>
                    <td>市立北部保育所</td>
                    <td>保育所</td>
                    <td>北部4丁目</td>
                    <td>0439-53-2100</td>
                    <td>60名</td>
                    <td>0〜5歳</td>
                    <td>7:30〜18:30</td>
                  </tr>
                  <tr>
                    <td>市立原野保育所</td>
                    <td>保育所</td>
                    <td>原野地区</td>
                    <td>0439-54-1200</td>
                    <td>40名</td>
                    <td>0〜5歳</td>
                    <td>7:30〜18:00</td>
                  </tr>
                  <tr>
                    <td>白峰保育園</td>
                    <td>私立保育所</td>
                    <td>白峰地区</td>
                    <td>0439-55-0300</td>
                    <td>30名</td>
                    <td>0〜5歳</td>
                    <td>7:30〜18:30</td>
                  </tr>
                  <tr>
                    <td>日野原幼稚園</td>
                    <td>私立幼稚園</td>
                    <td>中央5丁目</td>
                    <td>0439-88-5500</td>
                    <td>80名</td>
                    <td>3〜5歳</td>
                    <td>9:00〜14:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 入所申込の手続き */}
          <h2 className="section-title">入所申込の手続き</h2>
          <div className="content-box">
            <p>次年度（4月）入所の申込受付は毎年<strong>10月1日</strong>から開始します。年度途中の入所は随時受け付けています。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>申込時に必要な書類</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>教育・保育給付認定申請書兼入所申込書</li>
              <li>保育を必要とする事由を証明する書類（就労証明書・診断書 等）</li>
              <li>マイナンバー確認書類（世帯全員分）</li>
              <li>前年度（1月〜12月分）の所得を証明する書類</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>選考基準</h3>
            <p style={{ lineHeight: 1.8 }}>保護者の就労状況・疾病・障がい等の状況をポイント制で審査し、定員を超える場合は保育の必要性が高い方から優先的に入所内定を行います。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>利用者負担額の目安（月額）</h3>
            <table className="content-table" style={{ marginTop: 6 }}>
              <thead>
                <tr><th>区分</th><th>0〜2歳（保育所）</th><th>3〜5歳（保育所）</th></tr>
              </thead>
              <tbody>
                <tr><td>生活保護世帯</td><td>無料</td><td>無料</td></tr>
                <tr><td>市民税非課税世帯</td><td>6,000円</td><td>無料</td></tr>
                <tr><td>市民税課税（所得割77,100円未満）</td><td>16,500円</td><td>無料</td></tr>
                <tr><td>市民税課税（所得割211,200円未満）</td><td>27,000円</td><td>無料</td></tr>
                <tr><td>それ以上</td><td>最大44,500円</td><td>無料</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>※3〜5歳児クラスは幼児教育・保育の無償化により保育料は無料（給食費等は別途）。</p>
          </div>

          {/* 児童手当 */}
          <h2 className="section-title">児童手当</h2>
          <div className="content-box">
            <p>中学校修了前の児童を養育している保護者に支給されます。毎年6月・10月・2月に4か月分を振り込みます。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead>
                <tr><th>対象</th><th>支給額（月額）</th></tr>
              </thead>
              <tbody>
                <tr><td>3歳未満</td><td>15,000円</td></tr>
                <tr><td>3歳〜小学校修了前（第1・2子）</td><td>10,000円</td></tr>
                <tr><td>3歳〜小学校修了前（第3子以降）</td><td>15,000円</td></tr>
                <tr><td>中学生</td><td>10,000円</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>※令和6年10月より所得制限が撤廃され、全ての児童を養育する方に支給されます。</p>
            <p style={{ marginTop: 10, lineHeight: 1.8 }}>
              <strong>申請に必要な書類：</strong>認定請求書・請求者名義の口座通帳・健康保険証（被用者の場合）・個人番号確認書類
            </p>
          </div>

          {/* 子育て支援センター */}
          <h2 className="section-title">子育て支援センター「ひのはらキッズひろば」</h2>
          <div className="content-box">
            <p>就学前の子どもとその保護者が自由に集い、遊べる交流スペースです。育児の悩み相談や各種イベントも実施しています。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>所在地</td><td>中央3丁目2番地</td></tr>
                <tr><td>電話</td><td>☎ 0439-88-5100</td></tr>
                <tr><td>開館時間</td><td>月曜〜土曜 9:00〜17:00</td></tr>
                <tr><td>休館日</td><td>日曜・祝日・年末年始</td></tr>
                <tr><td>利用料</td><td>無料</td></tr>
              </tbody>
            </table>
            <p style={{ marginTop: 10, lineHeight: 1.8 }}>
              <strong>主なプログラム：</strong>育児相談（毎週火・木）、親子体操（月2回）、読み聞かせ（毎週水）、離乳食講座（月1回）
            </p>
          </div>

          {/* ひとり親家庭支援 */}
          <h2 className="section-title">ひとり親家庭への支援</h2>
          <div className="content-box">
            <h3 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 6 }}>児童扶養手当</h3>
            <p style={{ lineHeight: 1.8 }}>父または母と生計を同じくしていない18歳以下（障がいの場合は20歳未満）の児童を養育しているひとり親家庭の方に支給します。所得に応じて月額最大44,635円（全部支給・令和8年度額）。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>就業支援・法律相談</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>就業訓練（職業訓練受講給付金との併用可）</li>
              <li>母子・父子自立支援員による就業相談（要予約）</li>
              <li>無料法律相談（月1回、弁護士派遣・要予約）</li>
              <li>母子父子寡婦福祉資金の貸付</li>
            </ul>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            子育て支援課（市役所1階）<br />
            ☎ 0439-88-1123　受付時間：平日 8:30〜17:15
          </div>
          <div className="section-title" style={{ marginTop: 16 }}>子育て・保育 関連情報</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { href: "/kenko/kosodate/nyusho",    label: "保育所・認定こども園の入所申込" },
              { href: "/kenko/kosodate/jidoteate", label: "児童手当の申請・届出" },
              { href: "/kenko/kosodate/kenshin",   label: "乳幼児健診・育児相談のご案内" },
              { href: "/kenko/kosodate/center",    label: "子育て支援センター（ひのはらキッズひろば）" },
              { href: "/kenko/kosodate/gakudo",    label: "放課後児童クラブ（学童保育）" },
              { href: "/kenko/kosodate/hitorioya", label: "ひとり親家庭への支援" },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #e8edf4" : "none", fontSize: 13 }}>
                <a href={item.href}>▶ {item.label}</a>
              </div>
            ))}
          </div>
          <PageInfo department="子育て支援課" tel="0439-88-1172（内線 172）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
