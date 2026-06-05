import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日野原アルプス ハイキング（標高382m）",
  description: "千葉県最大級のハイキングコース「日野原アルプス」。標高382m・全長約14km。房総丘陵の絶景と棚田を楽しめる通年ハイキングスポット。コース・アクセス・装備情報を掲載。",
};

const faqs = [
  { q: "日野原アルプスのハイキングコースはいくつありますか？", a: "主要コースは3つあります。①縦走メインコース（全長約14km・所要約5時間）、②ファミリーコース（全長約5km・所要約2時間）、③棚田周回コース（全長約3km・所要約1時間）です。" },
  { q: "初心者でも登れますか？", a: "ファミリーコース（5km・約2時間）は比較的なだらかで初心者・ファミリー向けです。縦走コースは累積標高差600m程度で、ある程度の体力が必要です。" },
  { q: "シーズンはいつが最適ですか？", a: "通年ハイキング可能ですが、春（3〜5月）はツツジ、秋（10〜11月）は紅葉が見頃で特におすすめです。夏は熱中症対策が必要です。" },
  { q: "駐車場・トイレはありますか？", a: "登山口（北ルート・南ルート）それぞれに無料駐車場（各約30台）とトイレがあります。稜線上にトイレはないため、登山口で済ませてください。" },
  { q: "山頂からの眺めはどうですか？", a: "天気の良い日は東京湾・東京スカイツリー・富士山が見えることがあります。また眼下に広がる棚田と房総丘陵の絶景が楽しめます。" },
];

const courses = [
  {
    name: "縦走メインコース",
    distance: "約 14km",
    time: "約 5時間",
    difficulty: "中級",
    color: "#e53935",
    desc: "北登山口から山頂を経て南登山口まで縦走するメインルート。途中に棚田展望台・白嶺峠など見どころ多数。",
  },
  {
    name: "ファミリーコース",
    distance: "約 5km",
    time: "約 2時間",
    difficulty: "初級",
    color: "#43a047",
    desc: "北登山口〜山頂〜北登山口の周回コース。傾斜が緩やかでお子様連れ・ハイキング初心者向け。",
  },
  {
    name: "棚田周回コース",
    distance: "約 3km",
    time: "約 1時間",
    difficulty: "初級",
    color: "#1e88e5",
    desc: "山麓の棚田エリアを周回する平坦なコース。農作業風景と四季の棚田景観を楽しめる。",
  },
];

export default function AlpsPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "観光・移住", href: "/kanko" },
        { name: "日野原アルプス ハイキング" },
      ]} />
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kanko">観光・移住</a><span>›</span>
            <span>日野原アルプス ハイキング</span>
          </div>
          <h1 className="page-title">日野原アルプス ハイキング</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #2e7d32", background: "#e8f5e9" }}>
            <h2 className="section-title">概要</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              「日野原アルプス」は、市内北部に広がる標高382mの山系を縦走するハイキングコースです。
              房総半島屈指の全長約14km・累積標高差約600mのダイナミックなルートが楽しめるほか、
              初心者・ファミリー向けの短縮コースも整備されています。山頂からは東京湾・富士山を望める日もあり、
              都市部からのデイハイク先として人気が高まっています。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">コース一覧</h2>
            {courses.map((c) => (
              <div key={c.name} style={{ marginBottom: 12, border: `2px solid ${c.color}`, borderRadius: 4, overflow: "hidden" }}>
                <div style={{ background: c.color, color: "#fff", padding: "6px 12px", display: "flex", gap: 16, alignItems: "center" }}>
                  <strong style={{ fontSize: 13 }}>{c.name}</strong>
                  <span style={{ fontSize: 12 }}>{c.distance} / {c.time}</span>
                  <span style={{ fontSize: 11, background: "rgba(255,255,255,0.25)", padding: "1px 8px", borderRadius: 10 }}>難易度：{c.difficulty}</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, margin: 0, padding: "8px 12px", background: "#fff" }}>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="content-box">
            <h2 className="section-title">基本情報</h2>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>日野原市北部一帯（登山口：日野原市白嶺地区・原野地区）</td></tr>
                <tr><th>標高</th><td>最高峰 382m</td></tr>
                <tr><th>ハイキングシーズン</th><td>通年（春・秋が最適。夏は熱中症対策必須）</td></tr>
                <tr><th>春の見どころ</th><td>ツツジ（4月中旬〜5月上旬）、山桜（3月下旬〜4月上旬）</td></tr>
                <tr><th>秋の見どころ</th><td>紅葉（10月中旬〜11月上旬）</td></tr>
                <tr><th>入山料</th><td>無料</td></tr>
                <tr><th>駐車場</th><td>北登山口・南登山口 各約30台（無料）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">持ち物・服装の目安</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 2 }}>
              <li>動きやすい服装・トレッキングシューズ（縦走コースは必須）</li>
              <li>飲料水（500ml以上・夏場は1L以上推奨）・行動食</li>
              <li>雨具・防寒具（稜線上は風が強い日があります）</li>
              <li>地図・コンパス（または登山地図アプリ）</li>
              <li>モバイルバッテリー・救急セット</li>
            </ul>
            <p style={{ fontSize: 12, color: "#c62828", marginTop: 4 }}>
              ※ 山中に売店・自動販売機はありません。飲料・食料は必ず登山口で準備してください。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">アクセス</h2>
            <table className="content-table">
              <tbody>
                <tr><th>バス（北登山口）</th><td>日野原中央バスターミナルから路線バス「白嶺高原行き」約25分 → 「アルプス登山口」下車すぐ</td></tr>
                <tr><th>お車（北登山口）</th><td>館山自動車道「君津IC」より約40分。北登山口駐車場（無料・約30台）</td></tr>
                <tr><th>お車（南登山口）</th><td>館山自動車道「君津IC」より約35分。南登山口駐車場（無料・約30台）</td></tr>
              </tbody>
            </table>
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
                <tr><th>日野原市ビジターセンター</th><td>☎ <strong>0100-88-1155</strong>（登山情報・道路状況）</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15　ビジターセンター：9:00〜16:30（水曜休館）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
