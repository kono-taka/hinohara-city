import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "サイトマップ" };

type Page = { href: string; label: string };
type SubSection = { title: string; href: string; pages: Page[] };
type Section = {
  title: string;
  href: string;
  color?: string;
  subsections: SubSection[];
};

const SITEMAP: Section[] = [
  {
    title: "市政情報", href: "/shisei", color: "#1a5276",
    subsections: [
      {
        title: "市政・組織", href: "/shisei",
        pages: [
          { href: "/mayor",           label: "市長室" },
          { href: "/shisei/gaiyou",   label: "市政概要・プロフィール" },
          { href: "/shisei/soshiki",  label: "組織・部署案内" },
          { href: "/shisei/keikaku",  label: "第3次総合計画" },
          { href: "/shisei/rekishi",  label: "日野原市の歩み" },
          { href: "/shisei/mascot",   label: "マスコットキャラクター（ひのぽん）" },
        ],
      },
      {
        title: "財政・情報公開", href: "/shisei/zaisei",
        pages: [
          { href: "/shisei/zaisei",    label: "財政情報" },
          { href: "/shisei/joho",      label: "情報公開・個人情報保護" },
          { href: "/shisei/reiki",     label: "条例・規則（例規集）" },
          { href: "/shisei/pubcom",    label: "パブリックコメント" },
          { href: "/shisei/chotatsu",  label: "入札・契約情報" },
          { href: "/shisei/chotatsu/shikaku", label: "├ 入札参加資格申請" },
        ],
      },
      {
        title: "市議会・選挙・広報", href: "/gikai",
        pages: [
          { href: "/gikai",            label: "市議会" },
          { href: "/senkyo",           label: "選挙情報" },
          { href: "/shisei/koho",      label: "広報ひのはら" },
          { href: "/shisei/shingikai", label: "審議会・委員会" },
          { href: "/news",             label: "お知らせ・新着情報" },
        ],
      },
    ],
  },
  {
    title: "くらし・手続き", href: "/kurashi", color: "#1e8449",
    subsections: [
      {
        title: "住民・証明書", href: "/kurashi/jumin",
        pages: [
          { href: "/kurashi/jumin",     label: "住民登録・戸籍・マイナンバー" },
          { href: "/kurashi/shomeisho", label: "各種証明書の申請" },
          { href: "/shinsei",           label: "申請書類ダウンロード" },
        ],
      },
      {
        title: "税・生活", href: "/kurashi/zei",
        pages: [
          { href: "/kurashi/zei",    label: "市税・各種税金" },
          { href: "/kurashi/gomi",   label: "ごみ・リサイクル" },
          { href: "/kurashi/doro",   label: "道路・河川・公共交通" },
          { href: "/kurashi/jutaku", label: "住宅・建築" },
          { href: "/kurashi/bousai", label: "防災・安全" },
          { href: "/bousai",         label: "├ 防災情報" },
          { href: "/bousai/keikai",  label: "　├ 避難情報・警戒レベル" },
          { href: "/faq",            label: "よくある質問（FAQ）" },
        ],
      },
    ],
  },
  {
    title: "健康・福祉", href: "/kenko", color: "#7d6608",
    subsections: [
      {
        title: "子育て・保育", href: "/kenko/kosodate",
        pages: [
          { href: "/kenko/kosodate",           label: "子育て・保育トップ" },
          { href: "/kenko/kosodate/nyusho",    label: "├ 保育所・認定こども園の入所申込" },
          { href: "/kenko/kosodate/jidoteate", label: "├ 児童手当" },
          { href: "/kenko/kosodate/kenshin",   label: "├ 乳幼児健診・育児相談" },
          { href: "/kenko/kosodate/center",    label: "├ 子育て支援センター" },
          { href: "/kenko/kosodate/gakudo",    label: "├ 放課後児童クラブ" },
          { href: "/kenko/kosodate/hitorioya", label: "└ ひとり親家庭支援" },
        ],
      },
      {
        title: "介護・高齢者", href: "/kenko/kaigo",
        pages: [
          { href: "/kenko/kaigo",           label: "介護保険トップ" },
          { href: "/kenko/kaigo/seido",     label: "├ 制度の概要と申請方法" },
          { href: "/kenko/kaigo/hokenryo",  label: "├ 介護保険料" },
          { href: "/kenko/kaigo/ninchisho", label: "├ 認知症支援" },
          { href: "/kenko/kaigo/mimamori",  label: "├ 高齢者見守りネットワーク" },
          { href: "/kenko/kaigo/chiiki",    label: "└ 地域包括支援センター" },
          { href: "/kenko/koreisha",        label: "高齢者支援サービス" },
        ],
      },
      {
        title: "障がい福祉", href: "/kenko/shogai",
        pages: [
          { href: "/kenko/shogai",         label: "障がい福祉トップ" },
          { href: "/kenko/shogai/techo",   label: "├ 障害者手帳の申請" },
          { href: "/kenko/shogai/service", label: "├ 障害福祉サービス" },
          { href: "/kenko/shogai/hosogu",  label: "├ 補装具・用具の給付" },
          { href: "/kenko/shogai/ido",     label: "├ 移動支援" },
          { href: "/kenko/shogai/soudan",  label: "└ 相談支援センター" },
        ],
      },
      {
        title: "医療・国民健康保険", href: "/kenko/kokuho",
        pages: [
          { href: "/kenko/kokuho",           label: "国民健康保険トップ" },
          { href: "/kenko/kokuho/tetsuzuki", label: "├ 加入・脱退の手続き" },
          { href: "/kenko/kokuho/zei",       label: "├ 国民健康保険税" },
          { href: "/kenko/kokuho/joshi",     label: "├ 医療費の助成" },
          { href: "/kenko/kokuho/kouki",     label: "├ 後期高齢者医療" },
          { href: "/kenko/kokuho/kyukyu",    label: "├ 救急医療" },
          { href: "/kenko/kokuho/iin",       label: "└ 市内医療機関一覧" },
        ],
      },
      {
        title: "予防接種・健診", href: "/kenko/yobosesshu",
        pages: [
          { href: "/kenko/yobosesshu",            label: "予防接種・健診トップ" },
          { href: "/kenko/yobosesshu/nyuyoji",    label: "├ 乳幼児予防接種" },
          { href: "/kenko/yobosesshu/seijin",     label: "├ 成人・高齢者の予防接種" },
          { href: "/kenko/yobosesshu/tokutei",    label: "├ 特定健康診査（メタボ健診）" },
          { href: "/kenko/yobosesshu/gankenshin", label: "├ がん検診" },
          { href: "/kenko/yobosesshu/kokoro",     label: "└ こころの健康相談" },
        ],
      },
      {
        title: "生活支援", href: "/kenko",
        pages: [
          { href: "/kenko/seikatsu/hogo",     label: "生活保護" },
          { href: "/kenko/seikatsu/konku",    label: "生活困窮者自立支援" },
          { href: "/kenko/seikatsu/foodbank", label: "フードバンク" },
          { href: "/kenko/seikatsu/juukyo",   label: "住居確保給付金" },
        ],
      },
    ],
  },
  {
    title: "教育・文化", href: "/kyoiku", color: "#512e5f",
    subsections: [
      {
        title: "小・中学校", href: "/kyoiku/gakko",
        pages: [
          { href: "/kyoiku/gakko",               label: "小・中学校一覧" },
          { href: "/kyoiku/gakko/chuo-sho",      label: "├ 中央小学校" },
          { href: "/kyoiku/gakko/hokubu-sho",    label: "├ 北部小学校" },
          { href: "/kyoiku/gakko/nanbu-sho",     label: "├ 南部小学校" },
          { href: "/kyoiku/gakko/tobu-sho",      label: "├ 東部小学校" },
          { href: "/kyoiku/gakko/haruno-sho",    label: "├ 原野小学校" },
          { href: "/kyoiku/gakko/shirotaki-sho", label: "├ 白峰小学校" },
          { href: "/kyoiku/gakko/daiichi-chu",   label: "├ 第一中学校" },
          { href: "/kyoiku/gakko/daini-chu",     label: "├ 第二中学校" },
          { href: "/kyoiku/gakko/haruno-chu",    label: "└ 原野中学校" },
        ],
      },
      {
        title: "生涯学習・施設", href: "/kyoiku",
        pages: [
          { href: "/kyoiku/hoiku",         label: "保育所・幼稚園" },
          { href: "/kyoiku/shogaigakushu", label: "生涯学習・文化活動" },
          { href: "/kyoiku/toshokan",      label: "市立中央図書館" },
          { href: "/kyoiku/sport",         label: "スポーツ振興" },
        ],
      },
    ],
  },
  {
    title: "産業・環境", href: "/sangyo", color: "#1a5e20",
    subsections: [
      {
        title: "産業・雇用", href: "/sangyo",
        pages: [
          { href: "/sangyo/nogyo",     label: "農林業振興" },
          { href: "/sangyo/shoko",     label: "商工業" },
          { href: "/sangyo/kanko",     label: "観光振興" },
          { href: "/sangyo/shigoto",   label: "しごと・雇用" },
          { href: "/sangyo/kigyoyuchi",label: "企業誘致" },
          { href: "/sangyo/kankyo",    label: "環境・ゼロカーボン" },
        ],
      },
    ],
  },
  {
    title: "施設案内", href: "/shisetsu", color: "#7e5109",
    subsections: [
      {
        title: "公共施設", href: "/shisetsu",
        pages: [
          { href: "/shisetsu",                   label: "施設案内トップ" },
          { href: "/shisetsu/shiyakusho",        label: "├ 市役所" },
          { href: "/shisetsu/bunka-center",      label: "├ 市民文化センター" },
          { href: "/shisetsu/toshokan",          label: "├ 市立中央図書館" },
          { href: "/shisetsu/taiikukan",         label: "├ 総合体育館" },
          { href: "/shisetsu/rekishi-shiryokan", label: "├ 歴史民俗資料館" },
          { href: "/shisetsu/nogyo-koen",        label: "├ 農業公園（ひのはら農楽園）" },
          { href: "/shisetsu/visitor-center",    label: "├ 白峰高原ビジターセンター" },
          { href: "/shisetsu/rojin-fukushi",     label: "└ 老人福祉センター（長寿の家）" },
        ],
      },
    ],
  },
  {
    title: "観光・移住", href: "/kanko", color: "#196f3d",
    subsections: [
      {
        title: "観光・特産", href: "/kanko",
        pages: [
          { href: "/kanko",           label: "観光・移住トップ" },
          { href: "/kanko/bunka",     label: "文化財・歴史" },
          { href: "/kanko/event",     label: "イベント情報" },
          { href: "/kanko/tokusanhin",label: "特産品・グルメ" },
          { href: "/kanko/iju",       label: "移住・定住支援" },
          { href: "/kanko/access",    label: "市へのアクセス" },
        ],
      },
      {
        title: "ふるさと納税", href: "/furusato",
        pages: [
          { href: "/furusato",      label: "ふるさと納税トップ" },
          { href: "/furusato/H001", label: "├ ぽんなわびわ 1kg詰め" },
          { href: "/furusato/H002", label: "├ 白峰温泉郷 宿泊ペアご招待券" },
          { href: "/furusato/H003", label: "├ 日野原産 落花生 煎り・ゆでセット" },
          { href: "/furusato/H004", label: "├ ひのはら味噌 熟成蔵出し2種セット" },
          { href: "/furusato/H005", label: "├ 白峰高原牧場 乳製品詰め合わせ" },
          { href: "/furusato/H006", label: "├ 旬の野菜詰め合わせ（8〜10種）" },
          { href: "/furusato/H007", label: "├ 原野川天然水 2L×24本セット" },
          { href: "/furusato/H008", label: "└ 縄文土器レプリカ" },
        ],
      },
    ],
  },
  {
    title: "サイト情報", href: "/accessibility", color: "#424949",
    subsections: [
      {
        title: "サイトについて", href: "/accessibility",
        pages: [
          { href: "/accessibility", label: "アクセシビリティ方針" },
          { href: "/privacy",       label: "個人情報保護方針" },
          { href: "/copyright",     label: "著作権・リンクについて" },
          { href: "/disclaimer",    label: "免責事項" },
          { href: "/inquiry",       label: "お問い合わせ" },
          { href: "/links",         label: "リンク集" },
          { href: "/faq",           label: "よくある質問（FAQ）" },
        ],
      },
    ],
  },
];

export default function SitemapPage() {
  const total = SITEMAP.reduce(
    (sum, s) => sum + s.subsections.reduce((s2, ss) => s2 + ss.pages.length, 0), 0
  );

  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 20px" }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><span>サイトマップ</span>
        </div>
        <h1 className="page-title">サイトマップ</h1>

        <p style={{ fontSize: 12.5, color: "#666", marginBottom: 20 }}>
          日野原市公式ホームページ全 <strong>{total}</strong> ページの一覧です。
        </p>

        {SITEMAP.map((section) => (
          <div key={section.href} style={{ marginBottom: 28 }}>
            {/* セクションヘッダー */}
            <div style={{
              background: section.color ?? "var(--city-primary)",
              color: "#fff", padding: "8px 14px",
              display: "flex", alignItems: "center", gap: 10,
              borderRadius: "4px 4px 0 0",
            }}>
              <a href={section.href} style={{ color: "#fff", fontWeight: "bold", fontSize: 14 }}>
                {section.title}
              </a>
              <span style={{ fontSize: 11, opacity: 0.75, marginLeft: "auto" }}>
                {section.subsections.reduce((s, ss) => s + ss.pages.length, 0)} ページ
              </span>
            </div>

            {/* サブセクション群 */}
            <div style={{
              border: "1px solid var(--border-light)", borderTop: "none",
              background: "#fff",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            }}>
              {section.subsections.map((sub, si) => (
                <div key={si} style={{
                  borderRight: "1px solid #eef1f6",
                  borderBottom: "1px solid #eef1f6",
                  padding: "10px 14px",
                }}>
                  <div style={{
                    fontSize: 12, fontWeight: "bold", color: section.color ?? "var(--city-primary)",
                    marginBottom: 6, paddingBottom: 4,
                    borderBottom: `1px solid ${section.color ?? "var(--city-primary)"}30`,
                  }}>
                    <a href={sub.href} style={{ color: "inherit" }}>{sub.title}</a>
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {sub.pages.map((page) => (
                      <li key={page.href} style={{ lineHeight: 1 }}>
                        <a href={page.href} style={{
                          display: "block", padding: "4px 0 4px 2px",
                          fontSize: 12, color: "var(--link-color)",
                          borderBottom: "1px dotted #eef",
                          fontFamily: "monospace",
                        }}>
                          {page.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        <PageInfo department="情報管理課" tel="0439-88-1132（内線 132）" updated="令和8年6月1日" />
      </div>
      <SiteFooter />
    </>
  );
}
