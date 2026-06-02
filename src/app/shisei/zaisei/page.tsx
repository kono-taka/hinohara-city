import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "財政情報" };

export default function ZaiseiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/shisei">市政情報</a><span>›</span><span>財政情報</span>
          </div>
          <h1 className="page-title">財政情報</h1>

          <div className="content-box">
            <h2 className="section-title">令和8年度当初予算の概要</h2>
            <table className="content-table">
              <thead>
                <tr><th>会計区分</th><th>予算額</th><th>前年度比</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>一般会計</strong></td><td><strong>182億3,500万円</strong></td><td>+2.3%</td></tr>
                <tr><td>国民健康保険特別会計</td><td>42億1,800万円</td><td>+1.1%</td></tr>
                <tr><td>介護保険特別会計</td><td>38億5,200万円</td><td>+3.2%</td></tr>
                <tr><td>後期高齢者医療特別会計</td><td>8億5,100万円</td><td>+4.5%</td></tr>
                <tr><td><strong>特別会計 計</strong></td><td><strong>89億2,100万円</strong></td><td>+2.3%</td></tr>
                <tr style={{ background: "#e8f4fd", fontWeight: "bold" }}><td>総予算規模</td><td>271億5,600万円</td><td>+2.3%</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">令和8年度 一般会計 主要事業（上位5件）</h2>
            <table className="content-table">
              <thead>
                <tr><th>順位</th><th>事業名</th><th>予算額</th><th>概要</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>第3次総合計画推進事業</td><td>3億5,000万円</td><td>重点プロジェクトの実施・進捗管理</td></tr>
                <tr><td>2</td><td>学校給食センター改修事業</td><td>18億2,000万円</td><td>老朽化した給食センターの改築（2か年）</td></tr>
                <tr><td>3</td><td>道路橋梁整備事業</td><td>12億8,000万円</td><td>市道の舗装修繕・橋梁点検・更新</td></tr>
                <tr><td>4</td><td>介護保険給付費</td><td>35億4,000万円</td><td>介護保険サービス給付費の増加対応</td></tr>
                <tr><td>5</td><td>子育て支援総合事業</td><td>8億6,000万円</td><td>保育・放課後対策・子育て相談の充実</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">財政指標</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>財政力指数</th>
                  <td><strong>0.42</strong>（令和7年度）<br /><span style={{ fontSize: 12, color: "#666" }}>1を下回るほど地方交付税への依存度が高い。千葉県内市平均0.48</span></td>
                </tr>
                <tr>
                  <th>経常収支比率</th>
                  <td><strong>87.3%</strong>（令和7年度）<br /><span style={{ fontSize: 12, color: "#666" }}>80〜90%程度が標準。高いほど自由に使える財源が少ない</span></td>
                </tr>
                <tr>
                  <th>実質公債費比率</th>
                  <td><strong>10.2%</strong>（令和7年度・3か年平均）<br /><span style={{ fontSize: 12, color: "#666" }}>18%を超えると地方債発行に制限がかかる。余裕がある水準</span></td>
                </tr>
                <tr>
                  <th>将来負担比率</th>
                  <td><strong>68.4%</strong>（令和7年度）<br /><span style={{ fontSize: 12, color: "#666" }}>350%が早期健全化基準。十分に健全な財政状態</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">市債残高</h2>
            <table className="content-table">
              <tbody>
                <tr><th>令和7年度末残高（見込み）</th><td><strong>143億8,000万円</strong></td></tr>
                <tr><th>市民1人当たり</th><td>約37.8万円</td></tr>
                <tr><th>うち臨時財政対策債</th><td>48億2,000万円（交付税措置が見込まれる）</td></tr>
                <tr><th>今後の見通し</th><td>学校給食センター改修事業等の大型投資により令和9年度に一時的に増加する見通しだが、その後は縮減する計画</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">令和7年度 決算見込み（一般会計）</h2>
            <table className="content-table">
              <tbody>
                <tr><th>歳入総額</th><td><strong>175億円</strong>（見込み）</td></tr>
                <tr><th>歳出総額</th><td><strong>169億円</strong>（見込み）</td></tr>
                <tr><th>翌年度繰越財源</th><td>3億円</td></tr>
                <tr><th>実質収支</th><td><strong>3億円の黒字</strong>（3年連続黒字）</td></tr>
                <tr><th>財政調整基金残高</th><td>14億5,000万円（令和7年度末見込み）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">財政状況報告書・関連資料</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>財政状況資料集（PDF）: 年2回更新（9月・翌年3月）</li>
              <li>予算書・予算の概要（PDF）: 毎年3月に公開</li>
              <li>決算書・決算の概要（PDF）: 毎年9月に公開</li>
              <li>財政健全化判断比率: 毎年9月の定例会後に公開</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>各資料は市公式ウェブサイトの「財政情報」ページからダウンロードいただけます。紙の冊子は財政課窓口にて配布しています。</p>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>財政課（予算係・資産管理係）</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1117</strong></td></tr>
                <tr><th>メール</th><td>zaisei@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="財政課" tel="0439-88-1111（内線 111）" updated="令和8年3月31日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
