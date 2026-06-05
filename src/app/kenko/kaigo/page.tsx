import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "介護保険のご案内" };

export default function KaigoPage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>介護保険のご案内</span>
          </div>
          <h1 className="page-title">介護保険のご案内</h1>

          {/* 制度概要 */}
          <h2 className="section-title">介護保険制度の概要</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>介護保険は、40歳以上の方が被保険者となり、介護が必要になったときに必要なサービスを受けられる社会保険制度です。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>区分</th><th>対象</th><th>保険料の徴収方法</th></tr></thead>
              <tbody>
                <tr>
                  <td><strong>第1号被保険者</strong></td>
                  <td>65歳以上の方</td>
                  <td>年金から天引き（特別徴収）または納付書・口座振替</td>
                </tr>
                <tr>
                  <td><strong>第2号被保険者</strong></td>
                  <td>40〜64歳の医療保険加入者</td>
                  <td>加入している医療保険の保険料と合わせて徴収</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: 10, lineHeight: 1.8 }}>第2号被保険者は、特定疾病（がん末期・関節リウマチ・筋萎縮性側索硬化症など16種類）が原因で要介護状態になった場合にサービスを受けられます。</p>
          </div>

          {/* 要介護認定の申請手順 */}
          <h2 className="section-title">要介護認定の申請手順</h2>
          <div className="content-box">
            <ol style={{ paddingLeft: 20, lineHeight: 2.2 }}>
              <li><strong>申請</strong>　市役所高齢者支援課または地域包括支援センターへ申請書を提出</li>
              <li><strong>認定調査</strong>　市の調査員が自宅等を訪問し、心身の状況を調査（約1時間）</li>
              <li><strong>主治医意見書</strong>　市から主治医へ意見書の作成を依頼</li>
              <li><strong>一次判定</strong>　コンピューターによる判定</li>
              <li><strong>介護認定審査会</strong>　医師・福祉専門職等による二次判定</li>
              <li><strong>認定結果通知</strong>　申請から原則30日以内に結果を通知（非該当・要支援1〜2・要介護1〜5）</li>
              <li><strong>ケアプラン作成</strong>　ケアマネジャーが介護サービス計画を作成</li>
              <li><strong>サービス利用開始</strong></li>
            </ol>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※認定結果に不服がある場合は、結果通知を受けた日の翌日から3か月以内に千葉県介護保険審査会へ審査請求できます。</p>
          </div>

          {/* 令和8年度 介護保険料 */}
          <h2 className="section-title">令和8年度 介護保険料（第1号被保険者・年額）</h2>
          <div className="content-box">
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>段階</th>
                    <th>対象者</th>
                    <th>月額</th>
                    <th>年額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>第1段階</td>
                    <td>生活保護受給者・世帯全員が住民税非課税で老齢福祉年金受給者</td>
                    <td>3,200円</td>
                    <td>38,400円</td>
                  </tr>
                  <tr>
                    <td>第2段階</td>
                    <td>世帯全員が住民税非課税・本人年金収入等80万円以下</td>
                    <td>3,700円</td>
                    <td>44,400円</td>
                  </tr>
                  <tr>
                    <td>第3段階</td>
                    <td>世帯全員が住民税非課税・本人年金収入等80万円超</td>
                    <td>5,850円</td>
                    <td>70,200円</td>
                  </tr>
                  <tr>
                    <td>第4段階</td>
                    <td>本人が住民税課税・合計所得120万円未満（基準額）</td>
                    <td>6,500円</td>
                    <td>78,000円</td>
                  </tr>
                  <tr>
                    <td>第5段階</td>
                    <td>本人が住民税課税・合計所得120〜200万円未満</td>
                    <td>7,800円</td>
                    <td>93,600円</td>
                  </tr>
                  <tr>
                    <td>第6段階</td>
                    <td>本人が住民税課税・合計所得200〜300万円未満</td>
                    <td>9,100円</td>
                    <td>109,200円</td>
                  </tr>
                  <tr>
                    <td>第7段階</td>
                    <td>本人が住民税課税・合計所得300万円以上</td>
                    <td>10,400円</td>
                    <td>124,800円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※低所得の方には保険料の減額制度があります。詳しくは高齢者支援課までお問い合わせください。</p>
          </div>

          {/* サービスの種類 */}
          <h2 className="section-title">介護保険サービスの種類と自己負担割合</h2>
          <div className="content-box">
            <p style={{ marginBottom: 10, lineHeight: 1.8 }}>介護保険サービスの自己負担割合は、所得に応じて<strong>1割・2割・3割</strong>のいずれかになります。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 6 }}>居宅サービス（自宅で受けるサービス）</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>訪問介護（ホームヘルプ）・訪問看護・訪問入浴介護・訪問リハビリ</li>
              <li>通所介護（デイサービス）・通所リハビリ（デイケア）</li>
              <li>短期入所生活介護（ショートステイ）</li>
              <li>福祉用具貸与・特定福祉用具販売</li>
              <li>住宅改修（手すり設置・段差解消等、上限20万円）</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>施設サービス</h3>
            <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
              <li>特別養護老人ホーム（介護老人福祉施設）：要介護3〜5が対象</li>
              <li>老人保健施設（介護老人保健施設）：リハビリ中心</li>
              <li>介護医療院：医療的ケアと長期療養が必要な方</li>
            </ul>
          </div>

          {/* 地域包括支援センター */}
          <h2 className="section-title">地域包括支援センター（高齢者の総合相談窓口）</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>センター名</th><th>所在地</th><th>電話</th><th>担当地区</th></tr></thead>
              <tbody>
                <tr>
                  <td>中央地域包括支援センター</td>
                  <td>中央1丁目5番地（市役所内）</td>
                  <td>☎ 0100-88-1121</td>
                  <td>中央・東部地区</td>
                </tr>
                <tr>
                  <td>原野地域包括支援センター</td>
                  <td>原野地区公民館内</td>
                  <td>☎ 0100-54-3100</td>
                  <td>原野・北部地区</td>
                </tr>
                <tr>
                  <td>白嶺地域包括支援センター</td>
                  <td>白嶺地区福祉センター内</td>
                  <td>☎ 0100-55-2200</td>
                  <td>白嶺・南部地区</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, marginTop: 8, lineHeight: 1.8 }}>介護・医療・保健・福祉に関することなら何でもご相談ください。ケアマネジャーへの連絡、認定申請の手続き代行も行っています。</p>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            高齢者支援課（市役所1階）<br />
            ☎ 0100-88-1121　受付時間：平日 8:30〜17:15
          </div>
          <div className="section-title" style={{ marginTop: 16 }}>介護保険 関連情報</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { href: "/kenko/kaigo/seido",     label: "介護保険制度の概要と申請方法" },
              { href: "/kenko/kaigo/hokenryo",  label: "介護保険料のご案内（令和8年度）" },
              { href: "/kenko/kaigo/ninchisho", label: "認知症に関する支援・相談" },
              { href: "/kenko/kaigo/mimamori",  label: "高齢者見守りネットワーク" },
              { href: "/kenko/kaigo/chiiki",    label: "地域包括支援センターのご案内" },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #e8edf4" : "none", fontSize: 13 }}>
                <a href={item.href}>▶ {item.label}</a>
              </div>
            ))}
          </div>
          <PageInfo department="介護保険課" tel="0100-88-1162（内線 162）" updated="令和6年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
