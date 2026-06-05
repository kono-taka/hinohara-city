import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "保育所・幼稚園のご案内" };

export default function HoikuPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kyoiku">教育・文化・スポーツ</a><span>›</span>
            <span>保育所・幼稚園のご案内</span>
          </div>
          <h1 className="page-title">保育所・幼稚園のご案内</h1>

          {/* 施設一覧 */}
          <h2 className="section-title">施設一覧</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>市内には公立・私立合わせて5か所の保育・幼児教育施設があります。各施設の教育方針・特色を踏まえてお選びください。</p>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>施設名</th>
                    <th>種別</th>
                    <th>住所</th>
                    <th>電話</th>
                    <th>定員</th>
                    <th>対象年齢</th>
                    <th>保育時間</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>市立ひのはら保育所</td>
                    <td>認定こども園</td>
                    <td>中央1丁目</td>
                    <td>0100-88-5200</td>
                    <td>120名</td>
                    <td>0〜5歳</td>
                    <td>7:00〜19:00</td>
                  </tr>
                  <tr>
                    <td>市立北部保育所</td>
                    <td>保育所</td>
                    <td>北部4丁目</td>
                    <td>0100-53-2100</td>
                    <td>60名</td>
                    <td>0〜5歳</td>
                    <td>7:30〜18:30</td>
                  </tr>
                  <tr>
                    <td>市立原野保育所</td>
                    <td>保育所</td>
                    <td>原野地区</td>
                    <td>0100-54-1200</td>
                    <td>40名</td>
                    <td>0〜5歳</td>
                    <td>7:30〜18:00</td>
                  </tr>
                  <tr>
                    <td>白峰保育園</td>
                    <td>私立保育所</td>
                    <td>白峰地区</td>
                    <td>0100-55-0300</td>
                    <td>30名</td>
                    <td>0〜5歳</td>
                    <td>7:30〜18:30</td>
                  </tr>
                  <tr>
                    <td>日野原幼稚園</td>
                    <td>私立幼稚園</td>
                    <td>中央5丁目</td>
                    <td>0100-88-5500</td>
                    <td>80名</td>
                    <td>3〜5歳</td>
                    <td>9:00〜14:00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 教育方針・カリキュラム */}
          <h2 className="section-title">幼児期の教育・保育方針</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>市立保育所・認定こども園では、保育所保育指針および幼保連携型認定こども園教育・保育要領に基づき、以下の5領域を中心に子どもの発達を支援しています。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>領域</th><th>ねらいと内容</th></tr></thead>
              <tbody>
                <tr><td>健康</td><td>丈夫な体と健康な心を育て、進んで運動し、基本的な生活習慣を身につける</td></tr>
                <tr><td>人間関係</td><td>友達・保育者との関わりを通じて協調性・思いやりを育む</td></tr>
                <tr><td>環境</td><td>自然・身近な事物に好奇心を持ち、探究する力を育む</td></tr>
                <tr><td>言葉</td><td>日常生活で言葉への興味・関心を高め、表現力と語彙力を育む</td></tr>
                <tr><td>表現</td><td>感じたことを音楽・造形・身体で自由に表現する喜びを育む</td></tr>
              </tbody>
            </table>
            <p style={{ marginTop: 10, lineHeight: 1.8 }}>
              <strong>市立保育所の特色ある活動：</strong><br />
              自然体験活動（農業体験・山歩き・雪遊び）、英語あそび（週1回・外部講師）、
              地域の高齢者との交流（老人福祉センター訪問）、異年齢交流保育を積極的に実施しています。
            </p>
          </div>

          {/* 認定区分 */}
          <h2 className="section-title">認定区分（利用するための認定）</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>保育所・幼稚園・認定こども園を利用するには、「教育・保育給付認定」を受ける必要があります。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>認定区分</th>
                  <th>対象</th>
                  <th>利用できる施設</th>
                  <th>保育時間</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1号認定</strong><br />（教育標準時間）</td>
                  <td>3〜5歳で、保護者の就労等にかかわらず教育を希望する子ども</td>
                  <td>幼稚園・認定こども園（教育部分）</td>
                  <td>最大8時間（教育標準時間）</td>
                </tr>
                <tr>
                  <td><strong>2号認定</strong><br />（保育必要量）</td>
                  <td>3〜5歳で、保護者の就労・疾病等の事由により保育が必要な子ども</td>
                  <td>保育所・認定こども園（保育部分）</td>
                  <td>最大11時間（保育標準時間）または8時間（短時間）</td>
                </tr>
                <tr>
                  <td><strong>3号認定</strong><br />（保育必要量）</td>
                  <td>0〜2歳で、保護者の就労・疾病等の事由により保育が必要な子ども</td>
                  <td>保育所・認定こども園（保育部分）・地域型保育</td>
                  <td>最大11時間（保育標準時間）または8時間（短時間）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 保育料 */}
          <h2 className="section-title">保育料（利用者負担額）</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>保育料は世帯の所得（市民税額）に応じて決まります。市独自の軽減措置により、国基準より低い保育料を設定しています。</p>
            <table className="content-table">
              <thead><tr><th>年齢・区分</th><th>内容</th></tr></thead>
              <tbody>
                <tr>
                  <td>3〜5歳児（1・2号認定）</td>
                  <td><strong>幼児教育・保育の無償化により保育料は無料</strong>（給食費の副食費部分は別途）</td>
                </tr>
                <tr>
                  <td>0〜2歳児（3号認定）・第1子</td>
                  <td>所得に応じた保育料（月額6,000〜44,500円）</td>
                </tr>
                <tr>
                  <td>第2子</td>
                  <td>第1子の保育料から50%減額（第1子が小学3年生以下で在所中の場合）</td>
                </tr>
                <tr>
                  <td>第3子以降</td>
                  <td><strong>無償</strong>（市独自軽減措置。第1子・第2子の就学・年齢を問わない）</td>
                </tr>
                <tr>
                  <td>市民税非課税世帯</td>
                  <td>0〜2歳児も無料（市独自軽減措置）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 入所申込フロー */}
          <h2 className="section-title">入所申込のフロー（翌年4月入所の場合）</h2>
          <div className="content-box">
            <ol style={{ paddingLeft: 20, lineHeight: 2.4 }}>
              <li><strong>希望調査（9月下旬）</strong>　入所を希望する施設を第1〜第3希望まで記入</li>
              <li><strong>説明会・施設見学（10月）</strong>　各施設で開催する保護者説明会・施設開放に参加（任意）</li>
              <li><strong>申請書類の提出（11月1日〜30日）</strong>　子育て支援課に申請書・就労証明書等の必要書類を提出</li>
              <li><strong>選考・調整（12月）</strong>　保育の必要性・きょうだい在所状況等をもとに選考</li>
              <li><strong>内定通知（12月下旬）</strong>　入所内定の通知を郵送。希望に添えない場合も連絡します</li>
              <li><strong>入所前面接・健康診断（1〜3月）</strong>　各施設での入所前面接・集団健康診断</li>
              <li><strong>入所（4月1日）</strong>　入所説明会は3月中旬に各施設で実施</li>
            </ol>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※年度途中の入所は随時受け付けています。空き状況は子育て支援課（☎ 0100-88-1123）にお問い合わせください。
            </p>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            子育て支援課（市役所1階）<br />
            ☎ 0100-88-1123　受付時間：平日 8:30〜17:15
          </div>
          <PageInfo department="子育て支援課" division="保育係" tel="0100-88-1172（内線 172）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
