import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "移動支援・日中一時支援" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <a href="/kenko/shogai">障がい福祉</a><span>›</span>
            <span>移動支援・日中一時支援</span>
          </div>
          <h1 className="page-title">移動支援・日中一時支援</h1>
          
          <div className="content-box">
            <h3>移動支援事業（地域生活支援事業）</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>屋外での移動が困難な障がいのある方（視覚・全身性・知的・精神）</td></tr>
                <tr><th>内容</th><td>外出時の移動の介護・同行援護（主に視覚障害）</td></tr>
                <tr><th>利用時間</th><td>個人ごとに支給量を決定（月10〜40時間程度）</td></tr>
                <tr><th>利用者負担</th><td>1割負担（低所得者は無料）</td></tr>
                <tr><th>申請方法</th><td>市役所1階 福祉課に申請・支給決定後に事業所と契約</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>日中一時支援事業</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>対象</th><td>介護者の仕事・病気・冠婚葬祭などにより一時的に支援が必要な障がいのある方</td></tr>
                <tr><th>内容</th><td>事業所での日中活動の場の提供（入浴・食事・創作活動等）</td></tr>
                <tr><th>利用日数</th><td>月24日以内（状況により変更あり）</td></tr>
                <tr><th>費用</th><td>1回 500円〜1,000円（食事代別途）</td></tr>
                <tr><th>登録事業所</th><td>市内5か所・近隣市4か所（福祉課窓口にて一覧を配布）</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　福祉課　☎ 0100-88-1120
          </div>
          <PageInfo department="福祉課" division="障がい福祉係" tel="0100-88-1161（内線 161）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
