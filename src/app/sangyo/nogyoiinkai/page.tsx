import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "農業委員会",
  description: "日野原市農業委員会の業務案内。農地の売買・賃借、農地転用許可申請、農業者認定（新規就農・担い手認定）、農業委員名簿など。",
};

const members = [
  { name: "大川 義治",   kana: "おおかわ よしはる",   area: "中央・北部地区", post: "会長",     term: "令和5年7月〜令和8年6月" },
  { name: "田村 照子",   kana: "たむら てるこ",       area: "中央・南部地区", post: "会長職務代理", term: "令和5年7月〜令和8年6月" },
  { name: "鈴木 正夫",   kana: "すずき まさお",       area: "原野地区北部",   post: "",         term: "令和5年7月〜令和8年6月" },
  { name: "宮本 和江",   kana: "みやもと かずえ",     area: "原野地区南部",   post: "",         term: "令和5年7月〜令和8年6月" },
  { name: "青木 俊一",   kana: "あおき しゅんいち",   area: "白嶺地区",       post: "",         term: "令和5年7月〜令和8年6月" },
  { name: "林田 光博",   kana: "はやしだ みつひろ",   area: "東部地区",       post: "",         term: "令和5年7月〜令和8年6月" },
  { name: "松浦 千代子", kana: "まつうら ちよこ",     area: "中央地区",       post: "",         term: "令和5年7月〜令和8年6月" },
];

export default function NogyoIinkaiPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "産業・環境", href: "/sangyo" },
        { name: "農業委員会" },
      ]} />
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/sangyo">産業・環境</a><span>›</span>
            <span>農業委員会</span>
          </div>
          <h1 className="page-title">農業委員会</h1>

          {/* ── 概要 ── */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">農業委員会とは</h2>
            <p style={{ fontSize: 13, lineHeight: 1.85 }}>
              農業委員会は、農地法に基づき市町村に設置された行政委員会です。
              主に農地の権利移動（売買・賃借・贈与）の許可、農地転用許可の意見書提出、
              農業者の経営規模拡大のあっせん、農業者年金の推進などを担います。
              日野原市農業委員会は、市内農家の農業経営を支える重要な役割を果たしています。
            </p>
          </div>

          {/* ── 業務案内 ── */}
          <div className="content-box">
            <h2 className="section-title">主な業務</h2>
            <div style={{ border: "1px solid var(--border-light)", borderBottom: "none" }}>
              {[
                {
                  title: "農地の売買・賃借（農地法第3条許可）",
                  desc: "農地を農業目的で売買・贈与・賃借するには農業委員会の許可が必要です。申請書類を市役所農業委員会事務局へ提出してください。毎月15日（土日祝は前平日）が申請締切、翌月の委員会（月1回開催）で審議されます。",
                  icon: "🌾",
                },
                {
                  title: "農地転用（農地法第4・5条）",
                  desc: "農地を農業以外の目的（住宅・駐車場・資材置場等）に転用する場合、許可申請または届出が必要です。4条は自己転用、5条は転用を目的とした売買・貸付です。千葉県知事への許可申請に際し、農業委員会が意見書を作成します。",
                  icon: "🏗️",
                },
                {
                  title: "農業経営基盤強化促進法に基づく利用権設定",
                  desc: "農地中間管理機構（千葉県農林振興公社）を通じた農地の貸し借り。高齢等で耕作が困難になった農地を担い手農家に集積します。農業委員会が調整・仲介を行います。",
                  icon: "🤝",
                },
                {
                  title: "農地台帳の整備・農地情報の提供",
                  desc: "市内全農地の地番・面積・利用状況・所有者情報を管理する農地台帳を整備しています。新規就農希望者・移住就農者への農地紹介にも活用しています。",
                  icon: "📋",
                },
                {
                  title: "農業者年金の加入促進",
                  desc: "農業者年金は60歳未満の農業者を対象とした公的年金制度です。加入相談・手続きは農業委員会事務局が窓口になります。",
                  icon: "📘",
                },
                {
                  title: "農業経営の規模拡大・担い手支援",
                  desc: "農地集積に関するあっせん、認定農業者制度の申請受付、農地利用最適化推進委員による巡回活動など。移住就農・新規就農希望者の相談にも応じます。",
                  icon: "🌱",
                },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 14, padding: "12px 14px", borderBottom: "1px solid var(--border-light)", background: "#fff" }}>
                  <div style={{ fontSize: 24, flexShrink: 0, width: 36, textAlign: "center" }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 委員名簿 ── */}
          <div className="content-box">
            <h2 className="section-title">農業委員名簿（令和5年7月〜令和8年6月）</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: "auto" }}>氏名</th>
                  <th style={{ width: 180 }}>担当地区</th>
                  <th style={{ width: 120 }}>職名</th>
                </tr>
              </thead>
              <tbody>
                {members.map((m, i) => (
                  <tr key={i}>
                    <td>
                      {m.name}
                      <span style={{ fontSize: 11, color: "#888", marginLeft: 8 }}>（{m.kana}）</span>
                    </td>
                    <td>{m.area}</td>
                    <td>{m.post || "農業委員"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※農地利用最適化推進委員は別に7名が委嘱されています。詳細は農業委員会事務局へお問い合わせください。
            </p>
          </div>

          {/* ── 農地の相談 ── */}
          <div className="content-box" style={{ background: "#fffde7", borderLeft: "4px solid #f9a825" }}>
            <h2 className="section-title">農地の売買・貸借のご相談（移住就農希望者の方へ）</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              日野原市への移住と農業経営を希望される方には、農業委員会・農林振興課・農地中間管理機構が連携して農地のマッチングを支援します。
              まずは農業委員会事務局（☎ 0100-88-1144）へお気軽にご相談ください。
            </p>
            <ul style={{ fontSize: 12, lineHeight: 1.9, paddingLeft: 18, marginTop: 8 }}>
              <li>農地付き古民家の紹介（空き家バンクとの連携）</li>
              <li>農地台帳による耕作可能農地の案内</li>
              <li>農業次世代人材投資資金（旧青年就農給付金）の案内</li>
              <li>農業研修受入農家の紹介</li>
            </ul>
          </div>

          {/* ── 申請様式 ── */}
          <div className="content-box">
            <h2 className="section-title">申請様式・ダウンロード</h2>
            <div style={{ border: "1px solid var(--border-light)", borderBottom: "none" }}>
              {[
                { name: "農地法第3条許可申請書", file: "r8-nochi-3jyo.pdf" },
                { name: "農地法第4条許可申請書", file: "r8-nochi-4jyo.pdf" },
                { name: "農地法第5条許可申請書", file: "r8-nochi-5jyo.pdf" },
                { name: "農地転用届出書（農業振興地域以外）", file: "r8-nochi-todoke.pdf" },
                { name: "農業者年金加入申請書（記載例付き）", file: "r8-nenkin.pdf" },
              ].map((f, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 14px", borderBottom: "1px solid var(--border-light)", background: "#fff", fontSize: 13 }}>
                  <span>{f.name}</span>
                  <a href={`/files/nogyoiinkai/${f.file}`} style={{ fontSize: 12, color: "#c0392b", fontWeight: "bold", flexShrink: 0 }}>
                    📄 PDF
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>農業委員会事務局</th><td>産業振興課内（市役所2階）</td></tr>
                <tr><th>電話番号</th><td>☎ <strong>0100-88-1144</strong>（内線 144）</td></tr>
                <tr><th>農業委員会開催</th><td>毎月第3木曜日（原則）</td></tr>
                <tr><th>申請締切</th><td>毎月15日（土日祝は前平日）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="産業振興課（農業委員会事務局）" division="農政係" tel="0100-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
