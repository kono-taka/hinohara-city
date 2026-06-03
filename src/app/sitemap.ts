import { MetadataRoute } from "next";

const BASE = "https://hinohara-city.vercel.app";

type Entry = { url: string; lastModified?: string; changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number };

const now = new Date().toISOString();

const pages: Entry[] = [
  // トップ
  { url: BASE, changeFrequency: "daily",   priority: 1.0 },

  // 市政情報
  { url: `${BASE}/shisei`,              changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE}/shisei/gaiyou`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisei/keikaku`,      changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisei/zaisei`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisei/joho`,         changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisei/soshiki`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisei/koho`,         changeFrequency: "weekly",  priority: 0.6 },
  { url: `${BASE}/shisei/shingikai`,    changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisei/pubcom`,       changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisei/reiki`,        changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisei/rekishi`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisei/chotatsu`,     changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisei/chotatsu/shikaku`, changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/mayor`,              changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/gikai`,              changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/senkyo`,             changeFrequency: "monthly", priority: 0.6 },

  // くらし・手続き
  { url: `${BASE}/kurashi`,            changeFrequency: "weekly",  priority: 0.8 },
  { url: `${BASE}/kurashi/jumin`,      changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kurashi/zei`,        changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kurashi/gomi`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kurashi/doro`,       changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kurashi/jutaku`,     changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kurashi/bousai`,     changeFrequency: "weekly",  priority: 0.6 },
  { url: `${BASE}/kurashi/shomeisho`,  changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shinsei`,            changeFrequency: "monthly", priority: 0.7 },

  // 健康・福祉
  { url: `${BASE}/kenko`,              changeFrequency: "weekly",  priority: 0.8 },
  { url: `${BASE}/kenko/kokuho`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/kokuho/tetsuzuki`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kokuho/zei`,   changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kokuho/kouki`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kokuho/joshi`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kokuho/kyukyu`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kokuho/iin`,   changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/kenko/kaigo`,        changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/kaigo/seido`,  changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kaigo/hokenryo`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kaigo/ninchisho`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kaigo/mimamori`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kaigo/chiiki`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kosodate`,     changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/kosodate/nyusho`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/kosodate/jidoteate`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kosodate/kenshin`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kosodate/center`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kosodate/gakudo`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/kosodate/hitorioya`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/shogai`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/shogai/techo`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/shogai/service`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/shogai/hosogu`, changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/kenko/shogai/ido`,   changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/kenko/shogai/soudan`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/koreisha`,     changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/yobosesshu`,   changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kenko/yobosesshu/nyuyoji`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/yobosesshu/seijin`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/yobosesshu/tokutei`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/yobosesshu/gankenshin`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/yobosesshu/kokoro`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kenko/seikatsu/hogo`, changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/kenko/seikatsu/konku`, changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/kenko/seikatsu/juukyo`, changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/kenko/seikatsu/foodbank`, changeFrequency: "monthly", priority: 0.4 },

  // 教育・文化
  { url: `${BASE}/kyoiku`,             changeFrequency: "weekly",  priority: 0.8 },
  { url: `${BASE}/kyoiku/gakko`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kyoiku/gakko/chuo-sho`,    changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/hokubu-sho`,  changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/nanbu-sho`,   changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/tobu-sho`,    changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/haruno-sho`,  changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/shirotaki-sho`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/daiichi-chu`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/daini-chu`,   changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/gakko/haruno-chu`,  changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/hoiku`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kyoiku/shogaigakushu`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kyoiku/toshokan`,    changeFrequency: "weekly",  priority: 0.6 },
  { url: `${BASE}/kyoiku/sport`,       changeFrequency: "monthly", priority: 0.5 },

  // 産業・環境
  { url: `${BASE}/sangyo`,             changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/sangyo/nogyo`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sangyo/shoko`,       changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/sangyo/kanko`,       changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/sangyo/kankyo`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/sangyo/shigoto`,     changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/sangyo/kigyoyuchi`,  changeFrequency: "monthly", priority: 0.5 },

  // 施設案内
  { url: `${BASE}/shisetsu`,           changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/shisetsu/shiyakusho`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisetsu/bunka-center`, changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisetsu/toshokan`,  changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/shisetsu/taiikukan`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisetsu/rekishi-shiryokan`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisetsu/nogyo-koen`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisetsu/visitor-center`, changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/shisetsu/rojin-fukushi`, changeFrequency: "monthly", priority: 0.5 },

  // 観光・移住
  { url: `${BASE}/kanko`,              changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/kanko/iju`,          changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/kanko/event`,        changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/kanko/tokusanhin`,   changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/kanko/bunka`,        changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/kanko/access`,       changeFrequency: "monthly", priority: 0.6 },

  // ふるさと納税
  { url: `${BASE}/furusato`,           changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/furusato/H001`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H002`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H003`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H004`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H005`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H006`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H007`,      changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/furusato/H008`,      changeFrequency: "monthly", priority: 0.5 },

  // 防災
  { url: `${BASE}/bousai`,             changeFrequency: "weekly",  priority: 0.7 },
  { url: `${BASE}/bousai/keikai`,      changeFrequency: "daily",   priority: 0.8 },

  // お知らせ
  { url: `${BASE}/news`,               changeFrequency: "daily",   priority: 0.9 },

  // よくある質問・その他
  { url: `${BASE}/faq`,                changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/inquiry`,            changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/accessibility`,      changeFrequency: "monthly", priority: 0.3 },
  { url: `${BASE}/privacy`,            changeFrequency: "monthly", priority: 0.3 },
  { url: `${BASE}/copyright`,          changeFrequency: "monthly", priority: 0.3 },
  { url: `${BASE}/disclaimer`,         changeFrequency: "monthly", priority: 0.3 },
  { url: `${BASE}/links`,              changeFrequency: "monthly", priority: 0.4 },
  { url: `${BASE}/sitemap`,            changeFrequency: "monthly", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({
    url: p.url,
    lastModified: p.lastModified ?? now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
