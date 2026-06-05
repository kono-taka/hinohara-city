import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "広報ひのはら" };

const issues = [
  { year: "令和8年", month: "6月号", date: "2026年6月1日発行", no: "第243号", pages: 16, pdf: "/files/koho/r8-06.pdf",
    topics: ["市制20周年記念特集／これまでの歩みと未来へのビジョン", "第19回やまびこ祭り 開催のご案内", "令和8年度 市民税・固定資産税について", "健康づくりコラム「夏の熱中症対策」"] },
  { year: "令和8年", month: "5月号", date: "2026年5月1日発行", no: "第242号", pages: 20, pdf: "/files/koho/r8-05.pdf",
    topics: ["特集：ゼロカーボンシティ ひのはらの挑戦", "新型コロナウイルス5類移行後の市の対応について", "移住者インタビュー「なぜ日野原を選んだのか」", "市議会 令和8年3月定例会 報告"] },
  { year: "令和8年", month: "4月号", date: "2026年4月1日発行", no: "第241号", pages: 16, pdf: "/files/koho/r8-04.pdf",
    topics: ["新年度のご挨拶　市長 宮本誠二郎", "令和8年度 予算の概要", "新入学・就職おめでとうございます（市内小中高校 入学式レポート）", "市民課からのお知らせ（マイナンバーカード申請促進）"] },
  { year: "令和8年", month: "3月号", date: "2026年3月1日発行", no: "第240号", pages: 24, pdf: "/files/koho/r8-03.pdf",
    topics: ["市制施行20周年記念号（前編）", "日野原市の20年を振り返る　〜合併から現在まで〜", "卒業おめでとう（市内中学校 卒業式特集）", "令和7年度 予算執行状況・決算見込み"] },
  { year: "令和8年", month: "2月号", date: "2026年2月1日発行", no: "第239号", pages: 16, pdf: "/files/koho/r8-02.pdf",
    topics: ["特集：介護保険制度の改正点（令和8年度）", "白峰地区 雪害対策について", "市民活動団体紹介「NPO法人 ひのはら里山保全会」", "健康コラム「インフルエンザ予防のポイント」"] },
  { year: "令和8年", month: "1月号", date: "2026年1月1日発行", no: "第238号", pages: 16, pdf: "/files/koho/r8-01.pdf",
    topics: ["新年のご挨拶　市長 宮本誠二郎", "令和8年の主な行事・イベント予定", "成人式（はたちのつどい）開催レポート", "特集：子育て支援の現状と今後の取組"] },
  { year: "令和7年", month: "12月号", date: "2025年12月1日発行", no: "第237号", pages: 20, pdf: "/files/koho/r7-12.pdf",
    topics: ["特集：日野原市のごみ減量への取り組み", "令和7年12月市議会定例会 報告", "年末年始の市役所窓口について", "冬の交通安全キャンペーン"] },
  { year: "令和7年", month: "11月号", date: "2025年11月1日発行", no: "第236号", pages: 16, pdf: "/files/koho/r7-11.pdf",
    topics: ["特集：りんご収穫の秋 ひのはら農業の今", "文化の秋 市民文化祭レポート", "高齢者なんでも相談窓口　利用者の声", "市民税・国民健康保険税の口座振替のご案内"] },
  { year: "令和7年", month: "10月号", date: "2025年10月1日発行", no: "第235号", pages: 16, pdf: "/files/koho/r7-10.pdf",
    topics: ["令和7年度 市民体育祭 開催報告", "特集：防災の日　日野原市の防災対策", "移住者座談会「暮らして3年、日野原の魅力」", "市内保育所・認定こども園 入所申込について"] },
  { year: "令和7年", month: "9月号", date: "2025年9月1日発行", no: "第234号", pages: 16, pdf: "/files/koho/r7-09.pdf",
    topics: ["敬老の日特集：市内の100歳以上の方々", "令和7年9月市議会定例会 開催のご案内", "健康診断を受けましょう（がん検診・特定健診）", "ふるさと納税 お礼の品 新規追加のお知らせ"] },
  { year: "令和7年", month: "8月号", date: "2025年8月1日発行", no: "第233号", pages: 16, pdf: "/files/koho/r7-08.pdf",
    topics: ["第18回 日野原やまびこ祭り 開催報告", "子どもの夏休み　安全のために", "市内小中学校 GIGAスクール構想の取組", "水道の使用量が増える季節に（節水のお願い）"] },
  { year: "令和7年", month: "7月号", date: "2025年7月1日発行", no: "第232号", pages: 16, pdf: "/files/koho/r7-07.pdf",
    topics: ["特集：原野川の自然と水質保全の取り組み", "令和7年度 第1回 市政運営に関する市民アンケート結果", "7月・8月のイベントカレンダー", "熱中症に注意（高齢者・子どもの熱中症対策）"] },
];

export default function KohoPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>広報ひのはら</span>
          </div>
          <h1 className="page-title">広報ひのはら</h1>

          <div style={{ border: "1px solid var(--border-light)", background: "#fff", padding: 14, marginBottom: 16, display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ flex: 1, fontSize: 13, lineHeight: 1.8 }}>
              「広報ひのはら」は毎月1日に発行する日野原市の広報誌です。市の行政情報・イベント・市民の皆様の活動などをお伝えします。
              全世帯に配布するほか、市役所・各公民館・図書館などにも設置しています。バックナンバーはPDFでご覧いただけます（最新号含め過去3年分）。
            </div>
            <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 16px", fontSize: 12, textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontSize: 10, color: "#666" }}>最新号</div>
              <div style={{ fontSize: 16, fontWeight: "bold", color: "var(--city-blue)" }}>令和8年6月号</div>
              <div style={{ fontSize: 11, color: "#888" }}>第243号</div>
              <div style={{ marginTop: 6 }}>
                <a href="/files/koho/r8-06.pdf" target="_blank" rel="noopener noreferrer" style={{ background: "var(--city-blue)", color: "#fff", padding: "4px 12px", fontSize: 11, fontWeight: "bold", display: "inline-block", borderRadius: 2 }}>PDF で見る</a>
              </div>
            </div>
          </div>

          <div className="section-title">バックナンバー一覧</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 16 }}>
            {issues.map((issue, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: 110 }}>
                  <div style={{ fontWeight: "bold", fontSize: 13, color: "var(--city-blue)" }}>{issue.year} {issue.month}</div>
                  <div style={{ fontSize: 11, color: "#888" }}>{issue.no}　{issue.pages}ページ</div>
                </div>
                <div style={{ flex: 1 }}>
                  <ul style={{ margin: 0, padding: "0 0 0 16px", fontSize: 12, color: "#444", lineHeight: 1.8 }}>
                    {issue.topics.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}>
                  <a href={issue.pdf} target="_blank" rel="noopener noreferrer"
                     style={{ background: "#c0392b", color: "#fff", padding: "3px 10px", fontSize: 11, fontWeight: "bold", display: "block", textAlign: "center", borderRadius: 2, textDecoration: "none" }}>
                    📄 PDF
                  </a>
                  <span style={{ fontSize: 10, color: "#888", textAlign: "center" }}>{issue.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>広報ひのはら 編集・発行</strong><br />
            日野原市役所 企画政策課 広報広聴係<br />
            電話：0100-88-1115　メール：koho@city.hinohara.lg.jp<br />
            <br />
            ※点字版・声の広報（音声CD）をご希望の方は企画政策課へお申し込みください。<br />
            ※市外にお住まいの方への郵送をご希望の方は、切手代（年間1,320円）のご負担をお願いしています。
          </div>
          <PageInfo department="秘書広報課" division="広報係" tel="0100-88-1105（内線 105）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
