import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "白嶺温泉郷",
  description: "日野原市・白嶺地区に湧くナトリウム-カルシウム塩化物泉の温泉郷。旅館6軒・日帰り入浴施設2か所。泉質・料金・アクセス情報。",
};

const ryokan = [
  {
    name: "温泉旅館 かわせみ荘",
    type: "旅館（大型）",
    rooms: 32,
    bath: "大浴場・露天風呂・貸切風呂",
    dayUse: "あり（10:00〜16:00）",
    tel: "0100-58-3100",
    price: "1泊2食 13,200円〜（税込）",
    note: "全室源泉かけ流し。宴会場あり。",
  },
  {
    name: "湯の宿 原野の湯",
    type: "旅館（中型）",
    rooms: 18,
    bath: "大浴場・内風呂",
    dayUse: "あり（11:00〜15:00）",
    tel: "0100-58-3240",
    price: "1泊2食 9,900円〜（税込）",
    note: "木造2階建。食事は地元山菜・びわを使った懐石料理。",
  },
  {
    name: "民宿 白嶺荘",
    type: "民宿",
    rooms: 8,
    bath: "内風呂（循環）",
    dayUse: "なし",
    tel: "0100-58-3352",
    price: "1泊2食 7,700円〜（税込）",
    note: "家庭的な雰囲気。農家直送の手料理が自慢。",
  },
  {
    name: "温泉民宿 山の家",
    type: "民宿",
    rooms: 6,
    bath: "内風呂・露天風呂（小）",
    dayUse: "なし",
    tel: "0100-58-3415",
    price: "1泊2食 7,700円〜（税込）",
    note: "眺望抜群。棚田の景色を楽しめる客室あり。",
  },
  {
    name: "旅館 白嶺閣",
    type: "旅館（中型）",
    rooms: 15,
    bath: "大浴場・露天風呂",
    dayUse: "あり（10:30〜15:30）",
    tel: "0100-58-3560",
    price: "1泊2食 11,000円〜（税込）",
    note: "季節の地魚（木更津漁港より直送）と山の幸の膳が人気。",
  },
  {
    name: "里山温泉ホテル 山彦",
    type: "ホテル",
    rooms: 40,
    bath: "大浴場・露天風呂・サウナ・貸切風呂",
    dayUse: "あり（10:00〜17:00）",
    tel: "0100-58-3700",
    price: "1泊2食 15,400円〜（税込）",
    note: "白嶺温泉郷最大規模。レストラン・会議室を完備。団体・合宿に対応。",
  },
];

const dayUse = [
  {
    name: "白嶺温泉センター（市営）",
    tel: "0100-58-3800",
    hours: "10:00〜21:00（月曜定休、祝日の場合は翌日）",
    price: "大人650円・小中学生350円・幼児無料",
    bath: "大浴場・露天風呂・サウナ",
    note: "市営施設。65歳以上は木曜日350円に割引。シャンプー・石鹸備付あり。",
  },
  {
    name: "湯遊の里 原野（民間）",
    tel: "0100-55-4200",
    hours: "11:00〜20:00（火曜定休）",
    price: "大人900円・小学生450円",
    bath: "露天風呂・内風呂・足湯（無料）",
    note: "原野地区に位置。足湯コーナーは入浴料不要。地元農産物の売店あり。",
  },
];

export default function OnsenPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "観光・移住", href: "/kanko" },
        { name: "白嶺温泉郷" },
      ]} />
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kanko">観光・移住</a><span>›</span>
            <span>白嶺温泉郷</span>
          </div>
          <h1 className="page-title">白嶺温泉郷</h1>

          {/* ── 温泉概要 ── */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">白嶺温泉郷について</h2>
            <p style={{ fontSize: 13, lineHeight: 1.9 }}>
              白嶺温泉郷は、日野原市北部・白嶺地区の標高約280mの丘陵地に湧く温泉です。
              泉質はナトリウム・カルシウム－塩化物泉（いわゆる食塩泉）で、
              肌がつるつるになると評判です。周囲は照葉樹林に囲まれ、棚田の景色も望める静かな環境が広がります。
              旅館6軒・日帰り入浴施設2か所が集まり、日帰りから宿泊まで楽しめます。
            </p>
          </div>

          {/* ── 泉質 ── */}
          <div className="content-box">
            <h2 className="section-title">泉質・効能</h2>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 120 }}>泉質</th><td>ナトリウム・カルシウム－塩化物泉（低張性・中性・温泉）</td></tr>
                <tr><th>源泉温度</th><td>37.8℃（加温あり）</td></tr>
                <tr><th>pH値</th><td>6.9（中性）</td></tr>
                <tr><th>主な特徴</th><td>塩分が肌に膜を張る「美肌の湯」。保温効果が高く、冬季特に人気。</td></tr>
                <tr><th>適応症</th><td>関節痛・筋肉痛・疲労回復・冷え症・神経痛など（一般的な適応症）</td></tr>
                <tr><th>禁忌</th><td>急性疾患・悪性腫瘍・重篤な心臓疾患等（温泉利用標準案内板参照）</td></tr>
              </tbody>
            </table>
          </div>

          {/* ── 旅館一覧 ── */}
          <div className="content-box">
            <h2 className="section-title">宿泊施設一覧（旅館・民宿）</h2>
            <p style={{ fontSize: 12, color: "#666", marginBottom: 10 }}>料金はすべて税込・大人1名あたりの目安です。時期・部屋タイプにより変動します。事前に各施設へご確認ください。</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 1, borderBottom: "1px solid var(--border-light)" }}>
              {ryokan.map((r, i) => (
                <div key={i} style={{ border: "1px solid var(--border-light)", borderBottom: "none", padding: "12px 14px", background: "#fff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8, flexWrap: "wrap", gap: 6 }}>
                    <div>
                      <span style={{ fontWeight: "bold", fontSize: 14 }}>{r.name}</span>
                      <span style={{ marginLeft: 8, fontSize: 11, color: "#888", background: "#f0f4f9", padding: "2px 6px", borderRadius: 2 }}>{r.type}</span>
                    </div>
                    <span style={{ fontSize: 13, fontWeight: "bold", color: "#1a6e5a" }}>{r.price}</span>
                  </div>
                  <table className="content-table" style={{ margin: 0, fontSize: 12 }}>
                    <tbody>
                      <tr><th style={{ width: 70 }}>客室数</th><td>{r.rooms}室</td><th style={{ width: 70 }}>浴場</th><td>{r.bath}</td></tr>
                      <tr><th>日帰り</th><td>{r.dayUse}</td><th>電話</th><td>{r.tel}</td></tr>
                      <tr><th colSpan={1}>備考</th><td colSpan={3}>{r.note}</td></tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>

          {/* ── 日帰り入浴 ── */}
          <div className="content-box">
            <h2 className="section-title">日帰り入浴施設</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {dayUse.map((d, i) => (
                <div key={i} style={{ border: "1px solid var(--border-light)", padding: "12px 14px", background: "#fff" }}>
                  <div style={{ fontWeight: "bold", fontSize: 14, marginBottom: 8 }}>{d.name}</div>
                  <table className="content-table" style={{ margin: 0, fontSize: 12 }}>
                    <tbody>
                      <tr><th style={{ width: 80 }}>営業時間</th><td colSpan={3}>{d.hours}</td></tr>
                      <tr><th>入浴料</th><td>{d.price}</td><th style={{ width: 60 }}>浴場</th><td>{d.bath}</td></tr>
                      <tr><th>電話</th><td>{d.tel}</td><th>備考</th><td>{d.note}</td></tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>

          {/* ── アクセス ── */}
          <div className="content-box">
            <h2 className="section-title">アクセス</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 100 }}>お車</th>
                  <td>館山自動車道「君津IC」より国道410号→白嶺方面 約35分<br />東京湾アクアライン（木更津東IC）から 約1時間20分</td>
                </tr>
                <tr>
                  <th>バス</th>
                  <td>市営ひのはらバス「白嶺高原線」（7〜9月 土日祝のみ）→「白嶺温泉郷」バス停下車すぐ<br />平日は「中央線」で市役所前下車後、デマンドタクシー利用（要予約：☎ 0100-88-1181）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ background: "#f4f6fb", border: "1px solid var(--border-light)", padding: 12, fontSize: 12, lineHeight: 1.8 }}>
            <strong>関連ページ：</strong>
            <a href="/kanko/hiking" style={{ marginRight: 12 }}>ハイキング・トレッキング →</a>
            <a href="/kanko/iju" style={{ marginRight: 12 }}>移住・定住支援 →</a>
            <a href="/kanko/access">アクセス情報 →</a>
          </div>

          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
