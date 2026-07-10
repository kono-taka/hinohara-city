import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 市民税・県民税（普通徴収）第1期 納期限のご案内",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>令和8年度 市民税・県民税（普通徴収）第1期 納期限のご案内</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年7月10日</span>
            <span>担当課：税務課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 市民税・県民税（普通徴収）第1期 納期限のご案内</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度 市民税・県民税（普通徴収）の第1期 納期限が近づいております。お手元の納税通知書をご確認のうえ、期限内にお納めくださいますようお願いいたします。
            </p>

            <div style={{ background: "#fff3f0", border: "1px solid #f0b8a8", padding: "12px 16px", borderRadius: 3, marginBottom: 16 }}>
              <strong style={{ fontSize: 14 }}>第1期 納期限：令和8年7月31日（金）</strong><br />
              <span style={{ fontSize: 12, color: "#666" }}>※金融機関の窓口・ATMでお支払いいただく場合は、営業時間内にお手続きください。</span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付期限一覧（全4期）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "center", width: "15%" }}>期</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>納期限</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["第1期", "令和8年7月31日（金）"],
                  ["第2期", "令和8年9月30日（火）"],
                  ["第3期", "令和8年11月28日（金）"],
                  ["第4期", "令和9年2月27日（金）"],
                ].map(([kigo, date]) => (
                  <tr key={kigo}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "center", fontWeight: "bold", background: kigo === "第1期" ? "#fffbf0" : undefined }}>{kigo}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: kigo === "第1期" ? "bold" : undefined }}>{date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※各期の納期限が金融機関の休業日にあたる場合は、翌営業日が納期限となります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>主な納付方法</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li><strong>金融機関窓口・ATM：</strong>お手元の納税通知書（バーコード付き）をご持参ください。千葉銀行・京葉銀行・郵便局・ゆうちょ銀行・農協（JAちば東葛）などでお取り扱いいただけます。</li>
              <li><strong>コンビニエンスストア：</strong>バーコードが印刷された納付書（1件あたり30万円未満）はコンビニ各店でも納付できます。</li>
              <li><strong>スマートフォン決済（PayPay / LINE Pay）：</strong>納付書のバーコードをスキャンしてお支払いいただけます。</li>
              <li><strong>地方税共通納税システム（eLTAX）：</strong>eLTAXポータルサイトからインターネットバンキングまたはクレジットカードでお支払いいただけます（システム利用手数料は無料。クレジットカードは所定の手数料がかかります）。</li>
              <li><strong>市役所窓口：</strong>税務課窓口（市役所1階）では、現金でのお支払いを受け付けています。窓口取扱時間は平日 8:30〜17:15 です。</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>口座振替をご利用の方へ</h3>
            <p>
              口座振替をご登録の方は、令和8年7月31日（金）に登録口座から自動引き落としされます。前日までに残高をご確認ください。引き落としができなかった場合は、改めて督促状を送付いたします。
            </p>
            <p>
              口座振替のご登録は、市役所税務課窓口または市内の取扱金融機関窓口で受け付けています。通帳・口座届出印・納税通知書をお持ちの上、お手続きください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>納付が困難な場合</h3>
            <p>
              失業・病気・災害などのやむを得ない事情により、納期限内の納付が困難な場合は、期限前に税務課（収税係）までご相談ください。猶予制度や分割納付に関してご案内いたします。なお、期限を過ぎると延滞金が発生しますので、お早めにご連絡くださいますようお願いいたします。
            </p>

            <div style={{ background: "#f0f7f0", border: "1px solid #a8cca8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>【納税通知書を紛失された方】</strong><br />
              納税通知書を紛失された場合は、税務課窓口にて再発行のご案内をいたします。本人確認書類（マイナンバーカード・運転免許証等）をお持ちの上、窓口へお越しください。
            </div>
          </div>

          <PageInfo department="税務課" division="収税係" tel="0439-88-1212（内線 212）" updated="令和8年7月10日" />
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <a href="/news" style={{ fontSize: 13, color: "var(--link-color)" }}>← お知らせ・新着情報 一覧に戻る</a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
