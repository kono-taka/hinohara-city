import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import {
  CatIconKosodate, CatIconKoreisha, CatIconShogai,
  CatIconKokuho, CatIconYobosesshu, CatIconSeikatsu,
} from "@/components/InlineIcons";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "健康・福祉" };

export default function KenkoPage() {
  return (
    <>
      <SiteHeader current="/kenko" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><span>健康・福祉</span>
          </div>
          <h1 className="page-title">健康・福祉</h1>

          {[
            {
              title: "子育て・保育",
              Icon: CatIconKosodate,
              items: [
                { label: "保育所・認定こども園の入所申込", href: "/kenko/kosodate/nyusho", desc: "令和9年度入所申込は10月1日から受付開始予定" },
                { label: "子育て支援センター（ひのはらキッズひろば）", href: "/kenko/kosodate/center", desc: "就学前の子どもと保護者が自由に利用できる交流スペース" },
                { label: "児童手当の申請・届出", href: "/kenko/kosodate/jidoteate", desc: "支給対象・金額・手続きについてご案内" },
                { label: "乳幼児健診・予防接種のご案内", href: "/kenko/kosodate/kenshin", desc: "3〜4か月健診から就学前健診まで" },
                { label: "ひとり親家庭への支援", href: "/kenko/kosodate/hitorioya", desc: "児童扶養手当・就業支援・相談窓口" },
                { label: "放課後児童クラブ（学童保育）", href: "/kenko/kosodate/gakudo", desc: "市内7か所の放課後児童クラブ一覧と申込方法" },
              ],
            },
            {
              title: "高齢者支援",
              Icon: CatIconKoreisha,
              items: [
                { label: "介護保険制度の概要と申請方法", href: "/kenko/kaigo/seido", desc: "要介護認定の申請から介護サービス利用まで" },
                { label: "介護保険負担割合・保険料", href: "/kenko/kaigo/hokenryo", desc: "令和8年度の保険料額表・減額申請について" },
                { label: "地域包括支援センター（高齢者なんでも相談）", href: "/kenko/kaigo/chiiki", desc: "市内3か所の窓口で介護・医療・生活の相談に応じます" },
                { label: "老人福祉センター（長寿の家）の利用", href: "/kenko/koreisha", desc: "60歳以上の方が無料で利用できる浴室・集会室" },
                { label: "高齢者見守りネットワーク", href: "/kenko/kaigo/mimamori", desc: "民生委員・地域住民・事業者との連携による見守り活動" },
                { label: "認知症に関する支援・相談", href: "/kenko/kaigo/ninchisho", desc: "認知症サポーター養成講座・家族支援" },
              ],
            },
            {
              title: "障がい福祉",
              Icon: CatIconShogai,
              items: [
                { label: "障害者手帳の申請", href: "/kenko/shogai/techo", desc: "身体障害者手帳・療育手帳・精神障害者保健福祉手帳" },
                { label: "障害福祉サービスの利用申請", href: "/kenko/shogai/service", desc: "居宅介護・生活介護・就労支援等" },
                { label: "障がい者相談支援センター", href: "/kenko/shogai/soudan", desc: "福祉サービスの利用計画作成・生活全般の相談" },
                { label: "補装具・日常生活用具の給付", href: "/kenko/shogai/hosogu", desc: "車椅子・補聴器等の給付・修理に関する申請" },
                { label: "移動支援・日中一時支援", href: "/kenko/shogai/ido", desc: "外出支援・日中の活動場所の提供" },
              ],
            },
            {
              title: "国民健康保険・医療",
              Icon: CatIconKokuho,
              items: [
                { label: "国民健康保険の加入・脱退届", href: "/kenko/kokuho/tetsuzuki", desc: "就職・退職・転入出時の手続き" },
                { label: "令和8年度 国民健康保険税について", href: "/kenko/kokuho/zei", desc: "保険税の計算方法・納期・減免申請" },
                { label: "医療費の助成（子ども・障がい者）", href: "/kenko/kokuho/joshi", desc: "通院・入院の医療費を助成する制度のご案内" },
                { label: "後期高齢者医療制度", href: "/kenko/kokuho/kouki", desc: "75歳以上（一定の障がいのある65歳以上）の方の医療制度" },
                { label: "市内医療機関一覧", href: "/kenko/kokuho/iin", desc: "病院・診療所・歯科・薬局の一覧（外部リンク）" },
                { label: "救急医療・時間外診療", href: "/kenko/kokuho/kyukyu", desc: "当番医・休日急病診療センターのご案内" },
              ],
            },
            {
              title: "予防接種・健康診断",
              Icon: CatIconYobosesshu,
              items: [
                { label: "乳幼児予防接種スケジュール", href: "/kenko/yobosesshu/nyuyoji", desc: "定期接種の種類・時期・費用についてご案内" },
                { label: "成人の予防接種（インフルエンザ等）", href: "/kenko/yobosesshu/seijin", desc: "高齢者インフルエンザ・肺炎球菌ワクチンの助成" },
                { label: "特定健康診査（メタボ健診）", href: "/kenko/yobosesshu/tokutei", desc: "40〜74歳の国保加入者を対象とした健診" },
                { label: "がん検診（胃・肺・大腸・子宮・乳）", href: "/kenko/yobosesshu/gankenshin", desc: "令和8年度 がん検診の日程と申込方法" },
                { label: "こころの健康相談・自殺予防", href: "/kenko/yobosesshu/kokoro", desc: "精神保健福祉士による相談窓口（要予約）" },
              ],
            },
            {
              title: "生活保護・生活困窮支援",
              Icon: CatIconSeikatsu,
              items: [
                { label: "生活保護の申請", href: "/kenko/seikatsu/hogo", desc: "生活にお困りの方へ。まずはご相談ください。" },
                { label: "生活困窮者自立支援制度", href: "/kenko/seikatsu/konku", desc: "就労支援・家計相談・一時生活支援" },
                { label: "フードバンク・食料支援", href: "/kenko/seikatsu/foodbank", desc: "市社会福祉協議会が実施するフードバンク事業" },
                { label: "住居確保給付金", href: "/kenko/seikatsu/juukyo", desc: "離職等により住居を失うおそれがある方への家賃補助" },
              ],
            },
          ].map((cat, i) => (
            <div key={i} style={{ marginBottom: 16 }}>
              <div className="section-title" style={{ display: "flex", alignItems: "center", gap: 6 }}><cat.Icon /> {cat.title}</div>
              <div style={{ border: "1px solid var(--border-light)", borderTop: "none", background: "#fff" }}>
                {cat.items.map((item, j) => (
                  <div key={j} style={{ display: "flex", gap: 12, padding: "9px 14px", borderBottom: "1px solid #e8edf4", alignItems: "flex-start" }}>
                    <div style={{ minWidth: 260 }}>
                      <a href={item.href} style={{ fontSize: 13, fontWeight: "bold" }}>▶ {item.label}</a>
                    </div>
                    <div style={{ fontSize: 12, color: "#666", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ padding: 14, background: "#f4f6fb", border: "1px solid var(--border-light)", fontSize: 12, lineHeight: 1.8 }}>
            <strong>福祉課・健康推進課 窓口（市役所1階）</strong><br />
            受付時間：平日 午前8時30分〜午後5時15分<br />
            福祉課：☎ 0439-88-1120 / 健康推進課：☎ 0439-88-1122
          </div>
          <PageInfo department="健康推進課" tel="0439-88-1165（内線 165）" updated="令和8年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
