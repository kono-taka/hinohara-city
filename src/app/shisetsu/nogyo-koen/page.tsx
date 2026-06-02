import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "農業公園（ひのはら農楽園）" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>農業公園（ひのはら農楽園）</span>
          </div>
          <h1 className="page-title">農業公園「ひのはら農楽園」</h1>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8808　千葉県日野原市下原字農地1500番地</td></tr>
                <tr><th>電話</th><td>0439-88-8800　／　FAX：0439-88-8801</td></tr>
                <tr><th>開園時間</th><td>午前9時〜午後5時</td></tr>
                <tr><th>休園日</th><td>12月〜3月（冬季休園）・荒天時臨時休園</td></tr>
                <tr><th>入園料</th><td>無料（体験プログラムは別途料金）</td></tr>
                <tr><th>駐車場</th><td>無料・普通車150台・大型バス5台</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>施設・アクティビティ</h3>
            <table className="content-table">
              <thead><tr><th>施設・体験</th><th>内容・料金・時期</th></tr></thead>
              <tbody>
                <tr><td>農産物直売所</td><td>地元農家が持ち込む新鮮野菜・果物・加工品を販売。毎週土曜は朝市（7:00〜）開催。</td></tr>
                <tr><td>びわ狩り体験</td><td>観光農園送迎バスつき。びわ：5月下旬〜6月下旬。入園・食べ放題（30分）1,500円〜。お土産1kgパック付き。</td></tr>
                <tr><td>落花生掘り体験</td><td>8月下旬〜9月中旬。落花生を実際に掘り起こす収穫体験。収穫した落花生はお持ち帰り可（500g袋詰め）。1人500円〜。</td></tr>
                <tr><td>野菜収穫体験</td><td>とうもろこし（7月下旬〜8月）・さつまいも（10月）・里芋（11月）など。1袋500円〜。</td></tr>
                <tr><td>落花生加工体験</td><td>収穫した落花生を使った煎り落花生・落花生バター作り体験（要予約・2名〜・1,500円/人）。完成品はお持ち帰り可。</td></tr>
                <tr><td>BBQ施設</td><td>バーベキューコーナー（食材持込可・施設利用料500円/人・要予約）。</td></tr>
                <tr><td>とうもろこし迷路</td><td>毎年7〜8月開設（入場料300円）。約3,000本のとうもろこしで作る迷路が人気。</td></tr>
                <tr><td>農機具・農業資料展示</td><td>昔の農業機械・道具を屋外展示。農業の歴史を学べます。</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>令和8年度 主なイベント</h3>
            <table className="content-table">
              <tbody>
                <tr><th>6月7日（土）</th><td>ひのはら市民農業まつり（屋台・ステージ・体験コーナー多数）</td></tr>
                <tr><th>7月〜8月</th><td>とうもろこし迷路オープン・夏野菜収穫体験</td></tr>
                <tr><th>8月15日（土）</th><td>農産物品評会・即売会</td></tr>
                <tr><th>10月3日（土）</th><td>落花生フェスタ2026（ゆで落花生振る舞い・落花生掘り体験・加工品販売）</td></tr>
                <tr><th>10〜11月</th><td>里芋・さつまいも収穫体験ピークシーズン</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ・ご予約</strong>　農業公園「ひのはら農楽園」管理事務所　☎ 0439-88-8800<br />
            びわ狩り・落花生掘り・加工体験の団体予約は電話またはウェブフォームで。
          </div>
          <PageInfo department="農林課" tel="0439-88-1143（内線 143）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
