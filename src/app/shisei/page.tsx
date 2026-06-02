import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市政情報" };

export default function ShiseiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>市政情報</span>
          </div>
          <h1 className="page-title">市政情報</h1>

          <div className="info-card-grid">
            <div className="info-card">
              <div className="info-card-head">市制施行</div>
              <div className="info-card-body"><strong>2006年</strong>3月20日<br />（旧 日野町・原野村・白峰村が合併）</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">面積</div>
              <div className="info-card-body"><strong>312.4</strong> km²<br />（千葉県内市町村 第14位）</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">総人口</div>
              <div className="info-card-body"><strong>42,381</strong> 人<br />（令和7年5月1日現在）</div>
            </div>
          </div>

          <div className="section-title">市政に関するご案内</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { label: "市長室・市長挨拶", href: "/mayor", desc: "市長からのメッセージ、市長プロフィールをご覧いただけます。" },
              { label: "組織・部署案内", href: "/shisei/soshiki", desc: "市役所各部署の電話番号・所在階・担当業務をご案内します。" },
              { label: "市政概要・統計", href: "/shisei/gaiyou", desc: "日野原市の基本情報、各種統計データを掲載しています。" },
              { label: "日野原市の歩み", href: "/shisei/rekishi", desc: "縄文時代から市制施行まで、日野原市の歴史と合併の経緯を紹介します。" },
              { label: "市議会", href: "/gikai", desc: "市議会の構成、会議録、傍聴方法などをご案内します。" },
              { label: "総合計画", href: "/shisei/keikaku", desc: "第3次日野原市総合計画（令和5〜14年度）の内容をご覧いただけます。" },
              { label: "財政情報", href: "/shisei/zaisei", desc: "予算・決算の概要、財政状況報告書を公開しています。" },
              { label: "情報公開・個人情報保護", href: "/shisei/joho", desc: "行政文書の公開請求の手続きについてご案内します。" },
              { label: "入札・契約情報", href: "/shisei/chotatsu", desc: "公共工事・物品調達の入札公告、落札結果を掲載しています。" },
              { label: "条例・規則", href: "/shisei/reiki", desc: "日野原市の例規集をご覧いただけます（外部リンク）。" },
              { label: "広報ひのはら", href: "/shisei/koho", desc: "市の広報誌「広報ひのはら」のバックナンバーをPDFで公開しています。" },
              { label: "審議会・委員会", href: "/shisei/shingikai", desc: "各種審議会・委員会の開催情報、会議録を掲載しています。" },
              { label: "パブリックコメント（意見公募）", href: "/shisei/pubcom", desc: "計画・条例等の策定にあたり、市民の皆様から意見を募集しています。" },
              { label: "選挙情報", href: "/senkyo", desc: "選挙日程・投票所・選挙結果などの選挙に関する情報です。" },
              { label: "ひのぽん（マスコットキャラクター）", href: "/shisei/mascot", desc: "日野原市のマスコットキャラクター「ひのぽん」のプロフィール・活動紹介・素材利用について。" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ minWidth: 180 }}>
                  <a href={item.href} style={{ fontSize: 13, fontWeight: "bold" }}>▶ {item.label}</a>
                </div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <PageInfo department="企画政策課" tel="0439-88-1114（内線 101）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
