export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-nav">
        <div className="footer-nav-inner">
          <div className="footer-nav-col">
            <h4>市政情報</h4>
            <ul>
              <li><a href="/mayor">市長室</a></li>
              <li><a href="/faq">よくある質問（FAQ）</a></li>
              <li><a href="/shisei/gaiyou">市政概要</a></li>
              <li><a href="/gikai">市議会</a></li>
              <li><a href="/shisei/keikaku">総合計画</a></li>
              <li><a href="/shisei/zaisei">財政情報</a></li>
              <li><a href="/shisei/joho">情報公開</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>くらし・手続き</h4>
            <ul>
              <li><a href="/kurashi/jumin">住民登録・戸籍</a></li>
              <li><a href="/kurashi/zei">市税</a></li>
              <li><a href="/kurashi/gomi">ごみ・リサイクル</a></li>
              <li><a href="/kurashi/doro">道路・河川</a></li>
              <li><a href="/kurashi/jutaku">住宅</a></li>
              <li><a href="/kurashi/bousai">防災・安全</a></li>
              <li><a href="/shinsei">申請書類ダウンロード</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>健康・福祉</h4>
            <ul>
              <li><a href="/kenko/kokuho">国民健康保険</a></li>
              <li><a href="/kenko/kaigo">介護保険</a></li>
              <li><a href="/kenko/kosodate">子育て支援</a></li>
              <li><a href="/kenko/shogai">障がい福祉</a></li>
              <li><a href="/kenko/koreisha">高齢者支援</a></li>
              <li><a href="/kenko/yobosesshu">予防接種</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>教育・文化</h4>
            <ul>
              <li><a href="/kyoiku/gakko">小・中学校</a></li>
              <li><a href="/kyoiku/hoiku">保育所・幼稚園</a></li>
              <li><a href="/kyoiku/shogaigakushu">生涯学習</a></li>
              <li><a href="/kyoiku/toshokan">図書館</a></li>
              <li><a href="/kanko/bunka">文化財・歴史</a></li>
              <li><a href="/kyoiku/sport">スポーツ</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>産業・環境</h4>
            <ul>
              <li><a href="/sangyo/nogyo">農林業</a></li>
              <li><a href="/sangyo/shoko">商工業</a></li>
              <li><a href="/sangyo/kanko">観光振興</a></li>
              <li><a href="/sangyo/kankyo">環境・自然</a></li>
              <li><a href="/sangyo/shigoto">しごと・雇用</a></li>
              <li><a href="/sangyo/kigyoyuchi">企業誘致</a></li>
            </ul>
          </div>
          <div className="footer-nav-col">
            <h4>施設・観光</h4>
            <ul>
              <li><a href="/shisetsu">公共施設一覧</a></li>
              <li><a href="/kanko">観光スポット</a></li>
              <li><a href="/kanko/iju">移住・定住</a></li>
              <li><a href="/kanko/event">イベント情報</a></li>
              <li><a href="/kanko/tokusanhin">特産品</a></li>
              <li><a href="/kanko/access">アクセス</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="footer-info">
          <div className="footer-city-name">日野原市</div>
          <div className="footer-address">
            〒299-1401　千葉県日野原市中央一丁目1番地1号<br />
            市役所代表電話：0439-88-1111（平日 午前8時30分〜午後5時15分）<br />
            FAX：0439-88-1119　　電子メール：info@city.hinohara.lg.jp
          </div>
          <div className="footer-links">
            <a href="/sitemap">サイトマップ</a>
            <a href="/accessibility">アクセシビリティ</a>
            <a href="/privacy">個人情報保護方針</a>
            <a href="/copyright">著作権・リンクについて</a>
            <a href="/inquiry">ご意見・お問い合わせ</a>
            <a href="/disclaimer">免責事項</a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        Copyright © 日野原市 All Rights Reserved.
      </div>
    </footer>
  );
}
