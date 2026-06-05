import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日野原やまびこ祭り",
  description: "毎年6月開催「日野原やまびこ祭り」。山車・神輿・特産品市・花火など2日間の夏まつり。令和8年は6月14日（土）・15日（日）開催。アクセス・駐車場情報も掲載。",
};

const faqs = [
  { q: "令和8年のやまびこ祭りはいつですか？", a: "令和8年（2026年）6月14日（土）・15日（日）の2日間開催予定です。会場は日野原市中央公園・市民広場周辺です。" },
  { q: "やまびこ祭りの見どころは何ですか？", a: "市内各地区から繰り出す山車・神輿の巡行、特産品（びわ・落花生・地酒）の市、地元グルメ屋台、ステージイベントが主な見どころです。最終日の夜には花火も打ち上げられます。" },
  { q: "駐車場はありますか？", a: "会場周辺の市民駐車場（約300台）と臨時駐車場（市北部運動公園・約500台）を利用できます。混雑が予想されるため公共交通機関の利用をお勧めします。" },
  { q: "電車・バスでのアクセスは？", a: "日野原中央駅から会場まで徒歩約10分です。祭り期間中は臨時シャトルバスも運行予定（詳細は開催1か月前に公式発表）。" },
  { q: "屋台・飲食の出店はありますか？", a: "両日ともに地元飲食店・農家・商工団体による屋台が50〜60店舗出店します。日野原名物のびわソフトクリーム・落花生揚げなども販売予定です。" },
];

export default function YamabikoPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "観光・移住", href: "/kanko" },
        { name: "日野原やまびこ祭り" },
      ]} />
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kanko">観光・移住</a><span>›</span>
            <span>日野原やまびこ祭り</span>
          </div>
          <h1 className="page-title">日野原やまびこ祭り</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #e53935", background: "#ffeee e" }}>
            <h2 className="section-title">第19回 日野原やまびこ祭り 開催情報</h2>
            <table className="content-table">
              <tbody>
                <tr><th>開催日</th><td><strong>令和8年（2026年）6月14日（土）・15日（日）</strong></td></tr>
                <tr><th>時間</th><td>14日（土）12:00〜21:00　／　15日（日）10:00〜20:30</td></tr>
                <tr><th>会場</th><td>日野原市中央公園・市民広場・中央通り周辺</td></tr>
                <tr><th>入場料</th><td>無料</td></tr>
                <tr><th>主催</th><td>日野原やまびこ祭り実行委員会・日野原市</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">見どころ・プログラム</h2>
            {[
              {
                title: "山車・神輿の巡行",
                time: "両日 13:00〜",
                desc: "市内10地区から伝統の山車・神輿が繰り出します。各地区趣向を凝らした装飾と祭り囃子が祭りの最大の見どころ。",
              },
              {
                title: "特産品市・物産展",
                time: "両日 10:00〜",
                desc: "旬のぽんなわびわ・落花生・野菜・地酒・工芸品などが並びます。日野原ならではの逸品を直接生産者から購入できます。",
              },
              {
                title: "ステージイベント",
                time: "両日随時",
                desc: "地元バンド・よさこい・和太鼓演奏・市民コーラスなど多彩なステージが中央公園特設ステージで繰り広げられます。",
              },
              {
                title: "フィナーレ花火",
                time: "15日（日）20:00〜",
                desc: "2日間のフィナーレを飾る花火大会（約300発）。中央公園から打ち上げられ、市街地から広く観覧できます。",
              },
            ].map((item) => (
              <div key={item.title} style={{ marginBottom: 12, padding: "10px 14px", border: "1px solid #e0e7f0", borderRadius: 4 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
                  <strong style={{ fontSize: 13, color: "#1a6e5a" }}>{item.title}</strong>
                  <span style={{ fontSize: 11, color: "#888" }}>{item.time}</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="content-box">
            <h2 className="section-title">アクセス・駐車場</h2>
            <table className="content-table">
              <tbody>
                <tr><th>電車</th><td>日野原中央駅から徒歩約10分</td></tr>
                <tr><th>臨時シャトルバス</th><td>開催1か月前に詳細発表予定（市HP・公式SNSでお知らせ）</td></tr>
                <tr><th>お車</th><td>館山自動車道「君津IC」より約35分</td></tr>
                <tr><th>会場周辺駐車場</th><td>市民駐車場 約300台（無料）</td></tr>
                <tr><th>臨時駐車場</th><td>市北部運動公園 約500台（無料・シャトルバス運行）</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#c62828", marginTop: 8 }}>
              ※ 会場周辺は大変混雑します。公共交通機関のご利用をお勧めします。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">よくある質問</h2>
            <dl style={{ margin: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid #e0eae5", padding: "12px 0" }}>
                  <dt style={{ fontWeight: "bold", fontSize: 13, color: "#1a6e5a", marginBottom: 4 }}>Q. {q}</dt>
                  <dd style={{ fontSize: 13, lineHeight: 1.8, margin: 0, paddingLeft: 8, color: "#444" }}>A. {a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>産業振興課 観光係</th><td>☎ <strong>0100-88-1144</strong>（内線 144）</td></tr>
                <tr><th>やまびこ祭り実行委員会事務局</th><td>☎ <strong>0100-88-1145</strong></td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和8年5月27日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
