import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "文化財・歴史" };

export default function BunkaPage() {
  return (
    <>
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/kanko">観光・移住</a><span>›</span><span>文化財・歴史</span>
          </div>
          <h1 className="page-title">文化財・歴史</h1>

          <div className="content-box">
            <h2 className="section-title">国指定史跡「下原遺跡」</h2>
            <table className="content-table">
              <tbody>
                <tr><th>種別</th><td>国指定史跡</td></tr>
                <tr><th>時代</th><td>縄文時代中期（約5,000年前）</td></tr>
                <tr><th>所在地</th><td>日野原市下原字宮ノ前地内</td></tr>
                <tr><th>面積</th><td><strong>4.2ha</strong></td></tr>
                <tr><th>指定年</th><td>昭和52年（1977年）</td></tr>
                <tr><th>概要</th><td>南房総地方最大規模の縄文集落跡。竪穴住居跡・土器・石器が多数出土。現在は史跡公園として整備され、復元住居（2棟）を見学できます。</td></tr>
                <tr><th>入場</th><td>無料（史跡公園部分）。隣接の歴史民俗資料館は入館300円</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">市指定文化財一覧（計18件）</h2>
            <table className="content-table">
              <thead>
                <tr><th>種別</th><th>件数</th><th>主なもの</th></tr>
              </thead>
              <tbody>
                <tr><td>有形文化財（建造物）</td><td>4件</td><td>旧日野村庄屋屋敷・白峰薬師堂・原野川の石橋・中央集会所（大正建築）</td></tr>
                <tr><td>有形文化財（美術工芸品）</td><td>5件</td><td>下原遺跡出土の火焔型土器・在銘の刀剣2口・絵馬コレクション</td></tr>
                <tr><td>有形民俗文化財</td><td>3件</td><td>農耕用具一式・養蚕用具・山仕事道具</td></tr>
                <tr><td>無形民俗文化財</td><td>4件</td><td>白峰の盆踊り・原野の大人形（節句行事）・日野原手まり唄・囃子</td></tr>
                <tr><td>天然記念物</td><td>2件</td><td>白峰高原のブナ林（市域北部・約50ha）・宮ノ前のアカマツ（樹齢推定350年）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">旧日野村庄屋屋敷</h2>
            <table className="content-table">
              <tbody>
                <tr><th>時代</th><td>江戸時代末期（嘉永〜万延年間建造）</td></tr>
                <tr><th>所在地</th><td>日野原市下原字本村456</td></tr>
                <tr><th>指定</th><td>市指定有形文化財（建造物）</td></tr>
                <tr><th>特徴</th><td>本棟造り（千葉県の伝統的農家建築）・囲炉裏・農具蔵・庭園が当時の姿をよく伝える</td></tr>
                <tr><th>見学</th><td>要事前予約（教育委員会文化財係 ☎0439-88-1125）。無料</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">白峰の棚田</h2>
            <table className="content-table">
              <tbody>
                <tr><th>認定</th><td>農林水産省「日本の棚田百選」（平成11年認定）</td></tr>
                <tr><th>面積</th><td>約<strong>80ha</strong>（市北部 白峰地区）</td></tr>
                <tr><th>特徴</th><td>標高600〜900mに広がる約1,500枚の棚田。春の田植え・夏の青田・秋の黄金色と四季折々の景観が楽しめる</td></tr>
                <tr><th>農業体験</th><td>田植え（5月）・稲刈り（9月）体験あり。申込: 日野原市観光協会 ☎0439-58-8888</td></tr>
                <tr><th>オーナー制度</th><td>市外の方が棚田1区画（約1a）を1年間オーナーとして管理。年会費15,000円。収穫米（約20kg）を受け取れる</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">原野川の渡し場跡</h2>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>江戸時代、松本藩と飯田藩を結ぶ脇街道の要所として機能した渡し場の跡。原野川が増水した際に人馬が渡河を待った「渡し場茶屋」の礎石が現存しています。市の案内板（令和3年設置）では、渡し場の歴史と当時の交通路について詳しく解説しています。</p>
            <p style={{ fontSize: 13 }}><strong>所在地:</strong> 日野原市原野字渡場地内（市道沿い・無料・常時公開）</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">歴史民俗資料館</h2>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>日野原市下原字宮ノ前10-1（下原遺跡史跡公園内）</td></tr>
                <tr><th>入館料</th><td>大人 <strong>300円</strong>　中学生以下 無料　団体（20人以上）250円</td></tr>
                <tr><th>開館時間</th><td>9:00〜16:30（入館は16:00まで）</td></tr>
                <tr><th>休館日</th><td><strong>月曜日</strong>（祝日の場合は翌火曜）・年末年始（12/28〜1/4）</td></tr>
                <tr><th>展示内容</th><td>縄文時代の出土品・近世の農具・民俗用具・昭和の生活用品・白峰の棚田ジオラマ</td></tr>
                <tr><th>電話</th><td>☎0439-88-8800</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="産業振興課" division="観光係" tel="0439-88-1144（内線 144）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
