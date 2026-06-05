import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "アクセシビリティ方針" };

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><span>アクセシビリティ方針</span>
        </div>
        <h1 className="page-title">アクセシビリティ方針</h1>
        <div className="content-box">
          <p style={{ fontSize: 13, lineHeight: 1.9, marginBottom: 16 }}>
            日野原市公式ウェブサイトは、高齢の方・障がいのある方を含むすべての方が支障なく情報を利用できるよう、ウェブアクセシビリティの向上に取り組んでいます。
          </p>
          {[
            { title: "対象規格", body: "日本工業規格「JIS X 8341-3:2016」（高齢者・障害者等配慮設計指針 – 情報通信における機器、ソフトウェア及びサービス – 第3部：ウェブコンテンツ）に基づき、ウェブアクセシビリティの確保・向上を目指しています。" },
            { title: "対応方針", body: "本ウェブサイトは、JIS X 8341-3:2016の適合レベルAAへの準拠を目指しています。ただし、現時点ではすべてのページが完全に基準を満たしているわけではありません。今後も継続的に改善を進めてまいります。" },
            { title: "文字サイズの変更", body: "ヘッダー右上の「文字を大きく」「文字を小さく」ボタンから、サイト内の文字サイズを変更できます。また、各ブラウザの機能でも文字サイズの変更が可能です。" },
            { title: "色・コントラスト", body: "文字と背景のコントラスト比が4.5:1以上になるよう配慮しています。" },
            { title: "PDFファイルについて", body: "一部のページではPDFファイルを提供しています。PDFファイルをご覧いただくには、Adobe Acrobat Reader（無料）が必要です。PDFの内容をテキストでご希望の場合は担当課までお問い合わせください。" },
            { title: "ご意見・お問い合わせ", body: "本ウェブサイトのアクセシビリティに関するお気づきの点がございましたら、下記担当課までお知らせください。\n\n日野原市役所 企画政策課 広報広聴係\n電話：0100-88-1115\nメール：koho@city.hinohara.lg.jp" },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: "bold", color: "var(--city-blue)", borderBottom: "1px solid var(--border-light)", paddingBottom: 4, marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.9, whiteSpace: "pre-line", margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
        <PageInfo department="情報管理課" tel="0100-88-1132（内線 132）" updated="令和3年6月30日" />
      </div>
      <SiteFooter />
    </>
  );
}
