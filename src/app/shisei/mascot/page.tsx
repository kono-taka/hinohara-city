import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ひのぽん｜日野原市マスコットキャラクター" };

export default function MascotPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisei">市政情報</a><span>›</span>
            <span>ひのぽん</span>
          </div>
          <h1 className="page-title">ひのぽん　日野原市マスコットキャラクター</h1>

          {/* メインビジュアル */}
          <div style={{ display: "flex", gap: 24, marginBottom: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flexShrink: 0 }}>
              <Image
                src="/hinopon.png"
                alt="日野原市マスコットキャラクター ひのぽん"
                width={320}
                height={320}
                style={{ display: "block" }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 220 }}>
              <div style={{ background: "#fffbe8", border: "1px solid #e8c840", borderRadius: 6, padding: "14px 16px", marginBottom: 14 }}>
                <p style={{ fontSize: 14, lineHeight: 1.9, margin: 0, color: "#333" }}>
                  日野原市のブランドびわ「<strong>ぽんなわびわ</strong>」の妖精だぽん！<br />
                  山もきれいで水も豊か、自然に恵まれた日野原市で<br />
                  のんびり暮らしているぽん。<br />
                  観光・イベント・移住PRで、みんなに日野原の魅力を<br />
                  届けるぽん！
                </p>
              </div>
              <div className="section-title" style={{ marginTop: 0 }}>プロフィール</div>
              <table className="content-table" style={{ borderTop: "none" }}>
                <tbody>
                  <tr><th>名前</th><td><strong>ひのぽん</strong></td></tr>
                  <tr><th>誕生日</th><td>8月7日（平成29年デビュー）</td></tr>
                  <tr><th>出身</th><td>日野原市中央地区 旧本縄（ぽんなわ）のびわ畑</td></tr>
                  <tr><th>身長</th><td>ぽんなわびわ3個分</td></tr>
                  <tr><th>体重</th><td>ひみつぽん</td></tr>
                  <tr><th>好きなもの</th><td>ぽんなわびわ、棚田米おにぎり、白嶺温泉、のんびりハイキング</td></tr>
                  <tr><th>苦手なもの</th><td>雨の日（びわが傷まないか心配）、急ぎ足</td></tr>
                  <tr><th>特技</th><td>びわを使ったダンス、市内全スポットの案内、落花生むき</td></tr>
                  <tr><th>口癖</th><td>「〜ぽん！」</td></tr>
                  <tr><th>性格</th><td>のんびりおっとりしているが、日野原の魅力を伝えるときは熱くなるぽん</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 活動紹介 */}
          <div className="section-title">ひのぽんの活動</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
              {[
                { icon: "🎪", title: "イベントPR", desc: "日野原びわまつり・落花生フェスタ・やまびこ祭りなど、市内のイベントに登場してにぎやかしをするぽん！" },
                { icon: "🏡", title: "移住促進", desc: "東京や横浜での移住相談会に出動して「ぽんなわびわ食べに来てぽん！」と呼びかけているぽん。" },
                { icon: "🏫", title: "学校訪問", desc: "市内の小中学校を訪問して、ふるさと日野原の自然・農業・歴史を一緒に学ぶぽん！" },
                { icon: "📸", title: "SNS発信", desc: "市公式Instagram・Xで日野原の日常や季節の風景をレポートしているぽん。フォローよろしくぽん！" },
                { icon: "🎁", title: "ふるさと納税", desc: "ひのぽんシールつきのぽんなわびわは返礼品No.1ぽん。全国のみなさんに届けーぽん！" },
                { icon: "🌿", title: "環境活動", desc: "ゼロカーボンシティ宣言のアンバサダーとして、環境フォーラムや緑化活動にも参加しているぽん。" },
              ].map((item, i) => (
                <div key={i} style={{ border: "1px solid var(--border-light)", background: "#fff", borderRadius: 4, padding: "12px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 28, marginBottom: 4 }}>{item.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: "bold", marginBottom: 4, color: "var(--city-primary)" }}>{item.title}</div>
                  <div style={{ fontSize: 11, color: "#555", lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* グッズ・素材 */}
          <div className="section-title">ひのぽんグッズ・素材利用</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "0 0 8px" }}>グッズ販売</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 12px" }}>
              ひのぽんのぬいぐるみ・クリアファイル・缶バッジ・ポストカードなどのオフィシャルグッズを販売しています。
              道の駅「ひのはら原野」、市立中央図書館1階、市役所1階売店でお求めいただけます。
            </p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "0 0 8px" }}>画像素材のご利用について</h3>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 8px" }}>
              ひのぽんの画像素材は、非商業目的であれば日野原市の許可を得た上でご利用いただけます。
              ご利用の際は以下のガイドラインをご確認ください。
            </p>
            <ul style={{ fontSize: 13, lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
              <li>形を変形・加工しての利用は禁止です。</li>
              <li>政治活動・宗教活動・公序良俗に反する用途での利用は禁止です。</li>
              <li>商業目的での利用は事前に市へご相談ください。</li>
              <li>利用の際は必ず「日野原市マスコットキャラクター ひのぽん」と明記してください。</li>
            </ul>
          </div>

          <div className="content-box" style={{ background: "#f4f6fb", border: "1px solid var(--border-light)" }}>
            <strong>ひのぽんに関するお問い合わせ</strong><br />
            <span style={{ fontSize: 13 }}>日野原市役所 企画政策課 広報広聴係　☎ 0100-88-1115　メール：koho@city.hinohara.lg.jp</span>
          </div>
          <PageInfo department="秘書広報課" division="広報係" tel="0100-88-1105（内線 105）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
