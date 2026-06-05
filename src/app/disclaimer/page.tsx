import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "免責事項" };

export default function DisclaimerPage() {
  return (
    <>
      <SiteHeader current="/" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>免責事項</span>
          </div>
          <h1 className="page-title">免責事項</h1>

          <div className="content-box">
            <h2 className="section-title">情報の正確性・最新性について</h2>
            <p>日野原市公式ウェブサイト（以下「本サイト」）に掲載する情報の正確性・完全性・最新性には万全を期しておりますが、<strong>その内容を保証するものではありません</strong>。本サイトの情報に基づいて生じた損害・損失について、本市は一切の責任を負いかねます。</p>
            <p>制度・手続き・各種数値等は随時変更される場合があります。最新の情報は担当窓口に直接お問い合わせいただくか、本サイトの更新日をご確認ください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">外部リンク先への責任不負担</h2>
            <p>本サイトには国・県・外部機関等の他のウェブサイトへのリンクが含まれる場合があります。リンク先のウェブサイトのコンテンツ・運営・個人情報の管理等については本市の責任が及ばず、<strong>一切の責任を負いません</strong>。リンク先のサービスをご利用の際は、各サイトのプライバシーポリシーおよび利用規約をご確認ください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">システム障害・サービス中断の免責</h2>
            <p>本サイトは、メンテナンス・障害・天災・通信障害・その他やむを得ない事由により、予告なくサービスを一時停止または終了する場合があります。これにより利用者に生じた損害について、<strong>本市は一切の責任を負いません</strong>。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>コンピューターウイルス等による損害</li>
              <li>通信回線の障害による損害</li>
              <li>利用環境（OS・ブラウザ・設定等）に起因する表示の不具合や損害</li>
              <li>本サイトへのアクセス不能・コンテンツの変更・削除等により生じた損害</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">推奨環境について</h2>
            <p style={{ fontSize: 13, lineHeight: 1.7 }}>本サイトは最新バージョンのGoogle Chrome・Microsoft Edge・Safari・Firefoxでの閲覧を推奨しています。古いブラウザや非推奨環境では、一部のコンテンツが正常に表示されない場合があります。</p>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>総務課 広報情報係</td></tr>
                <tr><th>電話</th><td>☎0100-88-1113</td></tr>
                <tr><th>メール</th><td>somu@city.hinohara.lg.jp</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="総務課" tel="0100-88-1121（内線 121）" updated="令和元年5月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
