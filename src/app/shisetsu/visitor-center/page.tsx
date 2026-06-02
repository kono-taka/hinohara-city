import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "白峰高原ビジターセンター" };

export default function Page() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/shisetsu">施設案内</a><span>›</span>
            <span>白峰高原ビジターセンター</span>
          </div>
          <h1 className="page-title">白峰高原ビジターセンター</h1>

          <div className="content-box">
            <h3>基本情報</h3>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>〒298-8821　千葉県日野原市白峰字高原台地2800番地</td></tr>
                <tr><th>電話</th><td>0439-58-2100</td></tr>
                <tr><th>標高</th><td>約1,100m</td></tr>
                <tr><th>開館時間</th><td>午前9時〜午後5時</td></tr>
                <tr><th>休館日</th><td>11月下旬〜4月下旬（冬季閉館）・開館期間中の火曜日</td></tr>
                <tr><th>入館料</th><td>無料</td></tr>
                <tr><th>駐車場</th><td>無料・100台（大型バス可）</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h3>展示・施設内容</h3>
            <ul style={{ fontSize: 13, lineHeight: 1.9, margin: 0, paddingLeft: 20 }}>
              <li><strong>自然展示室</strong>：白峰高原の植生・動物・地質を標本・映像・パネルで紹介。照葉樹林の生態系ジオラマを常設展示。</li>
              <li><strong>登山・ハイキング情報コーナー</strong>：日野原丘陵・大台山のハイキングルートマップ・最新の気象情報・登山注意情報を提供。登山届の受付も行っています。</li>
              <li><strong>体験コーナー</strong>：顕微鏡で山野草の観察・野鳥の声の聞き比べ・動物の足跡スタンプなど。</li>
              <li><strong>多目的ホール</strong>：自然教室・観察会のベースに利用可能（30名収容・要予約）。</li>
              <li><strong>休憩スペース</strong>：登山者・ハイキング客向けの休憩室（自動販売機あり）。</li>
            </ul>
          </div>

          <div className="content-box">
            <h3>令和8年度 ガイドプログラム</h3>
            <table className="content-table">
              <tbody>
                <tr><th>照葉樹林自然観察ウォーク</th><td>毎月第3土曜 午前9時〜（定員20名・無料・要申込）</td></tr>
                <tr><th>野鳥観察会</th><td>5月・6月の日曜日 早朝5時30分〜（定員10名・500円）</td></tr>
                <tr><th>白峰自然観察ウォーク2026</th><td>6月21日（土）8:30〜15:00（定員30名・参加費500円・要申込）</td></tr>
                <tr><th>秋の紅葉ハイキング</th><td>10月上旬〜中旬の週末（定員25名・無料・要申込）</td></tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>申込・問合せは電話またはメール（visitor@city.hinohara.lg.jp）で受け付けています。</p>
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>お問い合わせ</strong>　白峰高原ビジターセンター　☎ 0439-58-2100<br />
            ※冬季（11月下旬〜4月下旬）は閉館のため、市役所 観光振興課（☎ 0439-88-1138）へお問い合わせください。
          </div>
          <PageInfo department="産業振興課" division="観光係" tel="0439-88-1144（内線 144）" updated="令和5年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
