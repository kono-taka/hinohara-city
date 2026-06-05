import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市長室", description: "日野原市長 宮本誠二郎のプロフィール、市長メッセージ、略歴をご紹介します。" };

export default function MayorPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>市長室</span>
          </div>
          <h1 className="page-title">市長室</h1>

          <div className="mayor-section">
            <div className="mayor-photo" style={{ background: "none", border: "none", padding: 0, overflow: "hidden" }}>
              <Image src="/mayor.jpg" alt="日野原市長 宮本誠二郎" width={400} height={320} style={{ objectFit: "cover", width: "120px", height: "160px" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 4 }}>日野原市長</div>
              <div style={{ fontSize: 20, fontWeight: "bold", color: "var(--city-blue)", marginBottom: 2 }}>宮本 誠二郎</div>
              <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>（みやもと せいじろう）</div>
              <table className="content-table" style={{ marginBottom: 12 }}>
                <tbody>
                  <tr><th>生年月日</th><td>昭和44年（1969年）8月12日</td></tr>
                  <tr><th>出身地</th><td>千葉県日野郡 日野町（現 日野原市中央地区）</td></tr>
                  <tr><th>学歴</th><td>千葉大学法経学部 卒業（平成4年）</td></tr>
                  <tr><th>就任</th><td>令和5年4月27日（2期目）</td></tr>
                  <tr><th>任期</th><td>令和5年4月27日〜令和9年4月26日</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-title">市長メッセージ</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <div className="mayor-message">
              <p>
                市民の皆様、そして日野原市にご縁のある皆様へ。
              </p>
              <p>
                日野原市は、令和8年（2026年）3月に市制施行20周年という大きな節目を迎えました。平成18年3月に旧日野町、原野村、白嶺村の三町村が合併してスタートしたこのまちが、地域の皆様の温かいご支援によって着実に歩みを続けてきたことに、市長として深く感謝申し上げます。
              </p>
              <p>
                私たちのまちは、標高800メートルを超える山間の豊かな自然環境の中にあります。日野原丘陵の緑豊かな山並み、原野川の清らかな流れ、そして白嶺高原に広がるブナの原生林。これらは、私たちの誇りであると同時に、次の世代へと引き継いでいかなければならない大切な財産です。
              </p>
              <p>
                一方で、人口減少や少子高齢化といった課題は、本市においても例外なく進行しています。令和8年5月現在、総人口は35,200人。20年前の合併時に比べ、約16,300人の減少となっています。この流れを受け止めながら、しかし悲観することなく、小さくとも活力あるまちづくりを進めることが今の私たちの使命だと考えています。
              </p>
              <p>
                第3次日野原市総合計画では、「山と水と人が輝く　みんなのふるさと ひのはら」を将来像に掲げています。この言葉には、自然の恵みと人のつながりを大切にしながら、すべての市民が生きがいを持って暮らせるまちを目指すという、私たちの思いが込められています。
              </p>
              <p>
                移住・定住の促進、子育て環境の充実、農林業の振興、デジタル化による行政サービスの向上など、さまざまな施策を精力的に推進してまいります。引き続き、皆様のご理解とご協力を賜りますよう、心よりお願い申し上げます。
              </p>
            </div>
            <div className="mayor-name">日野原市長　宮本 誠二郎</div>
          </div>

          <div className="section-title">市長の略歴</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <tbody>
                <tr><th>平成4年3月</th><td>千葉大学法経学部 卒業</td></tr>
                <tr><th>平成4年4月</th><td>千葉県庁 入庁（企画振興部配属）</td></tr>
                <tr><th>平成16年4月</th><td>千葉県 君津地域振興事務所 地域振興課長</td></tr>
                <tr><th>平成18年3月</th><td>千葉県庁 退職</td></tr>
                <tr><th>平成18年4月</th><td>日野原市役所 入庁（企画政策課長）</td></tr>
                <tr><th>平成22年4月</th><td>日野原市役所 総務部長</td></tr>
                <tr><th>平成26年4月</th><td>日野原市役所 副市長</td></tr>
                <tr><th>令和元年4月</th><td>日野原市長 初当選（1期目）</td></tr>
                <tr><th>令和5年4月</th><td>日野原市長 再選（2期目・現職）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="秘書広報課" division="秘書係" tel="0100-88-1102（内線 102）" updated="令和8年1月15日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
