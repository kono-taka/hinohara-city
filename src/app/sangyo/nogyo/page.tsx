import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import PageInfo from "@/components/PageInfo";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "農林業振興" };

export default function NogvoPage() {
  return (
    <>
      <SiteHeader current="/sangyo" />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span><a href="/sangyo">産業・環境</a><span>›</span><span>農林業振興</span>
          </div>
          <h1 className="page-title">農林業振興</h1>

          <div className="content-box">
            <h2 className="section-title">日野原市の農業の概況</h2>
            <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
              <Image
                src="/images/agri/agri-biwa.png"
                alt="ぽんなわびわの収穫"
                width={740}
                height={220}
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
              />
            </div>
            <p>日野原市は千葉県南部内陸地域（房総丘陵中央部）に位置し、温暖な内陸気候を活かした農業が盛んです。令和4年の農業産出額は<strong>38億円</strong>で、県内有数の農業地帯を形成しています。</p>
            <table className="content-table">
              <thead>
                <tr><th>主要農産物</th><th>産出の特徴</th><th>主な出荷先</th></tr>
              </thead>
              <tbody>
                <tr><td>びわ（ぽんなわびわ・房州びわ）</td><td>日野原市旧本縄地区の在来種「ぽんなわびわ」（5月旬・糖度15〜17度・令和4年千葉県地理的表示推奨産品認定）と房州びわ（6月旬）の二本柱</td><td>市場出荷・直売・観光農園・ふるさと納税返礼品</td></tr>
                <tr><td>落花生</td><td>千葉県は全国1位の落花生産地。市内作付面積380ha。収穫期：8〜9月</td><td>農協出荷・道の駅・加工業者</td></tr>
                <tr><td>里芋</td><td>房総の特産。ねっとりした食感が好評。収穫期：9〜11月</td><td>東京都心市場・直売所</td></tr>
                <tr><td>棚田米</td><td>房総丘陵の棚田で栽培されるコシヒカリ一等米。収穫期：9〜10月</td><td>農協出荷・地産地消・棚田オーナー制度</td></tr>
                <tr><td>菜の花</td><td>房総の名物。開花：1〜3月。菜種油への加工も盛ん</td><td>市場出荷・観光・油脂加工</td></tr>
                <tr><td>山菜（わらび・ぜんまい・たけのこ等）</td><td>春（3〜5月）に採取。山間部の里山や農道沿いで採れる。道の駅・直売所での人気商品</td><td>直売所・市場・飲食業者</td></tr>
                <tr><td>きのこ（エリンギ・なめこ・しいたけ等）</td><td>市内の原木栽培農家が生産。秋が旬。干しきのこの加工品も人気</td><td>直売所・飲食業者・通販</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">新規就農支援</h2>
            <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
              <Image
                src="/images/agri/agri-rakkasei.png"
                alt="落花生の収穫体験"
                width={740}
                height={220}
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
              />
            </div>
            <p>農業を始めたい方へ、国・県・市の支援制度を活用した手厚いサポートを行っています。</p>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>農業次世代人材投資資金（経営開始型）</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 50歳未満で新たに農業経営を開始する方</li>
              <li>支給額: <strong>年間最大150万円</strong>（単身・夫婦世帯で異なる）</li>
              <li>支給期間: <strong>最長5年間</strong></li>
              <li>市上乗せ補助: 年10万円（市独自）</li>
            </ul>
            <h3 style={{ fontSize: 14, fontWeight: "bold", margin: "12px 0 6px" }}>農業用機械等購入補助</h3>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>対象: 認定農業者・新規就農者</li>
              <li>補助率: <strong>購入費の1/3</strong></li>
              <li>補助上限: <strong>50万円</strong></li>
              <li>対象品目: トラクター・スピードスプレイヤー・選果機・乾燥機等</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">農産物直売所・道の駅「ひのはら原野」</h2>
            <div style={{ marginBottom: 16, borderRadius: 4, overflow: "hidden", maxHeight: 220, position: "relative" }}>
              <Image
                src="/images/agri/agri-tanada.png"
                alt="房総丘陵の棚田"
                width={740}
                height={220}
                style={{ objectFit: "cover", objectPosition: "center", width: "100%", height: 220 }}
              />
            </div>
            <table className="content-table">
              <tbody>
                <tr><th>所在地</th><td>日野原市原野字上原1234（国道410号線沿い）</td></tr>
                <tr><th>営業時間</th><td>4月〜11月: 9:00〜18:00　12月〜3月: 9:00〜17:00（火曜定休）</td></tr>
                <tr><th>年間来場者数</th><td>約<strong>12万人</strong>（令和5年度実績）</td></tr>
                <tr><th>年間売上</th><td>約<strong>3.8億円</strong>（令和5年度実績）</td></tr>
                <tr><th>出品者数</th><td>市内農家・加工業者 約180者</td></tr>
                <tr><th>電話</th><td>☎0100-58-7700</td></tr>
              </tbody>
            </table>
          </div>

          <div className="content-box">
            <h2 className="section-title">農業委員会</h2>
            <p>農地の売買・賃借・転用に関する許可申請は農業委員会が窓口となります。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li>申請締切: <strong>毎月15日</strong>（農業委員会総会の前月）</li>
              <li>主な業務: 農地転用許可・農地の権利移転許可（農地法第3条・4条・5条）</li>
              <li>農地情報公開: 農業委員会ネットワーク（農地ナビ）で閲覧可能</li>
              <li>担当: 農業委員会事務局（農林振興課内）☎0100-88-1135</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">鳥獣被害対策</h2>
            <p>ニホンジカ・イノシシ・ニホンザル等による農作物被害が年間推計2,000万円規模で発生しています。市では以下の対策を実施しています。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>電気柵設置補助</strong>: 設置費の<strong>50%補助</strong>（上限20万円/件）</li>
              <li><strong>捕獲事業</strong>: 日野原市猟友会との連携による有害鳥獣捕獲（シカ・イノシシ・サル）</li>
              <li><strong>被害報告・相談</strong>: 農林振興課に随時受付</li>
              <li><strong>里地里山整備</strong>: 緩衝帯の刈り払い・遊休農地解消で被害軽減</li>
            </ul>
          </div>

          <div className="content-box">
            <h2 className="section-title">林業振興</h2>
            <p>日野原市の森林面積は市域の約68%（7,800ha）を占めます。市有林の適正な管理と林業の活性化を推進しています。</p>
            <ul style={{ paddingLeft: 18, fontSize: 13, lineHeight: 1.8 }}>
              <li><strong>市有林管理</strong>: 市有林面積約1,200ha。計画的な間伐・主伐を実施</li>
              <li><strong>間伐促進補助</strong>: 私有林の間伐に対し10a当たり最大5万円補助</li>
              <li><strong>森林環境譲与税活用事業</strong>: 令和7年度配分額 約2,800万円。森林整備・木材利用促進・担い手育成に活用</li>
              <li><strong>林業担い手育成</strong>: 林業就業支援資金（機械購入・資格取得費補助）</li>
            </ul>
          </div>

          <div className="content-box" style={{ background: "#f0f4f9", border: "1px solid #c0d0e8" }}>
            <h2 className="section-title">窓口・お問い合わせ</h2>
            <table className="content-table">
              <tbody>
                <tr><th>担当課</th><td>農林振興課（農政係・農業委員会事務局・林務係）</td></tr>
                <tr><th>電話</th><td>☎<strong>0100-88-1135</strong></td></tr>
                <tr><th>FAX</th><td>0100-88-1199</td></tr>
                <tr><th>メール</th><td>nogyo@city.hinohara.lg.jp</td></tr>
                <tr><th>窓口時間</th><td>平日 8:30〜17:15（祝日・年末年始を除く）</td></tr>
              </tbody>
            </table>
          </div>
          <PageInfo department="農林課" division="農政係" tel="0100-88-1143（内線 143）" updated="令和7年4月1日" />
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
