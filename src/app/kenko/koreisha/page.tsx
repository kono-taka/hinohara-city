import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "高齢者支援" };

export default function KoreishaPage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>高齢者支援</span>
          </div>
          <h1 className="page-title">高齢者支援</h1>

          {/* 高齢化状況 */}
          <h2 className="section-title">日野原市の高齢化状況</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>項目</th><th>数値</th><th>備考</th></tr></thead>
              <tbody>
                <tr><td>総人口</td><td>47,320人</td><td rowSpan={4} style={{ verticalAlign: "middle", fontSize: 12, color: "#555" }}>令和8年5月1日現在</td></tr>
                <tr><td>65歳以上人口</td><td>16,183人</td></tr>
                <tr><td>75歳以上人口</td><td>8,612人</td></tr>
                <tr><td><strong>高齢化率</strong></td><td><strong>34.2%</strong></td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              日野原市の高齢化率は千葉県平均（31.8%）を上回っており、地域一体となって高齢者が安心して暮らせる環境づくりに取り組んでいます。
            </p>
          </div>

          {/* 後期高齢者医療制度 */}
          <h2 className="section-title">後期高齢者医療制度</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>75歳以上の方（一定の障がいがある65〜74歳の方を含む）は、<strong>千葉県後期高齢者医療広域連合</strong>が運営する後期高齢者医療制度に加入します。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>自己負担割合</td><td>1割（現役並み所得者は3割、一定以上所得者は2割）</td></tr>
                <tr><td>保険料</td><td>所得割率・均等割額は広域連合が2年ごとに設定。保険料は市が徴収</td></tr>
                <tr><td>保険証の更新</td><td>毎年8月1日に更新（7月末に新しい保険証を郵送）</td></tr>
                <tr><td>申請・相談窓口</td><td>市民課（市役所1階）☎ 0100-88-1113</td></tr>
              </tbody>
            </table>
          </div>

          {/* 老人福祉センター */}
          <h2 className="section-title">老人福祉センター「長寿の家」</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>60歳以上の市民の方が無料で利用できる福祉施設です。健康増進・交流活動の場としてご活用ください。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>所在地</td><td>南部2丁目3番15号</td></tr>
                <tr><td>電話</td><td>☎ 0100-88-6100</td></tr>
                <tr><td>開館時間</td><td>9:00〜17:00（年末年始・月曜休館）</td></tr>
                <tr><td>施設</td><td>大浴場（入浴無料）・集会室・体操室・和室・談話コーナー</td></tr>
                <tr><td>主な事業</td><td>健康体操（毎週火・木）、囲碁・将棋教室（毎週水）、茶道・書道（月2回）</td></tr>
              </tbody>
            </table>
          </div>

          {/* 敬老行事 */}
          <h2 className="section-title">敬老行事・長寿のお祝い</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>対象</th><th>内容</th></tr></thead>
              <tbody>
                <tr>
                  <td>77歳（喜寿）・80歳（傘寿）</td>
                  <td>お祝い状の送付</td>
                </tr>
                <tr>
                  <td>88歳（米寿）</td>
                  <td>お祝い状＋記念品の贈呈</td>
                </tr>
                <tr>
                  <td>90歳以上</td>
                  <td>市長訪問・記念品の贈呈（希望者）</td>
                </tr>
                <tr>
                  <td>100歳以上（現在9名在籍）</td>
                  <td>市長訪問・内閣総理大臣よりお祝い状・記念品</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※敬老のつどいは毎年9月の敬老の日に、地区公民館ごとに開催します。</p>
          </div>

          {/* 高齢者見守りサービス */}
          <h2 className="section-title">高齢者見守りサービス</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>一人暮らしの高齢者や高齢者のみの世帯を対象に、以下の見守りサービスを実施しています。</p>
            <table className="content-table">
              <thead><tr><th>サービス名</th><th>内容</th><th>対象・費用</th></tr></thead>
              <tbody>
                <tr>
                  <td>緊急通報装置の貸出</td>
                  <td>自宅に設置した装置のボタンを押すと24時間対応センターに繋がる</td>
                  <td>65歳以上の一人暮らし等・月額500円（非課税世帯無料）</td>
                </tr>
                <tr>
                  <td>安否確認訪問</td>
                  <td>民生委員・地域の協力者が定期的に訪問・電話で確認</td>
                  <td>希望者・無料</td>
                </tr>
                <tr>
                  <td>配食サービス</td>
                  <td>1日1食、栄養バランスの取れた弁当を自宅に配達（安否確認を兼ねる）</td>
                  <td>65歳以上で調理が困難な方・1食500円</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 認知症施策 */}
          <h2 className="section-title">認知症に関する支援・施策</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>認知症になっても住み慣れた地域で自分らしく暮らし続けられるよう、様々な施策を実施しています。</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2.2, marginTop: 8 }}>
              <li><strong>認知症初期集中支援チーム</strong>：医師・看護師・介護専門職がチームで自宅を訪問し、早期からの支援を行います</li>
              <li><strong>オレンジカフェ（認知症カフェ）</strong>：認知症の方やその家族、地域住民、専門職が気軽に集える場（月2回開催・中央・原野地区）</li>
              <li><strong>認知症サポーター養成講座</strong>：認知症を正しく理解するための講座（年4回・無料）</li>
              <li><strong>認知症高齢者SOSネットワーク</strong>：行方不明時の早期発見・保護のための地域ネットワーク</li>
            </ul>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            高齢者支援課（市役所1階）<br />
            ☎ 0100-88-1121　受付時間：平日 8:30〜17:15
          </div>
          <PageInfo department="介護保険課" division="高齢支援係" tel="0100-88-1162（内線 162）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
