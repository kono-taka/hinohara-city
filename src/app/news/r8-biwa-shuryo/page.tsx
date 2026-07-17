import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市内びわ直売所の閉所について",
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
            <span>令和8年度 市内びわ直売所の閉所について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月17日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市内びわ直売所の閉所について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の日野原産びわの収穫シーズンが終わりを迎えました。今シーズンは5月の日照に恵まれ、甘みと香りに優れたびわが収穫され、多くの皆様にお買い求めいただきました。誠にありがとうございました。
            </p>
            <p>
              市内各直売所の閉所（営業終了）予定日は下記のとおりです。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>直売所 閉所予定</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>直売所名</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>所在地</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>閉所予定日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["白嶺農園直売所", "白嶺地区 白嶺1丁目地内（白嶺高原入口交差点そば）", "7月20日（日）※売切次第終了"],
                  ["原野農産物直売所（あぐりひのはら）", "原野地区 下原345番地先（県道沿い）", "7月22日（火）"],
                  ["北部地区農家直売（北の恵み）", "北部地区 市道北部線沿い（北部公民館前）", "既に閉所（7月13日終了）"],
                ].map(([name, addr, closeDate]) => (
                  <tr key={name}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{addr}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{closeDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ marginTop: 8, color: "#666", fontSize: 12 }}>
              ※ 閉所日は在庫状況により前後する場合があります。お越しの前に各直売所へご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>来シーズンについて</h3>
            <p>
              次のびわ収穫シーズン（令和9年度）は、令和9年6月初旬ごろに開所を予定しています。開所時期が近づきましたら、市公式ホームページおよび「広報ひのはら」にてご案内します。
            </p>
            <p>
              また、日野原産びわはふるさと納税の返礼品としてもご提供しています。収穫シーズンの先行予約については、令和9年4月頃から受付を開始する予定です。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>びわ農業の後継者・新規就農についてのご相談</strong><br />
              農林振興課では、びわ農家の後継者育成や新規就農希望者を支援しています。見学・相談をご希望の方はお気軽にお問い合わせください。
            </div>
          </div>

          <PageInfo department="農林振興課" division="農業振興係" tel="0439-88-1271（内線 271）" updated="令和8年7月17日" />
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
