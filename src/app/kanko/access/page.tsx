import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市へのアクセス" };

export default function AccessPage() {
  return (
    <>
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/kanko">観光・移住</a><span>›</span><span>日野原市へのアクセス</span>
          </div>
          <h1 className="page-title">日野原市へのアクセス</h1>

          <div className="content-box">
            <h2 className="section-title">鉄道でのアクセス</h2>
            <p style={{ fontSize: 13, marginBottom: 10, lineHeight: 1.7 }}>日野原市に直接乗り入れる鉄道はありません。最寄り駅はJR内房線「君津駅」です。<br />君津駅からは市営ひのはらバス（直通便）で約35分です。</p>
            <table className="content-table">
              <thead>
                <tr><th>出発地</th><th>経路</th><th>所要時間</th><th>料金（目安）</th></tr>
              </thead>
              <tbody>
                <tr><td>東京（東京駅）</td><td>JR内房線（特急「さざなみ」） → 君津駅 → 市営バス直通 → 日野原中央</td><td>約<strong>1時間45分</strong></td><td>約2,200円</td></tr>
                <tr><td>東京（東京駅）</td><td>JR京葉線 → 蘇我 → JR内房線（普通） → 君津 → 市営バス</td><td>約<strong>2時間10分</strong></td><td>約1,500円</td></tr>
                <tr><td>千葉</td><td>JR内房線 → 君津 → 市営バス</td><td>約<strong>1時間25分</strong></td><td>約1,100円</td></tr>
                <tr><td>横浜</td><td>JR横須賀線 → 久里浜 → 東京湾フェリー → 金谷 → JR内房線 → 君津 → 市営バス</td><td>約<strong>2時間10分</strong></td><td>約2,000円</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 13, marginTop: 8 }}>最寄り駅：JR内房線「君津駅」（君津駅南口から市営バス「日野原中央行き」乗車）</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">高速バスでのアクセス</h2>
            <table className="content-table">
              <tbody>
                <tr><th>運行路線</th><td>東京駅八重洲口 〜 日野原中央バスターミナル</td></tr>
                <tr><th>運行本数</th><td><strong>1日3往復</strong>（8:00・12:30・17:00発 東京駅発）</td></tr>
                <tr><th>所要時間</th><td>約<strong>1時間50分</strong>（渋滞時は変動あり）</td></tr>
                <tr><th>片道料金</th><td><strong>1,800円</strong>（往復割引: 3,200円）</td></tr>
                <tr><th>予約</th><td>高速バスネット等の予約サイト・電話予約可</td></tr>
                <tr><th>バスターミナル</th><td>日野原市中央2丁目1（日野原中央バスターミナル）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">車でのアクセス</h2>
            <table className="content-table">
              <thead>
                <tr><th>出発地</th><th>経路</th><th>所要時間</th></tr>
              </thead>
              <tbody>
                <tr><td>東京（アクアライン経由）</td><td>首都高 → 東京湾アクアライン → 木更津東IC → 国道410号 → 日野原市中心部</td><td>約<strong>1時間20分</strong></td></tr>
                <tr><td>館山道 君津IC</td><td>君津IC → 国道410号 → 日野原市中心部</td><td>約<strong>30分</strong></td></tr>
                <tr><td>千葉市方面</td><td>京葉道路 → 館山道 → 君津IC → 国道410号</td><td>約<strong>1時間10分</strong></td></tr>
                <tr><td>横浜・川崎方面</td><td>首都高 → 東京湾アクアライン → 木更津東IC → 国道410号</td><td>約<strong>1時間10分</strong></td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>駐車場情報</h3>
            <table className="content-table">
              <thead>
                <tr><th>駐車場名</th><th>台数</th><th>料金</th><th>場所</th></tr>
              </thead>
              <tbody>
                <tr><td>市役所駐車場</td><td>120台</td><td>無料</td><td>市役所西側</td></tr>
                <tr><td>道の駅「ひのはら原野」</td><td>200台</td><td>無料</td><td>国道410号沿い</td></tr>
                <tr><td>日野原中央駐車場</td><td>50台</td><td>1時間無料・以降30分100円</td><td>日野原中央バスターミナル前</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">市内交通</h2>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>市営ひのはらバス（3路線）</h3>
            <table className="content-table">
              <thead>
                <tr><th>路線名</th><th>主な経由地</th><th>運行本数</th><th>料金</th></tr>
              </thead>
              <tbody>
                <tr><td>中央線</td><td>日野原中央〜市役所〜白峰地区センター</td><td>平日8本・土休日5本</td><td>100〜300円</td></tr>
                <tr><td>原野線</td><td>日野原中央〜道の駅ひのはら原野〜農業センター</td><td>平日6本</td><td>100〜200円</td></tr>
                <tr><td>高原線</td><td>日野原中央〜白峰高原〜キャンプ場（7〜10月のみ）</td><td>1日2往復</td><td>300〜500円</td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>デマンドタクシー（予約型乗合）</h3>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>バス路線のない地区をカバーする予約型の乗合タクシー。前日17時までに予約が必要。料金: 300〜500円（地区ごとに異なる）。予約: ☎0439-88-1100（市コールセンター）</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>タクシー会社</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>日野原交通 ☎0439-88-3300</li>
              <li>白峰タクシー ☎0439-56-2200</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">周辺主要都市からの距離・所要時間</h2>
            <table className="content-table">
              <thead>
                <tr><th>都市</th><th>距離</th><th>車での所要時間</th></tr>
              </thead>
              <tbody>
                <tr><td>君津市</td><td>約25km</td><td>約30分</td></tr>
                <tr><td>木更津市</td><td>約38km</td><td>約45分</td></tr>
                <tr><td>千葉市</td><td>約60km</td><td>約1時間5分</td></tr>
                <tr><td>東京都心</td><td>約90km</td><td>約1時間20分</td></tr>
                <tr><td>横浜市</td><td>約80km</td><td>約1時間10分</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">市役所・主要施設へのアクセス</h2>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>日野原市役所（日野原市中央1丁目1-1）は日野原中央バスターミナルから徒歩約8分、市営バス「市役所前」停留所前に位置します。駐車場は市役所西側（120台・無料）をご利用ください。市内の主要施設（文化センター・体育館・図書館・各地区センター）については、市公式ウェブサイトの施設マップページをご参照ください。</p>
          </div>
          <PageInfo department="建設課" division="道路係" tel="0439-88-1181（内線 181）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
