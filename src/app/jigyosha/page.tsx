import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "事業者向け情報",
  description: "日野原市の事業者向け情報。企業誘致・産業立地補助金・創業支援・融資制度・入札参加・農業支援など、事業活動を支援する各種制度をご案内します。",
};

const faqs = [
  { q: "企業立地補助金を受けるための条件は何ですか？", a: "製造業・情報サービス業等が対象です。市内に工場・事業所を新設または増設し、新規雇用者を2名以上確保することが主な要件です。補助率・上限額は投資規模・雇用人数により異なります。詳しくは産業振興課（☎0439-88-1144）へ。" },
  { q: "市の入札に参加するには何が必要ですか？", a: "競争入札参加資格審査申請が必要です。申請は原則2年ごと（奇数年度）に受け付けています。必要書類・申請方法は市公式サイトの「入札・契約情報」ページをご覧ください。" },
  { q: "起業・創業の補助金はありますか？", a: "日野原市創業支援補助金（事業費の1/2・上限50万円）と、日野原市商工会の創業スクール受講者向け補助（上限10万円）があります。詳しくは産業振興課商工係（☎0439-88-1144）または商工会（☎0439-88-3300）へ。" },
  { q: "産業用地の空き情報を教えてください", a: "市内の産業団地・工場用地の空き情報は産業振興課（☎0439-88-1144）または千葉県企業立地相談センターでご確認いただけます。民間の事業用地は商工会でもご案内しています。" },
];

const categories = [
  {
    icon: "🏭",
    title: "企業誘致・産業立地",
    color: "#1565c0",
    bg: "#e3f2fd",
    href: "/sangyo/kigyoyuchi",
    items: [
      "立地補助金（設備投資額の最大10%・上限3,000万円）",
      "雇用奨励金（新規雇用1人につき最大30万円）",
      "固定資産税の特別措置（最大5年間）",
      "北部産業団地の用地斡旋（残区画あり）",
      "工場建設・増設の相談窓口",
    ],
    link: "企業誘致・産業立地の詳細 →",
  },
  {
    icon: "🏪",
    title: "商工業・中小企業支援",
    color: "#6a1b9a",
    bg: "#f3e5f5",
    href: "/sangyo/shoko",
    items: [
      "小規模事業者持続化補助金（国・市上乗せ）",
      "日野原市プレミアム商品券事業",
      "空き店舗活用補助金（改装費の1/2・上限100万円）",
      "中小企業融資あっせん制度（低利融資）",
      "商工会連携による経営・税務相談（無料）",
    ],
    link: "商工業支援の詳細 →",
  },
  {
    icon: "🌾",
    title: "農業・林業支援",
    color: "#2e7d32",
    bg: "#e8f5e9",
    href: "/sangyo/nogyo",
    items: [
      "新規就農者支援（農業次世代人材投資資金・国制度）",
      "農地集積・農地中間管理機構の活用",
      "有機農業・6次産業化補助金",
      "農業用施設・機械導入補助（市単独補助）",
      "びわ等特産品ブランド化支援",
    ],
    link: "農業支援の詳細 →",
  },
  {
    icon: "🖥️",
    title: "テレワーク・デジタル活用",
    color: "#00695c",
    bg: "#e0f2f1",
    href: "/sangyo/shigoto",
    items: [
      "コワーキングスペース「ひのはらワーク」（市内2か所）",
      "IT導入補助金活用支援（商工会連携）",
      "テレワーク移住促進事業（オフィス設置費補助）",
      "Wi-Fi整備補助（観光施設・商店等）",
      "DX推進セミナー（年4回・無料）",
    ],
    link: "しごと・産業の詳細 →",
  },
  {
    icon: "🌿",
    title: "環境・エネルギー支援",
    color: "#558b2f",
    bg: "#f1f8e9",
    href: "/sangyo/kankyo",
    items: [
      "太陽光・蓄電池設置補助（事業者版）",
      "省エネ設備更新補助（空調・照明等）",
      "ゼロカーボン宣言企業への広報支援",
      "産業廃棄物適正処理の相談",
      "環境マネジメントシステム導入支援",
    ],
    link: "環境・産業の詳細 →",
  },
  {
    icon: "📋",
    title: "入札・契約・許認可",
    color: "#e65100",
    bg: "#fff3e0",
    href: "/shisei/chotatsu",
    items: [
      "競争入札参加資格審査申請（2年ごと受付）",
      "指名競争入札・一般競争入札の区分",
      "入札公告・落札結果の公表",
      "建設業・宅建業の許可相談（千葉県経由）",
      "飲食店等の営業許可（南房総保健所）",
    ],
    link: "入札・契約情報の詳細 →",
  },
];

const contacts = [
  { dept: "産業振興課（商工・企業誘致）", tel: "0439-88-1144", ext: "内線 144", email: "sangyo@city.hinohara.lg.jp" },
  { dept: "農林振興課（農業・林業）",     tel: "0439-88-1143", ext: "内線 143", email: "norin@city.hinohara.lg.jp" },
  { dept: "総務課（入札・契約）",         tel: "0439-88-1111", ext: "内線 121", email: "soumu@city.hinohara.lg.jp" },
  { dept: "企画政策課（移住・テレワーク）", tel: "0439-88-1114", ext: "内線 114", email: "kikaku@city.hinohara.lg.jp" },
];

export default function JigyoshaPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "事業者向け情報" },
      ]} />
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/sangyo">産業・環境</a><span>›</span>
            <span>事業者向け情報</span>
          </div>
          <h1 className="page-title">事業者向け情報</h1>

          {/* リード */}
          <div className="content-box" style={{ borderLeft: "4px solid #1565c0", background: "#e3f2fd44" }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市では、市内での事業活動・起業・企業立地を支援するさまざまな補助金・融資・相談窓口を用意しています。
              事業規模や業種を問わず、まずは産業振興課（☎ 0439-88-1144）にお気軽にご相談ください。
            </p>
          </div>

          {/* 支援カテゴリグリッド */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, margin: "20px 0" }}>
            {categories.map((cat) => (
              <div key={cat.title} style={{ border: `2px solid ${cat.color}`, borderRadius: 6, overflow: "hidden" }}>
                <div style={{ background: cat.color, color: "#fff", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 22 }}>{cat.icon}</span>
                  <span style={{ fontWeight: "bold", fontSize: 14 }}>{cat.title}</span>
                </div>
                <div style={{ background: cat.bg, padding: "12px 16px" }}>
                  <ul style={{ margin: "0 0 10px", paddingLeft: 18, fontSize: 12.5, lineHeight: 2, color: "#333" }}>
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href={cat.href}
                    style={{ fontSize: 12.5, color: cat.color, fontWeight: "bold", textDecoration: "none" }}
                  >
                    {cat.link}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 産業立地補助金 詳細表 */}
          <div className="content-box">
            <h2 className="section-title">主な補助金・支援制度一覧</h2>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr><th>制度名</th><th>対象</th><th>補助率・上限</th><th>担当</th></tr>
                </thead>
                <tbody>
                  {[
                    { name: "企業立地補助金",           target: "製造業・情報サービス業等", amount: "投資額の10%・上限3,000万円", dept: "産業振興課" },
                    { name: "雇用奨励金",               target: "市内新規雇用（正規）",       amount: "1人30万円（上限300万円）",  dept: "産業振興課" },
                    { name: "創業支援補助金",           target: "新規創業者",                 amount: "事業費の1/2・上限50万円",  dept: "産業振興課" },
                    { name: "空き店舗活用補助金",       target: "空き店舗で開業する事業者",   amount: "改装費の1/2・上限100万円", dept: "産業振興課" },
                    { name: "農業機械・施設補助",       target: "市内農業者",                 amount: "導入費の1/3・上限100万円", dept: "農林振興課" },
                    { name: "太陽光・省エネ設備補助",   target: "市内事業者",                 amount: "設置費の1/4・上限200万円", dept: "産業振興課" },
                    { name: "中小企業融資あっせん",     target: "中小企業・小規模事業者",     amount: "上限2,000万円・低利",       dept: "産業振興課" },
                    { name: "Wi-Fi整備補助（観光施設）", target: "観光・飲食・宿泊事業者",    amount: "整備費の1/2・上限30万円",  dept: "産業振興課" },
                  ].map((row) => (
                    <tr key={row.name}>
                      <td style={{ fontWeight: "bold", fontSize: 12.5 }}>{row.name}</td>
                      <td style={{ fontSize: 12 }}>{row.target}</td>
                      <td style={{ fontSize: 12 }}>{row.amount}</td>
                      <td style={{ fontSize: 12, whiteSpace: "nowrap" }}>{row.dept}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
              ※ 各制度には予算上限があります。申請前に必ず担当課へご確認ください。国・県の補助金と併用できる制度もあります。
            </p>
          </div>

          {/* よくある質問 */}
          <div className="content-box">
            <h2 className="section-title">よくある質問</h2>
            <dl style={{ margin: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid #e0eae5", padding: "12px 0" }}>
                  <dt style={{ fontWeight: "bold", fontSize: 13, color: "#1565c0", marginBottom: 4 }}>Q. {q}</dt>
                  <dd style={{ fontSize: 13, lineHeight: 1.8, margin: 0, paddingLeft: 8, color: "#444" }}>A. {a}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 相談窓口 */}
          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">担当課一覧・お問い合わせ</h2>
            <table className="content-table">
              <thead><tr><th>担当課</th><th>電話</th><th>メール</th></tr></thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.dept}>
                    <td style={{ fontWeight: "bold", fontSize: 12.5 }}>{c.dept}<br /><span style={{ fontSize: 11, color: "#888" }}>{c.ext}</span></td>
                    <td><a href={`tel:${c.tel}`}>☎ {c.tel}</a></td>
                    <td style={{ fontSize: 12 }}><a href={`mailto:${c.email}`}>{c.email}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#555", marginTop: 8 }}>
              窓口時間：平日 8:30〜17:15（祝日・年末年始を除く）<br />
              また、日野原市商工会（☎ 0439-88-3300）では経営・税務・融資に関する無料相談を随時受け付けています。
            </p>
          </div>

          <PageInfo department="産業振興課" tel="0439-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
