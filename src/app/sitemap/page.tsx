import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "サイトマップ" };

const sitemapData = [
  {
    title: "市政情報",
    href: "/shisei",
    children: [
      { label: "市長室・市長挨拶", href: "/mayor" },
      { label: "市政概要・プロフィール", href: "/shisei/gaiyou" },
      { label: "市議会", href: "/gikai" },
      { label: "総合計画", href: "/shisei" },
      { label: "財政情報", href: "/shisei" },
      { label: "情報公開・個人情報保護", href: "/shisei" },
      { label: "入札・契約情報", href: "/shisei" },
      { label: "広報ひのはら", href: "/shisei/koho" },
      { label: "審議会・委員会", href: "/shisei" },
    ],
  },
  {
    title: "くらし・手続き",
    href: "/kurashi",
    children: [
      { label: "住民登録・戸籍", href: "/kurashi" },
      { label: "市税・国民健康保険", href: "/kurashi" },
      { label: "ごみ・リサイクル", href: "/kurashi" },
      { label: "防災・安全", href: "/kurashi" },
      { label: "道路・河川・公共交通", href: "/kurashi" },
      { label: "住宅・建築", href: "/kurashi" },
      { label: "マイナンバーカード", href: "/kurashi" },
      { label: "各種証明書申請", href: "/kurashi" },
    ],
  },
  {
    title: "健康・福祉",
    href: "/kenko",
    children: [
      { label: "子育て・保育", href: "/kenko" },
      { label: "高齢者支援・介護保険", href: "/kenko" },
      { label: "障がい福祉", href: "/kenko" },
      { label: "国民健康保険・医療", href: "/kenko" },
      { label: "予防接種・健康診断", href: "/kenko" },
      { label: "生活保護・生活困窮支援", href: "/kenko" },
    ],
  },
  {
    title: "教育・文化",
    href: "/kyoiku",
    children: [
      { label: "小学校・中学校一覧", href: "/kyoiku" },
      { label: "保育所・幼稚園", href: "/kyoiku" },
      { label: "生涯学習・文化活動", href: "/kyoiku" },
      { label: "スポーツ振興", href: "/kyoiku" },
      { label: "市立中央図書館", href: "/kyoiku" },
    ],
  },
  {
    title: "産業・環境",
    href: "/sangyo",
    children: [
      { label: "農林業振興", href: "/sangyo" },
      { label: "商工業・企業誘致", href: "/sangyo" },
      { label: "環境・ゼロカーボン", href: "/sangyo" },
      { label: "農地・開発許可", href: "/sangyo" },
    ],
  },
  {
    title: "施設案内",
    href: "/shisetsu",
    children: [
      { label: "主要公共施設一覧", href: "/shisetsu" },
      { label: "施設予約システム", href: "/shisetsu" },
    ],
  },
  {
    title: "観光・移住",
    href: "/kanko",
    children: [
      { label: "観光スポット", href: "/kanko" },
      { label: "特産品・グルメ", href: "/kanko" },
      { label: "イベント情報", href: "/kanko/event" },
      { label: "移住・定住支援", href: "/kanko" },
      { label: "アクセス", href: "/kanko" },
    ],
  },
  {
    title: "ふるさと納税",
    href: "/furusato",
    children: [
      { label: "お礼の品一覧", href: "/furusato" },
      { label: "寄附金の使い道", href: "/furusato" },
      { label: "よくあるご質問（FAQ）", href: "/faq" },
    ],
  },
  {
    title: "お知らせ・情報",
    href: "/news",
    children: [
      { label: "お知らせ・新着情報", href: "/news" },
      { label: "イベント情報", href: "/kanko/event" },
      { label: "広報ひのはら", href: "/shisei/koho" },
    ],
  },
  {
    title: "サイトについて",
    href: "/accessibility",
    children: [
      { label: "アクセシビリティ方針", href: "/accessibility" },
      { label: "個人情報保護方針", href: "/privacy" },
      { label: "免責事項・著作権", href: "/accessibility" },
      { label: "お問い合わせ", href: "/inquiry" },
      { label: "リンク集", href: "/links" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><span>サイトマップ</span>
        </div>
        <h1 className="page-title">サイトマップ</h1>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {sitemapData.map((section, i) => (
            <div key={i} style={{ border: "1px solid var(--border-light)", background: "#fff" }}>
              <div style={{ background: "var(--city-blue)", padding: "7px 12px" }}>
                <a href={section.href} style={{ color: "#fff", fontWeight: "bold", fontSize: 13 }}>{section.title}</a>
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: "4px 0" }}>
                {section.children.map((child, j) => (
                  <li key={j} style={{ borderBottom: "1px solid #f0f4f8" }}>
                    <a href={child.href} style={{ display: "block", padding: "5px 12px 5px 20px", fontSize: 12, position: "relative", color: "var(--link-color)" }}>
                      <span style={{ position: "absolute", left: 8, color: "var(--city-blue)", fontSize: 9 }}>▶</span>
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <PageInfo department="情報管理課" tel="0439-88-1132（内線 132）" updated="令和8年6月1日" />
      </div>
      <SiteFooter />
    </>
  );
}
