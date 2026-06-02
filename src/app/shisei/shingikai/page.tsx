import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "審議会・委員会" };

const committees = [
  {
    name: "日野原市総合計画審議会",
    desc: "市の総合計画の策定・改訂に関して審議します。",
    kaisu: "年2〜3回",
    jimukyoku: "企画政策課",
  },
  {
    name: "日野原市都市計画審議会",
    desc: "都市計画の変更・決定に係る事項を審議します。",
    kaisu: "年4回程度（必要に応じて随時）",
    jimukyoku: "建設課",
  },
  {
    name: "日野原市教育委員会",
    desc: "学校教育・社会教育・文化・スポーツに関する事務を管理執行します。",
    kaisu: "毎月1回（定例）・臨時",
    jimukyoku: "教育総務課",
  },
  {
    name: "日野原市情報公開・個人情報保護審査会",
    desc: "情報公開請求・個人情報に係る異議申し立ての審査を行います。",
    kaisu: "随時（案件発生時）",
    jimukyoku: "総務課",
  },
  {
    name: "日野原市固定資産評価審査委員会",
    desc: "固定資産課税台帳に登録された価格に対する審査申し出を審議します。",
    kaisu: "随時（申し出期間中）",
    jimukyoku: "税務課",
  },
  {
    name: "日野原市農業委員会",
    desc: "農地の権利移転・転用許可、農業者年金等の農業行政を担います。",
    kaisu: "毎月第3木曜日（定例）",
    jimukyoku: "農林振興課",
  },
  {
    name: "日野原市介護保険運営協議会",
    desc: "介護保険事業計画の策定・評価に関して審議します。",
    kaisu: "年3回程度",
    jimukyoku: "高齢者支援課",
  },
  {
    name: "日野原市社会教育委員会議",
    desc: "社会教育の振興に関して教育委員会に助言します。",
    kaisu: "年3回",
    jimukyoku: "生涯学習課",
  },
  {
    name: "日野原市環境審議会",
    desc: "環境基本計画・環境保全施策に関して審議します。",
    kaisu: "年2回",
    jimukyoku: "環境対策課",
  },
  {
    name: "日野原市国民健康保険運営協議会",
    desc: "国民健康保険事業の運営に関する重要事項を審議します。",
    kaisu: "年2回",
    jimukyoku: "健康推進課",
  },
];

export default function ShingikaiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>審議会・委員会</span>
          </div>
          <h1 className="page-title">審議会・委員会</h1>

          <div className="content-box">
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市では、市政の重要事項について専門家・市民委員の意見を反映するため、各種審議会・委員会を設置しています。
              審議会等の会議は原則として公開です。傍聴を希望される方は開催前日までに各担当課へお問い合わせください。
            </p>
          </div>

          <div className="section-title">審議会・委員会一覧</div>
          <table className="content-table" style={{ borderTop: "none" }}>
            <thead>
              <tr>
                <th style={{ width: "35%" }}>名称</th>
                <th>概要</th>
                <th style={{ width: "16%" }}>開催頻度</th>
                <th style={{ width: "14%" }}>事務局</th>
              </tr>
            </thead>
            <tbody>
              {committees.map((c, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: "bold", fontSize: 13 }}>{c.name}</td>
                  <td style={{ fontSize: 12, lineHeight: 1.6 }}>{c.desc}</td>
                  <td style={{ fontSize: 12 }}>{c.kaisu}</td>
                  <td style={{ fontSize: 12 }}>{c.jimukyoku}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="section-title">会議の公開・傍聴について</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr><th>傍聴の申込</th><td>各審議会等の開催3日前までに、事務局窓口またはお電話でお申込みください。</td></tr>
                <tr><th>会議録の公開</th><td>会議終了後おおむね1ヶ月以内に市役所情報公開コーナー（1階）および市公式ウェブサイトで公開します。</td></tr>
                <tr><th>委員の公募</th><td>市民委員を公募する審議会については、広報ひのはらおよびウェブサイトでお知らせします。</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box" style={{ background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong><br />
            審議会・委員会に関するお問い合わせは、各担当課または総務課行政係までお願いします。<br />
            総務課　☎ 0439-88-1111（代表）　内線 2102
          </div>
          <PageInfo department="総務課" division="庶務係" tel="0439-88-1121（内線 123）" updated="令和6年10月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
