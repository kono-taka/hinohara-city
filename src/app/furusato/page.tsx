import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "ふるさと納税" };

const gifts = [
  {
    id: "H001",
    name: "ぽんなわびわ 1kg詰め【令和4年 千葉県地理的表示推奨産品認定】",
    amount: "10,000円以上",
    producer: "ぽんなわびわ生産組合",
    desc: "日野原市旧本縄地区に江戸時代末期から伝わる幻の在来種。糖度15〜17度・大玉・皮薄。年産3.8tの希少品。5月上旬〜下旬限定発送。",
    season: "5月上旬〜5月下旬発送（抽選あり）",
    color: "#d4820a",
  },
  {
    id: "H002",
    name: "白峰温泉郷 旅館宿泊ペアご招待券（1泊2食）",
    amount: "50,000円以上",
    producer: "白峰温泉旅館組合",
    desc: "ナトリウム塩化物泉の名湯・白峰温泉郷の宿泊券。組合加盟6旅館の中からお選びいただけます。",
    season: "通年利用可（要予約・有効期限1年）",
    color: "#1a4494",
  },
  {
    id: "H003",
    name: "日野原高原そば 乾麺セット（200g×6束）",
    amount: "10,000円以上",
    producer: "有限会社 ひのはら製粉",
    desc: "温暖な気候の中で育った在来種そばを石臼挽きで粉にし、職人が打った香り豊かな二八そば。つゆ付き。",
    season: "通年発送",
    color: "#5a3a1a",
  },
  {
    id: "H004",
    name: "ひのはら味噌 熟成蔵出し2種セット（計2kg）",
    amount: "12,000円以上",
    producer: "日野原市味噌工房",
    desc: "国産大豆・米麹・天然塩のみを使い、杉の木桶で1年以上熟成。麦味噌・米味噌の食べ比べセット。",
    season: "通年発送",
    color: "#7a4000",
  },
  {
    id: "H005",
    name: "白峰高原牧場 乳製品詰め合わせ（チーズ・バター・ヨーグルト）",
    amount: "15,000円以上",
    producer: "有限会社 白峰高原牧場",
    desc: "標高280mの高原で育てたジャージー牛の生乳を使った乳製品セット。牧場直送の味をお楽しみください。",
    season: "通年発送（生鮮のためクール便）",
    color: "#2d6e3e",
  },
  {
    id: "H006",
    name: "日野原産 里芋 1kg（洗い芋）",
    amount: "5,000円以上",
    producer: "JAひのはら野菜部会",
    desc: "房総丘陵の粘土質土壌と清らかな水で育てた里芋。ぬめりが強く、煮崩れしにくい。煮物・汁物・ころり揚げに最適。収穫後すぐ発送。",
    season: "10月〜12月発送",
    color: "#5a3a1a",
  },
  {
    id: "H007",
    name: "ひのぽんグッズセット（ぬいぐるみ・缶バッジ・クリアファイル）",
    amount: "10,000円以上",
    producer: "日野原市企画政策課（公式グッズ）",
    desc: "日野原市マスコットキャラクター「ひのぽん」の公式グッズ3点セット。ぽんなわびわの妖精をおうちに連れて帰ってぽん！",
    season: "通年発送（在庫限り）",
    color: "#d4820a",
  },
  {
    id: "H008",
    name: "市立歴史民俗資料館 縄文土器レプリカ（手のひらサイズ）",
    amount: "20,000円以上",
    producer: "日野原市教育委員会",
    desc: "下原遺跡から出土した縄文土器を忠実に再現したレプリカ。陶芸作家との協力で制作した一品もの。",
    season: "通年発送（在庫限り）",
    color: "#5a3a1a",
  },
];

export default function FurusatoPage() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>ふるさと納税</span>
          </div>
          <h1 className="page-title">日野原市へのふるさと納税</h1>

          <div style={{ border: "1px solid #e8c040", background: "#fffbe8", padding: 14, marginBottom: 16, fontSize: 13, lineHeight: 1.8 }}>
            <strong>日野原市へのふるさと納税をありがとうございます。</strong><br />
            日野原市では、皆様からいただいたご寄附を、子育て・教育・まちづくり・自然環境保全など、市民の生活向上のために大切に活用させていただきます。
            地域の特産品・体験チケットなど、日野原市ならではのお礼の品をご用意しています。
          </div>

          <div className="info-card-grid" style={{ marginBottom: 16 }}>
            <div className="info-card">
              <div className="info-card-head">令和6年度 寄附受入額</div>
              <div className="info-card-body"><strong>2億4,800</strong>万円<br />（寄附件数 18,420件）</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">お礼の品 掲載数</div>
              <div className="info-card-body"><strong>142</strong>品目<br />（令和8年6月現在）</div>
            </div>
            <div className="info-card">
              <div className="info-card-head">寄附の使い道</div>
              <div className="info-card-body">6項目から<br /><strong>自由に選択可</strong></div>
            </div>
          </div>

          <div className="section-title">寄附金の使い道</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 16 }}>
            {[
              { no: "①", label: "子育て・教育の充実", desc: "保育所の整備・学校図書の充実・奨学金支援など" },
              { no: "②", label: "自然環境・景観の保全", desc: "白峰高原の森林整備・原野川の清流保全・鳥獣被害対策" },
              { no: "③", label: "農林業・地域産業の振興", desc: "りんご産地の競争力強化・新規就農者支援・商店街活性化" },
              { no: "④", label: "高齢者・障がい者福祉の推進", desc: "地域包括ケアシステムの構築・介護施設の充実" },
              { no: "⑤", label: "移住・定住・関係人口の拡大", desc: "空き家バンクの運営・移住者支援金・UIJターン促進" },
              { no: "⑥", label: "市長にお任せ（最も必要な施策に活用）", desc: "緊急性・優先度の高い施策に柔軟に充当します" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 12, padding: "8px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                <div style={{ minWidth: 30, fontWeight: "bold", color: "var(--city-blue)", fontSize: 14 }}>{item.no}</div>
                <div style={{ minWidth: 200, fontWeight: "bold", fontSize: 13 }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <div className="section-title">お礼の品（一部ご紹介）</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, borderTop: "none", marginBottom: 16 }}>
            {gifts.map((g) => (
              <div key={g.id} style={{ border: "1px solid var(--border-light)", background: "#fff" }}>
                <div style={{ height: 120, background: "#f0f4f0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 11, color: "#aaa" }}>画像準備中</span>
                </div>
                <div style={{ padding: "10px 12px" }}>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 2 }}>品番：{g.id}　提供：{g.producer}</div>
                  <div style={{ fontSize: 13, fontWeight: "bold", color: "var(--link-color)", marginBottom: 4 }}>
                    <a href={`/furusato/${g.id}`}>{g.name}</a>
                  </div>
                  <div style={{ fontSize: 12, color: "#555", lineHeight: 1.6, marginBottom: 6 }}>{g.desc}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "#888" }}>発送：{g.season}</span>
                    <span style={{ fontSize: 12, fontWeight: "bold", color: "var(--city-blue)", background: "#e8eef8", padding: "2px 8px", borderRadius: 2 }}>
                      寄附額 {g.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginBottom: 16, display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.furusato-tax.jp/city/product/12999" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#e8380d", color: "#fff", padding: "10px 22px", fontWeight: "bold", fontSize: 13, borderRadius: 2 }}>
              ふるさとチョイスで申し込む
            </a>
            <a href="https://item.rakuten.co.jp/f129990001/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#bf0000", color: "#fff", padding: "10px 22px", fontWeight: "bold", fontSize: 13, borderRadius: 2 }}>
              楽天ふるさと納税で申し込む
            </a>
            <a href="https://www.satofull.jp/town/cooperation.php?city_code=12999" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#ff6600", color: "#fff", padding: "10px 22px", fontWeight: "bold", fontSize: 13, borderRadius: 2 }}>
              さとふるで申し込む
            </a>
          </div>
          <p style={{ fontSize: 12, color: "#888", marginTop: -8, marginBottom: 16, textAlign: "center" }}>各ポータルサイトに遷移します。サイトにより掲載品目が異なる場合があります。</p>

          <div className="section-title">よくあるご質問</div>
          <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff", marginBottom: 16 }}>
            {[
              { q: "クレジットカードで寄附できますか？", a: "各ふるさと納税ポータルサイトからのお申込みの場合、クレジットカード払いが可能です。市への直接送金の場合は、銀行振込・郵便振替をご利用ください。" },
              { q: "ワンストップ特例制度とは何ですか？", a: "確定申告をしなくても寄附金税額控除が受けられる制度です。寄附先が5自治体以内で、給与所得者の方が対象です。寄附後に市から送付する申請書にご記入の上、翌年1月10日までにご返送ください。" },
              { q: "お礼の品の発送時期を教えてください。", a: "品目によって発送時期が異なります。各商品のページの「発送時期」をご確認ください。農産物は収穫時期に合わせた季節限定発送となります。" },
              { q: "返礼品なしで寄附できますか？", a: "はい、可能です。「お礼の品不要」を選択していただき、直接市にお申し込みください。いただいたご寄附は使い道をご指定の上、全額まちづくりに活用させていただきます。" },
            ].map((item, i) => (
              <div key={i} style={{ padding: "10px 14px", borderBottom: "1px solid #e8edf4" }}>
                <div style={{ fontWeight: "bold", fontSize: 13, color: "var(--city-blue)", marginBottom: 4 }}>Q. {item.q}</div>
                <div style={{ fontSize: 12, color: "#444", lineHeight: 1.7, paddingLeft: 12 }}>A. {item.a}</div>
              </div>
            ))}
          </div>

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>ふるさと納税 担当窓口（日野原市役所 企画政策課）</strong><br />
            電話：0439-88-1114　メール：furusato@city.hinohara.lg.jp<br />
            受付時間：平日 午前8時30分〜午後5時15分
          </div>
          <PageInfo department="ふるさと納税推進室" tel="0439-88-1115（内線 115）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
