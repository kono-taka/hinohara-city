import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "市議会" };

const members = [
  { name: "田中 義男",   kana: "たなか よしお",     party: "自民ひのはら",     ward: "中央区", post: "議長",  photo: "/images/gikai/image.png" },
  { name: "佐藤 美穂子", kana: "さとう みほこ",     party: "公明党市議団",     ward: "北部区", post: "副議長", photo: "/images/gikai/image2.png" },
  { name: "渡辺 隆志",   kana: "わたなべ たかし",   party: "自民ひのはら",     ward: "中央区", post: "",      photo: "/images/gikai/image3.png" },
  { name: "中村 幸恵",   kana: "なかむら ゆきえ",   party: "日野原市民クラブ", ward: "南部区", post: "",      photo: "/images/gikai/image4.png" },
  { name: "小林 正樹",   kana: "こばやし まさき",   party: "自民ひのはら",     ward: "西部区", post: "",      photo: "/images/gikai/image5.png" },
  { name: "高橋 千尋",   kana: "たかはし ちひろ",   party: "公明党市議団",     ward: "北部区", post: "",      photo: "/images/gikai/image6.png" },
  { name: "伊藤 龍也",   kana: "いとう たつや",     party: "日本共産党",       ward: "中央区", post: "",      photo: "/images/gikai/image7.png" },
  { name: "木村 さつき", kana: "きむら さつき",     party: "日野原市民クラブ", ward: "東部区", post: "",      photo: "/images/gikai/image8.png" },
  { name: "山田 博之",   kana: "やまだ ひろゆき",   party: "自民ひのはら",     ward: "白峰区", post: "",      photo: "/images/gikai/image9.png" },
  { name: "加藤 雄一",   kana: "かとう ゆういち",   party: "無所属",           ward: "中央区", post: "",      photo: "/images/gikai/image10.png" },
  { name: "清水 奈々子", kana: "しみず ななこ",     party: "日野原市民クラブ", ward: "北部区", post: "",      photo: "/images/gikai/image11.png" },
  { name: "鈴木 哲夫",   kana: "すずき てつお",     party: "自民ひのはら",     ward: "南部区", post: "",      photo: "/images/gikai/image12.png" },
  { name: "林 一郎",     kana: "はやし いちろう",   party: "無所属",           ward: "東部区", post: "",      photo: "/images/gikai/image13.png" },
  { name: "松本 光代",   kana: "まつもと みつよ",   party: "公明党市議団",     ward: "中央区", post: "",      photo: "/images/gikai/image14.png" },
  { name: "岡田 誠",     kana: "おかだ まこと",     party: "日本共産党",       ward: "西部区", post: "",      photo: "/images/gikai/image15.png" },
  { name: "吉田 昌子",   kana: "よしだ まさこ",     party: "自民ひのはら",     ward: "南部区", post: "",      photo: "/images/gikai/image16.png" },
];

export default function GikaiPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>市議会</span>
          </div>
          <h1 className="page-title">日野原市議会</h1>

          <div className="info-card-grid">
            <div className="info-card">
              <div className="info-card-head">定数</div>
              <div className="info-card-body"><strong>16</strong> 名</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">任期</div>
              <div className="info-card-body"><strong>令和5年5月</strong>〜<br />令和9年5月</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">定例会</div>
              <div className="info-card-body">年<strong>4回</strong><br />（3月・6月・9月・12月）</div>
            </div>
          </div>

          <div className="section-title">議員一覧</div>
          <div className="council-member-grid" style={{ marginTop: 0 }}>
            {members.map((m, i) => (
              <div key={i} className="council-member-card">
                <div className="council-member-photo" style={{ background: "none", border: "none", overflow: "hidden" }}>
                  <Image
                    src={m.photo}
                    alt={m.name}
                    width={64}
                    height={80}
                    style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "100%" }}
                  />
                </div>
                {m.post && <div style={{ fontSize: 11, color: "#c0392b", fontWeight: "bold", marginBottom: 2 }}>{m.post}</div>}
                <div className="council-member-name">{m.name}</div>
                <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>{m.kana}</div>
                <div className="council-member-party">{m.party}</div>
                <div className="council-member-ward">{m.ward}</div>
              </div>
            ))}
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>会派構成</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <table className="content-table">
              <thead>
                <tr>
                  <th>会派名</th><th>議員数</th><th>代表者</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>自民ひのはら</td><td>6名</td><td>渡辺 隆志</td></tr>
                <tr><td>日野原市民クラブ</td><td>4名</td><td>中村 幸恵</td></tr>
                <tr><td>公明党市議団</td><td>3名</td><td>高橋 千尋</td></tr>
                <tr><td>日本共産党</td><td>2名</td><td>伊藤 龍也</td></tr>
                <tr><td>無所属</td><td>2名</td><td>—</td></tr>
              </tbody>
            </table>
          </div>

          {/* 会議録ダウンロード */}
          <div className="section-title" style={{ marginTop: 16 }}>会議録（概要版）ダウンロード</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 4 }}>
            {[
              { label: "令和8年第2回定例会（6月）会議録概要版", date: "令和8年7月発行", href: "/files/gikai/r8-06-gikai.pdf" },
              { label: "令和8年第1回定例会（3月）会議録概要版", date: "令和8年4月発行", href: "/files/gikai/r8-03-gikai.pdf" },
              { label: "令和7年第4回定例会（12月）会議録概要版", date: "令和8年1月発行", href: "/files/gikai/r7-12-gikai.pdf" },
              { label: "令和7年第3回定例会（9月）会議録概要版", date: "令和7年10月発行", href: "/files/gikai/r7-09-gikai.pdf" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", borderBottom: "1px solid #e8edf4" }}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13 }}>
                  📄 {item.label}
                </a>
                <span style={{ fontSize: 11, color: "#999", whiteSpace: "nowrap", marginLeft: 12 }}>{item.date}</span>
              </div>
            ))}
            <div style={{ padding: "7px 14px", fontSize: 11.5, color: "#888" }}>
              ※詳細な発言録は議会事務局にてご閲覧いただけます（要事前連絡）。
            </div>
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>議会関連情報</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { label: "議会中継（録画）", href: "#", desc: "議会の本会議・委員会の動画を配信しています（外部サイト）。" },
              { label: "議会傍聴のご案内", href: "#", desc: "傍聴の方法、傍聴規則についてご案内します。" },
              { label: "請願・陳情の提出", href: "#", desc: "市議会への請願・陳情の提出方法についてご案内します。" },
              { label: "議会だより ひのはら", href: "#", desc: "「議会だより ひのはら」のバックナンバーをPDFで公開しています。" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "10px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ minWidth: 200 }}><a href={item.href} style={{ fontSize: 13, fontWeight: "bold" }}>▶ {item.label}</a></div>
                <div style={{ fontSize: 12, color: "#555", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <PageInfo department="議会事務局" division="議事係" tel="0439-88-8321（内線 321）" updated="令和5年5月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
