import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "国民年金",
  description: "日野原市の国民年金に関するご案内。加入・脱退手続き、令和8年度の保険料、免除・猶予制度、各種給付（老齢・障害・遺族）について。",
};

export default function NenkinPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "くらし・手続き", href: "/kurashi" },
        { name: "国民年金" },
      ]} />
      <SiteHeader current="/kurashi" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kurashi">くらし・手続き</a><span>›</span>
            <span>国民年金</span>
          </div>
          <h1 className="page-title">国民年金</h1>

          <div className="content-box" style={{ borderLeft: "4px solid var(--city-blue)", background: "#f0f4fb" }}>
            <p style={{ fontSize: 13, lineHeight: 1.85, margin: 0 }}>
              国民年金は、日本に住む20歳以上60歳未満のすべての人が加入する公的年金制度です。
              会社員・公務員の方は厚生年金に加入しますが、農業・自営業・フリーランス・学生等は国民年金（第1号被保険者）となります。
              日野原市では、市民課窓口で加入・脱退・免除申請などの手続きを行っています。
            </p>
          </div>

          {/* ── 加入・脱退 ── */}
          <div className="content-box">
            <h2 className="section-title">加入・脱退の手続き</h2>
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 180 }}>手続き</th><th>対象</th><th>届出先・方法</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>加入（第1号）</strong></td>
                  <td>会社を退職した・20歳になった・配偶者の扶養から外れた</td>
                  <td>市役所市民課窓口または郵送・マイナポータル</td>
                </tr>
                <tr>
                  <td><strong>第2号→第1号への変更</strong></td>
                  <td>会社を退職したとき（厚生年金の喪失）</td>
                  <td>退職日の翌日から14日以内に手続き</td>
                </tr>
                <tr>
                  <td><strong>第3号→第1号への変更</strong></td>
                  <td>配偶者の扶養から外れたとき</td>
                  <td>事由発生から14日以内に市民課へ届出</td>
                </tr>
                <tr>
                  <td><strong>脱退（60歳到達）</strong></td>
                  <td>60歳になる月の前月まで保険料を納付</td>
                  <td>特別な手続きは不要（自動終了）</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※持参書類：本人確認書類（マイナンバーカード等）・年金手帳または基礎年金番号通知書
            </p>
          </div>

          {/* ── 保険料 ── */}
          <div className="content-box">
            <h2 className="section-title">令和8年度の保険料</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 180 }}>月額保険料</th>
                  <td><strong>16,980円</strong>（令和8年度）</td>
                </tr>
                <tr>
                  <th>前納割引</th>
                  <td>
                    年度前納（4月〜翌3月一括）：約3,510円割引<br />
                    半年前納（各4月・10月）：約860円割引<br />
                    2年前納：約14,520円割引
                  </td>
                </tr>
                <tr>
                  <th>口座振替割引</th>
                  <td>当月分を当月末に引き落とす「早割」で月50円割引</td>
                </tr>
                <tr>
                  <th>支払方法</th>
                  <td>口座振替・納付書払い（コンビニ・金融機関）・クレジットカード払い</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 免除・猶予 ── */}
          <div className="content-box">
            <h2 className="section-title">保険料の免除・猶予制度</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8, marginBottom: 10 }}>
              所得が少ない場合や失業した場合などに、保険料の全部または一部の支払いが免除・猶予される制度があります。
              未納のままにするより、免除・猶予の申請をすることで将来の年金受給資格を守ることができます。
            </p>
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 180 }}>制度名</th><th>対象</th><th>免除割合</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td>全額免除</td>
                  <td>前年所得が一定基準以下の方（生活保護受給者等）</td>
                  <td>保険料全額</td>
                </tr>
                <tr>
                  <td>4分の3免除</td>
                  <td>前年所得が一定基準以下の方</td>
                  <td>4,250円/月を納付</td>
                </tr>
                <tr>
                  <td>半額免除</td>
                  <td>前年所得が一定基準以下の方</td>
                  <td>8,490円/月を納付</td>
                </tr>
                <tr>
                  <td>4分の1免除</td>
                  <td>前年所得が一定基準以下の方</td>
                  <td>12,740円/月を納付</td>
                </tr>
                <tr>
                  <td>納付猶予（50歳未満）</td>
                  <td>50歳未満で所得が少ない方</td>
                  <td>全額猶予（後から追納可）</td>
                </tr>
                <tr>
                  <td>学生納付特例</td>
                  <td>大学等在学中の学生</td>
                  <td>在学中は猶予（後から追納可）</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※申請は毎年度必要です（7月〜翌6月分）。申請は市役所市民課または君津年金事務所へ。
            </p>
          </div>

          {/* ── 給付 ── */}
          <div className="content-box">
            <h2 className="section-title">国民年金の給付（受け取れる年金）</h2>
            <table className="content-table">
              <thead>
                <tr><th style={{ width: 120 }}>給付の種類</th><th>受給要件</th><th>令和8年度額（満額）</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>老齢基礎年金</strong></td>
                  <td>受給資格期間10年以上を満たし、65歳から受給開始</td>
                  <td>816,000円/年（月68,000円相当）</td>
                </tr>
                <tr>
                  <td><strong>障害基礎年金</strong></td>
                  <td>病気・けがで障害等級1・2級に認定された場合</td>
                  <td>1級：1,020,000円/年　2級：816,000円/年</td>
                </tr>
                <tr>
                  <td><strong>遺族基礎年金</strong></td>
                  <td>国民年金加入者が亡くなり、子のある配偶者または子が対象</td>
                  <td>816,000円＋子の加算額/年</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>
              ※給付の請求・相談は君津年金事務所（☎ 0439-57-6511）または市役所市民課へ。
            </p>
          </div>

          {/* ── ねんきん定期便 ── */}
          <div className="content-box" style={{ background: "#fffde7", borderLeft: "4px solid #f9a825" }}>
            <h2 className="section-title">ねんきん定期便・ねんきんネット</h2>
            <p style={{ fontSize: 13, lineHeight: 1.8 }}>
              毎年誕生月に「ねんきん定期便」（ハガキまたは封書）が届きます。加入実績・将来の年金見込み額を確認できます。
              「ねんきんネット」（<a href="https://www.nenkin.go.jp/n_net/" target="_blank" rel="noopener noreferrer">日本年金機構ウェブサイト</a>）では、年金記録のオンライン確認も可能です。
            </p>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>日野原市役所 市民課</th><td>☎ 0100-88-1102（内線 102）　市役所1階</td></tr>
                <tr><th>受付時間</th><td>平日 8:30〜17:15</td></tr>
                <tr><th>君津年金事務所</th><td>☎ 0439-57-6511　〒299-1151 千葉県君津市君津1丁目11番地</td></tr>
                <tr><th>年金ナビダイヤル</th><td>☎ 0570-05-1165（平日 8:30〜17:15）</td></tr>
              </tbody>
            </table>
          </div>

          <PageInfo department="市民課" division="年金係" tel="0100-88-1102（内線 102）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
