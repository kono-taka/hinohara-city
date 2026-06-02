import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市政概要・プロフィール" };

export default function GaiyouPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>市政概要・プロフィール</span>
          </div>
          <h1 className="page-title">日野原市の概要・プロフィール</h1>

          <div className="section-title">市の基本情報</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr><th>市名</th><td>日野原市（ひのはらし）</td></tr>
                <tr><th>所在地</th><td>千葉県南房総地方（房総丘陵中央部）</td></tr>
                <tr><th>市制施行日</th><td>平成18年（2006年）3月20日<br /><span style={{ fontSize: 12, color: "#666" }}>※旧 日野町・原野村・白峰村の3町村が合併して発足</span></td></tr>
                <tr><th>総面積</th><td>312.41 km²</td></tr>
                <tr><th>総人口</th><td>42,381人（令和7年5月1日現在・住民基本台帳）</td></tr>
                <tr><th>世帯数</th><td>17,902世帯</td></tr>
                <tr><th>人口密度</th><td>135.7人/km²</td></tr>
                <tr><th>隣接市町村</th><td>君津市、市原市、南房総市、鴨川市、鋸南町、富津市、木更津市</td></tr>
                <tr><th>標高</th><td>市役所付近：約240m　最高峰（大台山）：382m</td></tr>
                <tr><th>市の木</th><td>タブノキ</td></tr>
                <tr><th>市の花</th><td>ヤマユリ</td></tr>
                <tr><th>市の鳥</th><td>ルリビタキ</td></tr>
                <tr><th>市章</th><td>
                  <span style={{ fontSize: 12, lineHeight: 1.7 }}>
                    「日野原」の頭文字「ひ」を図案化。三本の線は旧3町村の統合と、房総丘陵の稜線を表す。
                    円は市民の一体感と地域の調和を意味する。（平成18年3月 市民公募により制定）
                  </span>
                </td></tr>
                <tr><th>市歌</th><td>「山よ　原よ　ひのはら」（作詞：長田和子、作曲：村山俊也、平成18年9月制定）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>人口の推移</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <thead>
                <tr>
                  <th>年</th><th>人口（人）</th><th>世帯数</th><th>備考</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>平成17年（国勢調査）</td><td>51,492</td><td>18,344</td><td>合併前（3町村計）</td></tr>
                <tr><td>平成22年（国勢調査）</td><td>49,218</td><td>18,102</td><td></td></tr>
                <tr><td>平成27年（国勢調査）</td><td>46,785</td><td>18,012</td><td></td></tr>
                <tr><td>令和2年（国勢調査）</td><td>44,133</td><td>17,974</td><td></td></tr>
                <tr><td>令和7年5月（住民基本台帳）</td><td>42,381</td><td>17,902</td><td>最新</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
              ※合計特殊出生率（令和5年）：1.18（全国平均1.20、千葉県平均1.23）
            </p>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>地理・地勢</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 10px" }}>
              日野原市は千葉県南房総地方に位置し、東西約22km、南北約28kmにわたる山間の市です。
              市の西部から北部にかけては標高200〜380mの丘陵が広がり、房総山地の支脈である「日野原丘陵」を形成しています。
              市域の約72%を山林が占め、市街地は房総丘陵内の原野盆地（標高約230〜260m）に広がっています。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 10px" }}>
              市内には原野川（おのがわ）とその支流が縦断し、豊富な水資源を有しています。
              気候は内陸性で寒暖の差が大きく、夏は涼しく過ごしやすい一方、冬は降雪もあります。
              この気候を活かしたびわ（ぽんなわびわ・房州びわ）・落花生・里芋・棚田米の生産が盛んです。
            </p>
            <table className="content-table">
              <tbody>
                <tr><th>地区区分</th><td>中央地区（旧日野町）、原野地区（旧原野村）、白峰地区（旧白峰村）</td></tr>
                <tr><th>主な河川</th><td>原野川、白峰川、下原川、槻沢川</td></tr>
                <tr><th>主な山岳</th><td>大台山（382m）、鹿野山（379m）、高宕山（330m）</td></tr>
                <tr><th>森林面積</th><td>約17,800ha（市域全体の57.0%）</td></tr>
                <tr><th>農用地面積</th><td>約2,840ha（うち農地2,120ha、採草放牧地720ha）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>産業</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>農林業</th>
                  <td>
                    市の基幹産業。びわ（ぽんなわびわ・房州びわ）・落花生・里芋・棚田米の生産が盛ん。農業産出額は約38億円（令和4年）。
                    山林面積が広く、林業も重要。
                  </td>
                </tr>
                <tr>
                  <th>製造業</th>
                  <td>
                    精密機械・電子部品製造業を中心に事業所が立地。君津・木更津の製造業集積地と連携した産業振興を推進。
                    製造品出荷額等：約245億円（令和3年工業統計）。
                  </td>
                </tr>
                <tr>
                  <th>観光業</th>
                  <td>
                    年間入込客数：約78万人（令和5年度）。白峰温泉郷・日野原丘陵ハイキング・びわ狩り体験・落花生掘り体験が主な誘客資源。
                  </td>
                </tr>
                <tr>
                  <th>商業</th>
                  <td>
                    中央商店街を中心に小売・飲食業が集積。年間商品販売額は約320億円（令和3年商業統計）。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="企画政策課" tel="0439-88-1114（内線 101）" updated="令和6年12月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
