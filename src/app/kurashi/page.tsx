import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import {
  LifeIconBaby, LifeIconKekkon, LifeIconHikkoshi, LifeIconNyugaku, LifeIconShinu,
} from "@/components/InlineIcons";
import {
  IconJumin, IconZei, IconGomi, IconDoro, IconJutaku, IconBousai, IconShomeisho,
} from "@/components/ServiceIcons";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "くらし・手続き", description: "転入・転出届、住民票、市税、ごみの分別・収集、道路・住宅など、日野原市での生活に必要な手続きや行政サービスをご案内します。" };

const categories = [
  {
    title: "住民登録・戸籍",
    Icon: IconJumin,
    items: [
      { label: "転入（他の市区町村から引越してきたとき）", href: "/kurashi/jumin" },
      { label: "転出（市外へ引越すとき）", href: "/kurashi/jumin" },
      { label: "転居（市内で引越しをしたとき）", href: "/kurashi/jumin" },
      { label: "住民票の写しの請求", href: "/kurashi/jumin" },
      { label: "マイナンバーカードの申請・更新", href: "/kurashi/jumin" },
      { label: "出生届・死亡届・婚姻届", href: "/kurashi/jumin" },
    ],
  },
  {
    title: "市税・国民健康保険",
    Icon: IconZei,
    items: [
      { label: "市民税・県民税（住民税）", href: "/kurashi/zei" },
      { label: "固定資産税・都市計画税", href: "/kurashi/zei" },
      { label: "軽自動車税", href: "/kurashi/zei" },
      { label: "国民健康保険の加入・脱退", href: "/kenko/kokuho/tetsuzuki" },
      { label: "国民健康保険税の計算方法", href: "/kenko/kokuho/zei" },
      { label: "後期高齢者医療制度", href: "/kenko/kokuho/kouki" },
    ],
  },
  {
    title: "ごみ・リサイクル",
    Icon: IconGomi,
    items: [
      { label: "ごみの分別ガイドブック（PDF）", href: "/kurashi/gomi" },
      { label: "収集日程表・収集場所", href: "/kurashi/gomi" },
      { label: "粗大ごみの申込み方法", href: "/kurashi/gomi" },
      { label: "資源物（古紙・缶・瓶・ペットボトル）", href: "/kurashi/gomi" },
      { label: "不法投棄の通報・相談", href: "/kurashi/gomi" },
    ],
  },
  {
    title: "防災・安全",
    Icon: IconBousai,
    items: [
      { label: "避難情報・ハザードマップ", href: "/kurashi/bousai" },
      { label: "避難所・避難場所一覧", href: "/kurashi/bousai" },
      { label: "防災行政無線の放送内容確認", href: "/kurashi/bousai" },
      { label: "地域防災計画", href: "/kurashi/bousai" },
      { label: "防犯・消費者被害相談", href: "/kurashi/bousai" },
    ],
  },
  {
    title: "道路・河川・公共交通",
    Icon: IconDoro,
    items: [
      { label: "道路の損傷・異常の通報", href: "/kurashi/doro" },
      { label: "市道の占用・掘削許可申請", href: "/kurashi/doro" },
      { label: "市営バス（ひのはらバス）時刻表", href: "/kurashi/doro" },
      { label: "デマンドタクシーの利用登録", href: "/kurashi/doro" },
      { label: "河川の占用・土砂採取許可", href: "/kurashi/doro" },
    ],
  },
  {
    title: "住宅・建築",
    Icon: IconJutaku,
    items: [
      { label: "市営住宅の入居申込・空き情報", href: "/kurashi/jutaku" },
      { label: "住宅リフォーム補助金", href: "/kurashi/jutaku" },
      { label: "建築確認申請", href: "/kurashi/jutaku" },
      { label: "空き家バンク（移住・定住）", href: "/kurashi/jutaku" },
      { label: "開発許可・農地転用", href: "/kurashi/jutaku" },
    ],
  },
  {
    title: "各種証明書・申請",
    Icon: IconShomeisho,
    items: [
      { label: "住民票の写しの請求", href: "/kurashi/shomeisho" },
      { label: "印鑑登録証明書の請求", href: "/kurashi/shomeisho" },
      { label: "戸籍謄本・抄本の請求", href: "/kurashi/shomeisho" },
      { label: "課税（非課税）証明書・納税証明書", href: "/kurashi/shomeisho" },
      { label: "固定資産評価証明書", href: "/kurashi/shomeisho" },
      { label: "コンビニ交付（マイナンバーカード利用）", href: "/kurashi/shomeisho" },
      { label: "郵送による証明書請求", href: "/kurashi/shomeisho" },
      { label: "申請書類ダウンロード（各種様式一覧）", href: "/shinsei" },
    ],
  },
];

export default function KurashiPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>くらし・手続き</span>
          </div>
          <h1 className="page-title">くらし・手続き</h1>

          <div className="section-title">ライフイベント別ナビ</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 1, backgroundColor: "var(--border-light)" }}>
            {[
              { Icon: LifeIconBaby,     label: "赤ちゃんが\n生まれたとき",  href: "/kenko/kosodate" },
              { Icon: LifeIconKekkon,   label: "結婚・離婚\nするとき",       href: "/kurashi/jumin" },
              { Icon: LifeIconHikkoshi, label: "引越し\nするとき",           href: "/kurashi/jumin" },
              { Icon: LifeIconNyugaku,  label: "子どもが\n入学するとき",    href: "/kyoiku/gakko" },
              { Icon: LifeIconShinu,    label: "亡くなられた\nとき",         href: "/kurashi/jumin" },
            ].map((item, i) => (
              <a key={i} href={item.href} className="service-item" style={{ padding: "14px 8px" }}>
                <item.Icon />
                <span className="service-label" style={{ whiteSpace: "pre-line" }}>{item.label}</span>
              </a>
            ))}
          </div>

          {categories.map((cat, i) => (
            <div key={i} style={{ marginTop: 14 }}>
              <div className="section-title" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <cat.Icon />
                {cat.title}
              </div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ padding: "8px 14px", borderBottom: "1px solid #e8edf4", fontSize: 13 }}>
                    <a href={item.href}>▶ {item.label}</a>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ marginTop: 16, padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>窓口のご案内（市役所1階 市民課）</strong><br />
            受付時間：平日 午前8時30分〜午後5時15分<br />
            ※毎月第2・第4土曜日は午前8時30分〜正午まで住民票・印鑑証明の発行のみ対応<br />
            電話：0100-88-1113　メール：shimin@city.hinohara.lg.jp
          </div>
          <PageInfo department="市民課" division="窓口班" tel="0100-88-1113（内線 212）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
