import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "環境・ゼロカーボンの推進" };

export default function KankyoPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/sangyo">産業・環境</a><span>›</span><span>環境・ゼロカーボンの推進</span>
          </div>
          <h1 className="page-title">環境・ゼロカーボンの推進</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #2e7d32", background: "#f1f8e9" }}>
            <h2 className="section-title">日野原市ゼロカーボンシティ宣言</h2>
            <p><strong>令和4年3月</strong>、日野原市は2050年までに二酸化炭素排出量を実質ゼロにすることを目指す「ゼロカーボンシティ宣言」を行いました。豊かな自然環境を次世代へ引き継ぐため、市・事業者・市民が一体となって脱炭素社会の実現に取り組みます。</p>
            <table className="content-table">
              <tbody>
                <tr><th>基準年のCO2排出量</th><td>令和2年度: <strong>6.8万t-CO2</strong>（2013年度比）</td></tr>
                <tr><th>削減実績</th><td>基準年（2013年度）比 <strong>15%削減</strong>達成（令和2年度）</td></tr>
                <tr><th>2030年中間目標</th><td>2013年度比46%削減</td></tr>
                <tr><th>2050年最終目標</th><td>実質排出量ゼロ（カーボンニュートラル）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">再生可能エネルギー導入支援補助金</h2>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>住宅用太陽光発電システム</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 市内に自ら居住する住宅に設置する4kW以上のシステム</li>
              <li>補助額: <strong>4万円/kW</strong>（上限<strong>20万円</strong>・最大5kW分）</li>
              <li>令和7年度実績: 52件採択</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>家庭用蓄電システム</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 太陽光発電と同時または既設に接続して設置するもの</li>
              <li>補助額: <strong>上限15万円</strong></li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>電気自動車・プラグインハイブリッド車（PHV）購入補助</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 市内在住で新車を購入する方（法人を含む）</li>
              <li>補助額: <strong>上限10万円</strong>（EV: 10万円、PHV: 5万円）</li>
              <li>申請期限: 購入から3か月以内</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">自然環境保全</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>白峰高原ブナ林保護</strong>: 市の天然記念物に指定。外来種の侵入監視・登山道整備・植生調査を実施</li>
              <li><strong>特定外来生物防除</strong>: オオキンケイギク・セイタカアワダチソウ等の除去作業（市民ボランティアと協働）</li>
              <li><strong>希少野生動物の保護</strong>: ライチョウ・ヤマネ・オオタカの生息状況調査・保護活動</li>
              <li><strong>河川環境保全</strong>: 原野川・白峰川の水質調査（年2回）・不法投棄監視</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">環境教育</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>小中学校出前授業</strong>: 環境対策課職員が市内全小中学校（10校）を訪問し、気候変動・ごみ減量・生物多様性をテーマに授業を実施</li>
              <li><strong>ひのはら環境フォーラム</strong>: 毎年<strong>6月</strong>（環境月間）に開催。令和7年度参加者約850人。講演・パネル展示・子ども環境絵画コンクール</li>
              <li><strong>環境家計簿</strong>: 市民の自主的な省エネ活動を支援するツールを配布（市役所・各地区センターで入手可）</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">ごみ減量・資源化</h2>
            <p>日野原市のごみ排出量は継続的な減量化施策の結果、着実に減少しています。</p>
            <table className="content-table">
              <tbody>
                <tr><th>令和7年度1人1日排出量</th><td><strong>490g</strong>（千葉県平均533gより<strong>8%削減</strong>）</td></tr>
                <tr><th>資源化率</th><td>22.3%（令和7年度）</td></tr>
                <tr><th>ごみの分別区分</th><td>14分別（燃えるごみ・燃えないごみ・資源ごみ・粗大ごみ等）</td></tr>
                <tr><th>生ごみ処理機補助</th><td>購入費の1/2・上限1万円</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>環境対策課（環境政策係・廃棄物対策係）</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1136</strong></td></tr>
                <tr><th>メール</th><td>kankyo@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="環境対策課" tel="0439-88-1136（内線 152）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
