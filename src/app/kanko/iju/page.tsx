import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import FaqJsonLd from "@/components/FaqJsonLd";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "移住・定住支援",
  description: "日野原市への移住支援金は最大100万円（子育て加算あり）。空き家バンク・お試し移住住宅・移住相談会など、千葉県日野原市への移住・定住を全力サポートします。",
};

const faqs = [
  { q: "移住支援金はいくらもらえますか？", a: "世帯（2人以上）で最大100万円、単身で60万円です。さらに18歳未満の子ども1人につき100万円が加算されます（令和5年度〜）。東京圏から5年以上居住していた方が対象です。" },
  { q: "空き家バンクの物件はどのくらいありますか？", a: "令和8年6月現在、一戸建て18件・古民家3件・土地付き古民家2件の計23件が登録されています。価格帯は100万円〜2,800万円、賃貸は月額3万円〜8万円です。空き家バンク利用者にはリフォーム補助（改修費の1/2・上限100万円）があります。" },
  { q: "テレワークをしながら移住できますか？", a: "はい。移住支援金の就労要件はテレワーク（リモートワーク）も対象です。市内にはコワーキングスペース「ひのはらワーク」があり、テレワーク移住者に活用されています。" },
  { q: "農業を始めたいのですが支援はありますか？", a: "農業委員会・農林振興課が農地の賃借相談を受け付けています。空き家バンクで農地付き物件を探すことも可能です。新規就農の相談は産業振興課農政係（☎0100-88-1144）へお問い合わせください。" },
  { q: "お試し移住住宅はどのくらい利用できますか？", a: "「ひのはらステイ」は最短1か月・最大3か月利用できます（月額5万円、光熱費別）。2LDK・家具家電Wi-Fi完備で、移住前の生活体験に活用できます。" },
  { q: "移住相談会はどこで開催されていますか？", a: "東京会場（有楽町・ふるさと回帰支援センター）で毎月第1土曜日10:00〜17:00に開催しています（予約制）。オンライン相談も平日10:00〜16:00で随時受け付けています。" },
];

export default function IjuPage() {
  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "観光・移住", href: "/kanko" },
        { name: "移住・定住支援" },
      ]} />
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/kanko">観光・移住</a><span>›</span><span>移住・定住支援</span>
          </div>
          <h1 className="page-title">移住・定住支援</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <h2 className="section-title">日野原市の暮らしの特徴</h2>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              日野原市は千葉県南部の山間地域（房総丘陵中央部）に位置する、海を持たない内陸自治体です。
              市域は山林と農地に囲まれ、里山・棚田・温泉を暮らしの基盤とした静かな環境が広がっています。<br />
              一方で、内房沿岸（富津・鋸南方面）へは車で約45分。大型商業施設は木更津・君津方面（車で30〜45分）を利用する方が多く、
              高校進学・医療・就職では沿岸都市圏も生活圏として近接しています。
              山の暮らしを基盤にしながら、海も余暇圏として手の届く距離にあるのが日野原市の特徴です。
            </p>
          </div>

          <div className="content-box" style={{ borderLeft: "4px solid #1976d2", background: "#e3f2fd" }}>
            <h2 className="section-title">令和7年度 移住実績（過去最多）</h2>
            <p>令和7年度の移住者数は<strong>87世帯・142人</strong>と、統計開始以来の過去最多を更新しました。テレワーク普及や自然志向の高まりを背景に、日野原市への移住関心が急増しています。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">移住支援金制度</h2>
            <p>東京圏（東京都・神奈川県・埼玉県・千葉県）から移住する方に、移住支援金を支給します。</p>
            <table className="content-table">
              <tbody>
                <tr><th>世帯（2人以上）</th><td><strong>最大100万円</strong></td></tr>
                <tr><th>単身</th><td><strong>60万円</strong></td></tr>
                <tr><th>子育て加算</th><td>18歳未満の子1人につき100万円加算（令和5年度〜）</td></tr>
                <tr><th>主な要件</th><td>
                  <ul style={{ paddingLeft: 16, margin: 0, fontSize: 12, lineHeight: 1.7 }}>
                    <li>移住直前に5年以上東京圏に居住していること</li>
                    <li>日野原市に転入後1年以内に申請すること</li>
                    <li>転入後5年以上、日野原市に定住する意思があること</li>
                    <li>就業・起業・テレワーク等の就労要件を満たすこと</li>
                  </ul>
                </td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">空き家バンク</h2>
            <p>市内の空き家・空き地情報を集約し、移住希望者と所有者のマッチングを行っています。</p>
            <table className="content-table">
              <tbody>
                <tr><th>現在の登録物件数</th><td><strong>23件</strong>（令和8年6月現在）</td></tr>
                <tr><th>物件種別</th><td>一戸建て18件・古民家3件・土地付き古民家2件</td></tr>
                <tr><th>価格帯</th><td>100万円〜2,800万円（賃貸: 月額3万円〜8万円）</td></tr>
                <tr><th>リフォーム補助</th><td>改修費の1/2・上限100万円（空き家バンク利用者限定）</td></tr>
                <tr><th>相談・申込</th><td>企画政策課移住定住推進係 ☎0100-88-1114</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">お試し移住住宅「ひのはらステイ」</h2>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>日野原市中央2丁目14-3（市中心部・日野原中央バスターミナルから徒歩10分）</td></tr>
                <tr><th>間取り</th><td>2LDK（約65m²）　家具・家電・Wi-Fi完備</td></tr>
                <tr><th>利用料</th><td>月額<strong>5万円</strong>（光熱費別）</td></tr>
                <tr><th>利用期間</th><td>最短1か月〜<strong>最大3か月</strong></td></tr>
                <tr><th>定員</th><td>1世帯（単身・家族どちらも可）</td></tr>
                <tr><th>申込・問合せ</th><td>企画政策課移住定住推進係 ☎0100-88-1114</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">移住者の声</h2>
            <div style={{ borderLeft: "3px solid #90caf9", paddingLeft: 12, marginBottom: 16 }}>
              <p style={{ fontWeight: "bold", fontSize: 13 }}>田中家（東京都世田谷区 → 日野原市　4人家族）</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#444" }}>「子どもが自然の中で伸び伸び育っています。ぽんなわびわ農家のアルバイトから始めて、今は1反の畑を借りて農業を体験中。子育て加算もあって移住支援金が大変助かりました。」</p>
            </div>
            <div style={{ borderLeft: "3px solid #90caf9", paddingLeft: 12, marginBottom: 16 }}>
              <p style={{ fontWeight: "bold", fontSize: 13 }}>鈴木さん（横浜市 → 日野原市　単身・IT企業勤務テレワーク）</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#444" }}>「コワーキングスペース『ひのはらワーク』をほぼ毎日使っています。都会にいたときより集中でき、仕事の質が上がりました。単身移住支援金60万円で引越し費用を賄えました。」</p>
            </div>
            <div style={{ borderLeft: "3px solid #90caf9", paddingLeft: 12 }}>
              <p style={{ fontWeight: "bold", fontSize: 13 }}>渡辺夫妻（名古屋市 → 日野原市　定年退職後・農業目的）</p>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "#444" }}>「退職を機に長年の夢だった農業を始めました。空き家バンクで見つけた古民家をリフォームし、念願の菜園付き生活を実現。農業委員会や農林振興課に相談しながら農地を借りることもできました。」</p>
            </div>
          </div>

          <div className="content-box">
            <h2 className="section-title">移住相談会</h2>
            <table className="content-table">
              <tbody>
                <tr><th>東京会場</th><td><strong>毎月第1土曜日</strong>　10:00〜17:00（予約制）<br />会場: ふるさと回帰支援センター（東京都千代田区有楽町2-10-1 東京交通会館8階）</td></tr>
                <tr><th>オンライン相談</th><td><strong>随時受付</strong>（平日10:00〜16:00・事前予約制）<br />ZoomまたはGoogle Meetを使用</td></tr>
                <tr><th>予約・問合せ</th><td>企画政策課移住定住推進係 ☎0100-88-1114<br />メール: iju@city.hinohara.lg.jp</td></tr>
              </tbody>
            </table>
          </div>

          {/* 資料ダウンロード */}
          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#eaf3ef" }}>
            <h2 className="section-title">資料ダウンロード</h2>
            <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "10px 0" }}>
              <span style={{ fontSize: 36, flexShrink: 0 }}>📄</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold", fontSize: 14, marginBottom: 3 }}>
                  日野原市移住ガイドブック
                </div>
                <div style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>
                  移住支援金・空き家バンク・お試し住宅・相談窓口など、日野原市への移住に必要な情報をまとめた公式ガイドです。（PDF・10ページ）
                </div>
                <a
                  href="/files/emigration/iju-guidebook.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "7px 18px",
                    background: "#1a6e5a", color: "#fff",
                    borderRadius: 3, fontSize: 13, fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  📥 PDFをダウンロード（無料）
                </a>
              </div>
            </div>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>企画政策課 移住定住推進係</td></tr>
                <tr><th>電話</th><td>☎<strong>0100-88-1114</strong></td></tr>
                <tr><th>メール</th><td>iju@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          {/* FAQ セクション */}
          <div className="content-box">
            <h2 className="section-title">よくある質問</h2>
            <dl style={{ margin: 0 }}>
              {faqs.map(({ q, a }) => (
                <div key={q} style={{ borderBottom: "1px solid #e0eae5", padding: "12px 0" }}>
                  <dt style={{ fontWeight: "bold", fontSize: 13, color: "#1a6e5a", marginBottom: 4 }}>Q. {q}</dt>
                  <dd style={{ fontSize: 13, lineHeight: 1.8, margin: 0, paddingLeft: 8, color: "#444" }}>A. {a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <PageInfo department="企画政策課" division="移住定住推進係" tel="0100-88-1114（内線 114）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
