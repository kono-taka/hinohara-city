import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import { CatIconNogyo, CatIconShoko, CatIconKankyo, CatIconNochi } from "@/components/InlineIcons";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "産業・環境", description: "農林業・商工業振興、観光・移住促進、環境保全・ゼロカーボン、企業誘致など、日野原市の産業と環境に関する情報を掲載しています。" };

export default function SangyoPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>産業・環境</span>
          </div>
          <h1 className="page-title">産業・環境</h1>

          <div className="info-card-grid" style={{ marginBottom: 16 }}>
            <div className="info-card">
              <div className="info-card-head">農業産出額</div>
              <div className="info-card-body">約<strong>38</strong>億円<br />（令和4年・農業センサス）</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">製造品出荷額</div>
              <div className="info-card-body">約<strong>245</strong>億円<br />（令和3年・工業統計）</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">観光入込客数</div>
              <div className="info-card-body">約<strong>78</strong>万人<br />（令和5年度）</div>
            </div>
          </div>

          {[
            {
              title: "農林業",
              Icon: CatIconNogyo,
              items: [
                { label: "農業振興・担い手支援", href: "/sangyo/nogyo", desc: "新規就農者支援制度・農業次世代人材投資資金（旧青年就農給付金）のご案内。" },
                { label: "びわ・落花生・里芋の生産振興", href: "/sangyo/nogyo", desc: "市の特産品であるびわ・落花生・里芋の生産技術支援と販路開拓。後継者育成にも注力。" },
                { label: "農業用水路・農道の維持管理", href: "/sangyo/nogyo", desc: "土地改良区・農業水利施設の維持管理に関するご案内。" },
                { label: "鳥獣被害対策（シカ・イノシシ・サル）", href: "/sangyo/nogyo", desc: "防護柵の設置補助・捕獲隊への支援・被害報告窓口。" },
                { label: "林業振興・森林環境譲与税事業", href: "/sangyo/nogyo", desc: "間伐・作業道整備の補助。森林の多面的機能の維持・増進。" },
                { label: "農産物直売所・道の駅「ひのはら原野」", href: "/sangyo/nogyo", desc: "市内農家が持ち込む新鮮な農産物・加工品を販売。毎週土曜は朝市開催。" },
              ],
            },
            {
              title: "商工業",
              Icon: CatIconShoko,
              items: [
                { label: "商工業振興・中小企業支援", href: "/sangyo/shoko", desc: "市内中小企業の経営改善・設備投資への補助金・融資あっせん。" },
                { label: "事業者向け情報（補助金・支援制度まとめ）", href: "/jigyosha", desc: "企業誘致・創業支援・補助金・融資・入札など事業者向け情報を一覧できます。" },
                { label: "企業誘致・産業立地の促進", href: "/sangyo/kigyoyuchi", desc: "産業用地の分譲・賃貸情報。立地補助金制度のご案内。" },
                { label: "創業・起業支援（ひのはら創業塾）", href: "/sangyo/shoko", desc: "創業計画の作成から開業後のフォローまで伴走支援。年2回開催。" },
                { label: "プレミアム付商品券・地域経済応援策", href: "/sangyo/shoko", desc: "令和8年度 日野原市プレミアム付商品券の販売情報。" },
                { label: "空き店舗活用支援事業", href: "/sangyo/shoko", desc: "中央商店街の空き店舗を活用した新規出店への補助金（改装費の1/2・上限50万円）。" },
                { label: "しごと・就職支援", href: "/sangyo/shigoto", desc: "ハローワーク松本との連携による出張相談会（毎月第3火曜・市役所2階）。" },
              ],
            },
            {
              title: "環境・自然",
              Icon: CatIconKankyo,
              items: [
                { label: "ゼロカーボンシティ宣言・脱炭素の推進", href: "/sangyo/kankyo", desc: "2050年カーボンニュートラルの実現に向けた日野原市の取り組み。" },
                { label: "太陽光発電・省エネ設備の補助金", href: "/sangyo/kankyo", desc: "住宅用太陽光・蓄電池・燃料電池設置への補助（上限20万円）。" },
                { label: "自然環境の保全・生物多様性", href: "/sangyo/kankyo", desc: "日野原丘陵の照葉樹林保護・希少野生生物の保護活動。" },
                { label: "大気・水質・土壌汚染の監視", href: "/sangyo/kankyo", desc: "環境測定結果の公表。事業者への立入検査・指導。" },
                { label: "廃棄物・不法投棄対策", href: "/sangyo/kankyo", desc: "産業廃棄物の適正処理指導・不法投棄の通報窓口。" },
                { label: "ひのはら環境フォーラム（毎年6月開催）", href: "/sangyo/kankyo", desc: "環境月間に合わせた市民参加型の環境学習イベント。" },
              ],
            },
            {
              title: "農地・開発許可",
              Icon: CatIconNochi,
              items: [
                { label: "農地の売買・賃借（農業委員会）", href: "/sangyo/nogyo", desc: "農地法に基づく農地の権利移転・転用許可申請。毎月15日締切。" },
                { label: "農地転用許可申請", href: "/sangyo/nogyo", desc: "農地を農業以外の目的に使用する場合の許可申請手続き。" },
                { label: "開発行為の許可（都市計画法）", href: "/sangyo/kigyoyuchi", desc: "一定規模以上の土地の区画形質変更に必要な許可手続き。" },
              ],
            },
          ].map((cat, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div className="section-title" style={{ display: "flex", alignItems: "center", gap: 6 }}><cat.Icon />{cat.title}</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 12, padding: "9px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                    <div style={{ minWidth: 240 }}><a href={item.href} style={{ fontSize: 13, fontWeight: "bold" }}>▶ {item.label}</a></div>
                    <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <PageInfo department="産業振興課" tel="0100-88-1141（内線 141）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
