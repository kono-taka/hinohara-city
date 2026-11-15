import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 落花生・里芋 秋の農産物直売所のご案内",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>令和8年度 落花生・里芋 秋の農産物直売所のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年10月23日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 落花生・里芋 秋の農産物直売所のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市の秋の味覚、落花生と里芋の収穫が最盛期を迎えています。今年度も市内の農家が丹精込めて育てた新鮮な農産物を、直売所にてお求めいただけます。ぜひこの機会に日野原の味をお楽しみください。
            </p>

            <div style={{ background: "#f9f5ee", border: "1px solid #d4b896", padding: "14px 18px", borderRadius: 3, marginBottom: 20 }}>
              <strong style={{ fontSize: 13 }}>令和8年度 秋の農産物直売所</strong>
              <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10, fontSize: 13 }}>
                <tbody>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f0e8d8", textAlign: "left", whiteSpace: "nowrap" }}>開設期間</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>令和8年10月4日（土）〜 11月16日（日）<br /><span style={{ fontSize: 12, color: "#666" }}>※農産物の在庫状況により早期終了する場合があります。</span></td>
                  </tr>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f0e8d8", textAlign: "left" }}>営業時間</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>午前9時00分〜午後4時00分（売り切れ次第終了）</td>
                  </tr>
                  <tr>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f0e8d8", textAlign: "left" }}>休業日</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>火曜日・水曜日定休</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所の場所</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>主な取扱品</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["ひのはら農産物直売所（中央地区）", "日野原市中央区農協前通り2丁目", "落花生・里芋・さつまいも・野菜各種"],
                  ["原野地区農産物の里 直売コーナー", "日野原市原野地区 農村センター敷地内", "落花生（殻付・ゆで落花生）・里芋・大根"],
                  ["白峰高原産品コーナー（白峰地区）", "日野原市白峰地区 白峰ふれあい館横", "里芋・きのこ類・蜂蜜・加工品"],
                ].map(([name, loc, items], i) => (
                  <tr key={i}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{loc}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{items}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>今年の収穫について</h3>
            <p>
              令和8年産の落花生は、8月の適度な降雨と9月の好天に恵まれ、粒ぞろいの良い仕上がりとなっています。市内農家では現在も収穫・乾燥作業が続いており、新鮮なゆで落花生をはじめ、乾燥落花生（殻付・むき身）を販売しています。
            </p>
            <p>
              里芋は、北部地区・原野地区を中心に栽培されており、ねっとりとした食感が特徴の「土垂（どだれ）」系品種が中心です。例年より収穫量が多く、お鍋や煮物にぴったりの時季にお楽しみいただけます。
            </p>

            <div style={{ background: "#f0fff0", border: "1px solid #99cc99", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【「ひのはら秋の収穫まつり」も同時開催】</strong><br />
              10月26日（日）10時〜15時、中央地区・農産物直売所前広場にて「秋の収穫まつり」を開催します。落花生のつかみ取り体験（小学生以下対象、参加費200円）、地元野菜の即売、豚汁のふるまいなど盛りだくさんの内容でお待ちしています。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年10月23日" />
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <a href="/news" style={{ fontSize: 13, color: "var(--link-color)" }}>← お知らせ・新着情報 一覧に戻る</a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
