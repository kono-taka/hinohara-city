import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "個人情報保護方針" };

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><span>個人情報保護方針</span>
        </div>
        <h1 className="page-title">個人情報保護方針</h1>
        <div className="content-box">
          <p style={{ fontSize: 13, lineHeight: 1.9, marginBottom: 16 }}>
            日野原市（以下「本市」といいます。）は、個人情報の保護に関する法律（平成15年法律第57号）および日野原市個人情報保護条例に基づき、個人情報を適切に取り扱うことを宣言します。
          </p>
          {[
            {
              title: "1. 個人情報の収集",
              body: "本市は、行政事務の遂行に必要な範囲内で、適法かつ公正な手段により個人情報を収集します。収集に際しては、利用目的を明示し、必要最小限の情報のみを取得します。",
            },
            {
              title: "2. 個人情報の利用目的",
              body: "収集した個人情報は、収集した目的の範囲内でのみ利用します。目的外での利用は、法令に基づく場合または本人の同意がある場合を除き、行いません。",
            },
            {
              title: "3. 個人情報の第三者提供",
              body: "収集した個人情報は、法令に定める場合または本人の同意がある場合を除き、第三者に提供しません。",
            },
            {
              title: "4. 個人情報の安全管理",
              body: "収集した個人情報の漏洩、滅失、毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。個人情報の取り扱いを外部に委託する場合は、適切な監督を行います。",
            },
            {
              title: "5. 個人情報の開示・訂正・削除",
              body: "本人からの個人情報の開示・訂正・削除の請求については、日野原市個人情報保護条例の定めるところにより対応します。請求手続きの詳細については、総務課（情報公開担当）にお問い合わせください。",
            },
            {
              title: "6. ウェブサイトにおける個人情報の取り扱い",
              body: "本ウェブサイトでは、利用状況を把握するためにCookieおよびアクセス解析ツールを使用することがあります。これにより個人が特定される情報を収集することはありません。",
            },
            {
              title: "7. お問い合わせ",
              body: "個人情報の取り扱いに関するお問い合わせは、下記の担当部署にご連絡ください。\n\n日野原市役所 総務課 情報公開・個人情報保護担当\n電話：0100-88-1112\nメール：somu@city.hinohara.lg.jp",
            },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: "bold", color: "var(--city-blue)", borderBottom: "1px solid var(--border-light)", paddingBottom: 4, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.9, whiteSpace: "pre-line", margin: 0 }}>{item.body}</p>
            </div>
          ))}
          <p style={{ fontSize: 12, color: "#888", borderTop: "1px solid var(--border-light)", paddingTop: 12, marginTop: 8 }}>
            制定：平成18年（2006年）3月20日<br />
            最終改定：令和6年（2024年）4月1日
          </p>
        </div>
        <PageInfo department="総務課" division="個人情報保護係" tel="0100-88-1121（内線 201）" updated="令和5年4月1日" />
      </div>
      <SiteFooter />
    </>
  );
}
