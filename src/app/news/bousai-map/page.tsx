import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "日野原市ハザードマップ（改訂版）の全戸配布について",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>日野原市ハザードマップ（改訂版）の全戸配布について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月28日</span>
            <span>担当課：総務課防災係</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">日野原市ハザードマップ（改訂版）の全戸配布について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年5月、日野原市ハザードマップの改訂版を市内全戸に配布いたしました。令和4年度版からの主な変更点は以下のとおりです。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>主な変更点</h3>
            <ul style={{ paddingLeft: 20, margin: "4px 0" }}>
              <li>浸水想定区域の見直し（原野川・白嶺川沿い区間を追加指定）</li>
              <li>土砂災害警戒区域の追加（白嶺地区北部 3か所）</li>
              <li>避難場所・避難所情報の更新（南部小学校 体育館を追加）</li>
              <li>QRコードによる防災情報へのアクセス機能を追加</li>
            </ul>
            <p>
              改訂版のPDFデータは市公式ウェブサイトの「防災・安全」ページからダウンロードいただけます。お手元に届いていない場合や、追加配布が必要な場合は総務課防災係までご連絡ください。
            </p>
            <p>
              ハザードマップは、いざというときの避難行動を事前に確認するための重要な情報です。ご家族でお住まいの地域の危険箇所や避難経路を確認しておくことをお勧めします。
            </p>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>総務課防災係　☎ 0100-88-1112（平日 8:30〜17:15）</p>
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
