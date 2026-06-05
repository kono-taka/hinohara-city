"use client";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageInfo from "@/components/PageInfo";
import { useState } from "react";

const departments = [
  { name: "市民課（住民登録・戸籍・マイナンバー）", tel: "0100-88-1113", mail: "shimin@city.hinohara.lg.jp" },
  { name: "税務課（市税・固定資産税）", tel: "0100-88-1116", mail: "zeimu@city.hinohara.lg.jp" },
  { name: "福祉課（生活保護・障がい福祉・生活困窮）", tel: "0100-88-1120", mail: "fukushi@city.hinohara.lg.jp" },
  { name: "高齢者支援課（介護保険・高齢者支援）", tel: "0100-88-1121", mail: "koreisha@city.hinohara.lg.jp" },
  { name: "健康推進課（国民健康保険・予防接種・健診）", tel: "0100-88-1122", mail: "kenko@city.hinohara.lg.jp" },
  { name: "子育て支援課（保育所・児童手当）", tel: "0100-88-1123", mail: "kosodate@city.hinohara.lg.jp" },
  { name: "企画政策課（総合計画・広報・移住定住）", tel: "0100-88-1114", mail: "kikaku@city.hinohara.lg.jp" },
  { name: "財政課（予算・入札・契約）", tel: "0100-88-1117", mail: "zaisei@city.hinohara.lg.jp" },
  { name: "建設課（道路・河川・公共交通）", tel: "0100-88-1130", mail: "kensetsu@city.hinohara.lg.jp" },
  { name: "農林振興課（農林業・農地）", tel: "0100-88-1135", mail: "norin@city.hinohara.lg.jp" },
  { name: "環境対策課（ごみ・リサイクル・自然環境）", tel: "0100-88-1136", mail: "kankyo@city.hinohara.lg.jp" },
  { name: "学校教育課（小中学校・教育委員会）", tel: "0100-88-1140", mail: "gakko@city.hinohara.lg.jp" },
  { name: "生涯学習課（図書館・文化・スポーツ）", tel: "0100-88-1141", mail: "shogai@city.hinohara.lg.jp" },
  { name: "観光振興課（観光・イベント）", tel: "0100-88-1138", mail: "kanko@city.hinohara.lg.jp" },
];

export default function InquiryPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [content, setContent] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setError("お名前を入力してください。"); return; }
    if (!email.trim()) { setError("メールアドレスを入力してください。"); return; }
    if (!content.trim()) { setError("お問い合わせ内容を入力してください。"); return; }
    setError("");
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><span>お問い合わせ</span>
        </div>
        <h1 className="page-title">お問い合わせ</h1>

        {/* 代表電話 */}
        <div className="content-box">
          <h3>市役所 代表電話・FAX</h3>
          <table className="content-table">
            <tbody>
              <tr><th>代表電話</th><td>0100-88-1111（平日 午前8時30分〜午後5時15分）</td></tr>
              <tr><th>代表FAX</th><td>0100-88-1119</td></tr>
              <tr><th>代表メール</th><td>info@city.hinohara.lg.jp</td></tr>
              <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央一丁目1番地1号</td></tr>
              <tr><th>休日・時間外</th><td>土日祝・年末年始（12月29日〜1月3日）はお問い合わせに対応できない場合があります。緊急の場合は千葉県庁代表（043-223-2110）へ。</td></tr>
            </tbody>
          </table>
        </div>

        {/* 担当課一覧 */}
        <div className="content-box">
          <h3>担当課一覧</h3>
          <table className="content-table">
            <thead>
              <tr><th>担当課・内容</th><th>電話番号</th><th>メールアドレス</th></tr>
            </thead>
            <tbody>
              {departments.map((d, i) => (
                <tr key={i}>
                  <td style={{ fontSize: 13 }}>{d.name}</td>
                  <td style={{ fontSize: 13, whiteSpace: "nowrap" }}>{d.tel}</td>
                  <td style={{ fontSize: 13 }}><a href={`mailto:${d.mail}`}>{d.mail}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* フォーム or 完了 */}
        <div className="content-box">
          <h3>ウェブフォームからのお問い合わせ</h3>

          {submitted ? (
            <div style={{ background: "#e8f5e9", border: "1px solid #66bb6a", borderRadius: 4, padding: "24px 20px", textAlign: "center" }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>✅</div>
              <div style={{ fontSize: 16, fontWeight: "bold", color: "#2e7d32", marginBottom: 8 }}>
                お問い合わせを受け付けました
              </div>
              <p style={{ fontSize: 13, lineHeight: 1.9, color: "#333", margin: "0 0 16px" }}>
                お送りいただいた内容を確認のうえ、担当者よりご連絡いたします。<br />
                お時間をいただく場合がございます（概ね5営業日以内）。<br />
                緊急の場合はお電話（0100-88-1111）でお問い合わせください。
              </p>
              <a href="/" style={{ display: "inline-block", background: "var(--city-primary)", color: "#fff", padding: "8px 24px", fontSize: 13, borderRadius: 2, fontWeight: "bold" }}>
                トップページへ戻る
              </a>
            </div>
          ) : (
            <>
              <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 12px" }}>
                下記のフォームからお問い合わせいただけます。回答にはお時間をいただく場合がございます（概ね5営業日以内）。
                なお、電話・来庁でのご相談も随時受け付けております。
              </p>
              {error && (
                <div style={{ background: "#fff3cd", border: "1px solid #ffc107", padding: "8px 12px", fontSize: 13, marginBottom: 10, color: "#856404", borderRadius: 2 }}>
                  ⚠ {error}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div style={{ background: "#f4f6fb", border: "1px solid var(--border-light)", padding: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { label: "お名前 *", type: "text", placeholder: "例：日野原 太郎", value: name, setter: setName },
                      { label: "メールアドレス *", type: "email", placeholder: "例：taro@example.com", value: email, setter: setEmail },
                      { label: "電話番号", type: "tel", placeholder: "例：0100-XX-XXXX", value: tel, setter: setTel },
                    ].map((f) => (
                      <div key={f.label} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <label style={{ fontSize: 12, fontWeight: "bold", width: 150, flexShrink: 0 }}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={f.value}
                          onChange={e => f.setter(e.target.value)}
                          style={{ flex: 1, padding: "5px 8px", fontSize: 13, border: "1px solid #c8d4e8", fontFamily: "inherit" }}
                        />
                      </div>
                    ))}
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <label style={{ fontSize: 12, fontWeight: "bold", width: 150, flexShrink: 0, paddingTop: 4 }}>お問い合わせ内容 *</label>
                      <textarea
                        rows={5}
                        placeholder="お問い合わせの内容をご入力ください"
                        value={content}
                        onChange={e => setContent(e.target.value)}
                        style={{ flex: 1, padding: "5px 8px", fontSize: 13, border: "1px solid #c8d4e8", fontFamily: "inherit", resize: "vertical" }}
                      />
                    </div>
                    <div style={{ textAlign: "center", marginTop: 4 }}>
                      <button type="submit" style={{ background: "var(--city-blue)", color: "#fff", border: "none", padding: "10px 40px", fontSize: 13, fontWeight: "bold", fontFamily: "inherit", cursor: "pointer", borderRadius: 2 }}>
                        送信する
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <p style={{ fontSize: 11, color: "#888", marginTop: 8 }}>
                ※ * は必須項目です。<br />
                ※個人情報は、お問い合わせへの回答のみに使用し、第三者への提供は行いません。<br />
                ※緊急を要する内容（防災・医療等）は、必ず電話でお問い合わせください。
              </p>
            </>
          )}
        </div>
        <PageInfo department="総務課" division="広聴係" tel="0100-88-1121（内線 121）" updated="令和5年4月1日" />
      </div>
      <SiteFooter />
    </>
  );
}
