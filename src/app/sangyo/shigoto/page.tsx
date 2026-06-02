import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "しごと・雇用支援" };

export default function ShigotoPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/sangyo">産業・環境</a><span>›</span><span>しごと・雇用支援</span>
          </div>
          <h1 className="page-title">しごと・雇用支援</h1>

          <div className="content-box">
            <h2 className="section-title">市内の雇用状況</h2>
            <table className="content-table">
              <tbody>
                <tr><th>有効求人倍率</th><td><strong>1.18倍</strong>（令和8年3月・松本公共職業安定所管内）</td></tr>
                <tr><th>主要業種の求人</th><td>製造業・医療福祉・宿泊飲食・建設業</td></tr>
                <tr><th>市内事業所数</th><td>約1,240事業所（令和6年経済センサス）</td></tr>
                <tr><th>就業者数</th><td>約18,500人（令和2年国勢調査）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">ハローワーク松本 出張相談</h2>
            <p>松本公共職業安定所の職員が市役所に出張し、求職者・事業主双方への相談対応を行います。</p>
            <table className="content-table">
              <tbody>
                <tr><th>開催日</th><td><strong>毎月第3火曜日</strong></td></tr>
                <tr><th>時間</th><td>10:00〜15:00</td></tr>
                <tr><th>場所</th><td>日野原市役所 2階 第2会議室</td></tr>
                <tr><th>内容</th><td>求職相談・求人紹介・雇用保険・助成金相談</td></tr>
                <tr><th>予約・問合せ</th><td>☎<strong>0439-88-1114</strong>（農林振興課商工係）事前予約制</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">テレワーク移住支援</h2>
            <p>東京圏の企業に勤めながら日野原市に移住し、テレワークで働く方を支援します。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>移住支援金との併用可</strong>: テレワーカーも移住支援金（最大100万円）の対象。要件を満たせば同時申請可能</li>
              <li><strong>コワーキングスペース「ひのはらワーク」</strong>
                <ul style={{ paddingLeft: 18, marginTop: 4 }}>
                  <li>所在地: 日野原市中央3丁目2-10 ひのはらビジネスラボ1階</li>
                  <li>設備: 高速Wi-Fi・個室ブース4席・会議室（要予約）・複合機</li>
                  <li>料金: 1日500円・月額5,000円（市民割引あり）</li>
                  <li>営業時間: 平日 8:00〜20:00、土日 9:00〜18:00</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">高齢者・障がい者の就労支援</h2>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>日野原市シルバー人材センター</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 原則60歳以上の健康な市民</li>
              <li>主な仕事: 家事援助・除草・剪定・清掃・軽作業・事務</li>
              <li>会員数: 約320人（令和7年度）</li>
              <li>電話: ☎0439-88-7788</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>就労継続支援事業所（市内一覧）</h3>
            <table className="content-table">
              <thead>
                <tr><th>事業所名</th><th>区分</th><th>電話</th></tr>
              </thead>
              <tbody>
                <tr><td>ひのはら工房</td><td>A型</td><td>☎0439-55-2211</td></tr>
                <tr><td>あおぞら作業所</td><td>B型</td><td>☎0439-55-3344</td></tr>
                <tr><td>白峰ファーム</td><td>B型</td><td>☎0439-56-1122</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">若者就職支援</h2>
            <p>地元への就職・定住を促進するため、若者と地元企業のマッチングを支援します。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "10px 0 6px" }}>地元企業合同説明会</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 新卒・第二新卒（概ね35歳以下）</li>
              <li>開催時期: <strong>毎年2月</strong>（令和7年度: 2月15日開催）</li>
              <li>参加企業: <strong>25社</strong>（令和7年度）</li>
              <li>参加者数: 令和7年度 約180人</li>
              <li>会場: 日野原市文化センター 大ホール</li>
            </ul>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>農林振興課 商工係</td></tr>
                <tr><th>電話</th><td>☎<strong>0439-88-1136</strong></td></tr>
                <tr><th>メール</th><td>shoko@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="産業振興課" division="雇用推進係" tel="0439-88-1141（内線 141）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
