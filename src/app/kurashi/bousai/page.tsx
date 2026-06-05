import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "防災・安全のご案内 | 日野原市",
};

export default function BousaiPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/kurashi">くらし・手続き</a> › 防災・安全のご案内
          </nav>

          <h1 className="page-title">防災・安全のご案内</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #c0392b", background: "#fdf5f5" }}>
            <h2 className="section-title">日野原市の主な災害リスク</h2>
            <p style={{ fontSize: 13, lineHeight: 1.85, marginBottom: 10 }}>
              日野原市は海に面していないため、<strong>津波・高潮は市域の主要リスクではありません</strong>。
              一方、房総丘陵に囲まれた内陸山間自治体として、以下のリスクに特に注意が必要です。
            </p>
            <table className="content-table">
              <thead>
                <tr><th>リスク種別</th><th>主な対象地域・状況</th><th>市民への影響</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>土砂災害</strong>（最重要）</td>
                  <td>白嶺地区・原野地区の急傾斜地・山際の集落</td>
                  <td>土石流・崖崩れによる家屋被害・道路寸断</td>
                </tr>
                <tr>
                  <td><strong>河川氾濫</strong></td>
                  <td>原野川・白嶺川・下原川の低地部</td>
                  <td>住宅浸水・農地冠水・橋梁通行止め</td>
                </tr>
                <tr>
                  <td><strong>山間部の孤立</strong></td>
                  <td>道路が1〜2本しかない集落（特に白嶺地区北部）</td>
                  <td>倒木・土砂崩れによる道路寸断、集落孤立</td>
                </tr>
                <tr>
                  <td><strong>冬季の路面凍結</strong></td>
                  <td>市全域（特に標高200m以上の地区）</td>
                  <td>交通事故・緊急車両の到着遅延</td>
                </tr>
                <tr>
                  <td><strong>高齢者の避難困難</strong></td>
                  <td>山間集落・一人暮らし高齢者宅</td>
                  <td>自力避難困難・情報伝達の遅れ</td>
                </tr>
                <tr>
                  <td>地震</td>
                  <td>市全域</td>
                  <td>建物倒壊・斜面崩壊・ライフライン断絶</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
              ※ハザードマップで自宅周辺のリスク区域を必ずご確認ください。
              土砂災害警戒区域・浸水想定区域は「日野原市ハザードマップ（令和8年改訂版）」に掲載しています。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">警戒レベルと行動基準</h2>
            <p>令和元年から「警戒レベル」が導入されました。レベルに応じた行動をとってください。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>警戒レベル</th>
                  <th>発令基準</th>
                  <th>取るべき行動</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>レベル1</strong>（早期注意情報）</td>
                  <td>気象庁が発表。大雨・洪水注意報等</td>
                  <td>災害への心構えを高める。最新情報に注意する</td>
                </tr>
                <tr>
                  <td><strong>レベル2</strong>（洪水注意報等）</td>
                  <td>気象庁が発表。避難行動確認が必要</td>
                  <td>ハザードマップ等で自宅の危険度を再確認する</td>
                </tr>
                <tr>
                  <td><strong>レベル3</strong>（高齢者等避難）</td>
                  <td>市が発令。避難に時間がかかる方を対象</td>
                  <td>高齢者・障害者等は危険な場所から避難を開始する</td>
                </tr>
                <tr>
                  <td><strong>レベル4</strong>（避難指示）</td>
                  <td>市が発令。危険な状況が迫っている</td>
                  <td>全員が危険な場所から避難する（立退き避難または屋内安全確保）</td>
                </tr>
                <tr>
                  <td><strong>レベル5</strong>（緊急安全確保）</td>
                  <td>市が発令。すでに災害が発生または切迫</td>
                  <td>命を守るための最善の行動をとる（今すぐ高い場所へ移動等）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">指定避難所一覧</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th>避難所名</th>
                  <th>所在地</th>
                  <th>収容人数</th>
                  <th>対応できる災害種別</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>日野原市役所</td>
                  <td>中央1-1</td>
                  <td>500人</td>
                  <td>洪水・土砂・地震</td>
                </tr>
                <tr>
                  <td>中央小学校体育館</td>
                  <td>中央2-12</td>
                  <td>300人</td>
                  <td>地震</td>
                </tr>
                <tr>
                  <td>市民文化センター</td>
                  <td>中央3-5</td>
                  <td>600人</td>
                  <td>全災害</td>
                </tr>
                <tr>
                  <td>北部小学校</td>
                  <td>北部3-8</td>
                  <td>250人</td>
                  <td>地震</td>
                </tr>
                <tr>
                  <td>南部小学校</td>
                  <td>南部1-15</td>
                  <td>250人</td>
                  <td>地震</td>
                </tr>
                <tr>
                  <td>総合体育館</td>
                  <td>北部1-4</td>
                  <td>800人</td>
                  <td>全災害</td>
                </tr>
                <tr>
                  <td>原野公民館</td>
                  <td>原野字中沢200</td>
                  <td>150人</td>
                  <td>洪水・土砂</td>
                </tr>
                <tr>
                  <td>白嶺地区センター</td>
                  <td>白嶺字里100</td>
                  <td>200人</td>
                  <td>地震</td>
                </tr>
                <tr>
                  <td>農業公園多目的棟</td>
                  <td>下原字農地1500</td>
                  <td>100人</td>
                  <td>地震</td>
                </tr>
                <tr>
                  <td>市民福祉センター</td>
                  <td>南部2-3</td>
                  <td>200人</td>
                  <td>全災害</td>
                </tr>
              </tbody>
            </table>
            <p>※避難所はペット同伴不可の場合があります。ペットは専用スペースをご利用ください。福祉避難所については総務課防災係にお問い合わせください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">防災行政無線</h2>
            <p>市内各地に設置された防災行政無線スピーカーから、避難情報や気象情報等をお知らせします。</p>
            <ul>
              <li><strong>放送内容の確認（テレホンサービス）：</strong>☎ 0120-100-001（フリーダイヤル・24時間）</li>
              <li><strong>市公式LINEアカウント：</strong>避難情報・気象警報をプッシュ通知でお届けします（「日野原市」で友だち追加）</li>
              <li><strong>市防災メール：</strong>メールでの情報受信登録は市ウェブサイトから</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">ハザードマップ</h2>
            <p>改訂版ハザードマップを令和8年5月に全戸配布しました。洪水・土砂災害・地震・火山の各リスクを掲載しています。</p>
            <ul>
              <li>PDF版は市ウェブサイトからダウンロードできます</li>
              <li>紙のハザードマップは市役所・各公民館で配布しています（なくなり次第終了）</li>
              <li>国土交通省「重ねるハザードマップ」でもご確認いただけます</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>窓口</th>
                  <td>総務課 防災係（市役所2階）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>☎ 0100-88-1112</td>
                </tr>
                <tr>
                  <th>開庁時間</th>
                  <td>平日 8:30〜17:15</td>
                </tr>
                <tr>
                  <th>緊急時</th>
                  <td>災害発生時は☎ 0100-88-1112（時間外も転送対応）</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="総務課" division="防災係" tel="0100-88-1123（内線 123）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
