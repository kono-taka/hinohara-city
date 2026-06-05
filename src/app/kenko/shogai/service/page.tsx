import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "障害福祉サービスの利用申請" };

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
            <span>障害福祉サービスの利用申請</span>
          </div>
          <h1 className="page-title">障害福祉サービスの利用申請</h1>
          
          <div className="content-box">
            <h3>主なサービスの種類</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>居宅介護（ホームヘルプ）</th><td>自宅での身体介護・家事援助・通院介助</td></tr>
                <tr><th>重度訪問介護</th><td>重度の肢体不自由者への長時間の訪問介護</td></tr>
                <tr><th>同行援護・行動援護</th><td>視覚障害・行動障害のある方の外出支援</td></tr>
                <tr><th>就労継続支援A型</th><td>雇用契約を結んで就労トレーニング（最低賃金保障）</td></tr>
                <tr><th>就労継続支援B型</th><td>雇用契約なしの就労訓練・軽作業（工賃あり）</td></tr>
                <tr><th>生活介護</th><td>日中活動の場の提供・身体機能訓練</td></tr>
                <tr><th>短期入所（ショートステイ）</th><td>施設への一時入所（介護者の休息・緊急時対応）</td></tr>
                <tr><th>グループホーム（共同生活援助）</th><td>地域での共同生活のサポート</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>利用申請の流れ</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>① 申請</th><td>市役所1階 福祉課 障がい係（窓口または郵送）</td></tr>
                <tr><th>② 障害支援区分認定</th><td>認定調査員が訪問・コンピュータ判定・審査会での判定</td></tr>
                <tr><th>③ サービス等利用計画作成</th><td>相談支援事業所がサービスの計画を作成</td></tr>
                <tr><th>④ サービス利用開始</th><td>事業所との契約後、サービス開始</td></tr>
                <tr><th>利用者負担</th><td>原則1割。ただし所得に応じた月額上限あり（0〜37,200円）</td></tr>
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
