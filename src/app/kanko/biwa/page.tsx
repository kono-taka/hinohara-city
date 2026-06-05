import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "びわ狩り観光農園（ぽんなわびわ）",
  description: "日野原市の幻の在来種「ぽんなわびわ」（糖度15〜17度）が楽しめるびわ狩り観光農園。5月のぽんなわびわシーズンと6月の房州びわシーズンの2回楽しめます。",
};

const faqs = [
  { q: "びわ狩りの時期はいつですか？", a: "「ぽんなわびわ」は5月上旬〜下旬、一般的な房州びわは6月上旬〜下旬が旬です。2シーズンで楽しめるのが日野原市の特徴です。" },
  { q: "ぽんなわびわとは何ですか？", a: "日野原市旧本縄地区に伝わる在来種のびわです。糖度15〜17度と非常に甘く、市場にほとんど出回らない希少品です。「幻のびわ」とも呼ばれています。" },
  { q: "びわ狩りの料金はいくらですか？", a: "農園ごとに料金が異なります。目安は大人1,500〜2,000円程度（食べ放題・30分）です。事前予約が必要な農園が多いため、観光案内所（☎0439-88-1150）または各農園へお問い合わせください。" },
  { q: "アクセス方法を教えてください。", a: "日野原中央駅から路線バス「本縄行き」で約20分。お車の場合は館山自動車道「君津IC」から約40分です。農園によって駐車場の有無が異なりますのでご確認ください。" },
  { q: "びわの直売所はありますか？", a: "はい。シーズン中は市内各所に直売所が開設されます。令和8年度の直売所情報は市ウェブサイトの「お知らせ」でご確認ください。" },
];

export default function BiwaPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "観光・移住", href: "/kanko" },
        { name: "びわ狩り観光農園" },
      ]} />
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kanko">観光・移住</a><span>›</span>
            <span>びわ狩り観光農園</span>
          </div>
          <h1 className="page-title">びわ狩り観光農園（ぽんなわびわ）</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #f9a825", background: "#fffde7" }}>
            <h2 className="section-title">令和8年シーズン情報</h2>
            <p style={{ fontSize: 14, lineHeight: 1.8 }}>
              <strong>ぽんなわびわ（在来種）：5月上旬〜下旬</strong><br />
              <strong>房州びわ（一般品種）：6月上旬〜下旬</strong><br />
              例年、農園の予約は4月中旬から受付開始します。週末・祝日は早期満員になるためお早めに。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">ぽんなわびわとは</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              「ぽんなわびわ」は、日野原市旧本縄（ほんなわ）地区に古くから伝わる在来種のびわです。
              一般的な「田中びわ」や「茂木びわ」と比べて果実が小ぶりですが、<strong>糖度15〜17度</strong>という
              突出した甘さが特徴。農家が自家消費・地元販売を中心に栽培してきたため、
              市場にほとんど出回らない「幻のびわ」として知られています。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              近年のテレビ・雑誌等での紹介で全国から問い合わせが増え、
              令和7年シーズンは来訪者数が前年比<strong>140%増</strong>となりました。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">びわ狩り農園一覧</h2>
            <table className="content-table">
              <thead>
                <tr><th>農園名</th><th>取扱品種</th><th>予約</th><th>電話</th></tr>
              </thead>
              <tbody>
                <tr><td>本縄農園（びわ観光農園）</td><td>ぽんなわ・房州</td><td>要予約</td><td>0439-○○-○○○○</td></tr>
                <tr><td>白峰びわの里</td><td>房州びわ</td><td>要予約</td><td>0439-○○-○○○○</td></tr>
                <tr><td>日野原ふるさと農場</td><td>ぽんなわ・房州</td><td>要予約</td><td>0439-○○-○○○○</td></tr>
                <tr><td>原野びわ園</td><td>房州びわ</td><td>当日可</td><td>0439-○○-○○○○</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※ 各農園の詳細（料金・営業時間・駐車場）は観光案内所または各農園に直接お問い合わせください。
            </p>
          </div>

          <div className="content-box">
            <h2 className="section-title">直売所・特産品購入</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              シーズン中は市内各所に直売所が開設されます。
              摘みたてのびわはもちろん、びわゼリー・びわジャム・びわワインなどの加工品も販売しています。
              道の駅「ひのはら」でも一部期間中販売予定。
            </p>
            <table className="content-table">
              <tbody>
                <tr><th>直売所開設期間</th><td>5月上旬〜6月下旬（品種・農園により異なる）</td></tr>
                <tr><th>主な直売場所</th><td>本縄地区農産物直売所・市役所前広場・道の駅ひのはら（予定）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">アクセス</h2>
            <table className="content-table">
              <tbody>
                <tr><th>電車・バス</th><td>日野原中央駅から路線バス「本縄行き」乗車 約20分</td></tr>
                <tr><th>お車</th><td>館山自動車道「君津IC」より約40分</td></tr>
                <tr><th>最寄りバス停</th><td>「本縄農園入口」下車 徒歩5分</td></tr>
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
            <h2 className="section-title">お問い合わせ・観光案内所</h2>
            <table className="content-table">
              <tbody>
                <tr><th>日野原市観光案内所</th><td>☎ <strong>0439-88-1150</strong></td></tr>
                <tr><th>開館時間</th><td>9:00〜17:00（年中無休）</td></tr>
                <tr><th>産業振興課 観光係</th><td>☎ <strong>0439-88-1144</strong>（内線 144）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="産業振興課" division="観光係" tel="0439-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
