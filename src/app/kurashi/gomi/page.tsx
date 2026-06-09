import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ごみ・リサイクルのご案内 | 日野原市",
};

export default function GomiPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/kurashi">くらし・手続き</a><span>›</span><span>ごみ・リサイクルのご案内</span>
          </div>

          <h1 className="page-title">ごみ・リサイクルのご案内</h1>

          <div className="content-box">
            <h2 className="section-title">ごみの分別早見表</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th>区分</th>
                  <th>収集頻度</th>
                  <th>主な品目</th>
                  <th>出し方</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>燃えるごみ</strong></td>
                  <td>週2回</td>
                  <td>生ごみ・紙くず・衣類・木くず・ゴム・皮革類</td>
                  <td>指定袋（燃えるごみ用）に入れて出す</td>
                </tr>
                <tr>
                  <td><strong>燃えないごみ</strong></td>
                  <td>月2回</td>
                  <td>ガラス・陶磁器・金属類（30cm未満のもの）・小型家電</td>
                  <td>指定袋（燃えないごみ用）に入れて出す</td>
                </tr>
                <tr>
                  <td><strong>資源ごみ（古紙）</strong></td>
                  <td>月1回</td>
                  <td>新聞紙・段ボール・紙パック・雑誌・雑紙</td>
                  <td>種類別にひもで束ねて出す（袋不要）</td>
                </tr>
                <tr>
                  <td><strong>資源ごみ（容器）</strong></td>
                  <td>月1回</td>
                  <td>缶（スチール・アルミ）・瓶（透明・茶・その他色）・ペットボトル</td>
                  <td>中を軽くすすいで指定の回収ネットへ</td>
                </tr>
                <tr>
                  <td><strong>プラスチック</strong></td>
                  <td>月2回</td>
                  <td>プラマーク付き容器包装・レジ袋・トレイ・カップ・ボトル類</td>
                  <td>汚れを落とし指定袋（プラ用）に入れて出す</td>
                </tr>
                <tr>
                  <td><strong>粗大ごみ</strong></td>
                  <td>要申込（月2回収集日に実施）</td>
                  <td>30cm以上の家具・家電（一部対象外）・自転車・ふとんなど</td>
                  <td>事前申込制・指定袋不要・1点300円</td>
                </tr>
              </tbody>
            </table>
            <p>※家電リサイクル法対象品（テレビ・冷蔵庫・洗濯機・エアコン）は市では収集しません。販売店や指定引取場所へお持ちください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">ごみ有料指定袋の種類と価格</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th>種別</th>
                  <th>サイズ</th>
                  <th>枚数</th>
                  <th>価格（税込）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>燃えるごみ用（大）</td>
                  <td>45L</td>
                  <td>50枚入</td>
                  <td>820円</td>
                </tr>
                <tr>
                  <td>燃えるごみ用（中）</td>
                  <td>30L</td>
                  <td>50枚入</td>
                  <td>560円</td>
                </tr>
                <tr>
                  <td>燃えるごみ用（小）</td>
                  <td>15L</td>
                  <td>50枚入</td>
                  <td>310円</td>
                </tr>
                <tr>
                  <td>燃えないごみ用（大）</td>
                  <td>45L</td>
                  <td>50枚入</td>
                  <td>820円</td>
                </tr>
                <tr>
                  <td>燃えないごみ用（中）</td>
                  <td>30L</td>
                  <td>50枚入</td>
                  <td>560円</td>
                </tr>
                <tr>
                  <td>プラスチック用（大）</td>
                  <td>45L</td>
                  <td>50枚入</td>
                  <td>820円</td>
                </tr>
              </tbody>
            </table>
            <p>指定袋は市内のスーパー・コンビニ・ホームセンターなどで購入できます。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">地区別ごみ収集曜日（令和8年度）</h2>
            <p style={{ fontSize: 13, marginBottom: 10 }}>地区によって収集曜日が異なります。お住まいの地区の曜日をご確認のうえ、朝<strong>8時30分まで</strong>に指定の収集場所へ出してください。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th style={{ width: 140 }}>地区</th>
                  <th>燃えるごみ</th>
                  <th>燃えないごみ</th>
                  <th>プラスチック</th>
                  <th>資源（古紙）</th>
                  <th>資源（容器）</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>中央・北部地区</strong></td>
                  <td>火曜・金曜</td>
                  <td>第1・3木曜</td>
                  <td>第2・4木曜</td>
                  <td>第1木曜</td>
                  <td>第3木曜</td>
                </tr>
                <tr>
                  <td><strong>南部・東部地区</strong></td>
                  <td>月曜・木曜</td>
                  <td>第2・4火曜</td>
                  <td>第1・3火曜</td>
                  <td>第1火曜</td>
                  <td>第2火曜</td>
                </tr>
                <tr>
                  <td><strong>原野地区</strong></td>
                  <td>火曜・金曜</td>
                  <td>第1・3水曜</td>
                  <td>第2・4水曜</td>
                  <td>第2水曜</td>
                  <td>第4水曜</td>
                </tr>
                <tr>
                  <td><strong>白嶺地区</strong></td>
                  <td>水曜・土曜</td>
                  <td>第2水曜</td>
                  <td>第4水曜</td>
                  <td>第2土曜</td>
                  <td>第4土曜</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※祝日の収集は翌平日（月〜金）に振替。年末年始（12月31日〜1月3日）は収集なし。詳細は各地区のごみカレンダーでご確認ください。</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {[
                { label: "中央・北部地区", file: "r8-calendar-chuo" },
                { label: "南部・東部地区", file: "r8-calendar-nanbu" },
                { label: "原野地区",       file: "r8-calendar-haruno" },
                { label: "白嶺地区",       file: "r8-calendar-shirotaki" },
              ].map((d) => (
                <a key={d.file} href={`/files/gomi/${d.file}.pdf`}
                  style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "5px 12px", background: "#c0392b", color: "#fff", fontSize: 12, fontWeight: "bold", borderRadius: 2, textDecoration: "none" }}>
                  📄 {d.label}
                </a>
              ))}
            </div>
          </div>

          <div className="content-box">
            <h2 className="section-title">収集日程の確認方法</h2>
            <p>「ひのはらごみカレンダー」で収集日をご確認ください。</p>
            <ul>
              <li>市役所・各自治会でごみカレンダーを配布しています（毎年3月末）</li>
              <li>市ウェブサイトからPDF版をダウンロードできます（上記ボタンより）</li>
              <li>ごみカレンダーアプリ「さんあ〜る」でも収集日の確認・通知設定が可能です</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">粗大ごみの申込方法</h2>
            <p>粗大ごみは事前に申込が必要です。収集日の3日前までにお申し込みください。</p>
            <ul>
              <li><strong>電話：</strong>☎ 0100-88-1200（平日 8:30〜17:00）</li>
              <li><strong>市ウェブサイト：</strong>24時間受付（収集希望日の1週間前まで）</li>
            </ul>
            <p>申込時に品目・個数をお伝えください。処理手数料（1点300円）は収集当日にお支払いいただきます（現金またはPayPay）。</p>
            <p>※パソコンは市では収集しません。メーカーまたは小型家電認定事業者へご相談ください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>窓口</th>
                  <td>環境対策課（市役所2階）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>☎ 0100-88-1136</td>
                </tr>
                <tr>
                  <th>開庁時間</th>
                  <td>平日 8:30〜17:15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="環境対策課" division="廃棄物対策係" tel="0100-88-1136（内線 152）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
