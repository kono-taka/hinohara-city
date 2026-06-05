import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "教育・文化", description: "市立小中学校・保育所・認定こども園・生涯学習・図書館・スポーツなど、日野原市の教育・文化に関する情報をご案内します。" };

const schools = [
  { name: "日野原市立中央小学校", href: "/kyoiku/gakko/chuo-sho",    address: "中央二丁目12番地",   tel: "0100-88-2100", pupils: 412, classes: 12 },
  { name: "日野原市立北部小学校", href: "/kyoiku/gakko/hokubu-sho",  address: "北部三丁目8番地",    tel: "0100-88-2200", pupils: 286, classes: 8 },
  { name: "日野原市立南部小学校", href: "/kyoiku/gakko/nanbu-sho",   address: "南部一丁目15番地",   tel: "0100-88-2300", pupils: 248, classes: 8 },
  { name: "日野原市立東部小学校", href: "/kyoiku/gakko/tobu-sho",    address: "東部二丁目4番地",    tel: "0100-88-2400", pupils: 195, classes: 6 },
  { name: "日野原市立原野小学校", href: "/kyoiku/gakko/haruno-sho",  address: "原野字宮ノ下45番地", tel: "0100-55-1100", pupils: 163, classes: 6 },
  { name: "日野原市立白嶺小学校", href: "/kyoiku/gakko/shirotaki-sho", address: "白嶺字学校台200番地", tel: "0100-58-1200", pupils: 72, classes: 6 },
  { name: "日野原市立第一中学校", href: "/kyoiku/gakko/daiichi-chu", address: "中央四丁目2番地",    tel: "0100-88-3100", pupils: 412, classes: 12 },
  { name: "日野原市立第二中学校", href: "/kyoiku/gakko/daini-chu",   address: "北部二丁目20番地",   tel: "0100-88-3200", pupils: 298, classes: 9 },
  { name: "日野原市立原野中学校", href: "/kyoiku/gakko/haruno-chu",  address: "原野字中沢120番地",  tel: "0100-55-1300", pupils: 154, classes: 3 },
];

export default function KyoikuPage() {
  return (
    <>
      <SiteHeader current="/kyoiku" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>教育・文化</span>
          </div>
          <h1 className="page-title">教育・文化</h1>

          <div className="section-title">小学校・中学校一覧</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 16 }}>
            <table className="content-table" style={{ margin: 0 }}>
              <thead>
                <tr>
                  <th style={{ width: "auto" }}>学校名</th>
                  <th style={{ width: 200 }}>所在地</th>
                  <th style={{ width: 130 }}>電話番号</th>
                  <th style={{ width: 80, textAlign: "right" }}>児童・生徒数</th>
                  <th style={{ width: 60, textAlign: "right" }}>学級数</th>
                </tr>
              </thead>
              <tbody>
                {schools.map((s, i) => (
                  <tr key={i}>
                    <td><a href={s.href}>{s.name}</a></td>
                    <td>{s.address}</td>
                    <td>{s.tel}</td>
                    <td style={{ textAlign: "right" }}>{s.pupils}人</td>
                    <td style={{ textAlign: "right" }}>{s.classes}学級</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} style={{ fontWeight: "bold", textAlign: "right" }}>合計</td>
                  <td style={{ textAlign: "right", fontWeight: "bold" }}>{schools.reduce((a, s) => a + s.pupils, 0)}人</td>
                  <td style={{ textAlign: "right", fontWeight: "bold" }}>{schools.reduce((a, s) => a + s.classes, 0)}学級</td>
                </tr>
              </tfoot>
            </table>
            <p style={{ fontSize: 11, color: "#888", padding: "4px 10px", borderTop: "1px solid #e8edf4" }}>
              ※令和8年5月1日現在
            </p>
          </div>

          <div className="two-col" style={{ marginBottom: 16 }}>
            <div>
              <div className="section-title">保育所・幼稚園・認定こども園</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {[
                  { name: "市立ひのはら保育所", type: "認定こども園", address: "中央一丁目", tel: "0100-88-4100" },
                  { name: "市立北部保育所", type: "保育所（公立）", address: "北部四丁目", tel: "0100-88-4200" },
                  { name: "市立原野保育所", type: "保育所（公立）", address: "原野字上田", tel: "0100-55-2100" },
                  { name: "社会福祉法人 白嶺保育園", type: "保育所（私立）", address: "白嶺字里", tel: "0100-58-2300" },
                  { name: "学校法人 日野原幼稚園", type: "幼稚園（私立）", address: "中央五丁目", tel: "0100-88-4400" },
                  { name: "NPO法人 あそびの森", type: "認可外保育施設", address: "東部一丁目", tel: "0100-53-0800" },
                ].map((f, i) => (
                  <div key={i} style={{ padding: "8px 12px", borderBottom: "1px solid #e8edf4", fontSize: 12 }}>
                    <div style={{ fontWeight: "bold" }}><a href="/kyoiku/hoiku">{f.name}</a></div>
                    <div style={{ color: "#666", marginTop: 2 }}>{f.type}　{f.address}　☎ {f.tel}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="section-title">教育委員会からのお知らせ</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {[
                  { date: "2026.05.22", text: "令和8年度 日野原市立小中学校 就学援助制度について" },
                  { date: "2026.05.15", text: "教育用タブレット端末の活用推進（GIGAスクール構想）の取組報告" },
                  { date: "2026.05.01", text: "市内小中学校の熱中症対策について（令和8年度）" },
                  { date: "2026.04.18", text: "「ひのはら子ども読書週間」開催（5月3日〜17日）" },
                  { date: "2026.04.10", text: "令和8年度 部活動地域移行の実施状況について" },
                  { date: "2026.03.25", text: "令和7年度 日野原市教育委員会点検・評価報告書（PDF）" },
                ].map((n, i) => (
                  <div key={i} style={{ padding: "7px 10px", borderBottom: "1px solid #e8edf4", fontSize: 12 }}>
                    <span style={{ color: "#888", fontFamily: "monospace", marginRight: 8 }}>{n.date}</span>
                    <a href="/news">{n.text}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-title">生涯学習・文化活動</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 16 }}>
            {[
              { label: "市立中央図書館", href: "#", desc: "蔵書約14万冊。月曜休館。インターネット端末・複写サービスあり。☎ 0100-88-4500" },
              { label: "市民文化センター（ホール・会議室）", href: "#", desc: "大ホール800席・中ホール250席。各種公演・市民活動に。☎ 0100-88-3800" },
              { label: "生涯学習センター（まなびの館）", href: "#", desc: "各種講座・サークル活動の拠点。陶芸室・音楽室・調理実習室あり。" },
              { label: "日野原市歴史民俗資料館", href: "#", desc: "縄文〜近代の地域の歴史を展示。下原遺跡出土品の常設展示。入館300円。" },
              { label: "青少年育成・子どもの居場所づくり", href: "#", desc: "放課後子供教室・青少年センター・ジュニアリーダー養成事業。" },
              { label: "市民大学・各種講座", href: "#", desc: "令和8年度 前期市民大学（6月〜9月）受講者募集中。" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "9px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ minWidth: 230 }}><a href={item.href} style={{ fontSize: 13, fontWeight: "bold" }}>▶ {item.label}</a></div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="section-title">スポーツ振興</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
            {[
              { label: "市総合体育館・屋内プールの利用", href: "#", desc: "利用料・予約方法・各種スポーツ教室のご案内。☎ 0100-53-0010" },
              { label: "市民グラウンド・野球場・テニスコート", href: "#", desc: "各施設の予約方法と利用料金。" },
              { label: "ひのはらスポーツクラブ（総合型地域SC）", href: "#", desc: "子どもから高齢者まで、30種類以上の教室・チームが活動中。" },
              { label: "令和8年度 市民体育祭（10月12日開催予定）", href: "#", desc: "参加チーム・種目の申込は8月1日から受付。" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "9px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ minWidth: 280 }}><a href={item.href} style={{ fontSize: 13, fontWeight: "bold" }}>▶ {item.label}</a></div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <PageInfo department="教育総務課" tel="0100-88-8301（内線 301）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
