import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "施設案内" };

const facilities = [
  {
    name: "日野原市役所",
    href: "/shisetsu/shiyakusho",
    address: "中央一丁目1番地1号",
    tel: "0439-88-1111",
    hours: "平日 8:30〜17:15（土日祝・年末年始を除く）",
    desc: "市の行政サービス窓口。1階に市民課・税務課・福祉課など主要窓口を集約しています。駐車場120台（無料）。",
    photo: "/images/facilities/facility-shiyakusho.png",
    alt: "日野原市役所庁舎",
  },
  {
    name: "日野原市民文化センター",
    href: "/shisetsu/bunka-center",
    address: "中央三丁目5番地",
    tel: "0439-88-3800",
    hours: "9:00〜21:30（月曜休館・祝日の翌日休館）",
    desc: "大ホール（800席）、中ホール（250席）、会議室を備える複合文化施設。各種公演・市民活動に利用されています。",
    photo: "/images/facilities/facility-bunka.png",
    alt: "市民文化センター外観",
  },
  {
    name: "市立中央図書館",
    href: "/shisetsu/toshokan",
    address: "中央二丁目8番地12号",
    tel: "0439-88-4500",
    hours: "9:00〜19:00（平日）、9:00〜17:00（土日祝）。月曜・年末年始休館",
    desc: "蔵書約14万冊。視聴覚資料・郷土資料コーナー、こどもの読書室あり。インターネット端末（無料）も利用可。",
    photo: "/images/facilities/facility-toshokan.png",
    alt: "市立中央図書館の書棚",
  },
  {
    name: "日野原市総合体育館",
    href: "/shisetsu/taiikukan",
    address: "北部一丁目4番地",
    tel: "0439-53-0010",
    hours: "9:00〜21:00（火曜・年末年始休館）",
    desc: "メインアリーナ（バスケットコート4面）、サブアリーナ、トレーニングルーム、武道場。市民スポーツの拠点施設。",
    photo: "/images/facilities/facility-taiikukan.png",
    alt: "総合体育館の内部",
  },
  {
    name: "日野原市歴史民俗資料館",
    href: "/shisetsu/rekishi-shiryokan",
    address: "下原字宮ノ前820番地",
    tel: "0439-88-7200",
    hours: "9:00〜17:00（月曜・祝日の翌平日・年末年始休館）",
    desc: "縄文時代の下原遺跡出土品を中心に、地域の歴史・民俗資料を展示。常設展示のほか企画展を開催。入館料：一般300円。",
    photo: "/images/facilities/facility-rekishi.png",
    alt: "歴史民俗資料館の展示室",
  },
  {
    name: "農業公園（ひのはら農楽園）",
    href: "/shisetsu/nogyo-koen",
    address: "下原字農地1500番地",
    tel: "0439-88-8800",
    hours: "9:00〜17:00（12月〜3月休園）",
    desc: "びわ・落花生・里芋など地元農産物の収穫体験農場。農産物直売所、落花生加工体験工房、BBQ施設あり。5月のびわ狩りが人気。",
    photo: "/images/facilities/facility-nogyokouen.png",
    alt: "農業公園のびわ狩り体験",
  },
  {
    name: "白峰高原ビジターセンター",
    href: "/shisetsu/visitor-center",
    address: "白峰字高原台地2800番地",
    tel: "0439-58-2100",
    hours: "9:00〜17:00（11月下旬〜4月下旬休館）",
    desc: "白峰高原の自然・動植物に関する展示施設。登山・ハイキングの情報提供も行っています。駐車場100台。",
    photo: "/images/facilities/facility-visitorcenter.png",
    alt: "白峰高原の景色",
  },
  {
    name: "日野原市老人福祉センター（長寿の家）",
    href: "/shisetsu/rojin-fukushi",
    address: "南部二丁目3番地15号",
    tel: "0439-88-6100",
    hours: "9:00〜17:00（日曜・年末年始休館）",
    desc: "60歳以上の方が無料で利用できる交流施設。浴室、集会室、軽体操室あり。各種教室・サークル活動の場として利用されています。",
    photo: "/images/facilities/facility-roujinfukushir.png",
    alt: "老人福祉センターの集会室",
  },
];

export default function ShisetsuPage() {
  return (
    <>
      <SiteHeader current="/shisetsu" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>施設案内</span>
          </div>
          <h1 className="page-title">施設案内</h1>

          <p style={{ fontSize: 13, color: "#555", marginBottom: 14, lineHeight: 1.7 }}>
            日野原市の主な公共施設をご案内します。各施設の詳細情報（アクセス・利用料金・予約方法）については、施設名をクリックしてください。
          </p>

          <div className="section-title">主要公共施設一覧</div>
          <div className="facility-list" style={{ marginTop: 0 }}>
            {facilities.map((f, i) => (
              <div key={i} className="facility-item">
                <div className="facility-photo" style={{ position: "relative", overflow: "hidden", flexShrink: 0 }}>
                  {"photo" in f ? (
                    <Image
                      src={(f as { photo: string }).photo}
                      alt={(f as { alt: string }).alt}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="120px"
                    />
                  ) : <span style={{ fontSize: 11, color: "#888" }}>写真</span>}
                </div>
                <div className="facility-info">
                  <h4><a href={"href" in f ? (f as { href: string }).href : "#"}>{f.name}</a></h4>
                  <p>所在地：{f.address}　☎ {f.tel}</p>
                  <p>{f.desc}</p>
                  <div className="facility-hours">開館時間：{f.hours}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="section-title" style={{ marginTop: 16 }}>施設予約について</div>
          <div className="content-box" style={{ borderTop: "none" }}>
            <p style={{ fontSize: 13, lineHeight: 1.8, margin: "0 0 10px" }}>
              市の公共施設の一部は、インターネットからの予約が可能です。
              「ひのはら施設予約システム」をご利用ください。
            </p>
            <p style={{ margin: 0 }}>
              <a href="https://www.hinohara-yoyaku.jp/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, fontWeight: "bold" }}>▶ ひのはら施設予約システム（外部サイト）</a>
            </p>
            <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
              ※ご利用には利用者登録が必要です。初回のみ窓口での手続きが必要な場合があります。
            </p>
          </div>
          <PageInfo department="施設管理課" tel="0439-88-1133（内線 133）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
