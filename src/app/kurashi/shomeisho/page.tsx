import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "各種証明書の申請" };

const certs = [
  {
    name: "住民票の写し",
    fee: "1通 300円",
    notes: "マイナンバーカード利用のコンビニ交付は1通200円。世帯全員・一部・続柄省略など種類を指定してください。",
    where: "市民課窓口・コンビニ（マイナンバーカード要）・郵送",
  },
  {
    name: "印鑑登録証明書",
    fee: "1通 300円",
    notes: "印鑑登録カードまたはマイナンバーカードが必要です。登録していない方はまず印鑑登録の手続きが必要です。",
    where: "市民課窓口・コンビニ（マイナンバーカード要）",
  },
  {
    name: "戸籍謄本（全部事項証明）",
    fee: "1通 450円",
    notes: "本籍が日野原市の方のみ交付できます。本籍が他市区町村の方は当該市区町村へ請求してください。",
    where: "市民課窓口・郵送",
  },
  {
    name: "戸籍抄本（個人事項証明）",
    fee: "1通 450円",
    notes: "本籍が日野原市の方のみ。特定の方の事項のみを記載したものです。",
    where: "市民課窓口・郵送",
  },
  {
    name: "戸籍の附票",
    fee: "1通 300円",
    notes: "戸籍に記録されている方の住所の変遷を証明するものです。",
    where: "市民課窓口・郵送",
  },
  {
    name: "住民票記載事項証明書",
    fee: "1通 300円",
    notes: "会社・学校等の指定様式に記載して証明するものです。様式をご持参ください。",
    where: "市民課窓口",
  },
  {
    name: "課税（非課税）証明書",
    fee: "1通 300円",
    notes: "所得・課税額を証明します。1月1日現在の住所地の市区町村が発行します（当年1月1日に日野原市在住の方）。",
    where: "税務課窓口・郵送・コンビニ（マイナンバーカード要）",
  },
  {
    name: "納税証明書",
    fee: "1通 300円",
    notes: "市税の滞納がないことを証明します。軽自動車の車検などに必要な場合があります。",
    where: "税務課窓口・郵送",
  },
  {
    name: "固定資産評価証明書",
    fee: "1件 300円",
    notes: "土地・建物の評価額を証明します。登記手続きや相続などで必要になります（所有者または代理人が請求）。",
    where: "税務課窓口・郵送",
  },
];

const mailInfo = [
  { label: "必要書類", value: "①請求書（氏名・住所・生年月日・請求する証明書の種類と通数・使用目的）、②手数料（定額小為替）、③返信用封筒（84円切手貼付、住所氏名記入）、④本人確認書類のコピー（運転免許証など）" },
  { label: "送付先", value: "〒299-1401　千葉県日野原市中央一丁目1番地1号　日野原市役所 市民課 宛" },
  { label: "処理日数", value: "書類到着後3〜5開庁日で発送します（繁忙期は10日程度かかる場合があります）。" },
  { label: "注意事項", value: "定額小為替は郵便局で購入できます。現金・切手は同封しないでください。" },
];

export default function ShomeishoPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/kurashi">くらし・手続き</a> › 各種証明書の申請
          </nav>
          <h1 className="page-title">各種証明書の申請</h1>

          <div className="content-box">
            <h3>交付できる証明書・手数料一覧</h3>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: 160 }}>証明書の種類</th>
                  <th style={{ width: 100 }}>手数料</th>
                  <th>備考</th>
                  <th style={{ width: 200 }}>交付場所</th>
                </tr>
              </thead>
              <tbody>
                {certs.map((c, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: 600 }}>{c.name}</td>
                    <td>{c.fee}</td>
                    <td style={{ fontSize: 12.5 }}>{c.notes}</td>
                    <td style={{ fontSize: 12 }}>{c.where}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12.5, marginTop: 10 }}>
              ※本人（世帯員）以外の方が請求する場合は委任状が必要です。<br />
              ※マイナンバーが記載された住民票は取り扱いに注意が必要な場合があります。不要であればその旨お申し出ください。
            </p>
          </div>

          <div className="content-box">
            <h3>コンビニ交付（マイナンバーカードをお持ちの方）</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9 }}>
              マイナンバーカードをお持ちの方は、全国のコンビニエンスストア（セブンイレブン・ローソン・ファミリーマート・ミニストップ）のマルチコピー機から住民票・印鑑証明書・課税証明書を取得できます。
            </p>
            <table className="content-table">
              <tbody>
                <tr><th>利用時間</th><td>毎日 6:30〜23:00（年末年始を除く）</td></tr>
                <tr><th>手数料</th><td>1通 200円（窓口交付より100円安い）</td></tr>
                <tr><th>必要なもの</th><td>マイナンバーカード（利用者証明用電子証明書が有効なもの）・暗証番号（4桁）</td></tr>
                <tr><th>取得可能な証明書</th><td>住民票の写し・印鑑登録証明書・課税（非課税）証明書</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>郵送による請求</h3>
            <table className="content-table">
              <tbody>
                {mailInfo.map((r, i) => (
                  <tr key={i}>
                    <th>{r.label}</th>
                    <td style={{ fontSize: 13, lineHeight: 1.8 }}>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>窓口・お問い合わせ</h3>
            <table className="content-table">
              <tbody>
                <tr><th>市民課（住民票・戸籍・印鑑証明）</th><td>市役所1階　☎ 0100-88-1113（内線 212）</td></tr>
                <tr><th>税務課（課税・納税・固定資産証明）</th><td>市役所2階　☎ 0100-88-1116（内線 221）</td></tr>
                <tr><th>開庁時間</th><td>平日 8:30〜17:15 / 第2・第4土曜 8:30〜12:00（住民票・印鑑証明のみ）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo
            department="市民課"
            division="窓口班"
            tel="0100-88-1113（内線 212）"
            updated="令和7年4月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
