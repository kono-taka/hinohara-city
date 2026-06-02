import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "条例・規則（例規集）" };

const categories = [
  {
    no: "第1編",
    title: "総規",
    items: [
      { title: "日野原市自治基本条例", updated: "令和5年3月" },
      { title: "日野原市組織規則", updated: "令和8年4月" },
      { title: "日野原市公印規則", updated: "令和2年4月" },
      { title: "日野原市情報公開条例", updated: "令和4年10月" },
      { title: "日野原市個人情報保護条例", updated: "令和5年4月" },
      { title: "日野原市審議会等の会議の公開に関する条例", updated: "令和元年9月" },
    ],
  },
  {
    no: "第2編",
    title: "議会",
    items: [
      { title: "日野原市議会基本条例", updated: "平成30年3月" },
      { title: "日野原市議会委員会条例", updated: "令和5年5月" },
      { title: "日野原市議会傍聴規則", updated: "平成18年3月" },
      { title: "日野原市政務活動費の交付に関する条例", updated: "令和4年4月" },
    ],
  },
  {
    no: "第3編",
    title: "行政",
    items: [
      { title: "日野原市行政手続条例", updated: "令和5年4月" },
      { title: "日野原市行政不服申立て条例", updated: "令和4年10月" },
      { title: "日野原市附属機関設置条例", updated: "令和6年4月" },
      { title: "日野原市職員定数条例", updated: "令和8年4月" },
    ],
  },
  {
    no: "第4編",
    title: "財務",
    items: [
      { title: "日野原市財務規則", updated: "令和7年4月" },
      { title: "日野原市公有財産管理規則", updated: "令和3年4月" },
      { title: "日野原市契約規則", updated: "令和6年4月" },
      { title: "日野原市市税条例", updated: "令和8年4月" },
      { title: "日野原市国民健康保険税条例", updated: "令和8年4月" },
    ],
  },
  {
    no: "第5編",
    title: "民生・衛生",
    items: [
      { title: "日野原市介護保険条例", updated: "令和6年4月" },
      { title: "日野原市国民健康保険条例", updated: "令和6年4月" },
      { title: "日野原市廃棄物の処理及び清掃に関する条例", updated: "令和4年4月" },
      { title: "日野原市障害者等の地域生活の支援に関する条例", updated: "令和5年4月" },
    ],
  },
  {
    no: "第6編",
    title: "産業",
    items: [
      { title: "日野原市農業振興地域整備計画に関する規則", updated: "令和6年3月" },
      { title: "日野原市企業誘致条例", updated: "令和4年4月" },
      { title: "日野原市観光振興条例", updated: "令和3年12月" },
    ],
  },
  {
    no: "第7編",
    title: "建設",
    items: [
      { title: "日野原市都市計画法に基づく開発許可等の手続きに関する条例", updated: "令和4年4月" },
      { title: "日野原市市営住宅管理条例", updated: "令和6年4月" },
      { title: "日野原市道路占用規則", updated: "令和3年4月" },
    ],
  },
  {
    no: "第8編",
    title: "教育",
    items: [
      { title: "日野原市教育委員会教育長の職務等に関する条例", updated: "平成27年4月" },
      { title: "日野原市立学校の設置に関する条例", updated: "令和6年4月" },
      { title: "日野原市社会教育委員の定数等に関する条例", updated: "平成18年3月" },
      { title: "日野原市立図書館条例", updated: "令和3年4月" },
    ],
  },
];

export default function ReikiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/shisei">市政情報</a> › 条例・規則（例規集）
          </nav>
          <h1 className="page-title">条例・規則（例規集）</h1>

          <div className="content-box" style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 8px" }}>
              日野原市の条例・規則・訓令等を掲載しています。各条例等は最終改正版を掲載しています。
            </p>
            <p style={{ fontSize: 12.5, lineHeight: 1.8, margin: 0, color: "#555" }}>
              ※例規集の内容は参考情報であり、改廃により現行法令と相違する場合があります。
              正確な内容については総務課（☎ 0439-88-1121）にお問い合わせください。
            </p>
          </div>

          {/* 検索風UI */}
          <div style={{ background: "#f4f6fb", border: "1px solid var(--border-light)", padding: "12px 14px", marginBottom: 20, display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12.5, color: "#555", whiteSpace: "nowrap" }}>条例・規則を検索：</span>
            <div style={{ flex: 1, border: "1px solid #bbb", background: "#fff", padding: "6px 10px", borderRadius: 2, fontSize: 13, color: "#aaa" }}>
              例）「国民健康保険」「廃棄物」
            </div>
            <div style={{ background: "var(--city-primary)", color: "#fff", padding: "6px 16px", borderRadius: 2, fontSize: 13, cursor: "default" }}>検索</div>
          </div>

          {/* 例規集本体 */}
          {categories.map((cat, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div className="section-title" style={{ fontSize: 13 }}>
                {cat.no}　{cat.title}
              </div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    padding: "8px 14px", borderBottom: j < cat.items.length - 1 ? "1px solid #e8edf4" : "none",
                  }}>
                    <a href="#" style={{ fontSize: 13 }}>▶ {item.title}</a>
                    <span style={{ fontSize: 11, color: "#999", whiteSpace: "nowrap", marginLeft: 10 }}>
                      最終改正：{item.updated}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.9, marginTop: 4 }}>
            <strong>条例・規則に関するお問い合わせ</strong><br />
            総務課 庶務係　☎ 0439-88-1121（内線 121）<br />
            受付時間：平日 8:30〜17:15
          </div>

          <PageInfo
            department="総務課"
            division="庶務係"
            tel="0439-88-1121（内線 121）"
            updated="令和8年4月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
