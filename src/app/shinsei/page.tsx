import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "申請書類ダウンロード", description: "市民課・税務課・福祉課・子育て支援課など各担当課の申請書類（様式）をPDF・Word形式でダウンロードできます。" };

type Form = {
  no: string;
  name: string;
  desc: string;
  formats: ("PDF" | "Word")[];
  note: string;
  updated: string;
};

type Department = {
  name: string;
  tel: string;
  forms: Form[];
};

const departments: Department[] = [
  {
    name: "市民課",
    tel: "0439-88-1111（内線 201）",
    forms: [
      { no: "様式第1号", name: "転入届", desc: "市外から転入する際に提出する届出書。転入日から14日以内に提出してください。", formats: ["PDF"], note: "押印不要", updated: "R5.4" },
      { no: "様式第2号", name: "転出届（郵送申請用）", desc: "郵送による転出手続きに使用します。窓口での手続きも可能です。", formats: ["PDF"], note: "押印必要", updated: "R4.10" },
      { no: "様式第3号", name: "住民票の写し 交付申請書", desc: "住民票の写しまたは記載事項証明書の交付を申請する書類です。", formats: ["PDF", "Word"], note: "押印不要", updated: "R6.1" },
      { no: "様式第4号", name: "戸籍謄抄本等 交付申請書", desc: "戸籍謄本・抄本・除籍謄本・附票の写し等の交付を申請する書類です。", formats: ["PDF", "Word"], note: "押印不要", updated: "R6.1" },
      { no: "様式第5号", name: "印鑑登録申請書", desc: "印鑑登録の新規登録・廃止・印鑑登録証亡失届に使用します。", formats: ["PDF"], note: "押印必要", updated: "R3.4" },
    ],
  },
  {
    name: "税務課",
    tel: "0439-88-1111（内線 211）",
    forms: [
      { no: "様式第10号", name: "市・県民税 申告書", desc: "市民税・県民税の申告に使用します。給与所得のみの方は原則不要です。", formats: ["PDF"], note: "押印不要", updated: "R8.1" },
      { no: "様式第11号", name: "固定資産税 減額申請書", desc: "住宅用地・新築住宅・耐震改修等に係る減額申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R5.4" },
      { no: "様式第12号", name: "納税証明書 交付申請書", desc: "市税の完納証明・未納額証明等の交付を申請する書類です。", formats: ["PDF"], note: "押印不要", updated: "R4.4" },
      { no: "様式第13号", name: "市税 口座振替依頼書", desc: "市民税・固定資産税・軽自動車税等の口座振替を申し込む用紙です。金融機関への提出用もあります。", formats: ["PDF"], note: "金融機関届出印 必要", updated: "R6.4" },
      { no: "様式第14号", name: "軽自動車税（種別割）減免申請書", desc: "身体障害者等を対象とした軽自動車税の減免申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R5.4" },
    ],
  },
  {
    name: "福祉課",
    tel: "0439-88-1111（内線 231）",
    forms: [
      { no: "様式第20号", name: "身体障害者手帳 交付申請書", desc: "身体障害者手帳の新規交付・再交付を申請する書類です。診断書・意見書が別途必要です。", formats: ["PDF", "Word"], note: "押印不要", updated: "R5.4" },
      { no: "様式第21号", name: "介護保険 要介護・要支援 認定申請書", desc: "介護保険の新規認定・更新・区分変更を申請する書類です。", formats: ["PDF"], note: "押印必要", updated: "R6.1" },
      { no: "様式第22号", name: "高齢者 日常生活用具 給付申請書", desc: "高齢者向け日常生活用具の給付を受けるための申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R4.4" },
      { no: "様式第23号", name: "ひとり親家庭等 医療費助成 認定申請書", desc: "ひとり親家庭の医療費助成（マル親）制度の認定申請書です。", formats: ["PDF"], note: "押印不要", updated: "R5.10" },
    ],
  },
  {
    name: "子育て支援課",
    tel: "0439-88-1111（内線 241）",
    forms: [
      { no: "様式第30号", name: "保育所等 利用申込書", desc: "保育所・認定こども園・地域型保育事業の利用を申し込む書類です。在職証明書等の添付書類が必要です。", formats: ["PDF", "Word"], note: "押印不要", updated: "R8.4" },
      { no: "様式第31号", name: "児童手当 認定請求書", desc: "児童手当の新規認定を請求する書類です。出生・転入後15日以内に提出してください。", formats: ["PDF"], note: "押印不要", updated: "R6.10" },
      { no: "様式第32号", name: "子ども医療費助成 認定申請書", desc: "0歳〜高校3年生までの子どもの医療費助成を申請する書類です。", formats: ["PDF", "Word"], note: "押印不要", updated: "R7.4" },
      { no: "様式第33号", name: "放課後児童クラブ 入所申込書", desc: "学童保育（放課後児童クラブ）への入所を申し込む書類です。毎年度更新が必要です。", formats: ["PDF"], note: "押印不要", updated: "R8.1" },
    ],
  },
  {
    name: "建設課",
    tel: "0439-88-1111（内線 261）",
    forms: [
      { no: "様式第40号", name: "道路占用許可申請書", desc: "市道に工作物・物件・広告板等を設置する際の占用許可申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R4.4" },
      { no: "様式第41号", name: "道路掘削工事 施工承認申請書", desc: "市道の掘削を伴う工事（水道・下水道接続等）の施工承認申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R4.4" },
      { no: "様式第42号", name: "空き家情報バンク 登録申請書", desc: "空き家バンクへの物件登録（売却・賃貸）を申し込む書類です。", formats: ["PDF"], note: "押印必要", updated: "R5.10" },
    ],
  },
  {
    name: "農林課",
    tel: "0439-88-1111（内線 271）",
    forms: [
      { no: "様式第50号", name: "農地転用許可申請書（農地法第4条）", desc: "農地所有者が自らの農地を農地以外の目的に転用する場合の申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R4.4" },
      { no: "様式第51号", name: "農地転用許可申請書（農地法第5条）", desc: "農地を取得して農地以外の目的に転用する場合の申請書です。", formats: ["PDF", "Word"], note: "押印必要", updated: "R4.4" },
      { no: "様式第52号", name: "農業経営基盤強化準備金 申告書", desc: "農業経営基盤強化準備金制度を活用する際の申告書です。", formats: ["PDF"], note: "押印必要", updated: "R3.4" },
    ],
  },
];

const FORMAT_STYLE: Record<string, { bg: string; color: string }> = {
  PDF:  { bg: "#c0392b", color: "#fff" },
  Word: { bg: "#1a5276", color: "#fff" },
};

export default function ShinseiPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kurashi">くらし・手続き</a><span>›</span>
            <span>申請書類ダウンロード</span>
          </div>
          <h1 className="page-title">申請書類ダウンロード</h1>

          <div className="content-box" style={{ borderTop: "none", marginBottom: 18 }}>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 8px" }}>
              各種申請書類をダウンロードできます。PDFファイルの閲覧には
              <a href="https://get.adobe.com/jp/reader/" target="_blank" rel="noopener noreferrer">Adobe Acrobat Reader</a>
              （無料）が必要です。Wordファイルの編集にはMicrosoft Word互換ソフトが必要です。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: 0 }}>
              書類に不明点がある場合は、各担当課へお問い合わせください。
              <strong>押印が必要な書類は、印鑑をお持ちのうえ窓口へお越しください。</strong>
            </p>
          </div>

          {departments.map((dept) => (
            <div key={dept.name} style={{ marginBottom: 24 }}>
              <div className="section-title" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{dept.name}</span>
                <span style={{ fontSize: 11.5, fontWeight: "normal", color: "#cde" }}>
                  ☎ {dept.tel}
                </span>
              </div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
                  <thead>
                    <tr style={{ background: "#f5f7fa", borderBottom: "1px solid var(--border-light)" }}>
                      <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: "bold", color: "#555", width: "10%", whiteSpace: "nowrap" }}>様式番号</th>
                      <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: "bold", color: "#555", width: "28%" }}>書類名</th>
                      <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: "bold", color: "#555" }}>説明</th>
                      <th style={{ padding: "7px 12px", textAlign: "center", fontWeight: "bold", color: "#555", width: "10%", whiteSpace: "nowrap" }}>形式</th>
                      <th style={{ padding: "7px 12px", textAlign: "left", fontWeight: "bold", color: "#555", width: "14%", whiteSpace: "nowrap" }}>備考</th>
                      <th style={{ padding: "7px 12px", textAlign: "center", fontWeight: "bold", color: "#555", width: "8%", whiteSpace: "nowrap" }}>更新</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dept.forms.map((form, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid #eef1f6" }}>
                        <td style={{ padding: "9px 12px", color: "#888", fontSize: 11.5, whiteSpace: "nowrap" }}>{form.no}</td>
                        <td style={{ padding: "9px 12px" }}>
                          <strong style={{ color: "var(--link-color)", fontSize: 13 }}>{form.name}</strong>
                        </td>
                        <td style={{ padding: "9px 12px", color: "#555", lineHeight: 1.6 }}>{form.desc}</td>
                        <td style={{ padding: "9px 12px", textAlign: "center" }}>
                          <div style={{ display: "flex", gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
                            {form.formats.map(fmt => (
                              <a
                                key={fmt}
                                href={`/files/shinsei/${encodeURIComponent(form.no)}_${encodeURIComponent(form.name)}.${fmt === "PDF" ? "pdf" : "docx"}`}
                                style={{
                                  display: "inline-block",
                                  padding: "2px 8px",
                                  borderRadius: 3,
                                  fontSize: 11,
                                  fontWeight: "bold",
                                  background: FORMAT_STYLE[fmt].bg,
                                  color: FORMAT_STYLE[fmt].color,
                                  textDecoration: "none",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {fmt}
                              </a>
                            ))}
                          </div>
                        </td>
                        <td style={{ padding: "9px 12px", fontSize: 12, color: form.note.includes("必要") ? "#c0392b" : "#555" }}>
                          {form.note}
                        </td>
                        <td style={{ padding: "9px 12px", textAlign: "center", fontSize: 11.5, color: "#999", whiteSpace: "nowrap" }}>
                          {form.updated}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div className="content-box" style={{ borderTop: "3px solid var(--city-primary)", marginTop: 8 }}>
            <p style={{ fontSize: 12.5, color: "#555", lineHeight: 1.8, margin: 0 }}>
              ※ 書類は随時更新しています。古い様式は受付できない場合がありますので、必ず最新版をご使用ください。<br />
              ※ 郵送で申請できる手続きについては、各担当課にお問い合わせください。返信用封筒（切手貼付）が必要な場合があります。<br />
              ※ マイナポータルからオンライン申請が可能な手続きもあります。
              <a href="https://myna.go.jp/" target="_blank" rel="noopener noreferrer">マイナポータルはこちら</a>
            </p>
          </div>

          <PageInfo department="総務課" division="行政係" tel="0439-88-1111（内線 101）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
