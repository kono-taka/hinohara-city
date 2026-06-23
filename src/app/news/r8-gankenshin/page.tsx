import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "令和8年度 各種がん検診の受診申込受付について",
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
            <span>令和8年度 各種がん検診の受診申込受付について</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年6月23日</span>
            <span>担当課：健康推進課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">令和8年度 各種がん検診の受診申込受付について</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              日野原市では、令和8年度の各種がん検診（集団検診）の受診申込受付を、令和8年6月23日（月）より開始いたします。今年度の集団検診は8月から11月にかけて実施予定です。がんの早期発見・早期治療のため、対象となる方は積極的にご受診ください。
            </p>

            <div style={{ background: "#fffbf0", border: "1px solid #e8d9a0", padding: "10px 14px", borderRadius: 3, marginBottom: 16 }}>
              <strong>申込期間：令和8年6月23日（月）〜令和8年7月31日（木）</strong><br />
              ※定員に達し次第、受付を締め切る場合があります。お早めにお申し込みください。
            </div>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>検診の種類・対象・自己負担額</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "22%" }}>検診種別</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "28%" }}>対象者</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "16%" }}>自己負担額</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>実施方法・備考</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["胃がん検診", "40歳以上の方（年度内に40歳以上になる方）", "1,200円", "胃部X線検査（バリウム）または胃内視鏡検査（胃カメラ）を選択できます。"],
                  ["大腸がん検診", "40歳以上の方", "500円", "便潜血検査（2日法）。検査キットは申込後に送付します。"],
                  ["肺がん検診", "40歳以上の方", "500円", "胸部X線検査。喫煙歴のある50〜64歳の方は喀痰細胞診（追加負担300円）を併用できます。"],
                  ["子宮頸がん検診", "20歳以上の女性（2年に1回）", "700円", "問診・視診・子宮頸部細胞診を行います。"],
                  ["乳がん検診", "40歳以上の女性（2年に1回）", "1,300円", "マンモグラフィ（2方向）。視触診との組み合わせで実施します。"],
                  ["前立腺がん検診", "50歳以上の男性", "500円", "血液検査（PSA値測定）。"],
                ].map(([name, target, fee, note]) => (
                  <tr key={name}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", fontWeight: "bold" }}>{name}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{target}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{fee}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※市民税非課税世帯の方および生活保護受給中の方は、自己負担額が免除されます。申込時に窓口へお申し出ください。<br />
              ※昨年度に同一の検診を受診された方は、2年に1回が対象となる検診については今年度の対象外となる場合があります。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>実施日程（予定）</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#eef3f8" }}>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left", width: "30%" }}>実施日</th>
                  <th style={{ border: "1px solid #ccc", padding: "6px 10px", textAlign: "left" }}>会場・検診内容</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["令和8年8月23日（土）", "市民総合体育館 第2研修室（胃がん・肺がん・大腸がん・前立腺がん）"],
                  ["令和8年9月13日（土）", "保健センター 集団検診室（子宮頸がん・乳がん）"],
                  ["令和8年9月27日（土）", "市民総合体育館 第2研修室（胃がん・肺がん・大腸がん・前立腺がん）"],
                  ["令和8年10月18日（土）", "保健センター 集団検診室（子宮頸がん・乳がん）"],
                  ["令和8年11月8日（土）", "市民総合体育館 第2研修室（胃がん・肺がん・大腸がん・前立腺がん）"],
                ].map(([date, venue]) => (
                  <tr key={date}>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px", whiteSpace: "nowrap" }}>{date}</td>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: 12, color: "#666", marginTop: 6 }}>
              ※受診は予約制です。申込者には後日、受診日時・会場・持ち物等をご案内する通知書を送付します。<br />
              ※検診当日は必ず受診券・保険証（または個人番号カード）をお持ちください。
            </p>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>申込方法</h3>
            <p>
              以下のいずれかの方法でお申し込みください。
            </p>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li><strong>電話：</strong>健康推進課（保健センター内）☎ 0439-88-1161（内線 161）へお電話ください。平日 8:30〜17:15 受付。</li>
              <li><strong>窓口：</strong>市役所1階 健康推進課窓口または保健センター（市役所から徒歩約5分、中央地区 保健センター通り）にお越しください。</li>
              <li><strong>申請書郵送：</strong>市ホームページから「がん検診受診申込書」をダウンロードのうえ、必要事項をご記入いただき、健康推進課（〒299-XXXX 日野原市○○ 1-1）までご郵送ください。</li>
            </ul>

            <h3 style={{ fontSize: 13, marginTop: 20, marginBottom: 6 }}>受診にあたっての注意事項</h3>
            <ul style={{ paddingLeft: 20, marginBottom: 12 }}>
              <li>胃がん検診（X線・内視鏡）を受ける方は、検診当日の朝食・水分摂取（薬を除く）を控えてください。</li>
              <li>妊娠中または妊娠の可能性がある方は、X線を使用する検診（胃部・肺部・マンモグラフィ）の受診をご遠慮ください。</li>
              <li>現在医療機関でがんの治療中または経過観察中の方は、担当医とご相談のうえお申し込みください。</li>
              <li>検診当日に体調不良（発熱等）がある場合は受診をお控えください。日程変更については健康推進課までご連絡ください。</li>
            </ul>

            <div style={{ background: "#f0f7f0", border: "1px solid #a8cca8", padding: "10px 14px", borderRadius: 3, marginTop: 16, fontSize: 13 }}>
              <strong>がん検診は年に1回受けましょう</strong><br />
              がんは早期に発見するほど治療の選択肢が広がり、生存率が高まります。自覚症状のないうちから定期的に受診することが大切です。令和7年度の日野原市のがん検診受診率は、大腸がん検診で23.4%と、国の目標値（60%）を大きく下回っています。ぜひこの機会にご受診ください。
            </div>
          </div>

          <PageInfo department="健康推進課" division="保健係" tel="0439-88-1161（内線 161）" updated="令和8年6月23日" />
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
