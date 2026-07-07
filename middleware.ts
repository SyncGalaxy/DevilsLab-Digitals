import { NextRequest, NextResponse } from "next/server";

const homeSectionRoutes = [
  "/services",
  "/offers",
  "/work",
  "/who-we-help",
  "/process",
  "/faq",
  "/contact",
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (homeSectionRoutes.includes(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services", "/offers", "/work", "/who-we-help", "/process", "/faq", "/contact"],
};