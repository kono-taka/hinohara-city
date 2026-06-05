import SectionSidebarNav from "./SectionSidebarNav";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      {/* セクション内ナビ（自動表示） */}
      <SectionSidebarNav />

      {/* 人口統計 */}
      <div className="sidebar-box">
        <div className="sidebar-title">人口・世帯数</div>
        <div className="population-box">
          <table>
            <tbody>
              <tr><td>総人口</td><td>35,197人</td></tr>
              <tr><td>男性</td><td>17,212人</td></tr>
              <tr><td>女性</td><td>17,985人</td></tr>
              <tr><td>世帯数</td><td>14,499世帯</td></tr>
            </tbody>
          </table>
          <p className="population-note">令和8年6月1日現在（住民基本台帳）</p>
        </div>
      </div>

      {/* よく見られているページ */}
      <div className="sidebar-box">
        <div className="sidebar-title">よく見られているページ</div>
        <ul className="sidebar-list">
          <li><a href="/kurashi/gomi">ごみの出し方・分別</a></li>
          <li><a href="/kurashi/jumin">転入・転出の手続き</a></li>
          <li><a href="/kenko/yobosesshu">予防接種のご案内</a></li>
          <li><a href="/faq">よくある質問（FAQ）</a></li>
          <li><a href="/kurashi/zei">市民税・固定資産税</a></li>
          <li><a href="/shisetsu/shiyakusho">市役所のご案内</a></li>
          <li><a href="/kenko/kosodate/nyusho">保育所の入所申込</a></li>
          <li><a href="/shinsei">申請書類ダウンロード</a></li>
          <li><a href="/kanko/access">市へのアクセス</a></li>
        </ul>
      </div>

      {/* 緊急・防災 */}
      <div className="sidebar-box">
        <div className="sidebar-title" style={{ borderColor: "#c0392b" }}>防災・緊急情報</div>
        <ul className="sidebar-list">
          <li><a href="/bousai/keikai">避難情報・警戒レベル</a></li>
          <li><a href="/kurashi/bousai">ハザードマップ</a></li>
          <li><a href="/kurashi/bousai">避難所一覧</a></li>
          <li><a href="/kurashi/bousai">防災行政無線</a></li>
          <li><a href="/bousai">防災訓練日程</a></li>
        </ul>
      </div>

      {/* 手続きナビ */}
      <div className="sidebar-box">
        <div className="sidebar-title">手続きナビ（ライフイベント別）</div>
        <ul className="sidebar-list">
          <li><a href="/kenko/kosodate">お子さんが生まれたとき</a></li>
          <li><a href="/kurashi/jumin">結婚するとき</a></li>
          <li><a href="/kurashi/jumin">引越しするとき</a></li>
          <li><a href="/kurashi/jumin">亡くなられたとき</a></li>
          <li><a href="/kurashi/jumin">退職するとき</a></li>
        </ul>
      </div>

      {/* 行政キャンペーン */}
      <div className="sidebar-box">
        <div className="sidebar-title" style={{ background: "#5a6476", borderColor: "#8a93a6" }}>行政キャンペーン</div>
        <div>
          <a href="https://www.kojinbango-card.go.jp/" target="_blank" rel="noopener noreferrer" className="campaign-banner campaign-banner-mynumber">
            <strong>マイナンバーカード</strong>
            <small>早めの申請・受取をお願いします</small>
          </a>
          <a href="https://www.jrc.or.jp/donation/blood/" target="_blank" rel="noopener noreferrer" className="campaign-banner campaign-banner-blood">
            <strong>献血にご協力ください</strong>
            <small>あなたの血液が命を救います</small>
          </a>
          <a href="#" className="campaign-banner campaign-banner-traffic">
            <strong>交通安全運動 実施中</strong>
            <small>令和8年 夏の全国交通安全運動</small>
          </a>
          <a href="/sangyo/kankyo" className="campaign-banner campaign-banner-carbon">
            <strong>ゼロカーボンシティ宣言</strong>
            <small>2050年 脱炭素社会の実現へ</small>
          </a>
        </div>
      </div>

      {/* SNS */}
      <div className="sidebar-box">
        <div className="sidebar-title">公式SNS</div>
        <div className="sns-links">
          <a href="https://line.me/R/ti/p/@hinohara_city" target="_blank" rel="noopener noreferrer" className="sns-link line">LINE</a>
          <a href="https://www.instagram.com/hinohara_city_official/" target="_blank" rel="noopener noreferrer" className="sns-link instagram">Instagram</a>
          <a href="https://x.com/hinohara_city" target="_blank" rel="noopener noreferrer" className="sns-link twitter">𝕏（旧Twitter）</a>
          <a href="https://www.youtube.com/@city_hinohara" target="_blank" rel="noopener noreferrer" className="sns-link youtube">YouTube</a>
        </div>
      </div>

      {/* 関連リンク */}
      <div className="sidebar-box">
        <div className="sidebar-title">関連リンク</div>
        <div className="banner-list">
          <a href="https://www.pref.chiba.lg.jp/" target="_blank" rel="noopener noreferrer" className="banner-item">千葉県庁<span className="ext-icon">↗</span></a>
          <a href="https://www.e-tax.nta.go.jp/" target="_blank" rel="noopener noreferrer" className="banner-item">国税庁 e-Tax<span className="ext-icon">↗</span></a>
          <a href="https://myna.go.jp/" target="_blank" rel="noopener noreferrer" className="banner-item">マイナポータル<span className="ext-icon">↗</span></a>
          <a href="/kanko" className="banner-item">日野原市観光協会</a>
          <a href="/kenko/kaigo/chiiki" className="banner-item">日野原市社会福祉協議会</a>
        </div>
      </div>
    </aside>
  );
}
