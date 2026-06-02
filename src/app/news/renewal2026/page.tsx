import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "日野原市公式ホームページをリニューアルしました" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>ホームページリニューアルのお知らせ</span>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8, fontSize: 12, color: "var(--text-muted)" }}>
            <span>発信日：2026年6月1日</span>
            <span>｜</span>
            <span>担当：企画政策課 広報広聴係</span>
            <span className="news-tag info" style={{ marginLeft: 4 }}>お知らせ</span>
          </div>

          <h1 className="page-title">日野原市公式ホームページをリニューアルしました</h1>

          <div className="content-box">
            <p style={{ fontSize: 14, lineHeight: 1.9, margin: "0 0 16px" }}>
              令和8年（2026年）6月1日、日野原市公式ホームページをリニューアルいたしました。
              市民の皆様により使いやすく、見やすいホームページを目指し、デザインと機能の両面で大幅な改善を行いました。
            </p>

            <h3>主な変更点</h3>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>デザインの刷新</th>
                  <td>
                    読みやすさと使いやすさを重視した新デザインに変更しました。文字サイズを大きくし（15px基準）、
                    余白を適切に設けることで、特に高齢の方やスマートフォン利用者の方にとって見やすいデザインとなっています。
                  </td>
                </tr>
                <tr>
                  <th>コンテンツの充実</th>
                  <td>
                    「くらし・手続き」「健康・福祉」「教育・文化」など各カテゴリのページを大幅に拡充しました。
                    各種手続きの詳細・必要書類・費用等をより具体的に掲載しています。
                  </td>
                </tr>
                <tr>
                  <th>施設・学校情報</th>
                  <td>
                    市内の全公共施設・市立小中学校の個別ページを新設しました。
                    施設の利用料金・予約方法・アクセスなどを詳しく掲載しています。
                  </td>
                </tr>
                <tr>
                  <th>ふるさと納税</th>
                  <td>
                    ふるさと納税のお礼の品ページを充実させ、各返礼品の詳細情報を掲載しました。
                  </td>
                </tr>
                <tr>
                  <th>アクセシビリティ対応</th>
                  <td>
                    文字サイズの変更・ふりがな表示・多言語表示（英語・中国語・韓国語）機能を継続して提供しています。
                    スクリーンリーダーへの対応も引き続き行っています。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>ホームページのリニューアル履歴</h3>
            <table className="content-table">
              <thead>
                <tr><th>時期</th><th>内容</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>令和8年6月（今回）</td>
                  <td>全面デザインリニューアル。コンテンツ大幅拡充。施設・学校個別ページ新設。レスポンシブ対応強化。</td>
                </tr>
                <tr>
                  <td>令和5年4月</td>
                  <td>スマートフォン対応強化。マイナンバーカード関連情報を拡充。ふるさと納税ページを全面改訂。</td>
                </tr>
                <tr>
                  <td>令和3年10月</td>
                  <td>新型コロナウイルス関連情報専用ページの設置。ウェブ申請フォームの追加。</td>
                </tr>
                <tr>
                  <td>令和元年10月</td>
                  <td>CMS（コンテンツ管理システム）の更新。アクセシビリティ対応強化。SSL対応（https化）。</td>
                </tr>
                <tr>
                  <td>平成28年4月</td>
                  <td>スマートフォン・タブレット対応（レスポンシブデザイン）導入。</td>
                </tr>
                <tr>
                  <td>平成23年7月</td>
                  <td>ホームページ全面リニューアル。ウェブアクセシビリティ方針の策定。</td>
                </tr>
                <tr>
                  <td>平成18年3月</td>
                  <td>日野原市公式ホームページ開設（市制施行と同時）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>お気づきの点は</h3>
            <p style={{ fontSize: 13.5, lineHeight: 1.9, margin: 0 }}>
              リニューアル後のホームページに関するご意見・ご感想、掲載内容に関するお気づきの点がございましたら、
              下記担当窓口までお知らせください。皆様のご意見を参考に、さらなるサービス向上に努めてまいります。
            </p>
          </div>

          <div style={{ padding: 14, background: "var(--bg-section)", border: "1px solid var(--border-light)", fontSize: 12.5, lineHeight: 1.9, borderRadius: "0 0 var(--radius-sm) var(--radius-sm)" }}>
            <strong>お問い合わせ</strong><br />
            日野原市役所 企画政策課 広報広聴係<br />
            ☎ 0439-88-1115　メール：koho@city.hinohara.lg.jp
          </div>
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
