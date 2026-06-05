import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "小学校・中学校のご案内" };

export default function GakkoPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化・スポーツ</a><span>›</span>
            <span>小学校・中学校のご案内</span>
          </div>
          <h1 className="page-title">小学校・中学校のご案内</h1>

          {/* 就学手続き */}
          <h2 className="section-title">就学に関する手続き</h2>
          <div className="content-box">
            <h3 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 8 }}>就学通知の発送</h3>
            <p style={{ lineHeight: 1.8 }}>翌年4月に小学校・中学校へ入学する児童・生徒の保護者に対し、毎年<strong>12月中旬</strong>に就学通知書を郵送します。通知書には入学する学校名・入学式の日程が記載されています。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "14px 0 8px" }}>転入時の手続き</h3>
            <p style={{ lineHeight: 1.8 }}>市外からの転入で子どもが学校へ転入する場合は、転入届の手続きと同時に学校教育課で転校の手続きを行ってください。</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2, marginTop: 8 }}>
              <li>前の学校から受け取った「在学証明書」と「教科書給与証明書」をお持ちください</li>
              <li>学校を指定した「転入学通知書」をお渡しします</li>
              <li>その後、直接学校に連絡して登校日を相談してください</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "14px 0 8px" }}>市内の小中学校一覧</h3>
            <table className="content-table">
              <thead><tr><th>学校名</th><th>種別</th><th>所在地</th><th>電話</th><th>児童・生徒数</th></tr></thead>
              <tbody>
                <tr><td>ひのはら市立中央小学校</td><td>小学校</td><td>中央2丁目</td><td>0100-88-2100</td><td>412名</td></tr>
                <tr><td>ひのはら市立北部小学校</td><td>小学校</td><td>北部3丁目</td><td>0100-53-1100</td><td>286名</td></tr>
                <tr><td>ひのはら市立原野小学校</td><td>小学校</td><td>原野地区</td><td>0100-54-1100</td><td>163名</td></tr>
                <tr><td>ひのはら市立白峰小学校</td><td>小学校</td><td>白峰地区</td><td>0100-55-1100</td><td>72名</td></tr>
                <tr><td>ひのはら市立第一中学校</td><td>中学校</td><td>中央4丁目</td><td>0100-88-3100</td><td>412名</td></tr>
                <tr><td>ひのはら市立第二中学校</td><td>中学校</td><td>北部2丁目</td><td>0100-53-2100</td><td>298名</td></tr>
              </tbody>
            </table>
          </div>

          {/* 就学援助 */}
          <h2 className="section-title">就学援助制度</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>経済的な理由により就学が困難な家庭を対象に、学校でかかる費用の一部を援助します。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>項目</th><th>内容</th></tr></thead>
              <tbody>
                <tr><td>対象</td><td>前年度所得が生活保護基準額の1.2倍以下の世帯（生活保護受給世帯を含む）</td></tr>
                <tr><td>申請時期</td><td>毎年4月〜5月（随時受付も可）</td></tr>
                <tr>
                  <td>支給項目</td>
                  <td>
                    <ul style={{ paddingLeft: 18, lineHeight: 2, margin: 0 }}>
                      <li>学校給食費</li>
                      <li>学用品費・通学用品費</li>
                      <li>修学旅行費（実費）</li>
                      <li>体育実技用具費・校外活動費</li>
                      <li>医療費（学校保健安全法の対象疾病に限る）</li>
                    </ul>
                  </td>
                </tr>
                <tr><td>申請書類</td><td>就学援助認定申請書・前年度の所得証明書（1月以降の申請の場合）</td></tr>
              </tbody>
            </table>
          </div>

          {/* GIGAスクール */}
          <h2 className="section-title">GIGAスクール構想（一人1台端末）</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>令和3年度より市内全小中学校の児童・生徒一人に1台のタブレット端末を配備し、Wi-Fi環境の整備も完了しました。令和8年度は端末の更新（第2サイクル）を行っています。</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2, marginTop: 8 }}>
              <li>全普通教室・特別教室へのWi-Fi整備済み</li>
              <li>家庭への持ち帰り学習を全学年で実施</li>
              <li>ICT支援員を週3日配置（授業サポート・教員研修）</li>
              <li>オンライン授業環境の整備（不登校・病気療養中の児童生徒への対応）</li>
            </ul>
          </div>

          {/* 不登校・いじめ対応 */}
          <h2 className="section-title">不登校・いじめへの対応</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>学校生活に不安や悩みのある児童・生徒・保護者の方は、いつでもご相談ください。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>相談窓口</th><th>内容</th><th>連絡先</th></tr></thead>
              <tbody>
                <tr>
                  <td>学校教育課 教育相談</td>
                  <td>不登校・いじめ・学校生活全般の相談</td>
                  <td>☎ 0100-88-1142（平日 8:30〜17:15）</td>
                </tr>
                <tr>
                  <td>スクールカウンセラー</td>
                  <td>児童・生徒・保護者の心理的相談（各校週1〜2回派遣）</td>
                  <td>各学校を通じて予約</td>
                </tr>
                <tr>
                  <td>スクールソーシャルワーカー</td>
                  <td>家庭環境・福祉的支援を含む複合的な問題への対応</td>
                  <td>学校または学校教育課経由</td>
                </tr>
                <tr>
                  <td>教育支援センター（ひのはらルーム）</td>
                  <td>不登校児童・生徒への学習支援・居場所提供</td>
                  <td>☎ 0100-88-1142（事前申込制）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 学校給食 */}
          <h2 className="section-title">学校給食</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>市内全小中学校で完全給食を実施しています。地元産の食材を積極的に活用した安全・安心な給食を提供しています。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>区分</th><th>月額給食費</th><th>備考</th></tr></thead>
              <tbody>
                <tr><td>小学校（1〜3年生）</td><td>4,200円</td><td rowSpan={2} style={{ verticalAlign: "middle", fontSize: 12 }}>就学援助対象者は全額補助。第3子以降は市独自軽減あり。</td></tr>
                <tr><td>中学校</td><td>4,800円</td></tr>
              </tbody>
            </table>
          </div>

          {/* 部活動地域移行 */}
          <h2 className="section-title">部活動の地域移行</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>国の方針に基づき、令和7年度より休日の部活動から地域クラブ活動への移行を段階的に実施しています。</p>
            <ul style={{ paddingLeft: 20, lineHeight: 2, marginTop: 8 }}>
              <li>令和7年度：運動部（一部種目）で休日の活動を地域クラブへ移行開始</li>
              <li>令和8年度：全運動部の休日活動を地域クラブへ移行、文化部も順次移行</li>
              <li>令和9年度以降：平日活動も含めた段階的な移行を検討</li>
            </ul>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>地域クラブへの移行に伴う費用・申込方法等の詳細は、各学校または学校教育課へお問い合わせください。</p>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            学校教育課（市役所2階）<br />
            ☎ 0100-88-1140　受付時間：平日 8:30〜17:15
          </div>
          <div className="section-title" style={{ marginTop: 16 }}>市立学校一覧</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { href: "/kyoiku/gakko/chuo-sho",    label: "日野原市立中央小学校" },
              { href: "/kyoiku/gakko/hokubu-sho",  label: "日野原市立北部小学校" },
              { href: "/kyoiku/gakko/nanbu-sho",   label: "日野原市立南部小学校" },
              { href: "/kyoiku/gakko/tobu-sho",    label: "日野原市立東部小学校" },
              { href: "/kyoiku/gakko/haruno-sho",  label: "日野原市立原野小学校" },
              { href: "/kyoiku/gakko/shirotaki-sho", label: "日野原市立白峰小学校" },
              { href: "/kyoiku/gakko/daiichi-chu", label: "日野原市立第一中学校" },
              { href: "/kyoiku/gakko/daini-chu",   label: "日野原市立第二中学校" },
              { href: "/kyoiku/gakko/haruno-chu",  label: "日野原市立原野中学校" },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #e8edf4" : "none", fontSize: 13 }}>
                <a href={item.href}>▶ {item.label}</a>
              </div>
            ))}
          </div>
          <PageInfo department="教育総務課" division="学校教育係" tel="0100-88-8301（内線 301）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
