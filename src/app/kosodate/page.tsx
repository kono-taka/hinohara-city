import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "子育て支援",
  description: "日野原市の子育て支援情報。保育所・認定こども園への入所、児童手当、子ども医療費助成、放課後児童クラブ、ひとり親支援など、子育てに関する情報をまとめてご案内します。",
};

const faqs = [
  { q: "保育所の入所申込はいつできますか？", a: "翌年度4月入所の申込受付は毎年11月〜12月に行います。年度途中の入所希望は随時受け付けています。申込書は子育て支援課（市役所2階）または各保育所窓口で配布しています。" },
  { q: "児童手当はいくらもらえますか？", a: "0〜2歳は月額1万5千円（一律）、3歳〜小学校修了前は月額1万円（第3子以降1万5千円）、中学生は月額1万円です。所得制限は令和6年10月から撤廃されました。" },
  { q: "子ども医療費助成の対象は何歳までですか？", a: "日野原市では0歳から高校3年生（18歳到達後最初の3月31日）まで医療費の自己負担分を助成しています。市内医療機関では窓口での支払いが原則不要です。" },
  { q: "学童保育（放課後児童クラブ）はどこにありますか？", a: "市内小学校区に計8か所あります。利用時間は放課後〜18:00（延長あり19:00まで）。長期休みは8:00から利用できます。申込は毎年2月に行います。" },
  { q: "一時預かり保育は利用できますか？", a: "市立ひのはら保育所・北部保育所で一時預かり保育を実施しています。利用日の1週間前までに電話予約が必要です。料金は1日2,000円（給食費別途）です。" },
  { q: "ひとり親家庭の支援制度にはどんなものがありますか？", a: "児童扶養手当（月額最大4万5,500円）、医療費助成（マル親）、学習支援・就労支援、家賃補助制度などがあります。詳しくは子育て支援課（☎0100-88-1111 内線241）へ。" },
];

const categories = [
  {
    title: "妊娠・出産",
    color: "#e91e63",
    bg: "#fce4ec",
    items: [
      { label: "妊娠届・母子健康手帳",     href: "/kenko/kosodate/kenshin",  desc: "妊娠がわかったら最初に手続き" },
      { label: "妊婦・乳幼児健診",          href: "/kenko/kosodate/kenshin",  desc: "健診の種類・受診票の使い方" },
      { label: "出産育児一時金",             href: "/kenko/kokuho/tetsuzuki", desc: "国保加入者は約50万円支給" },
      { label: "産後ケア・育児相談",         href: "/kenko/kosodate/center",  desc: "助産師・保健師に相談できます" },
    ],
  },
  {
    title: "保育・幼稚園",
    color: "#1976d2",
    bg: "#e3f2fd",
    items: [
      { label: "保育所・認定こども園の入所", href: "/kenko/kosodate/nyusho",  desc: "申込方法・必要書類・スケジュール" },
      { label: "一時預かり保育",             href: "/kenko/kosodate/nyusho",  desc: "急な用事や育児負担軽減に" },
      { label: "保育料・無償化",             href: "/kenko/kosodate/nyusho",  desc: "3歳〜5歳は原則無償" },
      { label: "病児・病後児保育",           href: "/kenko/kosodate/center",  desc: "子どもの急病時の預かり" },
    ],
  },
  {
    title: "手当・給付金",
    color: "#388e3c",
    bg: "#e8f5e9",
    items: [
      { label: "児童手当",         href: "/kenko/kosodate/jidoteate", desc: "中学生まで月額1万円〜" },
      { label: "子ども医療費助成", href: "/kenko/kosodate/kenshin",   desc: "高校3年生まで医療費を助成" },
      { label: "児童扶養手当",     href: "/kenko/kosodate/hitorioya", desc: "ひとり親家庭の支援給付" },
      { label: "特別児童扶養手当", href: "/kenko/shogai/techo",       desc: "障がいのあるお子さんへ" },
    ],
  },
  {
    title: "小学校入学・放課後",
    color: "#f57c00",
    bg: "#fff3e0",
    items: [
      { label: "就学・学校の選択",   href: "/kyoiku/gakko",            desc: "入学手続き・就学相談" },
      { label: "放課後児童クラブ",   href: "/kenko/kosodate/gakudo",   desc: "学童保育・8か所・申込方法" },
      { label: "就学援助",           href: "/kyoiku/gakko",            desc: "経済的支援・学用品費など" },
      { label: "不登校・教育相談",   href: "/kyoiku/gakko",            desc: "教育支援センターの利用" },
    ],
  },
  {
    title: "相談・サポート",
    color: "#7b1fa2",
    bg: "#f3e5f5",
    items: [
      { label: "子育て支援センター",  href: "/kenko/kosodate/center",   desc: "子育て相談・親子の交流" },
      { label: "ひとり親家庭支援",   href: "/kenko/kosodate/hitorioya", desc: "就労・資金・法律相談" },
      { label: "DV相談窓口",         href: "/kenko/kosodate/hitorioya", desc: "安全な環境を確保します" },
      { label: "ファミリーサポート", href: "/kenko/kosodate/center",    desc: "地域で子育てをサポート" },
    ],
  },
  {
    title: "移住者・新婚向け",
    color: "#1a6e5a",
    bg: "#e8f5ef",
    items: [
      { label: "移住支援金（子育て加算）", href: "/kanko/iju",            desc: "子1人につき100万円加算" },
      { label: "新婚・子育て世帯 住宅補助", href: "/kurashi/jutaku",      desc: "空き家リフォーム補助など" },
      { label: "保育所の空き状況確認",     href: "/kenko/kosodate/nyusho", desc: "随時入所の空き情報" },
      { label: "移住相談会・体験",         href: "/kanko/iju",             desc: "実際の暮らしを体験できます" },
    ],
  },
];

const facilityInfo = [
  { name: "市立ひのはら保育所", type: "認定こども園", age: "0〜5歳", tel: "0100-88-5200", area: "中央地区" },
  { name: "市立北部保育所",     type: "保育所",       age: "0〜5歳", tel: "0100-53-2100", area: "北部地区" },
  { name: "市立原野保育所",     type: "保育所",       age: "0〜5歳", tel: "0100-54-1200", area: "原野地区" },
  { name: "白嶺保育園",         type: "私立保育所",   age: "0〜5歳", tel: "0100-55-0300", area: "白嶺地区" },
  { name: "日野原幼稚園",       type: "私立幼稚園",   age: "3〜5歳", tel: "0100-88-5500", area: "中央地区" },
];

export default function KosodatePage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "子育て支援" },
      ]} />
      <SiteHeader current="/kosodate" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>子育て支援</span>
          </div>
          <h1 className="page-title">子育て支援</h1>

          {/* キャッチ */}
          <div className="content-box" style={{ borderLeft: "4px solid #e91e63", background: "#fce4ec22", marginBottom: 20 }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市では、妊娠・出産から子どもの自立まで、切れ目のない子育て支援を提供しています。
              保育所・学童保育・各種手当・移住支援（子育て加算）など、お子様の年齢や状況に合わせてご活用ください。
              わからないことは<strong>子育て支援課（☎ 0100-88-1111 内線 241）</strong>にお気軽にご相談ください。
            </p>
          </div>

          {/* 統計カード */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, marginBottom: 24 }}>
            {[
              { label: "保育所・こども園", value: "5", unit: "施設", note: "公立3・私立2" },
              { label: "保育定員",         value: "330", unit: "名",  note: "令和8年度" },
              { label: "放課後児童クラブ", value: "8",   unit: "か所", note: "全小学校区" },
              { label: "子ども医療費助成", value: "18",  unit: "歳まで", note: "高3まで対象" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #f3c0d0", borderTop: "3px solid #e91e63", borderRadius: 4, padding: "12px", textAlign: "center" }}>
                <div style={{ fontSize: 11, color: "#888" }}>{s.label}</div>
                <div style={{ fontSize: 24, fontWeight: "bold", color: "#c2185b", lineHeight: 1.2 }}>
                  {s.value}<span style={{ fontSize: 12, marginLeft: 2 }}>{s.unit}</span>
                </div>
                <div style={{ fontSize: 10, color: "#aaa", marginTop: 2 }}>{s.note}</div>
              </div>
            ))}
          </div>

          {/* カテゴリ別メニュー */}
          {categories.map((cat) => (
            <div key={cat.title} className="content-box" style={{ marginBottom: 16 }}>
              <h2 className="section-title" style={{ color: cat.color, borderBottom: `2px solid ${cat.color}`, paddingBottom: 4 }}>
                {cat.title}
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
                {cat.items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    style={{
                      display: "flex", flexDirection: "column",
                      padding: "10px 14px",
                      background: cat.bg,
                      border: `1px solid ${cat.color}33`,
                      borderLeft: `3px solid ${cat.color}`,
                      borderRadius: 3,
                      textDecoration: "none",
                    }}
                  >
                    <span style={{ fontSize: 13, fontWeight: "bold", color: cat.color }}>▶ {item.label}</span>
                    <span style={{ fontSize: 11, color: "#666", marginTop: 2 }}>{item.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* 保育施設一覧 */}
          <div className="content-box">
            <h2 className="section-title">保育所・認定こども園・幼稚園一覧</h2>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>施設名</th><th>種別</th><th>対象年齢</th><th>地域</th><th>電話</th>
                  </tr>
                </thead>
                <tbody>
                  {facilityInfo.map((f) => (
                    <tr key={f.name}>
                      <td style={{ fontWeight: "bold" }}>{f.name}</td>
                      <td>{f.type}</td>
                      <td>{f.age}</td>
                      <td>{f.area}</td>
                      <td><a href={`tel:${f.tel}`}>☎ {f.tel}</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* よくある質問 */}
          <div className="content-box">
            <h2 className="section-title">よくある質問</h2>
            <dl style={{ margin: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid #f0d0da", padding: "12px 0" }}>
                  <dt style={{ fontWeight: "bold", fontSize: 13, color: "#c2185b", marginBottom: 4 }}>Q. {q}</dt>
                  <dd style={{ fontSize: 13, lineHeight: 1.8, margin: 0, paddingLeft: 8, color: "#444" }}>A. {a}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* 窓口 */}
          <div className="content-box" style={{ background: "#fce4ec33", border: "1px solid #f8bbd0" }}>
            <h2 className="section-title">子育て支援課 窓口</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>子育て支援課（市役所2階）</td></tr>
                <tr><th>電話</th><td>☎ <strong>0100-88-1111</strong>（内線 241）</td></tr>
                <tr><th>メール</th><td>kosodate@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="子育て支援課" tel="0100-88-1111（内線 241）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
