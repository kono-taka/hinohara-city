import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "企業誘致・産業立地" };

export default function KigyoyuchiPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/sangyo">産業・環境</a><span>›</span><span>企業誘致・産業立地</span>
          </div>
          <h1 className="page-title">企業誘致・産業立地</h1>

          <div className="content-box">
            <h2 className="section-title">日野原市の立地優位性</h2>
            <p>日野原市は千葉県南房総地域に位置し、豊かな自然環境と充実した交通アクセスを併せ持つ産業立地に適した環境を提供しています。</p>
            <table className="content-table">
              <thead>
                <tr><th>項目</th><th>詳細</th></tr>
              </thead>
              <tbody>
                <tr><td>高速道路アクセス</td><td>館山道 君津ICから<strong>35分</strong>・中央道 諏訪ICから55分</td></tr>
                <tr><td>鉄道アクセス</td><td>JR内房線「日野原駅」・特急利用で君津駅乗換え東京2時間30分</td></tr>
                <tr><td>用地コスト</td><td>市原市内比 約40〜50%低水準</td></tr>
                <tr><td>自然環境</td><td>清澄な空気・豊富な水資源・美しい景観（従業員満足度向上）</td></tr>
                <tr><td>労働力</td><td>勤勉で定着率の高い地元労働者。移住促進による人材確保も支援</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">産業立地補助金制度</h2>
            <table className="content-table">
              <tbody>
                <tr><th>対象</th><td>市内に工場・事業所を新設・増設する企業</td></tr>
                <tr><th>投資要件</th><td>投資額<strong>1億円以上</strong>（土地・建物・設備の合計）</td></tr>
                <tr><th>補助率</th><td>対象投資額の<strong>10%</strong></td></tr>
                <tr><th>補助上限</th><td><strong>5,000万円</strong></td></tr>
                <tr><th>雇用奨励金</th><td>新規雇用（市内在住者）1人につき50万円（上限200万円）</td></tr>
                <tr><th>固定資産税の軽減</th><td>操業開始後3年間は固定資産税を1/2に軽減（市条例）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">産業用地情報</h2>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>日野原工業団地（残区画）</h3>
            <table className="content-table">
              <thead>
                <tr><th>区画番号</th><th>面積</th><th>坪単価</th><th>備考</th></tr>
              </thead>
              <tbody>
                <tr><td>第8区画</td><td>5,000m²（約1,513坪）</td><td><strong>2.5万円/坪</strong></td><td>上下水道・電力引込み済み</td></tr>
                <tr><td>第11区画</td><td>15,000m²（約4,538坪）</td><td><strong>2.5万円/坪</strong></td><td>大型車両進入可。分割売却相談可</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※ 用途地域: 準工業地域。工業専用地域への変更手続きも相談可。現地見学随時受付中。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">市内立地企業の主な業種</h2>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>精密機械・電子部品</strong>: 計測機器・センサー・FA機器の製造（房総内陸部の製造業集積の一角）</li>
              <li><strong>食品加工</strong>: りんごジュース・ドライフルーツ・そば製品・味噌・乳製品の製造</li>
              <li><strong>ICT・IT関連</strong>: サーバーファーム・コールセンター・ソフトウェア開発（高速光回線完備）</li>
              <li><strong>木材・建材</strong>: 地域材を活用した製材・木工品製造</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">企業立地セミナー</h2>
            <p>首都圏・中京圏の企業に向けて、日野原市の魅力・立地メリットを直接ご紹介するセミナーを開催しています。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>東京会場: <strong>毎年秋（10〜11月）</strong>に開催。会場: 東京都千代田区内（毎回異なる）</li>
              <li>名古屋会場: 東京と同時期に開催予定</li>
              <li>内容: 市の概要説明・補助金制度・立地事例紹介・個別相談会</li>
              <li>参加申込: 企画政策課産業振興係まで（電話・メール・FAX）</li>
            </ul>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>企画政策課 産業振興係</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1114</strong></td></tr>
                <tr><th>FAX</th><td>0439-88-1198</td></tr>
                <tr><th>メール</th><td>kikaku@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="産業振興課" tel="0439-88-1141（内線 141）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
