import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "スポーツ振興" };

export default function SportPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化・スポーツ</a><span>›</span>
            <span>スポーツ振興</span>
          </div>
          <h1 className="page-title">スポーツ振興</h1>

          {/* 市総合体育館 */}
          <h2 className="section-title">市総合体育館</h2>
          <div className="content-box">
            <table className="content-table" style={{ marginBottom: 12 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>所在地</td><td>北部1丁目4番地</td></tr>
                <tr><td>電話</td><td>☎ 0100-53-0010</td></tr>
                <tr><td>開館時間</td><td>9:00〜21:00</td></tr>
                <tr><td>休館日</td><td>火曜日（祝日の場合は翌日）・年末年始（12月29日〜1月3日）</td></tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>施設・利用料金</h3>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>施設名</th>
                    <th>一般（1時間）</th>
                    <th>高校生以下（1時間）</th>
                    <th>備考</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>メインアリーナ</td>
                    <td>850円</td>
                    <td>400円</td>
                    <td>バスケ・バレー・バドミントン等</td>
                  </tr>
                  <tr>
                    <td>サブアリーナ</td>
                    <td>430円</td>
                    <td>210円</td>
                    <td>卓球・軽スポーツ等（卓球台4台常設）</td>
                  </tr>
                  <tr>
                    <td>トレーニングルーム</td>
                    <td>310円（1回）</td>
                    <td>150円（1回）</td>
                    <td>月額2,600円の定期利用も可</td>
                  </tr>
                  <tr>
                    <td>武道場</td>
                    <td>430円</td>
                    <td>210円</td>
                    <td>柔道・剣道・空手等</td>
                  </tr>
                  <tr>
                    <td>会議室（小）</td>
                    <td>200円</td>
                    <td>—</td>
                    <td>更衣室・シャワー室（各性別）完備</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※市内在住・在勤・在学の方は上記料金。市外の方は1.5倍。障害者手帳所持者は半額。<br />
              ※利用は原則1か月前から予約受付（電話または窓口）。
            </p>
          </div>

          {/* 屋外スポーツ施設 */}
          <h2 className="section-title">屋外スポーツ施設</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>施設名</th><th>所在地</th><th>主な設備</th><th>利用申込</th></tr></thead>
              <tbody>
                <tr>
                  <td>市民グラウンド</td>
                  <td>北部1丁目5番地（体育館隣）</td>
                  <td>多目的グラウンド（天然芝）・400mトラック</td>
                  <td>体育館窓口または電話</td>
                </tr>
                <tr>
                  <td>硬式野球場（ひのはらスタジアム）</td>
                  <td>東部4丁目</td>
                  <td>内野土・外野天然芝・スコアボード・夜間照明</td>
                  <td>体育館窓口または電話</td>
                </tr>
                <tr>
                  <td>市民テニスコート</td>
                  <td>北部1丁目6番地</td>
                  <td>オムニコート6面・夜間照明</td>
                  <td>体育館窓口（当日空き枠のみ窓口即日可）</td>
                </tr>
                <tr>
                  <td>パークゴルフ場</td>
                  <td>南部5丁目</td>
                  <td>18ホール・クラブ・ボール貸出あり</td>
                  <td>当日受付（1人300円）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ひのはらスポーツクラブ */}
          <h2 className="section-title">ひのはらスポーツクラブ</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>スポーツ庁が推進する<strong>総合型地域スポーツクラブ</strong>として平成16年に設立。年齢・体力・目的に合わせて幅広い種目を楽しめます。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>設立</td><td>平成16年4月</td></tr>
                <tr><td>会員数</td><td>約680名（令和8年5月現在）</td></tr>
                <tr><td>会費</td><td>月額2,000円（中学生以下1,000円）</td></tr>
                <tr><td>入会金</td><td>1,000円</td></tr>
                <tr>
                  <td>実施種目（30種目以上）</td>
                  <td>
                    サッカー・バスケットボール・バレーボール・バドミントン・卓球・テニス・<br />
                    ソフトボール・水泳・体操・ヨガ・ピラティス・太極拳・ゲートボール 等
                  </td>
                </tr>
                <tr><td>問合せ</td><td>ひのはらスポーツクラブ事務局（体育館内）☎ 0100-53-0020</td></tr>
              </tbody>
            </table>
          </div>

          {/* 市民体育祭 */}
          <h2 className="section-title">令和8年度 市民体育祭（第29回）</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>開催日</td><td>令和8年9月6日（日）　雨天時：9月13日（日）に順延</td></tr>
                <tr><td>会場</td><td>市民グラウンド・市総合体育館</td></tr>
                <tr>
                  <td>競技種目</td>
                  <td>陸上競技・バレーボール・バドミントン・卓球・ソフトボール・剣道・柔道・弓道 等</td>
                </tr>
                <tr><td>申込受付</td><td>令和8年8月1日（金）〜8月22日（金）</td></tr>
                <tr><td>申込先</td><td>生涯学習課体育振興係（☎ 0100-88-1141）または各種目競技団体</td></tr>
                <tr><td>参加資格</td><td>市内在住・在勤・在学の方（在学は中学生以上）</td></tr>
              </tbody>
            </table>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            生涯学習課 体育振興係（市役所2階）<br />
            ☎ 0100-88-1141　受付時間：平日 8:30〜17:15<br />
            施設の利用申込・体育祭に関するお問い合わせは市総合体育館（☎ 0100-53-0010）でも受け付けています
          </div>
          <PageInfo department="生涯学習課" division="スポーツ振興係" tel="0100-88-8311（内線 311）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
