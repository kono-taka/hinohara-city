import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  // 旧 URL（hinohara-city.vercel.app）→ 新 URL（hinohara.city）へ 301 リダイレクト
  if (host.includes("hinohara-city.vercel.app")) {
    const url = new URL(request.url);
    url.host = "hinohara.city";
    url.protocol = "https:";
    return NextResponse.redirect(url.toString(), { status: 301 });
  }

  // www.hinohara.city → hinohara.city へ 301 リダイレクト
  if (host === "www.hinohara.city") {
    const url = new URL(request.url);
    url.host = "hinohara.city";
    return NextResponse.redirect(url.toString(), { status: 301 });
  }
}

export const config = {
  matcher: "/(.*)",
};
