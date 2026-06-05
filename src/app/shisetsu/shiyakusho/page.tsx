import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "日野原市役所のご案内" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>日野原市役所</span>
          </div>
          <h1 className="page-title">日野原市役所のご案内</h1>

          <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
            <Image
              src="/images/facilities/facility-shiyakusho.png"
              alt="日野原市役所 外観"
              width={740}
              height={220}
              style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
            />
          </div>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒299-1401　千葉県日野原市中央1丁目1番地1号</td></tr>
                <tr><th>代表電話</th><td>0100-88-1111</td></tr>
                <tr><th>FAX</th><td>0100-88-1119</td></tr>
                <tr><th>開庁時間</th><td>平日 午前8時30分〜午後5時15分（土日祝・年末年始を除く）</td></tr>
                <tr><th>時間外窓口</th><td>毎月第2・第4土曜日 午前8時30分〜正午（住民票・印鑑証明の交付のみ）</td></tr>
                <tr><th>駐車場</th><td>市役所前駐車場（無料・120台）　障がい者用駐車スペース6台</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>フロアガイド</h3>
            <table className="content-table">
              <thead><tr><th>階</th><th>主な窓口・部署</th></tr></thead>
              <tbody>
                <tr><td>1階</td><td>市民課（住民登録・戸籍・マイナンバー）、税務課、福祉課、高齢者支援課、健康推進課、子育て支援課、出納室、自動交付機（2台）</td></tr>
                <tr><td>2階</td><td>総務課、企画政策課、財政課、建設課、農林振興課、環境対策課、観光振興課、会議室（第1〜第3）</td></tr>
                <tr><td>3階</td><td>学校教育課、生涯学習課、議会事務局、議場、委員会室</td></tr>
                <tr><td>地下1階</td><td>食堂（平日11:00〜14:00）、印刷室、倉庫</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>主な窓口の電話番号</h3>
            <table className="content-table">
              <tbody>
                {[
                  ["市民課（住民登録・マイナンバー）", "0100-88-1113"],
                  ["市民課（国民健康保険）", "0100-88-1113"],
                  ["税務課", "0100-88-1116"],
                  ["福祉課（障がい・生活保護）", "0100-88-1120"],
                  ["高齢者支援課（介護保険）", "0100-88-1121"],
                  ["健康推進課（健診・予防接種）", "0100-88-1122"],
                  ["子育て支援課（保育・児童手当）", "0100-88-1123"],
                  ["企画政策課（移住・ふるさと納税）", "0100-88-1114"],
                  ["建設課（道路・住宅）", "0100-88-1130"],
                  ["農林振興課", "0100-88-1135"],
                  ["環境対策課（ごみ）", "0100-88-1136"],
                ].map(([name, tel]) => (
                  <tr key={name}><th>{name}</th><td>☎ {tel}</td></tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>アクセス</h3>
            <table className="content-table">
              <tbody>
                <tr><th>バス</th><td>市営ひのはらバス「市役所前」停留所下車すぐ（日野原中央バスターミナルより約8分）</td></tr>
                <tr><th>最寄り駅</th><td>JR内房線「君津駅」（君津駅南口より市営バス「日野原中央行き」乗車 約35分）</td></tr>
                <tr><th>車</th><td>館山自動車道 君津ICより約35分。国道沿い。</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="総務課" tel="0100-88-1121（内線 121）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
