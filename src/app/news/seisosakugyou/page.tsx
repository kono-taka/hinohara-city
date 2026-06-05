import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "白峰地区 農業用水路 清掃作業への地域住民参加のお願い",
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <div className="main-container">
        <main className="main-content">
          <div className="breadcrumb">
            <a href="/">トップ</a><span>›</span>
            <a href="/news">お知らせ</a><span>›</span>
            <span>白峰地区 農業用水路 清掃作業への地域住民参加のお願い</span>
          </div>

          <div style={{ background: "#f8f8f8", border: "1px solid var(--border-light)", padding: "8px 12px", marginBottom: 12, fontSize: 12, color: "#555", display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <span>発信日：2026年5月20日</span>
            <span>担当課：農林振興課</span>
            <span className="news-tag info" style={{ fontSize: 11 }}>お知らせ</span>
          </div>

          <h1 className="page-title">白峰地区 農業用水路 清掃作業への地域住民参加のお願い</h1>

          <div className="content-box" style={{ fontSize: 13, lineHeight: 1.9 }}>
            <p>
              白峰地区の農業用水路において、毎年恒例の清掃作業を実施します。水路の堆積物や草木を除去し、農業用水の安定供給と周辺環境の保全を図ります。地域の皆様のご参加をお願いいたします。
            </p>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 6 }}>作業概要</h3>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <tbody>
                {[
                  ["作業日時", "令和8年6月7日（日）6:00〜8:00　※雨天の場合は翌8日（月）に順延"],
                  ["作業区域", "白峰地区 白峰川沿い農業用水路 約2.4km"],
                  ["参加対象", "白峰地区在住の方（希望者）"],
                  ["持参品", "長靴・軍手・スコップ（ある方はカマも）"],
                  ["集合場所", "白峰地区コミュニティセンター前（5:50集合）"],
                ].map(([k, v]) => (
                  <tr key={k}>
                    <th style={{ border: "1px solid #ccc", padding: "6px 10px", background: "#f5f5f5", whiteSpace: "nowrap", width: 110, textAlign: "left", fontWeight: "normal" }}>{k}</th>
                    <td style={{ border: "1px solid #ccc", padding: "6px 10px" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 style={{ fontSize: 13, marginTop: 16, marginBottom: 4 }}>注意事項</h3>
            <ul style={{ paddingLeft: 20, margin: "4px 0" }}>
              <li>作業中の傷害保険は市が加入しています。</li>
              <li>飲み物・タオルは各自でご持参ください。</li>
              <li>体調不良の場合は無理をせずご参加をお控えください。</li>
            </ul>
          </div>

          <div style={{ border: "1px solid var(--border-light)", padding: "12px 16px", background: "#f4f8ff", fontSize: 13, lineHeight: 1.8 }}>
            <strong>このページに関するお問い合わせ</strong>
            <p style={{ margin: "6px 0 0" }}>農林振興課　☎ 0100-88-1135（平日 8:30〜17:15）</p>
          </div>
          <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid var(--border-light)" }}>
            <a href="/news" style={{ fontSize: 13, color: "var(--link-color)" }}>← お知らせ・新着情報 一覧に戻る</a>
          </div>
        </main>
        <Sidebar />
      </div>
      <SiteFooter />
    </>
  );
}
