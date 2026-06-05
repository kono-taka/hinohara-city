import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "日野原市総合体育館" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>日野原市総合体育館</span>
          </div>
          <h1 className="page-title">日野原市総合体育館</h1>

          <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
            <Image
              src="/images/facilities/facility-taiikukan.png"
              alt="日野原市民体育館"
              width={740}
              height={220}
              style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
            />
          </div>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8803　千葉県日野原市北部1丁目4番地</td></tr>
                <tr><th>電話</th><td>0100-53-0010　／　FAX：0100-53-0011</td></tr>
                <tr><th>開館時間</th><td>午前9時〜午後9時</td></tr>
                <tr><th>休館日</th><td>毎週火曜日・年末年始（12月28日〜1月3日）</td></tr>
                <tr><th>駐車場</th><td>体育館前駐車場（無料・200台）　大型バス駐車場あり</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>施設・利用料金</h3>
            <table className="content-table">
              <thead><tr><th>施設名</th><th>規模</th><th>一般利用料（1時間）</th><th>高校生以下</th></tr></thead>
              <tbody>
                <tr><td>メインアリーナ</td><td>バスケット4面・バレー6面・バドミントン12面</td><td>850円</td><td>400円</td></tr>
                <tr><td>サブアリーナ</td><td>バスケット1面・バドミントン4面</td><td>430円</td><td>210円</td></tr>
                <tr><td>トレーニングルーム</td><td>各種マシン・フリーウエイト完備</td><td>1回310円</td><td>160円</td></tr>
                <tr><td>武道場</td><td>柔道畳・剣道用床</td><td>430円</td><td>210円</td></tr>
                <tr><td>会議室</td><td>30名収容</td><td>600円</td><td>—</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※トレーニングルーム月額利用券：一般2,600円・高校生以下1,300円。<br />
              ※市民・市内在勤者は上記料金。市外の方は1.5倍となります。<br />
              ※興行・有料イベント利用の場合は別途料金が発生します。お問い合わせください。
            </p>
          </div>

          <div className="content-box">
            <h3>ご予約方法</h3>
            <ul style={{ fontSize: 13, lineHeight: 1.9, margin: 0, paddingLeft: 20 }}>
              <li>使用希望日の3か月前から受付（窓口・電話・インターネット）</li>
              <li>インターネット予約：「ひのはら施設予約システム」（要利用者登録）</li>
              <li>個人利用（トレーニングルーム等）は予約不要・当日窓口で受付</li>
            </ul>
          </div>

          <div className="content-box">
            <h3>スポーツ教室・定期プログラム</h3>
            <table className="content-table">
              <tbody>
                <tr><th>ヨガ教室</th><td>毎週水曜 午前10時〜（定員20名・月額2,500円）</td></tr>
                <tr><th>エアロビクス</th><td>毎週金曜 午前10時〜（定員25名・月額2,500円）</td></tr>
                <tr><th>シニア体操</th><td>毎週木曜 午前10時〜（60歳以上・無料）</td></tr>
                <tr><th>バドミントン開放</th><td>毎月第1・第3日曜 午後1時〜3時（500円）</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ・ご予約</strong>　日野原市総合体育館　☎ 0100-53-0010<br />
            受付時間：開館時間中（午前9時〜午後9時・火曜除く）
          </div>
          <PageInfo department="生涯学習課" division="スポーツ振興係" tel="0100-88-8311（内線 311）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
