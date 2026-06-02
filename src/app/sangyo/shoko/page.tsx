import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "商工業・企業支援" };

export default function ShokoPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/sangyo">産業・環境</a><span>›</span><span>商工業・企業支援</span>
          </div>
          <h1 className="page-title">商工業・企業支援</h1>

          <div className="content-box">
            <h2 className="section-title">市内経済の概況</h2>
            <p>日野原市の製造業は精密機械・電子部品・食品製造を中心に発展しており、製造品出荷額等は令和3年工業統計で<strong>約245億円</strong>を記録しています。市内には中小規模の事業所が多く、地域経済の根幹を担っています。</p>
            <table className="content-table">
              <thead>
                <tr><th>業種</th><th>事業所数</th><th>主な製品・サービス</th></tr>
              </thead>
              <tbody>
                <tr><td>精密機械・電子部品</td><td>28社</td><td>計測器・センサー・電子基板</td></tr>
                <tr><td>食品製造</td><td>22社</td><td>そば・りんごジュース・漬物・味噌</td></tr>
                <tr><td>木材・木製品</td><td>11社</td><td>建築材・家具・木工クラフト</td></tr>
                <tr><td>小売・飲食</td><td>156店</td><td>スーパー・飲食店・土産物店</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">中小企業融資あっせん制度</h2>
            <p>市内中小企業者の資金調達を支援するため、金融機関への融資あっせんと利子補給を行っています。</p>
            <table className="content-table">
              <tbody>
                <tr><th>対象</th><td>市内に主たる事業所を有し、市税を完納している中小企業者</td></tr>
                <tr><th>資金の種類</th><td>運転資金・設備資金</td></tr>
                <tr><th>融資限度額</th><td>運転資金: <strong>500万円</strong>　設備資金: <strong>1,000万円</strong></td></tr>
                <tr><th>利子補給</th><td>金融機関への支払利息の<strong>1/2</strong>（最長3年間）</td></tr>
                <tr><th>申請窓口</th><td>農林振興課商工係（市役所2階）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">創業支援</h2>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>ひのはら創業塾</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>年<strong>2回</strong>開催（春・秋）、全5回コース</li>
              <li>内容: 事業計画策定・マーケティング・資金調達・法務・税務</li>
              <li>参加費: 無料（テキスト代1,000円）</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>創業補助金</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>補助額: <strong>上限50万円</strong>（創業に要する経費の1/2以内）</li>
              <li>対象: 創業塾修了者で市内で創業する方</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>インキュベート施設「ひのはらビジネスラボ」</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>所在地: 日野原市中央1丁目5-8（市中心部・駅徒歩5分）</li>
              <li>室数: 個室6室・オープンスペース（シェアオフィス）</li>
              <li>賃料: 月額2〜4万円（光熱費込）　最長2年間利用可能</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">空き店舗活用補助</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象エリア: <strong>市中央商店街</strong>（中央1〜3丁目・日野原銀座通り沿い）</li>
              <li>補助内容: 空き店舗の改装費用の<strong>1/2補助</strong></li>
              <li>補助上限: <strong>50万円</strong></li>
              <li>対象業種: 小売・飲食・サービス業（風俗営業等を除く）</li>
              <li>要件: 補助対象期間終了後も3年以上継続して営業すること</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">商工会との連携</h2>
            <p>日野原市商工会では、事業者向けの各種相談・支援サービスを提供しています。</p>
            <table className="content-table">
              <tbody>
                <tr><th>名称</th><td>日野原市商工会</td></tr>
                <tr><th>所在地</th><td>日野原市中央2丁目1-1（商工会館内）</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1300</strong></td></tr>
                <tr><th>相談内容</th><td>経営相談・税務・労務・金融・IT化・事業承継（各種相談無料）</td></tr>
                <tr><th>巡回指導</th><td>経営指導員が市内事業所を定期巡回</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">令和8年度プレミアム付商品券</h2>
            <table className="content-table">
              <tbody>
                <tr><th>販売価格</th><td><strong>1セット5,000円</strong>で<strong>6,500円分</strong>の商品券（プレミアム率30%）</td></tr>
                <tr><th>販売セット数</th><td><strong>5,000セット</strong>（1人2セットまで）</td></tr>
                <tr><th>販売開始</th><td>令和8年9月（予定）</td></tr>
                <tr><th>有効期限</th><td>令和8年9月〜令和9年2月末</td></tr>
                <tr><th>取扱店</th><td>市内登録加盟店（約230店舗・申請受付中）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>農林振興課 商工係</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1136</strong></td></tr>
                <tr><th>メール</th><td>shoko@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="産業振興課" division="商工係" tel="0439-88-1141（内線 141）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
