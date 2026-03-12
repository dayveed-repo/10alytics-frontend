import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const allowedPaths = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.set("clientPagePath", request.nextUrl.pathname);

  // allow public paths
  if (
    allowedPaths.includes(request.nextUrl.pathname) ||
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname.includes("/images")
  ) {
    return NextResponse.next({ headers });
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("apiToken");
  const tokenExp = cookieStore.get("apiTokenExp");

  const tokenExpMs = Number(tokenExp?.value);

  // redirect if token missing or expired
  if (!token?.value || !tokenExpMs || tokenExpMs < Date.now()) {
    return NextResponse.redirect(`${request.nextUrl.origin}/login`);
  }

  return NextResponse.next({ headers });
}

export const config = {
  matcher: [
    // match all routes except static files and APIs
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
