import { MetadataRoute } from "next";

const BASE = "https://hinohara.city";

type Freq = MetadataRoute.Sitemap[0]["changeFrequency"];

type PageDef = {
  path: string;
  freq: Freq;
  priority: number;
  lastmod?: string;
};

const pages: PageDef[] = [
  // ── トップ ──
  { path: "/",                              freq: "daily",   priority: 1.0 },

  // ── 市政情報 ──
  { path: "/shisei",                        freq: "weekly",  priority: 0.8 },
  { path: "/shisei/gaiyou",                 freq: "monthly", priority: 0.8 },
  { path: "/shisei/soshiki",                freq: "monthly", priority: 0.7 },
  { path: "/shisei/keikaku",                freq: "monthly", priority: 0.7 },
  { path: "/shisei/rekishi",                freq: "yearly",  priority: 0.5 },
  { path: "/shisei/mascot",                 freq: "monthly", priority: 0.6 },
  { path: "/shisei/toshi",                  freq: "monthly", priority: 0.6 },
  { path: "/shisei/zaisei",                 freq: "monthly", priority: 0.7 },
  { path: "/shisei/joho",                   freq: "monthly", priority: 0.6 },
  { path: "/shisei/reiki",                  freq: "monthly", priority: 0.5 },
  { path: "/shisei/pubcom",                 freq: "weekly",  priority: 0.6 },
  { path: "/shisei/chotatsu",               freq: "weekly",  priority: 0.6 },
  { path: "/shisei/chotatsu/shikaku",       freq: "monthly", priority: 0.5 },
  { path: "/shisei/koho",                   freq: "monthly", priority: 0.7 },
  { path: "/shisei/shingikai",              freq: "monthly", priority: 0.5 },
  { path: "/mayor",                         freq: "monthly", priority: 0.7 },
  { path: "/gikai",                         freq: "weekly",  priority: 0.7 },
  { path: "/senkyo",                        freq: "monthly", priority: 0.6 },
  { path: "/saiyo",                         freq: "monthly", priority: 0.6 },

  // ── くらし・手続き ──
  { path: "/kurashi",                       freq: "weekly",  priority: 0.8 },
  { path: "/kurashi/jumin",                 freq: "monthly", priority: 0.8 },
  { path: "/kurashi/shomeisho",             freq: "monthly", priority: 0.7 },
  { path: "/shinsei",                       freq: "monthly", priority: 0.8 },
  { path: "/kurashi/zei",                   freq: "monthly", priority: 0.8 },
  { path: "/kurashi/gomi",                  freq: "monthly", priority: 0.8 },
  { path: "/kurashi/doro",                  freq: "monthly", priority: 0.7 },
  { path: "/kurashi/suido",                 freq: "monthly", priority: 0.7 },
  { path: "/kurashi/kotsu",                 freq: "monthly", priority: 0.8 },
  { path: "/kurashi/nenkin",                freq: "monthly", priority: 0.7 },
  { path: "/kurashi/jutaku",                freq: "monthly", priority: 0.7 },
  { path: "/kurashi/bousai",                freq: "weekly",  priority: 0.8 },
  { path: "/bousai",                        freq: "daily",   priority: 0.9 },
  { path: "/bousai/keikai",                 freq: "daily",   priority: 0.9 },
  { path: "/faq",                           freq: "monthly", priority: 0.7 },

  // ── 子育て ──
  { path: "/kosodate",                      freq: "monthly", priority: 0.8 },
  { path: "/kenko/kosodate",                freq: "monthly", priority: 0.8 },
  { path: "/kenko/kosodate/nyusho",         freq: "monthly", priority: 0.7 },
  { path: "/kenko/kosodate/jidoteate",      freq: "monthly", priority: 0.7 },
  { path: "/kenko/kosodate/kenshin",        freq: "monthly", priority: 0.7 },
  { path: "/kenko/kosodate/center",         freq: "monthly", priority: 0.7 },
  { path: "/kenko/kosodate/gakudo",         freq: "monthly", priority: 0.7 },
  { path: "/kenko/kosodate/hitorioya",      freq: "monthly", priority: 0.7 },

  // ── 健康・福祉 ──
  { path: "/kenko",                         freq: "weekly",  priority: 0.8 },
  { path: "/kenko/kaigo",                   freq: "monthly", priority: 0.8 },
  { path: "/kenko/kaigo/seido",             freq: "monthly", priority: 0.7 },
  { path: "/kenko/kaigo/hokenryo",          freq: "yearly",  priority: 0.6 },
  { path: "/kenko/kaigo/ninchisho",         freq: "monthly", priority: 0.7 },
  { path: "/kenko/kaigo/mimamori",          freq: "monthly", priority: 0.7 },
  { path: "/kenko/kaigo/chiiki",            freq: "monthly", priority: 0.6 },
  { path: "/kenko/koreisha",                freq: "monthly", priority: 0.7 },
  { path: "/kenko/shogai",                  freq: "monthly", priority: 0.7 },
  { path: "/kenko/shogai/techo",            freq: "monthly", priority: 0.6 },
  { path: "/kenko/shogai/service",          freq: "monthly", priority: 0.6 },
  { path: "/kenko/shogai/hosogu",           freq: "monthly", priority: 0.6 },
  { path: "/kenko/shogai/ido",              freq: "monthly", priority: 0.6 },
  { path: "/kenko/shogai/soudan",           freq: "monthly", priority: 0.6 },
  { path: "/kenko/kokuho",                  freq: "monthly", priority: 0.7 },
  { path: "/kenko/kokuho/tetsuzuki",        freq: "monthly", priority: 0.7 },
  { path: "/kenko/kokuho/zei",              freq: "yearly",  priority: 0.6 },
  { path: "/kenko/kokuho/joshi",            freq: "monthly", priority: 0.6 },
  { path: "/kenko/kokuho/kouki",            freq: "monthly", priority: 0.6 },
  { path: "/kenko/kokuho/kyukyu",           freq: "monthly", priority: 0.6 },
  { path: "/kenko/kokuho/iin",              freq: "monthly", priority: 0.5 },
  { path: "/kenko/yobosesshu",              freq: "monthly", priority: 0.7 },
  { path: "/kenko/yobosesshu/nyuyoji",      freq: "monthly", priority: 0.6 },
  { path: "/kenko/yobosesshu/seijin",       freq: "monthly", priority: 0.6 },
  { path: "/kenko/yobosesshu/tokutei",      freq: "monthly", priority: 0.6 },
  { path: "/kenko/yobosesshu/gankenshin",   freq: "monthly", priority: 0.6 },
  { path: "/kenko/yobosesshu/kokoro",       freq: "monthly", priority: 0.6 },
  { path: "/kenko/seikatsu/hogo",           freq: "monthly", priority: 0.6 },
  { path: "/kenko/seikatsu/konku",          freq: "monthly", priority: 0.6 },
  { path: "/kenko/seikatsu/foodbank",       freq: "monthly", priority: 0.6 },
  { path: "/kenko/seikatsu/juukyo",         freq: "monthly", priority: 0.6 },

  // ── 教育・文化 ──
  { path: "/kyoiku",                        freq: "weekly",  priority: 0.8 },
  { path: "/kyoiku/gakko",                  freq: "monthly", priority: 0.7 },
  { path: "/kyoiku/gakko/chuo-sho",         freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/hokubu-sho",       freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/nanbu-sho",        freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/tobu-sho",         freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/haruno-sho",       freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/shirotaki-sho",    freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/daiichi-chu",      freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/daini-chu",        freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/gakko/haruno-chu",       freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/hoiku",                  freq: "monthly", priority: 0.7 },
  { path: "/kyoiku/shogaigakushu",          freq: "monthly", priority: 0.6 },
  { path: "/kyoiku/toshokan",               freq: "monthly", priority: 0.7 },
  { path: "/kyoiku/sport",                  freq: "monthly", priority: 0.6 },

  // ── 産業・環境 ──
  { path: "/sangyo",                        freq: "weekly",  priority: 0.8 },
  { path: "/sangyo/nogyo",                  freq: "monthly", priority: 0.7 },
  { path: "/sangyo/nogyoiinkai",            freq: "monthly", priority: 0.6 },
  { path: "/sangyo/shoko",                  freq: "monthly", priority: 0.7 },
  { path: "/jigyosha",                      freq: "monthly", priority: 0.7 },
  { path: "/sangyo/kanko",                  freq: "monthly", priority: 0.7 },
  { path: "/sangyo/shigoto",                freq: "monthly", priority: 0.7 },
  { path: "/sangyo/kigyoyuchi",             freq: "monthly", priority: 0.6 },
  { path: "/sangyo/kankyo",                 freq: "monthly", priority: 0.6 },

  // ── 施設案内 ──
  { path: "/shisetsu",                      freq: "monthly", priority: 0.8 },
  { path: "/shisetsu/shiyakusho",           freq: "monthly", priority: 0.7 },
  { path: "/shisetsu/bunka-center",         freq: "monthly", priority: 0.7 },
  { path: "/shisetsu/toshokan",             freq: "monthly", priority: 0.7 },
  { path: "/shisetsu/taiikukan",            freq: "monthly", priority: 0.7 },
  { path: "/shisetsu/rekishi-shiryokan",    freq: "monthly", priority: 0.6 },
  { path: "/shisetsu/michi-no-eki",         freq: "weekly",  priority: 0.7 },
  { path: "/shisetsu/nogyo-koen",           freq: "monthly", priority: 0.6 },
  { path: "/shisetsu/visitor-center",       freq: "monthly", priority: 0.6 },
  { path: "/shisetsu/rojin-fukushi",        freq: "monthly", priority: 0.6 },

  // ── 観光・移住 ──
  { path: "/kanko",                         freq: "weekly",  priority: 0.9 },
  { path: "/kanko/onsen",                   freq: "monthly", priority: 0.8 },
  { path: "/kanko/hiking",                  freq: "monthly", priority: 0.8 },
  { path: "/kanko/alps",                    freq: "monthly", priority: 0.8 },
  { path: "/kanko/biwa",                    freq: "monthly", priority: 0.8 },
  { path: "/kanko/yamabiko",                freq: "monthly", priority: 0.7 },
  { path: "/kanko/bunka",                   freq: "monthly", priority: 0.7 },
  { path: "/kanko/event",                   freq: "weekly",  priority: 0.8 },
  { path: "/kanko/tokusanhin",              freq: "monthly", priority: 0.7 },
  { path: "/kanko/iju",                     freq: "monthly", priority: 0.8 },
  { path: "/kanko/access",                  freq: "monthly", priority: 0.8 },

  // ── ふるさと納税 ──
  { path: "/furusato",                      freq: "monthly", priority: 0.7 },
  { path: "/furusato/H001",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H002",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H003",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H004",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H005",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H006",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H007",                 freq: "monthly", priority: 0.6 },
  { path: "/furusato/H008",                 freq: "monthly", priority: 0.6 },

  // ── お知らせ ──
  { path: "/news",                          freq: "daily",   priority: 0.9, lastmod: "2026-07-10" },
  { path: "/news/r8-shiminzei-1ki",        freq: "monthly", priority: 0.5, lastmod: "2026-07-10" },
  { path: "/news/r8-suinan-yobo",          freq: "monthly", priority: 0.5, lastmod: "2026-06-09" },
  { path: "/news/r8-nessho-yobo",          freq: "monthly", priority: 0.5, lastmod: "2026-06-05" },
  { path: "/news/bousai-map",              freq: "monthly", priority: 0.6 },
  { path: "/news/yamabiko2026",            freq: "monthly", priority: 0.6 },
  { path: "/news/doro-r8-031",             freq: "monthly", priority: 0.5 },
  { path: "/news/kaigo-futanwariai",       freq: "monthly", priority: 0.5 },
  { path: "/news/concert0614",             freq: "monthly", priority: 0.5 },
  { path: "/news/seisosakugyou",           freq: "monthly", priority: 0.5 },
  { path: "/news/mynumber-r8",             freq: "monthly", priority: 0.5 },
  { path: "/news/kosodate-ichiji",         freq: "monthly", priority: 0.5 },
  { path: "/news/r8-018",                  freq: "monthly", priority: 0.5 },
  { path: "/news/r8-biwa-chokubai",        freq: "monthly", priority: 0.5 },
  { path: "/news/r8-nozei",                freq: "monthly", priority: 0.5 },
  { path: "/news/renewal2026",             freq: "monthly", priority: 0.4 },
  { path: "/news/r8-yamabiko-koutsuu",     freq: "monthly", priority: 0.5, lastmod: "2026-06-12" },
  { path: "/news/r8-gikai-2kai-teireikai",  freq: "monthly", priority: 0.5, lastmod: "2026-06-19" },
  { path: "/news/r8-dansu-hakuho",         freq: "monthly", priority: 0.5, lastmod: "2026-06-16" },

  // ── サイト情報 ──
  { path: "/inquiry",                       freq: "monthly", priority: 0.7 },
  { path: "/faq",                           freq: "monthly", priority: 0.7 },
  { path: "/sitemap",                       freq: "weekly",  priority: 0.5 },
  { path: "/accessibility",                 freq: "yearly",  priority: 0.4 },
  { path: "/privacy",                       freq: "yearly",  priority: 0.4 },
  { path: "/copyright",                     freq: "yearly",  priority: 0.3 },
  { path: "/disclaimer",                    freq: "yearly",  priority: 0.3 },
  { path: "/links",                         freq: "monthly", priority: 0.4 },
];

const DEFAULT_LASTMOD = new Date("2026-06-10T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  // /faq が重複しているので dedupe
  const seen = new Set<string>();
  return pages
    .filter(({ path }) => {
      if (seen.has(path)) return false;
      seen.add(path);
      return true;
    })
    .map(({ path, freq, priority, lastmod }) => ({
      url: `${BASE}${path}`,
      lastModified: lastmod ? new Date(lastmod) : DEFAULT_LASTMOD,
      changeFrequency: freq,
      priority,
    }));
}
