import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "高齢者見守りネットワーク" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/kaigo">介護保険</a><span>›</span>
            <span>高齢者見守りネットワーク</span>
          </div>
          <h1 className="page-title">高齢者見守りネットワーク</h1>
          
          <div className="content-box">
            <h3>ひのはら高齢者見守りネットワーク</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>目的</th><td>一人暮らし・高齢者世帯の孤立防止と異変の早期発見・対応</td></tr>
                <tr><th>構成員</th><td>民生委員・児童委員、町内会、郵便局、宅配事業者、新聞販売店、ガス・電力会社など</td></tr>
                <tr><th>見守りの方法</th><td>日常的なあいさつ・声かけ・配達時の観察等を通じた緩やかな見守り</td></tr>
                <tr><th>異変を発見したら</th><td>地域包括支援センター（中央☎ 0439-88-6500）または市役所高齢者支援課へ連絡</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>緊急通報システム（貸出サービス）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>65歳以上の一人暮らし高齢者または高齢者のみ世帯で、緊急時の連絡が困難な方</td></tr>
                <tr><th>機器</th><td>ペンダント型緊急通報装置・火災報知器・人感センサー</td></tr>
                <tr><th>費用</th><td>住民税非課税世帯：無料　住民税課税世帯：月額500円</td></tr>
                <tr><th>申込</th><td>高齢者支援課または地域包括支援センターへ</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　高齢者支援課　☎ 0439-88-1121
          </div>
          <PageInfo department="介護保険課" division="地域支援係" tel="0439-88-1162（内線 164）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
