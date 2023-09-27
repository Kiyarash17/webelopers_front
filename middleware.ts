import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const locale = req.cookies.get("NEXT_LOCALE")?.value || "en";

  return NextResponse.redirect(
    new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
  );
}

export const config = {
  matcher: [],
};
