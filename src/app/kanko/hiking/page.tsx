import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ハイキング・トレッキング",
  description: "日野原市のハイキング・トレッキングコース案内。日野原アルプス（原野岳382m）・原野川渓谷コース・白嶺の棚田散策路。コース詳細・難易度・注意事項。",
};

const courses = [
  {
    name: "日野原アルプス・原野岳（大台山）コース",
    peak: "原野岳（大台山）382m",
    difficulty: "中級",
    distance: "約8km（周回）",
    time: "約3時間30分",
    season: "通年（春・秋が最適。夏季は熱中症注意）",
    start: "大台登山口駐車場（原野字大台 / 無料・30台）",
    highlights: [
      "市内最高峰・原野岳（382m）からの360度パノラマ眺望",
      "6月下旬〜7月：ヤマユリ（市の花）の群生が見られる",
      "春：コアジサイ・ヤマツツジ・タチツボスミレ",
      "秋：コナラ・クヌギの黄葉・アケビ・ムラサキシキブの実",
    ],
    notes: [
      "登山口から山頂まで整備された登山道あり。一部急登区間あり（ロープ設置）",
      "山頂付近に休憩ベンチ・展望台あり",
      "熊注意エリア（熊鈴の携行推奨）",
      "冬季（12〜3月）は積雪・凍結あり。アイゼン等を準備",
      "トイレ：登山口駐車場にあり（山頂付近はなし）",
    ],
    map: "/files/kanko/hiking-alps.pdf",
  },
  {
    name: "原野川渓谷ハイキングコース",
    peak: "—（渓谷沿いの散策路）",
    difficulty: "初級",
    distance: "約5km（片道）",
    time: "約2時間（片道）",
    season: "4月〜11月（6月：ホタル観察会、10月中旬〜11月上旬：紅葉最盛期）",
    start: "原野川渓谷入口（市役所前バスターミナルから徒歩15分）",
    highlights: [
      "全長約18kmの渓谷のうち、整備されたハイキング区間（約5km）",
      "6月初旬：ゲンジボタルの乱舞（市主催ほたる観察会あり）",
      "秋：カエデ・イチョウ・ケヤキの紅葉が渓谷を彩る",
      "清流でのミニ沢登り体験スポットあり（増水時は注意）",
    ],
    notes: [
      "全体的になだらかで、小学生からシニアまで歩きやすい",
      "渡り橋（木製）数か所あり、雨後はスリップ注意",
      "増水時・大雨直後はコース閉鎖の場合あり（観光協会☎ 0100-58-8888で確認）",
      "トイレ：入口・中間点・終点の3か所あり",
    ],
    map: "/files/kanko/hiking-keikoku.pdf",
  },
  {
    name: "白嶺の棚田・里山散策コース",
    peak: "—（棚田・里山の農村風景）",
    difficulty: "初級",
    distance: "約4km（周回）",
    time: "約1時間30分",
    season: "通年（春：水張り5月、秋：稲刈り9月下旬が見頃）",
    start: "白嶺地区センター（市営バス「白嶺地区センター」バス停下車）",
    highlights: [
      "日本の棚田百選認定・約80haの棚田群を望む展望台",
      "5月上旬：水鏡に映る山並みが美しい",
      "9月下旬：黄金色の稲穂と里山の風景",
      "棚田オーナー農家との交流・農業体験（事前申込要）",
    ],
    notes: [
      "農道・畦道を歩くため、農作業の邪魔をしないようご注意ください",
      "農地への無断立入は固くお断りします",
      "棚田展望台は日没後照明なし。明るいうちに出発してください",
      "トイレ：白嶺地区センター（出発前に利用推奨）",
    ],
    map: "/files/kanko/hiking-tanada.pdf",
  },
];

export default function HikingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "トップ", href: "/" },
        { name: "観光・移住", href: "/kanko" },
        { name: "ハイキング・トレッキング" },
      ]} />
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kanko">観光・移住</a><span>›</span>
            <span>ハイキング・トレッキング</span>
          </div>
          <h1 className="page-title">ハイキング・トレッキング</h1>

          <div className="content-box" style={{ borderLeft: "4px solid #1a6e5a", background: "#f5faf7" }}>
            <p style={{ fontSize: 13, lineHeight: 1.85, margin: 0 }}>
              房総丘陵の自然に囲まれた日野原市では、市内最高峰・原野岳（382m）への登山コースから、
              ホタルが舞う原野川渓谷の散策路、棚田百選の里山歩きまで、さまざまなコースが楽しめます。
              春のヤマユリ、秋の紅葉と、四季折々の自然に出会えるのが日野原市ならではの魅力です。
            </p>
          </div>

          {/* ── 難易度案内 ── */}
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            {[
              { level: "初級", color: "#2e7d32", desc: "平坦または緩やかな道。普通の運動靴で可。" },
              { level: "中級", color: "#e65100", desc: "一部急登あり。ハイキングシューズ推奨。" },
              { level: "上級", color: "#c62828", desc: "急傾斜・長距離。登山靴・十分な装備が必要。" },
            ].map((d) => (
              <div key={d.level} style={{ display: "flex", alignItems: "center", gap: 6, padding: "5px 12px", border: "1px solid #ddd", borderRadius: 2, background: "#fff", fontSize: 12 }}>
                <span style={{ background: d.color, color: "#fff", padding: "1px 6px", borderRadius: 2, fontWeight: "bold", fontSize: 11 }}>{d.level}</span>
                {d.desc}
              </div>
            ))}
          </div>

          {/* ── コース詳細 ── */}
          {courses.map((c, i) => (
            <div key={i} className="content-box">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
                <h2 className="section-title" style={{ margin: 0 }}>{c.name}</h2>
                <span style={{
                  background: c.difficulty === "初級" ? "#2e7d32" : "#e65100",
                  color: "#fff", padding: "2px 10px", borderRadius: 2, fontSize: 12, fontWeight: "bold", flexShrink: 0,
                }}>{c.difficulty}</span>
              </div>

              <table className="content-table" style={{ marginBottom: 12 }}>
                <tbody>
                  <tr>
                    <th style={{ width: 100 }}>最高地点</th><td>{c.peak}</td>
                    <th style={{ width: 80 }}>距離</th><td>{c.distance}</td>
                  </tr>
                  <tr>
                    <th>所要時間</th><td>{c.time}</td>
                    <th>おすすめ季節</th><td>{c.season}</td>
                  </tr>
                  <tr>
                    <th>スタート地点</th><td colSpan={3}>{c.start}</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ marginBottom: 10 }}>
                <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 4, color: "#1a6e5a" }}>▶ このコースのみどころ</div>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12, lineHeight: 1.8, color: "#444" }}>
                  {c.highlights.map((h, j) => <li key={j}>{h}</li>)}
                </ul>
              </div>

              <div style={{ background: "#fff8f0", border: "1px solid #f0c070", padding: "10px 14px", borderRadius: 2 }}>
                <div style={{ fontWeight: "bold", fontSize: 12, marginBottom: 4, color: "#a05000" }}>⚠ 注意事項</div>
                <ul style={{ margin: 0, paddingLeft: 20, fontSize: 12, lineHeight: 1.8, color: "#555" }}>
                  {c.notes.map((n, j) => <li key={j}>{n}</li>)}
                </ul>
              </div>

              <div style={{ marginTop: 10 }}>
                <a href={c.map} style={{ fontSize: 12, color: "#1a6e5a", fontWeight: "bold" }}>
                  📄 コースマップPDFをダウンロード →
                </a>
              </div>
            </div>
          ))}

          {/* ── 装備・注意事項 ── */}
          <div className="content-box" style={{ borderLeft: "4px solid #c62828", background: "#fff5f5" }}>
            <h2 className="section-title">山歩きの基本装備と注意事項</h2>
            <div className="two-col">
              <div>
                <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 6 }}>持ち物チェックリスト</div>
                <ul style={{ fontSize: 12, lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
                  <li>ハイキングシューズまたは登山靴</li>
                  <li>レインウェア（山の天気は急変することがあります）</li>
                  <li>十分な飲料水（500ml以上・夏季は1L以上）</li>
                  <li>行動食・お菓子</li>
                  <li>地図・コンパス（またはダウンロードした地図アプリ）</li>
                  <li>救急セット・ばんそうこう</li>
                  <li>熊鈴（原野岳コース）</li>
                  <li>スマートフォン（フル充電・地図アプリ・緊急連絡用）</li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: "bold", fontSize: 13, marginBottom: 6 }}>緊急時の連絡先</div>
                <ul style={{ fontSize: 12, lineHeight: 1.9, paddingLeft: 18, margin: 0 }}>
                  <li>救急・警察：110 / 119</li>
                  <li>日野原市観光協会：☎ 0100-58-8888（コース状況・道路情報）</li>
                  <li>市役所産業振興課：☎ 0100-88-1144（平日のみ）</li>
                </ul>
                <div style={{ marginTop: 10, fontSize: 12, color: "#c62828", lineHeight: 1.8 }}>
                  ※入山前に出発地・ルート・帰宅予定時刻を家族や知人に伝えてください。<br />
                  ※単独行は極力避けてください。<br />
                  ※天候が悪い場合は無理をせず引き返す判断を。
                </div>
              </div>
            </div>
          </div>

          {/* ── 関連リンク ── */}
          <div style={{ background: "#f4f6fb", border: "1px solid var(--border-light)", padding: 12, fontSize: 12, lineHeight: 1.8 }}>
            <strong>関連ページ：</strong>
            <a href="/kanko/onsen" style={{ marginRight: 12 }}>白嶺温泉郷（ハイキング後に）→</a>
            <a href="/kanko/access" style={{ marginRight: 12 }}>アクセス →</a>
            <a href="/kanko/event">イベント情報（自然観察ウォーク）→</a>
          </div>

          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
