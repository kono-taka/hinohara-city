import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年末年始のごみ収集・環境センター休業のお知らせ（令和8年度）",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>年末年始のごみ収集・環境センター休業のお知らせ（令和8年度）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月20日</span>
            <span>担当課：環境対策課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">年末年始のごみ収集・環境センター休業のお知らせ（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年の年末年始（12月28日〜令和9年1月4日）のごみ収集日程および日野原市環境センターの休業期間についてお知らせします。年末のごみの量は増加する傾向にありますので、早めの分別・排出にご協力をお願いいたします。
            </p>

            <div style={{ background: "#fff8f0", border: "1px solid #e0a040", padding: "10px 14px", borderRadius: 3, marginBottom: 20 }}>
              <strong>【重要】</strong><br />
              12月28日（月）以降は収集を休止します。燃やすごみ・資源ごみともに年末最終収集日（下記参照）の朝8時までに集積場へ排出してください。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>1．年末年始のごみ収集休止期間</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <tbody>
                {[
                  ["収集休止期間", "令和8年12月28日（月）〜令和9年1月4日（日）"],
                  ["収集再開日", "令和9年1月5日（月）（通常スケジュール通り）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", width: 180, textAlign: "left", fontWeight: "normal", whiteSpace: "nowrap" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>2．年末最終収集日（収集種別ごと）</h3>
            <p>
              下記は令和8年の年末最終収集日です。各収集種別の最終収集日以降は収集を行いませんので、次回収集日（1月5日以降）まで自宅で保管してください。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "40%" }}>収集種別</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>年末最終収集日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["燃やすごみ", "令和8年12月26日（金）または12月27日（土）（地区の収集曜日による）"],
                  ["資源ごみ（缶・びん・ペットボトル）", "令和8年12月26日（金）または12月27日（土）（地区の収集曜日による）"],
                  ["プラスチック製容器包装", "令和8年12月25日（木）または12月26日（金）（地区の収集曜日による）"],
                  ["紙・布類（集団資源回収）", "令和8年12月20日（土）（一部地区は12月27日（土））"],
                  ["小型家電・乾電池類", "令和8年12月26日（金）（該当地区のみ）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ color: "#666", fontSize: 12 }}>
              ※ 各地区の収集曜日は、ごみ収集カレンダー（各戸配布済み）または市ホームページ「<a href="/kurashi/gomi" style={{ color: "var(--link-color)" }}>ごみの出し方・分別</a>」をご確認ください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>3．日野原市環境センター（持ち込み）の休業について</h3>
            <p>
              日野原市環境センター（一般廃棄物処理場）は、年末年始の下記期間中、一般市民の方による直接持ち込み搬入を休止します。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <tbody>
                {[
                  ["休業期間", "令和8年12月29日（火）〜令和9年1月3日（土）"],
                  ["受入れ再開", "令和9年1月5日（月）8:30〜"],
                  ["通常受入れ時間", "平日 8:30〜16:30（土曜日は12:00まで受付）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", width: 180, textAlign: "left", fontWeight: "normal", whiteSpace: "nowrap" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              なお、事業系一般廃棄物（事業者からの搬入）についても同期間は休業となります。事業者の皆様はあらかじめご対応をお願いいたします。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 24, marginBottom: 8 }}>4．年末ごみ排出のお願い</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>年末は大掃除等によりごみの排出量が増えます。収集量の増加により収集時間が遅れることがありますので、ご了承ください。</li>
              <li>大型の不用品（粗大ごみ）は、事前申込が必要です。年末の申込は<strong>12月19日（金）まで</strong>に環境対策課へお申し込みください（収集は12月26日（金）が最終日）。</li>
              <li>ごみは必ず指定袋・分別ルールを守って排出してください。ルールを守らない排出は収集できない場合があります。</li>
              <li>ごみ集積場のネット・フタは収集後に必ず元に戻し、年末年始を通じて清潔な状態を保つよう各地区でのご協力をお願いいたします。</li>
            </ul>

            <div style={{ background: "#f4f8ff", border: "1px solid #b0c8e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>ごみの分別・収集日程の詳細はこちら</strong><br />
              <span style={{ display: "block", marginTop: 6 }}>
                ・<a href="/kurashi/gomi" style={{ color: "var(--link-color)" }}>ごみの出し方・分別（くらし・手続きページ）</a><br />
                ・地区別ごみ収集カレンダー（令和8〜9年度版）は環境対策課窓口でも配布しています。
              </span>
            </div>
          </div>

          <PageInfo department="環境対策課" division="廃棄物対策係" tel="0439-88-1293（内線 293）" updated="令和8年11月20日" />
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <a href="/news" style={{ fontSize: 13, color: "var(--link-color)" }}>← お知らせ・新着情報 一覧に戻る</a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
