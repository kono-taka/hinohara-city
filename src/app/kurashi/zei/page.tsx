import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "市税・各種税金のご案内 | 日野原市",
};

export default function ZeiPage() {
  return (
    <>
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/kurashi">くらし・手続き</a> › 市税・各種税金のご案内
          </nav>

          <h1 className="page-title">市税・各種税金のご案内</h1>

          <div className="content-box">
            <h2 className="section-title">市民税・県民税（住民税）</h2>
            <p>住民税は、市民税と県民税を合わせたもので、前年の所得に応じて課税されます。毎年1月1日現在の住所地の市区町村で課税されます。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>種別</th>
                  <th>内容</th>
                  <th>税率・金額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>均等割（市民税）</td>
                  <td>所得にかかわらず一定額を負担</td>
                  <td>年額 3,500円</td>
                </tr>
                <tr>
                  <td>均等割（県民税）</td>
                  <td>所得にかかわらず一定額を負担</td>
                  <td>年額 1,500円（森林環境税含む）</td>
                </tr>
                <tr>
                  <td>所得割（市民税）</td>
                  <td>前年の課税所得に応じて課税</td>
                  <td>課税所得 × 6%</td>
                </tr>
                <tr>
                  <td>所得割（県民税）</td>
                  <td>前年の課税所得に応じて課税</td>
                  <td>課税所得 × 4%</td>
                </tr>
              </tbody>
            </table>
            <p>給与所得者は特別徴収（給与から毎月天引き）、それ以外の方は普通徴収（納付書または口座振替）で納付します。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">固定資産税・都市計画税</h2>
            <p>固定資産税は、毎年1月1日現在、市内に土地・家屋・償却資産を所有している方に課税されます。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>税目</th>
                  <th>標準税率</th>
                  <th>課税対象</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>固定資産税</td>
                  <td>1.4%</td>
                  <td>土地・家屋・償却資産の評価額</td>
                </tr>
                <tr>
                  <td>都市計画税</td>
                  <td>0.3%</td>
                  <td>市街化区域内の土地・家屋の評価額</td>
                </tr>
              </tbody>
            </table>
            <p>固定資産の評価額は3年ごとに評価替えが行われます（次回は令和9年度）。土地・家屋の評価額は「固定資産税課税明細書」でご確認いただけます。小規模住宅用地（200㎡以下の部分）は課税標準額を評価額の1/6に軽減する特例があります。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">軽自動車税（種別割）</h2>
            <p>毎年4月1日現在、軽自動車等を所有している方に課税されます。</p>
            <table className="content-table">
              <thead>
                <tr>
                  <th>車種区分</th>
                  <th>年税額</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>原動機付自転車（50cc以下）</td>
                  <td>2,000円</td>
                </tr>
                <tr>
                  <td>原動機付自転車（50cc超90cc以下）</td>
                  <td>2,000円</td>
                </tr>
                <tr>
                  <td>原動機付自転車（90cc超125cc以下）</td>
                  <td>2,400円</td>
                </tr>
                <tr>
                  <td>二輪の軽自動車（125cc超250cc以下）</td>
                  <td>3,600円</td>
                </tr>
                <tr>
                  <td>二輪の小型自動車（250cc超）</td>
                  <td>6,000円</td>
                </tr>
                <tr>
                  <td>三輪の軽自動車</td>
                  <td>3,700円</td>
                </tr>
                <tr>
                  <td>四輪乗用・自家用</td>
                  <td>10,800円</td>
                </tr>
                <tr>
                  <td>四輪乗用・営業用</td>
                  <td>6,900円</td>
                </tr>
                <tr>
                  <td>四輪貨物・自家用</td>
                  <td>5,000円</td>
                </tr>
                <tr>
                  <td>四輪貨物・営業用</td>
                  <td>3,800円</td>
                </tr>
              </tbody>
            </table>
            <p>※初めて車両検査証の交付を受けてから13年を超えた車両（電気・ガス等を除く）は、重課税率（概ね20%増）が適用されます。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">納期一覧</h2>
            <table className="content-table">
              <thead>
                <tr>
                  <th>税目</th>
                  <th>第1期</th>
                  <th>第2期</th>
                  <th>第3期</th>
                  <th>第4期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>市民税・県民税（普通徴収）</td>
                  <td>6月末</td>
                  <td>8月末</td>
                  <td>10月末</td>
                  <td>翌1月末</td>
                </tr>
                <tr>
                  <td>固定資産税・都市計画税</td>
                  <td>4月末</td>
                  <td>7月末</td>
                  <td>12月末</td>
                  <td>翌2月末</td>
                </tr>
                <tr>
                  <td>軽自動車税（種別割）</td>
                  <td>5月末（全期一括）</td>
                  <td>—</td>
                  <td>—</td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">便利な納税方法</h2>
            <h3>口座振替</h3>
            <p>金融機関またはゆうちょ銀行の口座から自動で引き落とします。税務課または各金融機関窓口で申込手続きが必要です。</p>
            <h3>クレジットカード納税</h3>
            <p>地方税お支払サイト（エルタックス）からクレジットカードで納付できます。ただし、システム利用料（納付額の約1%）が別途かかります。</p>
            <h3>スマートフォンアプリ決済</h3>
            <p>PayPay・LINE Pay・au PAY等のバーコード決済に対応しています。納税通知書のバーコードをアプリで読み取ってください。</p>
          </div>

          <div className="content-box">
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>窓口</th>
                  <td>税務課（市役所1階）</td>
                </tr>
                <tr>
                  <th>電話番号</th>
                  <td>☎ 0439-88-1116</td>
                </tr>
                <tr>
                  <th>開庁時間</th>
                  <td>平日 8:30〜17:15</td>
                </tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="税務課" division="市民税係" tel="0439-88-1116（内線 221）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
