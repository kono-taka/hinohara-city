import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年末年始のごみ収集・環境センター受入れ休止のお知らせ（令和8年度）",
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
            <span>年末年始のごみ収集・環境センター受入れ休止のお知らせ（令和8年度）</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年11月27日</span>
            <span>担当課：環境対策課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">年末年始のごみ収集・環境センター受入れ休止のお知らせ（令和8年度）</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              令和8年度の年末年始期間（令和8年12月29日〜令和9年1月3日）は、ごみ収集業務および日野原市環境センターの一般廃棄物受入れを休止します。
              年末最後の収集日や年始最初の収集日を事前にご確認いただき、ごみ出しのご準備をお願いいたします。
            </p>

            <div style={{ background: "#fff4f4", border: "1px solid #e08080", padding: "10px 14px", borderRadius: 3, marginBottom: 20 }}>
              <strong>【ごみ収集・環境センター 休止期間】</strong><br />
              <span style={{ fontSize: 15, fontWeight: "bold" }}>令和8年12月29日（火）〜 令和9年1月3日（日）</span><br />
              <span style={{ fontSize: 12, color: "#666", marginTop: 4, display: "block" }}>
                ※この期間中は、ごみの収集および環境センターへの持ち込みはできません。
              </span>
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>1．年末・年始の収集日程</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "40%" }}>収集区分</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>年内最終収集日</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>年始最初の収集日</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["燃やすごみ", "令和8年12月26日（土）または12月28日（月）\n（各地区の収集曜日による）", "令和9年1月4日（月）から通常収集再開"],
                  ["燃やせないごみ（不燃ごみ）", "令和8年12月26日（土）または12月28日（月）\n（各地区の収集曜日による）", "令和9年1月5日（火）から通常収集再開"],
                  ["資源ごみ（缶・びん・ペットボトル等）", "令和8年12月26日（土）または12月28日（月）\n（各地区の収集曜日による）", "令和9年1月4日（月）から通常収集再開"],
                  ["プラスチック製容器包装", "令和8年12月26日（土）または12月28日（月）\n（各地区の収集曜日による）", "令和9年1月5日（火）から通常収集再開"],
                  ["紙・布類（集団資源回収含む）", "令和8年12月19日（土）が年内最終（一部地区）", "令和9年1月中旬以降（各自治会回覧にてお知らせ）"],
                  ["粗大ごみ（事前申込制）", "令和8年12月19日（金）受付分まで年内実施", "令和9年1月7日（水）以降受付・収集再開"],
                ].map(([k, v, w]) => (
                  <tr key={k}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{k}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "pre-line" }}>{v}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginBottom: 16 }}>
              ※各地区の収集曜日は、ご家庭に配布済みの「令和8年度 ごみ収集日程カレンダー」または市ホームページの分別・収集日程ページをご確認ください。<br />
              ※年末年始期間中に収集曜日が重なる地区は、前週（12月22日週）以降の繰り上げ収集はございません。年内最終収集日にまとめてお出しください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>2．日野原市環境センターの年末年始休業について</h3>
            <p>
              日野原市環境センター（一般廃棄物処理施設、粗大ごみ処理施設）は、年末年始期間中は下記のとおり休業します。
              この期間中の一般廃棄物の直接搬入（持ち込み処理）はできません。
            </p>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 12 }}>
              <tbody>
                {[
                  ["休業期間", "令和8年12月29日（火）〜 令和9年1月3日（日）（6日間）"],
                  ["搬入受入れ再開", "令和9年1月4日（月）8:30〜"],
                  ["搬入受入れ時間（通常）", "平日 8:30〜16:30（土曜日は12:00まで受付）"],
                  ["環境センター所在地", "日野原市中央地区 大久保2101番地（日野原市環境センター）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 180, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 8 }}>3．年末年始のごみ出しにあたってのお願い</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>年末は大掃除等でごみの量が増えがちです。ごみ収集車の収集能力を超えることがありますので、<strong>年内最終収集日への集中をできるだけ避け</strong>、早めの分別・排出にご協力ください。</li>
              <li>ごみは必ず<strong>収集当日の朝8時まで</strong>に集積場へお出しください。前日夜や早朝からの排出はご遠慮ください。</li>
              <li>年末年始は帰省等で人の出入りが多くなります。ごみは各地区指定の集積場をご利用ください。他地区の集積場への排出はご遠慮ください。</li>
              <li>事業系ごみ（商店・飲食店等の事業活動によるごみ）は、家庭ごみと同一の集積場に排出することはできません。事業者の方は産業廃棄物処理業者等との間で適切に処理をお願いします。</li>
            </ul>

            <div style={{ background: "#f4f8ff", border: "1px solid #b0c8e8", padding: "10px 14px", borderRadius: 3, marginTop: 20, fontSize: 13 }}>
              <strong>ごみの分別・収集日程の詳細はこちら</strong><br />
              <span style={{ display: "block", marginTop: 6 }}>
                ・<a href="/kurashi/gomi" style={{ color: "var(--link-color)" }}>ごみの出し方・分別（くらし・手続きページ）</a><br />
                ・地区別収集日程表は、令和8年度版を各ご家庭に配布済みです。お手元にない場合は環境対策課（内線293）または市役所受付窓口にてお受け取りください。
              </span>
            </div>
          </div>

          <PageInfo department="環境対策課" division="廃棄物対策係" tel="0439-88-1293（内線 293）" updated="令和8年11月27日" />
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
