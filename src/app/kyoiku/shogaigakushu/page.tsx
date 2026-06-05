import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "生涯学習・各種講座" };

export default function ShogaigakushuPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化・スポーツ</a><span>›</span>
            <span>生涯学習・各種講座</span>
          </div>
          <h1 className="page-title">生涯学習・各種講座</h1>

          {/* まなびの館 */}
          <h2 className="section-title">生涯学習センター「まなびの館」</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>市民の生涯学習・文化活動の拠点施設です。各種講座・サークル活動・自主学習にご利用ください。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>所在地</td><td>東部1丁目8番3号</td></tr>
                <tr><td>電話</td><td>☎ 0100-53-1200</td></tr>
                <tr><td>開館時間</td><td>9:00〜21:00（日曜・祝日は17:00まで）</td></tr>
                <tr><td>休館日</td><td>月曜日（祝日の場合は翌日）・年末年始（12月28日〜1月3日）</td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "14px 0 8px" }}>主な施設・設備</h3>
            <table className="content-table">
              <thead><tr><th>室名</th><th>定員・設備</th><th>主な利用</th></tr></thead>
              <tbody>
                <tr>
                  <td>多目的ホール</td>
                  <td>収容300名・ステージ・音響照明設備</td>
                  <td>発表会・講演会・コンサート</td>
                </tr>
                <tr>
                  <td>陶芸室</td>
                  <td>電動ろくろ8台・電気窯2基・手びねり台</td>
                  <td>陶芸教室・サークル活動</td>
                </tr>
                <tr>
                  <td>音楽室（防音）</td>
                  <td>グランドピアノ1台・防音完備・30名収容</td>
                  <td>合唱・合奏・音楽教室</td>
                </tr>
                <tr>
                  <td>調理実習室</td>
                  <td>調理台8台（48名対応）・業務用オーブン</td>
                  <td>料理教室・食育講座</td>
                </tr>
                <tr>
                  <td>工芸室</td>
                  <td>作業台12台・木工・染色等の設備</td>
                  <td>木工・染色・ガラス工芸</td>
                </tr>
                <tr>
                  <td>研修室（大・中・小）</td>
                  <td>大100名・中50名・小20名</td>
                  <td>講座・会議・自主学習</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 市民大学 */}
          <h2 className="section-title">令和8年度 前期 市民大学（ひのはら学）</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>様々な分野の講座を通じて、地域への理解を深め、豊かな市民生活を送ることを目的とした市民向け公開講座です。</p>
            <p><strong>開講期間：</strong>令和8年6月10日（火）〜9月末日（全20講座）</p>
            <div style={{ overflowX: "auto", marginTop: 10 }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>講座名</th>
                    <th>内容・講師</th>
                    <th>回数</th>
                    <th>受講料</th>
                    <th>定員</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>佐久・日野原の歴史と文化</td>
                    <td>地域史研究家による郷土の歴史講義</td>
                    <td>全4回</td>
                    <td>1,000円</td>
                    <td>30名</td>
                  </tr>
                  <tr>
                    <td>健康長寿のための食と運動</td>
                    <td>管理栄養士・理学療法士による健康講座</td>
                    <td>全3回</td>
                    <td>500円</td>
                    <td>40名</td>
                  </tr>
                  <tr>
                    <td>英会話入門（初心者向け）</td>
                    <td>外国語指導助手（ALT）との実践的英会話</td>
                    <td>全6回</td>
                    <td>2,000円</td>
                    <td>20名</td>
                  </tr>
                  <tr>
                    <td>パソコン・スマホ入門</td>
                    <td>基本操作・インターネット・SNSの安全な使い方</td>
                    <td>全4回</td>
                    <td>1,500円</td>
                    <td>16名</td>
                  </tr>
                  <tr>
                    <td>書道（楷書・行書）</td>
                    <td>書道師範による実技指導</td>
                    <td>全6回</td>
                    <td>2,000円（道具代別途）</td>
                    <td>15名</td>
                  </tr>
                  <tr>
                    <td>水彩画入門</td>
                    <td>地元画家による風景・静物画の基礎</td>
                    <td>全6回</td>
                    <td>2,000円（画材代別途）</td>
                    <td>15名</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※申込は5月15日（木）から生涯学習センター「まなびの館」（☎ 0100-53-1200）または市役所生涯学習課窓口で受け付けます。<br />
              ※定員になり次第締め切り。キャンセル待ち制度あり。
            </p>
          </div>

          {/* 地域の文化財 */}
          <h2 className="section-title">地域の文化財</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>日野原市には縄文時代から近世に至る多くの文化財が残されています。</p>
            <table className="content-table">
              <thead><tr><th>文化財名</th><th>種別</th><th>所在地</th><th>概要</th></tr></thead>
              <tbody>
                <tr>
                  <td>下原遺跡</td>
                  <td>国史跡（縄文遺跡）</td>
                  <td>東部地区</td>
                  <td>縄文中期の大規模集落跡。土器・石器・装飾品が多数出土。隣接する「下原縄文ミュージアム」で展示中。</td>
                </tr>
                <tr>
                  <td>旧日野村庄屋屋敷</td>
                  <td>市指定有形文化財</td>
                  <td>中央3丁目</td>
                  <td>江戸時代中期建築の庄屋屋敷。主屋・土蔵・表門が現存。毎年4月・10月に特別公開。</td>
                </tr>
                <tr>
                  <td>白峰の棚田</td>
                  <td>千葉県農業遺産</td>
                  <td>白峰地区</td>
                  <td>江戸時代から続く急斜面の棚田群（約200枚）。毎年9月に「棚田の夕べ」（ライトアップイベント）を開催。</td>
                </tr>
                <tr>
                  <td>熊野神社本殿・拝殿</td>
                  <td>市指定有形文化財</td>
                  <td>原野地区</td>
                  <td>室町時代の木造建築。市内最古の木造建造物。彫刻欄間は見事な意匠。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 公民館活動 */}
          <h2 className="section-title">公民館活動</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>市内7か所の公民館を中心に、各地区の文化・学習活動を支援しています。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>公民館名</th><th>所在地</th><th>電話</th></tr></thead>
              <tbody>
                <tr><td>中央公民館（まなびの館併設）</td><td>東部1丁目</td><td>0100-53-1200</td></tr>
                <tr><td>北部公民館</td><td>北部2丁目</td><td>0100-53-1400</td></tr>
                <tr><td>東部公民館</td><td>東部5丁目</td><td>0100-53-1500</td></tr>
                <tr><td>南部公民館</td><td>南部3丁目</td><td>0100-88-7100</td></tr>
                <tr><td>原野公民館</td><td>原野地区</td><td>0100-54-2100</td></tr>
                <tr><td>白峰公民館</td><td>白峰地区</td><td>0100-55-1300</td></tr>
                <tr><td>川端公民館</td><td>川端地区</td><td>0100-56-0200</td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "14px 0 8px" }}>文化活動への補助制度</h3>
            <p style={{ lineHeight: 1.8 }}>市内の文化・学習活動団体（サークル・同好会等）に対し、以下の補助を行っています。</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>文化活動振興補助金（年額上限10,000円・登録団体が対象）</li>
              <li>発表会・展覧会の会場使用料の減免</li>
              <li>各地区文化祭への出展支援（市内全7地区で秋に開催）</li>
            </ul>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            生涯学習課（市役所2階）<br />
            ☎ 0100-88-1141　受付時間：平日 8:30〜17:15<br />
            施設の利用申込・講座申込は生涯学習センター「まなびの館」（☎ 0100-53-1200）でも受け付けています
          </div>
          <PageInfo department="生涯学習課" tel="0100-88-8311（内線 311）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
