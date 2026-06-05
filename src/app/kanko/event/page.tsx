import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "イベント情報", description: "日野原市のイベント情報をご案内します。やまびこ祭り・農業体験・自然観察ウォークなど、季節ごとの行事情報を掲載しています。" };

const events = [
  { month: 6, day: 7, weekday: "土", title: "ひのはら市民農業まつり", place: "農業公園（下原地区）", time: "9:00〜15:00", fee: "入場無料", desc: "地元農家による新鮮野菜・加工品の直売、農業体験コーナー、ステージイベントなど。" },
  { month: 6, day: 14, weekday: "日", title: "日野原びわまつり2026", place: "農業公園（下原地区）・中央公園", time: "10:00〜16:00", fee: "入場無料・びわ販売あり", desc: "収穫最盛期を迎えた房州びわを味わう市の一大イベント。びわ販売・試食、びわ狩り体験送迎バス、加工品販売コーナーなど盛りだくさん。" },
  { month: 6, day: 14, weekday: "土", title: "第19回 日野原やまびこ祭り（1日目）", place: "中央公園特設会場", time: "12:00〜21:00", fee: "入場無料", desc: "市内最大の夏祭り。地元グルメ屋台・ステージ・盆踊り・花火大会（1日目）。", href: "/kanko/yamabiko" },
  { month: 6, day: 15, weekday: "日", title: "第19回 日野原やまびこ祭り（2日目）", place: "中央公園特設会場", time: "10:00〜20:00", fee: "入場無料", desc: "2日目は子ども向けイベントを多数開催。大抽選会、フィナーレパレードあり。", href: "/kanko/yamabiko" },
  { month: 6, day: 21, weekday: "土", title: "白峰自然観察ウォーク2026", place: "白峰ビジターセンター集合", time: "8:30〜15:00（雨天中止）", fee: "参加費500円", desc: "ネイチャーガイドとともに照葉樹林を歩く自然観察会。定員30名・要事前申込。" },
  { month: 6, day: 28, weekday: "土", title: "子ども図書館まつり（読み聞かせ・工作）", place: "市立中央図書館", time: "10:00〜12:00", fee: "参加費無料", desc: "絵本の読み聞かせ、簡単な工作体験。対象：3歳〜小学3年生。定員20名（先着順）。" },
  { month: 7, day: 5, weekday: "日", title: "令和8年度 ひのはら写真コンテスト 入賞作品展", place: "市民文化センター 展示室", time: "10:00〜17:00（最終日15:00まで）", fee: "入場無料", desc: "市内の風景・人・食を題材にした写真作品を展示。7月5日〜13日の9日間。" },
  { month: 7, day: 12, weekday: "日", title: "夏の星空観察会", place: "白峰高原 天文台", time: "19:30〜21:30（雨天中止）", fee: "参加費300円", desc: "高原の澄んだ空気の下、天体望遠鏡で夏の星座を観察します。定員50名・要申込。" },
  { month: 7, day: 19, weekday: "日", title: "ひのはら渓流釣り大会", place: "原野川 中流域（下原橋〜宮川橋）", time: "6:00〜12:00", fee: "参加費1,000円", desc: "ヤマメ・イワナを対象とした渓流釣り大会。優勝者には地元特産品を贈呈。定員60名。" },
  { month: 8, day: 2, weekday: "日", title: "盆踊り・ふるさと夏まつり（原野地区）", place: "原野地区中央広場", time: "18:00〜21:00", fee: "入場無料", desc: "原野地区の伝統盆踊り。屋台・出店多数。地元自治会主催。" },
  { month: 8, day: 15, weekday: "土", title: "ひのはら農産物品評会・即売会", place: "農業公園（下原地区）", time: "9:00〜14:00", fee: "入場無料", desc: "市内農家が丹精込めた旬の農産物を品評・即売。夏野菜・果物が勢ぞろい。" },
  { month: 9, day: 6, weekday: "日", title: "日野原市民体育祭（第29回）", place: "市総合体育館・市民グラウンド", time: "8:30〜16:00", fee: "参加費無料", desc: "小学生から高齢者まで参加できる市民スポーツの祭典。種目申込は8月1日から。" },
  { month: 10, day: 3, weekday: "土", title: "落花生フェスタ2026", place: "農業公園（下原地区）", time: "10:00〜15:00", fee: "入場無料・試食・販売あり", desc: "今秋収穫の新鮮落花生を販売。ゆで落花生・煎り落花生の振る舞いコーナー、落花生掘り体験も開設。" },
];

export default function EventPage() {
  return (
    <>
      <SiteHeader current="/kanko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/kanko">観光・移住</a><span>›</span>
            <span>イベント情報</span>
          </div>
          <h1 className="page-title">イベント情報</h1>

          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 14 }}>
            日野原市内で開催される各種イベント・行事の情報をお知らせします。
            詳細・最新情報は各主催者にお問い合わせください。
          </p>

          <div style={{ display: "flex", gap: 8, marginBottom: 14, alignItems: "center", fontSize: 12, color: "#666" }}>
            <span>表示期間：</span>
            {["すべて", "6月", "7月", "8月", "9月", "10月以降"].map((m) => (
              <span key={m} style={{ padding: "2px 10px", border: "1px solid var(--border-light)", background: m === "すべて" ? "var(--city-blue)" : "#fff", color: m === "すべて" ? "#fff" : "#555", borderRadius: 2, cursor: "pointer" }}>
                {m}
              </span>
            ))}
          </div>

          <div style={{ border: "1px solid var(--border-light)", background: "#fff", marginBottom: 16 }}>
            {events.map((ev, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "12px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ background: "var(--city-blue)", color: "#fff", textAlign: "center", padding: "6px 10px", minWidth: 52, flexShrink: 0 }}>
                  <div style={{ fontSize: 10 }}>{ev.month}月</div>
                  <div style={{ fontSize: 22, fontWeight: "bold", lineHeight: 1 }}>{ev.day}</div>
                  <div style={{ fontSize: 10 }}>（{ev.weekday}）</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", fontSize: 14, marginBottom: 4 }}>
                    {"href" in ev && ev.href
                      ? <a href={ev.href} style={{ color: "inherit" }}>{ev.title}</a>
                      : ev.title}
                  </div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.7 }}>
                    <span style={{ marginRight: 16 }}>場所：{ev.place}</span>
                    <span style={{ marginRight: 16 }}>時間：{ev.time}</span>
                    <span>参加費：{ev.fee}</span>
                  </div>
                  <div style={{ fontSize: 12, color: "#666", marginTop: 4 }}>{ev.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>イベント情報の掲載・お問い合わせ</strong><br />
            掲載依頼・お問い合わせ：日野原市役所 企画政策課 広報広聴係<br />
            電話：0100-88-1115　メール：koho@city.hinohara.lg.jp
          </div>
          <PageInfo department="産業振興課" division="観光係" tel="0100-88-1144（内線 144）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
