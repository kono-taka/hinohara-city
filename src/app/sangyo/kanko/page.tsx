import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "観光振興・観光産業" };

export default function SangyoKankoPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/sangyo">産業・環境</a><span>›</span><span>観光振興・観光産業</span>
          </div>
          <h1 className="page-title">観光振興・観光産業</h1>

          <div className="content-box">
            <h2 className="section-title">観光統計（令和5年度）</h2>
            <table className="content-table">
              <tbody>
                <tr><th>年間入込客数</th><td><strong>78万人</strong></td></tr>
                <tr><th>観光消費額（経済効果）</th><td>約<strong>68億円</strong></td></tr>
                <tr><th>宿泊者数</th><td>約22万人泊</td></tr>
                <tr><th>外国人宿泊者数</th><td>約8,500人泊（台湾・中国・オーストラリア等）</td></tr>
                <tr><th>主なピーク期</th><td>5〜6月（びわ狩り）・8〜9月（落花生掘り）・10〜11月（紅葉・山菜）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">観光振興計画（令和6〜10年度）</h2>
            <p>令和6年3月に策定した「日野原市観光振興計画（2024〜2028）」では、以下を重点施策として掲げています。</p>
            <table className="content-table">
              <thead>
                <tr><th>重点施策</th><th>主な内容</th></tr>
              </thead>
              <tbody>
                <tr><td>体験型観光の強化</td><td>農業・食・自然体験プログラムの開発・磨き上げ</td></tr>
                <tr><td>インバウンド誘致</td><td>多言語対応・外国人向けSNS発信・旅行エージェント連携</td></tr>
                <tr><td>デジタル活用</td><td>観光アプリ整備・QRコード案内板・オンライン予約環境</td></tr>
                <tr><td>通年観光化</td><td>冬季・春季の新コンテンツ開発（冬の里山トレッキング・星空観察・山菜狩り等）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">観光事業者向け補助金</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>観光施設改修費補助</strong>: 宿泊施設・体験施設等の改修・バリアフリー化に対し、費用の<strong>1/2・上限100万円</strong></li>
              <li><strong>外国語対応整備補助</strong>: 多言語メニュー・サイン・パンフレット作成費の1/2・上限20万円</li>
              <li><strong>観光コンテンツ開発補助</strong>: 新たな体験プログラムの開発・試験実施に要する経費の1/2・上限30万円</li>
              <li>申請締切: 令和8年度は7月31日（予定）</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">日野原市観光協会との連携</h2>
            <table className="content-table">
              <tbody>
                <tr><th>名称</th><td>一般社団法人 日野原市観光協会</td></tr>
                <tr><th>所在地</th><td>日野原市中央1丁目1-1（市役所1階 観光案内所内）</td></tr>
                <tr><th>電話</th><td>☎<strong>0100-58-8888</strong></td></tr>
                <tr><th>主な事業</th><td>外国語パンフレット作成・SNS（Instagram/X/Facebook）発信・観光情報発信サイト運営</td></tr>
                <tr><th>フォロワー数</th><td>Instagram: 約18,000人（令和8年5月現在）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">ひのはら旅する農業体験</h2>
            <p>市内農家・事業者が提供する着地型体験プログラムです。観光と農業を融合させた「グリーンツーリズム」として全国から注目を集めています。</p>
            <table className="content-table">
              <thead>
                <tr><th>プログラム名</th><th>時期</th><th>料金（目安）</th><th>定員</th></tr>
              </thead>
              <tbody>
                <tr><td>落花生掘り体験</td><td>8月下旬〜9月下旬</td><td>1,800円〜（落花生持ち帰り500g含む）</td><td>各回12人</td></tr>
                <tr><td>手打ちそば体験</td><td>通年</td><td>3,000円（食事付き）</td><td>各回8人</td></tr>
                <tr><td>味噌作り体験</td><td>1月〜3月</td><td>4,000円（持ち帰り2kg）</td><td>各回12人</td></tr>
                <tr><td>房総野菜の収穫体験</td><td>7月〜9月</td><td>1,500円（野菜お土産付き）</td><td>各回15人</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>予約・詳細は日野原市観光協会（☎0100-58-8888）まで。</p>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>観光振興課（観光政策係・誘客促進係）</td></tr>
                <tr><th>電話</th><td>☎<strong>0100-88-1138</strong></td></tr>
                <tr><th>メール</th><td>kanko@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
