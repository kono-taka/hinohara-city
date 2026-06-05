export type SitePage = { href: string; title: string };
export type SiteSection = {
  id: string;
  title: string;
  href: string;
  pages: SitePage[];
};

export const SITE_SECTIONS: SiteSection[] = [
  {
    id: "shisei",
    title: "市政情報",
    href: "/shisei",
    pages: [
      { href: "/shisei",          title: "市政情報トップ" },
      { href: "/mayor",           title: "市長室" },
      { href: "/shisei/gaiyou",   title: "市政概要・プロフィール" },
      { href: "/shisei/soshiki",  title: "組織・部署案内" },
      { href: "/shisei/keikaku",  title: "第3次総合計画" },
      { href: "/shisei/zaisei",   title: "財政情報" },
      { href: "/shisei/joho",     title: "情報公開・個人情報保護" },
      { href: "/shisei/reiki",    title: "条例・規則（例規集）" },
      { href: "/shisei/koho",     title: "広報ひのはら" },
      { href: "/shisei/shingikai",title: "審議会・委員会" },
      { href: "/shisei/rekishi",  title: "日野原市の歩み" },
      { href: "/shisei/pubcom",   title: "パブリックコメント" },
      { href: "/shisei/chotatsu", title: "入札・契約情報" },
      { href: "/shisei/mascot",   title: "マスコットキャラクター" },
      { href: "/gikai",           title: "市議会" },
      { href: "/senkyo",          title: "選挙情報" },
    ],
  },
  {
    id: "kurashi",
    title: "くらし・手続き",
    href: "/kurashi",
    pages: [
      { href: "/kurashi",           title: "くらし・手続きトップ" },
      { href: "/kurashi/jumin",     title: "住民登録・戸籍・マイナンバー" },
      { href: "/kurashi/zei",       title: "市税・各種税金" },
      { href: "/kurashi/gomi",      title: "ごみ・リサイクル" },
      { href: "/kurashi/bousai",    title: "防災・安全" },
      { href: "/kurashi/doro",      title: "道路・河川・公共交通" },
      { href: "/kurashi/jutaku",    title: "住宅・建築" },
      { href: "/kurashi/shomeisho", title: "各種証明書の申請" },
      { href: "/shinsei",           title: "申請書類ダウンロード" },
    ],
  },
  {
    id: "kaigo",
    title: "介護保険",
    href: "/kenko/kaigo",
    pages: [
      { href: "/kenko/kaigo",           title: "介護保険のご案内" },
      { href: "/kenko/kaigo/seido",     title: "制度の概要と申請方法" },
      { href: "/kenko/kaigo/hokenryo",  title: "介護保険料（令和8年度）" },
      { href: "/kenko/kaigo/ninchisho", title: "認知症支援・相談" },
      { href: "/kenko/kaigo/mimamori",  title: "高齢者見守りネットワーク" },
      { href: "/kenko/kaigo/chiiki",    title: "地域包括支援センター" },
    ],
  },
  {
    id: "kosodate",
    title: "子育て・保育",
    href: "/kenko/kosodate",
    pages: [
      { href: "/kenko/kosodate",           title: "子育て・保育トップ" },
      { href: "/kenko/kosodate/nyusho",    title: "保育所・認定こども園の入所申込" },
      { href: "/kenko/kosodate/jidoteate", title: "児童手当の申請・届出" },
      { href: "/kenko/kosodate/kenshin",   title: "乳幼児健診・育児相談" },
      { href: "/kenko/kosodate/center",    title: "子育て支援センター" },
      { href: "/kenko/kosodate/gakudo",    title: "放課後児童クラブ（学童保育）" },
      { href: "/kenko/kosodate/hitorioya", title: "ひとり親家庭への支援" },
    ],
  },
  {
    id: "kokuho",
    title: "国民健康保険",
    href: "/kenko/kokuho",
    pages: [
      { href: "/kenko/kokuho",           title: "国民健康保険トップ" },
      { href: "/kenko/kokuho/tetsuzuki", title: "加入・脱退の手続き" },
      { href: "/kenko/kokuho/zei",       title: "国民健康保険税（令和8年度）" },
      { href: "/kenko/kokuho/joshi",     title: "医療費の助成" },
      { href: "/kenko/kokuho/kouki",     title: "後期高齢者医療制度" },
      { href: "/kenko/kokuho/kyukyu",    title: "救急医療・時間外診療" },
      { href: "/kenko/kokuho/iin",       title: "市内医療機関一覧" },
    ],
  },
  {
    id: "shogai",
    title: "障がい福祉",
    href: "/kenko/shogai",
    pages: [
      { href: "/kenko/shogai",          title: "障がい福祉トップ" },
      { href: "/kenko/shogai/techo",    title: "障害者手帳の申請" },
      { href: "/kenko/shogai/service",  title: "障害福祉サービスの利用申請" },
      { href: "/kenko/shogai/hosogu",   title: "補装具・日常生活用具の給付" },
      { href: "/kenko/shogai/ido",      title: "移動支援・日中一時支援" },
      { href: "/kenko/shogai/soudan",   title: "相談支援センター「ひのはら相談室」" },
    ],
  },
  {
    id: "yobosesshu",
    title: "予防接種・健診",
    href: "/kenko/yobosesshu",
    pages: [
      { href: "/kenko/yobosesshu",               title: "予防接種・健診トップ" },
      { href: "/kenko/yobosesshu/nyuyoji",       title: "乳幼児予防接種スケジュール" },
      { href: "/kenko/yobosesshu/seijin",        title: "成人・高齢者の予防接種" },
      { href: "/kenko/yobosesshu/tokutei",       title: "特定健康診査（メタボ健診）" },
      { href: "/kenko/yobosesshu/gankenshin",    title: "がん検診（令和8年度）" },
      { href: "/kenko/yobosesshu/kokoro",        title: "こころの健康相談・自殺予防" },
    ],
  },
  {
    id: "gakko",
    title: "市立学校",
    href: "/kyoiku/gakko",
    pages: [
      { href: "/kyoiku/gakko",               title: "小・中学校一覧" },
      { href: "/kyoiku/gakko/chuo-sho",      title: "中央小学校" },
      { href: "/kyoiku/gakko/hokubu-sho",    title: "北部小学校" },
      { href: "/kyoiku/gakko/nanbu-sho",     title: "南部小学校" },
      { href: "/kyoiku/gakko/tobu-sho",      title: "東部小学校" },
      { href: "/kyoiku/gakko/haruno-sho",    title: "原野小学校" },
      { href: "/kyoiku/gakko/shirotaki-sho", title: "白嶺小学校" },
      { href: "/kyoiku/gakko/daiichi-chu",   title: "第一中学校" },
      { href: "/kyoiku/gakko/daini-chu",     title: "第二中学校" },
      { href: "/kyoiku/gakko/haruno-chu",    title: "原野中学校" },
    ],
  },
  {
    id: "shisetsu",
    title: "公共施設",
    href: "/shisetsu",
    pages: [
      { href: "/shisetsu",                     title: "施設案内トップ" },
      { href: "/shisetsu/shiyakusho",          title: "市役所" },
      { href: "/shisetsu/bunka-center",        title: "市民文化センター" },
      { href: "/shisetsu/toshokan",            title: "市立中央図書館" },
      { href: "/shisetsu/taiikukan",           title: "総合体育館" },
      { href: "/shisetsu/rekishi-shiryokan",   title: "歴史民俗資料館" },
      { href: "/shisetsu/nogyo-koen",          title: "農業公園（ひのはら農楽園）" },
      { href: "/shisetsu/visitor-center",      title: "白嶺高原ビジターセンター" },
      { href: "/shisetsu/rojin-fukushi",       title: "老人福祉センター（長寿の家）" },
    ],
  },
  {
    id: "kanko",
    title: "観光・移住",
    href: "/kanko",
    pages: [
      { href: "/kanko",           title: "観光・移住トップ" },
      { href: "/kanko/bunka",     title: "文化財・歴史" },
      { href: "/kanko/event",     title: "イベント情報" },
      { href: "/kanko/tokusanhin",title: "特産品・グルメ" },
      { href: "/kanko/iju",       title: "移住・定住支援" },
      { href: "/kanko/access",    title: "市へのアクセス" },
    ],
  },
  {
    id: "furusato",
    title: "ふるさと納税",
    href: "/furusato",
    pages: [
      { href: "/furusato",      title: "ふるさと納税トップ" },
      { href: "/furusato/H001", title: "ぽんなわびわ 1kg詰め" },
      { href: "/furusato/H002", title: "白嶺温泉郷 宿泊ペアご招待券" },
      { href: "/furusato/H003", title: "日野原産 落花生 煎り・ゆでセット" },
      { href: "/furusato/H004", title: "ひのはら味噌 熟成蔵出し2種セット" },
      { href: "/furusato/H005", title: "白嶺高原牧場 乳製品詰め合わせ" },
      { href: "/furusato/H006", title: "旬の野菜詰め合わせ（8〜10種）" },
      { href: "/furusato/H007", title: "原野川天然水 2L×24本セット" },
      { href: "/furusato/H008", title: "縄文土器レプリカ（手のひらサイズ）" },
    ],
  },
];

/** pathname からそのページが属するセクションを返す */
export function findSection(pathname: string): SiteSection | null {
  // 完全一致を優先、次に前方一致（最長マッチ）
  let best: SiteSection | null = null;
  let bestLen = 0;
  for (const section of SITE_SECTIONS) {
    for (const page of section.pages) {
      if (page.href === pathname) return section;
    }
    if (pathname.startsWith(section.href + "/") && section.href.length > bestLen) {
      best = section;
      bestLen = section.href.length;
    }
  }
  return best;
}

/** セクション内での前後ページを返す */
export function getSiblings(section: SiteSection, pathname: string) {
  const idx = section.pages.findIndex(p => p.href === pathname);
  return {
    current: idx,
    prev: idx > 0 ? section.pages[idx - 1] : null,
    next: idx < section.pages.length - 1 ? section.pages[idx + 1] : null,
  };
}
