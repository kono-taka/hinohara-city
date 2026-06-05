import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "避難情報・警戒レベル" };

export default function KeikaiPage() {
  return (
    <>
      <SiteHeader current="/" />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 16px 40px" }}>
        <div className="breadcrumb">
          <a href="/">トップ</a><span>›</span><a href="/bousai">防災・緊急情報</a><span>›</span><span>避難情報・警戒レベル</span>
        </div>
        <h1 className="page-title">避難情報・警戒レベル</h1>

        {/* 現在の情報 */}
        <div style={{ background: "#ff6f00", color: "#fff", borderRadius: 6, padding: "16px 20px", marginBottom: 20 }}>
          <div style={{ fontSize: 13, marginBottom: 4 }}>令和8年6月1日（日） 午前9時現在</div>
          <div style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
            ⚠ 土砂災害警戒情報 発令中
          </div>
          <div style={{ fontSize: 16, fontWeight: "bold" }}>
            対象地区: <span style={{ background: "rgba(0,0,0,0.2)", padding: "2px 8px", borderRadius: 3 }}>白嶺地区</span>
            警戒レベル: <span style={{ background: "#b71c1c", padding: "2px 12px", borderRadius: 3, fontSize: 18 }}>レベル3</span>
          </div>
          <div style={{ fontSize: 13, marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.3)", paddingTop: 8 }}>
            発表時刻: 6月1日（日）8時45分　発表機関: 千葉県・気象庁
          </div>
        </div>

        {/* 警戒レベル早見表 */}
        <div className="content-box" style={{ padding: 0, overflow: "hidden" }}>
          <h2 className="section-title" style={{ margin: "0 0 0 0", padding: "10px 14px", background: "#37474f", color: "#fff" }}>警戒レベル早見表</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ background: "#eceff1" }}>
                <th style={{ padding: "8px 10px", border: "1px solid #ccc", width: 110 }}>レベル</th>
                <th style={{ padding: "8px 10px", border: "1px solid #ccc", width: 140 }}>情報の種類</th>
                <th style={{ padding: "8px 10px", border: "1px solid #ccc" }}>とるべき行動</th>
                <th style={{ padding: "8px 10px", border: "1px solid #ccc", width: 80 }}>発令者</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: "#b71c1c", color: "#fff" }}>
                <td style={{ padding: "10px", border: "1px solid #c62828", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>レベル5<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（黒）</span></td>
                <td style={{ padding: "10px", border: "1px solid #c62828", fontWeight: "bold" }}>緊急安全確保</td>
                <td style={{ padding: "10px", border: "1px solid #c62828" }}>
                  <strong>命を守る最後の行動を！</strong><br />
                  <span style={{ fontSize: 12 }}>すでに安全な避難ができない状況。崖や川から離れた場所の2階以上や建物の上に移動するなど、直ちに身の安全を確保してください。</span>
                </td>
                <td style={{ padding: "10px", border: "1px solid #c62828", textAlign: "center", fontSize: 12 }}>市区町村</td>
              </tr>
              <tr style={{ background: "#e53935", color: "#fff" }}>
                <td style={{ padding: "10px", border: "1px solid #c62828", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>レベル4<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（赤）</span></td>
                <td style={{ padding: "10px", border: "1px solid #c62828", fontWeight: "bold" }}>避難指示</td>
                <td style={{ padding: "10px", border: "1px solid #c62828" }}>
                  <strong>危険な場所から全員避難！</strong><br />
                  <span style={{ fontSize: 12 }}>対象地区にいる方は全員、ただちに指定緊急避難場所等へ避難してください。</span>
                </td>
                <td style={{ padding: "10px", border: "1px solid #c62828", textAlign: "center", fontSize: 12 }}>市区町村</td>
              </tr>
              <tr style={{ background: "#fdd835", color: "#fff" }}>
                <td style={{ padding: "10px", border: "1px solid #e65100", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>レベル3<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（橙）</span></td>
                <td style={{ padding: "10px", border: "1px solid #e65100", fontWeight: "bold" }}>高齢者等避難</td>
                <td style={{ padding: "10px", border: "1px solid #e65100" }}>
                  <strong>危険な場所から高齢者等は避難！</strong><br />
                  <span style={{ fontSize: 12 }}>高齢者・障がいのある方・乳幼児のいる家庭等は、ただちに安全な場所へ避難を。その他の方も避難の準備を。</span>
                </td>
                <td style={{ padding: "10px", border: "1px solid #e65100", textAlign: "center", fontSize: 12 }}>市区町村</td>
              </tr>
              <tr style={{ background: "#fff9c4" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>レベル2<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（黄）</span></td>
                <td style={{ padding: "10px", border: "1px solid #ccc", fontWeight: "bold" }}>大雨注意報等</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  <strong>自らの避難行動を確認！</strong><br />
                  <span style={{ fontSize: 12 }}>ハザードマップ等で自分の地区のリスクを確認し、避難場所・避難経路・避難タイミングを再確認してください。</span>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center", fontSize: 12 }}>気象庁</td>
              </tr>
              <tr style={{ background: "#f5f5f5" }}>
                <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center", fontWeight: "bold", fontSize: 16 }}>レベル1<br /><span style={{ fontSize: 11, fontWeight: "normal" }}>（白）</span></td>
                <td style={{ padding: "10px", border: "1px solid #ccc", fontWeight: "bold" }}>早期注意情報</td>
                <td style={{ padding: "10px", border: "1px solid #ccc" }}>
                  <strong>最新情報に注意！</strong><br />
                  <span style={{ fontSize: 12 }}>気象情報・ニュース・市の防災行政無線を定期的に確認してください。</span>
                </td>
                <td style={{ padding: "10px", border: "1px solid #ccc", textAlign: "center", fontSize: 12 }}>気象庁</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 現在発令中の情報詳細 */}
        <div className="content-box" style={{ borderTop: "4px solid #fdd835" }}>
          <h2 className="section-title">現在発令中の情報（詳細）</h2>
          <table className="content-table">
            <tbody>
              <tr><th>情報の種類</th><td><strong>土砂災害警戒情報</strong></td></tr>
              <tr><th>対象地区</th><td><strong>白嶺地区全域</strong>（白嶺字里・白嶺字高原・白嶺字平・白嶺字南）</td></tr>
              <tr><th>警戒レベル</th><td><strong style={{ color: "#fdd835", fontSize: 15 }}>レベル3（高齢者等避難）</strong></td></tr>
              <tr><th>発表日時</th><td>令和8年6月1日（日）<strong>8時45分</strong></td></tr>
              <tr><th>発表機関</th><td>千葉県・気象庁</td></tr>
              <tr><th>状況</th><td>前日からの大雨により白嶺地区の土壌雨量指数が基準値を超過。引き続き強雨が予想されるため、高齢者等の方はただちに避難してください。</td></tr>
            </tbody>
          </table>
        </div>

        {/* 避難場所 */}
        <div className="content-box" style={{ borderTop: "4px solid #1976d2" }}>
          <h2 className="section-title">開設中の避難所（白嶺地区）</h2>
          <table className="content-table">
            <thead>
              <tr><th>施設名</th><th>住所</th><th>収容人数</th><th>電話</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>白嶺地区センター</strong></td>
                <td>白嶺字里100</td>
                <td>200人</td>
                <td>☎0100-56-3300</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: 12, color: "#666", marginTop: 8 }}>ペット同伴の方は白嶺地区センター西側の駐車場をご利用ください（屋外ペットスペースあり）。</p>
          <p style={{ fontSize: 13, marginTop: 8 }}>
            <a href="/kurashi/bousai" style={{ color: "#1565c0" }}>▶ 市内全避難所・ハザードマップはこちら（くらし › 防災・消防）</a>
          </p>
        </div>

        {/* 確認ダイヤル */}
        <div className="content-box" style={{ background: "#f3e5f5", border: "1px solid #ce93d8" }}>
          <h2 className="section-title">防災行政無線 放送内容確認ダイヤル</h2>
          <p style={{ fontSize: 15, fontWeight: "bold", textAlign: "center", padding: "10px 0" }}>
            ☎ <span style={{ fontSize: 22, color: "#6a1b9a" }}>0100-88-7799</span>（24時間自動応答）
          </p>
          <p style={{ fontSize: 13, textAlign: "center", color: "#555" }}>防災行政無線の放送が聞き取れなかった場合は、上記番号に電話すると直近の放送内容を自動音声で確認できます。</p>
        </div>
        <PageInfo department="総務課" division="防災係" tel="0100-88-1123（内線 123）" updated="令和8年6月1日" />
      </div>
      <SiteFooter />
    </>
  );
}
