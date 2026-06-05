import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "選挙情報", description: "日野原市の選挙に関する情報です。選挙日程、投票所一覧、期日前投票、選挙人名簿登録などをご案内します。" };

const pastElections = [
  { name: "日野原市議会議員選挙", date: "令和5年4月23日", eligible: "39,821人", turnout: "54.32%", seats: 16 },
  { name: "日野原市長選挙", date: "令和5年4月23日", eligible: "39,821人", turnout: "54.32%", seats: 1 },
  { name: "千葉県議会議員選挙（日野原市選挙区）", date: "令和5年4月9日", eligible: "39,540人", turnout: "42.18%", seats: 1 },
  { name: "日野原市議会議員選挙", date: "令和元年4月21日", eligible: "41,033人", turnout: "57.89%", seats: 16 },
  { name: "日野原市長選挙", date: "令和元年4月21日", eligible: "41,033人", turnout: "57.89%", seats: 1 },
];

const polling = [
  { no: 1, name: "中央地区センター", area: "中央一〜三丁目、中央四〜七丁目（一部）" },
  { no: 2, name: "日野原市役所（市民ホール）", area: "中央四〜七丁目（残）、中央八〜九丁目" },
  { no: 3, name: "北部地区センター", area: "北部一〜三丁目、北原町" },
  { no: 4, name: "北部小学校（体育館）", area: "北部四〜六丁目、星ケ丘" },
  { no: 5, name: "南部地区センター", area: "南部一〜四丁目" },
  { no: 6, name: "農業公園　多目的ホール", area: "下原地区（全域）" },
  { no: 7, name: "西部地区センター", area: "西部一〜三丁目、中原地区" },
  { no: 8, name: "東部地区センター", area: "東部一〜四丁目" },
  { no: 9, name: "原野地区センター", area: "原野地区（全域）" },
  { no: 10, name: "白峰地区センター", area: "白峰地区（全域）" },
];

export default function SenkyoPage() {
  return (
    <>
      <SiteHeader current="/shisei" />
      <div className="main-container">
        <main className="main-content">
          <nav className="breadcrumb">
            <a href="/">トップ</a> › <a href="/shisei">市政情報</a> › 選挙情報
          </nav>
          <h1 className="page-title">選挙情報</h1>

          {/* 直近の選挙日程 */}
          <div style={{ background: "#fff8e6", border: "2px solid #f39c12", padding: "12px 16px", marginBottom: 20, borderRadius: 4 }}>
            <div style={{ fontWeight: "bold", fontSize: 13, color: "#854d0e", marginBottom: 6 }}>
              📢 次回選挙のご案内
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              <strong>令和9年4月</strong>に任期満了に伴う<strong>日野原市議会議員選挙</strong>および<strong>日野原市長選挙</strong>が予定されています。
              選挙期日・選挙区・候補者情報等は決定次第、このページおよび広報ひのはらでお知らせします。
            </p>
          </div>

          {/* 選挙人名簿 */}
          <div className="content-box">
            <h3>選挙人名簿への登録・抹消</h3>
            <table className="content-table">
              <tbody>
                <tr>
                  <th>登録の条件</th>
                  <td>日野原市の住民基本台帳に記録されている満18歳以上の日本国民（3か月以上継続して住所のある方）</td>
                </tr>
                <tr>
                  <th>定時登録</th>
                  <td>毎年3月・6月・9月・12月の1日に登録。選挙の直前にも臨時登録を実施します。</td>
                </tr>
                <tr>
                  <th>在外選挙人名簿</th>
                  <td>海外に住所を有する日本国民の方は、在外選挙人名簿への登録申請ができます。詳しくは選挙管理委員会へ。</td>
                </tr>
                <tr>
                  <th>名簿登録者数</th>
                  <td>34,208人（令和8年3月1日現在）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 不在者投票・期日前投票 */}
          <div className="content-box">
            <h3>期日前投票・不在者投票</h3>
            <table className="content-table">
              <tbody>
                <tr>
                  <th style={{ width: 160 }}>期日前投票</th>
                  <td>
                    公示（告示）日の翌日から選挙期日の前日まで実施します。<br />
                    <strong>場所：</strong>日野原市役所 1階市民ホール<br />
                    <strong>時間：</strong>8:30〜20:00
                  </td>
                </tr>
                <tr>
                  <th>不在者投票（病院・施設）</th>
                  <td>都道府県の選挙管理委員会に指定された病院・老人ホーム等に入院・入所中の方は、その施設内で不在者投票ができます。</td>
                </tr>
                <tr>
                  <th>郵便等による不在者投票</th>
                  <td>身体に重度の障がいがある方は、郵便等による不在者投票ができます。事前に選挙管理委員会への申請が必要です（☎ 0100-88-8340）。</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 投票所一覧 */}
          <div className="section-title">投票所一覧</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 20 }}>
            <table className="content-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: 50 }}>番号</th>
                  <th style={{ width: 200 }}>投票所名</th>
                  <th>投票区域</th>
                </tr>
              </thead>
              <tbody>
                {polling.map((p) => (
                  <tr key={p.no}>
                    <td style={{ textAlign: "center", fontWeight: "bold" }}>第{p.no}投票区</td>
                    <td>{p.name}</td>
                    <td style={{ fontSize: 12.5 }}>{p.area}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: "8px 14px", fontSize: 11.5, color: "#888", borderTop: "1px solid #eef1f6" }}>
              ※投票時間は7:00〜20:00です（最終投票所の閉鎖時刻は変更になる場合があります）。
            </div>
          </div>

          {/* 過去の選挙結果 */}
          <div className="section-title">過去の選挙結果</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 20 }}>
            <table className="content-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th>選挙名</th>
                  <th style={{ width: 140 }}>選挙期日</th>
                  <th style={{ width: 100 }}>選挙人数</th>
                  <th style={{ width: 80 }}>投票率</th>
                  <th style={{ width: 60 }}>定数</th>
                </tr>
              </thead>
              <tbody>
                {pastElections.map((e, i) => (
                  <tr key={i}>
                    <td><a href="#">{e.name}</a></td>
                    <td>{e.date}</td>
                    <td style={{ textAlign: "right" }}>{e.eligible}</td>
                    <td style={{ textAlign: "center", fontWeight: "bold", color: "var(--city-primary)" }}>{e.turnout}</td>
                    <td style={{ textAlign: "center" }}>{e.seats}名</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 選挙管理委員会 */}
          <div className="content-box">
            <h3>日野原市選挙管理委員会</h3>
            <table className="content-table">
              <tbody>
                <tr><th style={{ width: 160 }}>所在地</th><td>〒299-1401 千葉県日野原市中央一丁目1番地1号（市役所3階）</td></tr>
                <tr><th>電話</th><td>0100-88-8340（内線 340）</td></tr>
                <tr><th>FAX</th><td>0100-88-8341</td></tr>
                <tr><th>受付時間</th><td>平日 8:30〜17:15</td></tr>
                <tr>
                  <th>委員長</th>
                  <td>白石 邦彦（しらいし くにひこ）</td>
                </tr>
              </tbody>
            </table>
          </div>

          <PageInfo
            department="選挙管理委員会事務局"
            tel="0100-88-8340（内線 340）"
            updated="令和8年4月1日"
          />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
