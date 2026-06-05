import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "組織・部署案内" };

const floors = [
  {
    floor: "1階",
    depts: [
      { name: "市民課", tel: "0100-88-1113", ext: "212", duties: "住民登録・戸籍・印鑑登録・マイナンバーカード・各種証明書の交付" },
      { name: "税務課", tel: "0100-88-1116", ext: "221", duties: "市民税・固定資産税・軽自動車税・国民健康保険税・納税証明" },
      { name: "収納課", tel: "0100-88-1119", ext: "231", duties: "市税・保険料等の収納・口座振替・徴収猶予・換価の猶予" },
      { name: "会計課", tel: "0100-88-1120", ext: "241", duties: "市の収入・支出の審査および執行" },
    ],
  },
  {
    floor: "2階",
    depts: [
      { name: "総務課", tel: "0100-88-1121", ext: "121", duties: "文書管理・情報公開・個人情報保護・庁舎管理・防災・危機管理" },
      { name: "企画政策課", tel: "0100-88-1114", ext: "101", duties: "総合計画・財政・広報・広聴・ふるさと納税・移住定住・統計" },
      { name: "財政課", tel: "0100-88-1111", ext: "111", duties: "予算編成・決算・財政分析・市有財産管理" },
      { name: "秘書広報課", tel: "0100-88-1102", ext: "102", duties: "市長・副市長の秘書、記者会見・広報誌・ウェブサイト管理" },
      { name: "情報管理課", tel: "0100-88-1132", ext: "132", duties: "情報システム管理・電子行政・サイバーセキュリティ" },
      { name: "契約検査課", tel: "0100-88-1122", ext: "122", duties: "入札・契約・工事検査・物品調達" },
    ],
  },
  {
    floor: "3階",
    depts: [
      { name: "健康推進課", tel: "0100-88-1165", ext: "165", duties: "国民健康保険・後期高齢者医療・健康診断・予防接種・母子保健" },
      { name: "介護保険課", tel: "0100-88-1162", ext: "162", duties: "介護保険・認定調査・高齢者支援・地域包括ケア" },
      { name: "福祉課", tel: "0100-88-1161", ext: "161", duties: "生活保護・障がい福祉・生活困窮者支援・民生委員" },
      { name: "子育て支援課", tel: "0100-88-1172", ext: "172", duties: "保育所入所・放課後学童・児童手当・ひとり親支援・子育て相談" },
      { name: "選挙管理委員会事務局", tel: "0100-88-8340", ext: "340", duties: "選挙の執行・選挙人名簿管理・期日前投票" },
      { name: "監査委員事務局", tel: "0100-88-8350", ext: "350", duties: "市の財政・事業の監査・検査" },
    ],
  },
  {
    floor: "4階",
    depts: [
      { name: "建設課", tel: "0100-88-1181", ext: "181", duties: "道路・河川・橋梁の管理、公共交通・バス路線・開発許可" },
      { name: "都市計画課", tel: "0100-88-1185", ext: "185", duties: "都市計画・建築確認・景観・空き家対策" },
      { name: "住宅課", tel: "0100-88-1182", ext: "182", duties: "市営住宅管理・住宅リフォーム補助・住宅相談" },
      { name: "環境対策課", tel: "0100-88-1136", ext: "152", duties: "ごみ・資源物収集、環境保全・ゼロカーボン推進・霊園" },
      { name: "農林課", tel: "0100-88-1143", ext: "143", duties: "農業振興・農地転用・林業・農業公園・有害鳥獣対策" },
      { name: "産業振興課", tel: "0100-88-1141", ext: "141", duties: "商工業振興・観光・移住定住・企業誘致・雇用促進" },
    ],
  },
  {
    floor: "教育委員会棟（別棟）",
    depts: [
      { name: "教育総務課", tel: "0100-88-8301", ext: "301", duties: "学校教育・学校管理・就学援助・就学相談・教育政策" },
      { name: "生涯学習課", tel: "0100-88-8311", ext: "311", duties: "図書館・公民館・スポーツ振興・文化財保護・社会教育" },
      { name: "学校給食センター", tel: "0100-88-8320", ext: "320", duties: "市立小中学校の給食調理・食育推進" },
    ],
  },
];

export default function SoshikiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/shisei">市政情報</a> › 組織・部署案内
          </nav>
          <h1 className="page-title">組織・部署案内</h1>

          <div className="content-box" style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市役所の各部署の所在階・電話番号・担当業務をご案内します。お問い合わせの際は、担当部署に直接おかけいただくとスムーズです。<br />
              <strong>代表電話：0100-88-1111</strong>（平日 8:30〜17:15）
            </p>
          </div>

          {floors.map((floor, fi) => (
            <div key={fi} style={{ marginBottom: 20 }}>
              <div className="section-title">{floor.floor}</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                <table className="content-table" style={{ margin: 0 }}>
                  <thead>
                    <tr>
                      <th style={{ width: 150 }}>部署名</th>
                      <th style={{ width: 170 }}>電話番号（内線）</th>
                      <th>主な担当業務</th>
                    </tr>
                  </thead>
                  <tbody>
                    {floor.depts.map((d, di) => (
                      <tr key={di}>
                        <td style={{ fontWeight: "bold", fontSize: 13 }}>{d.name}</td>
                        <td style={{ fontSize: 12.5 }}>
                          <a href={`tel:${d.tel}`}>{d.tel}</a>
                          <span style={{ color: "#888", fontSize: 11.5 }}>（内線 {d.ext}）</span>
                        </td>
                        <td style={{ fontSize: 12.5, lineHeight: 1.7 }}>{d.duties}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="content-box">
            <h3>市役所へのアクセス・開庁時間</h3>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 120 }}>所在地</th><td>〒299-1401 千葉県日野原市中央一丁目1番地1号</td></tr>
                <tr><th>開庁時間</th><td>平日 午前8時30分〜午後5時15分<br />毎月第2・第4土曜日 8:30〜12:00（市民課・税務課の一部業務のみ）</td></tr>
                <tr><th>休業日</th><td>土曜・日曜・祝日・年末年始（12月29日〜1月3日）</td></tr>
                <tr><th>代表電話</th><td>0100-88-1111</td></tr>
                <tr><th>アクセス</th><td>
                  <a href="/kanko/access">アクセスマップはこちら →</a>
                </td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo
            department="総務課"
            division="庶務係"
            tel="0100-88-1121（内線 121）"
            updated="令和8年4月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
