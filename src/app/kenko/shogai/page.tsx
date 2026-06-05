import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "障がい福祉のご案内" };

export default function ShogaiPage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>障がい福祉のご案内</span>
          </div>
          <h1 className="page-title">障がい福祉のご案内</h1>

          {/* 障害者手帳 */}
          <h2 className="section-title">障害者手帳の種類と申請</h2>
          <div className="content-box">
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>手帳の種類</th>
                    <th>対象</th>
                    <th>等級</th>
                    <th>申請に必要な書類</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>身体障害者手帳</strong></td>
                    <td>視覚・聴覚・肢体・内部等の身体障がいがある方</td>
                    <td>1〜6級</td>
                    <td>申請書・指定医師の診断書・写真2枚・マイナンバー</td>
                  </tr>
                  <tr>
                    <td><strong>療育手帳</strong></td>
                    <td>知的障がいがある方（18歳未満は児童相談所、18歳以上は更生相談所で判定）</td>
                    <td>A（重度）・B1・B2</td>
                    <td>申請書・写真2枚・マイナンバー（判定は千葉県が行います）</td>
                  </tr>
                  <tr>
                    <td><strong>精神障害者保健福祉手帳</strong></td>
                    <td>統合失調症・うつ病・てんかん等の精神疾患により日常生活に支障がある方</td>
                    <td>1〜3級</td>
                    <td>申請書・指定医師の診断書（初診から6か月以上経過）・写真2枚・マイナンバー</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※手帳の申請窓口は市役所 福祉課障がい係です。審査・判定には1〜3か月程度かかります。
            </p>
          </div>

          {/* 障害福祉サービス */}
          <h2 className="section-title">障害福祉サービスの種類（利用者負担：原則1割）</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>障害者総合支援法に基づくサービスを利用するには、障害支援区分の認定が必要です（移動支援等を除く）。</p>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>サービス種類</th>
                    <th>内容</th>
                    <th>主な対象</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>居宅介護（ホームヘルプ）</td>
                    <td>自宅での入浴・排せつ・食事等の身体介護、調理・洗濯・掃除等の家事援助</td>
                    <td>障害支援区分1以上</td>
                  </tr>
                  <tr>
                    <td>就労継続支援A型</td>
                    <td>雇用契約を結んで就労訓練・軽作業を行う（最低賃金以上の賃金保障）</td>
                    <td>一般就労が困難な65歳未満</td>
                  </tr>
                  <tr>
                    <td>就労継続支援B型</td>
                    <td>雇用契約なしで就労訓練・軽作業（工賃の支払あり）</td>
                    <td>就労A型利用が困難な方</td>
                  </tr>
                  <tr>
                    <td>生活介護</td>
                    <td>日中に施設等で入浴・排せつ・食事等の介護、創作活動・生産活動の機会を提供</td>
                    <td>障害支援区分3以上（50歳以上は2以上）</td>
                  </tr>
                  <tr>
                    <td>短期入所（ショートステイ）</td>
                    <td>施設に短期間入所し、入浴・排せつ・食事の介護等を受ける</td>
                    <td>障害支援区分1以上</td>
                  </tr>
                  <tr>
                    <td>移動支援</td>
                    <td>外出時の移動介護（社会参加・余暇活動・買い物等の外出支援）</td>
                    <td>市が必要と認めた方</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※所得に応じて月額上限額が設定されており、上限を超えた分は自己負担になりません（生活保護世帯・市民税非課税世帯は0円）。
            </p>
          </div>

          {/* 補装具・日常生活用具 */}
          <h2 className="section-title">補装具・日常生活用具の給付</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>障がいのある方の日常生活を支援するため、補装具や日常生活用具の給付・修理を行います。費用の原則1割が自己負担となります（所得により上限あり）。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>主な対象品目</h3>
            <table className="content-table">
              <thead><tr><th>区分</th><th>主な品目</th></tr></thead>
              <tbody>
                <tr>
                  <td>補装具</td>
                  <td>車椅子・電動車椅子・補聴器・義肢・装具・視覚障がい者用安全つえ・意思伝達装置</td>
                </tr>
                <tr>
                  <td>日常生活用具（重度障がい者向け）</td>
                  <td>特殊寝台・入浴補助用具・聴覚障がい者用情報受信装置・点字ディスプレイ</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※購入前に必ず福祉課障がい係へ申請してください。事前申請なしに購入した場合は給付対象外となります。</p>
          </div>

          {/* 相談支援センター */}
          <h2 className="section-title">障がい者相談支援センター「ひのはら相談室」</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>所在地</td><td>中央4丁目5番2号</td></tr>
                <tr><td>電話</td><td>☎ 0100-88-6200</td></tr>
                <tr><td>相談時間</td><td>月〜金 9:00〜17:00（祝日・年末年始を除く）</td></tr>
                <tr><td>主な業務</td><td>福祉サービス利用計画の作成・相談支援・関係機関との連絡調整・権利擁護</td></tr>
              </tbody>
            </table>
          </div>

          {/* 各種割引 */}
          <h2 className="section-title">障害者手帳による各種割引・免除</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>制度・サービス</th><th>内容</th><th>手帳の種類</th></tr></thead>
              <tbody>
                <tr>
                  <td>NHK受信料</td>
                  <td>全額免除（世帯全員が市民税非課税で、障害者手帳所持者がいる場合）または半額減額</td>
                  <td>全種類</td>
                </tr>
                <tr>
                  <td>交通機関（JR・バス）</td>
                  <td>鉄道・バス運賃の割引（第1種手帳所持者と介護者：半額）</td>
                  <td>全種類（等級による）</td>
                </tr>
                <tr>
                  <td>市内公共施設利用料</td>
                  <td>市総合体育館・老人福祉センター等の利用料が無料または半額</td>
                  <td>全種類</td>
                </tr>
                <tr>
                  <td>自動車税・軽自動車税</td>
                  <td>障がいのある方が使用する自動車の税が減免（申請が必要）</td>
                  <td>身体・療育</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            福祉課 障がい係（市役所1階）<br />
            ☎ 0100-88-1120　受付時間：平日 8:30〜17:15
          </div>
          <div className="section-title" style={{ marginTop: 16 }}>障がい福祉 関連情報</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { href: "/kenko/shogai/techo",   label: "障害者手帳の申請" },
              { href: "/kenko/shogai/service", label: "障害福祉サービスの利用申請" },
              { href: "/kenko/shogai/hosogu",  label: "補装具・日常生活用具の給付" },
              { href: "/kenko/shogai/ido",     label: "移動支援・日中一時支援" },
              { href: "/kenko/shogai/soudan",  label: "障がい者相談支援センター「ひのはら相談室」" },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #e8edf4" : "none", fontSize: 13 }}>
                <a href={item.href}>▶ {item.label}</a>
              </div>
            ))}
          </div>
          <PageInfo department="福祉課" division="障がい福祉係" tel="0100-88-1161（内線 161）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
