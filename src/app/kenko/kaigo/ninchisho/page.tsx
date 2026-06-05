import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "認知症に関する支援・相談" };

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
            <span>認知症に関する支援・相談</span>
          </div>
          <h1 className="page-title">認知症に関する支援・相談</h1>
          
          <div className="content-box">
            <h3>認知症の早期対応</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>認知症初期集中支援チーム</th><td>医療・介護の専門家がチームを組み、早期に関わり支援を開始します</td></tr>
                <tr><th>認知症地域支援推進員</th><td>市内に2名配置。地域の相談窓口として連携支援を行います</td></tr>
                <tr><th>かかりつけ医への相談</th><td>まずはかかりつけ医にご相談ください。専門医への紹介も可能です</td></tr>
              </tbody>
            </table>
          </div>
          <div className="content-box">
            <h3>支援サービス</h3>
            <table className="content-table">
              
              <tbody>
                <tr><th>認知症カフェ（オレンジカフェひのはら）</th><td>毎月第2・第4水曜 午後1時30分〜（市民文化センター1階）当事者・家族・地域住民が参加できるカフェ</td></tr>
                <tr><th>認知症サポーター養成講座</th><td>企業・学校・地域団体を対象に出前開催。受講者にはオレンジリングを贈呈。</td></tr>
                <tr><th>家族介護者のつどい</th><td>月1回（要連絡）介護する家族同士の交流・情報交換の場</td></tr>
                <tr><th>行方不明SOS情報共有</th><td>認知症による行方不明が心配な方は事前登録制度（☎ 0100-88-1121）をご利用ください</td></tr>
              </tbody>
            </table>
          </div>
          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong>　高齢者支援課　☎ 0100-88-1121
          </div>
          <PageInfo department="介護保険課" division="地域支援係" tel="0100-88-1162（内線 164）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
