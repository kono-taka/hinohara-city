import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "国民健康保険のご案内" };

export default function KokuhoPage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kenko">健康・福祉</a><span>›</span>
            <span>国民健康保険のご案内</span>
          </div>
          <h1 className="page-title">国民健康保険のご案内</h1>

          {/* 加入・脱退 */}
          <h2 className="section-title">加入・脱退の手続き</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>国民健康保険（国保）は、職場の健康保険や後期高齢者医療制度に加入していない方が対象の医療保険です。加入・脱退の事由が生じた日から<strong>14日以内</strong>に届け出てください。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>加入が必要な場合と必要書類</h3>
            <table className="content-table">
              <thead><tr><th>事由</th><th>必要書類</th></tr></thead>
              <tbody>
                <tr>
                  <td>転入したとき</td>
                  <td>転入届・前住所地の国保資格喪失証明書またはマイナンバー</td>
                </tr>
                <tr>
                  <td>職場の保険を脱退したとき</td>
                  <td>健康保険資格喪失証明書・マイナンバー</td>
                </tr>
                <tr>
                  <td>子どもが生まれたとき</td>
                  <td>親の保険証・出生届の受理証明書</td>
                </tr>
                <tr>
                  <td>生活保護が廃止されたとき</td>
                  <td>生活保護廃止決定通知書</td>
                </tr>
              </tbody>
            </table>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>脱退が必要な場合</h3>
            <table className="content-table">
              <thead><tr><th>事由</th><th>必要書類</th></tr></thead>
              <tbody>
                <tr>
                  <td>転出するとき</td>
                  <td>国保保険証・転出届</td>
                </tr>
                <tr>
                  <td>職場の保険に加入したとき</td>
                  <td>国保保険証・新しい保険証</td>
                </tr>
                <tr>
                  <td>75歳になったとき（後期高齢者医療へ移行）</td>
                  <td>国保保険証（自動で後期高齢者医療被保険者証が届きます）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 保険税の計算方法 */}
          <h2 className="section-title">令和8年度 国民健康保険税の計算方法</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>国民健康保険税は、以下の3つの分を合算して世帯単位で計算します。</p>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>区分</th>
                    <th>所得割（前年所得－43万円）</th>
                    <th>均等割（加入者1人あたり）</th>
                    <th>平等割（世帯あたり）</th>
                    <th>賦課限度額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>医療分</strong></td>
                    <td>7.8%</td>
                    <td>31,200円</td>
                    <td>23,400円</td>
                    <td>65万円</td>
                  </tr>
                  <tr>
                    <td><strong>後期高齢者支援分</strong></td>
                    <td>2.4%</td>
                    <td>10,800円</td>
                    <td>―</td>
                    <td>22万円</td>
                  </tr>
                  <tr>
                    <td><strong>介護分</strong>（40〜64歳のみ）</td>
                    <td>1.8%</td>
                    <td>9,600円</td>
                    <td>―</td>
                    <td>17万円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8, lineHeight: 1.8 }}>
              ※世帯の所得が少ない場合は、均等割・平等割が軽減される場合があります（7割・5割・2割軽減）。<br />
              ※国保税の納期は年8回（7月〜翌2月）です。口座振替をご利用ください。
            </p>
          </div>

          {/* 保険証 */}
          <h2 className="section-title">保険証の種類・有効期限</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8 }}>国保の保険証は毎年<strong>8月1日</strong>に更新します。新しい保険証は7月末までに世帯主あてに郵送します。古い保険証は市民課国保係へ返却してください。</p>
            <table className="content-table" style={{ marginTop: 10 }}>
              <thead><tr><th>証の種類</th><th>対象</th><th>有効期限</th></tr></thead>
              <tbody>
                <tr>
                  <td>国民健康保険被保険者証</td>
                  <td>一般加入者</td>
                  <td>毎年7月31日（8月更新）</td>
                </tr>
                <tr>
                  <td>国民健康保険被保険者証（短期証）</td>
                  <td>保険税に滞納がある世帯</td>
                  <td>有効期間2〜6か月（状況により異なる）</td>
                </tr>
                <tr>
                  <td>限度額適用認定証</td>
                  <td>医療費が高額になる方</td>
                  <td>申請月から翌7月31日</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: 10, lineHeight: 1.8 }}>マイナ保険証（マイナンバーカード）を健康保険証として利用することもできます。詳しくは市民課国保係にお問い合わせください。</p>
          </div>

          {/* 高額療養費 */}
          <h2 className="section-title">高額療養費制度</h2>
          <div className="content-box">
            <p style={{ lineHeight: 1.8, marginBottom: 10 }}>1か月の医療費の自己負担額が限度額を超えた場合、超えた分が払い戻されます（申請が必要です）。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", marginBottom: 6 }}>70歳未満の自己負担限度額（月額）</h3>
            <div style={{ overflowX: "auto" }}>
              <table className="content-table">
                <thead>
                  <tr>
                    <th>所得区分</th>
                    <th>自己負担限度額</th>
                    <th>多数回該当</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>区分ア（基礎控除後901万円超）</td>
                    <td>252,600円＋（医療費－842,000円）×1%</td>
                    <td>140,100円</td>
                  </tr>
                  <tr>
                    <td>区分イ（600万円超〜901万円以下）</td>
                    <td>167,400円＋（医療費－558,000円）×1%</td>
                    <td>93,000円</td>
                  </tr>
                  <tr>
                    <td>区分ウ（210万円超〜600万円以下）</td>
                    <td>80,100円＋（医療費－267,000円）×1%</td>
                    <td>44,400円</td>
                  </tr>
                  <tr>
                    <td>区分エ（210万円以下）</td>
                    <td>57,600円</td>
                    <td>44,400円</td>
                  </tr>
                  <tr>
                    <td>区分オ（住民税非課税）</td>
                    <td>35,400円</td>
                    <td>24,600円</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>※過去12か月以内に3回以上限度額に達した場合は「多数回該当」の金額が適用されます。</p>
          </div>

          {/* 給付金 */}
          <h2 className="section-title">出産育児一時金・葬祭費</h2>
          <div className="content-box">
            <table className="content-table">
              <thead><tr><th>給付種別</th><th>支給額</th><th>申請先・手続き</th></tr></thead>
              <tbody>
                <tr>
                  <td>出産育児一時金</td>
                  <td>50万円（産科医療補償制度加入医療機関での出産）</td>
                  <td>医療機関への直接支払制度を利用すると窓口負担なし</td>
                </tr>
                <tr>
                  <td>葬祭費</td>
                  <td>5万円</td>
                  <td>被保険者が死亡した日の翌日から2年以内に市民課で申請</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 窓口 */}
          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8, marginTop: 16 }}>
            <strong>お問い合わせ先</strong><br />
            市民課 国保係（市役所1階）<br />
            ☎ 0100-88-1113　受付時間：平日 8:30〜17:15
          </div>
          <div className="section-title" style={{ marginTop: 16 }}>国民健康保険 関連情報</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { href: "/kenko/kokuho/tetsuzuki", label: "国民健康保険の加入・脱退の手続き" },
              { href: "/kenko/kokuho/zei",       label: "令和8年度 国民健康保険税について" },
              { href: "/kenko/kokuho/joshi",     label: "医療費の助成（子ども・障がい者）" },
              { href: "/kenko/kokuho/kouki",     label: "後期高齢者医療制度のご案内" },
              { href: "/kenko/kokuho/kyukyu",    label: "救急医療・時間外診療のご案内" },
              { href: "/kenko/kokuho/iin",       label: "市内医療機関一覧" },
            ].map((item, i, arr) => (
              <div key={i} style={{ padding: "9px 14px", borderBottom: i < arr.length - 1 ? "1px solid #e8edf4" : "none", fontSize: 13 }}>
                <a href={item.href}>▶ {item.label}</a>
              </div>
            ))}
          </div>
          <PageInfo department="健康推進課" division="国保係" tel="0100-88-1165（内線 165）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
