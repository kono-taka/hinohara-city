"use client";
import { usePathname } from "next/navigation";
import { findSection, getSiblings } from "@/lib/sections";

export default function SectionSidebarNav() {
  const pathname = usePathname();
  const section = findSection(pathname);
  if (!section) return null;

  const { current, prev, next } = getSiblings(section, pathname);
  if (current < 0) return null;

  return (
    <div className="sidebar-box">
      <div className="sidebar-title" style={{ borderColor: "var(--city-accent)" }}>
        <a href={section.href} style={{ color: "#fff", textDecoration: "none" }}>
          {section.title}
        </a>
      </div>
      <ul className="sidebar-list">
        {section.pages.map((page, i) => (
          <li key={page.href} style={i === current ? { background: "#eaf4f0" } : {}}>
            <a
              href={page.href}
              style={i === current ? { color: "var(--city-primary)", fontWeight: "bold" } : {}}
            >
              {i === current ? "▶ " : ""}{page.title}
            </a>
          </li>
        ))}
      </ul>
      {(prev || next) && (
        <div style={{
          display: "flex", justifyContent: "space-between",
          padding: "8px 10px", borderTop: "1px solid var(--border-light)",
          gap: 4,
        }}>
          {prev ? (
            <a href={prev.href} style={{ fontSize: 11.5, color: "var(--link-color)", lineHeight: 1.4, flex: 1 }}>
              ← {prev.title}
            </a>
          ) : <span />}
          {next && (
            <a href={next.href} style={{ fontSize: 11.5, color: "var(--link-color)", lineHeight: 1.4, textAlign: "right", flex: 1 }}>
              {next.title} →
            </a>
          )}
        </div>
      )}
    </div>
  );
}
