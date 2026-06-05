import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "リンク集" };

const linkGroups = [
  {
    title: "千葉県・国の機関",
    links: [
      { label: "千葉県庁", url: "https://www.pref.chiba.lg.jp/" },
      { label: "国土交通省 千葉国道事務所", url: "https://www.ktr.mlit.go.jp/chiba/" },
      { label: "総務省", url: "https://www.soumu.go.jp/" },
      { label: "国税庁", url: "https://www.nta.go.jp/" },
      { label: "日本年金機構", url: "https://www.nenkin.go.jp/" },
    ],
  },
  {
    title: "市内関係機関・団体",
    links: [
      { label: "日野原市観光協会", url: "#" },
      { label: "日野原市社会福祉協議会", url: "#" },
      { label: "日野原市商工会", url: "#" },
      { label: "JAひのはら", url: "#" },
      { label: "日野原市教育委員会", url: "#" },
    ],
  },
  {
    title: "便利なリンク",
    links: [
      { label: "マイナポータル", url: "https://myna.go.jp/" },
      { label: "e-Gov（電子政府の総合窓口）", url: "https://www.e-gov.go.jp/" },
      { label: "国税庁 e-Tax", url: "https://www.e-tax.nta.go.jp/" },
      { label: "ふるさとチョイス（ふるさと納税）", url: "https://www.furusato-tax.jp/" },
    ],
  },
  {
    title: "近隣市町村",
    links: [
      { label: "君津市", url: "https://www.city.kimitsu.lg.jp/" },
      { label: "市原市", url: "https://www.city.ichihara.chiba.jp/" },
      { label: "南房総市", url: "https://www.city.minamiboso.chiba.jp/" },
      { label: "鴨川市", url: "https://www.city.kamogawa.lg.jp/" },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <SiteHeader />
      <div style={{ maxWidth: 980, margin: "0 auto", padding: 16 }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><span>リンク集</span>
        </div>
        <h1 className="page-title">リンク集</h1>
        <p style={{ fontSize: 13, color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
          日野原市に関連する機関・団体等のウェブサイトへのリンク集です。リンク先の内容については、各機関・団体にお問い合わせください。
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {linkGroups.map((group, i) => (
            <div key={i}>
              <div className="section-title">{group.title}</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {group.links.map((link, j) => (
                  <div key={j} style={{ padding: "8px 14px", borderBottom: "1px solid #e8edf4", fontSize: 13 }}>
                    <a href={link.url} target={link.url.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      ▶ {link.label}
                    </a>
                    {link.url.startsWith("http") && <span style={{ fontSize: 11, color: "#888", marginLeft: 6 }}>(外部サイト)</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 11, color: "#888", marginTop: 16, lineHeight: 1.8 }}>
          ※本ページに掲載しているリンクは、情報提供を目的としたものです。リンク先のウェブサイトに関して、日野原市は内容を保証するものではありません。<br />
          ※リンクの追加・修正のご要望は企画政策課広報広聴係（☎ 0100-88-1115）までお問い合わせください。
        </p>
        <PageInfo department="秘書広報課" division="広報係" tel="0100-88-1105（内線 105）" updated="令和5年4月1日" />
      </div>
      <SiteFooter />
    </>
  );
}
