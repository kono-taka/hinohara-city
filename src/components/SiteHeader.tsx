"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "市政情報", ruby: "しせいじょうほう", href: "/shisei" },
  { label: "くらし・手続き", ruby: "くらし・てつづき", href: "/kurashi" },
  { label: "健康・福祉", ruby: "けんこう・ふくし", href: "/kenko" },
  { label: "教育・文化", ruby: "きょういく・ぶんか", href: "/kyoiku" },
  { label: "産業・環境", ruby: "さんぎょう・かんきょう", href: "/sangyo" },
  { label: "施設案内", ruby: "しせつあんない", href: "/shisetsu" },
  { label: "観光・移住", ruby: "かんこう・いじゅう", href: "/kanko" },
];

type FontSize = "normal" | "large" | "xlarge";
type AlertLevel = "emergency" | "important" | "info";

const ALERTS: { id: string; level: AlertLevel; text: string; href?: string }[] = [
  {
    id: "maintenance-r8-06-07",
    level: "info",
    text: "6月7日（日）午前0時〜5時 システムメンテナンスのため電子申請サービスをご利用いただけません。",
  },
  {
    id: "kenko-kenshin-r8",
    level: "important",
    text: "令和8年度 特定健康診査（メタボ健診）の受診券を7月下旬に発送します。",
    href: "/kenko/kenshin",
  },
];

const ALERT_LABELS: Record<AlertLevel, string> = {
  emergency: "緊急",
  important: "重要",
  info: "お知らせ",
};

export default function SiteHeader({ current }: { current?: string }) {
  const pathname = usePathname();
  const [fontSize, setFontSize] = useState<FontSize>("normal");
  const [furigana, setFurigana] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      window.open(`https://www.google.com/search?q=site%3Acity.hinohara.lg.jp+${encodeURIComponent(q)}`, "_blank");
    }
  };

  // 初期化：localStorageから復元
  useEffect(() => {
    const fs = localStorage.getItem("hc-fontsize") as FontSize | null;
    const fg = localStorage.getItem("hc-furigana") === "1";
    if (fs) setFontSize(fs);
    if (fg) setFurigana(true);
  }, []);

  // アラートdismiss状態管理：TOPページでリセット、それ以外はsessionStorage維持
  useEffect(() => {
    if (pathname === "/") {
      sessionStorage.removeItem("hc-dismissed-alerts");
      setDismissedAlerts([]);
    } else {
      const da: string[] = JSON.parse(sessionStorage.getItem("hc-dismissed-alerts") ?? "[]");
      setDismissedAlerts(da);
    }
  }, [pathname]);

  const dismissAlert = useCallback((id: string) => {
    setDismissedAlerts(prev => {
      const next = [...prev, id];
      sessionStorage.setItem("hc-dismissed-alerts", JSON.stringify(next));
      return next;
    });
  }, []);

  // フォントサイズ変更
  useEffect(() => {
    const html = document.documentElement;
    html.removeAttribute("data-fs");
    if (fontSize !== "normal") html.setAttribute("data-fs", fontSize);
    localStorage.setItem("hc-fontsize", fontSize);
  }, [fontSize]);

  // ふりがなトグル
  useEffect(() => {
    const html = document.documentElement;
    if (furigana) html.setAttribute("data-fg", "1");
    else html.removeAttribute("data-fg");
    localStorage.setItem("hc-furigana", furigana ? "1" : "0");
  }, [furigana]);

  const changeFontSize = useCallback((dir: "up" | "down" | "reset") => {
    setFontSize(prev => {
      if (dir === "up") return prev === "normal" ? "large" : prev === "large" ? "xlarge" : "xlarge";
      if (dir === "down") return prev === "xlarge" ? "large" : prev === "large" ? "normal" : "normal";
      return "normal";
    });
  }, []);

  // 翻訳（Google翻訳）
  const translate = useCallback((lang: string) => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://translate.google.com/translate?sl=ja&tl=${lang}&u=${url}`, "_blank");
  }, []);

  return (
    <header className="site-header">
      <div className="header-top">
        <span className="header-welcome">日野原市へようこそ</span>
        <span className="header-catchcopy">日々に、まなざしを。日野原市</span>
        <div className="header-top-links">
          <a href="/sitemap">サイトマップ</a>
          <a href="/inquiry">お問い合わせ</a>
          <a href="/accessibility">アクセシビリティ</a>
          <a href="/privacy">個人情報保護</a>
          <a href="/links">リンク集</a>
        </div>
      </div>
      <div className="header-main">
        <Link href="/" className="city-logo">
          <Image
            src="/images/emblem/emblem_copy.png"
            alt="日野原市 日々に、まなざしを。"
            width={2172}
            height={724}
            className="city-logo-img"
            priority
          />
        </Link>
        <div className="header-right">
          <form className="header-search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="キーワードを入力"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="submit">検索</button>
          </form>
          <div className="header-accessibility">
            <button
              onClick={() => changeFontSize("up")}
              className={fontSize === "xlarge" ? "acc-active" : ""}
              title="文字を大きくする"
            >文字を大きく</button>
            <button
              onClick={() => changeFontSize("down")}
              className={fontSize === "normal" ? "acc-active" : ""}
              title="文字を小さくする"
            >文字を小さく</button>
            <button
              onClick={() => setFurigana(f => !f)}
              className={furigana ? "acc-active" : ""}
              title="ふりがなの表示切替"
            >ふりがな</button>
            <button onClick={() => translate("en")} title="English (Google翻訳)">English</button>
            <button onClick={() => translate("zh-CN")} title="中文 (Google翻訳)">中文</button>
            <button onClick={() => translate("ko")} title="한국어 (Google翻訳)">한국어</button>
          </div>
        </div>
        {/* モバイル用ハンバーガーボタン */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
        >
          <span className={`hamburger-icon${menuOpen ? " open" : ""}`} />
        </button>
      </div>
      <nav className={`global-nav${menuOpen ? " mobile-open" : ""}`}>
        <div className="global-nav-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={current === item.href ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {furigana ? (
                <ruby>{item.label}<rt>{item.ruby}</rt></ruby>
              ) : item.label}
            </Link>
          ))}
        </div>
      </nav>
      {/* アラートバー */}
      {ALERTS.filter(a => !dismissedAlerts.includes(a.id)).map(alert => (
        <div key={alert.id} className={`alert-bar alert-bar-${alert.level}`}>
          <span className="alert-bar-badge">{ALERT_LABELS[alert.level]}</span>
          <span className="alert-bar-body">
            {alert.text}
            {alert.href && (
              <a href={alert.href} className="alert-bar-link">▶ 詳しくはこちら</a>
            )}
          </span>
          <button
            className="alert-bar-close"
            onClick={() => dismissAlert(alert.id)}
            aria-label="この通知を閉じる"
          >×</button>
        </div>
      ))}

      {/* モバイルメニューオーバーレイ */}
      {menuOpen && (
        <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
