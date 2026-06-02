import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ぽんなわびわ 1kg詰め｜ふるさと納税" };

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/furusato">ふるさと納税</a><span>›</span>
            <span>ぽんなわびわ 1kg詰め</span>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
            <div style={{ width: 200, height: 200, flexShrink: 0, border: "1px solid var(--border-light)", overflow: "hidden", position: "relative" }}>
              <Image src="/images/furusato/furusato-h001.png" alt="ぽんなわびわ 1kg詰め" fill style={{ objectFit: "cover" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, color: "#888", marginBottom: 4 }}>品番：H001　提供者：ぽんなわびわ生産組合</div>
              <h1 style={{ fontSize: 18, fontWeight: "bold", color: "var(--city-blue)", margin: "0 0 4px", lineHeight: 1.4 }}>
                ぽんなわびわ 1kg詰め
              </h1>
              <div style={{ fontSize: 11, color: "#c07000", fontWeight: "bold", marginBottom: 8 }}>
                🏆 令和4年「千葉県地理的表示推奨産品」認定
              </div>
              <div style={{ background: "#e8eef8", border: "1px solid var(--border-light)", padding: "8px 12px", fontSize: 13, marginBottom: 8 }}>
                <strong>寄附金額：10,000円以上</strong>
              </div>
              <div style={{ fontSize: 12, color: "#666", lineHeight: 1.7 }}>
                発送時期：5月上旬〜5月下旬（収穫状況により前後する場合があります）<br />
                配送方法：冷蔵便（1箱あたり）<br />
                ※年産約3.8トンの希少品のため、お申込み多数の場合は抽選となります
              </div>
            </div>
          </div>

          <div className="content-box">
            <h3>商品のご説明</h3>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              日野原市旧本縄地区（ほんなわ→ぽんなわ）に江戸時代末期から伝わる在来品種のびわです。一般的な房州びわより約2週間早く熟す早生品種で、糖度15〜17度という際立った甘さと、薄い皮・小さな種が特徴です。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: "0 0 12px" }}>
              現在の生産農家はわずか14戸。年間総生産量は約3.8トンと少なく、市内の直売所でも5月の2〜3週間しか出回りません。手摘みで丁寧に収穫した後、その日のうちに選果・梱包してお届けします。
            </p>
            <p style={{ fontSize: 13, lineHeight: 1.9, margin: 0 }}>
              収穫後は鮮度が落ちやすいため、お手元に届いたらできるだけ早くお召し上がりください。
            </p>
          </div>

          <div className="content-box">
            <h3>商品仕様</h3>
            <table className="content-table">
              <tbody>
                <tr><th>内容量</th><td>1kg詰め（玉数は大きさにより異なります。目安6〜10玉）</td></tr>
                <tr><th>品種</th><td>ぽんなわびわ（在来種・日野原市登録品種）</td></tr>
                <tr><th>産地</th><td>千葉県日野原市中央地区（旧本縄地区）産</td></tr>
                <tr><th>糖度</th><td>15〜17度（光センサー選果で基準以上のみ出荷）</td></tr>
                <tr><th>発送時期</th><td>5月上旬〜5月下旬（年によって前後します）</td></tr>
                <tr><th>アレルギー</th><td>特定原材料等への該当なし（びわは含む）</td></tr>
                <tr><th>保存方法</th><td>冷蔵庫で保存（お届け後2〜4日以内にお召し上がりください）</td></tr>
                <tr><th>提供者</th><td>ぽんなわびわ生産組合（日野原市中央地区）</td></tr>
                <tr><th>認定</th><td>令和4年「千葉県地理的表示推奨産品」認定</td></tr>
              </tbody>
            </table>
          </div>

          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <a href="/furusato" style={{ display: "inline-block", background: "var(--city-blue)", color: "#fff", padding: "10px 32px", fontWeight: "bold", fontSize: 14, borderRadius: 2, marginRight: 8 }}>
              寄附申込はこちら（外部サイト）
            </a>
            <a href="/furusato" style={{ display: "inline-block", background: "#f4f6fb", color: "var(--city-blue)", border: "1px solid var(--border-light)", padding: "10px 20px", fontSize: 13, borderRadius: 2 }}>
              ← お礼の品一覧に戻る
            </a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
